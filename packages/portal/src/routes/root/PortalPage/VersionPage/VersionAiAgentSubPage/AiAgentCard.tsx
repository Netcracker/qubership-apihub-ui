import type { Document } from '@apihub/entities/documents'
import { useNavigation } from '@apihub/routes/NavigationProvider'
import { LoadingButton } from '@mui/lab'
import { Box, Button, Typography } from '@mui/material'
import { BodyCard } from '@netcracker/qubership-apihub-ui-shared/components/BodyCard'
import { CONTENT_PLACEHOLDER_AREA, Placeholder } from '@netcracker/qubership-apihub-ui-shared/components/Placeholder'
import { RawSpecDiffView } from '@netcracker/qubership-apihub-ui-shared/components/RawSpecDiffView'
import { DASHBOARD_KIND } from '@netcracker/qubership-apihub-ui-shared/entities/packages'
import type { FC, ReactElement } from 'react'
import { memo, useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { usePackageKind } from '../../usePackageKind'
import { usePackageParamsWithRef } from '../../usePackageParamsWithRef'
import { useDocuments } from '../useDocuments'
import { usePublishedDocumentRaw } from '../usePublishedDocumentRaw'
import { AiHandledDocumentSelector } from './AiValidatedDocumentSelector'
import { AiValidationResultsTable } from './AiValidationResultsTable'
import type { GridTemplateRow } from './UxSummaryTable'
import { UxSummaryTable } from './UxSummaryTable'
import type { DocumentEnhancements } from './api/useAiDocumentEnhancements'
import { useAiDocumentEnhancements } from './api/useAiDocumentEnhancements'
import { useAiDocumentScoring } from './api/useAiDocumentScoring'
import { useAiEnhancedDocumentRawContent } from './api/useAiEnhancedDocumentRawContent'
import { useAiEnhancedDocumentScoring } from './api/useAiEnhancedDocumentScoring'
import { useAiValidationDetails } from './api/useAiValidationDetails'
import type { DocumentScoring } from './types/document-scoring'

const FixingAllStatuses = {
  NOT_STARTED: 'not-started',
  IN_PROGRESS: 'in-progress',
  COMPLETED: 'completed',
  FAILED: 'failed',
} as const
type FixingAllStatus = (typeof FixingAllStatuses)[keyof typeof FixingAllStatuses]

export const AiAgentCard: FC = memo(() => {
  const { documentId } = useParams()
  const [packageKind] = usePackageKind()
  const isDashboard = packageKind === DASHBOARD_KIND
  const [docPackageKey, docPackageVersion] = usePackageParamsWithRef()

  const { navigateToAiAgent } = useNavigation()

  const {
    documents,
    isInitialLoading: documentsLoading,
  } = useDocuments({ packageKey: docPackageKey, versionKey: docPackageVersion })

  const [selectedDocument, setSelectedDocument] = useState<Document | undefined>(undefined)

  const [fixingAllStatus, setFixingAllStatus] = useState<FixingAllStatus>(FixingAllStatuses.NOT_STARTED)
  const onFixAllButtonClick = useCallback(() => {
    setFixingAllStatus(FixingAllStatuses.IN_PROGRESS)
    setTimeout(() => {
      setFixingAllStatus(FixingAllStatuses.COMPLETED)
    }, 3000)
  }, [])

  const onSelectDocument = useCallback((document: Document | undefined) => {
    if (!document || !docPackageKey || !docPackageVersion) {
      return
    }
    navigateToAiAgent({
      documentKey: document.slug,
      packageKey: docPackageKey,
      versionKey: docPackageVersion,
    })
  }, [docPackageKey, docPackageVersion, navigateToAiAgent])

  useEffect(() => {
    if (!documentId) {
      documents.length > 0 && onSelectDocument(documents[0])
    } else {
      setSelectedDocument(documents.find((document) => document.slug === documentId))
    }
  }, [documentId, documents, documents.length, onSelectDocument])

  const [originalDocumentScoring, loadingOriginalDocumentScoring] =
    useAiDocumentScoring(
      docPackageKey,
      docPackageVersion,
      selectedDocument?.slug,
      fixingAllStatus !== FixingAllStatuses.COMPLETED,
    )
  const [enhancements, loadingEnhancements] =
    useAiDocumentEnhancements(
      docPackageKey,
      docPackageVersion,
      selectedDocument?.slug,
      fixingAllStatus !== FixingAllStatuses.COMPLETED,
    )
  const [validationDetails, loadingValidationDetails] =
    useAiValidationDetails(
      docPackageKey,
      docPackageVersion,
      selectedDocument?.slug,
      fixingAllStatus !== FixingAllStatuses.COMPLETED,
    )
  const [enhancedDocumentScoring, loadingEnhancedDocumentScoring] =
    useAiEnhancedDocumentScoring(
      docPackageKey,
      docPackageVersion,
      selectedDocument?.slug,
      fixingAllStatus === FixingAllStatuses.COMPLETED,
    )

  const [originalDocumentRawContent, loadingOriginalDocumentRawContent] =
    usePublishedDocumentRaw({
      packageKey: docPackageKey,
      versionKey: docPackageVersion,
      slug: selectedDocument?.slug ?? '',
      enabled: fixingAllStatus === FixingAllStatuses.COMPLETED,
    })

  const [enhancedDocumentRawContent, loadingEnhancedDocumentRawContent] =
    useAiEnhancedDocumentRawContent(
      docPackageKey,
      docPackageVersion,
      selectedDocument?.slug,
      fixingAllStatus === FixingAllStatuses.COMPLETED,
    )

  if (isDashboard) {
    return (
      <Placeholder
        invisible={false}
        area={CONTENT_PLACEHOLDER_AREA}
        message="AI assistant is available only for packages now"
      />
    )
  }

  if (!documentId) {
    return (
      <Placeholder
        invisible={false}
        area={CONTENT_PLACEHOLDER_AREA}
        message="No document selected"
      />
    )
  }

  return (
    <BodyCard
      header={
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          {/* Left part */}
          <Box display='flex' alignItems='center' gap={2}>
            AI Recommendations
            <AiHandledDocumentSelector
              value={selectedDocument}
              onSelect={onSelectDocument}
              options={documents}
              loading={documentsLoading}
            />
          </Box>
          {/* Right part */}
          {fixingAllStatus === FixingAllStatuses.COMPLETED && (
            <Button variant='contained' color='primary' size='small'>
              Publish enhanced version
            </Button>
          )}
        </Box>
      }
      body={
        <Box display='flex' flexDirection='column' gap={2} height='100%'>
          {/* Scoring section */}
          <Box display='flex' gap={2}>
            {/* Scoring of the original document  */}
            <Box flexGrow={1}>
              <UxSummaryTable
                gridTemplateHeaderRow={
                  ['scoring', null]
                }
                gridTemplateRows={transformScoringToGridTemplateRows(originalDocumentScoring)}
                titleCellToTitleMap={{
                  scoring: 'Original Scoring',
                  overallScore: 'Overall score',
                  missingSummary: 'Missing summary',
                  missingOperationId: 'Missing "operationId"',
                  completenessOfDescription: 'Completeness of description',
                  operationWithoutTag: 'Operation without tag',
                  numberOfUnusedComponents: 'Number of unused components',
                  tagsWithoutOperation: 'Tags without operation',
                }}
              />
            </Box>
            {/*  AI suggestions section */}
            {fixingAllStatus !== FixingAllStatuses.COMPLETED && (
              <Box flexGrow={1} display='flex' flexDirection='column' alignItems='flex-start' gap={2}>
                <UxSummaryTable
                  gridTemplateHeaderRow={
                    ['enhancements', null]
                  }
                  gridTemplateRows={transformEnhancementsToGridTemplateRows(enhancements)}
                  titleCellToTitleMap={{
                    enhancements: 'Enhancements',
                    structureImprovements: 'Structure improvements',
                    missingDescriptions: 'Missing descriptions',
                    missingExamples: 'Missing examples',
                  }}
                />
                <LoadingButton
                  loading={fixingAllStatus === FixingAllStatuses.IN_PROGRESS}
                  onClick={onFixAllButtonClick}
                  variant='outlined'
                  color='primary'
                  size='small'
                  sx={{
                    background:
                      'linear-gradient(white, white) padding-box,\n' +
                      'linear-gradient(90deg, #00C4FF, #8B5CF6, #FF0080, #E2179D, #FF0080) border-box',
                    border: '2px solid transparent',
                    '&:hover': {
                      border: '2px solid transparent',
                      background:
                        'linear-gradient(90deg, hsl(194, 100%, 90%), hsl(258, 90%, 90%), hsl(330, 100%, 90%), hsl(320, 82%, 90%), hsl(330, 100%, 90%)) padding-box,\n' +
                        'linear-gradient(90deg, hsl(194, 100%, 50%), hsl(258, 90%, 66%), hsl(330, 100%, 50%), hsl(320, 82%, 50%), hsl(330, 100%, 50%)) border-box',
                    },
                  }}
                >
                  Fix all with AI
                </LoadingButton>
              </Box>
            )}
            {/*  Scoring of the enhanced document */}
            {fixingAllStatus === FixingAllStatuses.COMPLETED && (
              <Box flexGrow={1}>
                <UxSummaryTable
                  gridTemplateHeaderRow={
                    ['scoringEnhanced', null]
                  }
                  gridTemplateRows={transformScoringToGridTemplateRows(enhancedDocumentScoring)}
                  titleCellToTitleMap={{
                    scoringEnhanced: 'AI Enhanced Scoring',
                    overallScore: 'Overall score',
                    missingSummary: 'Missing summary',
                    missingOperationId: 'Missing "operationId"',
                    completenessOfDescription: 'Completeness of description',
                    operationWithoutTag: 'Operation without tag',
                    numberOfUnusedComponents: 'Number of unused components',
                    tagsWithoutOperation: 'Tags without operation',
                  }}
                />
              </Box>
            )}
          </Box>
          {/* Validation results section */}
          {fixingAllStatus !== FixingAllStatuses.COMPLETED && (
            <Box display='flex' flexDirection='column' gap={1} flexGrow={1} minHeight={0}>
              <Typography variant='subtitle1' fontWeight='bold' fontSize={15}>
                Problems
              </Typography>
              <Box overflow='auto' flexGrow={1} minHeight={0}>
                <AiValidationResultsTable
                  data={validationDetails}
                  loading={loadingValidationDetails}
                />
              </Box>
            </Box>
          )}
          {/* Diff view section */}
          {fixingAllStatus === FixingAllStatuses.COMPLETED &&
            originalDocumentRawContent &&
            enhancedDocumentRawContent && (
              <Box display='flex' flexDirection='column' gap={1} flexGrow={1} minHeight={0}>
                <Typography variant='subtitle1' fontWeight='bold' fontSize={15}>
                  Original Specification
                </Typography>
                <Box overflow='auto' flexGrow={1} minHeight={0}>
                  <RawSpecDiffView
                    beforeValue={originalDocumentRawContent}
                    afterValue={enhancedDocumentRawContent}
                    extension='.yaml'
                    type='openapi-3-0'
                  />
                </Box>
              </Box>
            )}
        </Box>
      }
    />
  )
})

function transformScoringToGridTemplateRows(scoring: DocumentScoring | undefined): GridTemplateRow[] {
  if (!scoring) {
    return []
  }

  const rows: GridTemplateRow[] = []

  const scoringParameters = Object.keys(scoring) as (keyof DocumentScoring)[]
  for (const scoringParameter of scoringParameters) {
    let rowContent: string | number | ReactElement | null = scoring[scoringParameter]
    if (scoringParameter === 'overallScore') {
      rowContent = (
        <Typography
          variant='body2'
          sx={{
            color: typeof rowContent === 'string' || typeof rowContent === 'number'
              ? rowContent.toString().includes('Great')
                ? 'success.main'
                : 'error.main'
              : '',
          }}
        >
          {rowContent}
        </Typography>
      )
    }
    rows.push([scoringParameter, rowContent])
  }

  return rows
}

function transformEnhancementsToGridTemplateRows(enhancements: DocumentEnhancements | undefined): GridTemplateRow[] {
  if (!enhancements) {
    return []
  }

  const { enhancements: enhancementsMap } = enhancements

  const rows: GridTemplateRow[] = []

  const enhancementsParameters = Object.keys(enhancementsMap)
  for (const enhancementParameter of enhancementsParameters) {
    rows.push([
      enhancementParameter,
      <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
        {enhancementsMap[enhancementParameter]} issue(s)
      </Typography>,
    ])
  }

  return rows
}
