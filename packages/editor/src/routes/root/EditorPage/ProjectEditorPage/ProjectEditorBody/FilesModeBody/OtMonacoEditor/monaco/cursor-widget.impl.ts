/**
 * Copyright © 2021 Progyan Bhattacharya
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * See LICENSE file in the root directory for more details.
 */

/* eslint-disable */

import * as monaco from 'monaco-editor'
import type { IDisposable, IDisposableCollection } from '../monaco-types'
import { createTooltipNode, createWidgetNode, Disposable, DisposableCollection } from '../utils'
import type { ICursorWidget, TCursorWidgetConstructionOptions } from './cursor-widget'

/**
 * Set of Disposable instances.
 */
const disposables = new DisposableCollection()

/**
 * Map of Client Id to Cursor Widgets.
 */
const widgets: Map<string, ICursorWidget> = new Map()

/**
 * @internal
 * Cursor Widget - To show tooltip like UI with Username beside Cursor.
 * @param constructorOptions - Constructor options for Cursor Widget.
 */
class CursorWidget implements ICursorWidget {
  protected readonly _toDispose: IDisposableCollection =
    new DisposableCollection()

  protected readonly _id: string
  protected readonly _duration: number
  protected readonly _tooltipClass: string
  protected readonly _widgetClass: string
  protected _editor: monaco.editor.IStandaloneCodeEditor

  protected _content: string
  protected _disposed = false
  protected _position: monaco.editor.IContentWidgetPosition | null = null
  protected _range: monaco.Range
  protected _timer: NodeJS.Timeout | null = null
  protected _tooltipNode!: HTMLElement
  protected _widgetNode!: HTMLElement

  constructor({
    clientId,
    className,
    duration,
    editor,
    range,
    userName,
  }: TCursorWidgetConstructionOptions) {
    this._id = clientId
    this._range = range
    this._editor = editor
    this._content = userName ?? clientId
    this._duration = duration
    this._tooltipClass = `${className}-tooltip`
    this._widgetClass = `monaco-editor-overlaymessage ${className}-widget`

    this._init()
  }

  /**
   * Created DOM nodes required and binds them as Content Widget to the editor.
   */
  protected async _init(): Promise<void> {
    this._tooltipNode = await createTooltipNode({
      className: this._tooltipClass,
      textContent: this._content,
    })
    this._widgetNode = await createWidgetNode({
      className: this._widgetClass,
      childElement: this._tooltipNode,
    })

    this._toDispose.push(
      this._editor.onDidScrollChange(() => {
        this._updateTooltipPosition()
      }),
    )

    this._updateWidgetPosition()
    this._editor.addContentWidget(this)
  }

  dispose(): void {
    /* istanbul ignore if */
    if (this._disposed === true) {
      return
    }

    this._cleanupTimer()
    this._editor.removeContentWidget(this)
    this._toDispose.dispose()

    // @ts-expect-error
    this._tooltipNode = null

    // @ts-expect-error
    this._widgetNode = null

    // @ts-expect-error
    this._editor = null
    this._position = null

    this._disposed = true
  }

  getId(): string {
    return this._id
  }

  getDomNode(): HTMLElement {
    return this._widgetNode
  }

  getPosition(): monaco.editor.IContentWidgetPosition | null {
    return this._position
  }

  updateRange(range: monaco.Range): void {
    if (this._range.equalsRange(range)) {
      return
    }

    this._range = range
    this._updateWidgetPosition()
  }

  updateUserName(userName: string): void {
    /* istanbul ignore else */
    if (this._content === userName || !this._tooltipNode) {
      return
    }

    this._tooltipNode.textContent = userName
    this._content = userName
  }

  /**
   * Removes any pending timer.
   */
  protected _cleanupTimer(): void {
    /* istanbul ignore if */
    if (this._timer != null) {
      clearTimeout(this._timer)
      this._timer = null
    }
  }

  /**
   * Sets up timer to hide Tooltip message.
   */
  protected _setupTimer(): void {
    /* istanbul ignore else */
    if (!Number.isFinite(this._duration)) {
      return
    }

    this._timer = setTimeout(
      /* istanbul ignore next */ () => {
        this._hideTooltip()
        this._timer = null
      },
      this._duration,
    )
  }

  /**
   * Make the tooltip reappear.
   */
  protected _showTooltip(): void {
    if (this._tooltipNode) {
      this._tooltipNode.style.display = 'block'
    }
  }

  /* istanbul ignore next */
  /**
   * Make the tooltip disappear.
   */
  protected _hideTooltip(): void {
    if (this._tooltipNode) {
      this._tooltipNode.style.display = 'none'
    }
  }

  /**
   * Change position of the tooltip.
   */
  protected _updateTooltipPosition(): void {
    const distanceFromTop =
      this._widgetNode.offsetTop - this._editor.getScrollTop()

    this._tooltipNode.style.top =
      distanceFromTop - this._tooltipNode.offsetHeight < 5
        ? `${this._tooltipNode.offsetHeight}px`
        : `-${this._tooltipNode.offsetHeight}px`

    this._tooltipNode.style.left = '0'
  }

  /**
   * Update position of the overall Widget.
   * @param range - Range of the Cursor/Selection in the editor.
   */
  protected _updateWidgetPosition(): void {
    this._position = {
      position: this._range.getEndPosition(),
      preference: [
        monaco.editor.ContentWidgetPositionPreference.ABOVE,
        monaco.editor.ContentWidgetPositionPreference.BELOW,
      ],
    }

    this._editor.layoutContentWidget(this)
    this._showTooltip()
    this._setupTimer()
  }
}

/**
 * @internal
 * Returns a Disposable instance for cleanup.
 * @param options - Contruction Options for the Cursor Widget.
 */
export function createCursorWidget(
  options: TCursorWidgetConstructionOptions,
): void {
  const { clientId, range, userName } = options

  const pastWidget = widgets.get(clientId)

  if (pastWidget != null) {
    pastWidget.updateRange(range)
    pastWidget.updateUserName(userName ?? clientId)
    return
  }

  const widget = new CursorWidget(options)

  disposables.push(widget)
  widgets.set(clientId, widget)
}

/**
 * @internal
 * Returns a Disposable instance to clean up all the Cursor Widgets.
 */
export function disposeCursorWidgets(): IDisposable {
  return Disposable.create(() => {
    widgets.clear()
    disposables.dispose()
  })
}

// TODO: This method was added to dispose the name badge when user disconnects
export function disposeCursorWidget(clientId: string): void {
  widgets.get(clientId)?.dispose()
}
