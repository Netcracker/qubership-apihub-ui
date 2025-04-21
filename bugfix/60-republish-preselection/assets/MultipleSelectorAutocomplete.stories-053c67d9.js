import{j as o}from"./createTheme-2be5382e.js";import{r as C}from"./index-37ba2b57.js";import{D as g}from"./DialogForm-6b21ad38.js";import{M as x,C as m}from"./CheckIcon-0112c06a.js";import{d as f}from"./CloseOutlined-b1e9a8a4.js";import{u as L,C as h}from"./index.esm-cb87e173.js";import{R as S}from"./roles-samples-a93137d3.js";import{D as I}from"./DialogContent-e290cf6d.js";import{L as b}from"./ListItem-44b91329.js";import{B as y}from"./Box-e8b5ea0e.js";import{C as E}from"./Chip-b2c0f6a9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-9c75dc50.js";import"./_commonjsHelpers-de833af9.js";import"./dialogTitleClasses-5e91ad03.js";import"./clsx.m-fbb7acd1.js";import"./index-d6486eac.js";import"./useThemeProps-1a9e8365.js";import"./useTheme-38477845.js";import"./Modal-2f13869f.js";import"./utils-022c2917.js";import"./inheritsLoose-5494d9cc.js";import"./index-4da2af8c.js";import"./TransitionGroupContext-0440df69.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./Portal-a494baed.js";import"./isHostComponent-73d6e646.js";import"./Paper-d6846ddd.js";import"./useId-f6e37502.js";import"./components-1f22974e.js";import"./Autocomplete-0a7cda96.js";import"./TextField-b6ae8c39.js";import"./isMuiElement-de695f11.js";import"./index-891d46e9.js";import"./Menu-9b1b5f42.js";import"./debounce-517eeb3c.js";import"./Grow-b5ef96af.js";import"./List-03842987.js";import"./ListContext-aeaca2aa.js";import"./useControlled-1dfdd739.js";import"./createSvgIcon-953c4aea.js";import"./GlobalStyles-f939a1d9.js";import"./emotion-react.browser.esm-53e371c8.js";import"./hoist-non-react-statics.cjs-b1c88361.js";import"./IconButton-73dcaec6.js";import"./ButtonBase-2cace522.js";import"./assertThisInitialized-081f9914.js";import"./Popper-ff4c5860.js";import"./usePreviousProps-c4e5492e.js";import"./CircularProgress-71fb59b5.js";import"./jsx-runtime_commonjs-proxy-479418d2.js";import"./listItemButtonClasses-d1506f35.js";import"./extendSxProp-85d53d4f.js";const Do={title:"Multiple Selector Autocomplete"},k=()=>{const{control:c}=L();return o(g,{open:!0,children:o(I,{children:o(h,{name:"roles",control:c,render:({field:{value:i,onChange:u}})=>o(x,{id:"roles-selector",options:S,value:i,inputLabel:"Role",onChange:u,getOptionLabel:e=>e.role??e,renderOption:(e,{key:p,role:t})=>{const r=i==null?void 0:i.some(d=>d.key===p);return C.createElement(b,{...e,key:t,sx:{pointerEvents:r?"none":""}},r?o(m,{}):null,o(y,{sx:{marginLeft:r?"6px":"21px"},children:t}))},renderTags:(e,p)=>e.map((t,r)=>o(E,{variant:"outlined",size:"small",sx:M,avatar:o(m,{}),deleteIcon:o(f,{}),label:t==null?void 0:t.role,...p({index:r})}))})})})})},l=k.bind({}),M={border:"none",width:"350px",display:"flex",justifyContent:"space-between",".MuiChip-label":{mr:"auto"},"&:hover":{backgroundColor:"#2E3A5217","& .MuiChip-deleteIcon":{display:"block"}},"& .MuiChip-deleteIcon":{display:"none"}};var n,s,a;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(a=(s=l.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const To=["MultipleSelectorAutocompleteStory"];export{l as MultipleSelectorAutocompleteStory,To as __namedExportsOrder,Do as default};
//# sourceMappingURL=MultipleSelectorAutocomplete.stories-053c67d9.js.map
