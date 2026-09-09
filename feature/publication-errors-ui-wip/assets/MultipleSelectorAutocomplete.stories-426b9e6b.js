import{j as o}from"./createTheme-560b8518.js";import{r as C}from"./index-37ba2b57.js";import{D as g}from"./DialogForm-976c78c4.js";import{M as x}from"./MultipleSelectorAutocomplete-5de477a9.js";import{C as m}from"./CheckIcon-e8656cd6.js";import{d as f}from"./CloseOutlined-117bd76a.js";import{u as L,C as h}from"./index.esm-cb87e173.js";import{R as S}from"./roles-samples-a93137d3.js";import{D as I}from"./DialogContent-b9056e04.js";import{L as b}from"./ListItem-dfb360b4.js";import{B as y}from"./Box-fa29c8c3.js";import{C as E}from"./Chip-1cf2ba0a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-9c75dc50.js";import"./_commonjsHelpers-de833af9.js";import"./components-3a7e697a.js";import"./Autocomplete-6235109c.js";import"./clsx.m-a946ab38.js";import"./ClassNameGenerator-bd600f10.js";import"./useThemeProps-d2ce1f19.js";import"./TextField-1ce04eba.js";import"./FormLabel-3a1a5470.js";import"./isMuiElement-de695f11.js";import"./useId-f6e37502.js";import"./index-891d46e9.js";import"./Menu-34f648b3.js";import"./useTheme-1c7f7db7.js";import"./Modal-113ac7ce.js";import"./utils-06c1702b.js";import"./inheritsLoose-5494d9cc.js";import"./index-4da2af8c.js";import"./TransitionGroupContext-f40e0036.js";import"./useEnhancedEffect-9d60ea74.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./Portal-e6ead50f.js";import"./isHostComponent-73d6e646.js";import"./Paper-50a38f61.js";import"./debounce-517eeb3c.js";import"./Grow-71d2f155.js";import"./List-fcaa33c1.js";import"./ListContext-aeaca2aa.js";import"./useControlled-1dfdd739.js";import"./createSvgIcon-54d37d2a.js";import"./GlobalStyles-bcfe7cc2.js";import"./GlobalStyles-ed598bce.js";import"./emotion-react.browser.esm-8078eaae.js";import"./Close-fa27a32d.js";import"./IconButton-0ee41487.js";import"./ButtonBase-316ce960.js";import"./assertThisInitialized-081f9914.js";import"./Popper-50024f36.js";import"./usePreviousProps-c4e5492e.js";import"./CircularProgress-8a36d0bf.js";import"./jsx-runtime_commonjs-proxy-1a71e331.js";import"./listItemButtonClasses-57047300.js";import"./extendSxProp-94aef414.js";const Ro={title:"Multiple Selector Autocomplete"},k=()=>{const{control:c}=L();return o(g,{open:!0,children:o(I,{children:o(h,{name:"roles",control:c,render:({field:{value:i,onChange:u}})=>o(x,{id:"roles-selector",options:S,value:i,inputLabel:"Role",onChange:u,getOptionLabel:e=>e.role??e,renderOption:(e,{key:l,role:t})=>{const r=i==null?void 0:i.some(d=>d.key===l);return C.createElement(b,{...e,key:t,sx:{pointerEvents:r?"none":""}},r?o(m,{}):null,o(y,{sx:{marginLeft:r?"6px":"21px"},children:t}))},renderTags:(e,l)=>e.map((t,r)=>o(E,{variant:"outlined",size:"small",sx:M,avatar:o(m,{}),deleteIcon:o(f,{}),label:t==null?void 0:t.role,...l({index:r})}))})})})})},p=k.bind({}),M={border:"none",width:"350px",display:"flex",justifyContent:"space-between",".MuiChip-label":{mr:"auto"},"&:hover":{backgroundColor:"#2E3A5217","& .MuiChip-deleteIcon":{display:"block"}},"& .MuiChip-deleteIcon":{display:"none"}};var n,s,a;p.parameters={...p.parameters,docs:{...(n=p.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(a=(s=p.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const vo=["MultipleSelectorAutocompleteStory"];export{p as MultipleSelectorAutocompleteStory,vo as __namedExportsOrder,Ro as default};
//# sourceMappingURL=MultipleSelectorAutocomplete.stories-426b9e6b.js.map
