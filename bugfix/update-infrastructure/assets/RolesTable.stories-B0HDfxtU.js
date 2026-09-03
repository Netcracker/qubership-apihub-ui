import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./react---BZM-86.js";import{t as n}from"./jsx-runtime--WVWf14b.js";import{n as r,t as i}from"./Box-CzqjOcoU.js";import{n as a,t as o}from"./IconButton-DBH6Y5nc.js";import{n as s,t as c}from"./Typography-B5fOEpx5.js";import{n as l,t as u}from"./Tooltip-D7s3VaKc.js";import{c as d,i as f,n as p,r as m,s as h,t as g}from"./TableRow-aTq3JYMI.js";import{a as _,i as v,n as y,o as b,r as x,t as S}from"./TableHead-DJEohbWN.js";import{i as C}from"./operation-groups-TpwtB0Tk.js";import{n as w,t as T}from"./EditIcon-DzAjKEE1.js";import{n as E,r as D,t as O}from"./roles-samples-CDj6ky2A.js";import{n as k,t as A}from"./DeleteIcon-BI3SqqhZ.js";import{i as j,n as M,r as N,t as P}from"./MinusIcon-DnpdlZeM.js";var F,I,L,R;function z(){return(z=e((()=>{t(),F=t(),r(),a(),d(),b(),f(),v(),y(),p(),l(),s(),j(),M(),w(),C(),k(),I=n(),L=2,R=(0,F.memo)(({permissions:e,roles:t,onDelete:n,onEdit:r})=>{let[a,s]=(0,F.useState)(``),l=e=>s(`${e+L}`),d=()=>s(``);return(0,I.jsx)(x,{sx:{height:`unset`,"& .sticky":{position:`sticky`,left:0,backgroundColor:`#FFFFFF`,zIndex:3}},children:(0,I.jsxs)(h,{sx:{"& .MuiTableRow-root:hover":{backgroundColor:`#FFFFFF`},[`th:nth-of-type(${a}), td:nth-of-type(${a}), tbody tr:hover`]:{backgroundColor:`#F8F9FA`},[`td:nth-of-type(${a}) .hoverable2`]:{visibility:`visible`}},onMouseOut:d,children:[(0,I.jsx)(S,{children:(0,I.jsxs)(g,{children:[(0,I.jsx)(m,{sx:{width:`291px`,px:`12px`},className:`sticky`,children:(0,I.jsx)(c,{noWrap:!0,variant:`subtitle2`,sx:{pl:0},children:`Permission`})}),t.map(({key:e,role:t},n)=>(0,I.jsx)(m,{sx:{width:`121px`,textAlign:`center`,position:`relative`},onMouseOver:()=>l(n),children:(0,I.jsx)(c,{noWrap:!0,variant:`subtitle2`,sx:{pl:0},children:t})},e))]})}),(0,I.jsxs)(_,{children:[e.map(({permission:e,name:n})=>(0,I.jsxs)(g,{children:[(0,I.jsx)(m,{sx:{width:`291px`,px:`12px`},className:`sticky`,"data-testid":`Cell-${e}`,children:n},e),t.map((t,n)=>{let{key:r,permissions:a}=t;return(0,I.jsx)(m,{onMouseOver:()=>l(n),sx:{textAlign:`center`},"data-testid":`Cell-${t.role}`,children:(0,I.jsx)(i,{display:`flex`,alignItems:`center`,justifyContent:`center`,children:a.includes(e)?(0,I.jsx)(N,{color:`#00BB5B`}):(0,I.jsx)(P,{color:`#626D82`})})},r)})]},e)),r&&n&&(0,I.jsxs)(g,{children:[(0,I.jsx)(m,{sx:{width:`291px`,px:`12px`},className:`sticky`,"data-testid":`ActionsRow`}),t.map((e,t)=>{let{key:a,readOnly:s}=e;return(0,I.jsx)(m,{onMouseOver:()=>l(t),sx:{textAlign:`center`},"data-testid":`Cell-${e.role}`,children:(0,I.jsxs)(i,{display:`flex`,justifyContent:`center`,gap:`24px`,className:`hoverable2`,visibility:`hidden`,children:[(0,I.jsx)(u,{title:`${e.role} role cannot be edited`,disableHoverListener:!s,disableFocusListener:!s,placement:`right`,children:(0,I.jsx)(i,{children:(0,I.jsx)(o,{sx:{p:0},disabled:s,onClick:()=>r(e),"data-testid":`EditButton`,children:(0,I.jsx)(T,{color:s?`#B4BFCF`:`#626D82`})})})}),(0,I.jsx)(u,{title:`${e.role} role cannot be deleted`,disableHoverListener:!s,disableFocusListener:!s,placement:`right`,children:(0,I.jsx)(i,{children:(0,I.jsx)(o,{sx:{p:0},disabled:s,onClick:()=>n(e),"data-testid":`EditButton`,children:(0,I.jsx)(A,{color:s?`#B4BFCF`:`#626D82`})})})})]})},a)})]})]})]})})}),R.__docgenInfo={description:``,methods:[],displayName:`RolesTable`,props:{permissions:{required:!0,tsType:{name:`ReadonlyArray`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  permission: PackagePermission
  name: string
}`,signature:{properties:[{key:`permission`,value:{name:`union`,raw:`| typeof READ_PERMISSION
| typeof CREATE_AND_UPDATE_PACKAGE_PERMISSION
| typeof DELETE_PACKAGE_PERMISSION
| typeof MANAGE_DRAFT_VERSION_PERMISSION
| typeof MANAGE_RELEASE_VERSION_PERMISSION
| typeof MANAGE_DEPRECATED_VERSION_PERMISSION
| typeof MANAGE_ARCHIVED_VERSION_PERMISSION
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`MANAGE_ARCHIVED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}],required:!0}},{key:`name`,value:{name:`string`,required:!0}}]}}],raw:`Readonly<{
  permission: PackagePermission
  name: string
}>`}],raw:`ReadonlyArray<Permission>`},description:``},roles:{required:!0,tsType:{name:`ReadonlyArray`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`}],raw:`ReadonlyArray<Role>`},description:``},onDelete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(role: Role) => void`,signature:{arguments:[{type:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`},name:`role`}],return:{name:`void`}}},description:``},onEdit:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(role: Role) => void`,signature:{arguments:[{type:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`},name:`role`}],return:{name:`void`}}},description:``}}}})))()}var B,V,H;function U(){return(U=e((()=>{z(),D(),B={title:`Roles Table`,component:R},V={name:`Default`,args:{permissions:O,roles:E}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    permissions: PERMISSIONS_LIST,
    roles: ROLES_LIST
  }
}`,...V.parameters?.docs?.source}}},H=[`DefaultStory`]})))()}U();export{V as DefaultStory,H as __namedExportsOrder,B as default};