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

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import type { FC, ReactNode } from 'react'
import React, { memo } from 'react'

export type CustomAccordionProps = {
  expanded: boolean
  title: string
  accordionDetails: ReactNode
  setExpanded: () => void
}
export const CustomAccordion: FC<CustomAccordionProps> = memo<CustomAccordionProps>((props) => {
  const { expanded, accordionDetails, title, setExpanded } = props

  return (
    <Accordion expanded={expanded} onChange={setExpanded} elevation={0} sx={{ display: 'contents' }}>
      <AccordionSummary
        sx={ACCORDION_SUMMARY_STYLE}
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography width="100%" noWrap variant="button">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ width: '100%' }}>
        {accordionDetails}
      </AccordionDetails>
    </Accordion>
  )
})

const ACCORDION_SUMMARY_STYLE = {
  '&.MuiButtonBase-root': {
    p: 0,
    '&.MuiAccordionSummary-root': {
      flexDirection: 'row-reverse',
      '.MuiAccordionSummary-content': {
        width: '100%',
        display: 'contents',
      },
    },
  },
}
