import{j as o}from"./createTheme-8731d8a8.js";import{r as C}from"./index-37ba2b57.js";import{D as g}from"./DialogForm-0dd18b78.js";import{M as x,C as m}from"./CheckIcon-00233f2d.js";import{d as f}from"./CloseOutlined-b6b19b18.js";import{u as L,C as h}from"./index.esm-cb87e173.js";import{R as S}from"./roles-samples-a93137d3.js";import{D as I}from"./DialogContent-388df215.js";import{L as b}from"./ListItem-6cb75f9a.js";import{B as y}from"./Box-88903741.js";import{C as E}from"./Chip-5585afec.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-9c75dc50.js";import"./_commonjsHelpers-de833af9.js";import"./dialogTitleClasses-103221ef.js";import"./clsx.m-5e43a548.js";import"./index-0cc5c49e.js";import"./useThemeProps-5ce1434c.js";import"./useTheme-b03ab436.js";import"./Modal-708575bb.js";import"./utils-8f23d270.js";import"./inheritsLoose-5494d9cc.js";import"./index-4da2af8c.js";import"./TransitionGroupContext-0440df69.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./Portal-e19d23f5.js";import"./Paper-fb61ed68.js";import"./useId-f6e37502.js";import"./components-8b8998ed.js";import"./Autocomplete-b4d15d58.js";import"./TextField-f0c10f90.js";import"./isMuiElement-de695f11.js";import"./index-891d46e9.js";import"./Menu-aa2e4661.js";import"./debounce-517eeb3c.js";import"./Grow-1dc1e465.js";import"./ListContext-aeaca2aa.js";import"./useControlled-1dfdd739.js";import"./createSvgIcon-bed25c7f.js";import"./GlobalStyles-0b655ce1.js";import"./emotion-react.browser.esm-3c20310b.js";import"./hoist-non-react-statics.cjs-b1c88361.js";import"./IconButton-478fa64c.js";import"./ButtonBase-4f5f2753.js";import"./assertThisInitialized-081f9914.js";import"./Popper-28375950.js";import"./usePreviousProps-c4e5492e.js";import"./CircularProgress-dd30f0a3.js";import"./jsx-runtime_commonjs-proxy-cb2f2153.js";import"./listItemButtonClasses-53232159.js";import"./extendSxProp-033d7d5d.js";const Mo={title:"Multiple Selector Autocomplete"},k=()=>{const{control:c}=L();return o(g,{open:!0,children:o(I,{children:o(h,{name:"roles",control:c,render:({field:{value:i,onChange:u}})=>o(x,{id:"roles-selector",options:S,value:i,inputLabel:"Role",onChange:u,getOptionLabel:e=>e.role??e,renderOption:(e,{key:p,role:t})=>{const r=i==null?void 0:i.some(d=>d.key===p);return C.createElement(b,{...e,key:t,sx:{pointerEvents:r?"none":""}},r?o(m,{}):null,o(y,{sx:{marginLeft:r?"6px":"21px"},children:t}))},renderTags:(e,p)=>e.map((t,r)=>o(E,{variant:"outlined",size:"small",sx:M,avatar:o(m,{}),deleteIcon:o(f,{}),label:t==null?void 0:t.role,...p({index:r})}))})})})})},l=k.bind({}),M={border:"none",width:"350px",display:"flex",justifyContent:"space-between",".MuiChip-label":{mr:"auto"},"&:hover":{backgroundColor:"#2E3A5217","& .MuiChip-deleteIcon":{display:"block"}},"& .MuiChip-deleteIcon":{display:"none"}};var n,s,a;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=MultipleSelectorAutocomplete.stories-35bf9f0a.js.map
