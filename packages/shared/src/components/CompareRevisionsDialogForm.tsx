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

import type { FC } from 'react'
import * as React from 'react'
import { memo, useState } from 'react'
import {
  Autocomplete,
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  ListItem,
  TextField,
  Typography,
} from '@mui/material'
import type { Control, UseFormSetValue } from 'react-hook-form'
import { Controller, useWatch } from 'react-hook-form'
import { LoadingButton } from '@mui/lab'
import { DialogForm } from './DialogForm'
import { CustomChip } from './CustomChip'
import { Swapper } from './Swapper'
import { LatestRevisionMark } from './LatestRevisionMark'
import type { Revision, Revisions } from '../entities/revisions'
import { REVISION_DELIMITER } from '../entities/versions'
import {
  useComparisonParams,
} from '../../../portal/src/routes/root/PortalPage/VersionPage/useComparisonParams'
import { WARNING_API_PROCESSOR_TEXT, WarningApiProcessorVersion } from '../../../portal/src/components/WarningApiProcessorVersion'

export type CompareRevisionsDialogFormData = {
  originalRevision: Revision | null
  changedRevision: Revision | null
}

export type CompareRevisionsDialogData = {
  control: Control<CompareRevisionsDialogFormData>
  setValue: UseFormSetValue<CompareRevisionsDialogFormData>
  originalRevisions: Revisions
  changedRevisions: Revisions
  isApiTypeFetching: boolean
  onSubmit: () => void
  onSwap: () => void
  isRevisionsLoading: boolean | undefined
}

export type CompareRevisionsDialogFormProps = CompareRevisionsDialogData & {
  open: boolean
  setOpen: (value: boolean) => void
}

// First Order Component //
export const CompareRevisionsDialogForm: FC<CompareRevisionsDialogFormProps> = memo(({
  open,
  setOpen,
  setValue,
  control,
  onSubmit,
  onSwap,
  isApiTypeFetching,
  originalRevisions,
  changedRevisions,
  isRevisionsLoading,
}) => {
  const { originPackageKey } = useComparisonParams()
  const [warningApiProcessorStatePrevious, setWarningApiProcessorStatePrevious] = useState('')
  const [warningApiProcessorStateCurrent, setWarningApiProcessorStateCurrent] = useState('')
  const previousRevision = useWatch({ control: control, name: 'originalRevision' })
  const currentRevisions = useWatch({ control: control, name: 'changedRevision' })

  return (
    <DialogForm
      open={open}
      onClose={() => setOpen(false)}
      onSubmit={onSubmit}
      maxWidth="md"
    >
      <DialogTitle>
        Select Revisions To Compare
      </DialogTitle>

      <DialogContent sx={DIALOG_CONTENT_STYLES}>
        <Typography
          sx={{ gridArea: 'originalTitle' }}
          variant="button"
        >
          Previous
        </Typography>

        <Controller
          name="originalRevision"
          control={control}
          render={({ field: { value, onChange } }) => (
            <RevisionAutocomplete
              value={value}
              onChange={(value) => {
                if (!value) {
                  setWarningApiProcessorStatePrevious('')
                }
                onChange(value)
              }}
              controllerName="originalRevision"
              revisions={originalRevisions}
              isLoading={isRevisionsLoading}
              setValue={() => setValue('originalRevision', null)}
              dataTestId="PreviousRevisionAutocomplete"
            />
          )}
        />

        <Box sx={{ gridArea: 'swapper', alignSelf: 'center' }}>
          <Swapper onSwap={onSwap}/>
        </Box>

        <Typography
          sx={{ gridArea: 'changedTitle' }}
          variant="button"
        >
          Current
        </Typography>

        <Controller
          name="changedRevision"
          control={control}
          render={({ field: { value, onChange } }) => (
            <RevisionAutocomplete
              value={value}
              onChange={(value) => {
                if (!value) {
                  setWarningApiProcessorStateCurrent('')
                }
                onChange(value)
              }}
              controllerName="changedRevision"
              revisions={changedRevisions}
              isLoading={isRevisionsLoading}
              setValue={() => setValue('changedRevision', null)}
              dataTestId="CurrentRevisionAutocomplete"
            />
          )}
        />
      </DialogContent>
      <Box sx={{ maxWidth: '692px', padding: '0 24px' }}>
        {(<WarningApiProcessorVersion
          versionKey={previousRevision?.version}
          packageKey={originPackageKey}
          type={WARNING_API_PROCESSOR_TEXT}
          hidden={!!warningApiProcessorStateCurrent}
          data-testid="WarningApiProcessorVersionPrevios"
          onWarningTextChange={setWarningApiProcessorStatePrevious}/>)}
        {(<WarningApiProcessorVersion
          data-testid="WarningApiProcessorVersionCurrent"
          versionKey={currentRevisions?.version}
          packageKey={originPackageKey}
          type={WARNING_API_PROCESSOR_TEXT}
          onWarningTextChange={setWarningApiProcessorStateCurrent}/>)}
      </Box>
      <DialogActions>
        <LoadingButton
          variant="contained"
          type="submit"
          disabled={!!warningApiProcessorStatePrevious || !!warningApiProcessorStateCurrent}
          loading={isApiTypeFetching}
          data-testid="CompareButton"
        >
          Compare
        </LoadingButton>
        <Button variant="outlined" onClick={() => setOpen(false)} data-testid="CancelButton">
          Cancel
        </Button>
      </DialogActions>
    </DialogForm>
  )
})

type RevisionAutocompleteProps = {
  value: Revision | null
  onChange: (value: Revision | null) => void
  controllerName: string
  revisions: Revisions
  isLoading: boolean | undefined
  setValue: () => void
  dataTestId: string
}

const RevisionAutocomplete: FC<RevisionAutocompleteProps> = memo<RevisionAutocompleteProps>(({
  value,
  onChange,
  controllerName,
  revisions,
  isLoading,
  setValue,
  dataTestId,
}) => {
  return (
    <Autocomplete
      sx={{ gridArea: controllerName }}
      value={value ?? null}
      loading={isLoading}
      options={isLoading ? [] : revisions}
      getOptionLabel={(revision) => `${REVISION_DELIMITER}${revision.revision}`}
      isOptionEqualToValue={(option, value) => option.revision === value.revision}
      renderOption={(props, revision) => <AutocompleteOption revision={revision} props={props}/>}
      renderInput={(params) => <TextField {...params} required label="Revision"/>}
      onChange={(_, value) => {
        setValue()
        onChange(value)
      }}
      data-testid={dataTestId}
    />
  )
})

type AutocompleteOptionProps = {
  revision: Revision
  props: React.HTMLAttributes<HTMLLIElement>
}

const AutocompleteOption: FC<AutocompleteOptionProps> = memo<AutocompleteOptionProps>(({ revision, props }) => {

  return (
    <ListItem
      {...props}
      key={revision.revision}
    >
      <Box width="100%" display="flex" justifyContent="space-between">
        <Box display="flex" gap="4px" alignItems="center">
          {`${REVISION_DELIMITER}${revision.revision}`}
          <LatestRevisionMark latest={revision.latestRevision}/>
        </Box>
        <CustomChip value={revision.status}/>
      </Box>
    </ListItem>
  )
})

const DIALOG_CONTENT_STYLES = {
  display: 'grid',
  columnGap: 1,
  gridTemplateRows: 'repeat(2, max-content)',
  gridTemplateColumns: '300px max-content 300px',
  gridTemplateAreas: `
    'originalTitle      originalTitle   changedTitle'
    'originalRevision   swapper         changedRevision'
  `,
}
