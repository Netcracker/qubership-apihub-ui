import{j as o}from"./createTheme-3f433a46.js";import{r as C}from"./index-37ba2b57.js";import{d as g}from"./CloseOutlined-073bf855.js";import{u as x,C as f}from"./index.esm-cb87e173.js";import{D as L}from"./DialogForm-12b40e99.js";import{M as h,C as m}from"./CheckIcon-ea56ca46.js";import{R as S}from"./roles-samples-a93137d3.js";import{D as I}from"./DialogContent-adf1f79c.js";import{L as b}from"./ListItem-9685675c.js";import{B as y}from"./Box-56201235.js";import{C as E}from"./Chip-67104dc4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-9c75dc50.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime_commonjs-proxy-28857837.js";import"./createSvgIcon-5350b5dc.js";import"./styled-ebc30f5f.js";import"./index-420fbc32.js";import"./useThemeProps-6f68535c.js";import"./createChainedFunction-0bab83cf.js";import"./isMuiElement-de695f11.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./TransitionGroupContext-0440df69.js";import"./debounce-517eeb3c.js";import"./useId-f6e37502.js";import"./useControlled-1dfdd739.js";import"./dialogTitleClasses-ff01d729.js";import"./useTheme-cfa4c669.js";import"./Modal-f2dc4c1a.js";import"./utils-cf3d21be.js";import"./inheritsLoose-5494d9cc.js";import"./index-4da2af8c.js";import"./Portal-6ea91f30.js";import"./isHostComponent-73d6e646.js";import"./Paper-260613e6.js";import"./components-0dca7c38.js";import"./Autocomplete-bd4ef415.js";import"./TextField-3c0250c8.js";import"./index-891d46e9.js";import"./Menu-982af263.js";import"./Grow-af5e6305.js";import"./List-4d5fe3c9.js";import"./ListContext-aeaca2aa.js";import"./GlobalStyles-f97aed57.js";import"./emotion-react.browser.esm-636148c3.js";import"./hoist-non-react-statics.cjs-b1c88361.js";import"./IconButton-8d89ebab.js";import"./ButtonBase-3c58fb83.js";import"./assertThisInitialized-081f9914.js";import"./Popper-85bfdec6.js";import"./usePreviousProps-c4e5492e.js";import"./CircularProgress-a7afda63.js";import"./listItemButtonClasses-bde5ad2f.js";import"./extendSxProp-1e23d004.js";const Do={title:"Multiple Selector Autocomplete"},k=()=>{const{control:c}=x();return o(L,{open:!0,children:o(I,{children:o(f,{name:"roles",control:c,render:({field:{value:i,onChange:u}})=>o(h,{id:"roles-selector",options:S,value:i,inputLabel:"Role",onChange:u,getOptionLabel:e=>e.role??e,renderOption:(e,{key:p,role:t})=>{const r=i==null?void 0:i.some(d=>d.key===p);return C.createElement(b,{...e,key:t,sx:{pointerEvents:r?"none":""}},r?o(m,{}):null,o(y,{sx:{marginLeft:r?"6px":"21px"},children:t}))},renderTags:(e,p)=>e.map((t,r)=>o(E,{variant:"outlined",size:"small",sx:M,avatar:o(m,{}),deleteIcon:o(g,{}),label:t==null?void 0:t.role,...p({index:r})}))})})})})},l=k.bind({}),M={border:"none",width:"350px",display:"flex",justifyContent:"space-between",".MuiChip-label":{mr:"auto"},"&:hover":{backgroundColor:"#2E3A5217","& .MuiChip-deleteIcon":{display:"block"}},"& .MuiChip-deleteIcon":{display:"none"}};var n,s,a;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=MultipleSelectorAutocomplete.stories-0b21021c.js.map
