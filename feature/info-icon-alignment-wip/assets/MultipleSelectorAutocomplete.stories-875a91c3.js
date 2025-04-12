import{j as o}from"./createTheme-9d33d081.js";import{r as C}from"./index-37ba2b57.js";import{D as g}from"./DialogForm-993be360.js";import{M as x,C as m}from"./CheckIcon-95c0984f.js";import{d as f}from"./CloseOutlined-4ec1b177.js";import{u as L,C as h}from"./index.esm-cb87e173.js";import{R as S}from"./roles-samples-a93137d3.js";import{D as I}from"./DialogContent-f30077c1.js";import{L as b}from"./ListItem-a5193e28.js";import{B as y}from"./Box-885f83e5.js";import{C as E}from"./Chip-60185db4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-dd1a14a8.js";import"./_commonjsHelpers-de833af9.js";import"./dialogTitleClasses-8c006bb5.js";import"./clsx.m-13724d00.js";import"./useThemeProps-424b9278.js";import"./styled-773bf9ba.js";import"./useTheme-4b7dbaa5.js";import"./Modal-5a0bf94e.js";import"./utils-f3108bcd.js";import"./inheritsLoose-c82a83d4.js";import"./index-4da2af8c.js";import"./TransitionGroupContext-373e5cc0.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./Portal-26a65eef.js";import"./isHostComponent-73d6e646.js";import"./Paper-c477ee22.js";import"./useId-f6e37502.js";import"./components-5351e114.js";import"./Autocomplete-0dd6bc70.js";import"./TextField-0a24ebc6.js";import"./isMuiElement-58afa5f8.js";import"./index-891d46e9.js";import"./Menu-bd54a2ef.js";import"./debounce-517eeb3c.js";import"./Grow-d4168f2f.js";import"./List-c63ad2f9.js";import"./ListContext-aeaca2aa.js";import"./useControlled-1dfdd739.js";import"./createSvgIcon-9b724386.js";import"./GlobalStyles-3802f466.js";import"./emotion-react.browser.esm-b32bcd94.js";import"./hoist-non-react-statics.cjs-b1c88361.js";import"./IconButton-764b4644.js";import"./ButtonBase-c97959ec.js";import"./assertThisInitialized-081f9914.js";import"./Popper-8cbc3137.js";import"./usePreviousProps-c4e5492e.js";import"./CircularProgress-972a8002.js";import"./jsx-runtime_commonjs-proxy-1d398f49.js";import"./listItemButtonClasses-5819db37.js";import"./extendSxProp-bfc063a6.js";const Do={title:"Multiple Selector Autocomplete"},k=()=>{const{control:c}=L();return o(g,{open:!0,children:o(I,{children:o(h,{name:"roles",control:c,render:({field:{value:i,onChange:u}})=>o(x,{id:"roles-selector",options:S,value:i,inputLabel:"Role",onChange:u,getOptionLabel:e=>e.role??e,renderOption:(e,{key:p,role:t})=>{const r=i==null?void 0:i.some(d=>d.key===p);return C.createElement(b,{...e,key:t,sx:{pointerEvents:r?"none":""}},r?o(m,{}):null,o(y,{sx:{marginLeft:r?"6px":"21px"},children:t}))},renderTags:(e,p)=>e.map((t,r)=>o(E,{variant:"outlined",size:"small",sx:M,avatar:o(m,{}),deleteIcon:o(f,{}),label:t==null?void 0:t.role,...p({index:r})}))})})})})},l=k.bind({}),M={border:"none",width:"350px",display:"flex",justifyContent:"space-between",".MuiChip-label":{mr:"auto"},"&:hover":{backgroundColor:"#2E3A5217","& .MuiChip-deleteIcon":{display:"block"}},"& .MuiChip-deleteIcon":{display:"none"}};var n,s,a;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=MultipleSelectorAutocomplete.stories-875a91c3.js.map
