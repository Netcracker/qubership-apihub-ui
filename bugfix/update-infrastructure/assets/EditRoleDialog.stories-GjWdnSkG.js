import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./react---BZM-86.js";import{t as n}from"./jsx-runtime--WVWf14b.js";import{a as r,n as i,o as a,t as o}from"./TextField-DVvzje2I.js";import{n as s,t as c}from"./IconButton-DBH6Y5nc.js";import{n as l,t as u}from"./Button-DrgAR6qf.js";import{n as d,t as f}from"./FormControlLabel-CMFy0RZR.js";import{n as p,t as m}from"./Checkbox-DVDiKhWr.js";import{n as h,t as g}from"./DialogContent-B-a-mUNQ.js";import{i as _,n as v,r as y,t as b}from"./DialogTitle-BLBZWaKA.js";import{o as x,s as S}from"./package-permissions-BJVT27eT.js";import{n as C,t as w}from"./CloseOutlined-CJhq0-TS.js";import{n as T,t as E}from"./ErrorOutlined-rcPJF3-w.js";import{n as D,t as O}from"./DialogForm-DbSCbMTB.js";import{n as k,t as A}from"./PopupDelegate-BriLplMm.js";import{n as j,r as M,t as N}from"./index.esm-hA6-Vtk1.js";import{n as P,r as F,t as I}from"./roles-samples-CDj6ky2A.js";import{i as L,n as R,r as z,t as B}from"./CheckboxDisabledCheckedIcon-ZsIhe4TG.js";var V,H,U,W,G,K;function q(){return(q=e((()=>{t(),V=t(),l(),p(),_(),h(),v(),d(),s(),a(),i(),C(),k(),j(),D(),L(),R(),T(),S(),H=n(),U=(0,V.memo)(()=>(0,H.jsx)(A,{type:W,render:e=>(0,H.jsx)(G,{...e})})),W=`show-edit-role-dialog`,G=(0,V.memo)(({open:e,setOpen:t,detail:n})=>{let[i,a,s,l]=(0,V.useMemo)(()=>{let{permissions:e,role:t,onConfirm:r,isRoleUnique:i}=n;return[e,t,r,i]},[n]),{handleSubmit:d,control:f,formState:{errors:p,isDirty:m}}=M({defaultValues:{permissions:i.filter(({permission:e})=>a?.permissions.includes(e)||e===`read`),role:a?.role}}),h=(0,V.useCallback)(e=>{t(!1),s({key:a?.key||``,role:e.role,permissions:e.permissions.map(e=>e.permission)})},[s,a?.key,t]),_=(0,V.useCallback)(()=>{t(!1)},[t]),v=(0,V.useCallback)(({field:{value:e,onChange:t}})=>{let n=(n,r)=>{if(n)return t([...e,r]);t(e.filter(e=>e.permission!==r.permission))};return(0,H.jsx)(H.Fragment,{children:i.map(t=>(0,H.jsx)(K,{permission:t,onToggleCheckbox:n,checked:e.some(e=>e.permission===t.permission)},t.permission))})},[i]),x=a?`Update`:`Create`,S=a?`Edit Role`:`Create Role`;return(0,H.jsxs)(O,{open:e,onClose:_,onSubmit:d(h),width:`440px`,children:[(0,H.jsxs)(b,{children:[S,(0,H.jsx)(c,{sx:{position:`absolute`,right:8,top:8,color:`#626D82`},onClick:_,children:(0,H.jsx)(w,{fontSize:`small`})})]}),(0,H.jsxs)(g,{sx:{display:`flex`,flexDirection:`column`,width:`auto`,minWidth:`unset`},children:[(0,H.jsx)(N,{name:`role`,rules:{required:`The field must be filled`,validate:a?{}:{alreadyExists:e=>l?.(e)||`Role already exists`}},control:f,render:({field:e})=>(0,H.jsx)(o,{...e,sx:{mt:`4px`,mb:`12px`},required:!0,inputProps:{required:!1},value:e.value,disabled:!!a,label:`Role Name`,error:!!p.role,helperText:p.role?.message,InputProps:p.role?{endAdornment:(0,H.jsx)(E,{color:`error`,"data-testid":`ErrorIcon`})}:{},"data-testid":`RoleNameTextField`})}),(0,H.jsx)(r,{required:!0,sx:{fontWeight:500,color:`#000000`},children:`Select permissions`}),(0,H.jsx)(N,{name:`permissions`,control:f,render:v})]}),(0,H.jsxs)(y,{children:[(0,H.jsx)(u,{variant:`contained`,type:`submit`,disabled:a&&!m,"data-testid":`${x}Button`,children:x}),(0,H.jsx)(u,{variant:`outlined`,onClick:_,"data-testid":`CancelButton`,children:`Cancel`})]})]})}),K=(0,V.memo)(({permission:e,checked:t,onToggleCheckbox:n})=>{let{permission:r,name:i}=e,a=r===x;function o(t,r){n(r,e)}return(0,H.jsx)(f,{label:i,sx:{mt:`6px`},control:(0,H.jsx)(m,{value:e,disabled:a,checked:t,onChange:o,checkedIcon:a?(0,H.jsx)(B,{}):(0,H.jsx)(z,{}),"data-testid":`${e.permission}Checkbox`})},r)}),U.__docgenInfo={description:``,methods:[],displayName:`EditRoleDialog`},G.__docgenInfo={description:``,methods:[],displayName:`EditRolePopup`,props:{open:{required:!0,tsType:{name:`boolean`},description:``},setOpen:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`value`}],return:{name:`void`}}},description:``},detail:{required:!1,tsType:{name:`Record`,elements:[{name:`string`},{name:`unknown`}],raw:`Record<string, unknown>`},description:``}}},K.__docgenInfo={description:``,methods:[],displayName:`PermissionControl`,props:{permission:{required:!0,tsType:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`},name:`permission`}],return:{name:`void`}}},description:``}}}})))()}var J,Y,X,Z;function Q(){return(Q=e((()=>{F(),q(),J={title:`Edit Role Dialog`,component:G},Y={name:`Create`,args:{open:!0,detail:{permissions:I,isRoleUnique:e=>!P?.some(({role:t})=>t.toLowerCase()===e.toLowerCase())}}},X={name:`Edit`,args:{open:!0,detail:{permissions:I,role:P[3]}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Edit',
  args: {
    open: true,
    detail: {
      permissions: PERMISSIONS_LIST,
      role: ROLES_LIST[3]
    }
  }
}`,...X.parameters?.docs?.source}}},Z=[`CreateStory`,`EditStory`]})))()}Q();export{Y as CreateStory,X as EditStory,Z as __namedExportsOrder,J as default};