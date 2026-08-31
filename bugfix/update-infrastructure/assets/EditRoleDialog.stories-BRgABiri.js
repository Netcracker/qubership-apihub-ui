import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-5l_iQkTl.js";import{t as r}from"./jsx-runtime-Dw8SQ1Xa.js";import{n as i,t as a}from"./IconButton-nZott58-.js";import{a as o,n as s,o as c,t as l}from"./TextField-Ba7r1sPh.js";import{n as u,t as d}from"./Button-I3tvzdd9.js";import{n as f,t as p}from"./FormControlLabel-DveUC2YR.js";import{n as m,t as h}from"./Checkbox-CJyIVh8O.js";import{n as g,t as _}from"./DialogContent-DM_9YyvD.js";import{i as v,n as y,r as b,t as x}from"./DialogTitle-CGjAX6IT.js";import{o as S,s as C}from"./package-permissions-BJVT27eT.js";import{n as w,t as T}from"./DialogForm-Bj08xMWK.js";import{n as E,t as D}from"./PopupDelegate-C1TLfYOs.js";import{n as O,r as k,t as A}from"./index.esm-C73x_CXp.js";import{t as j}from"./ErrorOutlined-DwizlD24.js";import{t as M}from"./CloseOutlined-B1jIMn8T.js";import{n as N,r as P,t as F}from"./roles-samples-CDj6ky2A.js";import{i as I,n as L,r as R,t as z}from"./CheckboxDisabledCheckedIcon-BXLdfpKw.js";var B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{n(),B=n(),u(),m(),v(),g(),y(),f(),i(),c(),s(),V=t(M(),1),E(),O(),w(),I(),L(),H=t(j(),1),C(),U=r(),W=(0,B.memo)(()=>(0,U.jsx)(D,{type:G,render:e=>(0,U.jsx)(K,{...e})})),G=`show-edit-role-dialog`,K=(0,B.memo)(({open:e,setOpen:t,detail:n})=>{let[r,i,s,c]=(0,B.useMemo)(()=>{let{permissions:e,role:t,onConfirm:r,isRoleUnique:i}=n;return[e,t,r,i]},[n]),{handleSubmit:u,control:f,formState:{errors:p,isDirty:m}}=k({defaultValues:{permissions:r.filter(({permission:e})=>i?.permissions.includes(e)||e===`read`),role:i?.role}}),h=(0,B.useCallback)(e=>{t(!1),s({key:i?.key||``,role:e.role,permissions:e.permissions.map(e=>e.permission)})},[s,i?.key,t]),g=(0,B.useCallback)(()=>{t(!1)},[t]),v=(0,B.useCallback)(({field:{value:e,onChange:t}})=>{let n=(n,r)=>{if(n)return t([...e,r]);t(e.filter(e=>e.permission!==r.permission))};return(0,U.jsx)(U.Fragment,{children:r.map(t=>(0,U.jsx)(q,{permission:t,onToggleCheckbox:n,checked:e.some(e=>e.permission===t.permission)},t.permission))})},[r]),y=i?`Update`:`Create`,S=i?`Edit Role`:`Create Role`;return(0,U.jsxs)(T,{open:e,onClose:g,onSubmit:u(h),width:`440px`,children:[(0,U.jsxs)(x,{children:[S,(0,U.jsx)(a,{sx:{position:`absolute`,right:8,top:8,color:`#626D82`},onClick:g,children:(0,U.jsx)(V.default,{fontSize:`small`})})]}),(0,U.jsxs)(_,{sx:{display:`flex`,flexDirection:`column`,width:`auto`,minWidth:`unset`},children:[(0,U.jsx)(A,{name:`role`,rules:{required:`The field must be filled`,validate:i?{}:{alreadyExists:e=>c?.(e)||`Role already exists`}},control:f,render:({field:e})=>(0,U.jsx)(l,{...e,sx:{mt:`4px`,mb:`12px`},required:!0,inputProps:{required:!1},value:e.value,disabled:!!i,label:`Role Name`,error:!!p.role,helperText:p.role?.message,InputProps:p.role?{endAdornment:(0,U.jsx)(H.default,{color:`error`,"data-testid":`ErrorIcon`})}:{},"data-testid":`RoleNameTextField`})}),(0,U.jsx)(o,{required:!0,sx:{fontWeight:500,color:`#000000`},children:`Select permissions`}),(0,U.jsx)(A,{name:`permissions`,control:f,render:v})]}),(0,U.jsxs)(b,{children:[(0,U.jsx)(d,{variant:`contained`,type:`submit`,disabled:i&&!m,"data-testid":`${y}Button`,children:y}),(0,U.jsx)(d,{variant:`outlined`,onClick:g,"data-testid":`CancelButton`,children:`Cancel`})]})]})}),q=(0,B.memo)(({permission:e,checked:t,onToggleCheckbox:n})=>{let{permission:r,name:i}=e,a=r===S;function o(t,r){n(r,e)}return(0,U.jsx)(p,{label:i,sx:{mt:`6px`},control:(0,U.jsx)(h,{value:e,disabled:a,checked:t,onChange:o,checkedIcon:a?(0,U.jsx)(z,{}):(0,U.jsx)(R,{}),"data-testid":`${e.permission}Checkbox`})},r)}),W.__docgenInfo={description:``,methods:[],displayName:`EditRoleDialog`},K.__docgenInfo={description:``,methods:[],displayName:`EditRolePopup`,props:{open:{required:!0,tsType:{name:`boolean`},description:``},setOpen:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`value`}],return:{name:`void`}}},description:``},detail:{required:!1,tsType:{name:`Record`,elements:[{name:`string`},{name:`unknown`}],raw:`Record<string, unknown>`},description:``}}},q.__docgenInfo={description:``,methods:[],displayName:`PermissionControl`,props:{permission:{required:!0,tsType:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`},description:``},checked:{required:!0,tsType:{name:`boolean`},description:``},onToggleCheckbox:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean, permission: Permission) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`},{type:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`},name:`permission`}],return:{name:`void`}}},description:``}}}})))()}var Y,X,Z,Q;function $(){return($=e((()=>{P(),J(),Y={title:`Edit Role Dialog`,component:K},X={name:`Create`,args:{open:!0,detail:{permissions:F,isRoleUnique:e=>!N?.some(({role:t})=>t.toLowerCase()===e.toLowerCase())}}},Z={name:`Edit`,args:{open:!0,detail:{permissions:F,role:N[3]}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Create',
  args: {
    open: true,
    detail: {
      permissions: PERMISSIONS_LIST,
      isRoleUnique: (roleName: string) => !ROLES_LIST?.some(({
        role
      }) => role.toLowerCase() === roleName.toLowerCase())
    }
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Edit',
  args: {
    open: true,
    detail: {
      permissions: PERMISSIONS_LIST,
      role: ROLES_LIST[3]
    }
  }
}`,...Z.parameters?.docs?.source}}},Q=[`CreateStory`,`EditStory`]})))()}$();export{X as CreateStory,Z as EditStory,Q as __namedExportsOrder,Y as default};