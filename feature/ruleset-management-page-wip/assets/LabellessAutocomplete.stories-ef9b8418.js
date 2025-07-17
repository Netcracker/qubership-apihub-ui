import{j as t}from"./createTheme-1a4eaa7d.js";import{r as u}from"./index-37ba2b57.js";import{T as A,t as S}from"./theme-66a1f8db.js";import{A as _}from"./Autocomplete-154ca838.js";import{B as v}from"./Box-b2cfc4a3.js";import{T as f}from"./TextField-602692c9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-9c75dc50.js";import"./_commonjsHelpers-de833af9.js";import"./palette-8c6d2233.js";import"./colors-f1dae8af.js";import"./clsx.m-1b02dc9e.js";import"./index-1bdc7346.js";import"./useThemeProps-8ef67cb9.js";import"./createSvgIcon-2db0a94c.js";import"./IconButton-5b25e58c.js";import"./ButtonBase-b3aed2fe.js";import"./emotion-react.browser.esm-5b9d3e5b.js";import"./hoist-non-react-statics.cjs-b1c88361.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-5494d9cc.js";import"./TransitionGroupContext-0440df69.js";import"./Popper-3e330eba.js";import"./ownerDocument-613eb639.js";import"./Portal-a8892b29.js";import"./isHostComponent-73d6e646.js";import"./index-4da2af8c.js";import"./Paper-0d6d8d46.js";import"./useId-f6e37502.js";import"./useControlled-1dfdd739.js";import"./usePreviousProps-c4e5492e.js";import"./Chip-0d487cf4.js";import"./extendSxProp-287b071a.js";import"./isMuiElement-de695f11.js";import"./index-891d46e9.js";import"./Menu-7e0057a3.js";import"./useTheme-ae4b0b2e.js";import"./Modal-6c4f247b.js";import"./utils-cdc9c8cb.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./debounce-517eeb3c.js";import"./Grow-bf76b499.js";import"./List-af36be1a.js";import"./ListContext-aeaca2aa.js";import"./GlobalStyles-3b0a9260.js";function b({maxWidth:e,...n}){return t(_,{sx:{"& .MuiAutocomplete-inputRoot":{py:1,maxWidth:{maxWidth:e},"&.MuiInputBase-sizeSmall":{py:1}},"& .MuiAutocomplete-tag":{my:.25,ml:0,mr:1}},...n})}b.displayName="LabellessAutocomplete";const i=u.memo(b);try{i.displayName="LabellessAutocomplete",i.__docgenInfo={description:`A specialized Autocomplete component without a visible label.
Provides consistent styling for all autocomplete inputs across the application.
Particularly useful for forms where label space needs to be conserved.`,displayName:"LabellessAutocomplete",props:{maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"MaxWidth<string | number>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const h=["Option 1","Option 2","Option 3","Option 4","Option 5"],he={title:"Autocompletes/Labelless Autocomplete",component:i,parameters:{layout:"centered"},decorators:[e=>t(A,{theme:S,children:t(v,{sx:{width:"600px",p:2},children:t(e,{})})})],argTypes:{options:{control:"object",description:"Array of options to display in the dropdown"},freeSolo:{control:"boolean",description:"Allow free text input that is not in the options list"},disabled:{control:"boolean",description:"Disable the component"},maxWidth:{control:{type:"number"},description:'Maximum width of the component (e.g., "300px", "50%")'},value:{control:"object",description:"Initial selected value(s)"},multiple:{control:"boolean",table:{disable:!0},description:"Allow multiple selections"},renderInput:{table:{disable:!0},description:"Render the input. Used to customize the TextField."},ref:{table:{disable:!0}}}},x=e=>{const[n,g]=u.useState(e.value||[]);return t(i,{...e,value:n,onChange:(p,y)=>{g(y)},getOptionLabel:p=>String(p)})},o={args:{options:h,multiple:!1,freeSolo:!1,disabled:!1,renderInput:e=>t(f,{...e})},render:x},r={args:{options:h,multiple:!0,freeSolo:!1,disabled:!1,value:["Option 1"],renderInput:e=>t(f,{...e})},render:x};var l,a,s;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const xe=["Default","MultipleSelection"];export{o as Default,r as MultipleSelection,xe as __namedExportsOrder,he as default};
//# sourceMappingURL=LabellessAutocomplete.stories-ef9b8418.js.map
