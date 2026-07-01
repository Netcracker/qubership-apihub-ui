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

import type { FC } from 'react'
import { memo, useEffect, useId, useRef, useState } from 'react'

type MermaidDiagramProps = {
  value: string
}

const MermaidDiagram: FC<MermaidDiagramProps> = memo(({ value }) => {
  const rawId = useId()
  const diagramId = `mermaid-${rawId.replace(/:/g, '')}`
  const containerRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    import('mermaid').then(({ default: mermaid }) => {
      mermaid.initialize({ startOnLoad: false, theme: 'default' })

      mermaid.render(diagramId, value)
        .then(({ svg }) => {
          if (!cancelled && containerRef.current) {
            containerRef.current.innerHTML = svg
            setError(null)
          }
        })
        .catch((err: unknown) => {
          if (!cancelled) {
            setError(String(err))
          }
        })
    })

    return () => {
      cancelled = true
    }
  }, [diagramId, value])

  if (error !== null) {
    return <pre><code>{value}</code></pre>
  }

  return <div ref={containerRef} />
})

MermaidDiagram.displayName = 'MermaidDiagram'

export { MermaidDiagram }
