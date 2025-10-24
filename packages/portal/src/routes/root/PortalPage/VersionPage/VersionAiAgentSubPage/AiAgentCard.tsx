import type { Document } from '@apihub/entities/documents'
import { useNavigation } from '@apihub/routes/NavigationProvider'
import { LoadingButton } from '@mui/lab'
import { Box, Typography } from '@mui/material'
import { BodyCard } from '@netcracker/qubership-apihub-ui-shared/components/BodyCard'
import { CONTENT_PLACEHOLDER_AREA, Placeholder } from '@netcracker/qubership-apihub-ui-shared/components/Placeholder'
import { DASHBOARD_KIND } from '@netcracker/qubership-apihub-ui-shared/entities/packages'
import type { FC } from 'react'
import { memo, useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { usePackageKind } from '../../usePackageKind'
import { usePackageParamsWithRef } from '../../usePackageParamsWithRef'
import { useDocuments } from '../useDocuments'
import { AiHandledDocumentSelector } from './AiValidatedDocumentSelector'
import { AiValidationResultsTable } from './AiValidationResultsTable'
import { UxSummaryTable } from './UxSummaryTable'
import type { AiValidationDetails } from './types/document-validation-details'
import { AiIssueSeverities } from './types/issue-severities'

const MOCK_VALIDATION_DETAILS: AiValidationDetails = {
  document: {
    key: 'document-key',
    slug: 'document-slug',
    title: 'document-title',
    type: 'openapi',
    format: 'json',
    description: 'document-description',
    operations: [],
  },
  issues: [
    {
      severity: AiIssueSeverities.ERROR,
      message: 'Non-standard media type \'plain/text\' used (should be \'text/plain\') in responses (e.g., GET /api/v2/packages/{packageId}/versions/{version}/files/{slug}/raw and GET /api/v2/sharedFiles/{sharedFileId}).',
    },
    {
      severity: AiIssueSeverities.WARNING,
      message: 'Duplicate operationId values: \'getPackagesIdVersionsIdApiTypeOperationsExport\' used for both GET /api/v2/.../export/operations and GET /api/v2/.../export/operations/deprecated.',
    },
    {
      severity: AiIssueSeverities.WARNING,
      message: 'Duplicate operationId values: \'getAgentsIdNamespacesIdServicesProxy\' used for GET /agents/{agentId}/namespaces/{name}/services/{serviceId}/proxy/{path} and GET /playground/proxy.',
    },
    {
      severity: AiIssueSeverities.WARNING,
      message: 'Inadequate/mistaken description text: /api/v2/packages/{packageId}/versions/{version}/{apiType}/changes has description \'qwerty\' which is not meaningful.',
    },
    {
      severity: AiIssueSeverities.WARNING,
      message: 'Example/type mismatches: components.parameters.builderId has format \'UUID\' but example is \'QS.CloudQSS.CPQ.Q-TMF\' (not a UUID).',
    },
    {
      severity: AiIssueSeverities.INFO,
      message: 'Many responses include empty \'examples\': {} or no concrete examples where they would be helpful (e.g., many 401/403/500 responses).',
    },
    {
      severity: AiIssueSeverities.INFO,
      message: 'Cookie parameter examples include the full \'name=value\' instead of just the cookie value (e.g., \'apihub-refresh-token\' cookie examples).',
    },
  ],
}

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

  const [fixingAllLoading, setFixingAllLoading] = useState(false)
  const onFixAllButtonClick = useCallback(() => {
    setFixingAllLoading(prev => !prev)
    setTimeout(() => {
      setFixingAllLoading(prev => !prev)
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
      setSelectedDocument(documents.find((document) => document.key === documentId))
    }
  }, [documentId, documents, documents.length, onSelectDocument])

  const [validationDetails, loadingValidationDetails] = useAiValidationDetails()

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
        <Box display='flex' alignItems='center' gap={2}>
          AI Recommendations
          <AiHandledDocumentSelector
            value={selectedDocument}
            onSelect={onSelectDocument}
            options={documents}
            loading={documentsLoading}
          />
        </Box>
      }
      body={
        <Box display='flex' flexDirection='column' gap={2}>
          {/* Scoring section */}
          <Box display='flex' gap={2}>
            <Box flexGrow={1}>
              <UxSummaryTable
                gridTemplateHeaderRow={
                  ['scoring', null]
                }
                gridTemplateRows={[
                  ['overallScore', <Typography variant='body2' sx={{ color: 'error.main' }}>45/100 - Bad</Typography>],
                  ['missingSummary', '3/15'],
                  ['missingOperationId', '5/23'],
                  ['completenessOfDescription', '13/31'],
                  ['operationWithoutTag', '2/11'],
                  ['numberOfUnusedComponents', 1],
                  ['tagsWithoutOperation', '0/31'],
                ]}
                titleCellToTitleMap={{
                  scoring: 'Scoring',
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
            <Box flexGrow={1} display='flex' flexDirection='column' alignItems='flex-start' gap={2}>
              <UxSummaryTable
                gridTemplateHeaderRow={
                  ['enhancements', null]
                }
                gridTemplateRows={[
                  ['structuredImprovements', <Typography variant='body2' sx={{ fontWeight: 'bold' }}>2 issue(s)</Typography>],
                  ['missingDescription', <Typography variant='body2' sx={{ fontWeight: 'bold' }}>3 issue(s)</Typography>],
                  ['missingExamples', <Typography variant='body2' sx={{ fontWeight: 'bold' }}>5 issue(s)</Typography>],
                ]}
                titleCellToTitleMap={{
                  enhancements: 'Enhancements',
                  structuredImprovements: 'Structured improvements',
                  missingDescription: 'Missing description',
                  missingExamples: 'Missing examples',
                }}
              />
              <LoadingButton
                loading={fixingAllLoading}
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
          </Box>
          {/* Validation results section */}
          <Box display='flex' flexDirection='column' gap={1} flexGrow={1}>
            <Typography variant='subtitle1' fontWeight='bold'>Problems</Typography>
            <AiValidationResultsTable
              data={validationDetails}
              loading={loadingValidationDetails}
            />
          </Box>
        </Box>
      }
    />
  )
})

function useAiValidationDetails(): [AiValidationDetails | undefined, boolean] {
  const [result, setResult] = useState<AiValidationDetails | undefined>(undefined)
  const [loading, setLoading] = useState(true)
  new Promise<void>((resolve) => {
    setTimeout(() => {
      setResult(MOCK_VALIDATION_DETAILS)
      setLoading(false)
      resolve(undefined)
    }, 3000)
  })
  return [result, loading]
}
