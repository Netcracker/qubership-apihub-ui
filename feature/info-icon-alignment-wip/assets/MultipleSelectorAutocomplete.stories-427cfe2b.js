import{j as o}from"./createTheme-787b692e.js";import{r as C}from"./index-37ba2b57.js";import{D as g}from"./DialogForm-f0c34c79.js";import{M as x,C as m}from"./CheckIcon-1b7e4718.js";import{d as f}from"./CloseOutlined-fa4fcb96.js";import{u as L,C as h}from"./index.esm-cb87e173.js";import{R as S}from"./roles-samples-a93137d3.js";import{D as I}from"./DialogContent-780b28b4.js";import{L as b}from"./ListItem-c4095c61.js";import{B as y}from"./Box-bdeddcd1.js";import{C as E}from"./Chip-b19c6aa6.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-dd1a14a8.js";import"./_commonjsHelpers-de833af9.js";import"./dialogTitleClasses-3c51afa0.js";import"./clsx.m-dd617a4f.js";import"./useThemeProps-674e9d1b.js";import"./styled-3db2896f.js";import"./useTheme-1088ed09.js";import"./Modal-68bc36cd.js";import"./utils-18cbb23d.js";import"./inheritsLoose-c82a83d4.js";import"./index-4da2af8c.js";import"./TransitionGroupContext-373e5cc0.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./Portal-ad787585.js";import"./Paper-0986b06f.js";import"./useId-f6e37502.js";import"./components-39576445.js";import"./Autocomplete-186cc73c.js";import"./TextField-b0915ae5.js";import"./isMuiElement-58afa5f8.js";import"./index-891d46e9.js";import"./Menu-ac994c03.js";import"./debounce-517eeb3c.js";import"./Grow-74e0b070.js";import"./ListContext-aeaca2aa.js";import"./useControlled-1dfdd739.js";import"./createSvgIcon-6b7ea3ba.js";import"./GlobalStyles-72a9724a.js";import"./emotion-react.browser.esm-433dd76a.js";import"./hoist-non-react-statics.cjs-b1c88361.js";import"./IconButton-48f24ffb.js";import"./ButtonBase-20761a48.js";import"./assertThisInitialized-081f9914.js";import"./Popper-96ea1358.js";import"./usePreviousProps-c4e5492e.js";import"./CircularProgress-35a59a14.js";import"./jsx-runtime_commonjs-proxy-744b9f6a.js";import"./listItemButtonClasses-ac08b0a3.js";import"./extendSxProp-7474566f.js";const Mo={title:"Multiple Selector Autocomplete"},k=()=>{const{control:c}=L();return o(g,{open:!0,children:o(I,{children:o(h,{name:"roles",control:c,render:({field:{value:i,onChange:u}})=>o(x,{id:"roles-selector",options:S,value:i,inputLabel:"Role",onChange:u,getOptionLabel:e=>e.role??e,renderOption:(e,{key:p,role:t})=>{const r=i==null?void 0:i.some(d=>d.key===p);return C.createElement(b,{...e,key:t,sx:{pointerEvents:r?"none":""}},r?o(m,{}):null,o(y,{sx:{marginLeft:r?"6px":"21px"},children:t}))},renderTags:(e,p)=>e.map((t,r)=>o(E,{variant:"outlined",size:"small",sx:M,avatar:o(m,{}),deleteIcon:o(f,{}),label:t==null?void 0:t.role,...p({index:r})}))})})})})},l=k.bind({}),M={border:"none",width:"350px",display:"flex",justifyContent:"space-between",".MuiChip-label":{mr:"auto"},"&:hover":{backgroundColor:"#2E3A5217","& .MuiChip-deleteIcon":{display:"block"}},"& .MuiChip-deleteIcon":{display:"none"}};var n,s,a;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=MultipleSelectorAutocomplete.stories-427cfe2b.js.map
