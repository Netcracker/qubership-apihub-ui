import{a as p,j as n}from"./createTheme-2dc40177.js";import{r as _}from"./index-37ba2b57.js";import{C as V}from"./CloseIcon-07dadf84.js";import{D as L}from"./DialogForm-3f98d2ab.js";import{D as M}from"./DialogContentText-f50178b6.js";import{L as W}from"./LoadingButton-3fad18d4.js";import{B as j}from"./Button-5f0f42cc.js";import{s as i}from"./clsx.m-27495dc5.js";import{D as E,a as O}from"./DialogTitle-d803a8bc.js";import{B as U}from"./Box-7c65a994.js";import{I as z}from"./IconButton-7af50444.js";import{D as F}from"./DialogContent-f0187615.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-9c75dc50.js";import"./_commonjsHelpers-de833af9.js";import"./createSvgIcon-802d8e00.js";import"./useThemeProps-2daf4b89.js";import"./dialogTitleClasses-dfe8fb22.js";import"./useTheme-876c8ec2.js";import"./Modal-09910f57.js";import"./utils-d5ec3d19.js";import"./inheritsLoose-5494d9cc.js";import"./index-4da2af8c.js";import"./TransitionGroupContext-f40e0036.js";import"./useEnhancedEffect-9d60ea74.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./Portal-53aa351d.js";import"./isHostComponent-73d6e646.js";import"./Paper-be04f076.js";import"./useId-f6e37502.js";import"./Typography-820ad1be.js";import"./extendSxProp-338140f9.js";import"./CircularProgress-7958e83c.js";import"./emotion-react.browser.esm-0e1f5282.js";import"./ButtonBase-ffde6543.js";import"./assertThisInitialized-081f9914.js";import"./ClassNameGenerator-bd600f10.js";const r=_.memo(({loading:e,message:t,onConfirm:u,onCancel:o,open:k,title:q,confirmButtonName:f="Delete",confirmButtonColor:R="error"})=>(P(e,o),p(L,{open:k,onClose:o,width:"420px",children:[n($,{children:p(G,{children:[q,n(H,{onClick:o,children:n(V,{fontSize:"small"})})]})}),t&&n(J,{children:n(M,{variant:"body2","data-testid":"ConfirmationDialogContent",children:t})}),p(K,{children:[n(W,{variant:"contained",color:R,loading:e,onClick:u,"data-testid":`${f}Button`,children:f}),n(j,{variant:"outlined",disabled:e,onClick:o,"data-testid":"CancelButton",children:"Cancel"})]})]})));r.displayName="ConfirmationDialog";const $=i(E)(({theme:e})=>({padding:e.spacing(2.5,2.5,.5)})),G=i(U)({display:"flex",alignItems:"flex-start"}),H=i(z)({padding:0,marginLeft:"auto"}),J=i(F)(({theme:e})=>({minWidth:420,padding:e.spacing(0,6.5,.5,2.5)})),K=i(O)(({theme:e})=>({padding:e.spacing(1.5,2.5,2.5)}));function P(e,t){_.useEffect(()=>{e===!1&&(t==null||t())},[e])}try{r.displayName="ConfirmationDialog",r.__docgenInfo={description:"",displayName:"ConfirmationDialog",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},confirmButtonName:{defaultValue:null,description:"",name:"confirmButtonName",required:!1,type:{name:"string"}},confirmButtonColor:{defaultValue:null,description:"",name:"confirmButtonColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"error"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"inherit"'}]}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!1,type:{name:"(() => void)"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"(() => void)"}}}}}catch{}const Ve={title:"Dialogs/Confirmation Dialog",component:r,parameters:{layout:"centered",docs:{description:{component:"A confirmation dialog component for critical actions that require user confirmation."}}},args:{open:!0},argTypes:{open:{control:"boolean",description:"Controls whether the dialog is open",table:{disable:!0}},title:{control:"text",description:"Title text displayed in the dialog header"},message:{control:"text",description:"Message text displayed in the dialog content"},loading:{control:"boolean",description:"Shows loading state on the confirm button"},confirmButtonName:{control:"text",description:"Text displayed on the confirm button"},confirmButtonColor:{control:"select",options:["inherit","primary","secondary","success","error","info","warning"],description:"Color variant of the confirm button"},onConfirm:{action:"confirmed",description:"Callback fired when confirm button is clicked"},onCancel:{action:"cancelled",description:"Callback fired when cancel button is clicked or dialog is closed"}}},a=e=>{const t=()=>{var o;(o=e.onConfirm)==null||o.call(e)},u=()=>{var o;(o=e.onCancel)==null||o.call(e)};return n(r,{...e,open:e.open,loading:e.loading,onConfirm:t,onCancel:u})},s={args:{title:"Confirm Action",message:"Are you sure you want to perform this action? This cannot be undone.",confirmButtonName:"Confirm",confirmButtonColor:"primary",loading:!1},render:a},l={args:{title:"Delete Item",message:"Are you sure you want to delete this item? This action cannot be undone.",confirmButtonName:"Delete",confirmButtonColor:"error"},render:a},m={args:{title:"Simple Confirmation",confirmButtonName:"Delete",confirmButtonColor:"error"},render:a},c={args:{message:"Are you sure you want to perform this action? This cannot be undone.",confirmButtonName:"Confirm",confirmButtonColor:"primary"},render:a},d={args:{title:"Important Notice",message:"This is a very long message that demonstrates how the dialog handles longer text content. The dialog should properly wrap the text and maintain good readability while keeping the overall layout clean and user-friendly.",confirmButtonName:"I Understand",confirmButtonColor:"primary"},render:a};var g,h,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Confirm Action',
    message: 'Are you sure you want to perform this action? This cannot be undone.',
    confirmButtonName: 'Confirm',
    confirmButtonColor: 'primary',
    loading: false
  },
  render: RenderDialog
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var C,D,B;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: 'Delete Item',
    message: 'Are you sure you want to delete this item? This action cannot be undone.',
    confirmButtonName: 'Delete',
    confirmButtonColor: 'error'
  },
  render: RenderDialog
}`,...(B=(D=l.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var b,w,x;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: 'Simple Confirmation',
    confirmButtonName: 'Delete',
    confirmButtonColor: 'error'
  },
  render: RenderDialog
}`,...(x=(w=m.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var T,v,N;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    message: 'Are you sure you want to perform this action? This cannot be undone.',
    confirmButtonName: 'Confirm',
    confirmButtonColor: 'primary'
  },
  render: RenderDialog
}`,...(N=(v=c.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var S,I,A;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'Important Notice',
    message: 'This is a very long message that demonstrates how the dialog handles longer text content. The dialog should properly wrap the text and maintain good readability while keeping the overall layout clean and user-friendly.',
    confirmButtonName: 'I Understand',
    confirmButtonColor: 'primary'
  },
  render: RenderDialog
}`,...(A=(I=d.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};const Le=["Default","DeleteConfirmation","WithoutMessage","WithoutTitle","LongMessage"];export{s as Default,l as DeleteConfirmation,d as LongMessage,m as WithoutMessage,c as WithoutTitle,Le as __namedExportsOrder,Ve as default};
//# sourceMappingURL=ConfirmationDialog.stories-b1171972.js.map
