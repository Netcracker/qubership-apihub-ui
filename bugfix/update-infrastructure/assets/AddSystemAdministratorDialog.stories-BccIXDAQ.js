import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-5l_iQkTl.js";import{t as r}from"./jsx-runtime-Dw8SQ1Xa.js";import{n as i,t as a}from"./Box-B_l5-crx.js";import{n as o,t as ee}from"./Autocomplete-qEKCSQYj.js";import{n as s,t as c}from"./TextField-BBwqJsbq.js";import{n as l,t as u}from"./UserAvatar-Djvhpl5v.js";import{n as d,t as te}from"./Button-C6vA4c9Q.js";import{n as f,t as p}from"./CircularProgress-DxbFzl39.js";import{n as m,t as h}from"./DialogContent-DtvI-_UL.js";import{i as g,n as _,r as v,t as y}from"./DialogTitle-1rZTVADW.js";import{n as b,t as x}from"./ListItem-fBA3Y_Y4.js";import{M as S,N as ne,n as re,r as ie}from"./iframe-EcAgFcia.js";import{n as ae,t as C}from"./ErrorOutlined-Bwz5IWA4.js";import{n as w,t as T}from"./SearchOutlined-CJyPrkNX.js";import{n as E,t as D}from"./LoadingButton-DkzOO3e1.js";import{n as O,t as k}from"./DialogForm-C70NlZIT.js";import{n as A,t as j}from"./PopupDelegate-C1TLfYOs.js";import{n as M,t as N}from"./useDebounce-DDvN8HT9.js";import{n as P,r as F,t as I}from"./index.esm-C73x_CXp.js";import{a as L}from"./constants-1jyUsruT.js";import{n as R,r as z}from"./system-administrators-samples-WecPEskY.js";var B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{w(),E(),o(),i(),d(),f(),g(),m(),_(),b(),s(),B=t(n(),1),P(),N(),ae(),A(),O(),l(),L(),V=r(),H=n(),U=`show-add-system-administrator-dialog`,W=(0,B.memo)(({users:e,isUsersDataLoading:t,onConfirm:n,setUserSearch:r})=>(0,V.jsx)(j,{type:U,render:i=>(0,V.jsx)(G,{...i,users:e,onConfirm:n,isUsersDataLoading:t,setUserSearch:r})})),G=(0,B.memo)(({open:e,setOpen:t,users:n,isUsersDataLoading:r,setUserSearch:i,onConfirm:o})=>{let{handleSubmit:s,control:l,reset:d,formState:{errors:f}}=F(),[m,g]=(0,B.useState)(``);(0,B.useEffect)(()=>{e||d()},[e,d]),M(()=>i(m),500,[m]);let _=(0,B.useCallback)(e=>{let{user:n}=e;o(n.key),t(!1)},[o,t]);return(0,V.jsxs)(k,{open:e,onClose:()=>t(!1),onSubmit:s(_),children:[(0,V.jsx)(y,{children:`Add User`}),(0,V.jsx)(h,{children:(0,V.jsx)(I,{name:`user`,rules:{required:`The field must be filled`},control:l,render:({field:{value:e,onChange:t}})=>(0,V.jsx)(ee,{sx:q,value:e,loading:r,loadingText:(0,V.jsx)(p,{size:16}),options:n??[],popupIcon:(0,V.jsxs)(a,{display:`flex`,gap:1,alignItems:`center`,children:[(0,V.jsx)(T,{sx:K}),f.user&&(0,V.jsx)(C,{color:`error`})]}),forcePopupIcon:!0,getOptionLabel:e=>e.name,onChange:(e,n)=>t(n),renderOption:(e,{name:t,avatarUrl:n})=>(0,H.createElement)(x,{...e,key:t},(0,V.jsx)(a,{sx:{pr:`6px`},children:(0,V.jsx)(u,{name:t,src:n,size:`small`})}),t),renderInput:e=>(0,V.jsx)(c,{...e,sx:{mt:`4px`,mb:`12px`},label:`User`,onChange:e=>g(e?.target?.value??``),error:!!f.user,helperText:f.user?.message})})})}),(0,V.jsxs)(v,{children:[(0,V.jsx)(D,{variant:`contained`,type:`submit`,loading:!1,children:`Add`}),(0,V.jsx)(te,{variant:`outlined`,onClick:()=>t(!1),children:`Cancel`})]})]})}),K={fontSize:`20px`,color:`#626D82`},q={"& .MuiAutocomplete-popupIndicator":{transform:`none`}},W.__docgenInfo={description:``,methods:[],displayName:`AddSystemAdministratorDialog`,props:{users:{required:!0,tsType:{name:`union`,raw:`User[] | undefined`,elements:[{name:`Array`,elements:[{name:`intersection`,raw:`Omit<UserDto, 'id' | 'gitIntegrationStatus'> & {
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
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`gitlabIntegration`,value:{name:`boolean`,required:!0}}]}}]}],raw:`User[]`},{name:`undefined`}]},description:``},isUsersDataLoading:{required:!0,tsType:{name:`boolean`},description:``},onConfirm:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(userId: Key) => void`,signature:{arguments:[{type:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`},name:`userId`}],return:{name:`void`}}},description:``},setUserSearch:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(search: string) => void`,signature:{arguments:[{type:{name:`string`},name:`search`}],return:{name:`void`}}},description:``}}},G.__docgenInfo={description:``,methods:[],displayName:`AddSystemAdministratorPopup`,props:{open:{required:!0,tsType:{name:`boolean`},description:``},setOpen:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`value`}],return:{name:`void`}}},description:``},detail:{required:!1,tsType:{name:`Record`,elements:[{name:`string`},{name:`unknown`}],raw:`Record<string, unknown>`},description:``},users:{required:!0,tsType:{name:`union`,raw:`User[] | undefined`,elements:[{name:`Array`,elements:[{name:`intersection`,raw:`Omit<UserDto, 'id' | 'gitIntegrationStatus'> & {
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
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`gitlabIntegration`,value:{name:`boolean`,required:!0}}]}}]}],raw:`User[]`},{name:`undefined`}]},description:``},isUsersDataLoading:{required:!0,tsType:{name:`boolean`},description:``},onConfirm:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(userId: Key) => void`,signature:{arguments:[{type:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`},name:`userId`}],return:{name:`void`}}},description:``},setUserSearch:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(search: string) => void`,signature:{arguments:[{type:{name:`string`},name:`search`}],return:{name:`void`}}},description:``}}}})))()}var Y,X,Z,Q;function $(){return($=e((()=>{ne(),J(),re(),z(),Y=r(),X={title:`System Administrators Dialog`,component:G,decorators:[e=>(0,Y.jsx)(S,{theme:ie,children:(0,Y.jsx)(e,{})})]},Z={name:`Default`,args:{open:!0,users:R}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    open: true,
    users: USERS
  }
}`,...Z.parameters?.docs?.source}}},Q=[`DefaultStory`]})))()}$();export{Z as DefaultStory,Q as __namedExportsOrder,X as default};