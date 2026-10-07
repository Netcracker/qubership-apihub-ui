import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./react---BZM-86.js";import{t as n}from"./jsx-runtime--WVWf14b.js";import{n as r,t as i}from"./VersionErrorIndicator-CEIp-hqK.js";import{t as a,u as o}from"./version-status-DFBbv5An.js";import{i as s,o as c}from"./packages-DqV0jDkM.js";import{i as l,n as u}from"./versions-DKjHwp6C.js";var d,f,p;function m(){return(m=e((()=>{d=t(),l(),r(),f=n(),p=(0,d.memo)(({reference:{version:e,latestRevision:t,kind:n,hasErrors:r,changelogHasErrors:a,apiProcessorVersion:o},...s})=>(0,f.jsx)(i,{versionKey:u(e,t).versionKey,kind:n,hasErrors:r,changelogHasErrors:a,apiProcessorVersion:o,...s})),p.displayName=`PackageReferenceErrorIndicator`,p.__docgenInfo={description:``,methods:[],displayName:`PackageReferenceErrorIndicator`,props:{"data-testid":{required:!1,tsType:{name:`string`},description:``},tooltip:{required:!1,tsType:{name:`ReactNode`},description:``},showTooltip:{required:!1,tsType:{name:`boolean`},description:``},tooltipPlacement:{required:!1,tsType:{name:`TooltipProps['placement']`,raw:`TooltipProps['placement']`},description:``},fontSize:{required:!1,tsType:{name:`SvgIconProps['fontSize']`,raw:`SvgIconProps['fontSize']`},description:``},tabIndex:{required:!1,tsType:{name:`number`},description:``},className:{required:!1,tsType:{name:`string`},description:``},reference:{required:!0,tsType:{name:`Partial`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  kind: ReferenceKind
  name: string
  version: Key
  status: VersionStatus
  deletedAt: string
  deletedBy: string
  parentPackages: ReadonlyArray<Key>
  latestRevision: boolean
  hasErrors: boolean
  changelogHasErrors: boolean
  apiProcessorVersion: string
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`kind`,value:{name:`union`,raw:`| typeof PACKAGE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`PACKAGE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`version`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`status`,value:{name:`union`,raw:`| typeof DRAFT_VERSION_STATUS
| typeof RELEASE_VERSION_STATUS`,elements:[{name:`DRAFT_VERSION_STATUS`},{name:`RELEASE_VERSION_STATUS`}],required:!0}},{key:`deletedAt`,value:{name:`string`,required:!0}},{key:`deletedBy`,value:{name:`string`,required:!0}},{key:`parentPackages`,value:{name:`ReadonlyArray`,elements:[{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}],raw:`ReadonlyArray<Key>`,required:!0}},{key:`latestRevision`,value:{name:`boolean`,required:!0}},{key:`hasErrors`,value:{name:`boolean`,required:!0}},{key:`changelogHasErrors`,value:{name:`boolean`,required:!0}},{key:`apiProcessorVersion`,value:{name:`string`,required:!0}}]}}],raw:`Readonly<{
  key: Key
  kind: ReferenceKind
  name: string
  version: Key
  status: VersionStatus
  deletedAt: string
  deletedBy: string
  parentPackages: ReadonlyArray<Key>
  latestRevision: boolean
  hasErrors: boolean
  changelogHasErrors: boolean
  apiProcessorVersion: string
}>`}],raw:`Partial<Readonly<{
  key: Key
  kind: ReferenceKind
  name: string
  version: Key
  status: VersionStatus
  deletedAt: string
  deletedBy: string
  parentPackages: ReadonlyArray<Key>
  latestRevision: boolean
  hasErrors: boolean
  changelogHasErrors: boolean
  apiProcessorVersion: string
}>>`},description:``}}}})))()}var h;function g(){return(g=e((()=>{c(),o(),h=[{kind:s,name:`APIHUB backend`,version:`2023.1-3@1`,status:a,parentPackages:[`Primary`,`Secondary`,`APIHUB`],key:`QS.AH`,latestRevision:!0},{kind:s,name:`petstore`,version:`2023.1@1`,status:a,parentPackages:[`Primary`,`Secondary`,`apps`,`Petstore`],key:`PRMR.SCDR.APPS.PTSTR`,latestRevision:!1},{kind:s,name:`petstore`,version:`2023.1@5`,status:a,parentPackages:[`Primary`,`Secondary`,`apps`,`Petstore`],key:`PRMR.SCDR.APPS.PTSTR`,latestRevision:!0},{kind:s,name:`bookstore`,version:`draft_1@1`,status:a,parentPackages:[`Primary`,`Secondary`,`apps`,`Bookstore`],key:`PRMR.SCDR.APPS.BKSTR`,latestRevision:!0,hasErrors:!0},{kind:s,name:`My Package`,version:`test_1@1`,status:a,parentPackages:[`Personal sandboxes`,`My Package`],key:`PSB.MYPKG`,latestRevision:!0,changelogHasErrors:!0}]})))()}export{m as i,h as n,p as r,g as t};