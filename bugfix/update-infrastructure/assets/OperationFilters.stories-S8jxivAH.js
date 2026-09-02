import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./react-5l_iQkTl.js";import{n,t as r}from"./debounce-BVqWGKkP.js";import{t as i}from"./jsx-runtime-Dw8SQ1Xa.js";import{n as a,t as o}from"./Box-B_l5-crx.js";import{n as s,t as c}from"./Autocomplete-qEKCSQYj.js";import{a as l,n as u,o as d,t as f}from"./TextField-BBwqJsbq.js";import{n as p,t as m}from"./createSvgIcon-BXSVxfKP.js";import{a as h,i as g,n as ee,o as te,r as ne,t as re}from"./AccordionSummary-BsxW38J6.js";import{n as _,t as ie}from"./Typography-CxSQYU1Q.js";import{i as v,r as y}from"./operation-groups-TpwtB0Tk.js";import{f as b,p as x}from"./files-B2QTExZR.js";import{a as S}from"./constants-1jyUsruT.js";import{t as ae}from"./mui-DZJR8qot.js";import{i as oe,o as se}from"./api-types-C7s538om.js";import{n as C,r as ce,t as w}from"./operations-BktNB4S7.js";import{n as T,t as E}from"./OptionItem-Bu9mpN2E.js";import{n as le,t as ue}from"./reference-samples-UrZXuLT2.js";import{i as de,n as D,r as fe,t as pe}from"./tags-samples-D3S0VhxJ.js";var O,k;function A(){return(A=e((()=>{p(),O=i(),k=m((0,O.jsx)(`path`,{d:`M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z`}),`ExpandMore`)})))()}var j,M,N,P;function F(){return(F=e((()=>{t(),j=t(),s(),n(),d(),u(),T(),S(),M=i(),N=`Filter by Package`,P=(0,j.memo)(e=>{let{onSelectPackage:t,defaultPackageKey:n,required:i=!0,disableClearable:a=!1,labelText:o=N,references:s,isLoading:u}=e,[d,p]=(0,j.useState)(``),m=(0,j.useCallback)((e,t)=>p(t),[]),h=(0,j.useMemo)(()=>d?s.filter(e=>e.name?.toLowerCase().includes(d.toLowerCase())):s,[s,d]),g=(0,j.useMemo)(()=>s.find(e=>e.key===n)??null,[n,s]);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(l,{required:i,htmlFor:`package-select`,children:o}),(0,M.jsx)(c,{freeSolo:!0,loading:u,disableClearable:a,forcePopupIcon:!0,options:h,filterOptions:ae,value:g,renderOption:(e,{key:t,name:n})=>(0,M.jsx)(E,{props:e,title:n},t),getOptionLabel:e=>e.name??``,isOptionEqualToValue:(e,t)=>e.key===t.key,onInputChange:r(m,500),onChange:(e,n)=>t(n),renderInput:e=>(0,M.jsx)(f,{...e,id:`package-select`,placeholder:`Package`,sx:{"& .MuiInputBase-root":{pt:`1px`,pb:`1px`}},value:d,onKeyDown:e=>e.stopPropagation()}),"data-testid":`PackageFilter`})]})}),P.__docgenInfo={description:``,methods:[],displayName:`DashboardPackageSelector`,props:{defaultPackageKey:{required:!1,tsType:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},labelText:{required:!1,tsType:{name:`string`},description:``},disableClearable:{required:!1,tsType:{name:`boolean`},description:``},onSelectPackage:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(packageRef: PackageReference | null) => void`,signature:{arguments:[{type:{name:`union`,raw:`PackageReference | null`,elements:[{name:`Partial`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  kind: ReferenceKind
  name: string
  version: Key
  status: VersionStatus
  deletedAt: string
  deletedBy: string
  parentPackages: ReadonlyArray<Key>
  latestRevision: boolean
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`kind`,value:{name:`union`,raw:`| typeof PACKAGE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`PACKAGE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`version`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`status`,value:{name:`union`,raw:`| typeof DRAFT_VERSION_STATUS
| typeof RELEASE_VERSION_STATUS
| typeof ARCHIVED_VERSION_STATUS`,elements:[{name:`DRAFT_VERSION_STATUS`},{name:`RELEASE_VERSION_STATUS`},{name:`ARCHIVED_VERSION_STATUS`}],required:!0}},{key:`deletedAt`,value:{name:`string`,required:!0}},{key:`deletedBy`,value:{name:`string`,required:!0}},{key:`parentPackages`,value:{name:`ReadonlyArray`,elements:[{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}],raw:`ReadonlyArray<Key>`,required:!0}},{key:`latestRevision`,value:{name:`boolean`,required:!0}}]}}],raw:`Readonly<{
  key: Key
  kind: ReferenceKind
  name: string
  version: Key
  status: VersionStatus
  deletedAt: string
  deletedBy: string
  parentPackages: ReadonlyArray<Key>
  latestRevision: boolean
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
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`kind`,value:{name:`union`,raw:`| typeof PACKAGE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`PACKAGE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`version`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`status`,value:{name:`union`,raw:`| typeof DRAFT_VERSION_STATUS
| typeof RELEASE_VERSION_STATUS
| typeof ARCHIVED_VERSION_STATUS`,elements:[{name:`DRAFT_VERSION_STATUS`},{name:`RELEASE_VERSION_STATUS`},{name:`ARCHIVED_VERSION_STATUS`}],required:!0}},{key:`deletedAt`,value:{name:`string`,required:!0}},{key:`deletedBy`,value:{name:`string`,required:!0}},{key:`parentPackages`,value:{name:`ReadonlyArray`,elements:[{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}],raw:`ReadonlyArray<Key>`,required:!0}},{key:`latestRevision`,value:{name:`boolean`,required:!0}}]}}],raw:`Readonly<{
  key: Key
  kind: ReferenceKind
  name: string
  version: Key
  status: VersionStatus
  deletedAt: string
  deletedBy: string
  parentPackages: ReadonlyArray<Key>
  latestRevision: boolean
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
}>>`}],raw:`PackageReference[]`},description:``},isLoading:{required:!0,tsType:{name:`boolean`},description:``}}}})))()}function me(e,t){let n=(0,I.useMemo)(()=>(t?.operationGroups??[]).filter(({apiType:t})=>t===e).map(({groupName:e})=>e),[e,t?.operationGroups]);return[...B,...n]}var I,L,R,z,B;function V(){return(V=e((()=>{t(),I=t(),s(),d(),u(),T(),b(),v(),L=i(),R=`Filter by Group`,z=e=>{let{required:t=!1,labelText:n,value:r,onSelectValue:i,isLoading:a,apiType:o,versionContent:s}=e,u=me(o,s);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(l,{required:t,children:n??R}),(0,L.jsx)(c,{loading:a,disabled:!a&&u.length===B.length,forcePopupIcon:!0,value:r,options:u,renderOption:(e,t)=>(0,L.jsx)(E,{props:e,title:t,"data-testid":`FilterByGroup-Option-${x(t)}`},t),isOptionEqualToValue:(e,t)=>e===t,getOptionLabel:e=>e??``,renderInput:e=>(0,L.jsx)(f,{...e,id:`operation-group-filter`,placeholder:`Group`,sx:{"& .MuiInputBase-root":{pt:`1px`,pb:`1px`}}}),onChange:(e,t)=>i?.(t??void 0),"data-testid":`OperationGroupFilter`})]})},B=[`All`,y],z.__docgenInfo={description:``,methods:[],displayName:`OperationGroupFilter`}})))()}var he,H,U,W;function ge(){return(ge=e((()=>{t(),he=t(),s(),d(),u(),T(),ce(),H=i(),U=`Filter by API Kind`,W=(0,he.memo)(e=>{let{value:t,onSelectApiKind:n,required:r=!1,labelText:i}=e;return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(l,{required:r,children:i??U}),(0,H.jsx)(c,{forcePopupIcon:!0,value:t,options:Object.keys(C).map(e=>e),renderOption:(e,t)=>(0,H.jsx)(E,{props:e,title:C[t],"data-testid":`Option-${t}`},t),isOptionEqualToValue:(e,t)=>e===t,renderInput:e=>(0,H.jsx)(f,{...e,id:`api-kind-filter`,placeholder:`API Kind`,sx:{"& .MuiInputBase-root":{pt:`1px`,pb:`1px`}}}),getOptionLabel:e=>C[e]??``,onChange:(e,t)=>n(t??void 0),"data-testid":`ApiKindFilter`})]})}),W.__docgenInfo={description:``,methods:[],displayName:`ApiKindFilter`,props:{onSelectApiKind:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value?: ApiKind) => void`,signature:{arguments:[{type:{name:`union`,raw:`| typeof ALL_API_KIND
| typeof BWC_API_KIND
| typeof NO_BWC_API_KIND
| typeof EXPERIMENTAL_API_KIND`,elements:[{name:`ALL_API_KIND`},{name:`BWC_API_KIND`},{name:`NO_BWC_API_KIND`},{name:`EXPERIMENTAL_API_KIND`}]},name:`value`}],return:{name:`void`}}},description:``},value:{required:!1,tsType:{name:`union`,raw:`| typeof ALL_API_KIND
| typeof BWC_API_KIND
| typeof NO_BWC_API_KIND
| typeof EXPERIMENTAL_API_KIND`,elements:[{name:`ALL_API_KIND`},{name:`BWC_API_KIND`},{name:`NO_BWC_API_KIND`},{name:`EXPERIMENTAL_API_KIND`}]},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},labelText:{required:!1,tsType:{name:`string`},description:``}}}})))()}var _e,G,ve,K;function ye(){return(ye=e((()=>{_e=t(),s(),d(),u(),T(),ce(),G=i(),ve=`Filter by API Audience`,K=(0,_e.memo)(e=>{let{value:t,onSelectApiAudience:n}=e;return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(l,{children:ve}),(0,G.jsx)(c,{forcePopupIcon:!0,value:t,options:Object.keys(w).map(e=>e),renderOption:(e,t)=>(0,G.jsx)(E,{props:e,title:w[t],"data-testid":`Option-${t}`},t),isOptionEqualToValue:(e,t)=>e===t,renderInput:e=>(0,G.jsx)(f,{...e,id:`api-audience-filter`,placeholder:`API Audience`,sx:{"& .MuiInputBase-root":{pt:`1px`,pb:`1px`}}}),getOptionLabel:e=>w[e]??``,onChange:(e,t)=>n(t??void 0),"data-testid":`ApiAudienceFilter`})]})}),K.__docgenInfo={description:``,methods:[],displayName:`ApiAudienceFilter`,props:{onSelectApiAudience:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value?: ApiAudience) => void`,signature:{arguments:[{type:{name:`union`,raw:`| typeof API_AUDIENCE_INTERNAL
| typeof API_AUDIENCE_EXTERNAL
| typeof API_AUDIENCE_UNKNOWN
| typeof API_AUDIENCE_ALL`,elements:[{name:`API_AUDIENCE_INTERNAL`},{name:`API_AUDIENCE_EXTERNAL`},{name:`API_AUDIENCE_UNKNOWN`},{name:`API_AUDIENCE_ALL`}]},name:`value`}],return:{name:`void`}}},description:``},value:{required:!1,tsType:{name:`union`,raw:`| typeof API_AUDIENCE_INTERNAL
| typeof API_AUDIENCE_EXTERNAL
| typeof API_AUDIENCE_UNKNOWN
| typeof API_AUDIENCE_ALL`,elements:[{name:`API_AUDIENCE_INTERNAL`},{name:`API_AUDIENCE_EXTERNAL`},{name:`API_AUDIENCE_UNKNOWN`},{name:`API_AUDIENCE_ALL`}]},description:``}}}})))()}var q,J,Y;function be(){return(be=e((()=>{q=t(),te(),g(),ee(),a(),_(),F(),V(),ge(),A(),de(),ye(),J=i(),Y=(0,q.memo)(e=>{let{selectedPackageKey:t,selectedOperationGroupName:n,selectedApiAudience:r,selectedApiKind:i,onSelectPackage:a,onSelectOperationGroup:s,onSelectApiAudience:c,onSelectApiKind:l,onClickExpandCollapseButton:u,areTagsLoading:d,fetchNextTagsPage:f,hasNextTagsPage:p,isNextTagsPageFetching:m,isReferencesLoading:g,isPackageVersionContentLoading:ee,hiddenGeneralFilters:te,tags:_,references:v,versionContent:y,apiType:b,onSelectTag:x,onTagSearch:S,selectedTag:ae}=e,oe=(0,q.useCallback)((e,t)=>u(!t),[u]);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(o,{sx:{borderBottom:`1px solid #D9D9D9`,p:2},children:(0,J.jsxs)(h,{expanded:!te,onChange:oe,"data-testid":`GeneralFiltersAccordion`,children:[(0,J.jsx)(re,{sx:{p:0},expandIcon:(0,J.jsx)(k,{}),children:(0,J.jsx)(ie,{width:`100%`,noWrap:!0,variant:`button`,children:`General Filters`})}),(0,J.jsxs)(ne,{children:[a&&(0,J.jsx)(P,{onSelectPackage:a,references:v,isLoading:g,defaultPackageKey:t,required:!1}),s&&(0,J.jsx)(o,{sx:{mt:+!!a},children:(0,J.jsx)(z,{value:n,onSelectValue:s,isLoading:ee,apiType:b,versionContent:y})}),c&&(0,J.jsx)(o,{sx:{mt:a||s?1:0},children:(0,J.jsx)(K,{value:r,onSelectApiAudience:c})}),l&&(0,J.jsx)(o,{sx:{mt:a||s||c?1:0},children:(0,J.jsx)(W,{value:i,onSelectApiKind:l})})]})]})}),x&&(0,J.jsx)(fe,{tags:_,areTagsLoading:d,fetchNextTagsPage:f,isNextTagsPageFetching:m,hasNextTagsPage:p,onSearch:S,selectedTag:ae,onSelectTag:x})]})}),Y.displayName=`OperationFilters`,Y.__docgenInfo={description:``,methods:[],displayName:`OperationFilters`,props:{selectedPackageKey:{required:!1,tsType:{name:`string`},description:``},onSelectPackage:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(packageRef: PackageReference | null) => void`,signature:{arguments:[{type:{name:`union`,raw:`PackageReference | null`,elements:[{name:`Partial`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  kind: ReferenceKind
  name: string
  version: Key
  status: VersionStatus
  deletedAt: string
  deletedBy: string
  parentPackages: ReadonlyArray<Key>
  latestRevision: boolean
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`kind`,value:{name:`union`,raw:`| typeof PACKAGE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`PACKAGE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`version`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`status`,value:{name:`union`,raw:`| typeof DRAFT_VERSION_STATUS
| typeof RELEASE_VERSION_STATUS
| typeof ARCHIVED_VERSION_STATUS`,elements:[{name:`DRAFT_VERSION_STATUS`},{name:`RELEASE_VERSION_STATUS`},{name:`ARCHIVED_VERSION_STATUS`}],required:!0}},{key:`deletedAt`,value:{name:`string`,required:!0}},{key:`deletedBy`,value:{name:`string`,required:!0}},{key:`parentPackages`,value:{name:`ReadonlyArray`,elements:[{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}],raw:`ReadonlyArray<Key>`,required:!0}},{key:`latestRevision`,value:{name:`boolean`,required:!0}}]}}],raw:`Readonly<{
  key: Key
  kind: ReferenceKind
  name: string
  version: Key
  status: VersionStatus
  deletedAt: string
  deletedBy: string
  parentPackages: ReadonlyArray<Key>
  latestRevision: boolean
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
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`kind`,value:{name:`union`,raw:`| typeof PACKAGE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`PACKAGE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`version`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`status`,value:{name:`union`,raw:`| typeof DRAFT_VERSION_STATUS
| typeof RELEASE_VERSION_STATUS
| typeof ARCHIVED_VERSION_STATUS`,elements:[{name:`DRAFT_VERSION_STATUS`},{name:`RELEASE_VERSION_STATUS`},{name:`ARCHIVED_VERSION_STATUS`}],required:!0}},{key:`deletedAt`,value:{name:`string`,required:!0}},{key:`deletedBy`,value:{name:`string`,required:!0}},{key:`parentPackages`,value:{name:`ReadonlyArray`,elements:[{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}],raw:`ReadonlyArray<Key>`,required:!0}},{key:`latestRevision`,value:{name:`boolean`,required:!0}}]}}],raw:`Readonly<{
  key: Key
  kind: ReferenceKind
  name: string
  version: Key
  status: VersionStatus
  deletedAt: string
  deletedBy: string
  parentPackages: ReadonlyArray<Key>
  latestRevision: boolean
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
  apiProcessorVersion: string
}`,signature:{properties:[{key:`version`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`packageKey`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`status`,value:{name:`union`,raw:`| typeof DRAFT_VERSION_STATUS
| typeof RELEASE_VERSION_STATUS
| typeof ARCHIVED_VERSION_STATUS`,elements:[{name:`DRAFT_VERSION_STATUS`},{name:`RELEASE_VERSION_STATUS`},{name:`ARCHIVED_VERSION_STATUS`}],required:!0}},{key:`createdAt`,value:{name:`string`,required:!0}},{key:`createdBy`,value:{name:`union`,raw:`User | Token | Job`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}`,signature:{properties:[{key:`apiType`,value:{name:`union`,raw:`| typeof API_TYPE_REST
| typeof API_TYPE_GRAPHQL
| typeof API_TYPE_ASYNCAPI`,elements:[{name:`API_TYPE_REST`},{name:`API_TYPE_GRAPHQL`},{name:`API_TYPE_ASYNCAPI`}],required:!0}},{key:`changesSummary`,value:{name:`ChangeSummary`,elements:[{name:`T`}],raw:`ChangeSummary<T>`,required:!1}},{key:`numberOfImpactedOperations`,value:{name:`ChangeSummary`,elements:[{name:`T`}],raw:`ChangeSummary<T>`,required:!1}},{key:`operationsCount`,value:{name:`number`,required:!0}},{key:`deprecatedCount`,value:{name:`number`,required:!0}},{key:`noBwcOperationsCount`,value:{name:`number`,required:!0}},{key:`internalAudienceOperationsCount`,value:{name:`number`,required:!0}},{key:`unknownAudienceOperationsCount`,value:{name:`number`,required:!0}},{key:`apiAudienceTransitions`,value:{name:`Array`,elements:[{name:`ApiAudienceTransition`}],raw:`ApiAudienceTransition[]`,required:!0}},{key:`operations`,value:{name:`object`,required:!1}}]}}],raw:`Readonly<{
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
}`,signature:{properties:[{key:`toolsCount`,value:{name:`number`,required:!0}},{key:`promptsCount`,value:{name:`number`,required:!0}},{key:`resourcesCount`,value:{name:`number`,required:!0}}]}}],raw:`Readonly<{
  toolsCount: number
  promptsCount: number
  resourcesCount: number
}>`}],raw:`Record<string, McpEndpointSummary>`}],raw:`Readonly<Record<string, McpEndpointSummary>>`,required:!0}},{key:`totals`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  endpoints: number
  toolsCount: number
  promptsCount: number
  resourcesCount: number
}`,signature:{properties:[{key:`endpoints`,value:{name:`number`,required:!0}},{key:`toolsCount`,value:{name:`number`,required:!0}},{key:`promptsCount`,value:{name:`number`,required:!0}},{key:`resourcesCount`,value:{name:`number`,required:!0}}]}}],raw:`Readonly<{
  endpoints: number
  toolsCount: number
  promptsCount: number
  resourcesCount: number
}>`,required:!0}}]}}],raw:`Readonly<{
  byEndpoint: Readonly<Record<string, McpEndpointSummary>>
  totals: McpContractsSummaryTotals
}>`,required:!1}},{key:`ddl`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  tablesCount: number
  changesSummary?: ChangesSummary<DiffType>
  numberOfImpactedEntities?: ChangesSummary<DiffType>
}`,signature:{properties:[{key:`tablesCount`,value:{name:`number`,required:!0}},{key:`changesSummary`,value:{name:`ChangeSummary`,elements:[{name:`T`}],raw:`ChangeSummary<T>`,required:!1}},{key:`numberOfImpactedEntities`,value:{name:`ChangeSummary`,elements:[{name:`T`}],raw:`ChangeSummary<T>`,required:!1}}]}}],raw:`Readonly<{
  tablesCount: number
  changesSummary?: ChangesSummary<DiffType>
  numberOfImpactedEntities?: ChangesSummary<DiffType>
}>`,required:!1}}]}}],raw:`Readonly<{
  mcp?: McpContractsSummary
  ddl?: DdlContractsSummary
}>`,required:!1}},{key:`revisionsCount`,value:{name:`number`,required:!0}},{key:`apiProcessorVersion`,value:{name:`string`,required:!0}}]}}],raw:`Readonly<{
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
  apiProcessorVersion: string
}>`},{name:`null`}]},description:``},onTagSearch:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},selectedTag:{required:!1,tsType:{name:`string`},description:``},onSelectTag:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value?: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``}}}})))()}var xe;function Se(){return(Se=e((()=>{xe={createdAt:`Fri Oct 06 2023`,createdBy:{name:`John Doe`,type:`user`,id:`JD_1234`},status:`draft`,version:`2023.1@3`,revisionsCount:3,packageKey:`PSB.alint-dash`,key:`c90f0e0d-005c-4349-a93c-8418822e06b2`,latestRevision:!0,operationGroups:[]}})))()}var X,Z,Ce,we,Q,Te;function $(){return($=e((()=>{X=t(),be(),pe(),ue(),Se(),se(),Z=i(),{useArgs:Ce}=__STORYBOOK_MODULE_PREVIEW_API__,we={title:`Operation Filters`,args:{tags:D,areTagsLoading:!1,isPackageVersionContentLoading:!1,isReferencesLoading:!1,references:le,apiType:oe,versionContent:xe,hiddenGeneralFilters:!1},component:Y},Q=e=>{let[,t]=Ce(),n=(0,X.useCallback)(e=>{t({tags:D.filter(t=>t.toLowerCase().includes(e.toLowerCase()))})},[t]),r=(0,X.useCallback)(e=>{t({hiddenGeneralFilters:e})},[t]);return(0,Z.jsx)(Y,{...e,onTagSearch:n,onClickExpandCollapseButton:r})},Q.__docgenInfo={description:``,methods:[],displayName:`DefaultStory`},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`args => {
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
}`,...Q.parameters?.docs?.source}}},Te=[`DefaultStory`]})))()}$();export{Q as DefaultStory,Te as __namedExportsOrder,we as default};