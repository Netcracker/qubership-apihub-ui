import type { Document } from '@apihub/entities/documents'
import { PageLayout } from '@netcracker/qubership-apihub-ui-shared/components/PageLayout'
import { memo, useState, type FC } from 'react'
import { usePackageParamsWithRef } from '../../usePackageParamsWithRef'
import { AiAgentCard } from './AiAgentCard'
import { useAiEnhancementStatus } from './api/useAiEnhancementStatus'
import { PublishAiEnhancedVersionDialog } from './PublishEnhancedVersionDialog'
import { usePollingForAiEnhancementReadiness } from './utils/usePollingForAiEnhancementReadiness'

export const VersionAiAgentSubPage: FC = memo(() => {
  const [docPackageKey, docPackageVersion] = usePackageParamsWithRef()

  const [selectedDocument, setSelectedDocument] = useState<Document | undefined>(undefined)

  const {
    data: enhancementStatus,
    isLoading: loadingEnhancementStatus,
    refetch: refetchAiEnhancementStatus,
  } = useAiEnhancementStatus(
    docPackageKey,
    docPackageVersion,
    selectedDocument?.slug,
  )
  usePollingForAiEnhancementReadiness(
    enhancementStatus,
    refetchAiEnhancementStatus,
    {
      packageId: docPackageKey,
      version: docPackageVersion,
      slug: selectedDocument?.slug,
    },
  )

  return (
    <PageLayout
      navigation={null}
      body={<>
        <AiAgentCard
          enhancementStatus={enhancementStatus}
          onGlobalSelectedDocumentChange={setSelectedDocument}
        />
        <PublishAiEnhancedVersionDialog />
      </>}
      nestedPage
      testId="AiAgentTab"
    />
  )
})
