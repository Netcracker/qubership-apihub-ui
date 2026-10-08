import { type RulesetMetadata } from '@portal/entities/api-quality/rulesets'
import { LINTER_API_TYPE_TITLE_MAP } from '@portal/entities/api-quality/linter-api-types'
import { useEventBus } from '@portal/routes/EventBusProvider'
import { Box, Link, Skeleton } from '@mui/material'
import { styled } from '@mui/material/styles'
import { RulesetSpecTypeChip, RulesetStatusChip } from '@portal/components/ApiQuality/RulesetChips'
import { TextWithOverflowTooltip } from '@netcracker/qubership-apihub-ui-shared/components/TextWithOverflowTooltip'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import capitalize from 'lodash-es/capitalize'
import type { FC } from 'react'
import { memo, useCallback } from 'react'
import { useLinters } from '@portal/api-hooks/ApiQuality/useLinters'
import { getLinterName } from '@portal/utils/api-quality/linters'

type ValidationRulesetLinkProps = {
  data: RulesetMetadata | undefined
  loading: IsLoading
  // When the link runs out of space, hides the chips one by one before it truncates the title.
  hideChipsOnOverflow?: boolean
}

const CHIP_HEIGHT = 24

// First Order Component
export const ValidationRulesetLink: FC<ValidationRulesetLinkProps> = memo<ValidationRulesetLinkProps>(props => {
  const { data, loading, hideChipsOnOverflow = false } = props

  const { showRulesetInfoDialog } = useEventBus()

  const onClickRulesetName = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.stopPropagation()
      event.preventDefault()
      data && showRulesetInfoDialog(data)
    },
    [data, showRulesetInfoDialog],
  )

  const { data: lintersList = [] } = useLinters()

  if (loading) {
    return <Skeleton variant="rectangular" width={100} height={20} />
  }

  if (!data) { // Just type guard
    return null
  }

  const linterId = data.linter
  const linterTitle = getLinterName(linterId, lintersList)
  const fullRulesetTitle = `${linterTitle} ${data.name}`

  const ChipsContainer = hideChipsOnOverflow ? CollapsibleChips : Chips
  const titleFlexGrow = hideChipsOnOverflow ? 0 : 1

  return (
    <Box display='flex' justifyContent='space-between' alignItems='center' width='100%' minWidth={0}>
      <Box display='flex' gap={1} minWidth={0} flexGrow={titleFlexGrow}>
        <TextWithOverflowTooltip
          data-id='overflowtext'
          tooltipText={fullRulesetTitle}
          sx={{
            display: 'block',
            minWidth: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            flexGrow: 1,
          }}
        >
          {`${linterTitle} `}
          <Link
            data-testid="ValidationRulesetLinkName"
            onClick={onClickRulesetName}
            sx={{ display: 'inline' }}
          >
            {data.name}
          </Link>
        </TextWithOverflowTooltip>
      </Box>
      <ChipsContainer>
        <RulesetSpecTypeChip
          key={`validation-ruleset-link-api-type-${data.apiType}`}
          sx={{ m: 0 }}
          label={LINTER_API_TYPE_TITLE_MAP[data.apiType]}
          data-testid="ValidationRulesetApiTypeChip"
        />
        <RulesetStatusChip
          key='validation-ruleset-link-status'
          status={data.status}
          sx={{ m: 0 }}
          label={capitalize(data.status)}
          data-testid="ValidationRulesetStatusChip"
        />
      </ChipsContainer>
    </Box>
  )
})

const Chips = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexShrink: 0,
  gap: theme.spacing(1),
  marginLeft: theme.spacing(1),
}))

// A chip that does not fit wraps to the next line, and the fixed height hides that line.
// The zero width keeps the chips out of the link's intrinsic width, so they take only spare room.
const CollapsibleChips = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  alignContent: 'flex-start',
  columnGap: theme.spacing(1),
  flexGrow: 1,
  width: 0,
  minWidth: 0,
  maxWidth: 'max-content',
  height: CHIP_HEIGHT,
  overflow: 'hidden',
  // An empty first item lets the first chip wrap too: a flex line never wraps its only item.
  // Its height keeps the first line as tall as a chip, so a wrapped chip always lands below the visible area.
  '&::before': {
    content: '""',
    height: CHIP_HEIGHT,
  },
}))
