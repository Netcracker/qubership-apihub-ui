import { editor as Editor, Range } from 'monaco-editor'
import type { MutableRefObject } from 'react'
import { useEffect, useRef } from 'react'

const RawDiffTypes = {
  add: 'add',
  remove: 'remove',
  change: 'change',
}
type RawDiffType = typeof RawDiffTypes[keyof typeof RawDiffTypes]

export function useAddLineControls(
  editor: MutableRefObject<Editor.IStandaloneDiffEditor | undefined>,
): void {
  const widgetsRef = useRef<Editor.IGlyphMarginWidget[]>([])
  const modelIdRef = useRef<string | null>(null)
  const disposableRef = useRef<{ dispose: () => void } | null>(null)

  useEffect(() => {
    if (!editor.current) {
      return
    }

    const diffEditor = editor.current
    const modifiedEditor = diffEditor.getModifiedEditor()
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
      modifiedEditor.removeGlyphMarginWidget(widget)
    })

    widgetsRef.current = []

    // Function to add line controls
    const addLineControls = (): void => {
      // Clean up existing widgets before adding new ones
      widgetsRef.current.forEach((widget) => {
        modifiedEditor.removeGlyphMarginWidget(widget)
      })

      const lineChanges = diffEditor.getLineChanges()

      if (!lineChanges) {
        return
      }

      const widgets: Editor.IGlyphMarginWidget[] = []

      // Create a glyph margin widget only for lines in changed fragments
      lineChanges.forEach((change) => {
        // Get the range of modified lines for this change
        const {
          modifiedStartLineNumber,
          modifiedEndLineNumber,
        } = change

        const diffType: RawDiffType = detectDiffType(change)

        // Create a button for each line in the changed fragment
        for (let lineNumber = modifiedStartLineNumber; lineNumber <= modifiedEndLineNumber; lineNumber++) {
          // Create simple HTML button
          const button = document.createElement('button')
          button.textContent = '→'
          button.style.cssText = 'cursor: pointer; border: none; background: none; font-size: 16px; padding: 0; width: 100%; text-align: center;'

          button.onclick = (e) => {
            e.preventDefault()
            e.stopPropagation()
            console.log('Reverting change:', change)
            const originalValue = diffEditor.getModel()?.original.getValue()
            const modifiedValue = diffEditor.getModel()?.modified.getValue()
            if (originalValue && modifiedValue) {
              const revertedValue = revertChange(originalValue, modifiedValue, change)
              console.log('Spec after reverting change:', revertedValue)
            }
          }

          let range: Range
          if (diffType === RawDiffTypes.add) {
            range = new Range(lineNumber, 1, modifiedEndLineNumber, 1)
            lineNumber += modifiedEndLineNumber - lineNumber + 1
          } else {
            range = new Range(lineNumber, 1, lineNumber, 1)
          }

          const widget: Editor.IGlyphMarginWidget = {
            getId: () => `line-control-${lineNumber}`,
            getDomNode: () => button,
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
  }, [editor])
}

/**
 * Receives original and modified values and a change and returns modified value with reverted change
 * @param originalValue Original value
 * @param modifiedValue Modified value
 * @param change MonacoEditor line change
 * @returns Modified value with reverted change
 */
function revertChange(
  originalValue: string,
  modifiedValue: string,
  change: Editor.ILineChange,
): string {
  const originalLines = originalValue.split('\n')
  const modifiedLines = modifiedValue.split('\n')

  const diffType: RawDiffType = detectDiffType(change)

  if (diffType === RawDiffTypes.change || diffType === RawDiffTypes.remove) {
    const pickedOriginalLines = originalLines.slice(change.originalStartLineNumber - 1, change.originalEndLineNumber)
    const updatedModifiedLines = [...modifiedLines]
    updatedModifiedLines.splice(change.modifiedStartLineNumber - 1, 0, ...pickedOriginalLines)
    return updatedModifiedLines.join('\n')
  }

  if (diffType === RawDiffTypes.add) {
    const updatedModifiedLines = modifiedLines.filter(
      (_, index) => index < change.modifiedStartLineNumber - 1 || index > change.modifiedEndLineNumber - 1,
    )
    return updatedModifiedLines.join('\n')
  }

  return ''
}

/**
 * Detects diff type from MonacoEditor line change
 * Variants:
 * - change: The line has been changed
 * - add: The line(s) has(ve) been added
 * - remove: The line(s) has(ve) been removed
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

  const modifiedRange = modifiedEndLineNumber - modifiedStartLineNumber
  const originalRange = originalEndLineNumber - originalStartLineNumber
  if (modifiedRange === originalRange) {
    return RawDiffTypes.change
  }
  return modifiedRange > originalRange
    ? RawDiffTypes.add
    : RawDiffTypes.remove
}
