import { JSON_FILE_FORMAT, YAML_FILE_FORMAT } from '@apihub/entities/file-formats'
import { Box } from '@mui/material'
import { BodyCard } from '@netcracker/qubership-apihub-ui-shared/components/BodyCard'
import { LoadingIndicator } from '@netcracker/qubership-apihub-ui-shared/components/LoadingIndicator'
import { MonacoEditor } from '@netcracker/qubership-apihub-ui-shared/components/MonacoEditor'
import { Toggler } from '@netcracker/qubership-apihub-ui-shared/components/Toggler'
import YAML from 'js-yaml'
import type { FC, ReactNode } from 'react'
import { memo, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router'
import { usePublishedDocumentRaw } from '../usePublishedDocumentRaw'
import { ValidationResultLink } from './ValidatationRulesetLink'
import { ValidatedDocumentSelector } from './ValidatedDocumentSelector'
import { ValidationResultsTable } from './ValidationResultsTable'
import { useListValidatedDocumentsByPackageVersion } from './api/useListValidatedDocumentsByPackageVersion'
import { useValidationDetailsByDocument } from './api/useValidationDetailsByDocument'
import type { Issue, OriginalDocumentFileFormat, ValidatedDocument } from './types'

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
      height="100%"
      gridTemplateAreas={`
        "left-header right-header"
        "left-body right-body"
      `}
      gridTemplateColumns="50% 50%"
      gridTemplateRows="max-content 100%"
    >
      <Box
        gridArea="left-header"
        sx={{ borderBottom: borderStyle, borderRight: borderStyle, pt: 1, pb: 1, pr: internalIndent }}
      >
        {leftHeader}
      </Box>
      <Box
        gridArea="right-header"
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

  const [selectedIssue, setSelectedIssue] = useState<Issue | undefined>()

  const [validationDetails, loadingValidationDetails] = useValidationDetailsByDocument(
    packageId ?? '',
    versionId ?? '',
    selectedDocument?.id ?? '',
  )

  useEffect(() => {
    setSelectedIssue(validationDetails?.issues[0])
  }, [validationDetails?.issues])

  const [validatedDocuments, loadingValidatedDocuments] = useListValidatedDocumentsByPackageVersion(
    packageId ?? '',
    versionId ?? '',
  )

  const selectedDocumentRuleset = useMemo(
    () => validationDetails?.ruleset ?? null,
    [validationDetails?.ruleset],
  )

  // TODO 01.07.25 // Check if this is not re-fetched each time we change format
  const [selectedDocumentContent, loadingSelectedDocumentContent] = usePublishedDocumentRaw({
    packageKey: packageId,
    versionKey: versionId,
    slug: selectedDocument?.id ?? '',
  })

  const cont = useMemo(() => {
    if (format === YAML_FILE_FORMAT) {
      return selectedDocumentContent
    }
    const parsed = YAML.load(selectedDocumentContent)
    return JSON.stringify(parsed, null, 2)
  }, [format, selectedDocumentContent])

  const selectedDocumentUri = useMemo(
    () => `#/${selectedIssue ? selectedIssue.jsonPath.join('/') : ''}`,
    [selectedIssue],
  )

  return (
    <BodyCard
      body={
        <TwoSidedCard
          leftHeader={
            <Box display='flex' justifyContent='space-between'>
              <ValidatedDocumentSelector
                value={selectedDocument}
                onSelect={setSelectedDocument}
                options={validatedDocuments}
                loading={loadingValidatedDocuments}
              />
              <ValidationResultLink
                data={selectedDocumentRuleset}
                loading={loadingValidationDetails}
              />
            </Box>
          }
          rightHeader={
            <Box display='flex' justifyContent='flex-end'>
              <Toggler<OriginalDocumentFileFormat>
                mode={format}
                modes={[JSON_FILE_FORMAT, YAML_FILE_FORMAT]}
                modeToText={{
                  [JSON_FILE_FORMAT]: JSON_FILE_FORMAT.toUpperCase(),
                  [YAML_FILE_FORMAT]: YAML_FILE_FORMAT.toUpperCase(),
                }}
                onChange={setFormat}
              />
            </Box>
          }
          leftBody={
            <ValidationResultsTable
              data={validationDetails}
              loading={loadingValidationDetails}
            />
          }
          rightBody={
            loadingSelectedDocumentContent ? <LoadingIndicator /> : (
              <Box height="100%">
                <MonacoEditor
                  value={cont}
                  type={'openapi-3-0'}
                  language={format}
                  selectedUri={selectedDocumentUri}
                />
              </Box>
            )
          }
        />
      }
    />
  )
})
