import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./react---BZM-86.js";import{l as n}from"./dist-F8la4u6j.js";import{n as r,r as i}from"./dist-sHNipvf9.js";import{t as a}from"./jsx-runtime--WVWf14b.js";import{n as o,t as s}from"./Box-CzqjOcoU.js";import{n as c,t as l}from"./TextField-DOxe2ZJj.js";import{n as u,t as d}from"./Typography-B5fOEpx5.js";import{n as f,t as ee}from"./Button-DrgAR6qf.js";import{n as p,t as te}from"./DialogContent-B-a-mUNQ.js";import{i as m,n as h,r as ne,t as re}from"./DialogTitle-BLBZWaKA.js";import{a as g,g as _,h as v,i as y,n as b,r as x,s as ie,t as S}from"./VersionErrorIndicator-R5xTS6kV.js";import{n as C,t as ae}from"./Swapper-C0XGu4iR.js";import{n as w,t as oe}from"./LoadingButton-B77sxCaX.js";import{n as T,t as se}from"./DialogForm-DbSCbMTB.js";import{i as E,n as D,r as ce,t as O}from"./index.esm-hA6-Vtk1.js";import{n as le,t as ue}from"./OptionItem--oCqGPu7.js";import{a as de,t as fe,u as pe}from"./version-status-DFBbv5An.js";import{n as me,t as he}from"./VersionStatusChip-exiRKLEc.js";import{n as ge,t as _e}from"./VersionErrorFormMessage-ChEcHx1a.js";import{n as ve,t as ye}from"./VersionSelectorAutocomplete-9TI2QidE.js";import{n as k,r as be}from"./principals-Brat3obT.js";var A,j,M;function N(){return(N=e((()=>{A=t(),u(),j=a(),M=(0,A.memo)(({latest:e=!1})=>(0,j.jsx)(d,{variant:`subtitle2`,fontSize:13,children:`${e?` (latest)`:``}`})),M.__docgenInfo={description:``,methods:[],displayName:`LatestRevisionMark`,props:{latest:{required:!1,tsType:{name:`union`,raw:`boolean | undefined`,elements:[{name:`boolean`},{name:`undefined`}]},description:``,defaultValue:{value:`false`,computed:!1}}}}})))()}function xe(e){let[t]=i();return t.get(e)??void 0}function P(){return(P=e((()=>{r()})))()}function Se(){let[e,t]=i();return(0,F.useCallback)((n,r)=>{for(let t in n)n[t]?e.set(t,n[t]):e.delete(t);t(e,r)},[e,t])}var F;function I(){return(I=e((()=>{r(),F=t()})))()}function Ce(){let e=xe(v),t=Se();return(0,L.useMemo)(()=>[e,e=>t({[v]:e??``},{replace:!0})],[e,t])}var L;function R(){return(R=e((()=>{L=t(),P(),I(),_()})))()}var z,B,V,H,U,W;function G(){return(G=e((()=>{z=t(),o(),f(),m(),p(),h(),c(),u(),D(),w(),T(),me(),le(),C(),N(),ge(),b(),ve(),x(),ie(),r(),R(),B=a(),V=(0,z.memo)(({open:e,setOpen:t,control:r,onSubmit:i,onSwap:a,isApiTypeFetching:o,originalRevisions:c,changedRevisions:l,isRevisionsLoading:u,kind:f})=>{let{packageId:p}=n(),[m]=Ce(),h=m??p,_=E({control:r,name:`originalRevision`}),v=E({control:r,name:`changedRevision`}),{isBlocking:b,formHelperText:x,hasProblems:ie}=y({packageKey:h,versionKey:_?.version,hasErrors:_?.hasErrors,changelogHasErrors:_?.changelogHasErrors,apiProcessorVersion:_?.apiProcessorVersion,kind:f,surface:g.COMPARE_PREVIOUS_REVISION}),{isBlocking:C,formHelperText:w,hasProblems:T}=y({packageKey:h,versionKey:v?.version,hasErrors:v?.hasErrors,changelogHasErrors:v?.changelogHasErrors,apiProcessorVersion:v?.apiProcessorVersion,kind:f,surface:g.COMPARE_CURRENT_REVISION});return(0,B.jsxs)(se,{open:e,onClose:()=>t(!1),onSubmit:i,maxWidth:`md`,children:[(0,B.jsx)(re,{children:`Select Revisions To Compare`}),(0,B.jsxs)(te,{sx:W,children:[(0,B.jsx)(d,{sx:{gridArea:`originalTitle`},variant:`button`,children:`Previous`}),(0,B.jsx)(O,{name:`originalRevision`,control:r,render:({field:{value:e,onChange:t}})=>(0,B.jsx)(H,{value:e,onChange:t,controllerName:`originalRevision`,revisions:c,isLoading:u,error:b,indicator:ie&&_&&(0,B.jsx)(S,{versionKey:_.version,hasErrors:_.hasErrors,changelogHasErrors:_.changelogHasErrors,apiProcessorVersion:_.apiProcessorVersion,kind:f}),"data-testid":`PreviousRevisionAutocomplete`})}),(0,B.jsx)(s,{sx:{gridArea:`swapper`,alignSelf:`center`},children:(0,B.jsx)(ae,{onSwap:a})}),(0,B.jsx)(d,{sx:{gridArea:`changedTitle`},variant:`button`,children:`Current`}),(0,B.jsx)(O,{name:`changedRevision`,control:r,render:({field:{value:e,onChange:t}})=>(0,B.jsx)(H,{value:e,onChange:t,controllerName:`changedRevision`,revisions:l,isLoading:u,error:C,indicator:T&&v&&(0,B.jsx)(S,{versionKey:v.version,hasErrors:v.hasErrors,changelogHasErrors:v.changelogHasErrors,apiProcessorVersion:v.apiProcessorVersion,kind:f}),"data-testid":`CurrentRevisionAutocomplete`})})]}),(0,B.jsx)(s,{sx:{maxWidth:`692px`,padding:`0 24px`},children:(0,B.jsx)(_e,{message:w??x})}),(0,B.jsxs)(ne,{children:[(0,B.jsx)(oe,{variant:`contained`,type:`submit`,disabled:b||C,loading:o,"data-testid":`CompareButton`,children:`Compare`}),(0,B.jsx)(ee,{variant:`outlined`,onClick:()=>t(!1),"data-testid":`CancelButton`,children:`Cancel`})]})]})}),V.displayName=`CompareRevisionsDialogForm`,H=(0,z.memo)(({value:e,onChange:t,controllerName:n,revisions:r,isLoading:i,error:a=!1,indicator:o,"data-testid":s=`RevisionAutocomplete`})=>(0,B.jsx)(ye,{sx:{gridArea:n},inputIndicator:o,value:e??null,onChange:(e,n)=>{t(n)},options:i?[]:r,loading:i,getOptionLabel:e=>`@${e.revision}`,isOptionEqualToValue:(e,t)=>e.revision===t.revision,renderOption:(e,t)=>(0,B.jsx)(U,{props:e,revision:t},t.revision),renderInput:e=>(0,B.jsx)(l,{...e,label:`Revision`,required:!0,error:a}),"data-testid":s})),H.displayName=`RevisionAutocomplete`,U=(0,z.memo)(({revision:e,props:t})=>(0,B.jsx)(ue,{props:t,title:`@${e.revision}`,overflowTooltipPlacement:`left`,indicator:(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(M,{latest:e.latestRevision}),(0,B.jsx)(S,{versionKey:e.version,hasErrors:e.hasErrors,changelogHasErrors:e.changelogHasErrors,apiProcessorVersion:e.apiProcessorVersion,fontSize:`extra-small`,showTooltip:!1})]}),chip:(0,B.jsx)(he,{status:e.status})})),U.displayName=`AutocompleteOption`,W={display:`grid`,columnGap:1,gridTemplateRows:`repeat(2, max-content)`,gridTemplateColumns:`300px max-content 300px`,gridTemplateAreas:`
    'originalTitle      originalTitle   changedTitle'
    'originalRevision   swapper         changedRevision'
  `},V.__docgenInfo={description:``,methods:[],displayName:`CompareRevisionsDialogForm`,props:{control:{required:!0,tsType:{name:`Control`,elements:[{name:`signature`,type:`object`,raw:`{
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
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}]},description:``}}}})))()}var K;function q(){return(q=e((()=>{pe(),be(),K=[{revision:2,version:`2.6@2`,latestRevision:!1,status:de,createdBy:{type:k,id:`JD_1234`,name:`John Doe`,email:`john.doe@example.com`,avatarUrl:`string`},createdAt:`2023-10-06T14:33:44.550622Z`,revisionLabels:[`my-cloud-label`],publishMeta:{commitKey:`a5d45af7`,repositoryUrl:`https://git.example.com/APIHUB/apihub-registry`,cloudName:`my-cloud`,cloudUrl:`https://cloud.example.com`,namespace:`my-cloud-release2`}},{revision:3,version:`2.6@3`,latestRevision:!0,status:fe,createdBy:{type:k,id:`JD_1234`,name:`John Doe`,email:`john.doe@example.com`,avatarUrl:`string`},createdAt:`2023-10-05T14:33:44.550622Z`,revisionLabels:[`my-cloud-label`],publishMeta:{commitKey:`a5d45af7`,repositoryUrl:`https://git.example.com/APIHUB/apihub-registry`,cloudName:`my-cloud`,cloudUrl:`https://cloud.example.com`,namespace:`my-cloud-namespace`}}]})))()}var J,Y,X,Z,Q,we;function $(){return($=e((()=>{J=t(),D(),G(),q(),Y=a(),X={component:V},Z=e=>{let t=(0,J.useMemo)(()=>({changedRevision:null,originalRevision:null}),[]),{control:n,setValue:r}=ce({defaultValues:t});return(0,Y.jsx)(V,{...e,control:n,setValue:r})},Q={name:`Default`,args:{open:!0,setOpen:()=>null,onSubmit:()=>null,onSwap:()=>null,originalRevisions:K,changedRevisions:K,isApiTypeFetching:!1,isRevisionsLoading:!1},render:Z},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},we=[`DefaultStory`]})))()}$();export{Q as DefaultStory,we as __namedExportsOrder,X as default};