import{j as t}from"./createTheme-d4c6d141.js";import{r as u}from"./index-37ba2b57.js";import{T as A,t as S}from"./theme-e1aaa86c.js";import{A as _}from"./Autocomplete-2807028c.js";import{B as v}from"./Box-11e4398c.js";import{T as f}from"./TextField-df0281ba.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-9c75dc50.js";import"./_commonjsHelpers-de833af9.js";import"./useId-f6e37502.js";import"./useEnhancedEffect-9d60ea74.js";import"./GlobalStyles-a3183719.js";import"./emotion-react.browser.esm-f969ea94.js";import"./colors-f8087473.js";import"./palette-48c6076f.js";import"./clsx.m-6cf3b989.js";import"./ClassNameGenerator-bd600f10.js";import"./useThemeProps-90078124.js";import"./createSvgIcon-473ccb66.js";import"./IconButton-c2813217.js";import"./ButtonBase-1b5192e9.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-5494d9cc.js";import"./TransitionGroupContext-f40e0036.js";import"./Popper-d07ae8ca.js";import"./ownerDocument-613eb639.js";import"./Portal-fc00eb8c.js";import"./isHostComponent-73d6e646.js";import"./index-4da2af8c.js";import"./Paper-dca8f967.js";import"./useControlled-1dfdd739.js";import"./usePreviousProps-c4e5492e.js";import"./Chip-52e0400d.js";import"./extendSxProp-acc1143e.js";import"./isMuiElement-de695f11.js";import"./index-891d46e9.js";import"./Menu-8a90c0e2.js";import"./useTheme-0ad13214.js";import"./Modal-9f2c2b11.js";import"./utils-0c060528.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./debounce-517eeb3c.js";import"./Grow-452ed02c.js";import"./List-59624ac0.js";import"./ListContext-aeaca2aa.js";import"./GlobalStyles-974ec2e0.js";function b({maxWidth:e,...p}){return t(_,{sx:{"& .MuiAutocomplete-inputRoot":{py:1,maxWidth:{maxWidth:e},"&.MuiInputBase-sizeSmall":{py:1}},"& .MuiAutocomplete-tag":{my:.25,ml:0,mr:1}},...p})}b.displayName="LabellessAutocomplete";const i=u.memo(b);try{i.displayName="LabellessAutocomplete",i.__docgenInfo={description:`A specialized Autocomplete component without a visible label.
Provides consistent styling for all autocomplete inputs across the application.
Particularly useful for forms where label space needs to be conserved.`,displayName:"LabellessAutocomplete",props:{maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"MaxWidth<string | number>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const h=["Option 1","Option 2","Option 3","Option 4","Option 5"],xe={title:"Autocompletes/Labelless Autocomplete",component:i,parameters:{layout:"centered"},decorators:[e=>t(A,{theme:S,children:t(v,{sx:{width:"600px",p:2},children:t(e,{})})})],argTypes:{options:{control:"object",description:"Array of options to display in the dropdown"},freeSolo:{control:"boolean",description:"Allow free text input that is not in the options list"},disabled:{control:"boolean",description:"Disable the component"},maxWidth:{control:{type:"number"},description:'Maximum width of the component (e.g., "300px", "50%")'},value:{control:"object",description:"Initial selected value(s)"},multiple:{control:"boolean",table:{disable:!0},description:"Allow multiple selections"},renderInput:{table:{disable:!0},description:"Render the input. Used to customize the TextField."},ref:{table:{disable:!0}}}},x=e=>{const[p,g]=u.useState(e.value||[]);return t(i,{...e,value:p,onChange:(n,y)=>{g(y)},getOptionLabel:n=>String(n)})},o={args:{options:h,multiple:!1,freeSolo:!1,disabled:!1,renderInput:e=>t(f,{...e})},render:x},r={args:{options:h,multiple:!0,freeSolo:!1,disabled:!1,value:["Option 1"],renderInput:e=>t(f,{...e})},render:x};var l,a,s;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const ge=["Default","MultipleSelection"];export{o as Default,r as MultipleSelection,ge as __namedExportsOrder,xe as default};
//# sourceMappingURL=LabellessAutocomplete.stories-3217b98f.js.map
