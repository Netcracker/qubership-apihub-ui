import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./react---BZM-86.js";import{t as n}from"./jsx-runtime--WVWf14b.js";import{n as r,t as i}from"./Typography-B5fOEpx5.js";import{n as a,t as o}from"./VersionErrorIndicator-D4w92nTv.js";import{l as s}from"./iframe-Nru67DUo.js";import{n as c,t as l}from"./OptionItem--oCqGPu7.js";import{n as u,t as d}from"./VersionStatusChip-exiRKLEc.js";import{i as f,n as p}from"./versions-DKjHwp6C.js";var m,h,g;function _(){return(_=e((()=>{r(),m=t(),s(),f(),a(),c(),u(),h=n(),g=(0,m.memo)(({props:e,version:t,"data-testid":n})=>{let{key:r,status:a,latestRevision:s,hasErrors:c,changelogHasErrors:u,apiProcessorVersion:f}=t,{versionKey:m,revisionKey:g}=p(r),_=!s&&g!==``,v=_?`${m}@${g}`:m;return(0,h.jsx)(l,{props:e,title:(0,h.jsxs)(h.Fragment,{children:[m,_&&(0,h.jsx)(i,{component:`span`,variant:`inherit`,color:`#FB8A22`,children:`@${g}`})]}),overflowTooltipText:v,overflowTooltipPlacement:`left`,indicator:(0,h.jsx)(o,{versionKey:m,hasErrors:c,changelogHasErrors:u,apiProcessorVersion:f,fontSize:`extra-small`,showTooltip:!1}),chip:(0,h.jsx)(d,{status:a}),"data-testid":n})}),g.displayName=`VersionOptionItem`,g.__docgenInfo={description:``,methods:[],displayName:`VersionOptionItem`,props:{"data-testid":{required:!1,tsType:{name:`string`},description:``},props:{required:!0,tsType:{name:`HTMLAttributes`,elements:[{name:`HTMLLIElement`}],raw:`HTMLAttributes<HTMLLIElement>`},description:``},version:{required:!0,tsType:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  status: VersionStatus
  createdBy: Principal
  createdAt?: string
  versionLabels: string[]
  previousVersion?: string
  latestRevision: boolean
  apiProcessorVersion?: string
  hasErrors?: boolean
  changelogHasErrors?: boolean
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`status`,value:{name:`union`,raw:`| typeof DRAFT_VERSION_STATUS
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
}>`}],required:!0}},{key:`createdAt`,value:{name:`string`,required:!1}},{key:`versionLabels`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!0}},{key:`previousVersion`,value:{name:`string`,required:!1}},{key:`latestRevision`,value:{name:`boolean`,required:!0}},{key:`apiProcessorVersion`,value:{name:`string`,required:!1}},{key:`hasErrors`,value:{name:`boolean`,required:!1}},{key:`changelogHasErrors`,value:{name:`boolean`,required:!1}}]}}],raw:`Readonly<{
  key: Key
  status: VersionStatus
  createdBy: Principal
  createdAt?: string
  versionLabels: string[]
  previousVersion?: string
  latestRevision: boolean
  apiProcessorVersion?: string
  hasErrors?: boolean
  changelogHasErrors?: boolean
}>`},description:``}}}})))()}export{_ as n,g as t};