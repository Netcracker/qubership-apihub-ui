/**
 * Copyright 2024-2025 NetCracker Technology Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { RefObject } from 'react'
import { useEffect, useRef, useState } from 'react'
import { editor as Editor, Range } from 'monaco-editor'
import { useEffectOnce } from 'react-use'
import type { SpecType } from '../../utils/specs'
import type { LanguageType } from '../../types/languages'
import { LANGUAGE_TYPE_TEXT } from '../../types/languages'
import type { SpecItemUri } from '../../utils/specifications'
import { findPathLocation } from '../../utils/specifications'
import { useAddLineControls } from './useAddLineControls'

type EditorViewportSnapshot = {
  scrollTop: number
  firstVisibleLine?: number
}

export function useMonacoDiffEditorElement(options: {
  before: string
  after: string
  type: SpecType
  language?: LanguageType
  selectedUri?: SpecItemUri
}): RefObject<HTMLDivElement> {
  const { before, after, type, language = LANGUAGE_TYPE_TEXT, selectedUri } = options

  const ref = useRef<HTMLDivElement>(null)
  const editor = useRef<Editor.IStandaloneDiffEditor>()

  const [revertedChange, setRevertedChange] = useState<Editor.ILineChange | undefined>(undefined)
  const [viewSnapshot, setViewSnapshot] = useState<EditorViewportSnapshot | undefined>(undefined)

  useEffectOnce(() => {
    Editor.defineTheme('custom', {
      base: 'vs',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#FFFFFF',
      },
    })

    editor.current = Editor.createDiffEditor(ref.current!, {
      minimap: { enabled: true },
      hover: { above: false },
      automaticLayout: true,
      readOnly: true,
      wordWrap: 'on',
      glyphMargin: true,
      theme: 'custom',
    })

    return () => {
      try {
        editor.current?.setModel(null)
      } catch (_) {
        // editor might already be disposed; ignore
      }
      editor.current?.dispose()
      // prevent future calls on a disposed instance
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      editor.current = undefined
    }
  })

  useEffect(() => {
    //todo resolve problem with load schema model by filename (like in useSetEditorModel)
    const originalModel = Editor.createModel(before, language)
    const modifiedModel = Editor.createModel(after, language)

    editor.current?.setModel({
      original: originalModel,
      modified: modifiedModel,
    })

    if (revertedChange) {
      // If we have a pre-revert viewport snapshot, restore it; otherwise, navigate to the change
      if (viewSnapshot) {
        restoreView(editor.current!, viewSnapshot)
      } else {
        const startLine = revertedChange.modifiedStartLineNumber
        startLine !== undefined && navigateTo(editor.current!, startLine)
      }
    }

    return () => {
      const { current } = editor
      const currentModel = current?.getModel()

      // Detach only if the editor still uses the models created by this render
      if (
        current &&
        currentModel &&
        currentModel.original === originalModel &&
        currentModel.modified === modifiedModel
      ) {
        try {
          current.setModel(null)
        } catch (_) {
          // editor may have been disposed concurrently; ignore
        }
      }

      originalModel.dispose()
      modifiedModel.dispose()
    }
  }, [editor, before, after, language, type, revertedChange, viewSnapshot])

  useAddLineControls(editor, setRevertedChange, setViewSnapshot)

  useEffect(() => {
    const content = editor.current?.getModel()?.modified.getValue()
    if (content && selectedUri) {
      const location = findPathLocation(content, selectedUri)
      const startLine = location?.range.start.line
      startLine !== undefined && navigateTo(editor.current!, startLine + 1)
    }
  }, [selectedUri])

  return ref
}

function navigateTo(
  editor: Editor.IStandaloneDiffEditor,
  lineNumber: number,
): void {
  const modifiedEditor = editor.getModifiedEditor()

  // Keep navigation resilient during a short stabilization window
  const stabilizeMs = 300
  const endTime = Date.now() + stabilizeMs
  let lastApply = 0
  const applyIntervalMs = 30
  const applyNavigate = (): void => {
    const now = Date.now()
    if (now - lastApply < applyIntervalMs) return
    lastApply = now
    const targetRange = new Range(lineNumber, 1, lineNumber, 1)
    modifiedEditor.revealRangeNearTop(targetRange, Editor.ScrollType.Smooth)
    modifiedEditor.setSelection(targetRange)
    modifiedEditor.focus()
  }

  // Try immediately if models are ready
  const model = modifiedEditor.getModel()
  if (model) {
    // Schedule to the next frame to wait for layout after model swap
    requestAnimationFrame(() => {
      applyNavigate()
    })
  }

  // Also listen for diff update/layout as a robust fallback (fires after model attach/layout)
  const disposables: { dispose: () => void }[] = []
  const disposeAll = (): void => {
    disposables.forEach(d => {
      try {
        d.dispose()
      } catch (_) {
        // ignore
      }
    })
  }

  disposables.push(
    editor.onDidUpdateDiff(() => {
      applyNavigate()
      if (Date.now() > endTime) disposeAll()
    }),
  )

  disposables.push(
    modifiedEditor.onDidLayoutChange(() => {
      applyNavigate()
      if (Date.now() > endTime) disposeAll()
    }),
  )

  // Also react to unexpected scroll resets during stabilization
  disposables.push(
    modifiedEditor.onDidScrollChange(() => {
      applyNavigate()
      if (Date.now() > endTime) disposeAll()
    }),
  )

  // Final timer-based fallback in case neither event fires (e.g., no diff)
  setTimeout(() => {
    applyNavigate()
    if (Date.now() > endTime) disposeAll()
  }, 50)

  // Robustness: retry a few times until the line is actually visible
  let attemptsRemaining = 3
  const tryEnsureVisible = (): void => {
    const ranges = modifiedEditor.getVisibleRanges()
    const isVisible = ranges.some(r => r.startLineNumber <= lineNumber && r.endLineNumber >= lineNumber)
    const scrolled = modifiedEditor.getScrollTop() > 0 || lineNumber === 1
    if (isVisible || scrolled || attemptsRemaining <= 0) return
    attemptsRemaining -= 1
    setTimeout(() => {
      const targetRange = new Range(lineNumber, 1, lineNumber, 1)
      modifiedEditor.revealRangeNearTop(targetRange, Editor.ScrollType.Smooth)
      requestAnimationFrame(tryEnsureVisible)
    }, 60)
  }
  requestAnimationFrame(tryEnsureVisible)
}

function restoreView(
  editor: Editor.IStandaloneDiffEditor,
  snapshot: { scrollTop: number; firstVisibleLine?: number },
): void {
  const modifiedEditor = editor.getModifiedEditor()

  const stabilizeMs = 300
  const endTime = Date.now() + stabilizeMs
  let lastApply = 0
  const applyIntervalMs = 30

  const applyRestore = (): void => {
    const now = Date.now()
    if (now - lastApply < applyIntervalMs) return
    lastApply = now
    // Directly restore the exact scroll position
    modifiedEditor.setScrollTop(snapshot.scrollTop, Editor.ScrollType.Immediate)
  }

  const disposables: { dispose: () => void }[] = []
  const disposeAll = (): void => {
    disposables.forEach(d => {
      try {
        d.dispose()
      } catch (_) {
        // ignore
      }
    })
  }

  requestAnimationFrame(applyRestore)

  disposables.push(
    editor.onDidUpdateDiff(() => {
      applyRestore()
      if (Date.now() > endTime) disposeAll()
    }),
  )
  disposables.push(
    modifiedEditor.onDidLayoutChange(() => {
      applyRestore()
      if (Date.now() > endTime) disposeAll()
    }),
  )
  disposables.push(
    modifiedEditor.onDidScrollChange(() => {
      // Keep the previous viewport during stabilization
      applyRestore()
      if (Date.now() > endTime) disposeAll()
    }),
  )

  setTimeout(() => {
    applyRestore()
    if (Date.now() > endTime) disposeAll()
  }, 50)
}
