import{a as p,j as n}from"./createTheme-877270e5.js";import{r as A}from"./index-37ba2b57.js";import{C as q}from"./CloseIcon-fb6a4fe8.js";import{D as E}from"./DialogForm-5110733b.js";import{D as V,a as O}from"./DialogTitle-05256a2a.js";import{B as R}from"./Box-875ed2fd.js";import{I as M}from"./IconButton-457c30a1.js";import{D as W}from"./DialogContent-8c4d03f4.js";import{D as j}from"./DialogContentText-551ddad1.js";import{L as G}from"./LoadingButton-aafeaa79.js";import{B as Y}from"./Button-e4bc6624.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-9c75dc50.js";import"./_commonjsHelpers-de833af9.js";import"./createSvgIcon-bf6c1b92.js";import"./clsx.m-30fbb483.js";import"./ClassNameGenerator-bd600f10.js";import"./useThemeProps-f3b34960.js";import"./dialogTitleClasses-64cbfad1.js";import"./useTheme-951578b7.js";import"./Modal-0f0476c1.js";import"./utils-c5c5ff4b.js";import"./inheritsLoose-5494d9cc.js";import"./index-4da2af8c.js";import"./TransitionGroupContext-f40e0036.js";import"./useEnhancedEffect-9d60ea74.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./Portal-2ef22c9d.js";import"./isHostComponent-73d6e646.js";import"./Paper-3bbc0c25.js";import"./useId-f6e37502.js";import"./Typography-ead00be7.js";import"./extendSxProp-e9808817.js";import"./ButtonBase-db27d07e.js";import"./emotion-react.browser.esm-39a29fa1.js";import"./assertThisInitialized-081f9914.js";import"./CircularProgress-d0666090.js";const U={px:2.5,pt:2.5,pb:.5},z={minWidth:420,pl:2.5,pr:6.5,pb:.5},F={px:2.5,pt:1.5,pb:2.5},c=A.memo(({loading:e,message:t,onConfirm:d,onCancel:o,open:S,title:L,confirmButtonName:u="Delete",confirmButtonColor:k="error"})=>($(e,o),p(E,{open:S,onClose:o,width:"420px",children:[n(V,{sx:U,children:p(R,{display:"flex",justifyContent:"space-between",alignItems:"flex-start",children:[L,n(M,{onClick:o,sx:{p:0},children:n(q,{fontSize:"small"})})]})}),t&&n(W,{sx:z,children:n(j,{variant:"body2","data-testid":"ConfirmationDialogContent",children:t})}),p(O,{sx:F,children:[n(G,{variant:"contained",color:k,loading:e,onClick:d,"data-testid":`${u}Button`,children:u}),n(Y,{variant:"outlined",disabled:e,onClick:o,"data-testid":"CancelButton",children:"Cancel"})]})]})));function $(e,t){A.useEffect(()=>{e===!1&&(t==null||t())},[e])}try{c.displayName="ConfirmationDialog",c.__docgenInfo={description:"",displayName:"ConfirmationDialog",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},confirmButtonName:{defaultValue:null,description:"",name:"confirmButtonName",required:!1,type:{name:"string"}},confirmButtonColor:{defaultValue:null,description:"",name:"confirmButtonColor",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"info"'},{value:'"warning"'}]}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!1,type:{name:"(() => void)"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"(() => void)"}}}}}catch{}const Le={title:"Dialogs/Confirmation Dialog",component:c,parameters:{layout:"centered",docs:{description:{component:"A confirmation dialog component for critical actions that require user confirmation."}}},args:{open:!0},argTypes:{open:{control:"boolean",description:"Controls whether the dialog is open",table:{disable:!0}},title:{control:"text",description:"Title text displayed in the dialog header"},message:{control:"text",description:"Message text displayed in the dialog content"},loading:{control:"boolean",description:"Shows loading state on the confirm button"},confirmButtonName:{control:"text",description:"Text displayed on the confirm button"},confirmButtonColor:{control:"select",options:["inherit","primary","secondary","success","error","info","warning"],description:"Color variant of the confirm button"},onConfirm:{action:"confirmed",description:"Callback fired when confirm button is clicked"},onCancel:{action:"cancelled",description:"Callback fired when cancel button is clicked or dialog is closed"}}},r=e=>{const t=()=>{var o;(o=e.onConfirm)==null||o.call(e)},d=()=>{var o;(o=e.onCancel)==null||o.call(e)};return n(c,{...e,open:e.open,loading:e.loading,onConfirm:t,onCancel:d})},i={args:{title:"Confirm Action",message:"Are you sure you want to perform this action? This cannot be undone.",confirmButtonName:"Confirm",confirmButtonColor:"primary",loading:!1},render:r},a={args:{title:"Delete Item",message:"Are you sure you want to delete this item? This action cannot be undone.",confirmButtonName:"Delete",confirmButtonColor:"error"},render:r},s={args:{title:"Simple Confirmation",confirmButtonName:"Delete",confirmButtonColor:"error"},render:r},l={args:{message:"Are you sure you want to perform this action? This cannot be undone.",confirmButtonName:"Confirm",confirmButtonColor:"primary"},render:r},m={args:{title:"Important Notice",message:"This is a very long message that demonstrates how the dialog handles longer text content. The dialog should properly wrap the text and maintain good readability while keeping the overall layout clean and user-friendly.",confirmButtonName:"I Understand",confirmButtonColor:"primary"},render:r};var f,g,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
//# sourceMappingURL=ConfirmationDialog.stories-9dad04fa.js.map
