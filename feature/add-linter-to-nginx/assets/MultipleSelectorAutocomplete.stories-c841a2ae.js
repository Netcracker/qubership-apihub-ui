import{j as o}from"./createTheme-1c3fdb4c.js";import{r as C}from"./index-37ba2b57.js";import{D as g}from"./DialogForm-0677080c.js";import{M as x,C as m}from"./CheckIcon-de5521e7.js";import{d as f}from"./CloseOutlined-b96c9b00.js";import{u as L,C as h}from"./index.esm-cb87e173.js";import{R as S}from"./roles-samples-a93137d3.js";import{D as I}from"./DialogContent-8f690a13.js";import{L as b}from"./ListItem-9d39b76e.js";import{B as y}from"./Box-315038cd.js";import{C as E}from"./Chip-6a8b245e.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-9c75dc50.js";import"./_commonjsHelpers-de833af9.js";import"./dialogTitleClasses-b9dc869d.js";import"./clsx.m-5aa26874.js";import"./ClassNameGenerator-bd600f10.js";import"./useThemeProps-8e56afb5.js";import"./useTheme-a99309af.js";import"./Modal-15c27a48.js";import"./utils-360dcac8.js";import"./inheritsLoose-5494d9cc.js";import"./index-4da2af8c.js";import"./TransitionGroupContext-f40e0036.js";import"./useEnhancedEffect-9d60ea74.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./Portal-5d34a236.js";import"./isHostComponent-73d6e646.js";import"./Paper-3f5febe1.js";import"./useId-f6e37502.js";import"./components-d4b45333.js";import"./Autocomplete-f7714206.js";import"./TextField-53e0aa4a.js";import"./isMuiElement-de695f11.js";import"./index-891d46e9.js";import"./Menu-6c264efb.js";import"./debounce-517eeb3c.js";import"./Grow-89e5daf2.js";import"./List-a1b05c24.js";import"./ListContext-aeaca2aa.js";import"./useControlled-1dfdd739.js";import"./createSvgIcon-18d721fa.js";import"./GlobalStyles-7aea6e12.js";import"./GlobalStyles-4ceeac40.js";import"./emotion-react.browser.esm-687770fd.js";import"./IconButton-ff073d65.js";import"./ButtonBase-0b48aa94.js";import"./assertThisInitialized-081f9914.js";import"./Popper-1e5c7eaa.js";import"./usePreviousProps-c4e5492e.js";import"./CircularProgress-0eca2745.js";import"./jsx-runtime_commonjs-proxy-2f62dfa9.js";import"./listItemButtonClasses-8c4b5582.js";import"./extendSxProp-1599c125.js";const To={title:"Multiple Selector Autocomplete"},k=()=>{const{control:c}=L();return o(g,{open:!0,children:o(I,{children:o(h,{name:"roles",control:c,render:({field:{value:i,onChange:u}})=>o(x,{id:"roles-selector",options:S,value:i,inputLabel:"Role",onChange:u,getOptionLabel:e=>e.role??e,renderOption:(e,{key:p,role:t})=>{const r=i==null?void 0:i.some(d=>d.key===p);return C.createElement(b,{...e,key:t,sx:{pointerEvents:r?"none":""}},r?o(m,{}):null,o(y,{sx:{marginLeft:r?"6px":"21px"},children:t}))},renderTags:(e,p)=>e.map((t,r)=>o(E,{variant:"outlined",size:"small",sx:M,avatar:o(m,{}),deleteIcon:o(f,{}),label:t==null?void 0:t.role,...p({index:r})}))})})})})},l=k.bind({}),M={border:"none",width:"350px",display:"flex",justifyContent:"space-between",".MuiChip-label":{mr:"auto"},"&:hover":{backgroundColor:"#2E3A5217","& .MuiChip-deleteIcon":{display:"block"}},"& .MuiChip-deleteIcon":{display:"none"}};var n,s,a;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const {
    control
  } = useForm();
  return <DialogForm open={true}>
      <DialogContent>
        <Controller name="roles" control={control} render={({
        field: {
          value,
          onChange
        }
      }) => <MultipleSelectorAutocomplete<Role> id="roles-selector" options={ROLES_LIST} value={value} inputLabel="Role" onChange={onChange} getOptionLabel={option => option.role ?? option} renderOption={(props, {
        key,
        role
      }) => {
        const selected = (value as Role[])?.some(role => role.key === key);
        return <ListItem {...props} key={role} sx={{
          pointerEvents: selected ? 'none' : ''
        }}>
                    {selected ? <CheckIcon /> : null}
                    <Box sx={{
            marginLeft: selected ? '6px' : '21px'
          }}>
                      {role}
                    </Box>
                  </ListItem>;
      }} renderTags={(value: Roles, getTagProps) => value.map((option: Role, index: number) => <Chip variant="outlined" size="small" sx={DEFAULT_CHIP_STYLE} avatar={<CheckIcon />} deleteIcon={<CloseOutlinedIcon />} label={option?.role} {...getTagProps({
        index
      })} />)} />} />
      </DialogContent>
    </DialogForm>;
}`,...(a=(s=l.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const _o=["MultipleSelectorAutocompleteStory"];export{l as MultipleSelectorAutocompleteStory,_o as __namedExportsOrder,To as default};
//# sourceMappingURL=MultipleSelectorAutocomplete.stories-c841a2ae.js.map
