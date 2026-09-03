import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./react---BZM-86.js";import{o as n,r}from"./clsx.m-DvhsLdH4.js";import{t as i}from"./jsx-runtime--WVWf14b.js";import{n as a,t as o}from"./IconButton-DBH6Y5nc.js";import{n as s,t as c}from"./Button-DrgAR6qf.js";import{n as l,t as u}from"./DialogContent-B-a-mUNQ.js";import{i as d,n as f,r as p,t as m}from"./DialogTitle-BLBZWaKA.js";import{n as h,t as g}from"./DialogContentText-FVqsE9rG.js";import{n as _,t as v}from"./CloseOutlined-CJhq0-TS.js";import{n as y,t as b}from"./DialogForm-DbSCbMTB.js";import{n as x,t as S}from"./PopupDelegate-BriLplMm.js";var C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{C=t(),s(),d(),l(),h(),f(),a(),_(),r(),x(),y(),w=i(),T=(0,C.memo)(()=>(0,w.jsx)(S,{type:E,render:e=>(0,w.jsx)(D,{...e})})),E=`show-delete-file-dialog`,D=(0,C.memo)(({open:e,setOpen:t,detail:n})=>{let[r,i,a,o]=(0,C.useMemo)(()=>{let{file:e,title:t,message:r,onConfirm:i}=n;return[e,t,r,i]},[n]),s=i??`Delete ${r?.name}?`,l=(0,C.useCallback)(()=>{t(!1),o()},[o,t]),u=(0,C.useCallback)(()=>{t(!1)},[t]);return(0,w.jsxs)(b,{open:e,onClose:u,width:a?`420px`:`330px`,children:[(0,w.jsxs)(O,{children:[s,(0,w.jsx)(k,{onClick:u,children:(0,w.jsx)(v,{fontSize:`small`})})]}),a&&(0,w.jsx)(A,{children:(0,w.jsx)(j,{variant:`body2`,children:a})}),(0,w.jsxs)(M,{$hasMessage:!!a,children:[(0,w.jsx)(c,{variant:`contained`,color:`error`,onClick:l,"data-testid":`DeleteButton`,children:`Delete`}),(0,w.jsx)(c,{variant:`outlined`,onClick:u,"data-testid":`CancelButton`,children:`Cancel`})]})]})}),O=n(m)(({theme:e})=>({paddingRight:e.spacing(6),whiteSpace:`normal`,overflowWrap:`anywhere`,color:e.palette.text.primary})),k=n(o)(({theme:e})=>({position:`absolute`,right:8,top:8,color:e.palette.text.secondary})),A=n(u)({minWidth:`unset`,width:`auto`,paddingBottom:0}),j=n(g)(({theme:e})=>({color:e.palette.text.primary,overflowWrap:`anywhere`})),M=n(p,{shouldForwardProp:e=>e!==`$hasMessage`})(({$hasMessage:e})=>({paddingTop:e?void 0:0})),T.__docgenInfo={description:``,methods:[],displayName:`DeleteFileDialog`},D.__docgenInfo={description:``,methods:[],displayName:`DeleteFilePopup`,props:{open:{required:!0,tsType:{name:`boolean`},description:``},setOpen:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`value`}],return:{name:`void`}}},description:``},detail:{required:!1,tsType:{name:`Record`,elements:[{name:`string`},{name:`unknown`}],raw:`Record<string, unknown>`},description:``}}}})))()}var P,F,I,L;function R(){return(R=e((()=>{N(),P={title:`/File Table Upload/Delete File Dialog`,component:D},F={name:`Default`,args:{open:!0,setOpen:()=>void 0,detail:{file:{name:`Test File`},onConfirm:()=>void 0}}},I={name:`Endpoint delete`,args:{open:!0,setOpen:()=>void 0,detail:{title:`Delete /mcp/example?`,message:`Deleting this MCP endpoint will permanently remove the endpoint and all associated artifacts.`,onConfirm:()=>void 0}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    open: true,
    setOpen: () => undefined,
    detail: {
      file: {
        name: 'Test File'
      } as File,
      onConfirm: () => undefined
    }
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Endpoint delete',
  args: {
    open: true,
    setOpen: () => undefined,
    detail: {
      title: 'Delete /mcp/example?',
      message: 'Deleting this MCP endpoint will permanently remove the endpoint and all associated artifacts.',
      onConfirm: () => undefined
    }
  }
}`,...I.parameters?.docs?.source}}},L=[`DefaultStory`,`EndpointDeleteStory`]})))()}R();export{F as DefaultStory,I as EndpointDeleteStory,L as __namedExportsOrder,P as default};