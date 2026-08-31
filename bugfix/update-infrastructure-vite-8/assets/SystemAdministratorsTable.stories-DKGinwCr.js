import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./react-5l_iQkTl.js";import{o as n,s as r}from"./createTheme-CRX-jDaJ.js";import{t as i}from"./jsx-runtime-Dw8SQ1Xa.js";import{n as a,t as o}from"./Skeleton-DZavebVd.js";import{n as s,t as c}from"./Box-BoHOER5V.js";import{n as l,t as u}from"./Button-I3tvzdd9.js";import{c as d,i as f,n as p,r as m,s as h,t as g}from"./TableRow-j8TLZku9.js";import{a as _,i as v,n as y,o as b,r as x,t as S}from"./TableHead-Bi9DGyD1.js";import{n as C,r as w}from"./iframe-DMiWyO05.js";import{a as ee}from"./constants-1jyUsruT.js";import{r as te,t as ne}from"./system-administrators-samples-WecPEskY.js";import{r as re,t as ie}from"./components--jYjCQAt.js";import{n as ae}from"./arrays-Bfo2Y4Sy.js";import{a as oe,i as T,t as E}from"./Placeholder-WvSSuSta.js";import{n as D,t as O}from"./DeleteIcon-u9G1qGwX.js";import{a as k,c as A,i as j,l as M,n as N,o as P,r as F,s as I,t as L}from"./useResizeObserver-BWynCSd5.js";import{n as R,t as z}from"./UserView-DvH2u84X.js";var B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{B=t(),l(),a(),d(),b(),f(),v(),y(),p(),P(),F(),R(),D(),oe(),re(),ee(),L(),V=i(),H=(0,B.memo)(({data:e,deleteAdministrator:t,isLoading:n})=>{let[r,i]=(0,B.useState)(800),[a,o]=(0,B.useState)(),[,s]=(0,B.useState)(),c=(0,B.useRef)(null);N(c,i);let l=j({containerWidth:r,columnModels:q,columnSizingInfo:a,defaultMinColumnSize:50}),d=(0,B.useMemo)(()=>[{id:G,header:`System Administrators`,cell:({row:{original:{avatarUrl:e,name:t}}})=>(0,V.jsx)(z,{name:t,avatarUrl:e})},{id:K,header:``,cell:({row:{original:e}})=>(0,V.jsx)(u,{size:`small`,sx:{visibility:`hidden`,height:`20px`},className:`hoverable`,startIcon:(0,V.jsx)(O,{color:`#626D82`}),onClick:()=>t(e)})}],[t]),{getHeaderGroups:f,getRowModel:p,setColumnSizing:v}=I({data:e,columns:d,columnResizeMode:`onChange`,getCoreRowModel:A(),getExpandedRowModel:M(),onColumnSizingChange:s,onColumnSizingInfoChange:o});return(0,B.useEffect)(()=>v(l),[v,l]),(0,V.jsxs)(x,{sx:{mt:1},ref:c,children:[(0,V.jsxs)(h,{children:[(0,V.jsx)(S,{children:f().map(e=>(0,V.jsx)(g,{children:e.headers.map(e=>(0,V.jsx)(m,{align:`left`,width:l?l[e.id]:e.getSize(),children:k(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,V.jsxs)(_,{children:[p().rows.map(e=>(0,V.jsx)(g,{children:e.getVisibleCells().map(e=>(0,V.jsx)(m,{"data-testid":`Cell-${e.column.id}`,children:k(e.column.columnDef.cell,e.getContext())},e.column.id))})),n&&(0,V.jsx)(U,{})]})]}),ae(e)&&!n?(0,V.jsx)(T,{sx:{width:`inherit`},invisible:n,area:E,message:`No System Administrators`}):null]})}),U=(0,B.memo)(()=>ie((0,V.jsx)(W,{}),5)),W=(0,B.memo)(()=>(0,V.jsxs)(g,{children:[(0,V.jsx)(m,{children:(0,V.jsx)(o,{variant:`rectangular`,width:`80%`})}),(0,V.jsx)(m,{children:(0,V.jsx)(o,{variant:`rectangular`,width:`80%`})})]})),G=`system-administrator`,K=`delete`,q=[{name:G,width:1e3},{name:K,width:60}],H.__docgenInfo={description:``,methods:[],displayName:`SystemAdministratorsTable`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  name: string
  email?: string
  avatarUrl: Url
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`email`,value:{name:`string`,required:!1}},{key:`avatarUrl`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}}]}}],raw:`Readonly<{
  key: Key
  name: string
  email?: string
  avatarUrl: Url
}>`}],raw:`SystemAdmin[]`},description:``},deleteAdministrator:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(admin: SystemAdmin) => void`,signature:{arguments:[{type:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  name: string
  email?: string
  avatarUrl: Url
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`email`,value:{name:`string`,required:!1}},{key:`avatarUrl`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}}]}}],raw:`Readonly<{
  key: Key
  name: string
  email?: string
  avatarUrl: Url
}>`},name:`admin`}],return:{name:`void`}}},description:``},isLoading:{required:!0,tsType:{name:`boolean`},description:``}}}})))()}var Y,X,Z,Q;function $(){return($=e((()=>{s(),r(),C(),J(),te(),Y=i(),X={title:`System Administrators Table`,component:H,decorators:[e=>(0,Y.jsx)(n,{theme:w,children:(0,Y.jsx)(c,{sx:{width:`1200px`},children:(0,Y.jsx)(e,{})})})]},Z={name:`Default`,args:{data:ne,deleteAdministrator:e=>console.log(`Admin was deleted ${e.name}`),isLoading:!1}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    data: SYSTEM_ADMINISTRATORS,
    deleteAdministrator: admin => console.log(\`Admin was deleted \${admin.name}\`),
    isLoading: false
  }
}`,...Z.parameters?.docs?.source}}},Q=[`DefaultStory`]})))()}$();export{Z as DefaultStory,Q as __namedExportsOrder,X as default};