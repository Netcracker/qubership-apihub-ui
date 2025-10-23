import { PageLayout } from '@netcracker/qubership-apihub-ui-shared/components/PageLayout'
import { memo, type FC } from 'react'
import { AiAgentCard } from './AiAgentCard'

export const VersionAiAgentSubPage: FC = memo(() => {
  return (
    <PageLayout
      navigation={null}
      body={<AiAgentCard />}
      nestedPage
      testId="AiAgentTab"
    />
  )
})
