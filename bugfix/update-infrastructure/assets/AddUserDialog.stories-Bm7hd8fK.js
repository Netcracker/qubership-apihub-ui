import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react---BZM-86.js";import{t as r}from"./jsx-runtime--WVWf14b.js";import{n as i,t as a}from"./Box-CzqjOcoU.js";import{n as o,t as s}from"./Chip-CgpZuX2j.js";import{n as c,t as l}from"./UserAvatar-CFhvm_q6.js";import{n as u,t as d}from"./Button-DrgAR6qf.js";import{n as f,t as p}from"./DialogContent-B-a-mUNQ.js";import{i as m,n as h,r as ee,t as te}from"./DialogTitle-BLBZWaKA.js";import{n as g,t as _}from"./ListItem-DRRcrCyH.js";import{M as v,N as y,n as b,r as x}from"./iframe-uxV-ecVC.js";import{n as S,t as C}from"./CloseOutlined-CJhq0-TS.js";import{n as w,t as T}from"./SearchOutlined-DvO7toip.js";import{n as E,t as D}from"./DialogForm-DbSCbMTB.js";import{n as O,t as k}from"./PopupDelegate-BriLplMm.js";import{n as ne,t as re}from"./useDebounce-C6BTKacq.js";import{n as ie,r as ae,t as A}from"./index.esm-hA6-Vtk1.js";import{a as j}from"./constants-1jyUsruT.js";import{n as M,r as N}from"./system-administrators-samples-WecPEskY.js";import{n as P,t as F}from"./CheckIcon-BbOoR2It.js";import{n as I,t as L}from"./MultipleSelectorAutocomplete-BDda--Fq.js";import{n as R,r as z}from"./roles-samples-CDj6ky2A.js";var B;function V(){return(V=e((()=>{B=`show-add-user-dialog`})))()}var H,U,W,G,K,q;function J(){return(J=e((()=>{H=t(n(),1),O(),E(),i(),u(),o(),m(),f(),h(),g(),ie(),re(),P(),w(),c(),j(),S(),I(),V(),U=r(),W=n(),G=(0,H.memo)(e=>{let{users:t,roles:n,onConfirm:r,setUserSearch:i,isUsersLoading:a}=e;return(0,U.jsx)(k,{type:B,render:e=>(0,U.jsx)(K,{...e,users:t,roles:n,onConfirm:r,setUserSearch:i,isUsersLoading:a})})}),K=(0,H.memo)(e=>{let{open:t,setOpen:n,users:r,roles:i,onConfirm:o,setUserSearch:c,isUsersLoading:u}=e,{handleSubmit:f,control:m}=ae(),[h,g]=(0,H.useState)(``);ne(()=>c(h),500,[h]);let v=(0,H.useCallback)(e=>{let{users:t,roles:r}=e;o(t,r),n(!1)},[o,n]),y=(0,H.useCallback)(()=>{n(!1)},[n]);return(0,U.jsxs)(D,{open:t,onClose:y,onSubmit:f(v),children:[(0,U.jsx)(te,{children:`Add User`}),(0,U.jsxs)(p,{children:[(0,U.jsx)(A,{name:`users`,control:m,render:({field:{value:e,onChange:t}})=>(0,U.jsx)(L,{id:`user-selector`,options:r??[],value:e,inputLabel:`User`,icon:(0,U.jsx)(T,{}),isLoading:u,onChange:t,getOptionLabel:e=>e.name??e,setInputSearch:g,renderOption:(t,{key:n,name:r,avatarUrl:i})=>{let a=e?.some(e=>e.key===n);return(0,W.createElement)(_,{...t,key:r,sx:{pointerEvents:a?`none`:``}},a?(0,U.jsx)(F,{}):null,(0,U.jsx)(l,{sx:{marginLeft:a?`6px`:`21px`,marginRight:`6px`},name:r,src:i,size:`small`}),r)},renderTags:(e,t)=>e.map((e,n)=>(0,U.jsx)(s,{variant:`outlined`,size:`small`,sx:q,avatar:(0,U.jsx)(F,{}),deleteIcon:(0,U.jsx)(C,{}),label:e?.name,...t({index:n}),"data-testid":`UserChip`})),"data-testid":`UsersAutocomplete`})}),(0,U.jsx)(A,{name:`roles`,control:m,render:({field:{value:e,onChange:t}})=>(0,U.jsx)(L,{id:`roles-selector`,options:i??[],value:e,inputLabel:`Role`,onChange:t,getOptionLabel:e=>e.role??e,renderOption:(t,{key:n,role:r})=>{let i=e?.some(e=>e.key===n);return(0,W.createElement)(_,{...t,key:r,sx:{pointerEvents:i?`none`:``},"data-testid":`${r}ListItem`},i?(0,U.jsx)(F,{}):null,(0,U.jsx)(a,{sx:{marginLeft:i?`6px`:`21px`},children:r}))},renderTags:(e,t)=>e.map((e,n)=>(0,U.jsx)(s,{variant:`outlined`,size:`small`,sx:q,avatar:(0,U.jsx)(F,{}),deleteIcon:(0,U.jsx)(C,{}),label:e?.role,...t({index:n})})),"data-testid":`RolesAutocomplete`})})]}),(0,U.jsxs)(ee,{children:[(0,U.jsx)(d,{variant:`contained`,type:`submit`,"data-testid":`AddButton`,children:`Add`}),(0,U.jsx)(d,{variant:`outlined`,onClick:()=>n(!1),"data-testid":`CancelButton`,children:`Cancel`})]})]})}),q={border:`none`,width:`350px`,display:`flex`,justifyContent:`space-between`,".MuiChip-label":{mr:`auto`},"&:hover":{backgroundColor:`#2E3A5217`,"& .MuiChip-deleteIcon":{display:`block`}},"& .MuiChip-deleteIcon":{display:`none`}},G.__docgenInfo={description:``,methods:[],displayName:`AddUserDialog`,props:{users:{required:!0,tsType:{name:`union`,raw:`ReadonlyArray<User> | undefined`,elements:[{name:`ReadonlyArray`,elements:[{name:`intersection`,raw:`Omit<UserDto, 'id' | 'gitIntegrationStatus'> & {
  key: Key
  name: string
  gitlabIntegration: boolean
}`,elements:[{name:`Omit`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  id: Key
  name?: string
  email?: string
  avatarUrl?: Url
  gitIntegrationStatus: boolean
  systemRole: string
  accessTokenTTLSeconds: number | null
}`,signature:{properties:[{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!1}},{key:`email`,value:{name:`string`,required:!1}},{key:`avatarUrl`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`gitIntegrationStatus`,value:{name:`boolean`,required:!0}},{key:`systemRole`,value:{name:`string`,required:!0}},{key:`accessTokenTTLSeconds`,value:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}],required:!0}}]}}],raw:`Readonly<{
  id: Key
  name?: string
  email?: string
  avatarUrl?: Url
  gitIntegrationStatus: boolean
  systemRole: string
  accessTokenTTLSeconds: number | null
}>`},{name:`union`,raw:`'id' | 'gitIntegrationStatus'`,elements:[{name:`literal`,value:`'id'`},{name:`literal`,value:`'gitIntegrationStatus'`}]}],raw:`Omit<UserDto, 'id' | 'gitIntegrationStatus'>`},{name:`signature`,type:`object`,raw:`{
  key: Key
  name: string
  gitlabIntegration: boolean
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`gitlabIntegration`,value:{name:`boolean`,required:!0}}]}}]}],raw:`ReadonlyArray<User>`},{name:`undefined`}]},description:``},roles:{required:!0,tsType:{name:`ReadonlyArray`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  role: string
  readOnly?: true
  permissions: PackagePermissions
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`role`,value:{name:`string`,required:!0}},{key:`readOnly`,value:{name:`literal`,value:`true`,required:!1}},{key:`permissions`,value:{name:`ReadonlyArray`,elements:[{name:`union`,raw:`| typeof READ_PERMISSION
| typeof CREATE_AND_UPDATE_PACKAGE_PERMISSION
| typeof DELETE_PACKAGE_PERMISSION
| typeof MANAGE_DRAFT_VERSION_PERMISSION
| typeof MANAGE_RELEASE_VERSION_PERMISSION
| typeof MANAGE_DEPRECATED_VERSION_PERMISSION
| typeof MANAGE_ARCHIVED_VERSION_PERMISSION
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`MANAGE_ARCHIVED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!0}}]}}],raw:`Readonly<{
  key: Key
  role: string
  readOnly?: true
  permissions: PackagePermissions
}>`}],raw:`ReadonlyArray<Role>`},description:``},onConfirm:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(users: User[], roles: Role[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`intersection`,raw:`Omit<UserDto, 'id' | 'gitIntegrationStatus'> & {
  key: Key
  name: string
  gitlabIntegration: boolean
}`,elements:[{name:`Omit`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  id: Key
  name?: string
  email?: string
  avatarUrl?: Url
  gitIntegrationStatus: boolean
  systemRole: string
  accessTokenTTLSeconds: number | null
}`,signature:{properties:[{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!1}},{key:`email`,value:{name:`string`,required:!1}},{key:`avatarUrl`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`gitIntegrationStatus`,value:{name:`boolean`,required:!0}},{key:`systemRole`,value:{name:`string`,required:!0}},{key:`accessTokenTTLSeconds`,value:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}],required:!0}}]}}],raw:`Readonly<{
  id: Key
  name?: string
  email?: string
  avatarUrl?: Url
  gitIntegrationStatus: boolean
  systemRole: string
  accessTokenTTLSeconds: number | null
}>`},{name:`union`,raw:`'id' | 'gitIntegrationStatus'`,elements:[{name:`literal`,value:`'id'`},{name:`literal`,value:`'gitIntegrationStatus'`}]}],raw:`Omit<UserDto, 'id' | 'gitIntegrationStatus'>`},{name:`signature`,type:`object`,raw:`{
  key: Key
  name: string
  gitlabIntegration: boolean
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`gitlabIntegration`,value:{name:`boolean`,required:!0}}]}}]}],raw:`User[]`},name:`users`},{type:{name:`Array`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  role: string
  readOnly?: true
  permissions: PackagePermissions
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`role`,value:{name:`string`,required:!0}},{key:`readOnly`,value:{name:`literal`,value:`true`,required:!1}},{key:`permissions`,value:{name:`ReadonlyArray`,elements:[{name:`union`,raw:`| typeof READ_PERMISSION
| typeof CREATE_AND_UPDATE_PACKAGE_PERMISSION
| typeof DELETE_PACKAGE_PERMISSION
| typeof MANAGE_DRAFT_VERSION_PERMISSION
| typeof MANAGE_RELEASE_VERSION_PERMISSION
| typeof MANAGE_DEPRECATED_VERSION_PERMISSION
| typeof MANAGE_ARCHIVED_VERSION_PERMISSION
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`MANAGE_ARCHIVED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!0}}]}}],raw:`Readonly<{
  key: Key
  role: string
  readOnly?: true
  permissions: PackagePermissions
}>`}],raw:`Role[]`},name:`roles`}],return:{name:`void`}}},description:``},setUserSearch:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(search: string) => void`,signature:{arguments:[{type:{name:`string`},name:`search`}],return:{name:`void`}}},description:``},isUsersLoading:{required:!0,tsType:{name:`boolean`},description:``}}},K.__docgenInfo={description:``,methods:[],displayName:`AddUserPopup`,props:{open:{required:!0,tsType:{name:`boolean`},description:``},setOpen:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`value`}],return:{name:`void`}}},description:``},detail:{required:!1,tsType:{name:`Record`,elements:[{name:`string`},{name:`unknown`}],raw:`Record<string, unknown>`},description:``},users:{required:!0,tsType:{name:`union`,raw:`ReadonlyArray<User> | undefined`,elements:[{name:`ReadonlyArray`,elements:[{name:`intersection`,raw:`Omit<UserDto, 'id' | 'gitIntegrationStatus'> & {
  key: Key
  name: string
  gitlabIntegration: boolean
}`,elements:[{name:`Omit`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  id: Key
  name?: string
  email?: string
  avatarUrl?: Url
  gitIntegrationStatus: boolean
  systemRole: string
  accessTokenTTLSeconds: number | null
}`,signature:{properties:[{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!1}},{key:`email`,value:{name:`string`,required:!1}},{key:`avatarUrl`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`gitIntegrationStatus`,value:{name:`boolean`,required:!0}},{key:`systemRole`,value:{name:`string`,required:!0}},{key:`accessTokenTTLSeconds`,value:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}],required:!0}}]}}],raw:`Readonly<{
  id: Key
  name?: string
  email?: string
  avatarUrl?: Url
  gitIntegrationStatus: boolean
  systemRole: string
  accessTokenTTLSeconds: number | null
}>`},{name:`union`,raw:`'id' | 'gitIntegrationStatus'`,elements:[{name:`literal`,value:`'id'`},{name:`literal`,value:`'gitIntegrationStatus'`}]}],raw:`Omit<UserDto, 'id' | 'gitIntegrationStatus'>`},{name:`signature`,type:`object`,raw:`{
  key: Key
  name: string
  gitlabIntegration: boolean
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`gitlabIntegration`,value:{name:`boolean`,required:!0}}]}}]}],raw:`ReadonlyArray<User>`},{name:`undefined`}]},description:``},roles:{required:!0,tsType:{name:`ReadonlyArray`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  role: string
  readOnly?: true
  permissions: PackagePermissions
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`role`,value:{name:`string`,required:!0}},{key:`readOnly`,value:{name:`literal`,value:`true`,required:!1}},{key:`permissions`,value:{name:`ReadonlyArray`,elements:[{name:`union`,raw:`| typeof READ_PERMISSION
| typeof CREATE_AND_UPDATE_PACKAGE_PERMISSION
| typeof DELETE_PACKAGE_PERMISSION
| typeof MANAGE_DRAFT_VERSION_PERMISSION
| typeof MANAGE_RELEASE_VERSION_PERMISSION
| typeof MANAGE_DEPRECATED_VERSION_PERMISSION
| typeof MANAGE_ARCHIVED_VERSION_PERMISSION
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`MANAGE_ARCHIVED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!0}}]}}],raw:`Readonly<{
  key: Key
  role: string
  readOnly?: true
  permissions: PackagePermissions
}>`}],raw:`ReadonlyArray<Role>`},description:``},onConfirm:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(users: User[], roles: Role[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`intersection`,raw:`Omit<UserDto, 'id' | 'gitIntegrationStatus'> & {
  key: Key
  name: string
  gitlabIntegration: boolean
}`,elements:[{name:`Omit`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  id: Key
  name?: string
  email?: string
  avatarUrl?: Url
  gitIntegrationStatus: boolean
  systemRole: string
  accessTokenTTLSeconds: number | null
}`,signature:{properties:[{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!1}},{key:`email`,value:{name:`string`,required:!1}},{key:`avatarUrl`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`gitIntegrationStatus`,value:{name:`boolean`,required:!0}},{key:`systemRole`,value:{name:`string`,required:!0}},{key:`accessTokenTTLSeconds`,value:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}],required:!0}}]}}],raw:`Readonly<{
  id: Key
  name?: string
  email?: string
  avatarUrl?: Url
  gitIntegrationStatus: boolean
  systemRole: string
  accessTokenTTLSeconds: number | null
}>`},{name:`union`,raw:`'id' | 'gitIntegrationStatus'`,elements:[{name:`literal`,value:`'id'`},{name:`literal`,value:`'gitIntegrationStatus'`}]}],raw:`Omit<UserDto, 'id' | 'gitIntegrationStatus'>`},{name:`signature`,type:`object`,raw:`{
  key: Key
  name: string
  gitlabIntegration: boolean
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`gitlabIntegration`,value:{name:`boolean`,required:!0}}]}}]}],raw:`User[]`},name:`users`},{type:{name:`Array`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  role: string
  readOnly?: true
  permissions: PackagePermissions
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`role`,value:{name:`string`,required:!0}},{key:`readOnly`,value:{name:`literal`,value:`true`,required:!1}},{key:`permissions`,value:{name:`ReadonlyArray`,elements:[{name:`union`,raw:`| typeof READ_PERMISSION
| typeof CREATE_AND_UPDATE_PACKAGE_PERMISSION
| typeof DELETE_PACKAGE_PERMISSION
| typeof MANAGE_DRAFT_VERSION_PERMISSION
| typeof MANAGE_RELEASE_VERSION_PERMISSION
| typeof MANAGE_DEPRECATED_VERSION_PERMISSION
| typeof MANAGE_ARCHIVED_VERSION_PERMISSION
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`MANAGE_ARCHIVED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!0}}]}}],raw:`Readonly<{
  key: Key
  role: string
  readOnly?: true
  permissions: PackagePermissions
}>`}],raw:`Role[]`},name:`roles`}],return:{name:`void`}}},description:``},setUserSearch:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(search: string) => void`,signature:{arguments:[{type:{name:`string`},name:`search`}],return:{name:`void`}}},description:``},isUsersLoading:{required:!0,tsType:{name:`boolean`},description:``}}}})))()}var Y,X,Z,Q;function $(){return($=e((()=>{y(),J(),b(),N(),z(),Y=r(),X={title:`Add User Dialog`,component:K,decorators:[e=>(0,Y.jsx)(v,{theme:x,children:(0,Y.jsx)(e,{})})]},Z={name:`Default`,args:{open:!0,users:M,roles:R}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    open: true,
    users: USERS,
    roles: ROLES_LIST
  }
}`,...Z.parameters?.docs?.source}}},Q=[`AddUserDialogStory`]})))()}$();export{Z as AddUserDialogStory,Q as __namedExportsOrder,X as default};