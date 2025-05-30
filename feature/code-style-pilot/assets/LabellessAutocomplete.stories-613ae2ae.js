import{j as t}from"./createTheme-3f433a46.js";import{r as u}from"./index-37ba2b57.js";import{T as A,t as S}from"./theme-d0738c15.js";import{A as _}from"./Autocomplete-bd4ef415.js";import{B as v}from"./Box-56201235.js";import{T as f}from"./TextField-3c0250c8.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-9c75dc50.js";import"./_commonjsHelpers-de833af9.js";import"./palette-8c6d2233.js";import"./styled-ebc30f5f.js";import"./index-420fbc32.js";import"./useThemeProps-6f68535c.js";import"./createSvgIcon-5350b5dc.js";import"./IconButton-8d89ebab.js";import"./ButtonBase-3c58fb83.js";import"./emotion-react.browser.esm-636148c3.js";import"./hoist-non-react-statics.cjs-b1c88361.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-5494d9cc.js";import"./TransitionGroupContext-0440df69.js";import"./Popper-85bfdec6.js";import"./ownerDocument-613eb639.js";import"./Portal-6ea91f30.js";import"./isHostComponent-73d6e646.js";import"./index-4da2af8c.js";import"./Paper-260613e6.js";import"./useId-f6e37502.js";import"./useControlled-1dfdd739.js";import"./usePreviousProps-c4e5492e.js";import"./Chip-67104dc4.js";import"./extendSxProp-1e23d004.js";import"./isMuiElement-de695f11.js";import"./index-891d46e9.js";import"./Menu-982af263.js";import"./useTheme-cfa4c669.js";import"./Modal-f2dc4c1a.js";import"./utils-cf3d21be.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./debounce-517eeb3c.js";import"./Grow-af5e6305.js";import"./List-4d5fe3c9.js";import"./ListContext-aeaca2aa.js";import"./GlobalStyles-f97aed57.js";function b({maxWidth:e,...n}){return t(_,{sx:{"& .MuiAutocomplete-inputRoot":{py:1,maxWidth:{maxWidth:e},"&.MuiInputBase-sizeSmall":{py:1}},"& .MuiAutocomplete-tag":{my:.25,ml:0,mr:1}},...n})}b.displayName="LabellessAutocomplete";const i=u.memo(b);try{i.displayName="LabellessAutocomplete",i.__docgenInfo={description:`A specialized Autocomplete component without a visible label.
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
//# sourceMappingURL=LabellessAutocomplete.stories-613ae2ae.js.map
