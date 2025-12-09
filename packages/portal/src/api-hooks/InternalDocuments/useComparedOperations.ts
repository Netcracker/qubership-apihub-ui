import type { VersionKey } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import { isRestOperation, type OperationData } from '@netcracker/qubership-apihub-ui-shared/entities/operations'

import { INTERNAL_DOCUMENT_STRING_SYMBOL_MAPPING } from '@apihub/utils/internal-documents/constants'
import { isGraphApiSpecification, isOpenApiSpecification } from '@apihub/utils/internal-documents/type-guards'
import { DIFF_META_KEY } from '@netcracker/qubership-apihub-api-diff'
import { GRAPHQL_API_TYPE, REST_API_TYPE } from '@netcracker/qubership-apihub-api-processor'
import { deserialize } from '@netcracker/qubership-apihub-api-unifier'
import type { ApiType } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import type { PackageKey } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import type { VersionChanges } from '@netcracker/qubership-apihub-ui-shared/entities/version-changelog'
import { isObject } from '@netcracker/qubership-apihub-ui-shared/utils/objects'
import type { OpenAPIV3 } from 'openapi-types'
import { useMemo } from 'react'
import { useComparisonInternalDocumentContent } from './useComparisonInternalDocumentContent'
import { useComparisonInternalDocumentsByPackageVersion } from './useComparisonInternalDocumentsByPackageVersion'
import type { QueryResult } from './useInternalDocumentsByPackageVersion'

type Options = {
  previousOperation: OperationData | undefined
  currentOperation: OperationData | undefined
  versionChanges: VersionChanges | undefined
  currentPackageId: PackageKey | undefined
  currentVersionId: VersionKey | undefined
}

function createMatcherArbitraryCurrentOperationPathWithCurrentOperationPath(
  apiType: ApiType,
  expectedOperationPathPattern: string,
): (arbitraryOperationPath: string) => boolean {
  const expectedOperationPathPatternSections = expectedOperationPathPattern.split('/')
  return (arbitraryOperationPath: string) => {
    const arbitraryOperationPathSections = arbitraryOperationPath.split('/')
    switch (apiType) {
      case REST_API_TYPE:
        if (arbitraryOperationPathSections.length !== expectedOperationPathPatternSections.length) {
          return false
        }
        for (let i = 0; i < arbitraryOperationPathSections.length; i++) {
          const actualPathSection = arbitraryOperationPathSections[i]
          const expectPathPatternSection = expectedOperationPathPatternSections[i]
          if (expectPathPatternSection !== '*' && actualPathSection !== expectPathPatternSection) {
            return false
          }
        }
        return true
      case GRAPHQL_API_TYPE:
        return arbitraryOperationPath === expectedOperationPathPattern
    }
  }
}

export function useComparedOperations(options: Options): QueryResult<unknown, Error> {
  const {
    previousOperation,
    currentOperation,
    versionChanges,
    currentPackageId,
    currentVersionId,
  } = options

  const {
    data: listComparisonInternalDocumentsMetadata,
    isLoading: loadingListComparisonInternalDocumentsMetadata,
    error: errorComparisonInternalDocumentsMetadata,
  } = useComparisonInternalDocumentsByPackageVersion({
    currentPackageId: currentPackageId,
    currentVersionId: currentVersionId,
    previousPackageId: versionChanges?.previousVersionPackageKey,
    previousVersionId: versionChanges?.previousVersion,
  })

  const changeRelatedToComparedOperations = useMemo(() => {
    return (versionChanges?.operations ?? []).find(
      change => {
        const currentOperationId = currentOperation?.operationKey
        const previousOperationId = previousOperation?.operationKey
        if (!currentOperationId && previousOperationId) {
          return change.previousOperation?.operationKey === previousOperationId
        }
        if (currentOperationId && !previousOperationId) {
          return change.currentOperation?.operationKey === currentOperationId
        }
        if (currentOperationId && previousOperationId) {
          return (
            change.currentOperation?.operationKey === currentOperationId &&
            change.previousOperation?.operationKey === previousOperationId
          )
        }
        return false
      },
    )
  }, [currentOperation?.operationKey, previousOperation?.operationKey, versionChanges?.operations])

  const comparisonInternalDocumentMetadata = useMemo(
    () => listComparisonInternalDocumentsMetadata?.find(
      document => document.id === changeRelatedToComparedOperations?.comparisonInternalDocumentId,
    ),
    [listComparisonInternalDocumentsMetadata, changeRelatedToComparedOperations?.comparisonInternalDocumentId],
  )

  const {
    data: rawComparisonInternalDocument,
    isLoading: loadingRawComparisonInternalDocument,
    error: errorComparisonInternalDocument,
  } = useComparisonInternalDocumentContent(comparisonInternalDocumentMetadata?.hash)

  const deserializedComparisonInternalDocument = useMemo(() => {
    if (!rawComparisonInternalDocument) {
      return undefined
    }
    return deserialize(rawComparisonInternalDocument, INTERNAL_DOCUMENT_STRING_SYMBOL_MAPPING)
  }, [rawComparisonInternalDocument])

  const [comparedOperationPath] = useMemo(
    () => {
      const previousOperationPath = previousOperation && isRestOperation(previousOperation) ? previousOperation.path : undefined
      const currentOperationPath = currentOperation && isRestOperation(currentOperation) ? currentOperation.path : undefined
      const paths = new Set([previousOperationPath, currentOperationPath])
      if (paths.size > 1) {
        console.warn('There are 2 paths. What should we do?')
      }
      return paths
    },
    [currentOperation, previousOperation],
  )

  const comparisonInternalDocumentWithOnlyOperation = useMemo(() => {
    if (!deserializedComparisonInternalDocument) {
      return undefined
    }
    if (isOpenApiSpecification(deserializedComparisonInternalDocument)) {
      const oasInternalDocument = deserializedComparisonInternalDocument
      const clonedOasComparisonInternalDocument: OpenAPIV3.Document = {
        ...oasInternalDocument,
        paths: {
          ...oasInternalDocument.paths,
          [DIFF_META_KEY]:
            (
              isObject(oasInternalDocument.paths) &&
              DIFF_META_KEY in oasInternalDocument.paths &&
              isObject(oasInternalDocument.paths[DIFF_META_KEY])
            )
              ? { ...oasInternalDocument.paths[DIFF_META_KEY] }
              : undefined,
        },
      }
      // Leave the only operation with necessary path because ASV displays only 1 operation at the time
      const pathObjects = clonedOasComparisonInternalDocument.paths
      const paths = Object.keys(pathObjects)
      const { servers = [] } = clonedOasComparisonInternalDocument
      const firstServer = servers[0]?.url
      const firstServerBasePath = firstServer ? new URL(firstServer).pathname : ''
      const match = comparedOperationPath
        ? createMatcherArbitraryCurrentOperationPathWithCurrentOperationPath(REST_API_TYPE, comparedOperationPath)
        : undefined
      for (const path of paths) {
        const pathWithServer = firstServer ? `${firstServerBasePath}${path}` : path
        if (!match?.(pathWithServer)) {
          delete pathObjects[path]
        }
      }
      // Leave the only change for operation with necessary path because ASV takes the first item and doesn't know which operation is there
      if (DIFF_META_KEY in pathObjects) {
        const whollyChangedPaths: Record<string, unknown> =
          isObject(pathObjects[DIFF_META_KEY])
            ? { ...pathObjects[DIFF_META_KEY] }
            : {}
        for (const whollyChangedPath of Object.keys(whollyChangedPaths)) {
          const whollyChangedPathWithServer = firstServer ? `${firstServerBasePath}${whollyChangedPath}` : whollyChangedPath
          if (!match?.(whollyChangedPathWithServer)) {
            delete whollyChangedPaths[whollyChangedPath]
          }
        }
      }
      return clonedOasComparisonInternalDocument
    }
    if (isGraphApiSpecification(deserializedComparisonInternalDocument)) {
      return deserializedComparisonInternalDocument
    }
    return undefined
  }, [deserializedComparisonInternalDocument, comparedOperationPath])

  return useMemo(
    () => ({
      data: comparisonInternalDocumentWithOnlyOperation,
      isLoading: loadingRawComparisonInternalDocument || loadingListComparisonInternalDocumentsMetadata,
      error: errorComparisonInternalDocument || errorComparisonInternalDocumentsMetadata,
    }),
    [
      errorComparisonInternalDocument,
      errorComparisonInternalDocumentsMetadata,
      comparisonInternalDocumentWithOnlyOperation,
      loadingRawComparisonInternalDocument,
      loadingListComparisonInternalDocumentsMetadata,
    ],
  )
}
