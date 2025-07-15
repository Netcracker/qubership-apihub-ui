/**
 * Copyright 2024-2025 NetCracker Technology Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useManualRunApiQualityValidation } from '@apihub/api-hooks/ApiQuality/useManualRunApiQualityValidation'
import { ValidationRulesettLink } from '@apihub/components/ApiQuality/ValidatationRulesetLink'
import { ValidationIssuesTooltip } from '@apihub/components/ApiQuality/ValidationIssuesTooltip'
import type { IssueSeverity } from '@apihub/entities/api-quality/issue-severities'
import { ISSUE_SEVERITIES_LIST, ISSUE_SEVERITY_COLOR_MAP, IssueSeverities } from '@apihub/entities/api-quality/issue-severities'
import { RulesetStatuses } from '@apihub/entities/api-quality/rulesets'
import { Box, Tooltip, Typography } from '@mui/material'
import { API_AUDIENCE_EXTERNAL, API_AUDIENCE_INTERNAL, API_AUDIENCE_UNKNOWN, type ApiAudienceTransition } from '@netcracker/qubership-apihub-api-processor'
import { Changes } from '@netcracker/qubership-apihub-ui-shared/components/Changes'
import { CATEGORY_OPERATION } from '@netcracker/qubership-apihub-ui-shared/components/ChangesTooltip'
import type { ApiType } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import { API_TYPE_TITLE_MAP } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import type { ChangesSummary } from '@netcracker/qubership-apihub-ui-shared/entities/change-severities'
import {
  BREAKING_CHANGE_SEVERITY,
  DEFAULT_CHANGE_SEVERITY_MAP,
} from '@netcracker/qubership-apihub-ui-shared/entities/change-severities'
import type { NumberOfImpactedOperations } from '@netcracker/qubership-apihub-ui-shared/entities/version-contents'
import { InfoContextIcon } from '@netcracker/qubership-apihub-ui-shared/icons/InfoContextIcon'
import { DefaultWarningIcon, RedWarningIcon } from '@netcracker/qubership-apihub-ui-shared/icons/WarningIcon'
import type { FC } from 'react'
import { memo, useCallback, useMemo } from 'react'
import {
  useApiQualityLinterEnabled,
  useApiQualitySummarySectionProperties,
  useApiQualityValidationFailed,
  useApiQualityValidationSummary,
} from '../../ApiQualityValidationSummaryProvider'
import { useParams } from 'react-router-dom'

export type OperationTypeSummaryProps = Readonly<{
  apiType: ApiType
  operationsCount: number
  deprecatedOperationsCount: number
  noBwcOperationsCount: number
  changesSummary: ChangesSummary
  numberOfImpactedOperations: NumberOfImpactedOperations
  internalAudienceOperationsCount: number
  unknownAudienceOperationsCount: number
  apiAudienceTransitions: ApiAudienceTransition[]
}>

export const OperationTypeSummary: FC<OperationTypeSummaryProps> = memo<OperationTypeSummaryProps>(({
  apiType,
  changesSummary,
  numberOfImpactedOperations,
  operationsCount,
  deprecatedOperationsCount,
  noBwcOperationsCount,
  internalAudienceOperationsCount,
  unknownAudienceOperationsCount,
  apiAudienceTransitions,
}) => {
  const [manualRunLinter] = useManualRunApiQualityValidation()
  const { packageId, versionId } = useParams()
  const onManualRunLinter = useCallback(() => {
    if (packageId && versionId) {
      manualRunLinter({ packageId, versionId })
    }
  }, [manualRunLinter, packageId, versionId])
  const linterEnabled = useApiQualityLinterEnabled(apiType)
  const validationFailed = useApiQualityValidationFailed()
  const [apiQualitySummaryPlaceholder, apiQualitySummaryDisabled] = useApiQualitySummarySectionProperties(onManualRunLinter)
  const showApiQualityPlaceholder = apiQualitySummaryPlaceholder && apiQualitySummaryDisabled
  const showApiQualitySummary = validationFailed || (!apiQualitySummaryPlaceholder && !apiQualitySummaryDisabled)
  const validationSummary = useApiQualityValidationSummary()
  const validationRuleset = validationSummary?.[0]?.ruleset
  const isInactiveValidationRuleset = validationRuleset?.status === RulesetStatuses.INACTIVE
  const aggregatedValidationSummary: Record<IssueSeverity, number> = useMemo(() => {
    const emptyValidationSummary: Record<IssueSeverity, number> = {
      [IssueSeverities.ERROR]: 0,
      [IssueSeverities.WARNING]: 0,
      [IssueSeverities.INFO]: 0,
      [IssueSeverities.HINT]: 0,
    }
    return (validationSummary ?? []).reduce((aggregated, currentSummaryRecord) => {
      const summary = currentSummaryRecord.issuesSummary
      aggregated[IssueSeverities.ERROR] += summary.error ?? 0
      aggregated[IssueSeverities.WARNING] += summary.warning ?? 0
      aggregated[IssueSeverities.INFO] += summary.info ?? 0
      aggregated[IssueSeverities.HINT] += summary.hint ?? 0
      return aggregated
    }, emptyValidationSummary)
  }, [validationSummary])
  const documentsWithFailedValidation = useMemo(
    () => validationSummary?.[0]?.failedDocuments ?? [],
    [validationSummary],
  )

  const changeCounter = useMemo(() => changesSummary ?? DEFAULT_CHANGE_SEVERITY_MAP, [changesSummary])
  const affectedOperationCounter = useMemo(() => numberOfImpactedOperations ?? DEFAULT_CHANGE_SEVERITY_MAP, [numberOfImpactedOperations])
  const internalAudienceCounter = useMemo(() => {
    return apiAudienceTransitions?.find(({ previousAudience, currentAudience }) => previousAudience === API_AUDIENCE_EXTERNAL && currentAudience === API_AUDIENCE_INTERNAL)?.operationsCount ?? 0
  }, [apiAudienceTransitions])

  const unknownAudienceCounter = useMemo(() => {
    return apiAudienceTransitions?.reduce((counter, { previousAudience, currentAudience, operationsCount }) => {
      if ((previousAudience === API_AUDIENCE_EXTERNAL || previousAudience === API_AUDIENCE_INTERNAL) && currentAudience === API_AUDIENCE_UNKNOWN) {
        return counter + operationsCount
      }
      return counter
    }, 0) ?? 0
  }, [apiAudienceTransitions])

  const operationsGridTemplateAreas = useMemo(() => {
    let gridTemplateAreas = `
      'title empty'
      'operationCountTitle operationCount'
      'deprecatedCountTitle deprecatedCount'
      'noBwcCountTitle noBwcCount'
    `
    if (internalAudienceOperationsCount !== 0) {
      gridTemplateAreas += '\'internalAudienceTitle internalAudienceCount\''
    }
    if (unknownAudienceOperationsCount !== 0) {
      gridTemplateAreas += '\'unknownAudienceTitle unknownAudienceCount\''
    }
    return gridTemplateAreas
  }, [internalAudienceOperationsCount, unknownAudienceOperationsCount])

  return (
    <Box mt={4} data-testid={`ValidationsContent-${apiType}`}>
      <Box display="flex" alignItems="flex-start">
        {/* Section "API Operations" */}
        <Box
          sx={{
            ...OPERATION_TYPE_SUMMARY_STYLE,
            gridTemplateAreas: operationsGridTemplateAreas,
          }}
        >
          <Typography sx={{ gridAria: 'title' }} variant="subtitle1">
            {`${API_TYPE_TITLE_MAP[apiType]} Operations`}
          </Typography>
          <Typography sx={{ gridArea: 'operationCountTitle' }} variant="subtitle2">
            Total number of operations
          </Typography>
          <Typography sx={{ gridArea: 'operationCount' }} variant="body2" data-testid="NumberOfOperationsTypography">
            {operationsCount}
          </Typography>

          <Typography sx={{ gridArea: 'deprecatedCountTitle' }} variant="subtitle2">
            Number of deprecated operations
          </Typography>
          <Typography
            sx={{ gridArea: 'deprecatedCount' }}
            variant="body2"
            data-testid="NumberOfDeprecatedOperationsTypography"
          >
            {deprecatedOperationsCount}
          </Typography>

          <Typography sx={{ gridArea: 'noBwcCountTitle' }} variant="subtitle2">
            Number of no-BWC operations
          </Typography>
          <Typography
            sx={{ gridArea: 'noBwcCount' }}
            variant="body2"
            data-testid="NumberOfNoBwcOperationsTypography"
          >
            {noBwcOperationsCount}
          </Typography>

          {internalAudienceOperationsCount !== 0 && (
            <>
              <Typography sx={{ gridArea: 'internalAudienceTitle' }} variant="subtitle2">
                Number of operations for internal audience
              </Typography>
              <Typography
                sx={{ gridArea: 'internalAudienceCount' }}
                variant="body2"
              >
                <Box display="flex">
                  {internalAudienceOperationsCount}
                  {internalAudienceCounter !== 0 && (
                    <Tooltip title={`API audience changed from external to internal for ${internalAudienceCounter} operations`}>
                      <Box><DefaultWarningIcon /></Box>
                    </Tooltip>
                  )}
                </Box>
              </Typography>
            </>
          )}
          {unknownAudienceOperationsCount !== 0 && (
            <>
              <Typography sx={{ gridArea: 'unknownAudienceTitle' }} variant="subtitle2">
                Number of operations for unknown audience
              </Typography>
              <Typography
                sx={{ gridArea: 'unknownAudienceCount' }}
                variant="body2"
              >
                <Box display="flex">
                  {unknownAudienceOperationsCount}
                  {unknownAudienceCounter !== 0 && (
                    <Tooltip title={`API audience changed from external/internal to unknown for ${unknownAudienceCounter} operations`}>
                      <Box><DefaultWarningIcon /></Box>
                    </Tooltip>
                  )}
                </Box>
              </Typography>
            </>
          )}
        </Box>

        {/* Section "API Validation" */}
        <Box
          sx={{
            ...OPERATION_TYPE_SUMMARY_STYLE,
            gridTemplateAreas:
              !linterEnabled
                ? [
                  '\'title empty\'',
                  '\'bwcNumberTitle bwcNumber\'',
                  '\'changesNumberTitle changesNumber\'',
                  '\'affectedOperationTitle affectedOperation\'',
                ].join('\n')
                : [
                  '\'title empty1\'',
                  '\'bwcValidationTitle empty2\'',
                  '\'bwcNumberTitle bwcNumber\'',
                  '\'changesNumberTitle changesNumber\'',
                  '\'affectedOperationTitle affectedOperation\'',
                  '\'linterValidationTitle empty3\'',
                  showApiQualityPlaceholder
                    ? '\'linterValidationPlaceholder linterValidationPlaceholder\''
                    : undefined,
                  showApiQualitySummary
                    ? '\'validationRulesetTitle validationRuleset\''
                    : undefined,
                  showApiQualitySummary
                    ? '\'qualityIssuesNumberTitle qualityIssuesNumber\''
                    : undefined,
                  showApiQualitySummary && validationFailed
                    ? '\'failedDocumentsNumberTitle failedDocumentsNumber\''
                    : undefined,
                ].filter(Boolean).join('\n'),
          }}
        >
          <Typography sx={{ gridAria: 'title' }} variant="subtitle1">
            {`${API_TYPE_TITLE_MAP[apiType]} Validation`}
          </Typography>

          {linterEnabled && <Box sx={{ gridArea: 'empty1' }} />}

          {/* Sub-section "Backward Compatibility Validation" */}
          {linterEnabled && (
            <>
              <Typography sx={{ gridArea: 'bwcValidationTitle', fontWeight: 500 }} variant="body2">
                Backward Compatibility Validation
              </Typography>

              <Box sx={{ gridArea: 'empty2' }} />
            </>
          )}

          <Typography sx={{ gridArea: 'bwcNumberTitle' }} variant="subtitle2">
            Number of BWC errors
          </Typography>
          <Typography sx={{ gridArea: 'bwcNumber' }} variant="body2" data-testid="NumberOfBwcErrorsTypography">
            {changeCounter[BREAKING_CHANGE_SEVERITY]}
          </Typography>

          <Typography sx={{ gridArea: 'changesNumberTitle' }} variant="subtitle2">
            Number of changes
          </Typography>
          <Box
            sx={{
              gridArea: 'changesNumber',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Changes value={changeCounter} mode="compact" zeroView={true} />
          </Box>

          <Typography sx={{ gridArea: 'affectedOperationTitle' }} variant="subtitle2">
            Number of affected operations
          </Typography>
          <Box
            sx={{
              gridArea: 'affectedOperation',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Changes value={affectedOperationCounter} mode="compact" category={CATEGORY_OPERATION} zeroView={true} />
          </Box>

          {/* Sub-section "Quality Validation" */}
          {linterEnabled && (
            <>
              <Box display="flex" alignItems="center" gap={1} gridArea="linterValidationTitle">
                <Typography sx={{ fontWeight: 500 }} variant="body2">
                  Quality Validation
                </Typography>
                {validationFailed && (
                  <Tooltip title="Validation failed" placement="right">
                    <Box data-testid="ValidationFailedAlert">
                      <RedWarningIcon />
                    </Box>
                  </Tooltip>
                )}
              </Box>

              <Box sx={{ gridArea: 'empty3' }} />

              {showApiQualityPlaceholder && (
                <Typography sx={{ gridArea: 'linterValidationPlaceholder' }} variant="subtitle2">
                  {apiQualitySummaryPlaceholder}
                </Typography>
              )}

              {showApiQualitySummary && <>
                {validationRuleset && <>
                  <Typography
                    sx={{
                      gridArea: 'validationRulesetTitle',
                      ...(isInactiveValidationRuleset ? { display: 'flex', alignItems: 'center' } : {}),
                    }}
                    variant="subtitle2"
                  >
                    Validation ruleset
                  </Typography>

                  <Box sx={{
                    gridArea: 'validationRuleset',
                    ...(isInactiveValidationRuleset ? { display: 'flex', alignItems: 'center' } : {}),
                  }}>
                    <ValidationRulesettLink
                      data={validationRuleset}
                      loading={!validationRuleset}
                      showLabel={false}
                    />
                  </Box>
                </>}

                {validationSummary && <>
                  <Typography sx={{ gridArea: 'qualityIssuesNumberTitle' }} variant="subtitle2">
                    Number of quality issues
                  </Typography>
                  <Box sx={{ gridArea: 'qualityIssuesNumber' }} display="flex" alignItems="center" gap={1}>
                    {ISSUE_SEVERITIES_LIST.map(severity => (
                      <ValidationIssuesTooltip key={severity} issueSeverity={severity}>
                        <Box key={severity} display="flex" alignItems="center" gap={1}>
                          <Box
                            component="span"
                            sx={{ background: ISSUE_SEVERITY_COLOR_MAP[severity], width: 8, height: 8, borderRadius: '50%' }}
                          />
                          <Typography
                            variant="body2"
                            component="span"
                            sx={{ fontSize: 12, fontWeight: 500, color: '#8F9EB4' }}
                          >
                            {aggregatedValidationSummary[severity]}
                          </Typography>
                        </Box>
                      </ValidationIssuesTooltip>
                    ))}
                  </Box>
                </>}

                {validationFailed && <>
                  <Typography sx={{ gridArea: 'failedDocumentsNumberTitle' }} variant="subtitle2">
                    Number of failed documents
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1} gridArea="failedDocumentsNumber">
                    <Typography variant="body2">
                      {documentsWithFailedValidation.length}
                    </Typography>
                    <Tooltip
                      disableHoverListener={false}
                      title={
                        <Box display="flex" flexDirection="column" gap={1} p={1}>
                          {documentsWithFailedValidation.map(doc => (
                            <Typography key={doc} variant="body2">
                              {doc}
                            </Typography>
                          ))}
                        </Box>
                      }
                      placement="right"
                    >
                      <InfoContextIcon sx={{ fontSize: 16 }} />
                    </Tooltip>
                  </Box>
                </>}
              </>}
            </>
          )}
        </Box>
      </Box>
    </Box>
  )
})

const OPERATION_TYPE_SUMMARY_STYLE = {
  display: 'grid',
  mt: 1,
  mr: 15,
  rowGap: 1,
  columnGap: 5,
  gridTemplateColumns: 'repeat(2, max-content)',
}
