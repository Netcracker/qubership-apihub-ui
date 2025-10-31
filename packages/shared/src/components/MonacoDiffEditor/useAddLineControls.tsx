import { editor as Editor, Range } from 'monaco-editor'
import type { MutableRefObject } from 'react'
import { useEffect, useRef } from 'react'

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

      console.log('Number of changes:', lineChanges?.length)

      if (!lineChanges) {
        return
      }

      const widgets: Editor.IGlyphMarginWidget[] = []

      // Create a glyph margin widget only for lines in changed fragments
      lineChanges.forEach((change) => {
        // Get the range of modified lines for this change
        const modifiedStartLine = change.modifiedStartLineNumber
        const modifiedEndLine = change.modifiedEndLineNumber

        console.log(`Adding controls for lines ${modifiedStartLine} to ${modifiedEndLine}`)

        // Create a button for each line in the changed fragment
        for (let lineNumber = modifiedStartLine; lineNumber <= modifiedEndLine; lineNumber++) {
          // Create simple HTML button
          const button = document.createElement('button')
          button.textContent = '→'
          button.style.cssText = 'cursor: pointer; border: none; background: none; font-size: 16px; padding: 0; width: 100%; text-align: center;'

          button.onclick = (e) => {
            e.preventDefault()
            e.stopPropagation()
            console.log(`Line control clicked for line ${lineNumber}`)
          }

          const widget: Editor.IGlyphMarginWidget = {
            getId: () => `line-control-${lineNumber}`,
            getDomNode: () => button,
            getPosition: () => ({
              lane: Editor.GlyphMarginLane.Right,
              zIndex: 10,
              range: new Range(lineNumber, 1, lineNumber, 1),
            }),
          }

          modifiedEditor.addGlyphMarginWidget(widget)
          widgets.push(widget)
        }
      })

      console.log(`Total widgets added: ${widgets.length}`)

      widgetsRef.current = widgets
    }

    // Try to add controls immediately
    addLineControls()

    // Subscribe to diff updates to add controls when diff is computed
    disposableRef.current = diffEditor.onDidUpdateDiff(() => {
      console.log('onDidUpdateDiff triggered')
      addLineControls()
    })

    return () => {
      if (disposableRef.current) {
        disposableRef.current.dispose()
      }
    }
  }, [editor])
}
