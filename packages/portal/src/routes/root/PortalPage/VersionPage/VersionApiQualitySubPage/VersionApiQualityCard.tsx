import { JSON_FILE_FORMAT, YAML_FILE_FORMAT } from '@apihub/entities/file-formats'
import { Box } from '@mui/material'
import { BodyCard } from '@netcracker/qubership-apihub-ui-shared/components/BodyCard'
import { Toggler } from '@netcracker/qubership-apihub-ui-shared/components/Toggler'
import type { FC, ReactNode } from 'react'
import { memo, useMemo, useState } from 'react'
import { useParams } from 'react-router'
import { ValidationResultLink } from './ValidatationRulesetLink'
import { ValidatedDocumentSelector } from './ValidatedDocumentSelector'
import { useValidationDetailsByDocument } from './api/useValidationDetailsByDocument'
import type { OriginalDocumentFileFormat, ValidatedDocument } from './types'
import { ValidationResultsTable } from './ValidationResultsTable'
import { useListValidatedDocumentsByPackageVersion } from './api/useListValidatedDocumentsByPackageVersion'

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
      gridTemplateAreas={`
        "left-header right-header"
        "left-body right-body"
      `}
      gridTemplateColumns="1fr 1fr"
      gridTemplateRows="max-content max-content"
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

  const [validationDetails, loadingValidationDetails] = useValidationDetailsByDocument(
    packageId ?? '',
    versionId ?? '',
    selectedDocument?.id ?? '',
  )

  const [validatedDocuments, loadingValidatedDocuments] = useListValidatedDocumentsByPackageVersion(
    packageId ?? '',
    versionId ?? '',
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
              <ValidationResultLink rulesetName='My Ruleset' status='OK' />
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
          leftBody={<ValidationResultsTable data={validationDetails} loading={loadingValidationDetails} />}
          rightBody={<div>Monaco Editor (RO) with validated document</div>}
        />
      }
    />
  )
})
