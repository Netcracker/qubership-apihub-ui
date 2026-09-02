import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./react-5l_iQkTl.js";import{t as n}from"./jsx-runtime-Dw8SQ1Xa.js";import{n as r,t as i}from"./Box-B_l5-crx.js";import{n as a,t as o}from"./Skeleton-DjIR2cvu.js";import{n as s,t as ee}from"./Button-C6vA4c9Q.js";import{c,i as l,n as u,r as d,s as f,t as p}from"./TableRow-CBu85zgb.js";import{a as m,i as h,n as g,o as _,r as v,t as y}from"./TableHead-CUftuKaT.js";import{M as b,N as x,n as S,r as C}from"./iframe-BS6Z3sPG.js";import{a as w}from"./constants-1jyUsruT.js";import{r as T,t as te}from"./system-administrators-samples-WecPEskY.js";import{r as ne,t as re}from"./components--jYjCQAt.js";import{n as ie}from"./arrays-Bfo2Y4Sy.js";import{a as ae,i as oe,t as E}from"./Placeholder-Ck-IYWTt.js";import{n as D,t as O}from"./DeleteIcon-u9G1qGwX.js";import{a as k,c as A,i as j,l as M,n as N,o as P,r as F,s as I,t as L}from"./useResizeObserver-PQJ4qlUt.js";import{n as R,t as z}from"./UserView-BWrV8sVQ.js";var B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{B=t(),s(),a(),c(),_(),l(),h(),g(),u(),P(),F(),R(),D(),ae(),ne(),w(),L(),V=n(),H=(0,B.memo)(({data:e,deleteAdministrator:t,isLoading:n})=>{let[r,i]=(0,B.useState)(800),[a,o]=(0,B.useState)(),[,s]=(0,B.useState)(),c=(0,B.useRef)(null);N(c,i);let l=j({containerWidth:r,columnModels:q,columnSizingInfo:a,defaultMinColumnSize:50}),u=(0,B.useMemo)(()=>[{id:G,header:`System Administrators`,cell:({row:{original:{avatarUrl:e,name:t}}})=>(0,V.jsx)(z,{name:t,avatarUrl:e})},{id:K,header:``,cell:({row:{original:e}})=>(0,V.jsx)(ee,{size:`small`,sx:{visibility:`hidden`,height:`20px`},className:`hoverable`,startIcon:(0,V.jsx)(O,{color:`#626D82`}),onClick:()=>t(e)})}],[t]),{getHeaderGroups:h,getRowModel:g,setColumnSizing:_}=I({data:e,columns:u,columnResizeMode:`onChange`,getCoreRowModel:A(),getExpandedRowModel:M(),onColumnSizingChange:s,onColumnSizingInfoChange:o});return(0,B.useEffect)(()=>_(l),[_,l]),(0,V.jsxs)(v,{sx:{mt:1},ref:c,children:[(0,V.jsxs)(f,{children:[(0,V.jsx)(y,{children:h().map(e=>(0,V.jsx)(p,{children:e.headers.map(e=>(0,V.jsx)(d,{align:`left`,width:l?l[e.id]:e.getSize(),children:k(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,V.jsxs)(m,{children:[g().rows.map(e=>(0,V.jsx)(p,{children:e.getVisibleCells().map(e=>(0,V.jsx)(d,{"data-testid":`Cell-${e.column.id}`,children:k(e.column.columnDef.cell,e.getContext())},e.column.id))})),n&&(0,V.jsx)(U,{})]})]}),ie(e)&&!n?(0,V.jsx)(oe,{sx:{width:`inherit`},invisible:n,area:E,message:`No System Administrators`}):null]})}),U=(0,B.memo)(()=>re((0,V.jsx)(W,{}),5)),W=(0,B.memo)(()=>(0,V.jsxs)(p,{children:[(0,V.jsx)(d,{children:(0,V.jsx)(o,{variant:`rectangular`,width:`80%`})}),(0,V.jsx)(d,{children:(0,V.jsx)(o,{variant:`rectangular`,width:`80%`})})]})),G=`system-administrator`,K=`delete`,q=[{name:G,width:1e3},{name:K,width:60}],H.__docgenInfo={description:``,methods:[],displayName:`SystemAdministratorsTable`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`},name:`admin`}],return:{name:`void`}}},description:``},isLoading:{required:!0,tsType:{name:`boolean`},description:``}}}})))()}var Y,X,Z,Q;function $(){return($=e((()=>{r(),x(),S(),J(),T(),Y=n(),X={title:`System Administrators Table`,component:H,decorators:[e=>(0,Y.jsx)(b,{theme:C,children:(0,Y.jsx)(i,{sx:{width:`1200px`},children:(0,Y.jsx)(e,{})})})]},Z={name:`Default`,args:{data:te,deleteAdministrator:e=>console.log(`Admin was deleted ${e.name}`),isLoading:!1}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    data: SYSTEM_ADMINISTRATORS,
    deleteAdministrator: admin => console.log(\`Admin was deleted \${admin.name}\`),
    isLoading: false
  }
}`,...Z.parameters?.docs?.source}}},Q=[`DefaultStory`]})))()}$();export{Z as DefaultStory,Q as __namedExportsOrder,X as default};