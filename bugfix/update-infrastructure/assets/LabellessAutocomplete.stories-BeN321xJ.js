import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-5l_iQkTl.js";import{t as r}from"./jsx-runtime-Dw8SQ1Xa.js";import{n as i,t as a}from"./Box-B_l5-crx.js";import{n as o,t as s}from"./Autocomplete-qEKCSQYj.js";import{n as c,t as l}from"./TextField-BBwqJsbq.js";import{M as u,N as d,n as f,r as p}from"./iframe-C79eAIld.js";function m({maxWidth:e,...t}){return(0,g.jsx)(s,{sx:{"& .MuiAutocomplete-inputRoot":{py:1,maxWidth:{maxWidth:e},"&.MuiInputBase-sizeSmall":{py:1}},"& .MuiAutocomplete-tag":{my:.25,ml:0,mr:1}},...t})}var h,g,_;function v(){return(v=e((()=>{h=t(n(),1),o(),g=r(),m.displayName=`LabellessAutocomplete`,_=(0,h.memo)(m),m.__docgenInfo={description:``,methods:[],displayName:`LabellessAutocomplete`,props:{maxWidth:{required:!1,tsType:{name:`ReactCSSProperties['maxWidth']`,raw:`React.CSSProperties['maxWidth']`},description:``}}}})))()}var y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{y=t(n(),1),i(),c(),d(),f(),v(),b=r(),x=[`Option 1`,`Option 2`,`Option 3`,`Option 4`,`Option 5`],S={title:`Autocompletes/Labelless Autocomplete`,component:_,parameters:{layout:`centered`},decorators:[e=>(0,b.jsx)(u,{theme:p,children:(0,b.jsx)(a,{sx:{width:`600px`,p:2},children:(0,b.jsx)(e,{})})})],argTypes:{options:{control:`object`,description:`Array of options to display in the dropdown`},freeSolo:{control:`boolean`,description:`Allow free text input that is not in the options list`},disabled:{control:`boolean`,description:`Disable the component`},maxWidth:{control:{type:`number`},description:`Maximum width of the component (e.g., "300px", "50%")`},value:{control:`object`,description:`Initial selected value(s)`},multiple:{control:`boolean`,table:{disable:!0},description:`Allow multiple selections`},renderInput:{table:{disable:!0},description:`Render the input. Used to customize the TextField.`},ref:{table:{disable:!0}}}},C=e=>{let[t,n]=(0,y.useState)(e.value||[]),r=(e,t)=>{n(t)};return(0,b.jsx)(_,{...e,value:t,onChange:r,getOptionLabel:e=>String(e)})},w={args:{options:x,multiple:!1,freeSolo:!1,disabled:!1,renderInput:e=>(0,b.jsx)(l,{...e})},render:C},T={args:{options:x,multiple:!0,freeSolo:!1,disabled:!1,value:[`Option 1`],renderInput:e=>(0,b.jsx)(l,{...e})},render:C},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    options: options,
    multiple: false,
    freeSolo: false,
    disabled: false,
    renderInput: params => <TextField {...params} />
  },
  render: RenderWithState
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    options: options,
    multiple: true,
    freeSolo: false,
    disabled: false,
    value: ['Option 1'],
    renderInput: params => <TextField {...params} />
  },
  render: RenderWithState
}`,...T.parameters?.docs?.source}}},E=[`Default`,`MultipleSelection`]})))()}D();export{w as Default,T as MultipleSelection,E as __namedExportsOrder,S as default};