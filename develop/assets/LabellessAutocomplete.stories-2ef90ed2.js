import{a as b,F as W,j as t}from"./createTheme-504c4016.js";import{r as K}from"./index-37ba2b57.js";import{T as ee,t as te}from"./theme-690b5c58.js";import{A as re}from"./Autocomplete-7cbb6032.js";import{T as oe}from"./TextField-bb28a7e0.js";import{B as y}from"./Box-b4865c4d.js";import{T as ne}from"./Typography-d550a1ed.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-9c75dc50.js";import"./_commonjsHelpers-de833af9.js";import"./palette-8c6d2233.js";import"./clsx.m-864840f0.js";import"./index-e70dac86.js";import"./useThemeProps-1d0dc8c6.js";import"./createSvgIcon-053beb95.js";import"./IconButton-c55f7c7e.js";import"./ButtonBase-b274dd56.js";import"./emotion-react.browser.esm-8e7c7e34.js";import"./hoist-non-react-statics.cjs-b1c88361.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-5494d9cc.js";import"./TransitionGroupContext-0440df69.js";import"./Popper-ed4c17cc.js";import"./ownerDocument-613eb639.js";import"./Portal-e2302e7a.js";import"./index-4da2af8c.js";import"./Paper-fa854739.js";import"./useId-f6e37502.js";import"./useControlled-1dfdd739.js";import"./usePreviousProps-c4e5492e.js";import"./Chip-24d8cca4.js";import"./isMuiElement-de695f11.js";import"./index-891d46e9.js";import"./Menu-1162ecf6.js";import"./useTheme-31e4dfc6.js";import"./Modal-e0e56efd.js";import"./utils-8e57d5d7.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./debounce-517eeb3c.js";import"./Grow-31a2692c.js";import"./ListContext-aeaca2aa.js";import"./GlobalStyles-c1e851ed.js";import"./extendSxProp-b89c4ee2.js";const ae={"& .MuiAutocomplete-inputRoot":{py:1,maxWidth:392,"&.MuiInputBase-sizeSmall":{py:1}},"& .MuiAutocomplete-tag":{my:.25,ml:0,mr:1}},ie={height:"20px",display:"flex",alignItems:"center"},le={opacity:.5},pe={marginLeft:-4,paddingBottom:2.75};function Q({open:n,placeholder:T,prefixText:a,helperText:g,reserveHelperTextSpace:i,inputProps:e,value:Z,...$}){return b(W,{children:[t(re,{open:n,sx:ae,value:Z,renderInput:l=>t(oe,{...l,...e,placeholder:T,inputProps:{...l.inputProps,style:pe},InputProps:{...l.InputProps,...(e==null?void 0:e.InputProps)||{},startAdornment:b(W,{children:[l.InputProps.startAdornment,a&&t(y,{component:"span",sx:le,children:a})]})}}),...$}),(i||g)&&t(y,{sx:ie,children:t(ne,{variant:"caption",color:e!=null&&e.error?"error":"text.secondary",children:g})})]})}Q.displayName="LabellessAutocomplete";const S=K.memo(Q);try{S.displayName="LabellessAutocomplete",S.__docgenInfo={description:`Autocomplete component without a visible label.
Supports prefix text, helper text, and custom styling.`,displayName:"LabellessAutocomplete",props:{open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},prefixText:{defaultValue:null,description:"",name:"prefixText",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},reserveHelperTextSpace:{defaultValue:null,description:"",name:"reserveHelperTextSpace",required:!1,type:{name:"boolean"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"TextFieldProps"}},value:{defaultValue:null,description:`The value of the autocomplete.

The value must have reference equality with the option in order to be selected.
You can customize the equality behavior with the \`isOptionEqualToValue\` prop.`,name:"value",required:!1,type:{name:"T[] | (T[] & string) | (T[] & (string | T)[])"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const r=["Option 1","Option 2","Option 3","Option 4","Option 5"],Ze={title:"LabellessAutocomplete",component:S,parameters:{layout:"centered"},decorators:[n=>t(ee,{theme:te,children:t(y,{sx:{width:"400px",p:2},children:t(n,{})})})],argTypes:{open:{control:"boolean",description:"Controls whether the options dropdown is open"},multiple:{control:"boolean",description:"Allow multiple selections"},prefixText:{control:"text",description:"Text to display before input"},helperText:{control:"text",description:"Helper text shown below the component"},placeholder:{control:"text",description:"Placeholder text for the input"}}},o=n=>{const[T,a]=K.useState(n.value||[]);return t(S,{...n,value:T,onChange:(i,e)=>{a(e)},getOptionLabel:i=>String(i)})},p={args:{options:r,placeholder:"Select an option"},render:o},s={args:{options:r,placeholder:"Select multiple options",multiple:!0},render:o},c={args:{options:r,placeholder:"Select an option",prefixText:"Prefix-"},render:o},d={args:{options:r,placeholder:"Type to see helper text",helperText:"Choose from the available options"},render:o},m={args:{options:r,placeholder:"Select an option",helperText:"This field is required",inputProps:{error:!0}},render:o},u={args:{options:r,placeholder:"This field is disabled",disabled:!0},render:o},h={args:{options:r,placeholder:"Select an option",value:["Option 1"]},render:o},f={args:{options:r,placeholder:"Select multiple options",multiple:!0,value:["Option 1","Option 3"]},render:o},x={args:{options:r,placeholder:"Type to add an option",freeSolo:!0,multiple:!0},render:o};var v,_,O;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    options: options,
    placeholder: 'Select an option'
  },
  render: RenderWithState
}`,...(O=(_=p.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var A,I,V;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    options: options,
    placeholder: 'Select multiple options',
    multiple: true
  },
  render: RenderWithState
}`,...(V=(I=s.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var R,q,E;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    options: options,
    placeholder: 'Select an option',
    prefixText: 'Prefix-'
  },
  render: RenderWithState
}`,...(E=(q=c.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var w,L,P;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    options: options,
    placeholder: 'Type to see helper text',
    helperText: 'Choose from the available options'
  },
  render: RenderWithState
}`,...(P=(L=d.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var M,C,F;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    options: options,
    placeholder: 'Select an option',
    helperText: 'This field is required',
    inputProps: {
      error: true
    }
  },
  render: RenderWithState
}`,...(F=(C=m.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var X,H,B;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    options: options,
    placeholder: 'This field is disabled',
    disabled: true
  },
  render: RenderWithState
}`,...(B=(H=u.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var D,N,j;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    options: options,
    placeholder: 'Select an option',
    value: ['Option 1']
  },
  render: RenderWithState
}`,...(j=(N=h.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var z,U,Y;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    options: options,
    placeholder: 'Select multiple options',
    multiple: true,
    value: ['Option 1', 'Option 3']
  },
  render: RenderWithState
}`,...(Y=(U=f.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var k,G,J;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    options: options,
    placeholder: 'Type to add an option',
    freeSolo: true,
    multiple: true
  },
  render: RenderWithState
}`,...(J=(G=x.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const $e=["Default","WithMultipleSelection","WithPrefixText","WithHelperText","WithError","Disabled","WithInitialValue","WithMultipleInitialValues","FreeSoloWithMultipleSelection"];export{p as Default,u as Disabled,x as FreeSoloWithMultipleSelection,m as WithError,d as WithHelperText,h as WithInitialValue,f as WithMultipleInitialValues,s as WithMultipleSelection,c as WithPrefixText,$e as __namedExportsOrder,Ze as default};
//# sourceMappingURL=LabellessAutocomplete.stories-2ef90ed2.js.map
