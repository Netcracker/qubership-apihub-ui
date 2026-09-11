import type { VersionKey } from '../entities/keys'

export const PUBLICATION_ERROR_MESSAGES = {
  packageVersion: {
    version:
      'Errors occurred while processing some documents in this version. Open the Documents tab to see the details.',
    changelog:
      'There were errors when calculating the comparison against the previous version, so the list of changes may be incomplete.',
    versionChangelog:
      'Errors occurred while processing some documents in this version. Open the Documents tab to see the details. There were also errors when calculating the comparison against the previous version, so the list of changes may be incomplete.',
    adHocComparison: 'There were errors when calculating the comparison, so the list of changes may be incomplete.',
  },
  dashboardVersion: {
    version:
      'This dashboard includes package versions which were published with errors. Open Packages tab on Overview to see the details.',
    changelog:
      'There were errors when calculating the comparison against the previous version for some of the packages in this dashboard, so the list of changes may be incomplete. Open Changelog tab to see the details.',
    versionChangelog:
      'This dashboard includes package versions which were published with errors. Open Packages tab on Overview to see the details. There were also errors when calculating the comparison against the previous version for some of the packages in this dashboard, so the list of changes may be incomplete. Open Changelog tab to see the details.',
    adHocComparison:
      'There were errors when calculating the comparison for some of the package version in this dashboard, so the list of changes may be incomplete.',
  },
  dialog: {
    previousVersionUnsound:
      'The selected previous version has errors and cannot be used for comparison. Select another version.',
    previousRevisionUnsound:
      'The selected previous revision has errors and cannot be used for comparison. Select another revision.',
    sourceVersionUnsound: 'This version has errors and cannot be copied. Fix the errors and publish a new revision.',
    dashboardAddUnsound: 'This version has errors and cannot be added to the dashboard. Select another version.',
    releasePromotionRefused: 'This version has errors and the status cannot be changed.',
  },
  reference: {
    childIssueDot:
      'One of the child package/dashboard version no longer exists. Expand this dashboard to see deleted package/dashboard version.',
    dashboardMissing: 'The included dashboard version no longer exists.',
    packageMissing: 'The included package version no longer exists.',
    subtabPackagesHasIssues:
      'Some included packages or dashboards have errors or no longer exist. Open this tab to see the details.',
  },
  document: {
    itemError: 'There were errors when processing the document. Click Document Errors button to see details.',
    menuDownload: 'Download document',
  },
  snackbar: {
    draftPublishWithErrors: {
      title: 'Version published with errors',
      body: 'Part of the content could not be processed and is missing from this version',
      action: 'View Documents',
    },
    releasePublishRefused: {
      title: 'Publication failed',
      body:
        'Cannot publish this version in release status because it has errors. Publish it in draft status to see the details.',
      action: 'View Details',
    },
  },
} as const

export function getApiProcessorMismatchTooltip(versionKey?: VersionKey): string {
  const version = versionKey ?? ''
  return `The data in the version '${version}' may be incorrect, as the data has not been processed according to the latest system rules. Please republish the version and if this does not help, contact the system administrators.`
}

export function getPackageVersionApiTypeNoOperationsTooltip(apiType: string): string {
  return `Errors occurred while processing ${apiType} documents in this version, no operations were published. Open the Documents tab to see the details.`
}

export function getPackageVersionApiTypeSomeOperationsTooltip(apiType: string): string {
  return `Errors occurred while processing ${apiType} documents in this version. Some operations may be missing. Open the Documents tab to see the details.`
}

export function getPackageVersionContractTypeNoEntitiesTooltip(contractType: string): string {
  return `Errors occurred while processing ${contractType} documents in this version, no entities were published. Open the Documents tab to see the details.`
}

export function getPackageVersionContractTypeSomeEntitiesTooltip(contractType: string): string {
  return `Errors occurred while processing ${contractType} documents in this version. Some entities may be missing. Open the Documents tab to see the details.`
}

export function getPackageVersionApiTypeDocumentListTooltip(documentNames: string[]): string {
  return ['Errors occurred while processing the following documents:', ...documentNames].join('\n')
}
