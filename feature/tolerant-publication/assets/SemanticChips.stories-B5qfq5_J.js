import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./react---BZM-86.js";import{t as n}from"./jsx-runtime--WVWf14b.js";import{n as r,t as i}from"./Box-CzqjOcoU.js";import{n as a,t as o}from"./CustomChip-lM3eRWR2.js";import{n as s,r as c,t as l}from"./semantic-chip-styles-Dwrt4Odv.js";import{i as u,n as d,r as f,t as p}from"./HttpMethodChip-BP7-LIst.js";import{o as m,u as h}from"./version-status-DFBbv5An.js";import{n as g,t as _}from"./VersionStatusChip-exiRKLEc.js";import{a as v,c as y,d as b,f as x,i as S,l as C,n as w,o as T,p as E,r as D,s as O,t as k,u as A}from"./GraphQlOperationTypeChip-Ccdnt-du.js";var j,M;function N(){return(N=e((()=>{j=`active`,M=`expired`})))()}var P,F,I,L;function R(){return(R=e((()=>{P=t(),a(),l(),N(),F=n(),I={[j]:{main:`#C3F29E`,contrastText:`#073800`},[M]:{main:`#FFB9AB`,contrastText:`#520100`}},L=(0,P.memo)(({status:e,sx:t,variant:n,...r})=>(0,F.jsx)(o,{...r,variant:n,value:e,sx:s(c(I[e],n===`outlined`?`outlined`:`filled`),t)})),L.__docgenInfo={description:``,methods:[],displayName:`PersonalAccessTokenStatusChip`,props:{status:{required:!0,tsType:{name:`union`,raw:`| typeof PERSONAL_ACCESS_TOKEN_STATUS_ACTIVE
| typeof PERSONAL_ACCESS_TOKEN_STATUS_EXPIRED`,elements:[{name:`PERSONAL_ACCESS_TOKEN_STATUS_ACTIVE`},{name:`PERSONAL_ACCESS_TOKEN_STATUS_EXPIRED`}]},description:``}}}})))()}var z,B,V,H;function U(){return(U=e((()=>{z=t(),a(),l(),B=n(),V={main:`#EAE0D5`,contrastText:`#0C1E36`},H=(0,z.memo)(({sx:e,...t})=>(0,B.jsx)(o,{...t,value:`ddlSchema`,sx:s(c(V),e)})),H.__docgenInfo={description:``,methods:[],displayName:`DdlSchemaChip`}})))()}var W,G,K,q,J;function Y(){return(Y=e((()=>{r(),g(),R(),U(),d(),w(),A(),y(),h(),u(),T(),E(),N(),W=n(),G={title:`Semantic Chips`},K=()=>(0,W.jsxs)(i,{display:`flex`,flexDirection:`column`,gap:2,children:[(0,W.jsx)(i,{display:`flex`,gap:1,alignItems:`center`,children:m.map(e=>(0,W.jsx)(_,{status:e},e))}),(0,W.jsx)(i,{display:`flex`,gap:1,alignItems:`center`,children:[...f].map(e=>(0,W.jsx)(p,{method:e},e))}),(0,W.jsx)(i,{display:`flex`,gap:1,alignItems:`center`,children:[S,D,v].map(e=>(0,W.jsx)(k,{operationType:e},e))}),(0,W.jsx)(i,{display:`flex`,gap:1,alignItems:`center`,children:[x,b].map(e=>(0,W.jsx)(C,{action:e},e))}),(0,W.jsx)(i,{display:`flex`,gap:1,alignItems:`center`,children:[j,M].map(e=>(0,W.jsx)(L,{status:e,label:e},e))}),(0,W.jsxs)(i,{display:`flex`,gap:1,alignItems:`center`,children:[(0,W.jsx)(O,{}),(0,W.jsx)(H,{label:`public.orders`})]})]}),q=K.bind({}),q.storyName=`All semantic chips`,q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => <Box display="flex" flexDirection="column" gap={2}>
    <Box display="flex" gap={1} alignItems="center">
      {VERSION_STATUSES.map(status => <VersionStatusChip key={status} status={status} />)}
    </Box>
    <Box display="flex" gap={1} alignItems="center">
      {[...METHOD_TYPES].map(method => <HttpMethodChip key={method} method={method} />)}
    </Box>
    <Box display="flex" gap={1} alignItems="center">
      {([QUERY_OPERATION_TYPE, MUTATION_OPERATION_TYPE, SUBSCRIPTION_OPERATION_TYPE] as const).map(type => <GraphQlOperationTypeChip key={type} operationType={type} />)}
    </Box>
    <Box display="flex" gap={1} alignItems="center">
      {([SEND_OPERATION_TYPE, RECEIVE_OPERATION_TYPE] as const).map(action => <AsyncApiActionChip key={action} action={action} />)}
    </Box>
    <Box display="flex" gap={1} alignItems="center">
      {([PERSONAL_ACCESS_TOKEN_STATUS_ACTIVE, PERSONAL_ACCESS_TOKEN_STATUS_EXPIRED] as const).map(status => <PersonalAccessTokenStatusChip key={status} status={status} label={status} />)}
    </Box>
    <Box display="flex" gap={1} alignItems="center">
      <DeprecatedBadge />
      <DdlSchemaChip label="public.orders" />
    </Box>
  </Box>`,...q.parameters?.docs?.source}}},J=[`AllSemanticChips`]})))()}Y();export{q as AllSemanticChips,J as __namedExportsOrder,G as default};