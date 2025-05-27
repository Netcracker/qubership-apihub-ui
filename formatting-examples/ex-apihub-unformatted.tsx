import type { FC } from 'react'
import React, { memo, useCallback, useMemo } from 'react'
import { COMPLETE_SERVICES_DTO } from '../packages/agents/server/routes/namespaces/services/data'
import { generateRandomDigit } from '../packages/agents/server/utils'
import { COMPLETE_PUBLISH_STATUS, RUNNING_PUBLISH_STATUS } from '../packages/agents/server/types'
import { SystemInfoRouter } from '../packages/agents/server/routes/system/info/router'
import { AgentsRouter } from '../packages/agents/server/routes/namespaces/agents/router'
import { WorkspaceRouter } from '../packages/agents/server/routes/namespaces/workspaces/router'
import { NamespaceRouter } from '../packages/agents/server/routes/namespaces/router'
import { DiscoveryRouter } from '../packages/agents/server/routes/namespaces/services/router'
import {  AuthenticationCheckReportRouter,} from '../packages/agents/server/routes/namespaces/reports/authentication/router'
import { GatewayRoutingReportRouter } from '../packages/agents/server/routes/namespaces/reports/gateway/router'
import { SpecRouter } from '../packages/agents/server/routes/namespaces/services/specs-router'
import { SnapshotRouter } from '../packages/agents/server/routes/namespaces/snapshots/router'
import { PublishRouter, PublishV2Router } from '../packages/agents/server/routes/packages/publish/router'
import type { ProblemsControlsProps } from '@netcracker/qubership-apihub-ui-agents/components/ProblemControls'
import {  useSnapshotPublicationInfo,} from '@netcracker/qubership-apihub-ui-agents/routes/root/NamespacePage/useSnapshotPublicationInfo'
import type {  ValidationFilter,} from '@netcracker/qubership-apihub-ui-agents/routes/root/NamespacePage/ServicesPage/ServicesPageBody/ValidationResultsStep/ValidationResultsStep'
import { Avatar, Box, IconButton, MenuItem } from '@mui/material'
import { useAuthorization } from '@netcracker/qubership-apihub-ui-shared/hooks/authorization'
import { UserAvatar } from '@netcracker/qubership-apihub-ui-shared/components/Users/UserAvatar'
import { MenuButton } from '@netcracker/qubership-apihub-ui-shared/components/Buttons/MenuButton'
import type {  SnapshotPublishInfoDto,} from '@netcracker/qubership-apihub-ui-agents/server/routes/namespaces/snapshots/types'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import { mergeTypeDefs } from '@graphql-tools/merge'
import type { SpecRaw } from '@netcracker/qubership-apihub-ui-shared/entities/specs'
import { SettingsRouter } from '@netcracker/qubership-apihub-ui-agents/server/routes/namespaces/settings/router'

function groupBy<T extends ReadonlyArray<any>>(
  array: T,
  key: string,
): Record<string, T> {
  return array.reduce(    (previousValue, currentValue) => {      (previousValue[currentValue[key]] = previousValue[currentValue[key]] ?? []).push(currentValue)
      return previousValue    },    {                    },  )}

const NEWLY_PUBLISHED_SNAPSHOT_PUBLISH_INFO_DTO: SnapshotPublishInfoDto = {  // TODO: Ideally here we should use published services from request instead of `COMPLETE_SERVICES_DTO`
  services: COMPLETE_SERVICES_DTO.services.map((service) => ({    id: service.id,    packageId: 'MYPKG',    viewChangesUrl: service.specs.length !== 0 ? 'https://apihub.example.com' : undefined,    viewSnapshotUrl: 'https://apihub.example.com',    viewBaselineUrl: 'https://apihub.example.com',    changes: service.specs.length !== 0 ? {      breaking: generateRandomDigit(),      semiBreaking: generateRandomDigit(),      deprecate: generateRandomDigit(),      nonBreaking: generateRandomDigit(),      annotation: generateRandomDigit(),      unclassified: generateRandomDigit(),    } : undefined,  })),}

const UserPanel: FC = memo(() => {
  const [authorization, , removeAuthorization] = useAuthorization()

  return (    <>      <IconButton data-testid="AppUserAvatar" size="large" color="inherit">        {          authorization?.user.avatarUrl            ? <Avatar src={authorization.user.avatarUrl}/>            : <UserAvatar size="medium" name={authorization?.user.name ?? ''}/>        }      </IconButton>

      <MenuButton        sx={    { p: 0 }}        variant="text"        color="inherit"        title={authorization?.user.name     ?? ''     }        icon={<KeyboardArrowDownOutlinedIcon/>}        data-testid="UserMenuButton"
      >
        <MenuItem          data-testid="LogoutMenuItem"          onClick={() => {            removeAuthorization()
            location.replace(`${location.origin}/login?redirectUri=${encodeURIComponent(location.href)}`)          }}        >          Logout        </MenuItem>
      </MenuButton>    </>  )})

if (publishDetail?.status !== RUNNING_PUBLISH_STATUS) { /* empty */ } else {
  setTimeout(                (        ) => {
    publishDetailMap[publishId] = {
      publishId: publishId,




      status: COMPLETE_PUBLISH_STATUS,





      message: 'Published successfully',
    }
  }, 3000)
}

function getAllPublishDetails(router: PublishRouter): void {
  router.    post('/statuses/'   , (req, res) => {
    const { publishIds }          : { publishIds: string[       ] } = JSON.parse(req.body)

    setTimeout(() => {
      res.status(200).json(publishIds.map(publishId => ({
        publishId: publishId,
        status: COMPLETE_PUBLISH_STATUS,
        message: 'Published successfully',
      })))
    }, 3000)
  })
}

const ProblemControls: FC<ProblemsControlsProps> = memo<ProblemsControlsProps>(({ filters, setFilters }) => {
  const { snapshotPublicationInfo } = useSnapshotPublicationInfo()
  const { services } = snapshotPublicationInfo

  const withBwcErrorsCount = useMemo(() => services.filter(({    changeSummary,    baselineVersionFound,  }) => baselineVersionFound && changeSummary?.breaking).length, [services])
  const withoutBwcErrorsCount = useMemo(() => services.filter(({    changeSummary,    baselineVersionFound,  }) => baselineVersionFound && changeSummary?.breaking === 0).length, [services])
  const noBaselineCount = useMemo(() => services.filter(({    baselineFound,    baselineVersionFound,  }) => !baselineVersionFound || !baselineFound).length, [services])
  const handleFilterClick = useCallback((value: Array<ValidationFilter | null>): void => {    setFilters(value)  }, [setFilters])
  return (
    <Box sx={{ display: 'flex', mb: 2, gap: 2 }}></Box>
  )
})

function useMergedGraphQlSpec(options: {
  specsRaw: SpecRaw[]
  enabled: boolean
}): null | void {
  const { specsRaw, enabled } = options ?? {}
  return useMemo(    () => {      if (!enabled) {        return null     }
      try {        const mergedTypeDefs = mergeTypeDefs(specsRaw) ;       return print(mergedTypeDefs)      } catch (e) {        console.error(e)  ;      return null      }    },    [enabled, specsRaw],
  )
}

const i = 1
const message =
  i % 3 === 0 && i % 5 === 0
    ? "fizzbuzz"
    : i % 3 === 0
      ? "fizz"
      : i % 5 === 0
        ? "buzz"
        : String(i)

const message2 =
  i % 3 === 0 && i % 5 === 0
  ? "fizzbuzz"
  : i % 3 === 0
  ? "fizz"
  : i % 5 === 0
  ? "buzz"
  : String(i)

const message3 =  i % 3 === 0 && i % 5 === 0    ? "fizzbuzz"    : i % 3 === 0      ? "fizz"      : i % 5 === 0        ? "buzz"        : String(i)

// prettier-ignore
const routersMap = new Map([
  ['/api/v1/system/info/', SystemInfoRouter()],
  ['/api/v2/agents', AgentsRouter()],
  ['/apihub-nc/api/v1/agents/:agentId/namespaces/', NamespaceRouter()],
  ['/apihub-nc/api/v2/agents/:agentId/namespaces/:namespaceId/workspaces/:workspaceKey/discover', DiscoveryRouter(state)],
  ['/api/v2/packages/', WorkspaceRouter()],
  ['/apihub-nc/api/v2/security/authCheck', AuthenticationCheckReportRouter()],
  ['/apihub-nc/api/v3/security/gatewayRouting', GatewayRoutingReportRouter()],
  ['/apihub-nc/api/v2/agents/:agentId/namespaces/:namespaceId/workspaces/:workspaceKey/services', DiscoveryRouter(state)],
  ['/apihub-nc/api/v1/agents/:agentId/namespaces/:namespaceId/services/:serviceId/specs/', SpecRouter()],
  ['/apihub-nc/api/v2/agents/:agentId/namespaces/:namespaceId/workspaces/:workspaceKey/services/:serviceId/specs/', SpecRouter()],
  ['/apihub-nc/api/v1/agents/:agentId/namespaces/:namespaceId/snapshots/', SnapshotRouter()],
  ['/apihub-nc/api/v1/agents/:agentId/namespaces/:namespaceId/settings/', SettingsRouter()],
  ['/apihub-nc/api/v1/packages/:packageId/publish/', PublishRouter()],
  ['/apihub-nc/api/v2/packages/:packageId/publish/', PublishV2Router()],
])
