import type { VersionKey } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import { isRestOperation, type OperationData } from '@netcracker/qubership-apihub-ui-shared/entities/operations'

import { INTERNAL_DOCUMENT_STRING_SYMBOL_MAPPING } from '@apihub/utils/internal-documents/constants'
import { isGraphApiSpecification, isOpenApiSpecification } from '@apihub/utils/internal-documents/type-guards'
import { ClassifierType, DIFF_META_KEY, DiffAction, extractOperationBasePath } from '@netcracker/qubership-apihub-api-diff'
import { calculateNormalizedRestOperationId } from '@netcracker/qubership-apihub-api-processor'
import { deserialize } from '@netcracker/qubership-apihub-api-unifier'
import type { PackageKey } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import type { VersionChanges } from '@netcracker/qubership-apihub-ui-shared/entities/version-changelog'
import { isObject } from '@netcracker/qubership-apihub-ui-shared/utils/objects'
import type { OpenAPIV3 } from 'openapi-types'
import { useMemo } from 'react'
import { detectServerBasePathMigratedToPath } from './detect-server-base-path-migrated-to-path-case'
import type { QueryResultWithNoInternalDocument } from './shared-types'
import { useComparisonInternalDocumentContent } from './useComparisonInternalDocumentContent'
import { useComparisonInternalDocumentsByPackageVersion } from './useComparisonInternalDocumentsByPackageVersion'

type Options = {
  previousOperation: OperationData | undefined
  currentOperation: OperationData | undefined
  versionChanges: VersionChanges | undefined
  currentPackageId: PackageKey | undefined
  currentVersionId: VersionKey | undefined
  previousPackageId: PackageKey | undefined
  previousVersionId: VersionKey | undefined
}

export function useComparedOperations(options: Options): QueryResultWithNoInternalDocument<unknown, Error> {
  const {
    previousOperation,
    currentOperation,
    versionChanges,
    currentPackageId,
    currentVersionId,
    previousPackageId,
    previousVersionId,
  } = options

  const {
    data: listComparisonInternalDocumentsMetadata,
    isLoading: loadingListComparisonInternalDocumentsMetadata,
    error: errorComparisonInternalDocumentsMetadata,
  } = useComparisonInternalDocumentsByPackageVersion({
    currentPackageId: currentPackageId,
    currentVersionId: currentVersionId,
    previousPackageId: previousPackageId,
    previousVersionId: previousVersionId,
  })

  const changeRelatedToComparedOperations = useMemo(() => {
    const currentOperationId = currentOperation?.operationKey
    const previousOperationId = previousOperation?.operationKey
    return (versionChanges?.operations ?? []).find(
      change => {
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

  const hasComparisonInternalDocument = !!changeRelatedToComparedOperations?.comparisonInternalDocumentId

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

  const comparisonInternalDocumentWithOnlyOperation = useMemo(() => {
    if (!deserializedComparisonInternalDocument) {
      return undefined
    }
    // Leave the only operation with necessary path because ASV displays only 1 operation at the time
    if (isOpenApiSpecification(deserializedComparisonInternalDocument)) {
      const previousOperationPath = previousOperation && isRestOperation(previousOperation) ? previousOperation.path : undefined
      const currentOperationPath = currentOperation && isRestOperation(currentOperation) ? currentOperation.path : undefined
      const pathsSet = new Set([previousOperationPath, currentOperationPath])
      if (pathsSet.size > 1) {
        console.warn('There are 2 paths. What should we do?')
      }
      const comparedOperationPath = currentOperationPath ?? previousOperationPath

      const previousOperationMethod = previousOperation && isRestOperation(previousOperation) ? previousOperation.method : undefined
      const currentOperationMethod = currentOperation && isRestOperation(currentOperation) ? currentOperation.method : undefined
      const methodsSet = new Set([previousOperationMethod, currentOperationMethod])
      if (methodsSet.size > 1) {
        console.warn('There are 2 methods. What should we do?')
      }
      const comparedOperationMethod = currentOperationMethod ?? previousOperationMethod

      if (!comparedOperationPath || !comparedOperationMethod) {
        return undefined
      }

      const oasInternalDocument = deserializedComparisonInternalDocument

      const cherryPickOperation = (
        paths: OpenAPIV3.PathsObject,
        servers: OpenAPIV3.ServerObject[],
      ): OpenAPIV3.Document | undefined => {
        // In other normal cases without special splitting document to "before" and "after"
        const clonedOasComparisonInternalDocument: OpenAPIV3.Document = {
          ...oasInternalDocument,
          paths: {},
        }

        const firstServerBasePath = extractOperationBasePath(servers)
        let foundPath: string | undefined
        const previousOperationNormalizedId = previousOperationPath && previousOperationMethod
          ? calculateNormalizedRestOperationId(firstServerBasePath === '/' ? firstServerBasePath : '', previousOperationPath, previousOperationMethod)
          : ''
        const currentOperationNormalizedId = currentOperationPath && currentOperationMethod
          ? calculateNormalizedRestOperationId(firstServerBasePath === '/' ? firstServerBasePath : '', currentOperationPath, currentOperationMethod)
          : ''
        for (const path of Object.keys(paths)) {
          const operationNormalizedId = calculateNormalizedRestOperationId(firstServerBasePath, path, comparedOperationMethod)
          const matched = currentOperationNormalizedId === operationNormalizedId || previousOperationNormalizedId === operationNormalizedId
          if (matched) {
            foundPath = path
            clonedOasComparisonInternalDocument.paths![path] = {
              [comparedOperationMethod]: paths![path]![comparedOperationMethod],
            }
            break
          }
        }

        if (!foundPath) {
          return undefined
        }
        
        // Leave the only change for operation with necessary path because ASV takes the first item and doesn't know which operation is there
        if (DIFF_META_KEY in paths && isObject(paths[DIFF_META_KEY])) {
          const whollyChangedPaths: Record<string, unknown> | undefined =
            isObject(paths[DIFF_META_KEY])
              ? paths[DIFF_META_KEY]
              : undefined
          if (whollyChangedPaths) {
            const clonedWhollyChangedPaths: Record<string, unknown> = {};
            (clonedOasComparisonInternalDocument.paths as Record<PropertyKey, unknown>)[DIFF_META_KEY] = clonedWhollyChangedPaths
            for (const whollyChangedPath of Object.keys(whollyChangedPaths)) {
              const whollyChangedOperationNormalizedId = calculateNormalizedRestOperationId(firstServerBasePath, whollyChangedPath, comparedOperationMethod)
              const matched = currentOperationNormalizedId === whollyChangedOperationNormalizedId || previousOperationNormalizedId === whollyChangedOperationNormalizedId
              if (matched) {
                clonedWhollyChangedPaths[whollyChangedPath] = whollyChangedPaths[whollyChangedPath]
                break
              }
            }
          }
        }

        const operationsByPath = foundPath ? paths[foundPath] : undefined
        if (isObject(operationsByPath) && DIFF_META_KEY in operationsByPath) {
          const whollyChangedMethods: Record<string, unknown> | undefined =
            isObject(operationsByPath[DIFF_META_KEY])
              ? operationsByPath[DIFF_META_KEY]
              : undefined
          if (whollyChangedMethods) {
            let foundDiff: unknown
            for (const whollyChangedMethod of Object.keys(whollyChangedMethods)) {
              if (whollyChangedMethod === comparedOperationMethod) {
                foundDiff = whollyChangedMethods[whollyChangedMethod]
                break
              }
            }
            if (foundDiff) {
              (clonedOasComparisonInternalDocument.paths as Record<PropertyKey, unknown>)[DIFF_META_KEY] = {
                [foundPath!]: foundDiff,
              }
            }
          }
        }
        return clonedOasComparisonInternalDocument
      }

      // Handle special tricky cases with server base path migrated to path
      const trickyCaseDetection = detectServerBasePathMigratedToPath(oasInternalDocument)
      if (trickyCaseDetection) {
        const {
          beforeFirstServerBasePath,
          afterFirstServerBasePath,
          beforePaths,
          afterPaths,
          beforeServers,
          afterServers,
        } = trickyCaseDetection

        const clonedOasComparisonInternalDocument: OpenAPIV3.Document = {
          ...oasInternalDocument,
          paths: {},
        }

        const previousOperationNormalizedId = previousOperationPath && previousOperationMethod
          ? calculateNormalizedRestOperationId(beforeFirstServerBasePath === '/' ? beforeFirstServerBasePath : '', previousOperationPath, previousOperationMethod)
          : ''
        const currentOperationNormalizedId = currentOperationPath && currentOperationMethod
          ? calculateNormalizedRestOperationId(afterFirstServerBasePath === '/' ? afterFirstServerBasePath : '', currentOperationPath, currentOperationMethod)
          : ''

        // Handle operation affected by migration of server base path to path
        for (const afterPathKey of Object.keys(afterPaths)) {
          const currentOperationNormalizedIdCandidate = calculateNormalizedRestOperationId(afterFirstServerBasePath, afterPathKey, comparedOperationMethod)
          if (currentOperationNormalizedIdCandidate !== currentOperationNormalizedId) {
            continue
          }
          for (const beforePathKey of Object.keys(beforePaths)) {
            const previousOperationNormalizedIdCandidate = calculateNormalizedRestOperationId(beforeFirstServerBasePath, beforePathKey, comparedOperationMethod)
            if (previousOperationNormalizedIdCandidate !== previousOperationNormalizedId) {
              continue
            }
            clonedOasComparisonInternalDocument.paths![afterPathKey] = {
              [comparedOperationMethod]: afterPaths[afterPathKey]![comparedOperationMethod],
            }
            const pathsObject = clonedOasComparisonInternalDocument.paths as unknown as Record<PropertyKey, unknown>
            pathsObject[DIFF_META_KEY] = {
              [afterPathKey]: {
                action: DiffAction.rename,
                type: ClassifierType.breaking,
                beforeDeclarationPaths: [['paths', beforePathKey]],
                afterDeclarationPaths: [['paths', afterPathKey]],
                beforeKey: beforePathKey,
                afterKey: afterPathKey,
              },
            }
            return clonedOasComparisonInternalDocument
          }
        }

        // Handle other operations in the document which are not affected by migration of server base path to path
        const fromAfterPaths = cherryPickOperation(afterPaths, afterServers)
        if (fromAfterPaths) {
          return fromAfterPaths
        }
        const fromBeforePaths = cherryPickOperation(beforePaths, beforeServers)
        if (fromBeforePaths) {
          return fromBeforePaths
        }
      }

      const { paths = {}, servers = [] } = oasInternalDocument
      const fromPaths = cherryPickOperation(paths, servers)
      if (fromPaths) {
        return fromPaths
      }

      return undefined
    }
    if (isGraphApiSpecification(deserializedComparisonInternalDocument)) {
      return deserializedComparisonInternalDocument
    }
    return undefined
  }, [deserializedComparisonInternalDocument, previousOperation, currentOperation])

  return useMemo(
    () => ({
      data: comparisonInternalDocumentWithOnlyOperation,
      isLoading: loadingRawComparisonInternalDocument || loadingListComparisonInternalDocumentsMetadata,
      error: errorComparisonInternalDocument || errorComparisonInternalDocumentsMetadata,
      hasInternalDocument: hasComparisonInternalDocument,
    }),
    [
      errorComparisonInternalDocument,
      errorComparisonInternalDocumentsMetadata,
      comparisonInternalDocumentWithOnlyOperation,
      loadingRawComparisonInternalDocument,
      loadingListComparisonInternalDocumentsMetadata,
      hasComparisonInternalDocument,
    ],
  )
}
