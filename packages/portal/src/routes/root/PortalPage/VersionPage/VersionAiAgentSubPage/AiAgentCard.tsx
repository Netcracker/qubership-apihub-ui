import type { Document } from '@apihub/entities/documents'
import { JSON_FILE_FORMAT, YAML_FILE_FORMAT } from '@apihub/entities/file-formats'
import { useEventBus } from '@apihub/routes/EventBusProvider'
import { useNavigation } from '@apihub/routes/NavigationProvider'
import { LoadingButton } from '@mui/lab'
import { Box, Typography } from '@mui/material'
import { BodyCard } from '@netcracker/qubership-apihub-ui-shared/components/BodyCard'
import { ButtonWithHint } from '@netcracker/qubership-apihub-ui-shared/components/Buttons/ButtonWithHint'
import { CONTENT_PLACEHOLDER_AREA, Placeholder } from '@netcracker/qubership-apihub-ui-shared/components/Placeholder'
import { RawSpecDiffView } from '@netcracker/qubership-apihub-ui-shared/components/RawSpecDiffView'
import { Toggler } from '@netcracker/qubership-apihub-ui-shared/components/Toggler'
import { DASHBOARD_KIND } from '@netcracker/qubership-apihub-ui-shared/entities/packages'
import { JSON_FILE_EXTENSION, YAML_FILE_EXTENSION } from '@netcracker/qubership-apihub-ui-shared/utils/files'
import type { FC } from 'react'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { usePackageKind } from '../../usePackageKind'
import { usePackageParamsWithRef } from '../../usePackageParamsWithRef'
import type { OriginalDocumentFileFormat } from '../VersionApiQualitySubPage/types'
import { transformRawDocumentByFormat } from '../VersionApiQualitySubPage/utilities/transformers'
import { useDocuments } from '../useDocuments'
import { usePublishedDocumentRaw } from '../usePublishedDocumentRaw'
import { AiHandledDocumentSelector } from './AiValidatedDocumentSelector'
import { AiValidationResultsTable } from './AiValidationResultsTable'
import { UxSummaryTable } from './UxSummaryTable'
import { useAiDocumentIssues } from './api/useAiDocumentIssues'
import { useAiDocumentScoring } from './api/useAiDocumentScoring'
import { useAiEnhanceDocument } from './api/useAiEnhanceDocument'
import { useAiEnhancedDocumentRawContent } from './api/useAiEnhancedDocumentRawContent'
import { useAiEnhancedDocumentScoring } from './api/useAiEnhancedDocumentScoring'
import type { AiEnhancementStatus } from './types/enhancing-status'
import { AiEnhancementStatuses } from './types/enhancing-status'
import { transformAiDocumentIssuesToGridTemplateRows, transformScoringToGridTemplateRows } from './utils/transformers'

const MONACO_EDITOR_FORMATS: readonly OriginalDocumentFileFormat[] = [JSON_FILE_FORMAT, YAML_FILE_FORMAT]

const MONACO_EDITOR_PRETTY_FORMATS = {
  [JSON_FILE_FORMAT]: JSON_FILE_FORMAT.toUpperCase(),
  [YAML_FILE_FORMAT]: YAML_FILE_FORMAT.toUpperCase(),
}

type AiAgentCardProps = {
  enhancementStatus: AiEnhancementStatus
  onGlobalSelectedDocumentChange: (document: Document | undefined) => void
}

export const AiAgentCard: FC<AiAgentCardProps> = memo(({ enhancementStatus, onGlobalSelectedDocumentChange }) => {
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
  const [selectedFormat, setSelectedFormat] = useState<OriginalDocumentFileFormat>(YAML_FILE_FORMAT)

  const [enhanceDocument] = useAiEnhanceDocument()

  const onFixAllButtonClick = useCallback(() => {
    enhanceDocument({
      packageId: docPackageKey ?? '',
      version: docPackageVersion ?? '',
      slug: selectedDocument?.slug ?? '',
    })
  }, [docPackageKey, docPackageVersion, selectedDocument?.slug, enhanceDocument])

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
    } else if (!selectedDocument) {
      const document = documents.find((document) => document.slug === documentId)
      if (document) {
        onGlobalSelectedDocumentChange(document)
        setSelectedDocument(document)
      }
    }
  }, [documentId, documents, documents.length, onSelectDocument, onGlobalSelectedDocumentChange, selectedDocument])

  const [originalDocumentScoring, loadingOriginalDocumentScoring] =
    useAiDocumentScoring(
      docPackageKey,
      docPackageVersion,
      selectedDocument?.slug,
      enhancementStatus !== AiEnhancementStatuses.SUCCESS,
    )
  const [originalDocumentIssues, loadingOriginalDocumentIssues] =
    useAiDocumentIssues(
      docPackageKey,
      docPackageVersion,
      selectedDocument?.slug,
      enhancementStatus !== AiEnhancementStatuses.SUCCESS,
    )
  const [enhancements, loadingEnhancements] = useMemo(() => {
    return [
      transformAiDocumentIssuesToGridTemplateRows(originalDocumentIssues),
      loadingOriginalDocumentIssues,
    ]
  }, [originalDocumentIssues, loadingOriginalDocumentIssues])
  const [enhancedDocumentScoring, loadingEnhancedDocumentScoring] =
    useAiEnhancedDocumentScoring(
      docPackageKey,
      docPackageVersion,
      selectedDocument?.slug,
      enhancementStatus === AiEnhancementStatuses.SUCCESS,
    )

  const [originalDocumentRawContent, loadingOriginalDocumentRawContent] =
    usePublishedDocumentRaw({
      packageKey: docPackageKey,
      versionKey: docPackageVersion,
      slug: selectedDocument?.slug ?? '',
    })

  const [enhancedDocumentRawContent, loadingEnhancedDocumentRawContent] =
    useAiEnhancedDocumentRawContent(
      docPackageKey,
      docPackageVersion,
      selectedDocument?.slug,
      enhancementStatus === AiEnhancementStatuses.SUCCESS,
    )
  const transformedOriginalDocumentContent = useMemo(
    () => transformRawDocumentByFormat(originalDocumentRawContent ?? '', selectedFormat),
    [originalDocumentRawContent, selectedFormat],
  )
  const transformedEnhancedDocumentContent = useMemo(
    () => transformRawDocumentByFormat(enhancedDocumentRawContent ?? '', selectedFormat),
    [enhancedDocumentRawContent, selectedFormat],
  )

  const { showPublishAiEnhancedVersionDialog } = useEventBus()

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
          {enhancementStatus === AiEnhancementStatuses.SUCCESS && (
            <ButtonWithHint
              variant='contained'
              color='primary'
              size='small'
              onClick={showPublishAiEnhancedVersionDialog}
              title='Publish'
              hint='Publish enhanced version'
              tooltipMaxWidth='unset'
              data-testid='PublishButton'
            >
              Publish
            </ButtonWithHint>
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
                loading={loadingOriginalDocumentScoring}
                gridTemplateHeaderRow={
                  ['Original Scoring', null]
                }
                gridTemplateRows={transformScoringToGridTemplateRows(originalDocumentScoring)}
              />
            </Box>
            {/* AI suggestions section */}
            {enhancementStatus !== AiEnhancementStatuses.SUCCESS && (
              <Box flexGrow={1} display='flex' flexDirection='column' alignItems='flex-start' gap={2}>
                <UxSummaryTable
                  loading={loadingEnhancements}
                  gridTemplateHeaderRow={
                    ['Enhancements', null]
                  }
                  gridTemplateRows={enhancements}
                />
                {enhancements && !loadingEnhancements && (
                  <LoadingButton
                    loading={enhancementStatus === AiEnhancementStatuses.PROCESSING}
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
                    Fix All
                  </LoadingButton>
                )}
              </Box>
            )}
            {/* Scoring of the enhanced document */}
            {enhancementStatus === AiEnhancementStatuses.SUCCESS && (
              <Box flexGrow={1}>
                <UxSummaryTable
                  loading={loadingEnhancedDocumentScoring}
                  gridTemplateHeaderRow={
                    ['AI Enhanced Scoring', null]
                  }
                  gridTemplateRows={transformScoringToGridTemplateRows(enhancedDocumentScoring)}
                />
              </Box>
            )}
          </Box>
          {/* Validation results section */}
          {enhancementStatus !== AiEnhancementStatuses.SUCCESS && (
            <Box display='flex' flexDirection='column' gap={1} flexGrow={1} minHeight={0}>
              <Typography variant='subtitle1' fontWeight='bold' fontSize={15}>
                Problems
              </Typography>
              <Box overflow='auto' flexGrow={1} minHeight={0}>
                <AiValidationResultsTable
                  data={originalDocumentIssues}
                  loading={loadingOriginalDocumentIssues}
                />
              </Box>
            </Box>
          )}
          {/* Diff view section */}
          {enhancementStatus === AiEnhancementStatuses.SUCCESS &&
            originalDocumentRawContent &&
            enhancedDocumentRawContent && (
              <Box display='flex' flexDirection='column' gap={1} flexGrow={1} minHeight={0}>
                <Box width='100%' display='grid' gridTemplateColumns='1fr 1fr'>
                  <Typography variant='subtitle1' fontWeight='bold' fontSize={15}>
                    Original Specification
                  </Typography>
                  <Box display='flex' alignItems='center' justifyContent='space-between'>
                    <Typography variant='subtitle1' fontWeight='bold' fontSize={15}>
                      AI Enhanced Specification
                    </Typography>
                    <Toggler<OriginalDocumentFileFormat>
                      mode={selectedFormat}
                      modes={MONACO_EDITOR_FORMATS}
                      modeToText={MONACO_EDITOR_PRETTY_FORMATS}
                      onChange={setSelectedFormat}
                    />
                  </Box>
                </Box>
                <Box overflow='auto' flexGrow={1} minHeight={0}>
                  <RawSpecDiffView
                    beforeValue={transformedOriginalDocumentContent}
                    afterValue={transformedEnhancedDocumentContent}
                    extension={
                      selectedDocument?.format === JSON_FILE_FORMAT
                        ? JSON_FILE_EXTENSION
                        : YAML_FILE_EXTENSION
                    }
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
