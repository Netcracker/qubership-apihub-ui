import { editor as Editor, Range } from 'monaco-editor'
import type { Dispatch, MutableRefObject, SetStateAction } from 'react'
import { useEffect, useRef } from 'react'
import { useParams } from 'react-router'
import type { RevertChangeInAiEnhancedPackageVersionMutationFn } from '../../entities/ai-agent'

const RawDiffTypes = {
  add: 'add',
  remove: 'remove',
  change: 'change',
}
type RawDiffType = typeof RawDiffTypes[keyof typeof RawDiffTypes]

export function useAddLineControls(
  editor: MutableRefObject<Editor.IStandaloneDiffEditor | undefined>,
  setRevertedChange: Dispatch<SetStateAction<Editor.ILineChange | undefined>>,
  setViewSnapshot?: Dispatch<SetStateAction<{ scrollTop: number; firstVisibleLine?: number } | undefined>>,
  saveRevertChange?: RevertChangeInAiEnhancedPackageVersionMutationFn,
): void {
  const { packageId, versionId, documentId } = useParams()

  const widgetsRef = useRef<Editor.IGlyphMarginWidget[]>([])
  const modelIdRef = useRef<string | null>(null)
  const disposableRef = useRef<{ dispose: () => void } | null>(null)

  useEffect(() => {
    if (!editor.current) {
      return
    }

    const diffEditor = editor.current
    const modifiedEditor = diffEditor.getModifiedEditor()
    const originalEditor = diffEditor.getOriginalEditor()
    const model = diffEditor.getModel()

    if (!model) {
      return
    }

    const currentModelId = model.modified.uri.toString()

    // Only create widgets if model changed
    if (modelIdRef.current === currentModelId) {
      return
    }

    modelIdRef.current = currentModelId

    // Cleanup previous subscription and widgets
    if (disposableRef.current) {
      disposableRef.current.dispose()
    }

    const currentWidgets = widgetsRef.current

    currentWidgets.forEach((widget) => {
      // Remove from both editors
      try {
        modifiedEditor.removeGlyphMarginWidget(widget)
      } catch (_) {
        // Widget might not exist in this editor
      }
      try {
        originalEditor.removeGlyphMarginWidget(widget)
      } catch (_) {
        // Widget might not exist in this editor
      }
    })

    widgetsRef.current = []

    // Function to add line controls
    const addLineControls = (): void => {
      // Clean up existing widgets before adding new ones
      widgetsRef.current.forEach((widget) => {
        try {
          modifiedEditor.removeGlyphMarginWidget(widget)
        } catch (_) {
          // Widget might not exist in this editor
        }
        try {
          originalEditor.removeGlyphMarginWidget(widget)
        } catch (_) {
          // Widget might not exist in this editor
        }
      })

      const lineChanges = diffEditor.getLineChanges()

      if (!lineChanges) {
        return
      }

      const widgets: Editor.IGlyphMarginWidget[] = []

      // Create a glyph margin widget only for lines in changed fragments
      lineChanges.forEach((change) => {
        // Get the range of lines for this change
        const {
          originalStartLineNumber,
          originalEndLineNumber,
          modifiedStartLineNumber,
          modifiedEndLineNumber,
        } = change

        const diffType: RawDiffType = detectDiffType(change)

        // Create button helper function
        const createButton = (): HTMLButtonElement => {
          const button = document.createElement('button')
          button.className = 'monaco-diff-revert-button'
          button.innerHTML = '<svg viewBox="0 0 14 14" width="14" height="14" style="margin: 0 4px;"><path d="M4.37934 0.21934C4.51979 0.359965 4.59868 0.550589 4.59868 0.74934C4.59868 0.948091 4.51979 1.13871 4.37934 1.27934L2.55934 3.09934H7.79934C8.51504 3.09934 9.22374 3.24031 9.88496 3.5142C10.5462 3.78808 11.147 4.18953 11.6531 4.69561C12.1592 5.20169 12.5606 5.80249 12.8345 6.46372C13.1084 7.12494 13.2493 7.83364 13.2493 8.54934C13.2493 9.26504 13.1084 9.97374 12.8345 10.635C12.5606 11.2962 12.1592 11.897 11.6531 12.4031C11.147 12.9092 10.5462 13.3106 9.88496 13.5845C9.22374 13.8584 8.51504 13.9993 7.79934 13.9993H3.14934C2.95043 13.9993 2.75966 13.9203 2.61901 13.7797C2.47836 13.639 2.39934 13.4483 2.39934 13.2493C2.39934 13.0504 2.47836 12.8597 2.61901 12.719C2.75966 12.5784 2.95043 12.4993 3.14934 12.4993H7.79934C8.84695 12.4993 9.85164 12.0832 10.5924 11.3424C11.3332 10.6016 11.7493 9.59695 11.7493 8.54934C11.7493 7.50174 11.3332 6.49704 10.5924 5.75627C9.85164 5.0155 8.84695 4.59934 7.79934 4.59934H2.55934L4.37934 6.41934C4.51182 6.56151 4.58394 6.74956 4.58051 6.94386C4.57709 7.13816 4.49837 7.32355 4.36096 7.46096C4.22355 7.59838 4.03816 7.67709 3.84386 7.68052C3.64956 7.68394 3.46152 7.61182 3.31934 7.47934L0.21934 4.37934C0.0788896 4.23871 0 4.04809 0 3.84934C0 3.65059 0.0788896 3.45997 0.21934 3.31934L3.31934 0.21934C3.45997 0.0788896 3.65059 0 3.84934 0C4.04809 0 4.23871 0.0788896 4.37934 0.21934Z"/></svg>'
          button.style.cssText = 'cursor: pointer; border: none; background: none; padding: 0; width: 100%; text-align: center; display: flex; align-items: center; justify-content: center;'

          button.onclick = (e) => {
            e.preventDefault()
            e.stopPropagation()
            // Capture current viewport state before triggering revert
            try {
              const currentRanges = modifiedEditor.getVisibleRanges()
              const firstVisibleLine = currentRanges?.[0]?.startLineNumber
              const scrollTop = modifiedEditor.getScrollTop()
              setViewSnapshot?.({ scrollTop, firstVisibleLine })
            } catch (_) {
              // ignore snapshot errors
            }
            const originalValue = diffEditor.getModel()?.original.getValue()
            const modifiedValue = diffEditor.getModel()?.modified.getValue()
            if (originalValue && modifiedValue) {
              const valueWithRevertedChange = revertChangeLocally(originalValue, modifiedValue, change)
              saveRevertChange?.({
                packageId: packageId ?? '',
                version: versionId ?? '',
                slug: documentId ?? '',
                content: valueWithRevertedChange,
              })
              setRevertedChange(change)
            }
          }

          return button
        }

        // Place one widget per change at the first line
        if (diffType === RawDiffTypes.remove) {
          // For remove: place widget on the ORIGINAL editor at the first removed line
          const lineNumber = originalStartLineNumber
          const range = new Range(lineNumber, 1, lineNumber, 1)

          const widget: Editor.IGlyphMarginWidget = {
            getId: () => `line-control-remove-${originalStartLineNumber}-${originalEndLineNumber}`,
            getDomNode: createButton,
            getPosition: () => ({
              lane: Editor.GlyphMarginLane.Right,
              zIndex: 10,
              range: range,
            }),
          }

          originalEditor.addGlyphMarginWidget(widget)
          widgets.push(widget)
        } else if (diffType === RawDiffTypes.add) {
          // For add: place widget on the MODIFIED editor at the first added line
          const lineNumber = modifiedStartLineNumber
          const range = new Range(lineNumber, 1, lineNumber, 1)

          const widget: Editor.IGlyphMarginWidget = {
            getId: () => `line-control-add-${modifiedStartLineNumber}-${modifiedEndLineNumber}`,
            getDomNode: createButton,
            getPosition: () => ({
              lane: Editor.GlyphMarginLane.Right,
              zIndex: 10,
              range: range,
            }),
          }

          modifiedEditor.addGlyphMarginWidget(widget)
          widgets.push(widget)
        } else if (diffType === RawDiffTypes.change) {
          // For change: place widget on the MODIFIED editor at the first changed line
          const lineNumber = modifiedStartLineNumber
          const range = new Range(lineNumber, 1, lineNumber, 1)

          const widget: Editor.IGlyphMarginWidget = {
            getId: () => `line-control-change-${modifiedStartLineNumber}-${modifiedEndLineNumber}`,
            getDomNode: createButton,
            getPosition: () => ({
              lane: Editor.GlyphMarginLane.Right,
              zIndex: 10,
              range: range,
            }),
          }

          modifiedEditor.addGlyphMarginWidget(widget)
          widgets.push(widget)
        }
      })

      widgetsRef.current = widgets
    }

    // Try to add controls immediately
    addLineControls()

    // Subscribe to diff updates to add controls when diff is computed
    disposableRef.current = diffEditor.onDidUpdateDiff(() => { addLineControls() })

    return () => { disposableRef.current?.dispose() }
  }, [documentId, editor, packageId, saveRevertChange, setRevertedChange, setViewSnapshot, versionId])
}

/**
 * Receives original and modified values and a change and returns modified value with reverted change
 * Logic:
 * - add: Remove added lines from modifiedValue
 * - remove: Insert removed lines from originalValue back into modifiedValue
 * - change: Replace changed lines in modifiedValue with lines from originalValue
 * @param originalValue Original value
 * @param modifiedValue Modified value
 * @param change MonacoEditor line change
 * @returns Modified value with reverted change
 */
function revertChangeLocally(
  originalValue: string,
  modifiedValue: string,
  change: Editor.ILineChange,
): string {
  const originalLines = originalValue.split('\n')
  const modifiedLines = modifiedValue.split('\n')

  const diffType: RawDiffType = detectDiffType(change)

  if (diffType === RawDiffTypes.add) {
    // Remove added lines from modifiedValue
    const updatedModifiedLines = [...modifiedLines]
    const linesToRemove = change.modifiedEndLineNumber - change.modifiedStartLineNumber + 1
    updatedModifiedLines.splice(change.modifiedStartLineNumber - 1, linesToRemove)
    return updatedModifiedLines.join('\n')
  }

  if (diffType === RawDiffTypes.remove) {
    // Insert removed lines from originalValue back into modifiedValue
    const pickedOriginalLines = originalLines.slice(
      change.originalStartLineNumber - 1,
      change.originalEndLineNumber,
    )
    const updatedModifiedLines = [...modifiedLines]
    // Insert at the position where the deletion occurred in the modified editor
    updatedModifiedLines.splice(change.originalStartLineNumber - 1, 0, ...pickedOriginalLines)
    return updatedModifiedLines.join('\n')
  }

  if (diffType === RawDiffTypes.change) {
    // Replace changed lines in modifiedValue with original lines
    const pickedOriginalLines = originalLines.slice(
      change.originalStartLineNumber - 1,
      change.originalEndLineNumber,
    )
    const updatedModifiedLines = [...modifiedLines]
    const linesToReplace = change.modifiedEndLineNumber - change.modifiedStartLineNumber + 1
    updatedModifiedLines.splice(change.modifiedStartLineNumber - 1, linesToReplace, ...pickedOriginalLines)
    return updatedModifiedLines.join('\n')
  }

  return ''
}

/**
 * Detects diff type from MonacoEditor line change
 * Variants:
 * - add: The line(s) has(ve) been added (no lines in original editor)
 * - remove: The line(s) has(ve) been removed (no lines in modified editor)
 * - change: The line has been changed (lines exist in both editors)
 * @param change MonacoEditor line change
 * @returns Diff type
 */
function detectDiffType(change: Editor.ILineChange): RawDiffType {
  const {
    originalStartLineNumber,
    originalEndLineNumber,
    modifiedStartLineNumber,
    modifiedEndLineNumber,
  } = change

  // Check if no lines in original editor (pure addition)
  const hasOriginalLines = originalEndLineNumber >= originalStartLineNumber && originalStartLineNumber > 0

  // Check if no lines in modified editor (pure removal)
  const hasModifiedLines = modifiedEndLineNumber >= modifiedStartLineNumber && modifiedStartLineNumber > 0

  if (!hasOriginalLines) {
    return RawDiffTypes.add
  }

  if (!hasModifiedLines) {
    return RawDiffTypes.remove
  }

  return RawDiffTypes.change
}
