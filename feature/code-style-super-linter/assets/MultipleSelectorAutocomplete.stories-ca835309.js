import{j as o}from"./createTheme-e504d7a1.js";import{r as C}from"./index-37ba2b57.js";import{D as g}from"./DialogForm-065eb85a.js";import{M as x,C as m}from"./CheckIcon-67a5d6f6.js";import{d as f}from"./CloseOutlined-8a81468c.js";import{u as L,C as h}from"./index.esm-cb87e173.js";import{R as S}from"./roles-samples-a93137d3.js";import{D as I}from"./DialogContent-5bab94bb.js";import{L as b}from"./ListItem-fed0229b.js";import{B as y}from"./Box-3dbc4f20.js";import{C as E}from"./Chip-f7e42c61.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-9c75dc50.js";import"./_commonjsHelpers-de833af9.js";import"./dialogTitleClasses-c791e94b.js";import"./clsx.m-e8952646.js";import"./index-65a2139a.js";import"./useThemeProps-be56d1e2.js";import"./useTheme-e67ac9fd.js";import"./Modal-ffa4feac.js";import"./utils-4745b4c1.js";import"./inheritsLoose-5494d9cc.js";import"./index-4da2af8c.js";import"./TransitionGroupContext-0440df69.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./Portal-363c6d1a.js";import"./isHostComponent-73d6e646.js";import"./Paper-024c4ac3.js";import"./useId-f6e37502.js";import"./components-f1ef3223.js";import"./Autocomplete-114ba1e5.js";import"./TextField-53f19ca3.js";import"./isMuiElement-de695f11.js";import"./index-891d46e9.js";import"./Menu-620abe77.js";import"./debounce-517eeb3c.js";import"./Grow-7e6ee5db.js";import"./List-9913b344.js";import"./ListContext-aeaca2aa.js";import"./useControlled-1dfdd739.js";import"./createSvgIcon-23119704.js";import"./GlobalStyles-cfaf7057.js";import"./emotion-react.browser.esm-6b7ec201.js";import"./hoist-non-react-statics.cjs-b1c88361.js";import"./IconButton-ae1303d1.js";import"./ButtonBase-d7ff9540.js";import"./assertThisInitialized-081f9914.js";import"./Popper-0de88a38.js";import"./usePreviousProps-c4e5492e.js";import"./CircularProgress-0a03ae15.js";import"./jsx-runtime_commonjs-proxy-350e4ed0.js";import"./listItemButtonClasses-02314725.js";import"./extendSxProp-c6b156d7.js";const Do={title:"Multiple Selector Autocomplete"},k=()=>{const{control:c}=L();return o(g,{open:!0,children:o(I,{children:o(h,{name:"roles",control:c,render:({field:{value:i,onChange:u}})=>o(x,{id:"roles-selector",options:S,value:i,inputLabel:"Role",onChange:u,getOptionLabel:e=>e.role??e,renderOption:(e,{key:p,role:t})=>{const r=i==null?void 0:i.some(d=>d.key===p);return C.createElement(b,{...e,key:t,sx:{pointerEvents:r?"none":""}},r?o(m,{}):null,o(y,{sx:{marginLeft:r?"6px":"21px"},children:t}))},renderTags:(e,p)=>e.map((t,r)=>o(E,{variant:"outlined",size:"small",sx:M,avatar:o(m,{}),deleteIcon:o(f,{}),label:t==null?void 0:t.role,...p({index:r})}))})})})})},l=k.bind({}),M={border:"none",width:"350px",display:"flex",justifyContent:"space-between",".MuiChip-label":{mr:"auto"},"&:hover":{backgroundColor:"#2E3A5217","& .MuiChip-deleteIcon":{display:"block"}},"& .MuiChip-deleteIcon":{display:"none"}};var n,s,a;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
          }}>{role}</Box>
                  </ListItem>;
      }} renderTags={(value: Roles, getTagProps) => value.map((option: Role, index: number) => <Chip variant="outlined" size="small" sx={DEFAULT_CHIP_STYLE} avatar={<CheckIcon />} deleteIcon={<CloseOutlinedIcon />} label={option?.role} {...getTagProps({
        index
      })} />)} />} />
      </DialogContent>
    </DialogForm>;
}`,...(a=(s=l.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const To=["MultipleSelectorAutocompleteStory"];export{l as MultipleSelectorAutocompleteStory,To as __namedExportsOrder,Do as default};
//# sourceMappingURL=MultipleSelectorAutocomplete.stories-ca835309.js.map
