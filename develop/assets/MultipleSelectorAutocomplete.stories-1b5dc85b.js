import{j as o}from"./createTheme-504c4016.js";import{r as C}from"./index-37ba2b57.js";import{D as g}from"./DialogForm-f5c571b6.js";import{M as x,C as m}from"./CheckIcon-8c7a6744.js";import{d as f}from"./CloseOutlined-4e4c2b3d.js";import{u as L,C as h}from"./index.esm-cb87e173.js";import{R as S}from"./roles-samples-a93137d3.js";import{D as I}from"./DialogContent-2b4604a7.js";import{L as b}from"./ListItem-c5277d67.js";import{B as y}from"./Box-b4865c4d.js";import{C as E}from"./Chip-24d8cca4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-9c75dc50.js";import"./_commonjsHelpers-de833af9.js";import"./dialogTitleClasses-3f9320af.js";import"./clsx.m-864840f0.js";import"./index-e70dac86.js";import"./useThemeProps-1d0dc8c6.js";import"./useTheme-31e4dfc6.js";import"./Modal-e0e56efd.js";import"./utils-8e57d5d7.js";import"./inheritsLoose-5494d9cc.js";import"./index-4da2af8c.js";import"./TransitionGroupContext-0440df69.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./Portal-e2302e7a.js";import"./Paper-fa854739.js";import"./useId-f6e37502.js";import"./components-8737c139.js";import"./Autocomplete-7cbb6032.js";import"./TextField-bb28a7e0.js";import"./isMuiElement-de695f11.js";import"./index-891d46e9.js";import"./Menu-1162ecf6.js";import"./debounce-517eeb3c.js";import"./Grow-31a2692c.js";import"./ListContext-aeaca2aa.js";import"./useControlled-1dfdd739.js";import"./createSvgIcon-053beb95.js";import"./GlobalStyles-c1e851ed.js";import"./emotion-react.browser.esm-8e7c7e34.js";import"./hoist-non-react-statics.cjs-b1c88361.js";import"./IconButton-c55f7c7e.js";import"./ButtonBase-b274dd56.js";import"./assertThisInitialized-081f9914.js";import"./Popper-ed4c17cc.js";import"./usePreviousProps-c4e5492e.js";import"./CircularProgress-a944490e.js";import"./jsx-runtime_commonjs-proxy-c837e089.js";import"./listItemButtonClasses-f09a3246.js";import"./extendSxProp-b89c4ee2.js";const Mo={title:"Multiple Selector Autocomplete"},k=()=>{const{control:c}=L();return o(g,{open:!0,children:o(I,{children:o(h,{name:"roles",control:c,render:({field:{value:i,onChange:u}})=>o(x,{id:"roles-selector",options:S,value:i,inputLabel:"Role",onChange:u,getOptionLabel:e=>e.role??e,renderOption:(e,{key:p,role:t})=>{const r=i==null?void 0:i.some(d=>d.key===p);return C.createElement(b,{...e,key:t,sx:{pointerEvents:r?"none":""}},r?o(m,{}):null,o(y,{sx:{marginLeft:r?"6px":"21px"},children:t}))},renderTags:(e,p)=>e.map((t,r)=>o(E,{variant:"outlined",size:"small",sx:M,avatar:o(m,{}),deleteIcon:o(f,{}),label:t==null?void 0:t.role,...p({index:r})}))})})})})},l=k.bind({}),M={border:"none",width:"350px",display:"flex",justifyContent:"space-between",".MuiChip-label":{mr:"auto"},"&:hover":{backgroundColor:"#2E3A5217","& .MuiChip-deleteIcon":{display:"block"}},"& .MuiChip-deleteIcon":{display:"none"}};var n,s,a;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=MultipleSelectorAutocomplete.stories-1b5dc85b.js.map
