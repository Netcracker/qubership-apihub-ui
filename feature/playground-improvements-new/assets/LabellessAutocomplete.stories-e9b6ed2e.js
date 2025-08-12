import{j as t}from"./createTheme-e504d7a1.js";import{r as u}from"./index-37ba2b57.js";import{T as A,t as S}from"./theme-c443f225.js";import{A as _}from"./Autocomplete-114ba1e5.js";import{B as v}from"./Box-3dbc4f20.js";import{T as f}from"./TextField-53f19ca3.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-9c75dc50.js";import"./_commonjsHelpers-de833af9.js";import"./palette-8c6d2233.js";import"./clsx.m-e8952646.js";import"./index-65a2139a.js";import"./useThemeProps-be56d1e2.js";import"./createSvgIcon-23119704.js";import"./IconButton-ae1303d1.js";import"./ButtonBase-d7ff9540.js";import"./emotion-react.browser.esm-6b7ec201.js";import"./hoist-non-react-statics.cjs-b1c88361.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-5494d9cc.js";import"./TransitionGroupContext-0440df69.js";import"./Popper-0de88a38.js";import"./ownerDocument-613eb639.js";import"./Portal-363c6d1a.js";import"./isHostComponent-73d6e646.js";import"./index-4da2af8c.js";import"./Paper-024c4ac3.js";import"./useId-f6e37502.js";import"./useControlled-1dfdd739.js";import"./usePreviousProps-c4e5492e.js";import"./Chip-f7e42c61.js";import"./extendSxProp-c6b156d7.js";import"./isMuiElement-de695f11.js";import"./index-891d46e9.js";import"./Menu-620abe77.js";import"./useTheme-e67ac9fd.js";import"./Modal-ffa4feac.js";import"./utils-4745b4c1.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./debounce-517eeb3c.js";import"./Grow-7e6ee5db.js";import"./List-9913b344.js";import"./ListContext-aeaca2aa.js";import"./GlobalStyles-cfaf7057.js";function b({maxWidth:e,...n}){return t(_,{sx:{"& .MuiAutocomplete-inputRoot":{py:1,maxWidth:{maxWidth:e},"&.MuiInputBase-sizeSmall":{py:1}},"& .MuiAutocomplete-tag":{my:.25,ml:0,mr:1}},...n})}b.displayName="LabellessAutocomplete";const i=u.memo(b);try{i.displayName="LabellessAutocomplete",i.__docgenInfo={description:`A specialized Autocomplete component without a visible label.
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
//# sourceMappingURL=LabellessAutocomplete.stories-e9b6ed2e.js.map
