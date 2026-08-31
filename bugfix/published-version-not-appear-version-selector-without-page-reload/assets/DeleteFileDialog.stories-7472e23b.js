import{j as t,a as d}from"./createTheme-877270e5.js";import{r as o}from"./index-37ba2b57.js";import{d as P}from"./CloseOutlined-778f5cf4.js";import{P as B}from"./PopupDelegate-deae3236.js";import{D as k}from"./DialogForm-0c83311b.js";import{B as f}from"./Button-e4bc6624.js";import{s as n}from"./clsx.m-30fbb483.js";import{D as I,a as O}from"./DialogTitle-df479e6d.js";import{I as M}from"./IconButton-457c30a1.js";import{D as N}from"./DialogContent-4d1ef03f.js";import{D as W}from"./DialogContentText-551ddad1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-9c75dc50.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime_commonjs-proxy-222b8ea0.js";import"./createSvgIcon-bf6c1b92.js";import"./useThemeProps-f3b34960.js";import"./ClassNameGenerator-bd600f10.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./TransitionGroupContext-f40e0036.js";import"./useEnhancedEffect-9d60ea74.js";import"./createChainedFunction-0bab83cf.js";import"./debounce-517eeb3c.js";import"./isMuiElement-de695f11.js";import"./useId-f6e37502.js";import"./useControlled-1dfdd739.js";import"./Box-875ed2fd.js";import"./extendSxProp-e9808817.js";import"./ButtonBase-db27d07e.js";import"./emotion-react.browser.esm-39a29fa1.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-5494d9cc.js";import"./Typography-ead00be7.js";import"./useTheme-951578b7.js";import"./Modal-0f0476c1.js";import"./utils-c5c5ff4b.js";import"./index-4da2af8c.js";import"./Portal-2ef22c9d.js";import"./isHostComponent-73d6e646.js";import"./Paper-3bbc0c25.js";const D=o.memo(()=>t(B,{type:j,render:e=>t(p,{...e})})),j="show-delete-file-dialog",p=o.memo(({open:e,setOpen:i,detail:c})=>{const[s,x,r,u]=o.useMemo(()=>{const{file:E,title:T,message:S,onConfirm:b}=c;return[E,T,S,b]},[c]),F=x??`Delete ${s==null?void 0:s.name}?`,w=o.useCallback(()=>{i(!1),u()},[u,i]),m=o.useCallback(()=>{i(!1)},[i]);return d(k,{open:e,onClose:m,width:r?"420px":"330px",children:[d(q,{children:[F,t(A,{onClick:m,children:t(P,{fontSize:"small"})})]}),r&&t(L,{children:t(V,{variant:"body2",children:r})}),d($,{$hasMessage:!!r,children:[t(f,{variant:"contained",color:"error",onClick:w,"data-testid":"DeleteButton",children:"Delete"}),t(f,{variant:"outlined",onClick:m,"data-testid":"CancelButton",children:"Cancel"})]})]})}),q=n(I)(({theme:e})=>({paddingRight:e.spacing(6),whiteSpace:"normal",overflowWrap:"anywhere",color:e.palette.text.primary})),A=n(M)(({theme:e})=>({position:"absolute",right:8,top:8,color:e.palette.text.secondary})),L=n(N)({minWidth:"unset",width:"auto",paddingBottom:0}),V=n(W)(({theme:e})=>({color:e.palette.text.primary,overflowWrap:"anywhere"})),$=n(O,{shouldForwardProp:e=>e!=="$hasMessage"})(({$hasMessage:e})=>({paddingTop:e?void 0:0}));try{D.displayName="DeleteFileDialog",D.__docgenInfo={description:"",displayName:"DeleteFileDialog",props:{}}}catch{}try{p.displayName="DeleteFilePopup",p.__docgenInfo={description:"",displayName:"DeleteFilePopup",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},setOpen:{defaultValue:null,description:"",name:"setOpen",required:!0,type:{name:"(value: boolean) => void"}},detail:{defaultValue:null,description:"",name:"detail",required:!1,type:{name:"Detail"}}}}}catch{}const Pe={title:"/File Table Upload/Delete File Dialog",component:p},a={name:"Default",args:{open:!0,setOpen:()=>{},detail:{file:{name:"Test File"},onConfirm:()=>{}}}},l={name:"Endpoint delete",args:{open:!0,setOpen:()=>{},detail:{title:"Delete /mcp/example?",message:"Deleting this MCP endpoint will permanently remove the endpoint and all associated artifacts.",onConfirm:()=>{}}}};var g,h,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var C,_,v;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(v=(_=l.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};const Be=["DefaultStory","EndpointDeleteStory"];export{a as DefaultStory,l as EndpointDeleteStory,Be as __namedExportsOrder,Pe as default};
//# sourceMappingURL=DeleteFileDialog.stories-7472e23b.js.map
