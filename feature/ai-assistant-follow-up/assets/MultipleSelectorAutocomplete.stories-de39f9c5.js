import{j as o}from"./createTheme-2dc40177.js";import{r as C}from"./index-37ba2b57.js";import{D as g}from"./DialogForm-3f98d2ab.js";import{M as x}from"./MultipleSelectorAutocomplete-a298f906.js";import{C as m}from"./CheckIcon-3479c64c.js";import{d as f}from"./CloseOutlined-ee97653f.js";import{u as L,C as h}from"./index.esm-cb87e173.js";import{R as S}from"./roles-samples-a93137d3.js";import{D as I}from"./DialogContent-f0187615.js";import{L as b}from"./ListItem-fcc53393.js";import{B as y}from"./Box-7c65a994.js";import{C as E}from"./Chip-5dbebc33.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-9c75dc50.js";import"./_commonjsHelpers-de833af9.js";import"./dialogTitleClasses-dfe8fb22.js";import"./clsx.m-27495dc5.js";import"./ClassNameGenerator-bd600f10.js";import"./useThemeProps-2daf4b89.js";import"./useTheme-876c8ec2.js";import"./Modal-09910f57.js";import"./utils-d5ec3d19.js";import"./inheritsLoose-5494d9cc.js";import"./index-4da2af8c.js";import"./TransitionGroupContext-f40e0036.js";import"./useEnhancedEffect-9d60ea74.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./Portal-53aa351d.js";import"./isHostComponent-73d6e646.js";import"./Paper-be04f076.js";import"./useId-f6e37502.js";import"./components-2f82a982.js";import"./Autocomplete-865676d6.js";import"./TextField-894096d1.js";import"./FormLabel-7f355ea6.js";import"./isMuiElement-de695f11.js";import"./index-891d46e9.js";import"./Menu-46974ce6.js";import"./debounce-517eeb3c.js";import"./Grow-da80deec.js";import"./List-1d2510cc.js";import"./ListContext-aeaca2aa.js";import"./useControlled-1dfdd739.js";import"./createSvgIcon-802d8e00.js";import"./GlobalStyles-db9b3528.js";import"./GlobalStyles-05525fba.js";import"./emotion-react.browser.esm-0e1f5282.js";import"./Close-5331edaf.js";import"./IconButton-7af50444.js";import"./ButtonBase-ffde6543.js";import"./assertThisInitialized-081f9914.js";import"./Popper-a6c5a382.js";import"./usePreviousProps-c4e5492e.js";import"./CircularProgress-7958e83c.js";import"./jsx-runtime_commonjs-proxy-37799b96.js";import"./listItemButtonClasses-2798fbc0.js";import"./extendSxProp-338140f9.js";const vo={title:"Multiple Selector Autocomplete"},k=()=>{const{control:c}=L();return o(g,{open:!0,children:o(I,{children:o(h,{name:"roles",control:c,render:({field:{value:i,onChange:u}})=>o(x,{id:"roles-selector",options:S,value:i,inputLabel:"Role",onChange:u,getOptionLabel:e=>e.role??e,renderOption:(e,{key:l,role:t})=>{const r=i==null?void 0:i.some(d=>d.key===l);return C.createElement(b,{...e,key:t,sx:{pointerEvents:r?"none":""}},r?o(m,{}):null,o(y,{sx:{marginLeft:r?"6px":"21px"},children:t}))},renderTags:(e,l)=>e.map((t,r)=>o(E,{variant:"outlined",size:"small",sx:M,avatar:o(m,{}),deleteIcon:o(f,{}),label:t==null?void 0:t.role,...l({index:r})}))})})})})},p=k.bind({}),M={border:"none",width:"350px",display:"flex",justifyContent:"space-between",".MuiChip-label":{mr:"auto"},"&:hover":{backgroundColor:"#2E3A5217","& .MuiChip-deleteIcon":{display:"block"}},"& .MuiChip-deleteIcon":{display:"none"}};var n,s,a;p.parameters={...p.parameters,docs:{...(n=p.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(a=(s=p.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const Fo=["MultipleSelectorAutocompleteStory"];export{p as MultipleSelectorAutocompleteStory,Fo as __namedExportsOrder,vo as default};
//# sourceMappingURL=MultipleSelectorAutocomplete.stories-de39f9c5.js.map
