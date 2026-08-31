import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./react-5l_iQkTl.js";import{o as n,s as r}from"./createTheme-CRX-jDaJ.js";import{t as i}from"./jsx-runtime-Dw8SQ1Xa.js";import{n as a,t as o}from"./capitalize-DyCEgXje.js";import{n as s,t as c}from"./Typography-DQo_Zf9Y.js";import{n as l,t as u}from"./Autocomplete-Dh2LNmkk.js";import{n as d,t as f}from"./TextField-Ba7r1sPh.js";import{n as p,t as m}from"./UserAvatar-BLwDkx_m.js";import{n as h,t as g}from"./Box-BoHOER5V.js";import{n as _,t as v}from"./CircularProgress-Kmf1YPBr.js";import{n as y,t as b}from"./ListItem-jX0QHtFJ.js";import{n as x,r as S}from"./iframe-ChJjhjyc.js";import{n as C,t as w}from"./ButtonWithHint-jEWOrHPn.js";import{n as T,t as E}from"./DisplayToken-CzIRCR1J.js";import{n as D,t as O}from"./useDebounce-DDvN8HT9.js";import{n as k,r as A,t as j}from"./index.esm-C73x_CXp.js";import{a as M}from"./constants-1jyUsruT.js";import{n as N,t as P}from"./tokens-BWzY4ctL.js";var F;function I(){return(I=e((()=>{F={key:``,name:``,avatarUrl:``,gitlabIntegration:!1,systemRole:``,accessTokenTTLSeconds:60}})))()}var L,R,z,B;function V(){return(V=e((()=>{t(),L=t(),l(),h(),a(),_(),y(),d(),s(),k(),T(),P(),C(),p(),I(),O(),M(),R=i(),z=t(),B=(0,L.memo)(({roles:e,users:t,defaultUser:n,disabled:r=!1,isLoading:i,generateApiKey:a,generatedApiKey:s,setUserSearch:l,showSuccessNotification:d})=>{let{handleSubmit:p,setValue:h,control:_,reset:y}=A({defaultValues:{name:``,createdFor:n??F}}),[x,S]=(0,L.useState)(``);D(()=>l(x),500,[x]);let C=(0,L.useCallback)(e=>{let{name:t,roles:n,createdFor:r}=e,i=n?.map(e=>N[e]??e);a({name:t,roles:i,createdFor:r.key}),y()},[a,y]);return s?(0,R.jsx)(E,{generatedApiKey:s,showSuccessNotification:d}):(0,R.jsxs)(g,{component:`form`,marginBottom:1,onSubmit:p(C),children:[(0,R.jsx)(c,{variant:`body2`,children:`Enter the name of your application and select role for the token`}),(0,R.jsxs)(g,{display:`flex`,alignItems:`flex-start`,gap:2,children:[(0,R.jsx)(j,{name:`name`,rules:{required:`The field must be filled`},control:_,render:({field:e})=>(0,R.jsx)(f,{...e,required:!0,disabled:r,sx:{width:`260px`},value:e.value,label:`Name`,onChange:e.onChange,"data-testid":`NameTextField`})}),(0,R.jsx)(j,{name:`roles`,control:_,render:({field:{value:t}})=>(0,R.jsx)(u,{multiple:!0,disabled:r,sx:{width:`260px`},value:t??[],options:e,renderOption:(e,t)=>(0,z.createElement)(b,{...e,key:t,"data-testid":`ListItem-${t}`},o(t)),renderTags:e=>e.map((t,n)=>(0,R.jsxs)(c,{fontSize:`13px`,children:[o(t),` `,n===e.length-1?void 0:`, `]})),onChange:(e,t)=>h(`roles`,t),renderInput:e=>(0,R.jsx)(f,{...e,label:`Roles`,inputProps:{...e.inputProps,readOnly:!0}}),"data-testid":`RolesAutocomplete`})}),(0,R.jsx)(j,{name:`createdFor`,rules:{required:`The field must be filled`},control:_,render:({field:{value:e,onChange:n}})=>(0,R.jsx)(u,{isOptionEqualToValue:(e,t)=>e.key===t.key,value:e,disabled:r,sx:{width:`260px`},loading:i,loadingText:(0,R.jsx)(v,{size:16}),options:t??[],getOptionLabel:e=>e.name,onChange:(e,t)=>n(t),renderOption:(e,{name:t,avatarUrl:n})=>(0,z.createElement)(b,{...e,key:t},(0,R.jsx)(g,{sx:{pr:`6px`},children:(0,R.jsx)(m,{name:t,src:n,size:`small`})}),t),renderInput:e=>(0,R.jsx)(f,{...e,required:!0,label:`Created For`,onChange:e=>S(e?.target?.value??``)}),"data-testid":`CreatedForAutocomplete`})}),(0,R.jsx)(w,{variant:`contained`,size:`large`,sx:{mt:1.2},disabled:r,disableHint:!r,hint:`You do not have permission to generate token`,isLoading:i,title:`Generate`,type:`submit`,"data-testid":`GenerateButton`})]})]})}),B.__docgenInfo={description:``,methods:[],displayName:`GenerateTokenForm`,props:{roles:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},users:{required:!0,tsType:{name:`union`,raw:`User[] | undefined`,elements:[{name:`Array`,elements:[{name:`intersection`,raw:`Omit<UserDto, 'id' | 'gitIntegrationStatus'> & {
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
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`gitlabIntegration`,value:{name:`boolean`,required:!0}}]}}]}],raw:`User[]`},{name:`undefined`}]},description:``},defaultUser:{required:!0,tsType:{name:`union`,raw:`User | undefined`,elements:[{name:`intersection`,raw:`Omit<UserDto, 'id' | 'gitIntegrationStatus'> & {
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
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`gitlabIntegration`,value:{name:`boolean`,required:!0}}]}}]},{name:`undefined`}]},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},isLoading:{required:!0,tsType:{name:`boolean`},description:``},generatedApiKey:{required:!0,tsType:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`},description:``},generateApiKey:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(data: GenerateApiKeyValue) => void`,signature:{arguments:[{type:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  name: string
  roles?: string[]
  createdFor: string
}`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`roles`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!1}},{key:`createdFor`,value:{name:`string`,required:!0}}]}}],raw:`Readonly<{
  name: string
  roles?: string[]
  createdFor: string
}>`},name:`data`}],return:{name:`void`}}},description:``},setUserSearch:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(search: string) => void`,signature:{arguments:[{type:{name:`string`},name:`search`}],return:{name:`void`}}},description:``},showSuccessNotification:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(detail: NotificationDetail) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  title?: string
  message: string
  link?: LinkType
}`,signature:{properties:[{key:`title`,value:{name:`string`,required:!1}},{key:`message`,value:{name:`string`,required:!0}},{key:`link`,value:{name:`signature`,type:`object`,raw:`{
  name: string
  href: string
}`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`href`,value:{name:`string`,required:!0}}]},required:!1}}]}},name:`detail`}],return:{name:`void`}}},description:``}}}})))()}var H,U,W,G;function K(){return(K=e((()=>{r(),V(),x(),H=i(),U={title:`Generate Token Form`,component:B,decorators:[e=>(0,H.jsx)(n,{theme:S,children:(0,H.jsx)(e,{})})]},W={name:`Default`,args:{roles:[`Admin`,`Viewer`],disabled:!1,isLoading:!1,generatedApiKey:``,generateApiKey:()=>console.log(`generateApiKey`)}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    roles: ['Admin', 'Viewer'],
    disabled: false,
    isLoading: false,
    generatedApiKey: '',
    generateApiKey: () => console.log('generateApiKey')
  }
}`,...W.parameters?.docs?.source}}},G=[`DefaultStory`]})))()}K();export{W as DefaultStory,G as __namedExportsOrder,U as default};