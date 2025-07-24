import{j as o}from"./createTheme-1a4eaa7d.js";import{r as C}from"./index-37ba2b57.js";import{D as g}from"./DialogForm-e27d461f.js";import{M as x}from"./MultipleSelectorAutocomplete-f578e97d.js";import{C as m}from"./CheckIcon-f95ab8ea.js";import{d as f}from"./CloseOutlined-fe171424.js";import{u as L,C as h}from"./index.esm-cb87e173.js";import{R as S}from"./roles-samples-a93137d3.js";import{D as I}from"./DialogContent-fbae5ee8.js";import{L as b}from"./ListItem-87be8be4.js";import{B as y}from"./Box-b2cfc4a3.js";import{C as E}from"./Chip-0d487cf4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-9c75dc50.js";import"./_commonjsHelpers-de833af9.js";import"./dialogTitleClasses-74e43030.js";import"./clsx.m-1b02dc9e.js";import"./index-1bdc7346.js";import"./useThemeProps-8ef67cb9.js";import"./useTheme-ae4b0b2e.js";import"./Modal-6c4f247b.js";import"./utils-cdc9c8cb.js";import"./inheritsLoose-5494d9cc.js";import"./index-4da2af8c.js";import"./TransitionGroupContext-0440df69.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./Portal-a8892b29.js";import"./isHostComponent-73d6e646.js";import"./Paper-0d6d8d46.js";import"./useId-f6e37502.js";import"./components-acef7ffc.js";import"./Autocomplete-154ca838.js";import"./TextField-602692c9.js";import"./isMuiElement-de695f11.js";import"./index-891d46e9.js";import"./Menu-7e0057a3.js";import"./debounce-517eeb3c.js";import"./Grow-bf76b499.js";import"./List-af36be1a.js";import"./ListContext-aeaca2aa.js";import"./useControlled-1dfdd739.js";import"./createSvgIcon-2db0a94c.js";import"./GlobalStyles-3b0a9260.js";import"./emotion-react.browser.esm-5b9d3e5b.js";import"./hoist-non-react-statics.cjs-b1c88361.js";import"./IconButton-5b25e58c.js";import"./ButtonBase-b3aed2fe.js";import"./assertThisInitialized-081f9914.js";import"./Popper-3e330eba.js";import"./usePreviousProps-c4e5492e.js";import"./CircularProgress-f64d8f8b.js";import"./jsx-runtime_commonjs-proxy-3443f841.js";import"./listItemButtonClasses-177033ed.js";import"./extendSxProp-287b071a.js";const To={title:"Multiple Selector Autocomplete"},k=()=>{const{control:c}=L();return o(g,{open:!0,children:o(I,{children:o(h,{name:"roles",control:c,render:({field:{value:i,onChange:u}})=>o(x,{id:"roles-selector",options:S,value:i,inputLabel:"Role",onChange:u,getOptionLabel:e=>e.role??e,renderOption:(e,{key:p,role:t})=>{const r=i==null?void 0:i.some(d=>d.key===p);return C.createElement(b,{...e,key:t,sx:{pointerEvents:r?"none":""}},r?o(m,{}):null,o(y,{sx:{marginLeft:r?"6px":"21px"},children:t}))},renderTags:(e,p)=>e.map((t,r)=>o(E,{variant:"outlined",size:"small",sx:M,avatar:o(m,{}),deleteIcon:o(f,{}),label:t==null?void 0:t.role,...p({index:r})}))})})})})},l=k.bind({}),M={border:"none",width:"350px",display:"flex",justifyContent:"space-between",".MuiChip-label":{mr:"auto"},"&:hover":{backgroundColor:"#2E3A5217","& .MuiChip-deleteIcon":{display:"block"}},"& .MuiChip-deleteIcon":{display:"none"}};var n,s,a;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=MultipleSelectorAutocomplete.stories-b402210a.js.map
