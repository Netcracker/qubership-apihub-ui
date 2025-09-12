import{j as t}from"./createTheme-1c3fdb4c.js";import{r as u}from"./index-37ba2b57.js";import{T as A,t as S}from"./theme-38c1ad02.js";import{A as _}from"./Autocomplete-f7714206.js";import{B as v}from"./Box-315038cd.js";import{T as f}from"./TextField-53e0aa4a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-9c75dc50.js";import"./_commonjsHelpers-de833af9.js";import"./useId-f6e37502.js";import"./useEnhancedEffect-9d60ea74.js";import"./GlobalStyles-4ceeac40.js";import"./emotion-react.browser.esm-687770fd.js";import"./palette-8c6d2233.js";import"./clsx.m-5aa26874.js";import"./ClassNameGenerator-bd600f10.js";import"./useThemeProps-8e56afb5.js";import"./createSvgIcon-18d721fa.js";import"./IconButton-ff073d65.js";import"./ButtonBase-0b48aa94.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-5494d9cc.js";import"./TransitionGroupContext-f40e0036.js";import"./Popper-1e5c7eaa.js";import"./ownerDocument-613eb639.js";import"./Portal-5d34a236.js";import"./isHostComponent-73d6e646.js";import"./index-4da2af8c.js";import"./Paper-3f5febe1.js";import"./useControlled-1dfdd739.js";import"./usePreviousProps-c4e5492e.js";import"./Chip-6a8b245e.js";import"./extendSxProp-1599c125.js";import"./isMuiElement-de695f11.js";import"./index-891d46e9.js";import"./Menu-6c264efb.js";import"./useTheme-a99309af.js";import"./Modal-15c27a48.js";import"./utils-360dcac8.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./debounce-517eeb3c.js";import"./Grow-89e5daf2.js";import"./List-a1b05c24.js";import"./ListContext-aeaca2aa.js";import"./GlobalStyles-7aea6e12.js";function b({maxWidth:e,...n}){return t(_,{sx:{"& .MuiAutocomplete-inputRoot":{py:1,maxWidth:{maxWidth:e},"&.MuiInputBase-sizeSmall":{py:1}},"& .MuiAutocomplete-tag":{my:.25,ml:0,mr:1}},...n})}b.displayName="LabellessAutocomplete";const i=u.memo(b);try{i.displayName="LabellessAutocomplete",i.__docgenInfo={description:`A specialized Autocomplete component without a visible label.
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
//# sourceMappingURL=LabellessAutocomplete.stories-4b6bc1db.js.map
