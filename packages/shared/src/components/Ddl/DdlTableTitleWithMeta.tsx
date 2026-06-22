import { Box, Link, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import type { Path } from '@remix-run/router'
import type { FC } from 'react'
import { memo } from 'react'
import { NavLink } from 'react-router-dom'

import type { DdlContractEntity } from '../../entities/contracts-ddl'
import { getDdlEntityDescription, getDdlEntityDisplayName, getDdlEntitySchemaName } from '../../entities/contracts-ddl'
import { EMPTY_SUBTITLE_PLACEHOLDER } from '../../utils/placeholders'
import { CustomChip } from '../CustomChip'
import { OverflowTooltip } from '../OverflowTooltip'
import { TextWithOverflowTooltip } from '../TextWithOverflowTooltip'

export type DdlTableTitleWithMetaProps = {
  table: DdlContractEntity
  link?: Partial<Path>
  onLinkClick?: () => void
  onlyTitle?: boolean
}

export const DdlTableTitleWithMeta: FC<DdlTableTitleWithMetaProps> = memo<DdlTableTitleWithMetaProps>(({
  table,
  link,
  onLinkClick,
  onlyTitle = false,
}) => {
  const title = getDdlEntityDisplayName(table)
  const schemaName = getDdlEntitySchemaName(table)
  const description = getDdlEntityDescription(table)

  const titleNode = link
    ? (
      <Typography noWrap variant="subtitle1">
        <Link
          component={NavLink}
          to={link}
          onClick={(event) => {
            event.stopPropagation()
            onLinkClick?.()
          }}
        >
          {title}
        </Link>
      </Typography>
    )
    : <Typography noWrap variant="inherit">{title}</Typography>

  return (
    <TitleColumn>
      <TitleRow>
        <OverflowTooltip title={title}>
          {titleNode}
        </OverflowTooltip>
      </TitleRow>
      {!onlyTitle && (
        <SubtitleRow data-testid="DdlTableSubtitle">
          {schemaName && <CustomChip value={schemaName} variant="outlined" data-testid="DdlTableSchemaChip" />}
          <TextWithOverflowTooltip tooltipText={description} variant="subtitle2">
            {description ?? EMPTY_SUBTITLE_PLACEHOLDER}
          </TextWithOverflowTooltip>
        </SubtitleRow>
      )}
    </TitleColumn>
  )
})

DdlTableTitleWithMeta.displayName = 'DdlTableTitleWithMeta'

const TitleColumn = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minWidth: 0,
})

const TitleRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
})

const SubtitleRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  minHeight: 20,
}))
