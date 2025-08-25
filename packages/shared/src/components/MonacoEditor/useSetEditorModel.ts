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

import { editor as Editor, MarkerSeverity, Uri } from 'monaco-editor'
import type { MutableRefObject } from 'react'
import { useEffect } from 'react'
import type { LanguageType } from '../../types/languages'
import type { SpecType } from '../../utils/specs'

export function useSetEditorModel(
  editor: MutableRefObject<Editor.IStandaloneCodeEditor | undefined>,
  value: string,
  type: SpecType,
  language?: LanguageType,
): void {
  const filename = `${type}/*.${language}`

  useEffect(() => {
    const currentEditor = editor.current
    if (!currentEditor) {
      return
    }

    console.log('filename', filename)
    // const model = Editor.createModel(value, language, Uri.parse(filename))
    const model = currentEditor.getModel()
    currentEditor.setModel(model)

    model && Editor.setModelMarkers(model, 'owner', [
      {
        startLineNumber: 2,
        startColumn: 1,
        endLineNumber: 2,
        endColumn: 4,
        message: 'Error msg',
        severity: MarkerSeverity.Error,
        tags: [],
        source: 'my-linter',
      },
      {
        startLineNumber: 3,
        startColumn: 1,
        endLineNumber: 7,
        endColumn: 4,
        message: 'Warning msg',
        severity: MarkerSeverity.Warning,
        tags: [],
        source: 'my-linter',
      },
      {
        startLineNumber: 8,
        startColumn: 1,
        endLineNumber: 10,
        endColumn: 4,
        message: 'Info msg',
        severity: MarkerSeverity.Info,
        tags: [],
        source: 'my-linter',
      },
      {
        startLineNumber: 11,
        startColumn: 1,
        endLineNumber: 11,
        endColumn: 7,
        message: 'Hint msg',
        severity: MarkerSeverity.Hint,
        tags: [],
        source: 'my-linter',
      },
      {
        startLineNumber: 12,
        startColumn: 1,
        endLineNumber: 15,
        endColumn: 14,
        message: 'Error msg',
        severity: MarkerSeverity.Error,
        tags: [],
        source: 'my-linter',
      },
      {
        startLineNumber: 13,
        startColumn: 1,
        endLineNumber: 14,
        endColumn: 4,
        message: 'Warning msg',
        severity: MarkerSeverity.Warning,
        tags: [],
        source: 'my-linter',
      },
    ])

    return () => {
      currentEditor.getModel()?.dispose()
      currentEditor.getModel()?.dispose()
    }
  }, [editor, value, language, filename])
}
