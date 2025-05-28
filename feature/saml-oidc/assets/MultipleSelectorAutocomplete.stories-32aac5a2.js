import{j as o}from"./createTheme-c79a82be.js";import{r as C}from"./index-76fb7be0.js";import{D as g}from"./DialogForm-acbaa36e.js";import{M as x,C as m}from"./CheckIcon-c91087e1.js";import{d as f}from"./CloseOutlined-ab864af1.js";import{u as L,C as h}from"./index.esm-709914ac.js";import{R as S}from"./roles-samples-a93137d3.js";import{D as I}from"./DialogContent-0f01fbbe.js";import{L as b}from"./ListItem-276cade0.js";import{B as y}from"./Box-5be9d6da.js";import{C as E}from"./Chip-a169d9d4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-aa53f5e3.js";import"./_commonjsHelpers-de833af9.js";import"./dialogTitleClasses-959e2385.js";import"./clsx.m-e92c351d.js";import"./index-71e0858c.js";import"./useThemeProps-aa843650.js";import"./useTheme-11ba6946.js";import"./Modal-89faf1a9.js";import"./utils-a355cc51.js";import"./inheritsLoose-5494d9cc.js";import"./index-d3ea75b5.js";import"./TransitionGroupContext-48398eec.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./Portal-18509f2e.js";import"./isHostComponent-73d6e646.js";import"./Paper-c822a8c8.js";import"./useId-a47493a3.js";import"./components-38941026.js";import"./Autocomplete-b6fddf03.js";import"./TextField-b259ab15.js";import"./isMuiElement-bce4c331.js";import"./index-891d46e9.js";import"./Menu-b4cdd8f7.js";import"./debounce-517eeb3c.js";import"./Grow-a4fcaa6b.js";import"./List-d5d9a26a.js";import"./ListContext-e9aee161.js";import"./useControlled-3e5b2082.js";import"./createSvgIcon-b791e64c.js";import"./GlobalStyles-8bce6ff0.js";import"./emotion-react.browser.esm-b0f55332.js";import"./hoist-non-react-statics.cjs-b1c88361.js";import"./IconButton-e8de8077.js";import"./ButtonBase-05fdfea8.js";import"./assertThisInitialized-081f9914.js";import"./Popper-85045249.js";import"./usePreviousProps-d722ff4c.js";import"./CircularProgress-81e0b845.js";import"./jsx-runtime_commonjs-proxy-9a1bbb33.js";import"./listItemButtonClasses-336ef491.js";import"./extendSxProp-aea61bfb.js";const Do={title:"Multiple Selector Autocomplete"},k=()=>{const{control:c}=L();return o(g,{open:!0,children:o(I,{children:o(h,{name:"roles",control:c,render:({field:{value:i,onChange:u}})=>o(x,{id:"roles-selector",options:S,value:i,inputLabel:"Role",onChange:u,getOptionLabel:e=>e.role??e,renderOption:(e,{key:p,role:t})=>{const r=i==null?void 0:i.some(d=>d.key===p);return C.createElement(b,{...e,key:t,sx:{pointerEvents:r?"none":""}},r?o(m,{}):null,o(y,{sx:{marginLeft:r?"6px":"21px"},children:t}))},renderTags:(e,p)=>e.map((t,r)=>o(E,{variant:"outlined",size:"small",sx:M,avatar:o(m,{}),deleteIcon:o(f,{}),label:t==null?void 0:t.role,...p({index:r})}))})})})})},l=k.bind({}),M={border:"none",width:"350px",display:"flex",justifyContent:"space-between",".MuiChip-label":{mr:"auto"},"&:hover":{backgroundColor:"#2E3A5217","& .MuiChip-deleteIcon":{display:"block"}},"& .MuiChip-deleteIcon":{display:"none"}};var n,s,a;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=MultipleSelectorAutocomplete.stories-32aac5a2.js.map
