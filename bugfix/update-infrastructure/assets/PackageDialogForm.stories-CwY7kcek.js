import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-5l_iQkTl.js";import{H as r,Z as i}from"./createTheme-BCoyfIaR.js";import{n as a,t as o}from"./debounce-BVqWGKkP.js";import{n as s,t as c}from"./useThemeProps-DDe-OVu-.js";import{d as l,n as u,o as d,r as f,t as p}from"./clsx.m-CaMu1q58.js";import{t as m}from"./jsx-runtime-Dw8SQ1Xa.js";import{n as h,t as ee}from"./Autocomplete-qEKCSQYj.js";import{n as g,t as _}from"./TextField-BBwqJsbq.js";import{n as v,t as y}from"./createSvgIcon-BXSVxfKP.js";import{n as b,t as x}from"./ListContext-vFXhqtqp.js";import{n as S,t as te}from"./Button-C6vA4c9Q.js";import{n as C,t as ne}from"./FormControlLabel-BUPCGj_t.js";import{n as w,t as T}from"./Checkbox-DfSOUukC.js";import{n as re,t as ie}from"./DialogContent-DtvI-_UL.js";import{i as E,n as ae,r as oe,t as se}from"./DialogTitle-1rZTVADW.js";import{n as ce,t as le}from"./ListItem-fBA3Y_Y4.js";import{n as ue,t as de}from"./listItemIconClasses-DQ-UT4qU.js";import{n as fe,t as pe}from"./ListItemText-DsrfDGkG.js";import{n as me,t as he}from"./LoadingButton-DkzOO3e1.js";import{n as ge,t as _e}from"./DialogForm-C70NlZIT.js";import{n as ve,r as ye,t as D}from"./index.esm-C73x_CXp.js";import{a as be}from"./constants-1jyUsruT.js";import{t as O}from"./mui-DZJR8qot.js";import{a as k,i as A,n as j,o as M}from"./packages-DqV0jDkM.js";import{n as N,r as xe,t as Se}from"./packages-sample-BfiMEljw.js";import{n as Ce,t as we}from"./GroupIcon-DpVgUAiV.js";import{o as Te,t as Ee}from"./validations-DSG29Jop.js";var P,F,I,L,R,z;function B(){return(B=e((()=>{P=t(n()),u(),f(),c(),ue(),b(),F=m(),I=[`className`],L=e=>{let{alignItems:t,classes:n}=e;return l({root:[`root`,t===`flex-start`&&`alignItemsFlexStart`]},de,n)},R=d(`div`,{name:`MuiListItemIcon`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.alignItems===`flex-start`&&t.alignItemsFlexStart]}})(({theme:e,ownerState:t})=>i({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:`inline-flex`},t.alignItems===`flex-start`&&{marginTop:8})),z=P.forwardRef(function(e,t){let n=s({props:e,name:`MuiListItemIcon`}),{className:a}=n,o=r(n,I),c=P.useContext(x),l=i({},n,{alignItems:c.alignItems}),u=L(l);return(0,F.jsx)(R,i({className:p(u.root,a),ownerState:l,ref:t},o))})})))()}var V,H;function U(){return(U=e((()=>{v(),V=m(),H=y((0,V.jsx)(`path`,{d:`M6 15c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-2c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm6-8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-2C9.8 3 8 4.8 8 7s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm6 12c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-2c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z`}),`WorkspacesOutlined`)})))()}var W,G,K,q,J;function Y(){return(Y=e((()=>{W=n(),M(),h(),S(),w(),a(),E(),re(),ae(),C(),ce(),g(),be(),ve(),ge(),Ce(),Te(),me(),B(),U(),fe(),G=m(),K=n(),q=(0,W.memo)(({open:e,setOpen:t,onSubmit:n,title:r,currentWorkspace:i,isLoading:a=!1,parentPackage:s,kind:c,packages:l=[],arePackagesLoading:u=!1,submitError:d,packageSearch:f=``,onPackageSearch:p,submitText:m=`Submit`})=>{let h=c===k,g=(0,W.useMemo)(()=>o((e,t)=>p?.(t),500),[p]),v=i&&i.name.toLowerCase().includes(f.toLowerCase()),y=(0,W.useMemo)(()=>({...j,kind:c,parentGroup:s?.key}),[s,c]),{handleSubmit:b,control:x,setValue:S,reset:C,formState:{errors:w}}=ye({defaultValues:y});return(0,W.useEffect)(()=>{!e&&C()},[e,C]),(0,G.jsxs)(_e,{open:e,onClose:()=>t(!1),onSubmit:b(n),children:[(0,G.jsx)(se,{children:r}),(0,G.jsxs)(ie,{children:[(0,G.jsx)(D,{name:`name`,control:x,render:({field:e})=>(0,G.jsx)(_,{...e,autoFocus:!0,required:!0,label:`Name`,"data-testid":`NameTextField`})}),!h&&(0,G.jsx)(D,{name:`parentGroup`,control:x,render:()=>(0,G.jsx)(ee,{options:v?[i,...l]:l,loading:u,filterOptions:O,defaultValue:s,getOptionLabel:({name:e})=>e,renderOption:(e,{key:t,name:n,kind:r})=>(0,K.createElement)(le,{...e,key:t},(0,G.jsx)(z,{sx:{minWidth:3,mr:1},children:r===`workspace`?(0,G.jsx)(J,{}):(0,G.jsx)(we,{})}),(0,G.jsx)(pe,{children:n})),isOptionEqualToValue:(e,t)=>e.key===t.key,renderInput:e=>(0,G.jsx)(_,{...e,required:!0,label:`Workspace/Parent Group`}),onChange:(e,t)=>S(`parentGroup`,t?.key??``),onInputChange:g,"data-testid":`ParentAutocomplete`})}),(0,G.jsx)(D,{name:`alias`,control:x,rules:{validate:Ee},render:({field:e})=>(0,G.jsx)(_,{...e,required:!0,label:`Alias`,error:!!w.alias||!!d,helperText:!!w.alias&&w.alias?.message||!!d&&d.message,"data-testid":`AliasTextField`})}),(0,G.jsx)(D,{name:`description`,control:x,render:({field:e})=>(0,G.jsx)(_,{...e,multiline:!0,rows:`4`,type:`text`,label:`Description`,"data-testid":`DescriptionTextField`})}),(0,G.jsx)(D,{name:`packageVisibility`,control:x,render:({field:e})=>(0,G.jsx)(ne,{...e,control:(0,G.jsx)(T,{"data-testid":`PackageVisibilityCheckbox`}),label:`Private`})})]}),(0,G.jsxs)(oe,{children:[(0,G.jsx)(he,{variant:`contained`,type:`submit`,loading:a,"data-testid":`${m}Button`,children:m}),(0,G.jsx)(te,{variant:`outlined`,onClick:()=>t(!1),"data-testid":`CancelButton`,children:`Cancel`})]})]})}),J=(0,W.memo)(()=>(0,G.jsx)(H,{sx:{height:`20px`,width:`20px`}})),q.__docgenInfo={description:``,methods:[],displayName:`PackageDialogForm`,props:{open:{required:!0,tsType:{name:`boolean`},description:``},setOpen:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`value`}],return:{name:`void`}}},description:``},onSubmit:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: Package) => void`,signature:{arguments:[{type:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
  description?: string
  isFavorite?: boolean
  serviceName?: string
  // todo remove userRole after full transition to permissions
  userRole?: UserRole
  permissions?: PackagePermissions
  restGroupingPrefix?: string
  parents?: ParentPackages
  defaultRole?: DefaultPackageRoleType
  packageVisibility?: boolean
  defaultReleaseVersion?: string
  releaseVersionPattern?: string
  defaultVersion?: VersionKey
  lastReleaseVersionDetails?: LastReleaseVersionDetails
  bwcErrors?: BwcErrors
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}},{key:`description`,value:{name:`string`,required:!1}},{key:`isFavorite`,value:{name:`boolean`,required:!1}},{key:`serviceName`,value:{name:`string`,required:!1}},{key:`userRole`,value:{name:`union`,raw:`| typeof ADMIN_USER_ROLE_ID
| typeof EDITOR_USER_ROLE_ID
| typeof VIEWER_USER_ROLE_ID`,elements:[{name:`ADMIN_USER_ROLE_ID`},{name:`EDITOR_USER_ROLE_ID`},{name:`VIEWER_USER_ROLE_ID`}],required:!1}},{key:`permissions`,value:{name:`ReadonlyArray`,elements:[{name:`union`,raw:`| typeof READ_PERMISSION
| typeof CREATE_AND_UPDATE_PACKAGE_PERMISSION
| typeof DELETE_PACKAGE_PERMISSION
| typeof MANAGE_DRAFT_VERSION_PERMISSION
| typeof MANAGE_RELEASE_VERSION_PERMISSION
| typeof MANAGE_DEPRECATED_VERSION_PERMISSION
| typeof MANAGE_ARCHIVED_VERSION_PERMISSION
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`MANAGE_ARCHIVED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!1}},{key:`restGroupingPrefix`,value:{name:`string`,required:!1}},{key:`parents`,value:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}}]}}],raw:`ReadonlyArray<ParentPackage>`,required:!1}},{key:`defaultRole`,value:{name:`union`,raw:`| typeof PUBLIC_PACKAGE_ROLE
| typeof PRIVATE_PACKAGE_ROLE`,elements:[{name:`PUBLIC_PACKAGE_ROLE`},{name:`PRIVATE_PACKAGE_ROLE`}],required:!1}},{key:`packageVisibility`,value:{name:`boolean`,required:!1}},{key:`defaultReleaseVersion`,value:{name:`string`,required:!1}},{key:`releaseVersionPattern`,value:{name:`string`,required:!1}},{key:`defaultVersion`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`lastReleaseVersionDetails`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  version?: string
  latestRevision?: boolean
  summary?: PackageSummary
}`,signature:{properties:[{key:`version`,value:{name:`string`,required:!1}},{key:`latestRevision`,value:{name:`boolean`,required:!1}},{key:`summary`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  breaking?: number
  semiBreaking?: number
  nonBreaking?: number
  deprecate?: number
  annotation?: number
  unclassified?: number
}`,signature:{properties:[{key:`breaking`,value:{name:`number`,required:!1}},{key:`semiBreaking`,value:{name:`number`,required:!1}},{key:`nonBreaking`,value:{name:`number`,required:!1}},{key:`deprecate`,value:{name:`number`,required:!1}},{key:`annotation`,value:{name:`number`,required:!1}},{key:`unclassified`,value:{name:`number`,required:!1}}]}}],raw:`Readonly<{
  breaking?: number
  semiBreaking?: number
  nonBreaking?: number
  deprecate?: number
  annotation?: number
  unclassified?: number
}>`,required:!1}}]}}],raw:`Readonly<{
  version?: string
  latestRevision?: boolean
  summary?: PackageSummary
}>`,required:!1}},{key:`bwcErrors`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: StatusMarkerVariant
  count: number
}`,signature:{properties:[{key:`type`,value:{name:`union`,raw:`| typeof LOADING_STATUS_MARKER_VARIANT
| typeof DEFAULT_STATUS_MARKER_VARIANT
| typeof SUCCESS_STATUS_MARKER_VARIANT
| typeof WARNING_STATUS_MARKER_VARIANT
| typeof ERROR_STATUS_MARKER_VARIANT`,elements:[{name:`LOADING_STATUS_MARKER_VARIANT`},{name:`DEFAULT_STATUS_MARKER_VARIANT`},{name:`SUCCESS_STATUS_MARKER_VARIANT`},{name:`WARNING_STATUS_MARKER_VARIANT`},{name:`ERROR_STATUS_MARKER_VARIANT`}],required:!0}},{key:`count`,value:{name:`number`,required:!0}}]}}],raw:`Readonly<{
  type: StatusMarkerVariant
  count: number
}>`,required:!1}}]}}],raw:`Readonly<{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
  description?: string
  isFavorite?: boolean
  serviceName?: string
  // todo remove userRole after full transition to permissions
  userRole?: UserRole
  permissions?: PackagePermissions
  restGroupingPrefix?: string
  parents?: ParentPackages
  defaultRole?: DefaultPackageRoleType
  packageVisibility?: boolean
  defaultReleaseVersion?: string
  releaseVersionPattern?: string
  defaultVersion?: VersionKey
  lastReleaseVersionDetails?: LastReleaseVersionDetails
  bwcErrors?: BwcErrors
}>`},name:`value`}],return:{name:`void`}}},description:``},title:{required:!0,tsType:{name:`string`},description:``},kind:{required:!0,tsType:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}]},description:``},currentWorkspace:{required:!1,tsType:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
  description?: string
  isFavorite?: boolean
  serviceName?: string
  // todo remove userRole after full transition to permissions
  userRole?: UserRole
  permissions?: PackagePermissions
  restGroupingPrefix?: string
  parents?: ParentPackages
  defaultRole?: DefaultPackageRoleType
  packageVisibility?: boolean
  defaultReleaseVersion?: string
  releaseVersionPattern?: string
  defaultVersion?: VersionKey
  lastReleaseVersionDetails?: LastReleaseVersionDetails
  bwcErrors?: BwcErrors
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}},{key:`description`,value:{name:`string`,required:!1}},{key:`isFavorite`,value:{name:`boolean`,required:!1}},{key:`serviceName`,value:{name:`string`,required:!1}},{key:`userRole`,value:{name:`union`,raw:`| typeof ADMIN_USER_ROLE_ID
| typeof EDITOR_USER_ROLE_ID
| typeof VIEWER_USER_ROLE_ID`,elements:[{name:`ADMIN_USER_ROLE_ID`},{name:`EDITOR_USER_ROLE_ID`},{name:`VIEWER_USER_ROLE_ID`}],required:!1}},{key:`permissions`,value:{name:`ReadonlyArray`,elements:[{name:`union`,raw:`| typeof READ_PERMISSION
| typeof CREATE_AND_UPDATE_PACKAGE_PERMISSION
| typeof DELETE_PACKAGE_PERMISSION
| typeof MANAGE_DRAFT_VERSION_PERMISSION
| typeof MANAGE_RELEASE_VERSION_PERMISSION
| typeof MANAGE_DEPRECATED_VERSION_PERMISSION
| typeof MANAGE_ARCHIVED_VERSION_PERMISSION
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`MANAGE_ARCHIVED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!1}},{key:`restGroupingPrefix`,value:{name:`string`,required:!1}},{key:`parents`,value:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}}]}}],raw:`ReadonlyArray<ParentPackage>`,required:!1}},{key:`defaultRole`,value:{name:`union`,raw:`| typeof PUBLIC_PACKAGE_ROLE
| typeof PRIVATE_PACKAGE_ROLE`,elements:[{name:`PUBLIC_PACKAGE_ROLE`},{name:`PRIVATE_PACKAGE_ROLE`}],required:!1}},{key:`packageVisibility`,value:{name:`boolean`,required:!1}},{key:`defaultReleaseVersion`,value:{name:`string`,required:!1}},{key:`releaseVersionPattern`,value:{name:`string`,required:!1}},{key:`defaultVersion`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`lastReleaseVersionDetails`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  version?: string
  latestRevision?: boolean
  summary?: PackageSummary
}`,signature:{properties:[{key:`version`,value:{name:`string`,required:!1}},{key:`latestRevision`,value:{name:`boolean`,required:!1}},{key:`summary`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  breaking?: number
  semiBreaking?: number
  nonBreaking?: number
  deprecate?: number
  annotation?: number
  unclassified?: number
}`,signature:{properties:[{key:`breaking`,value:{name:`number`,required:!1}},{key:`semiBreaking`,value:{name:`number`,required:!1}},{key:`nonBreaking`,value:{name:`number`,required:!1}},{key:`deprecate`,value:{name:`number`,required:!1}},{key:`annotation`,value:{name:`number`,required:!1}},{key:`unclassified`,value:{name:`number`,required:!1}}]}}],raw:`Readonly<{
  breaking?: number
  semiBreaking?: number
  nonBreaking?: number
  deprecate?: number
  annotation?: number
  unclassified?: number
}>`,required:!1}}]}}],raw:`Readonly<{
  version?: string
  latestRevision?: boolean
  summary?: PackageSummary
}>`,required:!1}},{key:`bwcErrors`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: StatusMarkerVariant
  count: number
}`,signature:{properties:[{key:`type`,value:{name:`union`,raw:`| typeof LOADING_STATUS_MARKER_VARIANT
| typeof DEFAULT_STATUS_MARKER_VARIANT
| typeof SUCCESS_STATUS_MARKER_VARIANT
| typeof WARNING_STATUS_MARKER_VARIANT
| typeof ERROR_STATUS_MARKER_VARIANT`,elements:[{name:`LOADING_STATUS_MARKER_VARIANT`},{name:`DEFAULT_STATUS_MARKER_VARIANT`},{name:`SUCCESS_STATUS_MARKER_VARIANT`},{name:`WARNING_STATUS_MARKER_VARIANT`},{name:`ERROR_STATUS_MARKER_VARIANT`}],required:!0}},{key:`count`,value:{name:`number`,required:!0}}]}}],raw:`Readonly<{
  type: StatusMarkerVariant
  count: number
}>`,required:!1}}]}}],raw:`Readonly<{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
  description?: string
  isFavorite?: boolean
  serviceName?: string
  // todo remove userRole after full transition to permissions
  userRole?: UserRole
  permissions?: PackagePermissions
  restGroupingPrefix?: string
  parents?: ParentPackages
  defaultRole?: DefaultPackageRoleType
  packageVisibility?: boolean
  defaultReleaseVersion?: string
  releaseVersionPattern?: string
  defaultVersion?: VersionKey
  lastReleaseVersionDetails?: LastReleaseVersionDetails
  bwcErrors?: BwcErrors
}>`},description:``},isLoading:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},parentPackage:{required:!1,tsType:{name:`union`,raw:`Package | null`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
  description?: string
  isFavorite?: boolean
  serviceName?: string
  // todo remove userRole after full transition to permissions
  userRole?: UserRole
  permissions?: PackagePermissions
  restGroupingPrefix?: string
  parents?: ParentPackages
  defaultRole?: DefaultPackageRoleType
  packageVisibility?: boolean
  defaultReleaseVersion?: string
  releaseVersionPattern?: string
  defaultVersion?: VersionKey
  lastReleaseVersionDetails?: LastReleaseVersionDetails
  bwcErrors?: BwcErrors
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}},{key:`description`,value:{name:`string`,required:!1}},{key:`isFavorite`,value:{name:`boolean`,required:!1}},{key:`serviceName`,value:{name:`string`,required:!1}},{key:`userRole`,value:{name:`union`,raw:`| typeof ADMIN_USER_ROLE_ID
| typeof EDITOR_USER_ROLE_ID
| typeof VIEWER_USER_ROLE_ID`,elements:[{name:`ADMIN_USER_ROLE_ID`},{name:`EDITOR_USER_ROLE_ID`},{name:`VIEWER_USER_ROLE_ID`}],required:!1}},{key:`permissions`,value:{name:`ReadonlyArray`,elements:[{name:`union`,raw:`| typeof READ_PERMISSION
| typeof CREATE_AND_UPDATE_PACKAGE_PERMISSION
| typeof DELETE_PACKAGE_PERMISSION
| typeof MANAGE_DRAFT_VERSION_PERMISSION
| typeof MANAGE_RELEASE_VERSION_PERMISSION
| typeof MANAGE_DEPRECATED_VERSION_PERMISSION
| typeof MANAGE_ARCHIVED_VERSION_PERMISSION
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`MANAGE_ARCHIVED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!1}},{key:`restGroupingPrefix`,value:{name:`string`,required:!1}},{key:`parents`,value:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}}]}}],raw:`ReadonlyArray<ParentPackage>`,required:!1}},{key:`defaultRole`,value:{name:`union`,raw:`| typeof PUBLIC_PACKAGE_ROLE
| typeof PRIVATE_PACKAGE_ROLE`,elements:[{name:`PUBLIC_PACKAGE_ROLE`},{name:`PRIVATE_PACKAGE_ROLE`}],required:!1}},{key:`packageVisibility`,value:{name:`boolean`,required:!1}},{key:`defaultReleaseVersion`,value:{name:`string`,required:!1}},{key:`releaseVersionPattern`,value:{name:`string`,required:!1}},{key:`defaultVersion`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`lastReleaseVersionDetails`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  version?: string
  latestRevision?: boolean
  summary?: PackageSummary
}`,signature:{properties:[{key:`version`,value:{name:`string`,required:!1}},{key:`latestRevision`,value:{name:`boolean`,required:!1}},{key:`summary`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  breaking?: number
  semiBreaking?: number
  nonBreaking?: number
  deprecate?: number
  annotation?: number
  unclassified?: number
}`,signature:{properties:[{key:`breaking`,value:{name:`number`,required:!1}},{key:`semiBreaking`,value:{name:`number`,required:!1}},{key:`nonBreaking`,value:{name:`number`,required:!1}},{key:`deprecate`,value:{name:`number`,required:!1}},{key:`annotation`,value:{name:`number`,required:!1}},{key:`unclassified`,value:{name:`number`,required:!1}}]}}],raw:`Readonly<{
  breaking?: number
  semiBreaking?: number
  nonBreaking?: number
  deprecate?: number
  annotation?: number
  unclassified?: number
}>`,required:!1}}]}}],raw:`Readonly<{
  version?: string
  latestRevision?: boolean
  summary?: PackageSummary
}>`,required:!1}},{key:`bwcErrors`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: StatusMarkerVariant
  count: number
}`,signature:{properties:[{key:`type`,value:{name:`union`,raw:`| typeof LOADING_STATUS_MARKER_VARIANT
| typeof DEFAULT_STATUS_MARKER_VARIANT
| typeof SUCCESS_STATUS_MARKER_VARIANT
| typeof WARNING_STATUS_MARKER_VARIANT
| typeof ERROR_STATUS_MARKER_VARIANT`,elements:[{name:`LOADING_STATUS_MARKER_VARIANT`},{name:`DEFAULT_STATUS_MARKER_VARIANT`},{name:`SUCCESS_STATUS_MARKER_VARIANT`},{name:`WARNING_STATUS_MARKER_VARIANT`},{name:`ERROR_STATUS_MARKER_VARIANT`}],required:!0}},{key:`count`,value:{name:`number`,required:!0}}]}}],raw:`Readonly<{
  type: StatusMarkerVariant
  count: number
}>`,required:!1}}]}}],raw:`Readonly<{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
  description?: string
  isFavorite?: boolean
  serviceName?: string
  // todo remove userRole after full transition to permissions
  userRole?: UserRole
  permissions?: PackagePermissions
  restGroupingPrefix?: string
  parents?: ParentPackages
  defaultRole?: DefaultPackageRoleType
  packageVisibility?: boolean
  defaultReleaseVersion?: string
  releaseVersionPattern?: string
  defaultVersion?: VersionKey
  lastReleaseVersionDetails?: LastReleaseVersionDetails
  bwcErrors?: BwcErrors
}>`},{name:`null`}]},description:``},packages:{required:!1,tsType:{name:`ReadonlyArray`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
  description?: string
  isFavorite?: boolean
  serviceName?: string
  // todo remove userRole after full transition to permissions
  userRole?: UserRole
  permissions?: PackagePermissions
  restGroupingPrefix?: string
  parents?: ParentPackages
  defaultRole?: DefaultPackageRoleType
  packageVisibility?: boolean
  defaultReleaseVersion?: string
  releaseVersionPattern?: string
  defaultVersion?: VersionKey
  lastReleaseVersionDetails?: LastReleaseVersionDetails
  bwcErrors?: BwcErrors
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}},{key:`description`,value:{name:`string`,required:!1}},{key:`isFavorite`,value:{name:`boolean`,required:!1}},{key:`serviceName`,value:{name:`string`,required:!1}},{key:`userRole`,value:{name:`union`,raw:`| typeof ADMIN_USER_ROLE_ID
| typeof EDITOR_USER_ROLE_ID
| typeof VIEWER_USER_ROLE_ID`,elements:[{name:`ADMIN_USER_ROLE_ID`},{name:`EDITOR_USER_ROLE_ID`},{name:`VIEWER_USER_ROLE_ID`}],required:!1}},{key:`permissions`,value:{name:`ReadonlyArray`,elements:[{name:`union`,raw:`| typeof READ_PERMISSION
| typeof CREATE_AND_UPDATE_PACKAGE_PERMISSION
| typeof DELETE_PACKAGE_PERMISSION
| typeof MANAGE_DRAFT_VERSION_PERMISSION
| typeof MANAGE_RELEASE_VERSION_PERMISSION
| typeof MANAGE_DEPRECATED_VERSION_PERMISSION
| typeof MANAGE_ARCHIVED_VERSION_PERMISSION
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`MANAGE_ARCHIVED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!1}},{key:`restGroupingPrefix`,value:{name:`string`,required:!1}},{key:`parents`,value:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}}]}}],raw:`ReadonlyArray<ParentPackage>`,required:!1}},{key:`defaultRole`,value:{name:`union`,raw:`| typeof PUBLIC_PACKAGE_ROLE
| typeof PRIVATE_PACKAGE_ROLE`,elements:[{name:`PUBLIC_PACKAGE_ROLE`},{name:`PRIVATE_PACKAGE_ROLE`}],required:!1}},{key:`packageVisibility`,value:{name:`boolean`,required:!1}},{key:`defaultReleaseVersion`,value:{name:`string`,required:!1}},{key:`releaseVersionPattern`,value:{name:`string`,required:!1}},{key:`defaultVersion`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`lastReleaseVersionDetails`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  version?: string
  latestRevision?: boolean
  summary?: PackageSummary
}`,signature:{properties:[{key:`version`,value:{name:`string`,required:!1}},{key:`latestRevision`,value:{name:`boolean`,required:!1}},{key:`summary`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  breaking?: number
  semiBreaking?: number
  nonBreaking?: number
  deprecate?: number
  annotation?: number
  unclassified?: number
}`,signature:{properties:[{key:`breaking`,value:{name:`number`,required:!1}},{key:`semiBreaking`,value:{name:`number`,required:!1}},{key:`nonBreaking`,value:{name:`number`,required:!1}},{key:`deprecate`,value:{name:`number`,required:!1}},{key:`annotation`,value:{name:`number`,required:!1}},{key:`unclassified`,value:{name:`number`,required:!1}}]}}],raw:`Readonly<{
  breaking?: number
  semiBreaking?: number
  nonBreaking?: number
  deprecate?: number
  annotation?: number
  unclassified?: number
}>`,required:!1}}]}}],raw:`Readonly<{
  version?: string
  latestRevision?: boolean
  summary?: PackageSummary
}>`,required:!1}},{key:`bwcErrors`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: StatusMarkerVariant
  count: number
}`,signature:{properties:[{key:`type`,value:{name:`union`,raw:`| typeof LOADING_STATUS_MARKER_VARIANT
| typeof DEFAULT_STATUS_MARKER_VARIANT
| typeof SUCCESS_STATUS_MARKER_VARIANT
| typeof WARNING_STATUS_MARKER_VARIANT
| typeof ERROR_STATUS_MARKER_VARIANT`,elements:[{name:`LOADING_STATUS_MARKER_VARIANT`},{name:`DEFAULT_STATUS_MARKER_VARIANT`},{name:`SUCCESS_STATUS_MARKER_VARIANT`},{name:`WARNING_STATUS_MARKER_VARIANT`},{name:`ERROR_STATUS_MARKER_VARIANT`}],required:!0}},{key:`count`,value:{name:`number`,required:!0}}]}}],raw:`Readonly<{
  type: StatusMarkerVariant
  count: number
}>`,required:!1}}]}}],raw:`Readonly<{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
  description?: string
  isFavorite?: boolean
  serviceName?: string
  // todo remove userRole after full transition to permissions
  userRole?: UserRole
  permissions?: PackagePermissions
  restGroupingPrefix?: string
  parents?: ParentPackages
  defaultRole?: DefaultPackageRoleType
  packageVisibility?: boolean
  defaultReleaseVersion?: string
  releaseVersionPattern?: string
  defaultVersion?: VersionKey
  lastReleaseVersionDetails?: LastReleaseVersionDetails
  bwcErrors?: BwcErrors
}>`}],raw:`ReadonlyArray<Package>`},description:``,defaultValue:{value:`[]`,computed:!1}},arePackagesLoading:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},submitError:{required:!1,tsType:{name:`union`,raw:`Error | null`,elements:[{name:`Error`},{name:`null`}]},description:``},packageSearch:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},onPackageSearch:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(testFilter: string) => void`,signature:{arguments:[{type:{name:`string`},name:`testFilter`}],return:{name:`void`}}},description:``},submitText:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Submit'`,computed:!1}}}},J.__docgenInfo={description:``,methods:[],displayName:`WorkspaceIcon`}})))()}var X,Z,Q;function $(){return($=e((()=>{Y(),M(),xe(),X={component:q},Z={name:`Default`,args:{open:!0,setOpen:()=>null,onSubmit:()=>null,packages:[...N,...Se],title:`Some Package Form`,kind:A}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    open: true,
    setOpen: () => null,
    onSubmit: () => null,
    packages: [...WORKSPACES, ...GROUPS],
    title: 'Some Package Form',
    kind: PACKAGE_KIND
  }
}`,...Z.parameters?.docs?.source}}},Q=[`DefaultStory`]})))()}$();export{Z as DefaultStory,Q as __namedExportsOrder,X as default};