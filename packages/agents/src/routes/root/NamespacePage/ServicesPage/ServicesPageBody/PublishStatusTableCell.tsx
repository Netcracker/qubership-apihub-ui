import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { type FC, memo, type ReactNode } from 'react'

import { VersionErrorIndicator } from '@netcracker/qubership-apihub-ui-shared/components/ErrorIndicators/VersionErrorIndicator'
import {
  LOADING_STATUS_MARKER_VARIANT,
  StatusMarker,
} from '@netcracker/qubership-apihub-ui-shared/components/StatusMarker'
import {
  COMPLETE_PUBLISH_STATUS,
  NONE_PUBLISH_STATUS,
  type PublishDetails,
  RUNNING_PUBLISH_STATUS,
} from '@netcracker/qubership-apihub-ui-shared/utils/packages-builder'

import {
  COMPLETE_WITH_ERRORS_PUBLISH_STATUS_DESCRIPTION,
  PUBLISH_STATUS_TO_STATUS_DESCRIPTION_MAP,
  PUBLISH_STATUS_TO_STATUS_MARKER_VARIANT_MAP,
  type PublishStatusDescription,
} from '../../constants'

type PublishStatusTableCellProps = {
  publishDetails: PublishDetails
}

type PublishStatusContentProps = {
  marker: ReactNode
  description: PublishStatusDescription
}

export const PublishStatusTableCell: FC<PublishStatusTableCellProps> = memo<PublishStatusTableCellProps>(({
  publishDetails: { status, hasErrors, changelogHasErrors },
}) => {
  if (status === NONE_PUBLISH_STATUS || status === RUNNING_PUBLISH_STATUS) {
    return <StatusMarker value={LOADING_STATUS_MARKER_VARIANT} />
  }

  if (status === COMPLETE_PUBLISH_STATUS && hasErrors) {
    return (
      <PublishStatusContent
        marker={
          <VersionErrorIndicator
            hasErrors={hasErrors}
            changelogHasErrors={changelogHasErrors}
            fontSize="extra-small"
          />
        }
        description={COMPLETE_WITH_ERRORS_PUBLISH_STATUS_DESCRIPTION}
      />
    )
  }

  return (
    <PublishStatusContent
      marker={<StatusMarker value={PUBLISH_STATUS_TO_STATUS_MARKER_VARIANT_MAP[status]} />}
      description={PUBLISH_STATUS_TO_STATUS_DESCRIPTION_MAP[status]}
    />
  )
})

PublishStatusTableCell.displayName = 'PublishStatusTableCell'

const PublishStatusContent: FC<PublishStatusContentProps> = ({ marker, description }) => (
  <StatusCell>
    {marker}
    <Typography noWrap variant="inherit">
      {description}
    </Typography>
  </StatusCell>
)

PublishStatusContent.displayName = 'PublishStatusContent'

const StatusCell = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}))
