import{j as o}from"./createTheme-0ee58ceb.js";import{r as C}from"./index-37ba2b57.js";import{D as g}from"./DialogForm-49605307.js";import{M as x,C as m}from"./CheckIcon-0512b80f.js";import{d as f}from"./CloseOutlined-3b3bbc8a.js";import{u as L,C as h}from"./index.esm-cb87e173.js";import{R as S}from"./roles-samples-a93137d3.js";import{D as I}from"./DialogContent-c739c09b.js";import{L as b}from"./ListItem-f97e26fe.js";import{B as y}from"./Box-b4966c9a.js";import{C as E}from"./Chip-7a90fc08.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-dd1a14a8.js";import"./_commonjsHelpers-de833af9.js";import"./dialogTitleClasses-7aa81220.js";import"./clsx.m-bc31e435.js";import"./useThemeProps-af595d22.js";import"./styled-63e5ab44.js";import"./useTheme-6dc18478.js";import"./Modal-8a00b656.js";import"./utils-8f64eed4.js";import"./inheritsLoose-c82a83d4.js";import"./index-4da2af8c.js";import"./TransitionGroupContext-373e5cc0.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./Portal-880ae769.js";import"./Paper-c3e6ed30.js";import"./useId-f6e37502.js";import"./components-1031646d.js";import"./Autocomplete-fc813c36.js";import"./TextField-892e620e.js";import"./isMuiElement-58afa5f8.js";import"./index-891d46e9.js";import"./Menu-ad22bfb8.js";import"./debounce-517eeb3c.js";import"./Grow-b04d1a4c.js";import"./ListContext-aeaca2aa.js";import"./useControlled-1dfdd739.js";import"./createSvgIcon-59613792.js";import"./GlobalStyles-9edec0e5.js";import"./emotion-react.browser.esm-e1f4c3b5.js";import"./hoist-non-react-statics.cjs-b1c88361.js";import"./IconButton-4002dfdc.js";import"./ButtonBase-11c344bc.js";import"./assertThisInitialized-081f9914.js";import"./Popper-73e09355.js";import"./usePreviousProps-c4e5492e.js";import"./CircularProgress-d188cfe7.js";import"./jsx-runtime_commonjs-proxy-be29ac44.js";import"./listItemButtonClasses-ec8f8e5b.js";import"./extendSxProp-083dfeeb.js";const Mo={title:"Multiple Selector Autocomplete"},k=()=>{const{control:c}=L();return o(g,{open:!0,children:o(I,{children:o(h,{name:"roles",control:c,render:({field:{value:i,onChange:u}})=>o(x,{id:"roles-selector",options:S,value:i,inputLabel:"Role",onChange:u,getOptionLabel:e=>e.role??e,renderOption:(e,{key:p,role:t})=>{const r=i==null?void 0:i.some(d=>d.key===p);return C.createElement(b,{...e,key:t,sx:{pointerEvents:r?"none":""}},r?o(m,{}):null,o(y,{sx:{marginLeft:r?"6px":"21px"},children:t}))},renderTags:(e,p)=>e.map((t,r)=>o(E,{variant:"outlined",size:"small",sx:M,avatar:o(m,{}),deleteIcon:o(f,{}),label:t==null?void 0:t.role,...p({index:r})}))})})})})},l=k.bind({}),M={border:"none",width:"350px",display:"flex",justifyContent:"space-between",".MuiChip-label":{mr:"auto"},"&:hover":{backgroundColor:"#2E3A5217","& .MuiChip-deleteIcon":{display:"block"}},"& .MuiChip-deleteIcon":{display:"none"}};var n,s,a;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(a=(s=l.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const Ao=["MultipleSelectorAutocompleteStory"];export{l as MultipleSelectorAutocompleteStory,Ao as __namedExportsOrder,Mo as default};
//# sourceMappingURL=MultipleSelectorAutocomplete.stories-6d98c6e2.js.map
