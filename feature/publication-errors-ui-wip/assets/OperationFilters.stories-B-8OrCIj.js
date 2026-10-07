import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./react---BZM-86.js";import{n,t as r}from"./debounce-BVqWGKkP.js";import{o as i,r as a}from"./clsx.m-DvhsLdH4.js";import{t as o}from"./jsx-runtime--WVWf14b.js";import{n as s,t as c}from"./Box-CzqjOcoU.js";import{n as l,t as u}from"./Autocomplete-a1FNbMA_.js";import{i as d,n as f,r as p,t as m}from"./TextField-DOxe2ZJj.js";import{n as h,t as g}from"./createSvgIcon-CXifaxg9.js";import{a as ee,i as _,n as v,o as y,r as te,t as ne}from"./AccordionSummary-DOybWcTp.js";import{n as re,t as ie}from"./Typography-B5fOEpx5.js";import{c as ae,l as b,o as x,s as S}from"./VersionErrorIndicator-CEIp-hqK.js";import{i as oe,r as se}from"./operation-groups-TpwtB0Tk.js";import{f as ce,p as le}from"./files-D4tsbRuB.js";import{i as ue,o as de}from"./api-types-DILHIwMt.js";import{n as C,r as fe,t as w}from"./operations-Dz3WVGBK.js";import{a as pe}from"./constants-1jyUsruT.js";import{t as me}from"./mui-DZJR8qot.js";import{n as T,t as E}from"./OptionItem--oCqGPu7.js";import{n as he,t as ge}from"./VersionSelectorAutocomplete-9TI2QidE.js";import{i as _e,t as ve}from"./versions-DKjHwp6C.js";import{i as ye,n as be,r as D,t as xe}from"./reference-samples-1pjRmDJN.js";import{i as Se,n as O,r as Ce,t as we}from"./tags-samples-D_05OmGh.js";var k,A;function j(){return(j=e((()=>{h(),k=o(),A=g((0,k.jsx)(`path`,{d:`M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z`}),`ExpandMore`)})))()}var M,N,P,F,I,L;function R(){return(R=e((()=>{n(),d(),f(),a(),M=t(),ae(),S(),pe(),_e(),he(),ye(),T(),N=o(),P=`Filter by Package`,F=(0,M.memo)(e=>{let{onSelectPackage:t,defaultPackageKey:n,required:i=!0,disableClearable:a=!1,labelText:o=P,references:s,isLoading:c}=e,[l,u]=(0,M.useState)(``),d=(0,M.useCallback)((e,t)=>u(t),[]),f=(0,M.useMemo)(()=>l?s.filter(e=>e.name?.toLowerCase().includes(l.toLowerCase())):s,[s,l]),h=(0,M.useMemo)(()=>s.find(e=>e.key===n)??null,[n,s]),g=b();return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(p,{required:i,htmlFor:`package-select`,children:o}),(0,N.jsx)(ge,{freeSolo:!0,loading:c,disableClearable:a,forcePopupIcon:!0,options:f,filterOptions:me,value:h,sx:I,inputIndicator:h&&x(h,g)&&(0,N.jsx)(D,{reference:h}),renderOption:(e,t)=>{let n=x(t,g);return(0,N.jsx)(E,{props:e,title:t.name??``,subtitle:n?ve(t):void 0,chipAlignSelf:`flex-end`,chip:n&&(0,N.jsx)(L,{reference:t,fontSize:`extra-small`,showTooltip:!1})},`${t.key}@${t.version}`)},getOptionLabel:e=>e.name??``,isOptionEqualToValue:(e,t)=>e.key===t.key,onInputChange:r(d,500),onChange:(e,n)=>t(n),renderInput:e=>(0,N.jsx)(m,{...e,id:`package-select`,placeholder:`Package`,value:l,onKeyDown:e=>e.stopPropagation()}),"data-testid":`PackageFilter`})]})}),I={"& .MuiInputBase-root":{pt:`1px`,pb:`1px`}},L=i(D)({display:`flex`}),F.__docgenInfo={description:``,methods:[],displayName:`DashboardPackageSelector`,props:{defaultPackageKey:{required:!1,tsType:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},labelText:{required:!1,tsType:{name:`string`},description:``},disableClearable:{required:!1,tsType:{name:`boolean`},description:``},onSelectPackage:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(packageRef: PackageReference | null) => void`,signature:{arguments:[{type:{name:`union`,raw:`PackageReference | null`,elements:[{name:`Partial`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>>`},{name:`null`}]},name:`packageRef`}],return:{name:`void`}}},description:``},references:{required:!0,tsType:{name:`Array`,elements:[{name:`Partial`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>>`}],raw:`PackageReference[]`},description:``},isLoading:{required:!0,tsType:{name:`boolean`},description:``}}}})))()}function Te(e,t){let n=(0,z.useMemo)(()=>(t?.operationGroups??[]).filter(({apiType:t})=>t===e).map(({groupName:e})=>e),[e,t?.operationGroups]);return[...U,...n]}var z,B,V,H,U;function Ee(){return(Ee=e((()=>{t(),z=t(),l(),d(),f(),T(),ce(),oe(),B=o(),V=`Filter by Group`,H=e=>{let{required:t=!1,labelText:n,value:r,onSelectValue:i,isLoading:a,apiType:o,versionContent:s}=e,c=Te(o,s);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(p,{required:t,children:n??V}),(0,B.jsx)(u,{loading:a,disabled:!a&&c.length===U.length,forcePopupIcon:!0,value:r,options:c,renderOption:(e,t)=>(0,B.jsx)(E,{props:e,title:t,"data-testid":`FilterByGroup-Option-${le(t)}`},t),isOptionEqualToValue:(e,t)=>e===t,getOptionLabel:e=>e??``,renderInput:e=>(0,B.jsx)(m,{...e,id:`operation-group-filter`,placeholder:`Group`,sx:{"& .MuiInputBase-root":{pt:`1px`,pb:`1px`}}}),onChange:(e,t)=>i?.(t??void 0),"data-testid":`OperationGroupFilter`})]})},U=[`All`,se],H.__docgenInfo={description:``,methods:[],displayName:`OperationGroupFilter`}})))()}var De,W,Oe,G;function ke(){return(ke=e((()=>{t(),De=t(),l(),d(),f(),T(),fe(),W=o(),Oe=`Filter by API Kind`,G=(0,De.memo)(e=>{let{value:t,onSelectApiKind:n,required:r=!1,labelText:i}=e;return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(p,{required:r,children:i??Oe}),(0,W.jsx)(u,{forcePopupIcon:!0,value:t,options:Object.keys(C).map(e=>e),renderOption:(e,t)=>(0,W.jsx)(E,{props:e,title:C[t],"data-testid":`Option-${t}`},t),isOptionEqualToValue:(e,t)=>e===t,renderInput:e=>(0,W.jsx)(m,{...e,id:`api-kind-filter`,placeholder:`API Kind`,sx:{"& .MuiInputBase-root":{pt:`1px`,pb:`1px`}}}),getOptionLabel:e=>C[e]??``,onChange:(e,t)=>n(t??void 0),"data-testid":`ApiKindFilter`})]})}),G.__docgenInfo={description:``,methods:[],displayName:`ApiKindFilter`,props:{onSelectApiKind:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value?: ApiKind) => void`,signature:{arguments:[{type:{name:`union`,raw:`| typeof ALL_API_KIND
| typeof BWC_API_KIND
| typeof NO_BWC_API_KIND
| typeof EXPERIMENTAL_API_KIND`,elements:[{name:`ALL_API_KIND`},{name:`BWC_API_KIND`},{name:`NO_BWC_API_KIND`},{name:`EXPERIMENTAL_API_KIND`}]},name:`value`}],return:{name:`void`}}},description:``},value:{required:!1,tsType:{name:`union`,raw:`| typeof ALL_API_KIND
| typeof BWC_API_KIND
| typeof NO_BWC_API_KIND
| typeof EXPERIMENTAL_API_KIND`,elements:[{name:`ALL_API_KIND`},{name:`BWC_API_KIND`},{name:`NO_BWC_API_KIND`},{name:`EXPERIMENTAL_API_KIND`}]},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},labelText:{required:!1,tsType:{name:`string`},description:``}}}})))()}var Ae,K,je,q;function Me(){return(Me=e((()=>{Ae=t(),l(),d(),f(),T(),fe(),K=o(),je=`Filter by API Audience`,q=(0,Ae.memo)(e=>{let{value:t,onSelectApiAudience:n}=e;return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(p,{children:je}),(0,K.jsx)(u,{forcePopupIcon:!0,value:t,options:Object.keys(w).map(e=>e),renderOption:(e,t)=>(0,K.jsx)(E,{props:e,title:w[t],"data-testid":`Option-${t}`},t),isOptionEqualToValue:(e,t)=>e===t,renderInput:e=>(0,K.jsx)(m,{...e,id:`api-audience-filter`,placeholder:`API Audience`,sx:{"& .MuiInputBase-root":{pt:`1px`,pb:`1px`}}}),getOptionLabel:e=>w[e]??``,onChange:(e,t)=>n(t??void 0),"data-testid":`ApiAudienceFilter`})]})}),q.__docgenInfo={description:``,methods:[],displayName:`ApiAudienceFilter`,props:{onSelectApiAudience:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value?: ApiAudience) => void`,signature:{arguments:[{type:{name:`union`,raw:`| typeof API_AUDIENCE_INTERNAL
| typeof API_AUDIENCE_EXTERNAL
| typeof API_AUDIENCE_UNKNOWN
| typeof API_AUDIENCE_ALL`,elements:[{name:`API_AUDIENCE_INTERNAL`},{name:`API_AUDIENCE_EXTERNAL`},{name:`API_AUDIENCE_UNKNOWN`},{name:`API_AUDIENCE_ALL`}]},name:`value`}],return:{name:`void`}}},description:``},value:{required:!1,tsType:{name:`union`,raw:`| typeof API_AUDIENCE_INTERNAL
| typeof API_AUDIENCE_EXTERNAL
| typeof API_AUDIENCE_UNKNOWN
| typeof API_AUDIENCE_ALL`,elements:[{name:`API_AUDIENCE_INTERNAL`},{name:`API_AUDIENCE_EXTERNAL`},{name:`API_AUDIENCE_UNKNOWN`},{name:`API_AUDIENCE_ALL`}]},description:``}}}})))()}var J,Y,X;function Ne(){return(Ne=e((()=>{J=t(),y(),_(),v(),s(),re(),R(),Ee(),ke(),j(),Se(),Me(),Y=o(),X=(0,J.memo)(e=>{let{selectedPackageKey:t,selectedOperationGroupName:n,selectedApiAudience:r,selectedApiKind:i,onSelectPackage:a,onSelectOperationGroup:o,onSelectApiAudience:s,onSelectApiKind:l,onClickExpandCollapseButton:u,areTagsLoading:d,fetchNextTagsPage:f,hasNextTagsPage:p,isNextTagsPageFetching:m,isReferencesLoading:h,isPackageVersionContentLoading:g,hiddenGeneralFilters:_,tags:v,references:y,versionContent:re,apiType:ae,onSelectTag:b,onTagSearch:x,selectedTag:S}=e,oe=(0,J.useCallback)((e,t)=>u(!t),[u]);return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(c,{sx:{borderBottom:`1px solid #D9D9D9`,p:2},children:(0,Y.jsxs)(ee,{expanded:!_,onChange:oe,"data-testid":`GeneralFiltersAccordion`,children:[(0,Y.jsx)(ne,{sx:{p:0},expandIcon:(0,Y.jsx)(A,{}),children:(0,Y.jsx)(ie,{width:`100%`,noWrap:!0,variant:`button`,children:`General Filters`})}),(0,Y.jsxs)(te,{children:[a&&(0,Y.jsx)(F,{onSelectPackage:a,references:y,isLoading:h,defaultPackageKey:t,required:!1}),o&&(0,Y.jsx)(c,{sx:{mt:+!!a},children:(0,Y.jsx)(H,{value:n,onSelectValue:o,isLoading:g,apiType:ae,versionContent:re})}),s&&(0,Y.jsx)(c,{sx:{mt:a||o?1:0},children:(0,Y.jsx)(q,{value:r,onSelectApiAudience:s})}),l&&(0,Y.jsx)(c,{sx:{mt:a||o||s?1:0},children:(0,Y.jsx)(G,{value:i,onSelectApiKind:l})})]})]})}),b&&(0,Y.jsx)(Ce,{tags:v,areTagsLoading:d,fetchNextTagsPage:f,isNextTagsPageFetching:m,hasNextTagsPage:p,onSearch:x,selectedTag:S,onSelectTag:b})]})}),X.displayName=`OperationFilters`,X.__docgenInfo={description:``,methods:[],displayName:`OperationFilters`,props:{selectedPackageKey:{required:!1,tsType:{name:`string`},description:``},onSelectPackage:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(packageRef: PackageReference | null) => void`,signature:{arguments:[{type:{name:`union`,raw:`PackageReference | null`,elements:[{name:`Partial`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>>`},{name:`null`}]},name:`packageRef`}],return:{name:`void`}}},description:``},selectedOperationGroupName:{required:!1,tsType:{name:`string`},description:``},onSelectOperationGroup:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(operationGroupName?: OperationGroupName) => void`,signature:{arguments:[{type:{name:`string`},name:`operationGroupName`}],return:{name:`void`}}},description:``},selectedApiAudience:{required:!1,tsType:{name:`union`,raw:`| typeof API_AUDIENCE_INTERNAL
| typeof API_AUDIENCE_EXTERNAL
| typeof API_AUDIENCE_UNKNOWN
| typeof API_AUDIENCE_ALL`,elements:[{name:`API_AUDIENCE_INTERNAL`},{name:`API_AUDIENCE_EXTERNAL`},{name:`API_AUDIENCE_UNKNOWN`},{name:`API_AUDIENCE_ALL`}]},description:``},onSelectApiAudience:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value?: ApiAudience) => void`,signature:{arguments:[{type:{name:`union`,raw:`| typeof API_AUDIENCE_INTERNAL
| typeof API_AUDIENCE_EXTERNAL
| typeof API_AUDIENCE_UNKNOWN
| typeof API_AUDIENCE_ALL`,elements:[{name:`API_AUDIENCE_INTERNAL`},{name:`API_AUDIENCE_EXTERNAL`},{name:`API_AUDIENCE_UNKNOWN`},{name:`API_AUDIENCE_ALL`}]},name:`value`}],return:{name:`void`}}},description:``},selectedApiKind:{required:!1,tsType:{name:`union`,raw:`| typeof ALL_API_KIND
| typeof BWC_API_KIND
| typeof NO_BWC_API_KIND
| typeof EXPERIMENTAL_API_KIND`,elements:[{name:`ALL_API_KIND`},{name:`BWC_API_KIND`},{name:`NO_BWC_API_KIND`},{name:`EXPERIMENTAL_API_KIND`}]},description:``},onSelectApiKind:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value?: ApiKind) => void`,signature:{arguments:[{type:{name:`union`,raw:`| typeof ALL_API_KIND
| typeof BWC_API_KIND
| typeof NO_BWC_API_KIND
| typeof EXPERIMENTAL_API_KIND`,elements:[{name:`ALL_API_KIND`},{name:`BWC_API_KIND`},{name:`NO_BWC_API_KIND`},{name:`EXPERIMENTAL_API_KIND`}]},name:`value`}],return:{name:`void`}}},description:``},hiddenGeneralFilters:{required:!0,tsType:{name:`boolean`},description:``},onClickExpandCollapseButton:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`value`}],return:{name:`void`}}},description:``},areTagsLoading:{required:!0,tsType:{name:`boolean`},description:``},fetchNextTagsPage:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => Promise<void>`,signature:{arguments:[],return:{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}}},description:``},isNextTagsPageFetching:{required:!1,tsType:{name:`boolean`},description:``},hasNextTagsPage:{required:!1,tsType:{name:`union`,raw:`boolean | undefined`,elements:[{name:`boolean`},{name:`undefined`}]},description:``},isReferencesLoading:{required:!0,tsType:{name:`boolean`},description:``},isPackageVersionContentLoading:{required:!0,tsType:{name:`boolean`},description:``},tags:{required:!0,tsType:{name:`unknown`},description:``},references:{required:!0,tsType:{name:`Array`,elements:[{name:`Partial`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>>`}],raw:`PackageReference[]`},description:``},apiType:{required:!0,tsType:{name:`union`,raw:`| typeof API_TYPE_REST
| typeof API_TYPE_GRAPHQL
| typeof API_TYPE_ASYNCAPI`,elements:[{name:`API_TYPE_REST`},{name:`API_TYPE_GRAPHQL`},{name:`API_TYPE_ASYNCAPI`}]},description:``},versionContent:{required:!0,tsType:{name:`union`,raw:`PackageVersionContent | null`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  version: Key
  packageKey: Key
  status: VersionStatus
  createdAt: string
  createdBy: Principal
  operationGroups: ReadonlyArray<OperationGroup>
  latestRevision: boolean
  previousVersion?: VersionKey
  previousVersionPackageId?: VersionKey
  versionLabels?: string[]
  operationTypes?: Record<ApiType, OperationTypeSummary>
  contractsSummary?: VersionContractsSummary
  revisionsCount: number
  apiProcessorVersion?: string
  hasErrors?: boolean
  changelogHasErrors?: boolean
}`,signature:{properties:[{key:`version`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`packageKey`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`status`,value:{name:`union`,raw:`| typeof DRAFT_VERSION_STATUS
| typeof RELEASE_VERSION_STATUS`,elements:[{name:`DRAFT_VERSION_STATUS`},{name:`RELEASE_VERSION_STATUS`}],required:!0}},{key:`createdAt`,value:{name:`string`,required:!0}},{key:`createdBy`,value:{name:`union`,raw:`User | Token | Job`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: typeof USER
  id: Key
  name?: string
  email?: string
  avatarUrl?: Url
}`,signature:{properties:[{key:`type`,value:{name:`USER`,required:!0}},{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`name`,value:{name:`string`,required:!1}},{key:`email`,value:{name:`string`,required:!1}},{key:`avatarUrl`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}}]}}],raw:`Readonly<{
  type: typeof USER
  id: Key
  name?: string
  email?: string
  avatarUrl?: Url
}>`},{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: typeof API_KEY
  id: Key
  name: string
}`,signature:{properties:[{key:`type`,value:{name:`API_KEY`,required:!0}},{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`name`,value:{name:`string`,required:!0}}]}}],raw:`Readonly<{
  type: typeof API_KEY
  id: Key
  name: string
}>`},{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: typeof JOB
  id: Key
  name: string
}`,signature:{properties:[{key:`type`,value:{name:`JOB`,required:!0}},{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`name`,value:{name:`string`,required:!0}}]}}],raw:`Readonly<{
  type: typeof JOB
  id: Key
  name: string
}>`}],required:!0}},{key:`operationGroups`,value:{name:`ReadonlyArray`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  groupName: string
  description: string
  isPrefixGroup: boolean
  exportTemplateFileName?: string
  operationsCount: number
  apiType: ApiType
  template?: File
}`,signature:{properties:[{key:`groupName`,value:{name:`string`,required:!0}},{key:`description`,value:{name:`string`,required:!0}},{key:`isPrefixGroup`,value:{name:`boolean`,required:!0}},{key:`exportTemplateFileName`,value:{name:`string`,required:!1}},{key:`operationsCount`,value:{name:`number`,required:!0}},{key:`apiType`,value:{name:`union`,raw:`| typeof API_TYPE_REST
| typeof API_TYPE_GRAPHQL
| typeof API_TYPE_ASYNCAPI`,elements:[{name:`API_TYPE_REST`},{name:`API_TYPE_GRAPHQL`},{name:`API_TYPE_ASYNCAPI`}],required:!0}},{key:`template`,value:{name:`File`,required:!1}}]}}],raw:`Readonly<{
  groupName: string
  description: string
  isPrefixGroup: boolean
  exportTemplateFileName?: string
  operationsCount: number
  apiType: ApiType
  template?: File
}>`}],raw:`ReadonlyArray<OperationGroup>`,required:!0}},{key:`latestRevision`,value:{name:`boolean`,required:!0}},{key:`previousVersion`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`previousVersionPackageId`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`versionLabels`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!1}},{key:`operationTypes`,value:{name:`Record`,elements:[{name:`union`,raw:`| typeof API_TYPE_REST
| typeof API_TYPE_GRAPHQL
| typeof API_TYPE_ASYNCAPI`,elements:[{name:`API_TYPE_REST`},{name:`API_TYPE_GRAPHQL`},{name:`API_TYPE_ASYNCAPI`}],required:!0},{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  apiType: ApiType
  changesSummary: ChangesSummary<T>
  numberOfImpactedOperations: ChangesSummary<T>
  operationsCount: number
  deprecatedCount: number
  noBwcOperationsCount: number
  internalAudienceOperationsCount: number
  unknownAudienceOperationsCount: number
  apiAudienceTransitions: ApiAudienceTransition[]
  operations?: object
  hasErrors?: boolean
}`,signature:{properties:[{key:`apiType`,value:{name:`union`,raw:`| typeof API_TYPE_REST
| typeof API_TYPE_GRAPHQL
| typeof API_TYPE_ASYNCAPI`,elements:[{name:`API_TYPE_REST`},{name:`API_TYPE_GRAPHQL`},{name:`API_TYPE_ASYNCAPI`}],required:!0}},{key:`changesSummary`,value:{name:`ChangeSummary`,elements:[{name:`T`}],raw:`ChangeSummary<T>`,required:!1}},{key:`numberOfImpactedOperations`,value:{name:`ChangeSummary`,elements:[{name:`T`}],raw:`ChangeSummary<T>`,required:!1}},{key:`operationsCount`,value:{name:`number`,required:!0}},{key:`deprecatedCount`,value:{name:`number`,required:!0}},{key:`noBwcOperationsCount`,value:{name:`number`,required:!0}},{key:`internalAudienceOperationsCount`,value:{name:`number`,required:!0}},{key:`unknownAudienceOperationsCount`,value:{name:`number`,required:!0}},{key:`apiAudienceTransitions`,value:{name:`Array`,elements:[{name:`ApiAudienceTransition`}],raw:`ApiAudienceTransition[]`,required:!0}},{key:`operations`,value:{name:`object`,required:!1}},{key:`hasErrors`,value:{name:`boolean`,required:!1}}]}}],raw:`Readonly<{
  apiType: ApiType
  changesSummary: ChangesSummary<T>
  numberOfImpactedOperations: ChangesSummary<T>
  operationsCount: number
  deprecatedCount: number
  noBwcOperationsCount: number
  internalAudienceOperationsCount: number
  unknownAudienceOperationsCount: number
  apiAudienceTransitions: ApiAudienceTransition[]
  operations?: object
  hasErrors?: boolean
}>`}],raw:`Record<ApiType, OperationTypeSummary>`,required:!1}},{key:`contractsSummary`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  mcp?: McpContractsSummary
  ddl?: DdlContractsSummary
}`,signature:{properties:[{key:`mcp`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  byEndpoint: Readonly<Record<string, McpEndpointSummary>>
  totals: McpContractsSummaryTotals
}`,signature:{properties:[{key:`byEndpoint`,value:{name:`Readonly`,elements:[{name:`Record`,elements:[{name:`string`},{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  toolsCount: number
  promptsCount: number
  resourcesCount: number
  hasErrors?: boolean
}`,signature:{properties:[{key:`toolsCount`,value:{name:`number`,required:!0}},{key:`promptsCount`,value:{name:`number`,required:!0}},{key:`resourcesCount`,value:{name:`number`,required:!0}},{key:`hasErrors`,value:{name:`boolean`,required:!1}}]}}],raw:`Readonly<{
  toolsCount: number
  promptsCount: number
  resourcesCount: number
  hasErrors?: boolean
}>`}],raw:`Record<string, McpEndpointSummary>`}],raw:`Readonly<Record<string, McpEndpointSummary>>`,required:!0}},{key:`totals`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  endpoints: number
  toolsCount: number
  promptsCount: number
  resourcesCount: number
  hasErrors: boolean
}`,signature:{properties:[{key:`endpoints`,value:{name:`number`,required:!0}},{key:`toolsCount`,value:{name:`number`,required:!0}},{key:`promptsCount`,value:{name:`number`,required:!0}},{key:`resourcesCount`,value:{name:`number`,required:!0}},{key:`hasErrors`,value:{name:`boolean`,required:!0}}]}}],raw:`Readonly<{
  endpoints: number
  toolsCount: number
  promptsCount: number
  resourcesCount: number
  hasErrors: boolean
}>`,required:!0}}]}}],raw:`Readonly<{
  byEndpoint: Readonly<Record<string, McpEndpointSummary>>
  totals: McpContractsSummaryTotals
}>`,required:!1}},{key:`ddl`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  tablesCount: number
  changesSummary?: ChangesSummary<DiffType>
  numberOfImpactedEntities?: ChangesSummary<DiffType>
  hasErrors?: boolean
}`,signature:{properties:[{key:`tablesCount`,value:{name:`number`,required:!0}},{key:`changesSummary`,value:{name:`ChangeSummary`,elements:[{name:`T`}],raw:`ChangeSummary<T>`,required:!1}},{key:`numberOfImpactedEntities`,value:{name:`ChangeSummary`,elements:[{name:`T`}],raw:`ChangeSummary<T>`,required:!1}},{key:`hasErrors`,value:{name:`boolean`,required:!1}}]}}],raw:`Readonly<{
  tablesCount: number
  changesSummary?: ChangesSummary<DiffType>
  numberOfImpactedEntities?: ChangesSummary<DiffType>
  hasErrors?: boolean
}>`,required:!1}}]}}],raw:`Readonly<{
  mcp?: McpContractsSummary
  ddl?: DdlContractsSummary
}>`,required:!1}},{key:`revisionsCount`,value:{name:`number`,required:!0}},{key:`apiProcessorVersion`,value:{name:`string`,required:!1}},{key:`hasErrors`,value:{name:`boolean`,required:!1}},{key:`changelogHasErrors`,value:{name:`boolean`,required:!1}}]}}],raw:`Readonly<{
  version: Key
  packageKey: Key
  status: VersionStatus
  createdAt: string
  createdBy: Principal
  operationGroups: ReadonlyArray<OperationGroup>
  latestRevision: boolean
  previousVersion?: VersionKey
  previousVersionPackageId?: VersionKey
  versionLabels?: string[]
  operationTypes?: Record<ApiType, OperationTypeSummary>
  contractsSummary?: VersionContractsSummary
  revisionsCount: number
  apiProcessorVersion?: string
  hasErrors?: boolean
  changelogHasErrors?: boolean
}>`},{name:`null`}]},description:``},onTagSearch:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},selectedTag:{required:!1,tsType:{name:`string`},description:``},onSelectTag:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value?: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``}}}})))()}var Pe;function Fe(){return(Fe=e((()=>{Pe={createdAt:`Fri Oct 06 2023`,createdBy:{name:`John Doe`,type:`user`,id:`JD_1234`},status:`draft`,version:`2023.1@3`,revisionsCount:3,packageKey:`PSB.alint-dash`,key:`c90f0e0d-005c-4349-a93c-8418822e06b2`,latestRevision:!0,operationGroups:[]}})))()}var Z,Ie,Le,Re,Q,ze;function $(){return($=e((()=>{Z=t(),Ne(),we(),xe(),Fe(),de(),Ie=o(),{useArgs:Le}=__STORYBOOK_MODULE_PREVIEW_API__,Re={title:`Operation Filters`,args:{tags:O,areTagsLoading:!1,isPackageVersionContentLoading:!1,isReferencesLoading:!1,references:be,apiType:ue,versionContent:Pe,hiddenGeneralFilters:!1},component:X},Q=e=>{let[,t]=Le(),n=(0,Z.useCallback)(e=>{t({tags:O.filter(t=>t.toLowerCase().includes(e.toLowerCase()))})},[t]),r=(0,Z.useCallback)(e=>{t({hiddenGeneralFilters:e})},[t]);return(0,Ie.jsx)(X,{...e,onTagSearch:n,onClickExpandCollapseButton:r})},Q.__docgenInfo={description:``,methods:[],displayName:`DefaultStory`},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`args => {
  const [, updateArgs] = useArgs();
  const onTagSearch = useCallback((value: string) => {
    updateArgs({
      tags: operationTags.filter(tag => tag.toLowerCase().includes(value.toLowerCase()))
    });
  }, [updateArgs]);
  const onClickExpandCollapseButton = useCallback((value: boolean) => {
    updateArgs({
      hiddenGeneralFilters: value
    });
  }, [updateArgs]);
  return <OperationFilters {...args} onTagSearch={onTagSearch} onClickExpandCollapseButton={onClickExpandCollapseButton} />;
}`,...Q.parameters?.docs?.source}}},ze=[`DefaultStory`]})))()}$();export{Q as DefaultStory,ze as __namedExportsOrder,Re as default};