import { useValidationDetailsByDocument } from '@apihub/api-hooks/ApiQuality/useValidationDetailsByDocument'
import { ValidationRulesetsDropdown } from '@apihub/components/ApiQuality/ValidationRulesetsDropdown'
import type { DocumentValidationSummary } from '@apihub/entities/api-quality/package-version-validation-summary'
import type { RulesetMetadata } from '@apihub/entities/api-quality/rulesets'
import { transformIssuesToMarkers } from '@apihub/utils/api-quality/issues'
import { Box, Typography } from '@mui/material'
import { BodyCard } from '@netcracker/qubership-apihub-ui-shared/components/BodyCard'
import { LoadingIndicator } from '@netcracker/qubership-apihub-ui-shared/components/LoadingIndicator'
import { ModuleFetchingErrorBoundary } from '@netcracker/qubership-apihub-ui-shared/components/ModuleFetchingErrorBoundary/ModuleFetchingErrorBoundary'
import { MonacoEditor } from '@netcracker/qubership-apihub-ui-shared/components/MonacoEditor'
import { CONTENT_PLACEHOLDER_AREA, Placeholder } from '@netcracker/qubership-apihub-ui-shared/components/Placeholder/Placeholder'
import { Toggler } from '@netcracker/qubership-apihub-ui-shared/components/Toggler'
import { JSON_FILE_FORMAT, YAML_FILE_FORMAT } from '@netcracker/qubership-apihub-ui-shared/entities/file-formats'
import { usePublishedDocumentRaw } from '@netcracker/qubership-apihub-ui-shared/hooks/documents/usePublishedDocumentRaw'
import type { SpecItemUri } from '@netcracker/qubership-apihub-ui-shared/utils/specifications'
import type { FC, ReactNode } from 'react'
import { memo, useCallback, useMemo, useState } from 'react'
import { useParams } from 'react-router'
import type { OriginalDocumentFileFormat } from './types'
import { useTransformedRawDocumentByFormat } from './utilities/hooks'
import { flatMapValidationIssues, flatMapValidationRulesets } from './utilities/transformers'
import { ValidationResultsTable } from './ValidationResultsTable'

type TwoSidedCardProps = Partial<{
  leftHeader: ReactNode
  rightHeader: ReactNode
  leftBody: ReactNode
  rightBody: ReactNode
}>

const TwoSidedCard: FC<TwoSidedCardProps> = memo<TwoSidedCardProps>((props) => {
  const { leftHeader, rightHeader, leftBody, rightBody } = props

  const borderStyle = useMemo(() => '1px solid #D5DCE3', [])
  const internalIndent = 2

  return (
    <Box display='flex' flexDirection='column' height="calc(100% - 50px)">
      <Box display='flex' justifyContent='space-between' alignItems='center' width="100%" mb={1}>
        {leftHeader}
        {rightHeader}
      </Box>
      <Box
        display="grid"
        height="100%"
        gridTemplateAreas={`
          "left-body right-body"
        `}
        gridTemplateColumns="50% 50%"
        gridTemplateRows="100%"
      >
        <Box
          gridArea="left-body"
          sx={{ borderTop: borderStyle, borderRight: borderStyle, pt: internalIndent, pr: internalIndent }}
        >
          {leftBody}
        </Box>
        <Box
          gridArea="right-body"
          sx={{ borderTop: borderStyle, borderLeft: borderStyle, pt: internalIndent, pl: internalIndent }}
        >
          {rightBody}
        </Box>
      </Box>
    </Box>
  )
})

const MONACO_EDITOR_FORMATS: readonly OriginalDocumentFileFormat[] = [JSON_FILE_FORMAT, YAML_FILE_FORMAT]

const MONACO_EDITOR_PRETTY_FORMATS = {
  [JSON_FILE_FORMAT]: JSON_FILE_FORMAT.toUpperCase(),
  [YAML_FILE_FORMAT]: YAML_FILE_FORMAT.toUpperCase(),
}

type VersionApiQualityCardProps = {
  selectedDocument: DocumentValidationSummary
  selectedIssuePath: SpecItemUri | undefined
  setSelectedIssuePath: (value: SpecItemUri | undefined) => void
  validationSummaryAvailable: boolean
}

export const VersionApiQualityCard: FC<VersionApiQualityCardProps> = memo((props) => {
  const { selectedDocument, selectedIssuePath, setSelectedIssuePath, validationSummaryAvailable } = props

  const { packageId, versionId } = useParams()

  const [format, setFormat] = useState<OriginalDocumentFileFormat>(YAML_FILE_FORMAT)

  const [validationDetails, loadingValidationDetails] = useValidationDetailsByDocument(
    packageId ?? '',
    versionId ?? '',
    selectedDocument?.slug ?? '',
  )
  const validationIssues = useMemo(() => flatMapValidationIssues(validationDetails), [validationDetails])
  const validationRulesets = useMemo(() => {
    const r: RulesetMetadata[] = [...flatMapValidationRulesets(validationDetails)]
    // TODO 24.02.26 // Remove this after BE is ready
    const [one, two] = [true, true]
    if (one || two) {
      r.push({
        id: 'ruleset-1',
        name: 'Ruleset 1',
        fileName: 'ruleset-1.yaml',
        status: 'active',
        apiType: 'openapi-3-0',
        linter: 'spectral',
      })
    }
    if (one && two) {
      r.push({
        id: 'ruleset-2',
        name: 'Ruleset 2',
        fileName: 'ruleset-2.yaml',
        status: 'inactive',
        apiType: 'openapi-3-0',
        linter: 'ai linter',
      })
    }
    return r
  }, [validationDetails])

  const [selectedDocumentContent, loadingSelectedDocumentContent] = usePublishedDocumentRaw({
    packageKey: packageId,
    versionKey: versionId,
    slug: selectedDocument?.slug ?? '',
  })

  const transformedSelectedDocumentContent = useTransformedRawDocumentByFormat(selectedDocumentContent, format)

  const selectedDocumentMarkers = useMemo(() => {
    if (!transformedSelectedDocumentContent) {
      return []
    }
    if (!validationDetails) {
      return []
    }
    // TODO 19.09.25 // Remove default because real response doesn't match API
    if (!validationIssues.length) {
      return []
    }
    return transformIssuesToMarkers(transformedSelectedDocumentContent, format, validationIssues)
  }, [validationDetails, transformedSelectedDocumentContent, format, validationIssues])

  const onFormatChange = useCallback((value: OriginalDocumentFileFormat) => {
    setFormat(value)
    setSelectedIssuePath(undefined)
  }, [setSelectedIssuePath])

  const [selectedRulesets, setSelectedRulesets] = useState<Set<RulesetMetadata>>(new Set())

  return (
    <BodyCard
      body={
        <Placeholder
          invisible={validationSummaryAvailable}
          area={CONTENT_PLACEHOLDER_AREA}
          testId="ApiQualityNoResultsPlaceholder"
          message={
            <Typography component="div" variant="h6" color="#8F9EB4">
              API Quality results are not available
              <br />
              Please check the Summary tab for validation status
            </Typography>
          }
        >
          <TwoSidedCard
            leftHeader={
              <Box
                display='flex'
                justifyContent='flex-start'
                alignItems='center'
                gap={1}
                width="100%"
              >
                <ValidationRulesetsDropdown
                  options={validationRulesets}
                  onChange={setSelectedRulesets}
                  loading={loadingValidationDetails}
                />
              </Box>
            }
            rightHeader={
              <Toggler<OriginalDocumentFileFormat>
                mode={format}
                modes={MONACO_EDITOR_FORMATS}
                modeToText={MONACO_EDITOR_PRETTY_FORMATS}
                onChange={onFormatChange}
              />
            }
            leftBody={
              <Placeholder
                invisible={selectedRulesets.size > 0}
                area={CONTENT_PLACEHOLDER_AREA}
                message={
                  <Box display='flex' flexDirection='column' gap={1}>
                    <Typography component='div' variant='h5'>
                      No linters
                    </Typography>
                    <Typography component="div" variant="h6" color="#8F9EB4">
                      Choose one or more linters from the «Validated by» dropdown above
                      to view API quality validation results.
                    </Typography>
                  </Box>
                }
              >
                <ValidationResultsTable
                  data={validationDetails}
                  loading={loadingValidationDetails}
                  onSelectIssue={setSelectedIssuePath}
                />
              </Placeholder>
            }
            rightBody={
              loadingSelectedDocumentContent ? <LoadingIndicator /> : (
                <ModuleFetchingErrorBoundary>
                  <Box height="100%">
                    <MonacoEditor
                      value={transformedSelectedDocumentContent}
                      type={selectedDocument!.apiType}
                      language={format}
                      selectedUri={selectedIssuePath}
                      markers={selectedDocumentMarkers}
                    />
                  </Box>
                </ModuleFetchingErrorBoundary>
              )
            }
          />
        </Placeholder>
      }
    />
  )
})
