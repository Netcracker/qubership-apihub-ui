import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./react-5l_iQkTl.js";import{t as n}from"./jsx-runtime-Dw8SQ1Xa.js";import{M as r,k as i}from"./base-BS5Q32BK.js";import{n as a,t as o}from"./IconButton-nZott58-.js";import{n as s,t as c}from"./Box-BoHOER5V.js";import{n as l,t as u}from"./Button-I3tvzdd9.js";import{n as d,t as f}from"./DialogContent-DM_9YyvD.js";import{i as p,n as m,r as h,t as g}from"./DialogTitle-CGjAX6IT.js";import{n as _,t as v}from"./DialogContentText-DHavZuhB.js";import{n as y,t as b}from"./LoadingButton-DhAN4WZx.js";import{n as x,t as S}from"./CloseIcon-CqQnT4sX.js";import{n as C,t as w}from"./DialogForm-Bj08xMWK.js";function T(e,t){(0,E.useEffect)(()=>{e===!1&&t?.()},[e])}var E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{y(),s(),l(),p(),d(),_(),m(),a(),i(),E=t(),x(),C(),D=n(),O=(0,E.memo)(({loading:e,message:t,onConfirm:n,onCancel:r,open:i,title:a,confirmButtonName:o=`Delete`,confirmButtonColor:s=`error`})=>(T(e,r),(0,D.jsxs)(w,{open:i,onClose:r,width:`420px`,children:[(0,D.jsx)(k,{children:(0,D.jsxs)(A,{children:[a,(0,D.jsx)(j,{onClick:r,children:(0,D.jsx)(S,{fontSize:`small`})})]})}),t&&(0,D.jsx)(M,{children:(0,D.jsx)(v,{variant:`body2`,"data-testid":`ConfirmationDialogContent`,children:t})}),(0,D.jsxs)(N,{children:[(0,D.jsx)(b,{variant:`contained`,color:s,loading:e,onClick:n,"data-testid":`${o}Button`,children:o}),(0,D.jsx)(u,{variant:`outlined`,disabled:e,onClick:r,"data-testid":`CancelButton`,children:`Cancel`})]})]}))),O.displayName=`ConfirmationDialog`,k=r(g)(({theme:e})=>({padding:e.spacing(2.5,2.5,.5)})),A=r(c)({display:`flex`,alignItems:`flex-start`}),j=r(o)({padding:0,marginLeft:`auto`}),M=r(f)(({theme:e})=>({minWidth:420,padding:e.spacing(0,6.5,.5,2.5)})),N=r(h)(({theme:e})=>({padding:e.spacing(1.5,2.5,2.5)})),O.__docgenInfo={description:``,methods:[],displayName:`ConfirmationDialog`,props:{open:{required:!0,tsType:{name:`boolean`},description:``},title:{required:!1,tsType:{name:`string`},description:``},message:{required:!1,tsType:{name:`ReactNode`},description:``},loading:{required:!1,tsType:{name:`boolean`},description:``},confirmButtonName:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Delete'`,computed:!1}},confirmButtonColor:{required:!1,tsType:{name:`OverridableStringUnion`,elements:[{name:`union`,raw:`'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'`,elements:[{name:`literal`,value:`'inherit'`},{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'info'`},{name:`literal`,value:`'warning'`}]},{name:`ButtonPropsColorOverrides`}],raw:`OverridableStringUnion<
  'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
  ButtonPropsColorOverrides
>`},description:``,defaultValue:{value:`'error'`,computed:!1}},onConfirm:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onCancel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})))()}var F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{t(),P(),F=n(),I={title:`Dialogs/Confirmation Dialog`,component:O,parameters:{layout:`centered`,docs:{description:{component:`A confirmation dialog component for critical actions that require user confirmation.`}}},args:{open:!0},argTypes:{open:{control:`boolean`,description:`Controls whether the dialog is open`,table:{disable:!0}},title:{control:`text`,description:`Title text displayed in the dialog header`},message:{control:`text`,description:`Message text displayed in the dialog content`},loading:{control:`boolean`,description:`Shows loading state on the confirm button`},confirmButtonName:{control:`text`,description:`Text displayed on the confirm button`},confirmButtonColor:{control:`select`,options:[`inherit`,`primary`,`secondary`,`success`,`error`,`info`,`warning`],description:`Color variant of the confirm button`},onConfirm:{action:`confirmed`,description:`Callback fired when confirm button is clicked`},onCancel:{action:`cancelled`,description:`Callback fired when cancel button is clicked or dialog is closed`}}},L=e=>{let t=()=>{e.onConfirm?.()},n=()=>{e.onCancel?.()};return(0,F.jsx)(O,{...e,open:e.open,loading:e.loading,onConfirm:t,onCancel:n})},R={args:{title:`Confirm Action`,message:`Are you sure you want to perform this action? This cannot be undone.`,confirmButtonName:`Confirm`,confirmButtonColor:`primary`,loading:!1},render:L},z={args:{title:`Delete Item`,message:`Are you sure you want to delete this item? This action cannot be undone.`,confirmButtonName:`Delete`,confirmButtonColor:`error`},render:L},B={args:{title:`Simple Confirmation`,confirmButtonName:`Delete`,confirmButtonColor:`error`},render:L},V={args:{message:`Are you sure you want to perform this action? This cannot be undone.`,confirmButtonName:`Confirm`,confirmButtonColor:`primary`},render:L},H={args:{title:`Important Notice`,message:`This is a very long message that demonstrates how the dialog handles longer text content. The dialog should properly wrap the text and maintain good readability while keeping the overall layout clean and user-friendly.`,confirmButtonName:`I Understand`,confirmButtonColor:`primary`},render:L},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Confirm Action',
    message: 'Are you sure you want to perform this action? This cannot be undone.',
    confirmButtonName: 'Confirm',
    confirmButtonColor: 'primary',
    loading: false
  },
  render: RenderDialog
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Delete Item',
    message: 'Are you sure you want to delete this item? This action cannot be undone.',
    confirmButtonName: 'Delete',
    confirmButtonColor: 'error'
  },
  render: RenderDialog
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Simple Confirmation',
    confirmButtonName: 'Delete',
    confirmButtonColor: 'error'
  },
  render: RenderDialog
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Are you sure you want to perform this action? This cannot be undone.',
    confirmButtonName: 'Confirm',
    confirmButtonColor: 'primary'
  },
  render: RenderDialog
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Important Notice',
    message: 'This is a very long message that demonstrates how the dialog handles longer text content. The dialog should properly wrap the text and maintain good readability while keeping the overall layout clean and user-friendly.',
    confirmButtonName: 'I Understand',
    confirmButtonColor: 'primary'
  },
  render: RenderDialog
}`,...H.parameters?.docs?.source}}},U=[`Default`,`DeleteConfirmation`,`WithoutMessage`,`WithoutTitle`,`LongMessage`]})))()}W();export{R as Default,z as DeleteConfirmation,H as LongMessage,B as WithoutMessage,V as WithoutTitle,U as __namedExportsOrder,I as default};