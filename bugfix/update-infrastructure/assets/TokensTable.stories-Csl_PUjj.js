import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./react-5l_iQkTl.js";import{o as n,s as r}from"./createTheme-CRX-jDaJ.js";import{t as i}from"./jsx-runtime-Dw8SQ1Xa.js";import{n as a,t as o}from"./Typography-DQo_Zf9Y.js";import{n as s,t as c}from"./Box-BoHOER5V.js";import{c as l,i as u,n as d,r as f,s as ee,t as p}from"./TableRow-j8TLZku9.js";import{a as te,i as m,n as h,o as g,r as ne,t as _}from"./TableHead-Bi9DGyD1.js";import{n as v,r as y}from"./iframe-CprsZPPR.js";import{n as re,t as ie}from"./ButtonWithHint-jEWOrHPn.js";import{a as b}from"./constants-1jyUsruT.js";import{r as x,t as S}from"./components--jYjCQAt.js";import{n as C}from"./arrays-Bfo2Y4Sy.js";import{a as ae,i as oe,t as se}from"./Placeholder-WvSSuSta.js";import{n as ce,t as le}from"./DeleteIcon-u9G1qGwX.js";import{a as w,c as ue,i as de,l as fe,n as pe,o as me,r as he,s as ge,t as _e}from"./useResizeObserver-BWynCSd5.js";import{n as ve,t as T}from"./TextWithOverflowTooltip-Col3Yv2Q.js";import{r as E,t as D}from"./tokens-BWzY4ctL.js";import{n as O,t as k}from"./UserView-DvH2u84X.js";import{n as A,t as j}from"./FormattedDate-BiflhdID.js";import{n as M,t as N}from"./TableCellSkeleton-C_ictYOo.js";var P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{P=t(),l(),g(),u(),m(),h(),d(),a(),me(),ve(),ae(),M(),he(),D(),O(),re(),ce(),x(),b(),_e(),A(),F=i(),I=(0,P.memo)(({data:e,isLoading:t,deleteApiKey:n,disableDelete:r=!1})=>{let[i,a]=(0,P.useState)(800),[s,c]=(0,P.useState)(),[,l]=(0,P.useState)(),u=(0,P.useRef)(null);pe(u,a);let d=de({containerWidth:i,columnModels:G,columnSizingInfo:s,defaultMinColumnSize:45}),m=(0,P.useMemo)(()=>[{id:z,header:`Name`,cell:({row:{original:{name:e}}})=>(0,F.jsx)(T,{tooltipText:e,children:(0,F.jsx)(o,{variant:`inherit`,children:e})})},{id:B,header:`Roles`,cell:({row:{original:{roles:e}}})=>(0,F.jsx)(T,{tooltipText:e.map(e=>E[e]).join(`, `),children:(0,F.jsx)(o,{variant:`inherit`,children:e.map(e=>E[e]).join(`, `)})})},{id:V,header:`Created At`,cell:({row:{original:{createdAt:e}}})=>(0,F.jsx)(j,{value:e})},{id:H,header:`Created By`,cell:({row:{original:{createdBy:e}}})=>(0,F.jsx)(k,{name:e.name,avatarUrl:e.avatarUrl})},{id:U,header:`Created For`,cell:({row:{original:{createdFor:e}}})=>(0,F.jsx)(k,{name:e.name,avatarUrl:e.avatarUrl})},{id:W,header:``,cell:({row:{original:{key:e,packageKey:t}}})=>(0,F.jsx)(ie,{"area-label":`delete`,disabled:r,disableHint:!1,hint:r?`You do not have permission to generate token`:`Delete`,size:`small`,sx:{visibility:`hidden`,height:`20px`},className:`hoverable`,startIcon:(0,F.jsx)(le,{color:`#626D82`}),onClick:()=>n({key:e,packageKey:t}),"data-testid":`DeleteButton`})}],[n,r]),{getHeaderGroups:h,getRowModel:g,setColumnSizing:v}=ge({data:e,columns:m,columnResizeMode:`onChange`,getCoreRowModel:ue(),getExpandedRowModel:fe(),onColumnSizingChange:l,onColumnSizingInfoChange:c});return(0,P.useEffect)(()=>v(d),[v,d]),(0,F.jsxs)(ne,{sx:{mt:1},ref:u,children:[(0,F.jsxs)(ee,{children:[(0,F.jsx)(_,{children:h().map(e=>(0,F.jsx)(p,{children:e.headers.map(e=>(0,F.jsx)(f,{align:`left`,width:d?d[e.id]:e.getSize(),children:w(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,F.jsxs)(te,{children:[g().rows.map(e=>(0,F.jsx)(p,{children:e.getVisibleCells().map(e=>(0,F.jsx)(f,{"data-testid":`Cell-${e.column.id}`,children:w(e.column.columnDef.cell,e.getContext())},e.column.id))})),t&&(0,F.jsx)(L,{})]})]}),C(e)&&!t?(0,F.jsx)(oe,{sx:{width:`inherit`},invisible:t,area:se,message:`No Tokens`}):null]})}),L=(0,P.memo)(()=>S((0,F.jsx)(R,{}),5)),R=(0,P.memo)(()=>(0,F.jsxs)(p,{children:[(0,F.jsx)(N,{}),(0,F.jsx)(N,{}),(0,F.jsx)(N,{}),(0,F.jsx)(N,{}),(0,F.jsx)(N,{}),(0,F.jsx)(N,{})]})),z=`name`,B=`roles`,V=`created-at`,H=`created-by`,U=`created-for`,W=`delete`,G=[{name:z,width:300},{name:B,width:300},{name:V,width:120},{name:H,width:312},{name:U,width:312},{name:W,width:45}],I.__docgenInfo={description:``,methods:[],displayName:`TokensTable`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  apiKey?: Key
  key: Key
  packageKey: Key
  name: string
  createdAt: string
  createdBy: User
  createdFor: User
  roles: string[]
}`,signature:{properties:[{key:`apiKey`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`packageKey`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`createdAt`,value:{name:`string`,required:!0}},{key:`createdBy`,value:{name:`intersection`,raw:`Omit<UserDto, 'id' | 'gitIntegrationStatus'> & {
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
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`gitlabIntegration`,value:{name:`boolean`,required:!0}}]}}],required:!0}},{key:`createdFor`,value:{name:`intersection`,raw:`Omit<UserDto, 'id' | 'gitIntegrationStatus'> & {
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
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`gitlabIntegration`,value:{name:`boolean`,required:!0}}]}}],required:!0}},{key:`roles`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!0}}]}}],raw:`SystemToken[]`},description:``},deleteApiKey:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(data: DeleteApiKeyData) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  key: Key
  packageKey: Key
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`packageKey`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}}]}},name:`data`}],return:{name:`void`}}},description:``},isLoading:{required:!0,tsType:{name:`boolean`},description:``},disableDelete:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}})))()}var q;function J(){return(J=e((()=>{q=[{key:`1`,packageKey:`1`,name:`cloud`,createdAt:`11.12.12`,createdBy:{key:`1`,name:`Sergey`,avatarUrl:``},createdFor:{key:`1`,name:`Sergey`,avatarUrl:``},roles:[`Admin`]},{key:`2`,packageKey:`2`,name:`integration`,createdAt:`11.12.12`,createdBy:{key:`3`,name:`User 2`,avatarUrl:``},createdFor:{key:`1`,name:`User 3`,avatarUrl:``},roles:[`Admin`]},{key:`3`,packageKey:`3`,name:`cloud`,createdAt:`11.12.12`,createdBy:{key:`3`,name:`Sergey`,avatarUrl:``},createdFor:{key:`1`,name:`Sergey`,avatarUrl:``},roles:[`Admin`]},{key:`4`,packageKey:`4`,name:`test`,createdAt:`11.12.12`,createdBy:{key:`4`,name:`Sergey`,avatarUrl:``},createdFor:{key:`1`,name:`User 44`,avatarUrl:``},roles:[`Admin`]}]})))()}var Y,X,Z,Q;function $(){return($=e((()=>{s(),r(),v(),K(),J(),Y=i(),X={title:`Tokens Table`,component:I,decorators:[e=>(0,Y.jsx)(n,{theme:y,children:(0,Y.jsx)(c,{sx:{width:`1200px`},children:(0,Y.jsx)(e,{})})})]},Z={name:`Default`,args:{data:q,isLoading:!1,disableDelete:!1,deleteApiKey:()=>console.log(`deleteApiKey`)}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    data: TOKENS_LIST,
    isLoading: false,
    disableDelete: false,
    deleteApiKey: () => console.log('deleteApiKey')
  }
}`,...Z.parameters?.docs?.source}}},Q=[`DefaultStory`]})))()}$();export{Z as DefaultStory,Q as __namedExportsOrder,X as default};