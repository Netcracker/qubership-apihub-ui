import{n as e,s as t,t as n}from"./rolldown-runtime-BcKkbAw3.js";import{t as r}from"./react-5l_iQkTl.js";import{t as i}from"./jsx-runtime-Dw8SQ1Xa.js";import{n as a,t as o}from"./debounce-Btz0qpQl.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./AccordionSummary-lqY_ex_3.js";import{n as p,t as ee}from"./Typography-DQo_Zf9Y.js";import{n as m,t as h}from"./Autocomplete-Dh2LNmkk.js";import{a as g,n as _,o as v,t as y}from"./TextField-Ba7r1sPh.js";import{n as b,t as x}from"./Box-BoHOER5V.js";import{i as S,r as te}from"./operation-groups-TpwtB0Tk.js";import{f as ne,p as C}from"./files-Br9Ky0mT.js";import{n as re,t as ie}from"./createSvgIcon-DguXvmFd.js";import{a as ae}from"./constants-1jyUsruT.js";import{t as oe}from"./mui-DZJR8qot.js";import{i as se,o as ce}from"./api-types-B07W8ccQ.js";import{n as w,r as T,t as E}from"./operations-BATw-Fna.js";import{n as D,t as O}from"./OptionItem-DoEiCNwa.js";import{n as le,t as ue}from"./reference-samples-UrZXuLT2.js";import{i as de,n as k,r as fe,t as pe}from"./tags-samples-CnmqId1K.js";var A,j,M,N;function P(){return(P=e((()=>{r(),A=r(),m(),a(),v(),_(),D(),ae(),j=i(),M=`Filter by Package`,N=(0,A.memo)(e=>{let{onSelectPackage:t,defaultPackageKey:n,required:r=!0,disableClearable:i=!1,labelText:a=M,references:s,isLoading:c}=e,[l,u]=(0,A.useState)(``),d=(0,A.useCallback)((e,t)=>u(t),[]),f=(0,A.useMemo)(()=>l?s.filter(e=>e.name?.toLowerCase().includes(l.toLowerCase())):s,[s,l]),p=(0,A.useMemo)(()=>s.find(e=>e.key===n)??null,[n,s]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(g,{required:r,htmlFor:`package-select`,children:a}),(0,j.jsx)(h,{freeSolo:!0,loading:c,disableClearable:i,forcePopupIcon:!0,options:f,filterOptions:oe,value:p,renderOption:(e,{key:t,name:n})=>(0,j.jsx)(O,{props:e,title:n},t),getOptionLabel:e=>e.name??``,isOptionEqualToValue:(e,t)=>e.key===t.key,onInputChange:o(d,500),onChange:(e,n)=>t(n),renderInput:e=>(0,j.jsx)(y,{...e,id:`package-select`,placeholder:`Package`,sx:{"& .MuiInputBase-root":{pt:`1px`,pb:`1px`}},value:l,onKeyDown:e=>e.stopPropagation()}),"data-testid":`PackageFilter`})]})}),N.__docgenInfo={description:``,methods:[],displayName:`DashboardPackageSelector`,props:{defaultPackageKey:{required:!1,tsType:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},labelText:{required:!1,tsType:{name:`string`},description:``},disableClearable:{required:!1,tsType:{name:`boolean`},description:``},onSelectPackage:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(packageRef: PackageReference | null) => void`,signature:{arguments:[{type:{name:`union`,raw:`PackageReference | null`,elements:[{name:`Partial`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>>`}],raw:`PackageReference[]`},description:``},isLoading:{required:!0,tsType:{name:`boolean`},description:``}}}})))()}function me(e,t){let n=(0,F.useMemo)(()=>(t?.operationGroups??[]).filter(({apiType:t})=>t===e).map(({groupName:e})=>e),[e,t?.operationGroups]);return[...z,...n]}var F,I,L,R,z;function B(){return(B=e((()=>{r(),F=r(),m(),v(),_(),D(),ne(),S(),I=i(),L=`Filter by Group`,R=e=>{let{required:t=!1,labelText:n,value:r,onSelectValue:i,isLoading:a,apiType:o,versionContent:s}=e,c=me(o,s);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(g,{required:t,children:n??L}),(0,I.jsx)(h,{loading:a,disabled:!a&&c.length===z.length,forcePopupIcon:!0,value:r,options:c,renderOption:(e,t)=>(0,I.jsx)(O,{props:e,title:t,"data-testid":`FilterByGroup-Option-${C(t)}`},t),isOptionEqualToValue:(e,t)=>e===t,getOptionLabel:e=>e??``,renderInput:e=>(0,I.jsx)(y,{...e,id:`operation-group-filter`,placeholder:`Group`,sx:{"& .MuiInputBase-root":{pt:`1px`,pb:`1px`}}}),onChange:(e,t)=>i?.(t??void 0),"data-testid":`OperationGroupFilter`})]})},z=[`All`,te],R.__docgenInfo={description:``,methods:[],displayName:`OperationGroupFilter`}})))()}var V,H,U,W;function he(){return(he=e((()=>{r(),V=r(),m(),v(),_(),D(),T(),H=i(),U=`Filter by API Kind`,W=(0,V.memo)(e=>{let{value:t,onSelectApiKind:n,required:r=!1,labelText:i}=e;return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(g,{required:r,children:i??U}),(0,H.jsx)(h,{forcePopupIcon:!0,value:t,options:Object.keys(w).map(e=>e),renderOption:(e,t)=>(0,H.jsx)(O,{props:e,title:w[t],"data-testid":`Option-${t}`},t),isOptionEqualToValue:(e,t)=>e===t,renderInput:e=>(0,H.jsx)(y,{...e,id:`api-kind-filter`,placeholder:`API Kind`,sx:{"& .MuiInputBase-root":{pt:`1px`,pb:`1px`}}}),getOptionLabel:e=>w[e]??``,onChange:(e,t)=>n(t??void 0),"data-testid":`ApiKindFilter`})]})}),W.__docgenInfo={description:``,methods:[],displayName:`ApiKindFilter`,props:{onSelectApiKind:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value?: ApiKind) => void`,signature:{arguments:[{type:{name:`union`,raw:`| typeof ALL_API_KIND
| typeof BWC_API_KIND
| typeof NO_BWC_API_KIND
| typeof EXPERIMENTAL_API_KIND`,elements:[{name:`ALL_API_KIND`},{name:`BWC_API_KIND`},{name:`NO_BWC_API_KIND`},{name:`EXPERIMENTAL_API_KIND`}]},name:`value`}],return:{name:`void`}}},description:``},value:{required:!1,tsType:{name:`union`,raw:`| typeof ALL_API_KIND
| typeof BWC_API_KIND
| typeof NO_BWC_API_KIND
| typeof EXPERIMENTAL_API_KIND`,elements:[{name:`ALL_API_KIND`},{name:`BWC_API_KIND`},{name:`NO_BWC_API_KIND`},{name:`EXPERIMENTAL_API_KIND`}]},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},labelText:{required:!1,tsType:{name:`string`},description:``}}}})))()}var ge=n((e=>{var t=re();Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(ie()),r=i();e.default=(0,n.default)((0,r.jsx)(`path`,{d:`M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z`}),`ExpandMore`)})),G,K,_e,q;function ve(){return(ve=e((()=>{G=r(),m(),v(),_(),D(),T(),K=i(),_e=`Filter by API Audience`,q=(0,G.memo)(e=>{let{value:t,onSelectApiAudience:n}=e;return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(g,{children:_e}),(0,K.jsx)(h,{forcePopupIcon:!0,value:t,options:Object.keys(E).map(e=>e),renderOption:(e,t)=>(0,K.jsx)(O,{props:e,title:E[t],"data-testid":`Option-${t}`},t),isOptionEqualToValue:(e,t)=>e===t,renderInput:e=>(0,K.jsx)(y,{...e,id:`api-audience-filter`,placeholder:`API Audience`,sx:{"& .MuiInputBase-root":{pt:`1px`,pb:`1px`}}}),getOptionLabel:e=>E[e]??``,onChange:(e,t)=>n(t??void 0),"data-testid":`ApiAudienceFilter`})]})}),q.__docgenInfo={description:``,methods:[],displayName:`ApiAudienceFilter`,props:{onSelectApiAudience:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value?: ApiAudience) => void`,signature:{arguments:[{type:{name:`union`,raw:`| typeof API_AUDIENCE_INTERNAL
| typeof API_AUDIENCE_EXTERNAL
| typeof API_AUDIENCE_UNKNOWN
| typeof API_AUDIENCE_ALL`,elements:[{name:`API_AUDIENCE_INTERNAL`},{name:`API_AUDIENCE_EXTERNAL`},{name:`API_AUDIENCE_UNKNOWN`},{name:`API_AUDIENCE_ALL`}]},name:`value`}],return:{name:`void`}}},description:``},value:{required:!1,tsType:{name:`union`,raw:`| typeof API_AUDIENCE_INTERNAL
| typeof API_AUDIENCE_EXTERNAL
| typeof API_AUDIENCE_UNKNOWN
| typeof API_AUDIENCE_ALL`,elements:[{name:`API_AUDIENCE_INTERNAL`},{name:`API_AUDIENCE_EXTERNAL`},{name:`API_AUDIENCE_UNKNOWN`},{name:`API_AUDIENCE_ALL`}]},description:``}}}})))()}var J,ye,Y,X;function Z(){return(Z=e((()=>{J=r(),u(),c(),l(),b(),p(),P(),B(),he(),ye=t(ge(),1),de(),ve(),Y=i(),X=(0,J.memo)(e=>{let{selectedPackageKey:t,selectedOperationGroupName:n,selectedApiAudience:r,selectedApiKind:i,onSelectPackage:a,onSelectOperationGroup:o,onSelectApiAudience:c,onSelectApiKind:l,onClickExpandCollapseButton:u,areTagsLoading:p,fetchNextTagsPage:m,hasNextTagsPage:h,isNextTagsPageFetching:g,isReferencesLoading:_,isPackageVersionContentLoading:v,hiddenGeneralFilters:y,tags:b,references:S,versionContent:te,apiType:ne,onSelectTag:C,onTagSearch:re,selectedTag:ie}=e,ae=(0,J.useCallback)((e,t)=>u(!t),[u]);return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(x,{sx:{borderBottom:`1px solid #D9D9D9`,p:2},children:(0,Y.jsxs)(s,{expanded:!y,onChange:ae,"data-testid":`GeneralFiltersAccordion`,children:[(0,Y.jsx)(f,{sx:{p:0},expandIcon:(0,Y.jsx)(ye.default,{}),children:(0,Y.jsx)(ee,{width:`100%`,noWrap:!0,variant:`button`,children:`General Filters`})}),(0,Y.jsxs)(d,{children:[a&&(0,Y.jsx)(N,{onSelectPackage:a,references:S,isLoading:_,defaultPackageKey:t,required:!1}),o&&(0,Y.jsx)(x,{sx:{mt:+!!a},children:(0,Y.jsx)(R,{value:n,onSelectValue:o,isLoading:v,apiType:ne,versionContent:te})}),c&&(0,Y.jsx)(x,{sx:{mt:a||o?1:0},children:(0,Y.jsx)(q,{value:r,onSelectApiAudience:c})}),l&&(0,Y.jsx)(x,{sx:{mt:a||o||c?1:0},children:(0,Y.jsx)(W,{value:i,onSelectApiKind:l})})]})]})}),C&&(0,Y.jsx)(fe,{tags:b,areTagsLoading:p,fetchNextTagsPage:m,isNextTagsPageFetching:g,hasNextTagsPage:h,onSearch:re,selectedTag:ie,onSelectTag:C})]})}),X.displayName=`OperationFilters`,X.__docgenInfo={description:``,methods:[],displayName:`OperationFilters`,props:{selectedPackageKey:{required:!1,tsType:{name:`string`},description:``},onSelectPackage:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(packageRef: PackageReference | null) => void`,signature:{arguments:[{type:{name:`union`,raw:`PackageReference | null`,elements:[{name:`Partial`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`},{name:`null`}]},description:``},onTagSearch:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},selectedTag:{required:!1,tsType:{name:`string`},description:``},onSelectTag:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value?: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``}}}})))()}var be;function xe(){return(xe=e((()=>{be={createdAt:`Fri Oct 06 2023`,createdBy:{name:`John Doe`,type:`user`,id:`JD_1234`},status:`draft`,version:`2023.1@3`,revisionsCount:3,packageKey:`PSB.alint-dash`,key:`c90f0e0d-005c-4349-a93c-8418822e06b2`,latestRevision:!0,operationGroups:[]}})))()}var Q,Se,Ce,we,$,Te;function Ee(){return(Ee=e((()=>{Q=r(),Z(),pe(),ue(),xe(),ce(),Se=i(),{useArgs:Ce}=__STORYBOOK_MODULE_PREVIEW_API__,we={title:`Operation Filters`,args:{tags:k,areTagsLoading:!1,isPackageVersionContentLoading:!1,isReferencesLoading:!1,references:le,apiType:se,versionContent:be,hiddenGeneralFilters:!1},component:X},$=e=>{let[,t]=Ce(),n=(0,Q.useCallback)(e=>{t({tags:k.filter(t=>t.toLowerCase().includes(e.toLowerCase()))})},[t]),r=(0,Q.useCallback)(e=>{t({hiddenGeneralFilters:e})},[t]);return(0,Se.jsx)(X,{...e,onTagSearch:n,onClickExpandCollapseButton:r})},$.__docgenInfo={description:``,methods:[],displayName:`DefaultStory`},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`args => {
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
}`,...$.parameters?.docs?.source}}},Te=[`DefaultStory`]})))()}Ee();export{$ as DefaultStory,Te as __namedExportsOrder,we as default};