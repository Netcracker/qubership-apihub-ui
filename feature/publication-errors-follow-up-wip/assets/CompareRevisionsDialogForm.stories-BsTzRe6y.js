import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./react---BZM-86.js";import{l as n}from"./dist-F8la4u6j.js";import{n as r,r as i}from"./dist-sHNipvf9.js";import{t as a}from"./jsx-runtime--WVWf14b.js";import{n as o,t as s}from"./Box-CzqjOcoU.js";import{n as c,t as l}from"./TextField-DOxe2ZJj.js";import{n as u,t as d}from"./Typography-B5fOEpx5.js";import{n as f,t as ee}from"./Button-DrgAR6qf.js";import{n as p,t as m}from"./DialogContent-B-a-mUNQ.js";import{i as h,n as g,r as te,t as ne}from"./DialogTitle-BLBZWaKA.js";import{a as _,g as v,h as y,i as b,n as x,r as S,s as C,t as re}from"./VersionErrorIndicator-D4w92nTv.js";import{n as ie,t as ae}from"./Swapper-C0XGu4iR.js";import{n as oe,t as se}from"./LoadingButton-B77sxCaX.js";import{n as ce,t as le}from"./DialogForm-DbSCbMTB.js";import{i as w,n as T,r as ue,t as E}from"./index.esm-hA6-Vtk1.js";import{n as de,t as fe}from"./OptionItem--oCqGPu7.js";import{a as pe,t as me,u as he}from"./version-status-DFBbv5An.js";import{n as ge,t as _e}from"./VersionStatusChip-exiRKLEc.js";import{i as ve,n as ye,r as be,t as D}from"./VersionFieldErrorIndicator-dv88R5ah.js";import{n as xe,t as Se}from"./VersionSelectorAutocomplete-u1bRL262.js";import{n as O,r as Ce}from"./principals-Brat3obT.js";var k,A,j;function M(){return(M=e((()=>{k=t(),u(),A=a(),j=(0,k.memo)(({latest:e=!1})=>(0,A.jsx)(d,{variant:`subtitle2`,fontSize:13,children:`${e?` (latest)`:``}`})),j.__docgenInfo={description:``,methods:[],displayName:`LatestRevisionMark`,props:{latest:{required:!1,tsType:{name:`union`,raw:`boolean | undefined`,elements:[{name:`boolean`},{name:`undefined`}]},description:``,defaultValue:{value:`false`,computed:!1}}}}})))()}function we(e){let[t]=i();return t.get(e)??void 0}function N(){return(N=e((()=>{r()})))()}function Te(){let[e,t]=i();return(0,P.useCallback)((n,r)=>{for(let t in n)n[t]?e.set(t,n[t]):e.delete(t);t(e,r)},[e,t])}var P;function F(){return(F=e((()=>{r(),P=t()})))()}function Ee(){let e=we(y),t=Te();return(0,I.useMemo)(()=>[e,e=>t({[y]:e??``},{replace:!0})],[e,t])}var I;function L(){return(L=e((()=>{I=t(),N(),F(),v()})))()}var R,z,B,V,H,U;function W(){return(W=e((()=>{R=t(),o(),f(),h(),p(),g(),c(),u(),T(),oe(),ce(),ge(),de(),ie(),M(),ve(),x(),ye(),xe(),S(),C(),r(),L(),z=a(),B=(0,R.memo)(({open:e,setOpen:t,control:r,onSubmit:i,onSwap:a,isApiTypeFetching:o,originalRevisions:c,changedRevisions:l,isRevisionsLoading:u,kind:f})=>{let{packageId:p}=n(),[h]=Ee(),g=h??p,v=w({control:r,name:`originalRevision`}),y=w({control:r,name:`changedRevision`}),x=b({packageKey:g,versionKey:v?.version,hasErrors:v?.hasErrors,changelogHasErrors:v?.changelogHasErrors,apiProcessorVersion:v?.apiProcessorVersion,kind:f,surface:_.COMPARE_PREVIOUS_REVISION}),S=b({packageKey:g,versionKey:y?.version,hasErrors:y?.hasErrors,changelogHasErrors:y?.changelogHasErrors,apiProcessorVersion:y?.apiProcessorVersion,kind:f,surface:_.COMPARE_CURRENT_REVISION});return(0,z.jsxs)(le,{open:e,onClose:()=>t(!1),onSubmit:i,maxWidth:`md`,children:[(0,z.jsx)(ne,{children:`Select Revisions To Compare`}),(0,z.jsxs)(m,{sx:U,children:[(0,z.jsx)(d,{sx:{gridArea:`originalTitle`},variant:`button`,children:`Previous`}),(0,z.jsx)(E,{name:`originalRevision`,control:r,render:({field:{value:e,onChange:t}})=>(0,z.jsx)(V,{value:e,onChange:t,controllerName:`originalRevision`,revisions:c,isLoading:u,error:x.isBlocking,indicator:x.hasProblems&&(0,z.jsx)(D,{problem:x}),"data-testid":`PreviousRevisionAutocomplete`})}),(0,z.jsx)(s,{sx:{gridArea:`swapper`,alignSelf:`center`},children:(0,z.jsx)(ae,{onSwap:a})}),(0,z.jsx)(d,{sx:{gridArea:`changedTitle`},variant:`button`,children:`Current`}),(0,z.jsx)(E,{name:`changedRevision`,control:r,render:({field:{value:e,onChange:t}})=>(0,z.jsx)(V,{value:e,onChange:t,controllerName:`changedRevision`,revisions:l,isLoading:u,error:S.isBlocking,indicator:S.hasProblems&&(0,z.jsx)(D,{problem:S}),"data-testid":`CurrentRevisionAutocomplete`})})]}),(0,z.jsx)(s,{sx:{maxWidth:`692px`,padding:`0 24px`},children:(0,z.jsx)(be,{message:S.formHelperText??x.formHelperText})}),(0,z.jsxs)(te,{children:[(0,z.jsx)(se,{variant:`contained`,type:`submit`,disabled:x.isBlocking||S.isBlocking,loading:o,"data-testid":`CompareButton`,children:`Compare`}),(0,z.jsx)(ee,{variant:`outlined`,onClick:()=>t(!1),"data-testid":`CancelButton`,children:`Cancel`})]})]})}),B.displayName=`CompareRevisionsDialogForm`,V=(0,R.memo)(({value:e,onChange:t,controllerName:n,revisions:r,isLoading:i,error:a=!1,indicator:o,"data-testid":s=`RevisionAutocomplete`})=>(0,z.jsx)(Se,{sx:{gridArea:n},inputIndicator:o,value:e??null,onChange:(e,n)=>{t(n)},options:i?[]:r,loading:i,getOptionLabel:e=>`@${e.revision}`,isOptionEqualToValue:(e,t)=>e.revision===t.revision,renderOption:(e,t)=>(0,z.jsx)(H,{props:e,revision:t},t.revision),renderInput:e=>(0,z.jsx)(l,{...e,label:`Revision`,required:!0,error:a}),"data-testid":s})),V.displayName=`RevisionAutocomplete`,H=(0,R.memo)(({revision:e,props:t})=>(0,z.jsx)(fe,{props:t,title:`@${e.revision}`,overflowTooltipPlacement:`left`,indicator:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(j,{latest:e.latestRevision}),(0,z.jsx)(re,{versionKey:e.version,hasErrors:e.hasErrors,changelogHasErrors:e.changelogHasErrors,apiProcessorVersion:e.apiProcessorVersion,fontSize:`extra-small`,showTooltip:!1})]}),chip:(0,z.jsx)(_e,{status:e.status})})),H.displayName=`AutocompleteOption`,U={display:`grid`,columnGap:1,gridTemplateRows:`repeat(2, max-content)`,gridTemplateColumns:`300px max-content 300px`,gridTemplateAreas:`
    'originalTitle      originalTitle   changedTitle'
    'originalRevision   swapper         changedRevision'
  `},B.__docgenInfo={description:``,methods:[],displayName:`CompareRevisionsDialogForm`,props:{control:{required:!0,tsType:{name:`Control`,elements:[{name:`signature`,type:`object`,raw:`{
  originalRevision: Revision | null
  changedRevision: Revision | null
}`,signature:{properties:[{key:`originalRevision`,value:{name:`union`,raw:`Revision | null`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  revision: number
  version: Key
  latestRevision: boolean
  status: VersionStatus
  createdBy: Principal
  createdAt: string
  revisionLabels?: string[]
  publishMeta?: PublishMeta
  hasErrors?: boolean
  changelogHasErrors?: boolean
  apiProcessorVersion?: string
}`,signature:{properties:[{key:`revision`,value:{name:`number`,required:!0}},{key:`version`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`latestRevision`,value:{name:`boolean`,required:!0}},{key:`status`,value:{name:`union`,raw:`| typeof DRAFT_VERSION_STATUS
| typeof RELEASE_VERSION_STATUS`,elements:[{name:`DRAFT_VERSION_STATUS`},{name:`RELEASE_VERSION_STATUS`}],required:!0}},{key:`createdBy`,value:{name:`union`,raw:`User | Token | Job`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: typeof USER
  id: Key
  name?: string
  email?: string
  avatarUrl?: Url
}`,signature:{properties:[{key:`type`,value:{name:`USER`,required:!0}},{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!1}},{key:`email`,value:{name:`string`,required:!1}},{key:`avatarUrl`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}}]}}],raw:`Readonly<{
  type: typeof USER
  id: Key
  name?: string
  email?: string
  avatarUrl?: Url
}>`},{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: typeof API_KEY
  id: Key
  name: string
}`,signature:{properties:[{key:`type`,value:{name:`API_KEY`,required:!0}},{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!0}}]}}],raw:`Readonly<{
  type: typeof API_KEY
  id: Key
  name: string
}>`},{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: typeof JOB
  id: Key
  name: string
}`,signature:{properties:[{key:`type`,value:{name:`JOB`,required:!0}},{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!0}}]}}],raw:`Readonly<{
  type: typeof JOB
  id: Key
  name: string
}>`}],required:!0}},{key:`createdAt`,value:{name:`string`,required:!0}},{key:`revisionLabels`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!1}},{key:`publishMeta`,value:{name:`Partial`,elements:[{name:`signature`,type:`object`,raw:`{
  commitKey: Key
  branchName: string
  repositoryUrl: string
  versionLabels: string[]
  cloudName: string
  cloudUrl: string
  namespace: string
}`,signature:{properties:[{key:`commitKey`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`branchName`,value:{name:`string`,required:!0}},{key:`repositoryUrl`,value:{name:`string`,required:!0}},{key:`versionLabels`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!0}},{key:`cloudName`,value:{name:`string`,required:!0}},{key:`cloudUrl`,value:{name:`string`,required:!0}},{key:`namespace`,value:{name:`string`,required:!0}}]}}],raw:`Partial<{
  commitKey: Key
  branchName: string
  repositoryUrl: string
  versionLabels: string[]
  cloudName: string
  cloudUrl: string
  namespace: string
}>`,required:!1}},{key:`hasErrors`,value:{name:`boolean`,required:!1}},{key:`changelogHasErrors`,value:{name:`boolean`,required:!1}},{key:`apiProcessorVersion`,value:{name:`string`,required:!1}}]}}],raw:`Readonly<{
  revision: number
  version: Key
  latestRevision: boolean
  status: VersionStatus
  createdBy: Principal
  createdAt: string
  revisionLabels?: string[]
  publishMeta?: PublishMeta
  hasErrors?: boolean
  changelogHasErrors?: boolean
  apiProcessorVersion?: string
}>`},{name:`null`}],required:!0}},{key:`changedRevision`,value:{name:`union`,raw:`Revision | null`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  revision: number
  version: Key
  latestRevision: boolean
  status: VersionStatus
  createdBy: Principal
  createdAt: string
  revisionLabels?: string[]
  publishMeta?: PublishMeta
  hasErrors?: boolean
  changelogHasErrors?: boolean
  apiProcessorVersion?: string
}`,signature:{properties:[{key:`revision`,value:{name:`number`,required:!0}},{key:`version`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`latestRevision`,value:{name:`boolean`,required:!0}},{key:`status`,value:{name:`union`,raw:`| typeof DRAFT_VERSION_STATUS
| typeof RELEASE_VERSION_STATUS`,elements:[{name:`DRAFT_VERSION_STATUS`},{name:`RELEASE_VERSION_STATUS`}],required:!0}},{key:`createdBy`,value:{name:`union`,raw:`User | Token | Job`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: typeof USER
  id: Key
  name?: string
  email?: string
  avatarUrl?: Url
}`,signature:{properties:[{key:`type`,value:{name:`USER`,required:!0}},{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!1}},{key:`email`,value:{name:`string`,required:!1}},{key:`avatarUrl`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}}]}}],raw:`Readonly<{
  type: typeof USER
  id: Key
  name?: string
  email?: string
  avatarUrl?: Url
}>`},{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: typeof API_KEY
  id: Key
  name: string
}`,signature:{properties:[{key:`type`,value:{name:`API_KEY`,required:!0}},{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!0}}]}}],raw:`Readonly<{
  type: typeof API_KEY
  id: Key
  name: string
}>`},{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: typeof JOB
  id: Key
  name: string
}`,signature:{properties:[{key:`type`,value:{name:`JOB`,required:!0}},{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!0}}]}}],raw:`Readonly<{
  type: typeof JOB
  id: Key
  name: string
}>`}],required:!0}},{key:`createdAt`,value:{name:`string`,required:!0}},{key:`revisionLabels`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!1}},{key:`publishMeta`,value:{name:`Partial`,elements:[{name:`signature`,type:`object`,raw:`{
  commitKey: Key
  branchName: string
  repositoryUrl: string
  versionLabels: string[]
  cloudName: string
  cloudUrl: string
  namespace: string
}`,signature:{properties:[{key:`commitKey`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`branchName`,value:{name:`string`,required:!0}},{key:`repositoryUrl`,value:{name:`string`,required:!0}},{key:`versionLabels`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!0}},{key:`cloudName`,value:{name:`string`,required:!0}},{key:`cloudUrl`,value:{name:`string`,required:!0}},{key:`namespace`,value:{name:`string`,required:!0}}]}}],raw:`Partial<{
  commitKey: Key
  branchName: string
  repositoryUrl: string
  versionLabels: string[]
  cloudName: string
  cloudUrl: string
  namespace: string
}>`,required:!1}},{key:`hasErrors`,value:{name:`boolean`,required:!1}},{key:`changelogHasErrors`,value:{name:`boolean`,required:!1}},{key:`apiProcessorVersion`,value:{name:`string`,required:!1}}]}}],raw:`Readonly<{
  revision: number
  version: Key
  latestRevision: boolean
  status: VersionStatus
  createdBy: Principal
  createdAt: string
  revisionLabels?: string[]
  publishMeta?: PublishMeta
  hasErrors?: boolean
  changelogHasErrors?: boolean
  apiProcessorVersion?: string
}>`},{name:`null`}],required:!0}}]}}],raw:`Control<CompareRevisionsDialogFormData>`},description:``},setValue:{required:!0,tsType:{name:`UseFormSetValue`,elements:[{name:`signature`,type:`object`,raw:`{
  originalRevision: Revision | null
  changedRevision: Revision | null
}`,signature:{properties:[{key:`originalRevision`,value:{name:`union`,raw:`Revision | null`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  revision: number
  version: Key
  latestRevision: boolean
  status: VersionStatus
  createdBy: Principal
  createdAt: string
  revisionLabels?: string[]
  publishMeta?: PublishMeta
  hasErrors?: boolean
  changelogHasErrors?: boolean
  apiProcessorVersion?: string
}`,signature:{properties:[{key:`revision`,value:{name:`number`,required:!0}},{key:`version`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`latestRevision`,value:{name:`boolean`,required:!0}},{key:`status`,value:{name:`union`,raw:`| typeof DRAFT_VERSION_STATUS
| typeof RELEASE_VERSION_STATUS`,elements:[{name:`DRAFT_VERSION_STATUS`},{name:`RELEASE_VERSION_STATUS`}],required:!0}},{key:`createdBy`,value:{name:`union`,raw:`User | Token | Job`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: typeof USER
  id: Key
  name?: string
  email?: string
  avatarUrl?: Url
}`,signature:{properties:[{key:`type`,value:{name:`USER`,required:!0}},{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!1}},{key:`email`,value:{name:`string`,required:!1}},{key:`avatarUrl`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}}]}}],raw:`Readonly<{
  type: typeof USER
  id: Key
  name?: string
  email?: string
  avatarUrl?: Url
}>`},{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: typeof API_KEY
  id: Key
  name: string
}`,signature:{properties:[{key:`type`,value:{name:`API_KEY`,required:!0}},{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!0}}]}}],raw:`Readonly<{
  type: typeof API_KEY
  id: Key
  name: string
}>`},{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: typeof JOB
  id: Key
  name: string
}`,signature:{properties:[{key:`type`,value:{name:`JOB`,required:!0}},{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!0}}]}}],raw:`Readonly<{
  type: typeof JOB
  id: Key
  name: string
}>`}],required:!0}},{key:`createdAt`,value:{name:`string`,required:!0}},{key:`revisionLabels`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!1}},{key:`publishMeta`,value:{name:`Partial`,elements:[{name:`signature`,type:`object`,raw:`{
  commitKey: Key
  branchName: string
  repositoryUrl: string
  versionLabels: string[]
  cloudName: string
  cloudUrl: string
  namespace: string
}`,signature:{properties:[{key:`commitKey`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`branchName`,value:{name:`string`,required:!0}},{key:`repositoryUrl`,value:{name:`string`,required:!0}},{key:`versionLabels`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!0}},{key:`cloudName`,value:{name:`string`,required:!0}},{key:`cloudUrl`,value:{name:`string`,required:!0}},{key:`namespace`,value:{name:`string`,required:!0}}]}}],raw:`Partial<{
  commitKey: Key
  branchName: string
  repositoryUrl: string
  versionLabels: string[]
  cloudName: string
  cloudUrl: string
  namespace: string
}>`,required:!1}},{key:`hasErrors`,value:{name:`boolean`,required:!1}},{key:`changelogHasErrors`,value:{name:`boolean`,required:!1}},{key:`apiProcessorVersion`,value:{name:`string`,required:!1}}]}}],raw:`Readonly<{
  revision: number
  version: Key
  latestRevision: boolean
  status: VersionStatus
  createdBy: Principal
  createdAt: string
  revisionLabels?: string[]
  publishMeta?: PublishMeta
  hasErrors?: boolean
  changelogHasErrors?: boolean
  apiProcessorVersion?: string
}>`},{name:`null`}],required:!0}},{key:`changedRevision`,value:{name:`union`,raw:`Revision | null`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  revision: number
  version: Key
  latestRevision: boolean
  status: VersionStatus
  createdBy: Principal
  createdAt: string
  revisionLabels?: string[]
  publishMeta?: PublishMeta
  hasErrors?: boolean
  changelogHasErrors?: boolean
  apiProcessorVersion?: string
}`,signature:{properties:[{key:`revision`,value:{name:`number`,required:!0}},{key:`version`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`latestRevision`,value:{name:`boolean`,required:!0}},{key:`status`,value:{name:`union`,raw:`| typeof DRAFT_VERSION_STATUS
| typeof RELEASE_VERSION_STATUS`,elements:[{name:`DRAFT_VERSION_STATUS`},{name:`RELEASE_VERSION_STATUS`}],required:!0}},{key:`createdBy`,value:{name:`union`,raw:`User | Token | Job`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: typeof USER
  id: Key
  name?: string
  email?: string
  avatarUrl?: Url
}`,signature:{properties:[{key:`type`,value:{name:`USER`,required:!0}},{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!1}},{key:`email`,value:{name:`string`,required:!1}},{key:`avatarUrl`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}}]}}],raw:`Readonly<{
  type: typeof USER
  id: Key
  name?: string
  email?: string
  avatarUrl?: Url
}>`},{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: typeof API_KEY
  id: Key
  name: string
}`,signature:{properties:[{key:`type`,value:{name:`API_KEY`,required:!0}},{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!0}}]}}],raw:`Readonly<{
  type: typeof API_KEY
  id: Key
  name: string
}>`},{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: typeof JOB
  id: Key
  name: string
}`,signature:{properties:[{key:`type`,value:{name:`JOB`,required:!0}},{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!0}}]}}],raw:`Readonly<{
  type: typeof JOB
  id: Key
  name: string
}>`}],required:!0}},{key:`createdAt`,value:{name:`string`,required:!0}},{key:`revisionLabels`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!1}},{key:`publishMeta`,value:{name:`Partial`,elements:[{name:`signature`,type:`object`,raw:`{
  commitKey: Key
  branchName: string
  repositoryUrl: string
  versionLabels: string[]
  cloudName: string
  cloudUrl: string
  namespace: string
}`,signature:{properties:[{key:`commitKey`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`branchName`,value:{name:`string`,required:!0}},{key:`repositoryUrl`,value:{name:`string`,required:!0}},{key:`versionLabels`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!0}},{key:`cloudName`,value:{name:`string`,required:!0}},{key:`cloudUrl`,value:{name:`string`,required:!0}},{key:`namespace`,value:{name:`string`,required:!0}}]}}],raw:`Partial<{
  commitKey: Key
  branchName: string
  repositoryUrl: string
  versionLabels: string[]
  cloudName: string
  cloudUrl: string
  namespace: string
}>`,required:!1}},{key:`hasErrors`,value:{name:`boolean`,required:!1}},{key:`changelogHasErrors`,value:{name:`boolean`,required:!1}},{key:`apiProcessorVersion`,value:{name:`string`,required:!1}}]}}],raw:`Readonly<{
  revision: number
  version: Key
  latestRevision: boolean
  status: VersionStatus
  createdBy: Principal
  createdAt: string
  revisionLabels?: string[]
  publishMeta?: PublishMeta
  hasErrors?: boolean
  changelogHasErrors?: boolean
  apiProcessorVersion?: string
}>`},{name:`null`}],required:!0}}]}}],raw:`UseFormSetValue<CompareRevisionsDialogFormData>`},description:``},originalRevisions:{required:!0,tsType:{name:`Readonly`,elements:[{name:`Array`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  revision: number
  version: Key
  latestRevision: boolean
  status: VersionStatus
  createdBy: Principal
  createdAt: string
  revisionLabels?: string[]
  publishMeta?: PublishMeta
  hasErrors?: boolean
  changelogHasErrors?: boolean
  apiProcessorVersion?: string
}`,signature:{properties:[{key:`revision`,value:{name:`number`,required:!0}},{key:`version`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`latestRevision`,value:{name:`boolean`,required:!0}},{key:`status`,value:{name:`union`,raw:`| typeof DRAFT_VERSION_STATUS
| typeof RELEASE_VERSION_STATUS`,elements:[{name:`DRAFT_VERSION_STATUS`},{name:`RELEASE_VERSION_STATUS`}],required:!0}},{key:`createdBy`,value:{name:`union`,raw:`User | Token | Job`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: typeof USER
  id: Key
  name?: string
  email?: string
  avatarUrl?: Url
}`,signature:{properties:[{key:`type`,value:{name:`USER`,required:!0}},{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!1}},{key:`email`,value:{name:`string`,required:!1}},{key:`avatarUrl`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}}]}}],raw:`Readonly<{
  type: typeof USER
  id: Key
  name?: string
  email?: string
  avatarUrl?: Url
}>`},{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: typeof API_KEY
  id: Key
  name: string
}`,signature:{properties:[{key:`type`,value:{name:`API_KEY`,required:!0}},{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!0}}]}}],raw:`Readonly<{
  type: typeof API_KEY
  id: Key
  name: string
}>`},{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: typeof JOB
  id: Key
  name: string
}`,signature:{properties:[{key:`type`,value:{name:`JOB`,required:!0}},{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!0}}]}}],raw:`Readonly<{
  type: typeof JOB
  id: Key
  name: string
}>`}],required:!0}},{key:`createdAt`,value:{name:`string`,required:!0}},{key:`revisionLabels`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!1}},{key:`publishMeta`,value:{name:`Partial`,elements:[{name:`signature`,type:`object`,raw:`{
  commitKey: Key
  branchName: string
  repositoryUrl: string
  versionLabels: string[]
  cloudName: string
  cloudUrl: string
  namespace: string
}`,signature:{properties:[{key:`commitKey`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`branchName`,value:{name:`string`,required:!0}},{key:`repositoryUrl`,value:{name:`string`,required:!0}},{key:`versionLabels`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!0}},{key:`cloudName`,value:{name:`string`,required:!0}},{key:`cloudUrl`,value:{name:`string`,required:!0}},{key:`namespace`,value:{name:`string`,required:!0}}]}}],raw:`Partial<{
  commitKey: Key
  branchName: string
  repositoryUrl: string
  versionLabels: string[]
  cloudName: string
  cloudUrl: string
  namespace: string
}>`,required:!1}},{key:`hasErrors`,value:{name:`boolean`,required:!1}},{key:`changelogHasErrors`,value:{name:`boolean`,required:!1}},{key:`apiProcessorVersion`,value:{name:`string`,required:!1}}]}}],raw:`Readonly<{
  revision: number
  version: Key
  latestRevision: boolean
  status: VersionStatus
  createdBy: Principal
  createdAt: string
  revisionLabels?: string[]
  publishMeta?: PublishMeta
  hasErrors?: boolean
  changelogHasErrors?: boolean
  apiProcessorVersion?: string
}>`}],raw:`Revision[]`}],raw:`Readonly<Revision[]>`},description:``},changedRevisions:{required:!0,tsType:{name:`Readonly`,elements:[{name:`Array`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  revision: number
  version: Key
  latestRevision: boolean
  status: VersionStatus
  createdBy: Principal
  createdAt: string
  revisionLabels?: string[]
  publishMeta?: PublishMeta
  hasErrors?: boolean
  changelogHasErrors?: boolean
  apiProcessorVersion?: string
}`,signature:{properties:[{key:`revision`,value:{name:`number`,required:!0}},{key:`version`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`latestRevision`,value:{name:`boolean`,required:!0}},{key:`status`,value:{name:`union`,raw:`| typeof DRAFT_VERSION_STATUS
| typeof RELEASE_VERSION_STATUS`,elements:[{name:`DRAFT_VERSION_STATUS`},{name:`RELEASE_VERSION_STATUS`}],required:!0}},{key:`createdBy`,value:{name:`union`,raw:`User | Token | Job`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: typeof USER
  id: Key
  name?: string
  email?: string
  avatarUrl?: Url
}`,signature:{properties:[{key:`type`,value:{name:`USER`,required:!0}},{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!1}},{key:`email`,value:{name:`string`,required:!1}},{key:`avatarUrl`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}}]}}],raw:`Readonly<{
  type: typeof USER
  id: Key
  name?: string
  email?: string
  avatarUrl?: Url
}>`},{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: typeof API_KEY
  id: Key
  name: string
}`,signature:{properties:[{key:`type`,value:{name:`API_KEY`,required:!0}},{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!0}}]}}],raw:`Readonly<{
  type: typeof API_KEY
  id: Key
  name: string
}>`},{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: typeof JOB
  id: Key
  name: string
}`,signature:{properties:[{key:`type`,value:{name:`JOB`,required:!0}},{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!0}}]}}],raw:`Readonly<{
  type: typeof JOB
  id: Key
  name: string
}>`}],required:!0}},{key:`createdAt`,value:{name:`string`,required:!0}},{key:`revisionLabels`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!1}},{key:`publishMeta`,value:{name:`Partial`,elements:[{name:`signature`,type:`object`,raw:`{
  commitKey: Key
  branchName: string
  repositoryUrl: string
  versionLabels: string[]
  cloudName: string
  cloudUrl: string
  namespace: string
}`,signature:{properties:[{key:`commitKey`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`branchName`,value:{name:`string`,required:!0}},{key:`repositoryUrl`,value:{name:`string`,required:!0}},{key:`versionLabels`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!0}},{key:`cloudName`,value:{name:`string`,required:!0}},{key:`cloudUrl`,value:{name:`string`,required:!0}},{key:`namespace`,value:{name:`string`,required:!0}}]}}],raw:`Partial<{
  commitKey: Key
  branchName: string
  repositoryUrl: string
  versionLabels: string[]
  cloudName: string
  cloudUrl: string
  namespace: string
}>`,required:!1}},{key:`hasErrors`,value:{name:`boolean`,required:!1}},{key:`changelogHasErrors`,value:{name:`boolean`,required:!1}},{key:`apiProcessorVersion`,value:{name:`string`,required:!1}}]}}],raw:`Readonly<{
  revision: number
  version: Key
  latestRevision: boolean
  status: VersionStatus
  createdBy: Principal
  createdAt: string
  revisionLabels?: string[]
  publishMeta?: PublishMeta
  hasErrors?: boolean
  changelogHasErrors?: boolean
  apiProcessorVersion?: string
}>`}],raw:`Revision[]`}],raw:`Readonly<Revision[]>`},description:``},isApiTypeFetching:{required:!0,tsType:{name:`boolean`},description:``},onSubmit:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onSwap:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},isRevisionsLoading:{required:!0,tsType:{name:`union`,raw:`boolean | undefined`,elements:[{name:`boolean`},{name:`undefined`}]},description:``},open:{required:!0,tsType:{name:`boolean`},description:``},setOpen:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`value`}],return:{name:`void`}}},description:``},kind:{required:!1,tsType:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}]},description:``}}}})))()}var G;function K(){return(K=e((()=>{he(),Ce(),G=[{revision:2,version:`2.6@2`,latestRevision:!1,status:pe,createdBy:{type:O,id:`JD_1234`,name:`John Doe`,email:`john.doe@example.com`,avatarUrl:`string`},createdAt:`2023-10-06T14:33:44.550622Z`,revisionLabels:[`my-cloud-label`],publishMeta:{commitKey:`a5d45af7`,repositoryUrl:`https://git.example.com/APIHUB/apihub-registry`,cloudName:`my-cloud`,cloudUrl:`https://cloud.example.com`,namespace:`my-cloud-release2`}},{revision:3,version:`2.6@3`,latestRevision:!0,status:me,createdBy:{type:O,id:`JD_1234`,name:`John Doe`,email:`john.doe@example.com`,avatarUrl:`string`},createdAt:`2023-10-05T14:33:44.550622Z`,revisionLabels:[`my-cloud-label`],publishMeta:{commitKey:`a5d45af7`,repositoryUrl:`https://git.example.com/APIHUB/apihub-registry`,cloudName:`my-cloud`,cloudUrl:`https://cloud.example.com`,namespace:`my-cloud-namespace`}}]})))()}var q,J,Y,X,Z,Q;function $(){return($=e((()=>{q=t(),T(),W(),K(),J=a(),Y={component:B},X=e=>{let t=(0,q.useMemo)(()=>({changedRevision:null,originalRevision:null}),[]),{control:n,setValue:r}=ue({defaultValues:t});return(0,J.jsx)(B,{...e,control:n,setValue:r})},Z={name:`Default`,args:{open:!0,setOpen:()=>null,onSubmit:()=>null,onSwap:()=>null,originalRevisions:G,changedRevisions:G,isApiTypeFetching:!1,isRevisionsLoading:!1},render:X},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    open: true,
    setOpen: () => null,
    onSubmit: () => null,
    onSwap: () => null,
    originalRevisions: revisions,
    changedRevisions: revisions,
    isApiTypeFetching: false,
    isRevisionsLoading: false
  },
  render: StoryComponent
}`,...Z.parameters?.docs?.source}}},Q=[`DefaultStory`]})))()}$();export{Z as DefaultStory,Q as __namedExportsOrder,Y as default};