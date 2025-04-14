import{j as o}from"./createTheme-bb66475d.js";import{r as C}from"./index-37ba2b57.js";import{D as g}from"./DialogForm-5e9ad934.js";import{M as x,C as m}from"./CheckIcon-05de5331.js";import{d as f}from"./CloseOutlined-07a7403d.js";import{u as L,C as h}from"./index.esm-cb87e173.js";import{R as S}from"./roles-samples-a93137d3.js";import{D as I}from"./DialogContent-7b0b68a3.js";import{L as b}from"./ListItem-a891185a.js";import{B as y}from"./Box-e82d92bd.js";import{C as E}from"./Chip-d335f671.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-dd1a14a8.js";import"./_commonjsHelpers-de833af9.js";import"./dialogTitleClasses-520e46a6.js";import"./clsx.m-c5c12798.js";import"./useThemeProps-9c383963.js";import"./styled-d24885bf.js";import"./useTheme-69dbf4b8.js";import"./Modal-a560d03a.js";import"./utils-c13f95bd.js";import"./inheritsLoose-c82a83d4.js";import"./index-4da2af8c.js";import"./TransitionGroupContext-373e5cc0.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./Portal-b15cbc4f.js";import"./isHostComponent-73d6e646.js";import"./Paper-c4942946.js";import"./useId-f6e37502.js";import"./components-149b09a0.js";import"./Autocomplete-cfc4e9fb.js";import"./TextField-fd4192fc.js";import"./isMuiElement-58afa5f8.js";import"./index-891d46e9.js";import"./Menu-19a71792.js";import"./debounce-517eeb3c.js";import"./Grow-dfa030c0.js";import"./List-8c2a23fa.js";import"./ListContext-aeaca2aa.js";import"./useControlled-1dfdd739.js";import"./createSvgIcon-090a50dc.js";import"./GlobalStyles-147c50cf.js";import"./emotion-react.browser.esm-29cb6504.js";import"./hoist-non-react-statics.cjs-b1c88361.js";import"./IconButton-e76c9804.js";import"./ButtonBase-fcce9454.js";import"./assertThisInitialized-081f9914.js";import"./Popper-ca93d5a4.js";import"./usePreviousProps-c4e5492e.js";import"./CircularProgress-162704c1.js";import"./jsx-runtime_commonjs-proxy-7ee60010.js";import"./listItemButtonClasses-ef9e853c.js";import"./extendSxProp-d433c50a.js";const Do={title:"Multiple Selector Autocomplete"},k=()=>{const{control:c}=L();return o(g,{open:!0,children:o(I,{children:o(h,{name:"roles",control:c,render:({field:{value:i,onChange:u}})=>o(x,{id:"roles-selector",options:S,value:i,inputLabel:"Role",onChange:u,getOptionLabel:e=>e.role??e,renderOption:(e,{key:p,role:t})=>{const r=i==null?void 0:i.some(d=>d.key===p);return C.createElement(b,{...e,key:t,sx:{pointerEvents:r?"none":""}},r?o(m,{}):null,o(y,{sx:{marginLeft:r?"6px":"21px"},children:t}))},renderTags:(e,p)=>e.map((t,r)=>o(E,{variant:"outlined",size:"small",sx:M,avatar:o(m,{}),deleteIcon:o(f,{}),label:t==null?void 0:t.role,...p({index:r})}))})})})})},l=k.bind({}),M={border:"none",width:"350px",display:"flex",justifyContent:"space-between",".MuiChip-label":{mr:"auto"},"&:hover":{backgroundColor:"#2E3A5217","& .MuiChip-deleteIcon":{display:"block"}},"& .MuiChip-deleteIcon":{display:"none"}};var n,s,a;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=MultipleSelectorAutocomplete.stories-80932627.js.map
