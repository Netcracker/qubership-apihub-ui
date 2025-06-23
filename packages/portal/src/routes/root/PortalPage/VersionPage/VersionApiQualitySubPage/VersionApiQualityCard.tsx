import { Box } from '@mui/material'
import { BodyCard } from '@netcracker/qubership-apihub-ui-shared/components/BodyCard'
import { Toggler } from '@netcracker/qubership-apihub-ui-shared/components/Toggler'
import type { FC, ReactNode } from 'react'
import { memo, useMemo, useState } from 'react'
import { ValidationResultLink } from './ValidatationRulesetLink'
import type { OriginalDocumentFileFormat } from './types'
import { YAML_FILE_FORMAT, JSON_FILE_FORMAT } from '@apihub/entities/file-formats'

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
        sx={{ borderBottom: borderStyle, borderRight: borderStyle, pb: internalIndent, pr: internalIndent }}
      >
        {leftHeader}
      </Box>
      <Box
        gridArea="right-header"
        sx={{ borderBottom: borderStyle, borderLeft: borderStyle, pb: internalIndent, pl: internalIndent }}
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
  const [format, setFormat] = useState<OriginalDocumentFileFormat>(YAML_FILE_FORMAT)
  
  return (
    <BodyCard
      body={
        <TwoSidedCard
          leftHeader={
            <>

              <ValidationResultLink rulesetName='My Ruleset' status='OK' />
            </>
          }
          rightHeader={
            <Toggler<OriginalDocumentFileFormat>
              mode={format}
              modes={[YAML_FILE_FORMAT, JSON_FILE_FORMAT]}
              onChange={setFormat}
            />
          }
          leftBody={<div>Table with validation results</div>}
          rightBody={<div>Monaco Editor (RO) with validated document</div>}
        />
      }
    />
  )
})
