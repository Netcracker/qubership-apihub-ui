import{j as t}from"./createTheme-c79a82be.js";import{r as u}from"./index-76fb7be0.js";import{T as A,t as S}from"./theme-66f9ba2b.js";import{A as _}from"./Autocomplete-b6fddf03.js";import{B as v}from"./Box-5be9d6da.js";import{T as f}from"./TextField-b259ab15.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-aa53f5e3.js";import"./_commonjsHelpers-de833af9.js";import"./palette-8c6d2233.js";import"./clsx.m-e92c351d.js";import"./index-71e0858c.js";import"./useThemeProps-aa843650.js";import"./createSvgIcon-b791e64c.js";import"./IconButton-e8de8077.js";import"./ButtonBase-05fdfea8.js";import"./emotion-react.browser.esm-b0f55332.js";import"./hoist-non-react-statics.cjs-b1c88361.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-5494d9cc.js";import"./TransitionGroupContext-48398eec.js";import"./Popper-85045249.js";import"./ownerDocument-613eb639.js";import"./Portal-18509f2e.js";import"./isHostComponent-73d6e646.js";import"./index-d3ea75b5.js";import"./Paper-c822a8c8.js";import"./useId-a47493a3.js";import"./useControlled-3e5b2082.js";import"./usePreviousProps-d722ff4c.js";import"./Chip-a169d9d4.js";import"./extendSxProp-aea61bfb.js";import"./isMuiElement-bce4c331.js";import"./index-891d46e9.js";import"./Menu-b4cdd8f7.js";import"./useTheme-11ba6946.js";import"./Modal-89faf1a9.js";import"./utils-a355cc51.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./debounce-517eeb3c.js";import"./Grow-a4fcaa6b.js";import"./List-d5d9a26a.js";import"./ListContext-e9aee161.js";import"./GlobalStyles-8bce6ff0.js";function b({maxWidth:e,...n}){return t(_,{sx:{"& .MuiAutocomplete-inputRoot":{py:1,maxWidth:{maxWidth:e},"&.MuiInputBase-sizeSmall":{py:1}},"& .MuiAutocomplete-tag":{my:.25,ml:0,mr:1}},...n})}b.displayName="LabellessAutocomplete";const i=u.memo(b);try{i.displayName="LabellessAutocomplete",i.__docgenInfo={description:`A specialized Autocomplete component without a visible label.
Provides consistent styling for all autocomplete inputs across the application.
Particularly useful for forms where label space needs to be conserved.`,displayName:"LabellessAutocomplete",props:{maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"MaxWidth<string | number>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const h=["Option 1","Option 2","Option 3","Option 4","Option 5"],be={title:"Autocompletes/Labelless Autocomplete",component:i,parameters:{layout:"centered"},decorators:[e=>t(A,{theme:S,children:t(v,{sx:{width:"600px",p:2},children:t(e,{})})})],argTypes:{options:{control:"object",description:"Array of options to display in the dropdown"},freeSolo:{control:"boolean",description:"Allow free text input that is not in the options list"},disabled:{control:"boolean",description:"Disable the component"},maxWidth:{control:{type:"number"},description:'Maximum width of the component (e.g., "300px", "50%")'},value:{control:"object",description:"Initial selected value(s)"},multiple:{control:"boolean",table:{disable:!0},description:"Allow multiple selections"},renderInput:{table:{disable:!0},description:"Render the input. Used to customize the TextField."},ref:{table:{disable:!0}}}},x=e=>{const[n,g]=u.useState(e.value||[]);return t(i,{...e,value:n,onChange:(l,y)=>{g(y)},getOptionLabel:l=>String(l)})},o={args:{options:h,multiple:!1,freeSolo:!1,disabled:!1,renderInput:e=>t(f,{...e})},render:x},r={args:{options:h,multiple:!0,freeSolo:!1,disabled:!1,value:["Option 1"],renderInput:e=>t(f,{...e})},render:x};var p,a,s;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    options: options,
    multiple: false,
    freeSolo: false,
    disabled: false,
    renderInput: params => <TextField {...params} />
  },
  render: RenderWithState
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var m,d,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    options: options,
    multiple: true,
    freeSolo: false,
    disabled: false,
    value: ['Option 1'],
    renderInput: params => <TextField {...params} />
  },
  render: RenderWithState
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const he=["Default","MultipleSelection"];export{o as Default,r as MultipleSelection,he as __namedExportsOrder,be as default};
//# sourceMappingURL=LabellessAutocomplete.stories-770cd091.js.map
