import { useMemo } from 'react'
import type { OriginalDocumentFileFormat } from '../types'
import { transformRawDocumentByFormat } from './transformers'

export function useTransformedRawDocumentByFormat(
  value: string,
  format: OriginalDocumentFileFormat,
): string {
  return useMemo(
    () => transformRawDocumentByFormat(value, format),
    [value, format],
  )
}
