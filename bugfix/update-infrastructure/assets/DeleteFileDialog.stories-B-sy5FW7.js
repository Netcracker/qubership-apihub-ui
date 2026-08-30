import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-5l_iQkTl.js";import{t as r}from"./jsx-runtime-Dw8SQ1Xa.js";import{M as i,k as a}from"./base-BS5Q32BK.js";import{n as o,t as s}from"./IconButton-nZott58-.js";import{n as c,t as l}from"./Button-I3tvzdd9.js";import{n as u,t as d}from"./DialogContent-DM_9YyvD.js";import{i as f,n as p,r as m,t as h}from"./DialogTitle-CGjAX6IT.js";import{n as g,t as _}from"./DialogContentText-DHavZuhB.js";import{n as v,t as y}from"./DialogForm-Bj08xMWK.js";import{n as b,t as x}from"./PopupDelegate-C1TLfYOs.js";import{t as S}from"./CloseOutlined-B1jIMn8T.js";var C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{C=n(),c(),f(),u(),g(),p(),o(),w=t(S(),1),a(),b(),v(),T=r(),E=(0,C.memo)(()=>(0,T.jsx)(x,{type:D,render:e=>(0,T.jsx)(O,{...e})})),D=`show-delete-file-dialog`,O=(0,C.memo)(({open:e,setOpen:t,detail:n})=>{let[r,i,a,o]=(0,C.useMemo)(()=>{let{file:e,title:t,message:r,onConfirm:i}=n;return[e,t,r,i]},[n]),s=i??`Delete ${r?.name}?`,c=(0,C.useCallback)(()=>{t(!1),o()},[o,t]),u=(0,C.useCallback)(()=>{t(!1)},[t]);return(0,T.jsxs)(y,{open:e,onClose:u,width:a?`420px`:`330px`,children:[(0,T.jsxs)(k,{children:[s,(0,T.jsx)(A,{onClick:u,children:(0,T.jsx)(w.default,{fontSize:`small`})})]}),a&&(0,T.jsx)(j,{children:(0,T.jsx)(M,{variant:`body2`,children:a})}),(0,T.jsxs)(N,{$hasMessage:!!a,children:[(0,T.jsx)(l,{variant:`contained`,color:`error`,onClick:c,"data-testid":`DeleteButton`,children:`Delete`}),(0,T.jsx)(l,{variant:`outlined`,onClick:u,"data-testid":`CancelButton`,children:`Cancel`})]})]})}),k=i(h)(({theme:e})=>({paddingRight:e.spacing(6),whiteSpace:`normal`,overflowWrap:`anywhere`,color:e.palette.text.primary})),A=i(s)(({theme:e})=>({position:`absolute`,right:8,top:8,color:e.palette.text.secondary})),j=i(d)({minWidth:`unset`,width:`auto`,paddingBottom:0}),M=i(_)(({theme:e})=>({color:e.palette.text.primary,overflowWrap:`anywhere`})),N=i(m,{shouldForwardProp:e=>e!==`$hasMessage`})(({$hasMessage:e})=>({paddingTop:e?void 0:0})),E.__docgenInfo={description:``,methods:[],displayName:`DeleteFileDialog`},O.__docgenInfo={description:``,methods:[],displayName:`DeleteFilePopup`,props:{open:{required:!0,tsType:{name:`boolean`},description:``},setOpen:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`value`}],return:{name:`void`}}},description:``},detail:{required:!1,tsType:{name:`Record`,elements:[{name:`string`},{name:`unknown`}],raw:`Record<string, unknown>`},description:``}}}})))()}var F,I,L,R;function z(){return(z=e((()=>{P(),F={title:`/File Table Upload/Delete File Dialog`,component:O},I={name:`Default`,args:{open:!0,setOpen:()=>void 0,detail:{file:{name:`Test File`},onConfirm:()=>void 0}}},L={name:`Endpoint delete`,args:{open:!0,setOpen:()=>void 0,detail:{title:`Delete /mcp/example?`,message:`Deleting this MCP endpoint will permanently remove the endpoint and all associated artifacts.`,onConfirm:()=>void 0}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R=[`DefaultStory`,`EndpointDeleteStory`]})))()}z();export{I as DefaultStory,L as EndpointDeleteStory,R as __namedExportsOrder,F as default};