import{j as o}from"./createTheme-877270e5.js";import{r as C}from"./index-37ba2b57.js";import{D as g}from"./DialogForm-5110733b.js";import{M as x}from"./MultipleSelectorAutocomplete-a8af189b.js";import{C as m}from"./CheckIcon-e912f0a8.js";import{d as f}from"./CloseOutlined-778f5cf4.js";import{u as L,C as h}from"./index.esm-cb87e173.js";import{R as S}from"./roles-samples-a93137d3.js";import{D as I}from"./DialogContent-8c4d03f4.js";import{L as b}from"./ListItem-219d96aa.js";import{B as y}from"./Box-875ed2fd.js";import{C as E}from"./Chip-5383660e.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-9c75dc50.js";import"./_commonjsHelpers-de833af9.js";import"./dialogTitleClasses-64cbfad1.js";import"./clsx.m-30fbb483.js";import"./ClassNameGenerator-bd600f10.js";import"./useThemeProps-f3b34960.js";import"./useTheme-951578b7.js";import"./Modal-0f0476c1.js";import"./utils-c5c5ff4b.js";import"./inheritsLoose-5494d9cc.js";import"./index-4da2af8c.js";import"./TransitionGroupContext-f40e0036.js";import"./useEnhancedEffect-9d60ea74.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./Portal-2ef22c9d.js";import"./isHostComponent-73d6e646.js";import"./Paper-3bbc0c25.js";import"./useId-f6e37502.js";import"./components-4b3342e4.js";import"./Autocomplete-2dc83aaf.js";import"./TextField-769f4af4.js";import"./FormLabel-a9631dce.js";import"./isMuiElement-de695f11.js";import"./index-891d46e9.js";import"./Menu-95baf0e4.js";import"./debounce-517eeb3c.js";import"./Grow-676211cf.js";import"./List-8dec22e9.js";import"./ListContext-aeaca2aa.js";import"./useControlled-1dfdd739.js";import"./createSvgIcon-bf6c1b92.js";import"./GlobalStyles-eed42537.js";import"./GlobalStyles-1202dfb7.js";import"./emotion-react.browser.esm-39a29fa1.js";import"./Close-192a2a3f.js";import"./IconButton-457c30a1.js";import"./ButtonBase-db27d07e.js";import"./assertThisInitialized-081f9914.js";import"./Popper-c373d65a.js";import"./usePreviousProps-c4e5492e.js";import"./CircularProgress-d0666090.js";import"./jsx-runtime_commonjs-proxy-222b8ea0.js";import"./listItemButtonClasses-2c1a01fb.js";import"./extendSxProp-e9808817.js";const vo={title:"Multiple Selector Autocomplete"},k=()=>{const{control:c}=L();return o(g,{open:!0,children:o(I,{children:o(h,{name:"roles",control:c,render:({field:{value:i,onChange:u}})=>o(x,{id:"roles-selector",options:S,value:i,inputLabel:"Role",onChange:u,getOptionLabel:e=>e.role??e,renderOption:(e,{key:l,role:t})=>{const r=i==null?void 0:i.some(d=>d.key===l);return C.createElement(b,{...e,key:t,sx:{pointerEvents:r?"none":""}},r?o(m,{}):null,o(y,{sx:{marginLeft:r?"6px":"21px"},children:t}))},renderTags:(e,l)=>e.map((t,r)=>o(E,{variant:"outlined",size:"small",sx:M,avatar:o(m,{}),deleteIcon:o(f,{}),label:t==null?void 0:t.role,...l({index:r})}))})})})})},p=k.bind({}),M={border:"none",width:"350px",display:"flex",justifyContent:"space-between",".MuiChip-label":{mr:"auto"},"&:hover":{backgroundColor:"#2E3A5217","& .MuiChip-deleteIcon":{display:"block"}},"& .MuiChip-deleteIcon":{display:"none"}};var n,s,a;p.parameters={...p.parameters,docs:{...(n=p.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(a=(s=p.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const Fo=["MultipleSelectorAutocompleteStory"];export{p as MultipleSelectorAutocompleteStory,Fo as __namedExportsOrder,vo as default};
//# sourceMappingURL=MultipleSelectorAutocomplete.stories-59c7a7b1.js.map
