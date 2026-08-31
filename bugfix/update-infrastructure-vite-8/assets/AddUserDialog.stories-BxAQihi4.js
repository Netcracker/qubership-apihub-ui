import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-5l_iQkTl.js";import{o as r,s as i}from"./createTheme-CRX-jDaJ.js";import{t as a}from"./jsx-runtime-Dw8SQ1Xa.js";import{n as o,t as s}from"./Chip-BjvI0F5C.js";import{n as c,t as l}from"./UserAvatar-BLwDkx_m.js";import{n as u,t as d}from"./Box-BoHOER5V.js";import{n as f,t as p}from"./Button-I3tvzdd9.js";import{n as m,t as h}from"./DialogContent-DM_9YyvD.js";import{i as g,n as _,r as v,t as y}from"./DialogTitle-CGjAX6IT.js";import{n as b,t as x}from"./ListItem-jX0QHtFJ.js";import{n as ee,r as S}from"./iframe-DMiWyO05.js";import{n as C,t as w}from"./DialogForm-Bj08xMWK.js";import{n as T,t as E}from"./PopupDelegate-C1TLfYOs.js";import{n as D,t as O}from"./useDebounce-DDvN8HT9.js";import{t as k}from"./SearchOutlined-CLk5nyVG.js";import{n as A,r as te,t as j}from"./index.esm-C73x_CXp.js";import{a as ne}from"./constants-1jyUsruT.js";import{n as re,r as ie}from"./system-administrators-samples-WecPEskY.js";import{n as ae,t as M}from"./CheckIcon-Wn_30gk_.js";import{t as N}from"./CloseOutlined-B1jIMn8T.js";import{n as P,t as F}from"./MultipleSelectorAutocomplete-KWTEGIZA.js";import{n as I,r as L}from"./roles-samples-CDj6ky2A.js";var R;function z(){return(z=e((()=>{R=`show-add-user-dialog`})))()}var B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{B=t(n(),1),T(),C(),u(),f(),o(),g(),m(),_(),b(),A(),O(),ae(),V=t(k(),1),c(),ne(),H=t(N(),1),P(),z(),U=a(),W=n(),G=(0,B.memo)(e=>{let{users:t,roles:n,onConfirm:r,setUserSearch:i,isUsersLoading:a}=e;return(0,U.jsx)(E,{type:R,render:e=>(0,U.jsx)(K,{...e,users:t,roles:n,onConfirm:r,setUserSearch:i,isUsersLoading:a})})}),K=(0,B.memo)(e=>{let{open:t,setOpen:n,users:r,roles:i,onConfirm:a,setUserSearch:o,isUsersLoading:c}=e,{handleSubmit:u,control:f}=te(),[m,g]=(0,B.useState)(``);D(()=>o(m),500,[m]);let _=(0,B.useCallback)(e=>{let{users:t,roles:r}=e;a(t,r),n(!1)},[a,n]),b=(0,B.useCallback)(()=>{n(!1)},[n]);return(0,U.jsxs)(w,{open:t,onClose:b,onSubmit:u(_),children:[(0,U.jsx)(y,{children:`Add User`}),(0,U.jsxs)(h,{children:[(0,U.jsx)(j,{name:`users`,control:f,render:({field:{value:e,onChange:t}})=>(0,U.jsx)(F,{id:`user-selector`,options:r??[],value:e,inputLabel:`User`,icon:(0,U.jsx)(V.default,{}),isLoading:c,onChange:t,getOptionLabel:e=>e.name??e,setInputSearch:g,renderOption:(t,{key:n,name:r,avatarUrl:i})=>{let a=e?.some(e=>e.key===n);return(0,W.createElement)(x,{...t,key:r,sx:{pointerEvents:a?`none`:``}},a?(0,U.jsx)(M,{}):null,(0,U.jsx)(l,{sx:{marginLeft:a?`6px`:`21px`,marginRight:`6px`},name:r,src:i,size:`small`}),r)},renderTags:(e,t)=>e.map((e,n)=>(0,U.jsx)(s,{variant:`outlined`,size:`small`,sx:q,avatar:(0,U.jsx)(M,{}),deleteIcon:(0,U.jsx)(H.default,{}),label:e?.name,...t({index:n}),"data-testid":`UserChip`})),"data-testid":`UsersAutocomplete`})}),(0,U.jsx)(j,{name:`roles`,control:f,render:({field:{value:e,onChange:t}})=>(0,U.jsx)(F,{id:`roles-selector`,options:i??[],value:e,inputLabel:`Role`,onChange:t,getOptionLabel:e=>e.role??e,renderOption:(t,{key:n,role:r})=>{let i=e?.some(e=>e.key===n);return(0,W.createElement)(x,{...t,key:r,sx:{pointerEvents:i?`none`:``},"data-testid":`${r}ListItem`},i?(0,U.jsx)(M,{}):null,(0,U.jsx)(d,{sx:{marginLeft:i?`6px`:`21px`},children:r}))},renderTags:(e,t)=>e.map((e,n)=>(0,U.jsx)(s,{variant:`outlined`,size:`small`,sx:q,avatar:(0,U.jsx)(M,{}),deleteIcon:(0,U.jsx)(H.default,{}),label:e?.role,...t({index:n})})),"data-testid":`RolesAutocomplete`})})]}),(0,U.jsxs)(v,{children:[(0,U.jsx)(p,{variant:`contained`,type:`submit`,"data-testid":`AddButton`,children:`Add`}),(0,U.jsx)(p,{variant:`outlined`,onClick:()=>n(!1),"data-testid":`CancelButton`,children:`Cancel`})]})]})}),q={border:`none`,width:`350px`,display:`flex`,justifyContent:`space-between`,".MuiChip-label":{mr:`auto`},"&:hover":{backgroundColor:`#2E3A5217`,"& .MuiChip-deleteIcon":{display:`block`}},"& .MuiChip-deleteIcon":{display:`none`}},G.__docgenInfo={description:``,methods:[],displayName:`AddUserDialog`,props:{users:{required:!0,tsType:{name:`union`,raw:`ReadonlyArray<User> | undefined`,elements:[{name:`ReadonlyArray`,elements:[{name:`intersection`,raw:`Omit<UserDto, 'id' | 'gitIntegrationStatus'> & {
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
}>`}],raw:`Role[]`},name:`roles`}],return:{name:`void`}}},description:``},setUserSearch:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(search: string) => void`,signature:{arguments:[{type:{name:`string`},name:`search`}],return:{name:`void`}}},description:``},isUsersLoading:{required:!0,tsType:{name:`boolean`},description:``}}}})))()}var Y,X,Z,Q;function $(){return($=e((()=>{i(),J(),ee(),ie(),L(),Y=a(),X={title:`Add User Dialog`,component:K,decorators:[e=>(0,Y.jsx)(r,{theme:S,children:(0,Y.jsx)(e,{})})]},Z={name:`Default`,args:{open:!0,users:re,roles:I}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    open: true,
    users: USERS,
    roles: ROLES_LIST
  }
}`,...Z.parameters?.docs?.source}}},Q=[`AddUserDialogStory`]})))()}$();export{Z as AddUserDialogStory,Q as __namedExportsOrder,X as default};