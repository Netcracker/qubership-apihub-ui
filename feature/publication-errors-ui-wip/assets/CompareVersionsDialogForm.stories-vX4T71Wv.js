import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./react---BZM-86.js";import{n,t as r}from"./debounce-BVqWGKkP.js";import{t as i}from"./jsx-runtime--WVWf14b.js";import{n as a,t as o}from"./Box-CzqjOcoU.js";import{n as s,t as c}from"./Autocomplete-a1FNbMA_.js";import{n as l,t as u}from"./TextField-DOxe2ZJj.js";import{n as d,t as f}from"./Typography-B5fOEpx5.js";import{n as p,t as ee}from"./Button-DrgAR6qf.js";import{n as m,t as te}from"./DialogContent-B-a-mUNQ.js";import{i as ne,n as re,r as ie,t as ae}from"./DialogTitle-BLBZWaKA.js";import{n as h,t as g}from"./ListItem-DRRcrCyH.js";import{a as _,i as v,n as y,r as b,s as x,t as S}from"./VersionErrorIndicator-D7VUZu52.js";import{l as oe}from"./iframe-Y9DfY6bS.js";import{n as C,t as se}from"./Swapper-C0XGu4iR.js";import{n as ce,t as le}from"./LoadingButton-B77sxCaX.js";import{n as ue,t as de}from"./DialogForm-DbSCbMTB.js";import{i as w,n as T,r as fe,t as E}from"./index.esm-hA6-Vtk1.js";import{a as pe}from"./constants-1jyUsruT.js";import{t as D}from"./mui-DZJR8qot.js";import{n as O,t as k}from"./OptionItem--oCqGPu7.js";import{n as A,t as j}from"./VersionStatusChip-exiRKLEc.js";import{n as M,t as me}from"./VersionErrorFormMessage-ChEcHx1a.js";import{i as he,o as N,t as ge}from"./packages-DqV0jDkM.js";import{n as P,t as F}from"./VersionSelectorAutocomplete-9TI2QidE.js";import{i as I,n as L}from"./versions-DKjHwp6C.js";import{n as R,r as z}from"./packages-sample-BfiMEljw.js";import{n as B,t as V}from"./packge-samples-BPf4ZxCY.js";var H,U,W;function G(){return(G=e((()=>{d(),H=t(),oe(),I(),y(),O(),A(),U=i(),W=(0,H.memo)(({props:e,version:t})=>{let{key:n,status:r,latestRevision:i,hasErrors:a,changelogHasErrors:o,apiProcessorVersion:s}=t,{versionKey:c,revisionKey:l}=L(n),u=!i&&l!==``,d=u?`${c}@${l}`:c;return(0,U.jsx)(k,{props:e,title:(0,U.jsxs)(U.Fragment,{children:[c,u&&(0,U.jsx)(f,{component:`span`,variant:`inherit`,color:`#FB8A22`,children:`@${l}`})]}),overflowTooltipText:d,overflowTooltipPlacement:`left`,indicator:(0,U.jsx)(S,{versionKey:c,hasErrors:a,changelogHasErrors:o,apiProcessorVersion:s,fontSize:`extra-small`,showTooltip:!1}),chip:(0,U.jsx)(j,{status:r})})}),W.displayName=`VersionOptionItem`,W.__docgenInfo={description:``,methods:[],displayName:`VersionOptionItem`,props:{props:{required:!0,tsType:{name:`HTMLAttributes`,elements:[{name:`HTMLLIElement`}],raw:`HTMLAttributes<HTMLLIElement>`},description:``},version:{required:!0,tsType:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`},description:``}}}})))()}var K,q,J,Y,_e;function X(){return(X=e((()=>{K=t(),s(),a(),p(),n(),ne(),m(),re(),h(),l(),d(),T(),ce(),ue(),N(),pe(),I(),C(),M(),y(),P(),G(),b(),x(),q=t(),J=i(),Y=(0,K.memo)(({open:e,setOpen:t,setValue:n,control:i,workspaces:a,originalPackageOptions:s,changedPackageOptions:l,originalVersionOptions:d,changedVersionOptions:p,onSubmit:m,onSwap:ne,isApiTypeFetching:re,isOriginalPackagesLoading:h,isChangedPackagesLoading:y,isDashboard:b,onOriginalPackageInputChange:x,onChangedPackageInputChange:oe,onOriginalPackageVersionInputChange:C,onChangedPackageVersionInputChange:ce,isOriginalPackageVersionsLoading:ue,isChangedPackageVersionsLoading:T,isDefaultOriginalPackageLoading:fe,arePackagesDifferent:pe})=>{let[O,k]=(0,K.useState)(pe),A=b?`Dashboard`:`Package`,j=b?`Change Dashboards`:`Change Packages`,M=w({control:i,name:`originalVersion`}),N=w({control:i,name:`originalPackage`}),P=w({control:i,name:`changedVersion`}),I=w({control:i,name:`changedPackage`}),R=b?ge:he,z=N?.key,B=O?I?.key:N?.key,{isBlocking:V,formHelperText:H,hasProblems:U}=v({packageKey:z,versionKey:M?.key,hasErrors:M?.hasErrors,changelogHasErrors:M?.changelogHasErrors,apiProcessorVersion:M?.apiProcessorVersion,kind:R,surface:_.COMPARE_PREVIOUS_VERSION}),{isBlocking:G,formHelperText:Y,hasProblems:X}=v({packageKey:B,versionKey:P?.key,hasErrors:P?.hasErrors,changelogHasErrors:P?.changelogHasErrors,apiProcessorVersion:P?.apiProcessorVersion,kind:R,surface:_.COMPARE_CURRENT_VERSION});return(0,J.jsxs)(de,{open:e,onClose:()=>t(!1),onSubmit:m,maxWidth:`md`,children:[(0,J.jsx)(ae,{children:`Select Versions To Compare`}),(0,J.jsxs)(te,{sx:_e,children:[(0,J.jsx)(f,{sx:{gridArea:`originalTitle`},variant:`button`,children:`Previous`}),O&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(E,{name:`originalWorkspace`,control:i,render:({field:{value:e,onChange:t}})=>(0,J.jsx)(c,{sx:{gridArea:`originalWorkspace`},value:e,options:a,isOptionEqualToValue:(e,t)=>e.key===t.key,getOptionLabel:({name:e})=>e,renderOption:(e,{key:t,name:n})=>(0,q.createElement)(g,{...e,key:t},n),renderInput:e=>(0,J.jsx)(u,{...e,required:!0,label:`Workspace`}),onChange:(e,r)=>{n(`originalPackage`,null),n(`originalVersion`,null),t(r)},"data-testid":`PreviousWorkspaceAutocomplete`})}),(0,J.jsx)(E,{name:`originalPackage`,control:i,render:({field:{value:e,onChange:t}})=>(0,J.jsx)(c,{autoSelect:!0,filterOptions:D,onInputChange:r(x,500),sx:{gridArea:`originalPackage`},value:e,loading:h,options:s,getOptionLabel:({name:e})=>e,renderOption:(e,{key:t,name:n})=>(0,q.createElement)(g,{...e,key:t},n),renderInput:e=>(0,J.jsx)(u,{...e,required:!0,label:A}),onChange:(e,r)=>{n(`originalVersion`,null),t(r)},"data-testid":`PreviousPackageAutocomplete`})})]}),(0,J.jsx)(E,{name:`originalVersion`,control:i,render:({field:{value:e,onChange:t}})=>{let{versionKey:n}=L(e?.key,e?.latestRevision);return(0,J.jsx)(F,{filterOptions:D,onInputChange:r(C,500),sx:{gridArea:`originalVersion`},inputIndicator:U&&M&&(0,J.jsx)(S,{versionKey:M.key,hasErrors:M.hasErrors,changelogHasErrors:M.changelogHasErrors,apiProcessorVersion:M.apiProcessorVersion,kind:R}),value:e?{...e,key:e.latestRevision?n:e.key}:null,loading:ue,options:d,isOptionEqualToValue:(e,t)=>e.key===t.key,getOptionLabel:({key:e})=>e,renderOption:(e,t)=>(0,J.jsx)(W,{props:e,version:t},t.key),renderInput:e=>(0,J.jsx)(u,{...e,required:!0,label:`Version`,error:V}),onChange:(e,n)=>t(n),"data-testid":`PreviousVersionAutocomplete`})}}),(0,J.jsx)(o,{sx:{gridArea:`swapper`,alignSelf:`center`},children:(0,J.jsx)(se,{onSwap:ne})}),(0,J.jsx)(f,{sx:{gridArea:`changedTitle`},variant:`button`,children:`Current`}),O&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(E,{name:`changedWorkspace`,control:i,render:({field:{value:e,onChange:t}})=>(0,J.jsx)(c,{sx:{gridArea:`changedWorkspace`},value:e,options:a,isOptionEqualToValue:(e,t)=>e.key===t.key,getOptionLabel:({name:e})=>e,renderOption:(e,{key:t,name:n})=>(0,q.createElement)(g,{...e,key:t},n),renderInput:e=>(0,J.jsx)(u,{...e,required:!0,label:`Workspace`}),onChange:(e,r)=>{n(`changedPackage`,null),n(`changedVersion`,null),t(r)},"data-testid":`CurrentWorkspaceAutocomplete`})}),(0,J.jsx)(E,{name:`changedPackage`,control:i,render:({field:{value:e,onChange:t}})=>(0,J.jsx)(c,{autoSelect:!0,filterOptions:D,onInputChange:r(oe,500),sx:{gridArea:`changedPackage`},value:e,loading:y,options:l,getOptionLabel:({name:e})=>e,renderOption:(e,{key:t,name:n})=>(0,q.createElement)(g,{...e,key:t},n),renderInput:e=>(0,J.jsx)(u,{...e,required:!0,label:A}),onChange:(e,r)=>{n(`changedVersion`,null),t(r)},"data-testid":`CurrentPackageAutocomplete`})})]}),(0,J.jsx)(E,{name:`changedVersion`,control:i,render:({field:{value:e,onChange:t}})=>{let{versionKey:n}=L(e?.key,e?.latestRevision);return(0,J.jsx)(F,{filterOptions:D,onInputChange:r(ce,500),sx:{gridArea:`changedVersion`},inputIndicator:X&&P&&(0,J.jsx)(S,{versionKey:P.key,hasErrors:P.hasErrors,changelogHasErrors:P.changelogHasErrors,apiProcessorVersion:P.apiProcessorVersion,kind:R}),value:e?{...e,key:e.latestRevision?n:e.key}:null,loading:T,options:p,isOptionEqualToValue:(e,t)=>e.key===t.key,getOptionLabel:({key:e})=>e,renderOption:(e,t)=>(0,J.jsx)(W,{props:e,version:t},t.key),renderInput:e=>(0,J.jsx)(u,{...e,required:!0,label:`Version`,error:G}),onChange:(e,n)=>t(n),"data-testid":`CurrentVersionAutocomplete`})}})]}),(0,J.jsx)(o,{sx:{maxWidth:`692px`,padding:`0 24px`},children:(0,J.jsx)(me,{"data-testid":`CompareVersionsFormMessage`,message:Y??H})}),(0,J.jsxs)(ie,{children:[(0,J.jsx)(le,{variant:`contained`,type:`submit`,loading:re,disabled:V||G,"data-testid":`CompareButton`,children:`Compare`}),(0,J.jsx)(ee,{variant:`outlined`,onClick:()=>t(!1),"data-testid":`CancelButton`,children:`Cancel`}),(0,J.jsx)(o,{sx:{marginLeft:`auto`},children:(0,J.jsx)(le,{variant:`outlined`,onClick:()=>k(!O),disabled:O,loading:fe,"data-testid":`ChangePackagesButton`,children:j})})]})]})}),Y.displayName=`CompareVersionsDialogForm`,_e={display:`grid`,columnGap:1,gridTemplateRows:`repeat(3, max-content)`,gridTemplateColumns:`300px max-content 300px`,gridTemplateAreas:`
    'originalTitle     originalTitle   changedTitle'
    'originalWorkspace   swapper       changedWorkspace'
    'originalPackage   swapper         changedPackage'
    'originalVersion   swapper         changedVersion'
  `},Y.__docgenInfo={description:``,methods:[],displayName:`CompareVersionsDialogForm`,props:{control:{required:!0,tsType:{name:`Control`,elements:[{name:`signature`,type:`object`,raw:`{
  originalWorkspace: Package | null
  changedWorkspace: Package | null
  originalPackage: Package | null
  changedPackage: Package | null
  originalVersion: PackageVersion | null
  changedVersion: PackageVersion | null
}`,signature:{properties:[{key:`originalWorkspace`,value:{name:`union`,raw:`Package | null`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
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
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!1}},{key:`restGroupingPrefix`,value:{name:`string`,required:!1}},{key:`parents`,value:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}}]}}],raw:`ReadonlyArray<ParentPackage>`,required:!1}},{key:`defaultRole`,value:{name:`union`,raw:`| typeof PUBLIC_PACKAGE_ROLE
| typeof PRIVATE_PACKAGE_ROLE`,elements:[{name:`PUBLIC_PACKAGE_ROLE`},{name:`PRIVATE_PACKAGE_ROLE`}],required:!1}},{key:`packageVisibility`,value:{name:`boolean`,required:!1}},{key:`defaultReleaseVersion`,value:{name:`string`,required:!1}},{key:`releaseVersionPattern`,value:{name:`string`,required:!1}},{key:`defaultVersion`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`lastReleaseVersionDetails`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`},{name:`null`}],required:!0}},{key:`changedWorkspace`,value:{name:`union`,raw:`Package | null`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
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
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!1}},{key:`restGroupingPrefix`,value:{name:`string`,required:!1}},{key:`parents`,value:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}}]}}],raw:`ReadonlyArray<ParentPackage>`,required:!1}},{key:`defaultRole`,value:{name:`union`,raw:`| typeof PUBLIC_PACKAGE_ROLE
| typeof PRIVATE_PACKAGE_ROLE`,elements:[{name:`PUBLIC_PACKAGE_ROLE`},{name:`PRIVATE_PACKAGE_ROLE`}],required:!1}},{key:`packageVisibility`,value:{name:`boolean`,required:!1}},{key:`defaultReleaseVersion`,value:{name:`string`,required:!1}},{key:`releaseVersionPattern`,value:{name:`string`,required:!1}},{key:`defaultVersion`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`lastReleaseVersionDetails`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`},{name:`null`}],required:!0}},{key:`originalPackage`,value:{name:`union`,raw:`Package | null`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
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
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!1}},{key:`restGroupingPrefix`,value:{name:`string`,required:!1}},{key:`parents`,value:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}}]}}],raw:`ReadonlyArray<ParentPackage>`,required:!1}},{key:`defaultRole`,value:{name:`union`,raw:`| typeof PUBLIC_PACKAGE_ROLE
| typeof PRIVATE_PACKAGE_ROLE`,elements:[{name:`PUBLIC_PACKAGE_ROLE`},{name:`PRIVATE_PACKAGE_ROLE`}],required:!1}},{key:`packageVisibility`,value:{name:`boolean`,required:!1}},{key:`defaultReleaseVersion`,value:{name:`string`,required:!1}},{key:`releaseVersionPattern`,value:{name:`string`,required:!1}},{key:`defaultVersion`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`lastReleaseVersionDetails`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`},{name:`null`}],required:!0}},{key:`changedPackage`,value:{name:`union`,raw:`Package | null`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
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
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!1}},{key:`restGroupingPrefix`,value:{name:`string`,required:!1}},{key:`parents`,value:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}}]}}],raw:`ReadonlyArray<ParentPackage>`,required:!1}},{key:`defaultRole`,value:{name:`union`,raw:`| typeof PUBLIC_PACKAGE_ROLE
| typeof PRIVATE_PACKAGE_ROLE`,elements:[{name:`PUBLIC_PACKAGE_ROLE`},{name:`PRIVATE_PACKAGE_ROLE`}],required:!1}},{key:`packageVisibility`,value:{name:`boolean`,required:!1}},{key:`defaultReleaseVersion`,value:{name:`string`,required:!1}},{key:`releaseVersionPattern`,value:{name:`string`,required:!1}},{key:`defaultVersion`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`lastReleaseVersionDetails`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`},{name:`null`}],required:!0}},{key:`originalVersion`,value:{name:`union`,raw:`PackageVersion | null`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`},{name:`null`}],required:!0}},{key:`changedVersion`,value:{name:`union`,raw:`PackageVersion | null`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`},{name:`null`}],required:!0}}]}}],raw:`Control<CompareVersionsDialogFormData>`},description:``},setValue:{required:!0,tsType:{name:`UseFormSetValue`,elements:[{name:`signature`,type:`object`,raw:`{
  originalWorkspace: Package | null
  changedWorkspace: Package | null
  originalPackage: Package | null
  changedPackage: Package | null
  originalVersion: PackageVersion | null
  changedVersion: PackageVersion | null
}`,signature:{properties:[{key:`originalWorkspace`,value:{name:`union`,raw:`Package | null`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
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
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!1}},{key:`restGroupingPrefix`,value:{name:`string`,required:!1}},{key:`parents`,value:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}}]}}],raw:`ReadonlyArray<ParentPackage>`,required:!1}},{key:`defaultRole`,value:{name:`union`,raw:`| typeof PUBLIC_PACKAGE_ROLE
| typeof PRIVATE_PACKAGE_ROLE`,elements:[{name:`PUBLIC_PACKAGE_ROLE`},{name:`PRIVATE_PACKAGE_ROLE`}],required:!1}},{key:`packageVisibility`,value:{name:`boolean`,required:!1}},{key:`defaultReleaseVersion`,value:{name:`string`,required:!1}},{key:`releaseVersionPattern`,value:{name:`string`,required:!1}},{key:`defaultVersion`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`lastReleaseVersionDetails`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`},{name:`null`}],required:!0}},{key:`changedWorkspace`,value:{name:`union`,raw:`Package | null`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
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
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!1}},{key:`restGroupingPrefix`,value:{name:`string`,required:!1}},{key:`parents`,value:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}}]}}],raw:`ReadonlyArray<ParentPackage>`,required:!1}},{key:`defaultRole`,value:{name:`union`,raw:`| typeof PUBLIC_PACKAGE_ROLE
| typeof PRIVATE_PACKAGE_ROLE`,elements:[{name:`PUBLIC_PACKAGE_ROLE`},{name:`PRIVATE_PACKAGE_ROLE`}],required:!1}},{key:`packageVisibility`,value:{name:`boolean`,required:!1}},{key:`defaultReleaseVersion`,value:{name:`string`,required:!1}},{key:`releaseVersionPattern`,value:{name:`string`,required:!1}},{key:`defaultVersion`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`lastReleaseVersionDetails`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`},{name:`null`}],required:!0}},{key:`originalPackage`,value:{name:`union`,raw:`Package | null`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
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
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!1}},{key:`restGroupingPrefix`,value:{name:`string`,required:!1}},{key:`parents`,value:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}}]}}],raw:`ReadonlyArray<ParentPackage>`,required:!1}},{key:`defaultRole`,value:{name:`union`,raw:`| typeof PUBLIC_PACKAGE_ROLE
| typeof PRIVATE_PACKAGE_ROLE`,elements:[{name:`PUBLIC_PACKAGE_ROLE`},{name:`PRIVATE_PACKAGE_ROLE`}],required:!1}},{key:`packageVisibility`,value:{name:`boolean`,required:!1}},{key:`defaultReleaseVersion`,value:{name:`string`,required:!1}},{key:`releaseVersionPattern`,value:{name:`string`,required:!1}},{key:`defaultVersion`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`lastReleaseVersionDetails`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`},{name:`null`}],required:!0}},{key:`changedPackage`,value:{name:`union`,raw:`Package | null`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
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
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!1}},{key:`restGroupingPrefix`,value:{name:`string`,required:!1}},{key:`parents`,value:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}}]}}],raw:`ReadonlyArray<ParentPackage>`,required:!1}},{key:`defaultRole`,value:{name:`union`,raw:`| typeof PUBLIC_PACKAGE_ROLE
| typeof PRIVATE_PACKAGE_ROLE`,elements:[{name:`PUBLIC_PACKAGE_ROLE`},{name:`PRIVATE_PACKAGE_ROLE`}],required:!1}},{key:`packageVisibility`,value:{name:`boolean`,required:!1}},{key:`defaultReleaseVersion`,value:{name:`string`,required:!1}},{key:`releaseVersionPattern`,value:{name:`string`,required:!1}},{key:`defaultVersion`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`lastReleaseVersionDetails`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`},{name:`null`}],required:!0}},{key:`originalVersion`,value:{name:`union`,raw:`PackageVersion | null`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`},{name:`null`}],required:!0}},{key:`changedVersion`,value:{name:`union`,raw:`PackageVersion | null`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`},{name:`null`}],required:!0}}]}}],raw:`UseFormSetValue<CompareVersionsDialogFormData>`},description:``},workspaces:{required:!0,tsType:{name:`ReadonlyArray`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!1}},{key:`restGroupingPrefix`,value:{name:`string`,required:!1}},{key:`parents`,value:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`}],raw:`ReadonlyArray<Package>`},description:``},originalPackageOptions:{required:!0,tsType:{name:`ReadonlyArray`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!1}},{key:`restGroupingPrefix`,value:{name:`string`,required:!1}},{key:`parents`,value:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`}],raw:`ReadonlyArray<Package>`},description:``},changedPackageOptions:{required:!0,tsType:{name:`ReadonlyArray`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!1}},{key:`restGroupingPrefix`,value:{name:`string`,required:!1}},{key:`parents`,value:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`}],raw:`ReadonlyArray<Package>`},description:``},originalVersionOptions:{required:!0,tsType:{name:`ReadonlyArray`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`}],raw:`ReadonlyArray<PackageVersion>`},description:``},changedVersionOptions:{required:!0,tsType:{name:`ReadonlyArray`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`}],raw:`ReadonlyArray<PackageVersion>`},description:``},onSubmit:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onSwap:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},isApiTypeFetching:{required:!0,tsType:{name:`boolean`},description:``},isOriginalPackagesLoading:{required:!0,tsType:{name:`boolean`},description:``},isChangedPackagesLoading:{required:!0,tsType:{name:`boolean`},description:``},isOriginalPackageVersionsLoading:{required:!0,tsType:{name:`boolean`},description:``},isChangedPackageVersionsLoading:{required:!0,tsType:{name:`boolean`},description:``},isDefaultOriginalPackageLoading:{required:!0,tsType:{name:`boolean`},description:``},isDashboard:{required:!0,tsType:{name:`boolean`},description:``},arePackagesDifferent:{required:!0,tsType:{name:`boolean`},description:``},open:{required:!0,tsType:{name:`boolean`},description:``},setOpen:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`value`}],return:{name:`void`}}},description:``},onOriginalPackageInputChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(event: SyntheticEvent, value: string) => void`,signature:{arguments:[{type:{name:`SyntheticEvent`},name:`event`},{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},onChangedPackageInputChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(event: SyntheticEvent, value: string) => void`,signature:{arguments:[{type:{name:`SyntheticEvent`},name:`event`},{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},onOriginalPackageVersionInputChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(event: SyntheticEvent, value: string) => void`,signature:{arguments:[{type:{name:`SyntheticEvent`},name:`event`},{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},onChangedPackageVersionInputChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(event: SyntheticEvent, value: string) => void`,signature:{arguments:[{type:{name:`SyntheticEvent`},name:`event`},{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``}}}})))()}var Z;function Q(){return(Q=e((()=>{Z={createdAt:`Fri Oct 06 2023`,createdBy:{name:`John Doe`,type:`user`,id:`JD_1234`},status:`draft`,previousVersion:`2023.1@3`,versionLabels:[`apihub/x-api-kind: no-BWC`],key:`2023.1@3`,latestRevision:!0}})))()}var ve,ye,be,xe,$,Se;function Ce(){return(Ce=e((()=>{ve=t(),T(),X(),Q(),z(),B(),ye=i(),be={component:Y},xe=e=>{let t=(0,ve.useMemo)(()=>({originalWorkspace:null,changedWorkspace:null,originalPackage:null,changedPackage:null,originalVersion:null,changedVersion:null}),[]),{control:n,setValue:r}=fe({defaultValues:t});return(0,ye.jsx)(Y,{...e,control:n,setValue:r})},$={name:`Default`,args:{open:!0,setOpen:()=>null,onSubmit:()=>null,workspaces:R,originalPackageOptions:V,changedPackageOptions:V,originalVersionOptions:[Z],changedVersionOptions:[Z],onSwap:()=>null,isApiTypeFetching:!1,isOriginalPackagesLoading:!1,isChangedPackagesLoading:!1,isOriginalPackageVersionsLoading:!1,isChangedPackageVersionsLoading:!1,isDashboard:!1},render:xe},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    open: true,
    setOpen: () => null,
    onSubmit: () => null,
    workspaces: WORKSPACES,
    originalPackageOptions: PACKAGE_OPTIONS,
    changedPackageOptions: PACKAGE_OPTIONS,
    originalVersionOptions: [packageVersion],
    changedVersionOptions: [packageVersion],
    onSwap: () => null,
    isApiTypeFetching: false,
    isOriginalPackagesLoading: false,
    isChangedPackagesLoading: false,
    isOriginalPackageVersionsLoading: false,
    isChangedPackageVersionsLoading: false,
    isDashboard: false
  },
  render: StoryComponent
}`,...$.parameters?.docs?.source}}},Se=[`DefaultStory`]})))()}Ce();export{$ as DefaultStory,Se as __namedExportsOrder,be as default};