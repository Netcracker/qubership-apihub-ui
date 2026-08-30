import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-5l_iQkTl.js";import{o as r,s as i}from"./createTheme-CRX-jDaJ.js";import{t as a}from"./jsx-runtime-Dw8SQ1Xa.js";import{n as o,t as s}from"./Autocomplete-Dh2LNmkk.js";import{n as c,t as l}from"./TextField-Ba7r1sPh.js";import{n as u,t as d}from"./UserAvatar-BLwDkx_m.js";import{n as f,t as p}from"./Box-BoHOER5V.js";import{n as m,t as h}from"./Button-I3tvzdd9.js";import{n as g,t as _}from"./CircularProgress-Kmf1YPBr.js";import{n as v,t as y}from"./DialogContent-DM_9YyvD.js";import{i as b,n as x,r as S,t as C}from"./DialogTitle-CGjAX6IT.js";import{n as w,t as ee}from"./ListItem-jX0QHtFJ.js";import{n as te,r as ne}from"./iframe-CprsZPPR.js";import{n as re,t as ie}from"./LoadingButton-DhAN4WZx.js";import{n as ae,t as T}from"./DialogForm-Bj08xMWK.js";import{n as E,t as D}from"./PopupDelegate-C1TLfYOs.js";import{n as O,t as k}from"./useDebounce-DDvN8HT9.js";import{t as A}from"./SearchOutlined-CLk5nyVG.js";import{n as j,r as M,t as N}from"./index.esm-C73x_CXp.js";import{t as P}from"./ErrorOutlined-DwizlD24.js";import{a as F}from"./constants-1jyUsruT.js";import{n as I,r as L}from"./system-administrators-samples-WecPEskY.js";var R,z,B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{R=t(A(),1),re(),o(),f(),m(),g(),b(),v(),x(),w(),c(),z=t(n(),1),j(),k(),B=t(P(),1),E(),ae(),u(),F(),V=a(),H=n(),U=`show-add-system-administrator-dialog`,W=(0,z.memo)(({users:e,isUsersDataLoading:t,onConfirm:n,setUserSearch:r})=>(0,V.jsx)(D,{type:U,render:i=>(0,V.jsx)(G,{...i,users:e,onConfirm:n,isUsersDataLoading:t,setUserSearch:r})})),G=(0,z.memo)(({open:e,setOpen:t,users:n,isUsersDataLoading:r,setUserSearch:i,onConfirm:a})=>{let{handleSubmit:o,control:c,reset:u,formState:{errors:f}}=M(),[m,g]=(0,z.useState)(``);(0,z.useEffect)(()=>{e||u()},[e,u]),O(()=>i(m),500,[m]);let v=(0,z.useCallback)(e=>{let{user:n}=e;a(n.key),t(!1)},[a,t]);return(0,V.jsxs)(T,{open:e,onClose:()=>t(!1),onSubmit:o(v),children:[(0,V.jsx)(C,{children:`Add User`}),(0,V.jsx)(y,{children:(0,V.jsx)(N,{name:`user`,rules:{required:`The field must be filled`},control:c,render:({field:{value:e,onChange:t}})=>(0,V.jsx)(s,{sx:q,value:e,loading:r,loadingText:(0,V.jsx)(_,{size:16}),options:n??[],popupIcon:(0,V.jsxs)(p,{display:`flex`,gap:1,alignItems:`center`,children:[(0,V.jsx)(R.default,{sx:K}),f.user&&(0,V.jsx)(B.default,{color:`error`})]}),forcePopupIcon:!0,getOptionLabel:e=>e.name,onChange:(e,n)=>t(n),renderOption:(e,{name:t,avatarUrl:n})=>(0,H.createElement)(ee,{...e,key:t},(0,V.jsx)(p,{sx:{pr:`6px`},children:(0,V.jsx)(d,{name:t,src:n,size:`small`})}),t),renderInput:e=>(0,V.jsx)(l,{...e,sx:{mt:`4px`,mb:`12px`},label:`User`,onChange:e=>g(e?.target?.value??``),error:!!f.user,helperText:f.user?.message})})})}),(0,V.jsxs)(S,{children:[(0,V.jsx)(ie,{variant:`contained`,type:`submit`,loading:!1,children:`Add`}),(0,V.jsx)(h,{variant:`outlined`,onClick:()=>t(!1),children:`Cancel`})]})]})}),K={fontSize:`20px`,color:`#626D82`},q={"& .MuiAutocomplete-popupIndicator":{transform:`none`}},W.__docgenInfo={description:``,methods:[],displayName:`AddSystemAdministratorDialog`,props:{users:{required:!0,tsType:{name:`union`,raw:`User[] | undefined`,elements:[{name:`Array`,elements:[{name:`intersection`,raw:`Omit<UserDto, 'id' | 'gitIntegrationStatus'> & {
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
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`gitlabIntegration`,value:{name:`boolean`,required:!0}}]}}]}],raw:`User[]`},{name:`undefined`}]},description:``},isUsersDataLoading:{required:!0,tsType:{name:`boolean`},description:``},onConfirm:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(userId: Key) => void`,signature:{arguments:[{type:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`},name:`userId`}],return:{name:`void`}}},description:``},setUserSearch:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(search: string) => void`,signature:{arguments:[{type:{name:`string`},name:`search`}],return:{name:`void`}}},description:``}}}})))()}var Y,X,Z,Q;function $(){return($=e((()=>{i(),J(),te(),L(),Y=a(),X={title:`System Administrators Dialog`,component:G,decorators:[e=>(0,Y.jsx)(r,{theme:ne,children:(0,Y.jsx)(e,{})})]},Z={name:`Default`,args:{open:!0,users:I}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    open: true,
    users: USERS
  }
}`,...Z.parameters?.docs?.source}}},Q=[`DefaultStory`]})))()}$();export{Z as DefaultStory,Q as __namedExportsOrder,X as default};