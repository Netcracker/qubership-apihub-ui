import { useListValidatedDocumentsByPackageVersion } from '@apihub/api-hooks/ApiQuality/useListValidatedDocumentsByPackageVersion'
import { useValidationDetailsByDocument } from '@apihub/api-hooks/ApiQuality/useValidationDetailsByDocument'
import { ValidationRulesettLink } from '@apihub/components/ApiQuality/ValidatationRulesetLink'
import { transformIssuesToMarkers } from '@apihub/entities/api-quality/issues'
import type { ValidatedDocument } from '@apihub/entities/api-quality/validated-documents'
import { JSON_FILE_FORMAT, YAML_FILE_FORMAT } from '@apihub/entities/file-formats'
import { Box } from '@mui/material'
import { BodyCard } from '@netcracker/qubership-apihub-ui-shared/components/BodyCard'
import { LoadingIndicator } from '@netcracker/qubership-apihub-ui-shared/components/LoadingIndicator'
import { ModuleFetchingErrorBoundary } from '@netcracker/qubership-apihub-ui-shared/components/ModuleFetchingErrorBoundary/ModuleFetchingErrorBoundary'
import { MonacoEditor } from '@netcracker/qubership-apihub-ui-shared/components/MonacoEditor'
import { Toggler } from '@netcracker/qubership-apihub-ui-shared/components/Toggler'
import type { SpecItemUri } from '@netcracker/qubership-apihub-ui-shared/utils/specifications'
import type { FC, ReactNode } from 'react'
import { memo, useCallback, useMemo, useState } from 'react'
import { useParams } from 'react-router'
import { usePublishedDocumentRaw } from '../usePublishedDocumentRaw'
import type { OriginalDocumentFileFormat } from './types'
import { useTransformedRawDocumentByFormat } from './utilities/hooks'
import { ValidatedDocumentSelector } from './ValidatedDocumentSelector'
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
    <Box
      display="grid"
      height="calc(100% - 75px)"
      gridTemplateAreas={`
        "left-header right-header"
        "left-body right-body"
      `}
      gridTemplateColumns="50% 50%"
      gridTemplateRows="max-content 100%"
    >
      <Box
        gridArea="left-header"
        display='flex'
        alignItems='center'
        sx={{ borderBottom: borderStyle, borderRight: borderStyle, pt: 1, pb: 1, pr: internalIndent }}
      >
        {leftHeader}
      </Box>
      <Box
        gridArea="right-header"
        display='flex'
        alignItems='center'
        sx={{ borderBottom: borderStyle, borderLeft: borderStyle, pt: 1, pb: 1, pl: internalIndent }}
      >
        {rightHeader}
      </Box>
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
  )
})

export const VersionApiQualityCard: FC = memo(() => {
  const { packageId, versionId } = useParams()

  const [selectedDocument, setSelectedDocument] = useState<ValidatedDocument | undefined>()
  const [format, setFormat] = useState<OriginalDocumentFileFormat>(YAML_FILE_FORMAT)

  const [selectedIssuePath, setSelectedIssuePath] = useState<SpecItemUri | undefined>()

  const [validationDetails, loadingValidationDetails] = useValidationDetailsByDocument(
    packageId ?? '',
    versionId ?? '',
    selectedDocument?.slug ?? '',
  )

  const [validatedDocuments, loadingValidatedDocuments] = useListValidatedDocumentsByPackageVersion(
    packageId ?? '',
    versionId ?? '',
  )

  // TODO 01.07.25 // Check if this is not re-fetched each time we change format
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
    const { issues } = validationDetails
    return transformIssuesToMarkers(transformedSelectedDocumentContent, format, issues)
  }, [validationDetails, transformedSelectedDocumentContent, format])

  const onSelectDocument = useCallback((value: ValidatedDocument | undefined) => {
    setSelectedDocument(value)
    setSelectedIssuePath(undefined)
  }, [])

  const onFormatChange = useCallback((value: OriginalDocumentFileFormat) => {
    setFormat(value)
    setSelectedIssuePath(undefined)
  }, [])

  return (
    <BodyCard
      body={
        <TwoSidedCard
          leftHeader={
            <Box display='flex' justifyContent='space-between' width="100%">
              <ValidatedDocumentSelector
                value={selectedDocument}
                onSelect={onSelectDocument}
                options={validatedDocuments}
                loading={loadingValidatedDocuments}
              />
              <ValidationRulesettLink
                data={validationDetails?.ruleset}
                loading={loadingValidationDetails}
              />
            </Box>
          }
          rightHeader={
            <Box display='flex' justifyContent='flex-end' width="100%">
              <Toggler<OriginalDocumentFileFormat>
                mode={format}
                modes={[JSON_FILE_FORMAT, YAML_FILE_FORMAT]}
                modeToText={{
                  [JSON_FILE_FORMAT]: JSON_FILE_FORMAT.toUpperCase(),
                  [YAML_FILE_FORMAT]: YAML_FILE_FORMAT.toUpperCase(),
                }}
                onChange={onFormatChange}
              />
            </Box>
          }
          leftBody={
            <ValidationResultsTable
              data={validationDetails}
              loading={loadingValidationDetails}
              onSelectIssue={setSelectedIssuePath}
            />
          }
          rightBody={
            loadingSelectedDocumentContent ? <LoadingIndicator /> : (
              <ModuleFetchingErrorBoundary>
                <Box height="100%">
                  <MonacoEditor
                    value={transformedSelectedDocumentContent}
                    type={selectedDocument!.specificationType}
                    language={format}
                    selectedUri={selectedIssuePath}
                    markers={selectedDocumentMarkers}
                  />
                </Box>
              </ModuleFetchingErrorBoundary>
            )
          }
        />
      }
    />
  )
})
