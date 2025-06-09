import { LayoutWithSidebar } from '@netcracker/qubership-apihub-ui-shared/components/PageLayouts/LayoutWithSidebar'
import { memo } from 'react'
import type { FC } from 'react'

export const VersionApiQualitySubPage: FC = memo(() => {
  return (
    <LayoutWithSidebar
      header={<div>Header</div>}
      body={<div>Body</div>}
    />
  )
})
