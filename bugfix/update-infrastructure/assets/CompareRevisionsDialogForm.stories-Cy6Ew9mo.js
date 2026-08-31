import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./react-5l_iQkTl.js";import{l as n}from"./dist-bFfJitqu.js";import{n as r,r as i}from"./dist-Bhbmx-MT.js";import{t as a}from"./jsx-runtime-Dw8SQ1Xa.js";import{n as o,t as s}from"./Box-B_l5-crx.js";import{n as c,t as l}from"./Autocomplete-qEKCSQYj.js";import{n as u,t as d}from"./TextField-BBwqJsbq.js";import{n as f,t as p}from"./Typography-CxSQYU1Q.js";import{n as m,t as ee}from"./Button-C6vA4c9Q.js";import{n as h,t as te}from"./DialogContent-DtvI-_UL.js";import{i as g,n as _,r as ne,t as re}from"./DialogTitle-1rZTVADW.js";import{n as v,t as y}from"./ListItem-fBA3Y_Y4.js";import{l as b,n as x,r as S,t as C,u as ie}from"./WarningApiProcessorVersion-QD7TcOHK.js";import{n as ae,t as oe}from"./Swapper-CSpDL3MY.js";import{n as se,t as ce}from"./LoadingButton-DkzOO3e1.js";import{n as le,t as ue}from"./DialogForm-C70NlZIT.js";import{i as w,n as T,r as de,t as E}from"./index.esm-C73x_CXp.js";import{n as fe,t as pe}from"./CustomChip-B15C64I-.js";import{a as me,t as he,u as ge}from"./version-status-u8VoIKvo.js";import{n as D,r as _e}from"./principals-Brat3obT.js";var O,k,A;function j(){return(j=e((()=>{O=t(),f(),k=a(),A=(0,O.memo)(({latest:e=!1})=>(0,k.jsx)(p,{variant:`subtitle2`,fontSize:13,children:`${e?` (latest)`:``}`})),A.__docgenInfo={description:``,methods:[],displayName:`LatestRevisionMark`,props:{latest:{required:!1,tsType:{name:`union`,raw:`boolean | undefined`,elements:[{name:`boolean`},{name:`undefined`}]},description:``,defaultValue:{value:`false`,computed:!1}}}}})))()}function ve(e){let[t]=i();return t.get(e)??void 0}function M(){return(M=e((()=>{r()})))()}function ye(){let[e,t]=i();return(0,N.useCallback)((n,r)=>{for(let t in n)n[t]?e.set(t,n[t]):e.delete(t);t(e,r)},[e,t])}var N;function P(){return(P=e((()=>{r(),N=t()})))()}function be(){let e=ve(b),t=ye();return(0,F.useMemo)(()=>[e,e=>t({[b]:e??``},{replace:!0})],[e,t])}var F;function I(){return(I=e((()=>{F=t(),M(),P(),ie()})))()}var L,R,z,B,V,H,U;function W(){return(W=e((()=>{t(),L=t(),c(),o(),m(),g(),h(),_(),v(),u(),f(),T(),se(),le(),fe(),ae(),j(),S(),r(),I(),R=a(),z=t(),B=(0,L.memo)(({open:e,setOpen:t,setValue:r,control:i,onSubmit:a,onSwap:o,isApiTypeFetching:c,originalRevisions:l,changedRevisions:u,isRevisionsLoading:d})=>{let{packageId:f}=n(),[m]=be(),h=m??f,[g,_]=(0,L.useState)(!1),[v,y]=(0,L.useState)(!1),b=w({control:i,name:`originalRevision`}),S=w({control:i,name:`changedRevision`});return(0,R.jsxs)(ue,{open:e,onClose:()=>t(!1),onSubmit:a,maxWidth:`md`,children:[(0,R.jsx)(re,{children:`Select Revisions To Compare`}),(0,R.jsxs)(te,{sx:U,children:[(0,R.jsx)(p,{sx:{gridArea:`originalTitle`},variant:`button`,children:`Previous`}),(0,R.jsx)(E,{name:`originalRevision`,control:i,render:({field:{value:e,onChange:t}})=>(0,R.jsx)(V,{value:e,onChange:e=>{e||_(!1),t(e)},controllerName:`originalRevision`,revisions:l,isLoading:d,setValue:()=>r(`originalRevision`,null),dataTestId:`PreviousRevisionAutocomplete`})}),(0,R.jsx)(s,{sx:{gridArea:`swapper`,alignSelf:`center`},children:(0,R.jsx)(oe,{onSwap:o})}),(0,R.jsx)(p,{sx:{gridArea:`changedTitle`},variant:`button`,children:`Current`}),(0,R.jsx)(E,{name:`changedRevision`,control:i,render:({field:{value:e,onChange:t}})=>(0,R.jsx)(V,{value:e,onChange:e=>{e||y(!1),t(e)},controllerName:`changedRevision`,revisions:u,isLoading:d,setValue:()=>r(`changedRevision`,null),dataTestId:`CurrentRevisionAutocomplete`})})]}),(0,R.jsxs)(s,{sx:{maxWidth:`692px`,padding:`0 24px`},children:[(0,R.jsx)(x,{versionKey:b?.version,packageKey:h,type:C,hidden:v,"data-testid":`WarningApiProcessorVersionPrevios`,onWarningTextChange:e=>_(!!e)}),(0,R.jsx)(x,{"data-testid":`WarningApiProcessorVersionCurrent`,versionKey:S?.version,packageKey:h,type:C,onWarningTextChange:e=>y(!!e)})]}),(0,R.jsxs)(ne,{children:[(0,R.jsx)(ce,{variant:`contained`,type:`submit`,disabled:g||v,loading:c,"data-testid":`CompareButton`,children:`Compare`}),(0,R.jsx)(ee,{variant:`outlined`,onClick:()=>t(!1),"data-testid":`CancelButton`,children:`Cancel`})]})]})}),V=(0,L.memo)(({value:e,onChange:t,controllerName:n,revisions:r,isLoading:i,setValue:a,dataTestId:o})=>(0,R.jsx)(l,{sx:{gridArea:n},value:e??null,loading:i,options:i?[]:r,getOptionLabel:e=>`@${e.revision}`,isOptionEqualToValue:(e,t)=>e.revision===t.revision,renderOption:(e,t)=>(0,R.jsx)(H,{revision:t,props:e}),renderInput:e=>(0,R.jsx)(d,{...e,required:!0,label:`Revision`}),onChange:(e,n)=>{a(),t(n)},"data-testid":o})),H=(0,L.memo)(({revision:e,props:t})=>(0,z.createElement)(y,{...t,key:e.revision},(0,R.jsxs)(s,{width:`100%`,display:`flex`,justifyContent:`space-between`,children:[(0,R.jsxs)(s,{display:`flex`,gap:`4px`,alignItems:`center`,children:[`@${e.revision}`,(0,R.jsx)(A,{latest:e.latestRevision})]}),(0,R.jsx)(pe,{value:e.status})]}))),U={display:`grid`,columnGap:1,gridTemplateRows:`repeat(2, max-content)`,gridTemplateColumns:`300px max-content 300px`,gridTemplateAreas:`
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
}`,signature:{properties:[{key:`revision`,value:{name:`number`,required:!0}},{key:`version`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`latestRevision`,value:{name:`boolean`,required:!0}},{key:`status`,value:{name:`union`,raw:`| typeof DRAFT_VERSION_STATUS
| typeof RELEASE_VERSION_STATUS
| typeof ARCHIVED_VERSION_STATUS`,elements:[{name:`DRAFT_VERSION_STATUS`},{name:`RELEASE_VERSION_STATUS`},{name:`ARCHIVED_VERSION_STATUS`}],required:!0}},{key:`createdBy`,value:{name:`union`,raw:`User | Token | Job`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`,required:!1}}]}}],raw:`Readonly<{
  revision: number
  version: Key
  latestRevision: boolean
  status: VersionStatus
  createdBy: Principal
  createdAt: string
  revisionLabels?: string[]
  publishMeta?: PublishMeta
}>`},{name:`null`}],required:!0}},{key:`changedRevision`,value:{name:`union`,raw:`Revision | null`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  revision: number
  version: Key
  latestRevision: boolean
  status: VersionStatus
  createdBy: Principal
  createdAt: string
  revisionLabels?: string[]
  publishMeta?: PublishMeta
}`,signature:{properties:[{key:`revision`,value:{name:`number`,required:!0}},{key:`version`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`latestRevision`,value:{name:`boolean`,required:!0}},{key:`status`,value:{name:`union`,raw:`| typeof DRAFT_VERSION_STATUS
| typeof RELEASE_VERSION_STATUS
| typeof ARCHIVED_VERSION_STATUS`,elements:[{name:`DRAFT_VERSION_STATUS`},{name:`RELEASE_VERSION_STATUS`},{name:`ARCHIVED_VERSION_STATUS`}],required:!0}},{key:`createdBy`,value:{name:`union`,raw:`User | Token | Job`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`,required:!1}}]}}],raw:`Readonly<{
  revision: number
  version: Key
  latestRevision: boolean
  status: VersionStatus
  createdBy: Principal
  createdAt: string
  revisionLabels?: string[]
  publishMeta?: PublishMeta
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
}`,signature:{properties:[{key:`revision`,value:{name:`number`,required:!0}},{key:`version`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`latestRevision`,value:{name:`boolean`,required:!0}},{key:`status`,value:{name:`union`,raw:`| typeof DRAFT_VERSION_STATUS
| typeof RELEASE_VERSION_STATUS
| typeof ARCHIVED_VERSION_STATUS`,elements:[{name:`DRAFT_VERSION_STATUS`},{name:`RELEASE_VERSION_STATUS`},{name:`ARCHIVED_VERSION_STATUS`}],required:!0}},{key:`createdBy`,value:{name:`union`,raw:`User | Token | Job`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`,required:!1}}]}}],raw:`Readonly<{
  revision: number
  version: Key
  latestRevision: boolean
  status: VersionStatus
  createdBy: Principal
  createdAt: string
  revisionLabels?: string[]
  publishMeta?: PublishMeta
}>`},{name:`null`}],required:!0}},{key:`changedRevision`,value:{name:`union`,raw:`Revision | null`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  revision: number
  version: Key
  latestRevision: boolean
  status: VersionStatus
  createdBy: Principal
  createdAt: string
  revisionLabels?: string[]
  publishMeta?: PublishMeta
}`,signature:{properties:[{key:`revision`,value:{name:`number`,required:!0}},{key:`version`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`latestRevision`,value:{name:`boolean`,required:!0}},{key:`status`,value:{name:`union`,raw:`| typeof DRAFT_VERSION_STATUS
| typeof RELEASE_VERSION_STATUS
| typeof ARCHIVED_VERSION_STATUS`,elements:[{name:`DRAFT_VERSION_STATUS`},{name:`RELEASE_VERSION_STATUS`},{name:`ARCHIVED_VERSION_STATUS`}],required:!0}},{key:`createdBy`,value:{name:`union`,raw:`User | Token | Job`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`,required:!1}}]}}],raw:`Readonly<{
  revision: number
  version: Key
  latestRevision: boolean
  status: VersionStatus
  createdBy: Principal
  createdAt: string
  revisionLabels?: string[]
  publishMeta?: PublishMeta
}>`},{name:`null`}],required:!0}}]}}],raw:`UseFormSetValue<CompareRevisionsDialogFormData>`},description:``},originalRevisions:{required:!0,tsType:{name:`Readonly`,elements:[{name:`Array`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  revision: number
  version: Key
  latestRevision: boolean
  status: VersionStatus
  createdBy: Principal
  createdAt: string
  revisionLabels?: string[]
  publishMeta?: PublishMeta
}`,signature:{properties:[{key:`revision`,value:{name:`number`,required:!0}},{key:`version`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`latestRevision`,value:{name:`boolean`,required:!0}},{key:`status`,value:{name:`union`,raw:`| typeof DRAFT_VERSION_STATUS
| typeof RELEASE_VERSION_STATUS
| typeof ARCHIVED_VERSION_STATUS`,elements:[{name:`DRAFT_VERSION_STATUS`},{name:`RELEASE_VERSION_STATUS`},{name:`ARCHIVED_VERSION_STATUS`}],required:!0}},{key:`createdBy`,value:{name:`union`,raw:`User | Token | Job`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`,required:!1}}]}}],raw:`Readonly<{
  revision: number
  version: Key
  latestRevision: boolean
  status: VersionStatus
  createdBy: Principal
  createdAt: string
  revisionLabels?: string[]
  publishMeta?: PublishMeta
}>`}],raw:`Revision[]`}],raw:`Readonly<Revision[]>`},description:``},changedRevisions:{required:!0,tsType:{name:`Readonly`,elements:[{name:`Array`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  revision: number
  version: Key
  latestRevision: boolean
  status: VersionStatus
  createdBy: Principal
  createdAt: string
  revisionLabels?: string[]
  publishMeta?: PublishMeta
}`,signature:{properties:[{key:`revision`,value:{name:`number`,required:!0}},{key:`version`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`latestRevision`,value:{name:`boolean`,required:!0}},{key:`status`,value:{name:`union`,raw:`| typeof DRAFT_VERSION_STATUS
| typeof RELEASE_VERSION_STATUS
| typeof ARCHIVED_VERSION_STATUS`,elements:[{name:`DRAFT_VERSION_STATUS`},{name:`RELEASE_VERSION_STATUS`},{name:`ARCHIVED_VERSION_STATUS`}],required:!0}},{key:`createdBy`,value:{name:`union`,raw:`User | Token | Job`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`,required:!1}}]}}],raw:`Readonly<{
  revision: number
  version: Key
  latestRevision: boolean
  status: VersionStatus
  createdBy: Principal
  createdAt: string
  revisionLabels?: string[]
  publishMeta?: PublishMeta
}>`}],raw:`Revision[]`}],raw:`Readonly<Revision[]>`},description:``},isApiTypeFetching:{required:!0,tsType:{name:`boolean`},description:``},onSubmit:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onSwap:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},isRevisionsLoading:{required:!0,tsType:{name:`union`,raw:`boolean | undefined`,elements:[{name:`boolean`},{name:`undefined`}]},description:``},open:{required:!0,tsType:{name:`boolean`},description:``},setOpen:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`value`}],return:{name:`void`}}},description:``}}}})))()}var G;function K(){return(K=e((()=>{ge(),_e(),G=[{revision:2,version:`2.6@2`,latestRevision:!1,status:me,createdBy:{type:D,id:`JD_1234`,name:`John Doe`,email:`john.doe@example.com`,avatarUrl:`string`},createdAt:`2023-10-06T14:33:44.550622Z`,revisionLabels:[`my-cloud-label`],publishMeta:{commitKey:`a5d45af7`,repositoryUrl:`https://git.example.com/APIHUB/apihub-registry`,cloudName:`my-cloud`,cloudUrl:`https://cloud.example.com`,namespace:`my-cloud-release2`}},{revision:3,version:`2.6@3`,latestRevision:!0,status:he,createdBy:{type:D,id:`JD_1234`,name:`John Doe`,email:`john.doe@example.com`,avatarUrl:`string`},createdAt:`2023-10-05T14:33:44.550622Z`,revisionLabels:[`my-cloud-label`],publishMeta:{commitKey:`a5d45af7`,repositoryUrl:`https://git.example.com/APIHUB/apihub-registry`,cloudName:`my-cloud`,cloudUrl:`https://cloud.example.com`,namespace:`my-cloud-namespace`}}]})))()}var q,J,Y,X,Z,Q;function $(){return($=e((()=>{q=t(),T(),W(),K(),J=a(),Y={component:B},X=e=>{let t=(0,q.useMemo)(()=>({changedRevision:null,originalRevision:null}),[]),{control:n,setValue:r}=de({defaultValues:t});return(0,J.jsx)(B,{...e,control:n,setValue:r})},Z={name:`Default`,args:{open:!0,setOpen:()=>null,onSubmit:()=>null,onSwap:()=>null,originalRevisions:G,changedRevisions:G,isApiTypeFetching:!1,isRevisionsLoading:!1},render:X},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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