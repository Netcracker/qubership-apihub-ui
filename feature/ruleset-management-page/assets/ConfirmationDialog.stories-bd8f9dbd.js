import{a as p,j as n}from"./createTheme-d4c6d141.js";import{r as A}from"./index-37ba2b57.js";import{D as q}from"./DialogForm-2cfd9c64.js";import{C as E}from"./CloseIcon-06b8d206.js";import{D as V,a as O}from"./DialogTitle-cd1b99ce.js";import{B as R}from"./Box-11e4398c.js";import{I as M}from"./IconButton-c2813217.js";import{D as W}from"./DialogContent-fd001b96.js";import{D as j}from"./DialogContentText-f02e7458.js";import{L as G}from"./LoadingButton-cb4d7c28.js";import{B as Y}from"./Button-7fbb2719.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-9c75dc50.js";import"./_commonjsHelpers-de833af9.js";import"./dialogTitleClasses-c8d9dbc5.js";import"./clsx.m-6cf3b989.js";import"./ClassNameGenerator-bd600f10.js";import"./useThemeProps-90078124.js";import"./useTheme-0ad13214.js";import"./Modal-9f2c2b11.js";import"./utils-0c060528.js";import"./inheritsLoose-5494d9cc.js";import"./index-4da2af8c.js";import"./TransitionGroupContext-f40e0036.js";import"./useEnhancedEffect-9d60ea74.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./Portal-fc00eb8c.js";import"./isHostComponent-73d6e646.js";import"./Paper-dca8f967.js";import"./useId-f6e37502.js";import"./createSvgIcon-473ccb66.js";import"./Typography-d1555f73.js";import"./extendSxProp-acc1143e.js";import"./ButtonBase-1b5192e9.js";import"./emotion-react.browser.esm-f969ea94.js";import"./assertThisInitialized-081f9914.js";import"./CircularProgress-76f8944a.js";const U={px:2.5,pt:2.5,pb:.5},z={minWidth:420,pl:2.5,pr:6.5,pb:.5},F={px:2.5,pt:1.5,pb:2.5},c=A.memo(({loading:e,message:t,onConfirm:d,onCancel:o,open:S,title:L,confirmButtonName:u="Delete",confirmButtonColor:k="error"})=>($(e,o),p(q,{open:S,onClose:o,width:"420px",children:[n(V,{sx:U,children:p(R,{display:"flex",justifyContent:"space-between",alignItems:"flex-start",children:[L,n(M,{onClick:o,sx:{p:0},children:n(E,{fontSize:"small"})})]})}),t&&n(W,{sx:z,children:n(j,{variant:"body2","data-testid":"ConfirmationDialogContent",children:t})}),p(O,{sx:F,children:[n(G,{variant:"contained",color:k,loading:e,onClick:d,"data-testid":`${u}Button`,children:u}),n(Y,{variant:"outlined",disabled:e,onClick:o,"data-testid":"CancelButton",children:"Cancel"})]})]})));function $(e,t){A.useEffect(()=>{e===!1&&(t==null||t())},[e])}try{c.displayName="ConfirmationDialog",c.__docgenInfo={description:"",displayName:"ConfirmationDialog",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},confirmButtonName:{defaultValue:null,description:"",name:"confirmButtonName",required:!1,type:{name:"string"}},confirmButtonColor:{defaultValue:null,description:"",name:"confirmButtonColor",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"info"'},{value:'"warning"'}]}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!1,type:{name:"(() => void)"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"(() => void)"}}}}}catch{}const Le={title:"Dialogs/Confirmation Dialog",component:c,parameters:{layout:"centered",docs:{description:{component:"A confirmation dialog component for critical actions that require user confirmation."}}},args:{open:!0},argTypes:{open:{control:"boolean",description:"Controls whether the dialog is open",table:{disable:!0}},title:{control:"text",description:"Title text displayed in the dialog header"},message:{control:"text",description:"Message text displayed in the dialog content"},loading:{control:"boolean",description:"Shows loading state on the confirm button"},confirmButtonName:{control:"text",description:"Text displayed on the confirm button"},confirmButtonColor:{control:"select",options:["inherit","primary","secondary","success","error","info","warning"],description:"Color variant of the confirm button"},onConfirm:{action:"confirmed",description:"Callback fired when confirm button is clicked"},onCancel:{action:"cancelled",description:"Callback fired when cancel button is clicked or dialog is closed"}}},r=e=>{const t=()=>{var o;(o=e.onConfirm)==null||o.call(e)},d=()=>{var o;(o=e.onCancel)==null||o.call(e)};return n(c,{...e,open:e.open,loading:e.loading,onConfirm:t,onCancel:d})},i={args:{title:"Confirm Action",message:"Are you sure you want to perform this action? This cannot be undone.",confirmButtonName:"Confirm",confirmButtonColor:"primary",loading:!1},render:r},a={args:{title:"Delete Item",message:"Are you sure you want to delete this item? This action cannot be undone.",confirmButtonName:"Delete",confirmButtonColor:"error"},render:r},s={args:{title:"Simple Confirmation",confirmButtonName:"Delete",confirmButtonColor:"error"},render:r},l={args:{message:"Are you sure you want to perform this action? This cannot be undone.",confirmButtonName:"Confirm",confirmButtonColor:"primary"},render:r},m={args:{title:"Important Notice",message:"This is a very long message that demonstrates how the dialog handles longer text content. The dialog should properly wrap the text and maintain good readability while keeping the overall layout clean and user-friendly.",confirmButtonName:"I Understand",confirmButtonColor:"primary"},render:r};var f,g,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Confirm Action',
    message: 'Are you sure you want to perform this action? This cannot be undone.',
    confirmButtonName: 'Confirm',
    confirmButtonColor: 'primary',
    loading: false
  },
  render: RenderDialog
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,C,D;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Delete Item',
    message: 'Are you sure you want to delete this item? This action cannot be undone.',
    confirmButtonName: 'Delete',
    confirmButtonColor: 'error'
  },
  render: RenderDialog
}`,...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var B,b,x;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: 'Simple Confirmation',
    confirmButtonName: 'Delete',
    confirmButtonColor: 'error'
  },
  render: RenderDialog
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var T,w,N;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    message: 'Are you sure you want to perform this action? This cannot be undone.',
    confirmButtonName: 'Confirm',
    confirmButtonColor: 'primary'
  },
  render: RenderDialog
}`,...(N=(w=l.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var v,I,_;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'Important Notice',
    message: 'This is a very long message that demonstrates how the dialog handles longer text content. The dialog should properly wrap the text and maintain good readability while keeping the overall layout clean and user-friendly.',
    confirmButtonName: 'I Understand',
    confirmButtonColor: 'primary'
  },
  render: RenderDialog
}`,...(_=(I=m.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};const ke=["Default","DeleteConfirmation","WithoutMessage","WithoutTitle","LongMessage"];export{i as Default,a as DeleteConfirmation,m as LongMessage,s as WithoutMessage,l as WithoutTitle,ke as __namedExportsOrder,Le as default};
//# sourceMappingURL=ConfirmationDialog.stories-bd8f9dbd.js.map
