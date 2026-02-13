import{j as o}from"./createTheme-d4c6d141.js";import{r as C}from"./index-37ba2b57.js";import{D as g}from"./DialogForm-2cfd9c64.js";import{M as x}from"./MultipleSelectorAutocomplete-5984fe51.js";import{C as m}from"./CheckIcon-4d117dc6.js";import{d as f}from"./CloseOutlined-2fbe3e42.js";import{u as L,C as h}from"./index.esm-cb87e173.js";import{R as S}from"./roles-samples-a93137d3.js";import{D as I}from"./DialogContent-fd001b96.js";import{L as b}from"./ListItem-843e96c4.js";import{B as y}from"./Box-11e4398c.js";import{C as E}from"./Chip-52e0400d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-9c75dc50.js";import"./_commonjsHelpers-de833af9.js";import"./dialogTitleClasses-c8d9dbc5.js";import"./clsx.m-6cf3b989.js";import"./ClassNameGenerator-bd600f10.js";import"./useThemeProps-90078124.js";import"./useTheme-0ad13214.js";import"./Modal-9f2c2b11.js";import"./utils-0c060528.js";import"./inheritsLoose-5494d9cc.js";import"./index-4da2af8c.js";import"./TransitionGroupContext-f40e0036.js";import"./useEnhancedEffect-9d60ea74.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./Portal-fc00eb8c.js";import"./isHostComponent-73d6e646.js";import"./Paper-dca8f967.js";import"./useId-f6e37502.js";import"./components-a7f02bf2.js";import"./Autocomplete-2807028c.js";import"./TextField-df0281ba.js";import"./isMuiElement-de695f11.js";import"./index-891d46e9.js";import"./Menu-8a90c0e2.js";import"./debounce-517eeb3c.js";import"./Grow-452ed02c.js";import"./List-59624ac0.js";import"./ListContext-aeaca2aa.js";import"./useControlled-1dfdd739.js";import"./createSvgIcon-473ccb66.js";import"./GlobalStyles-974ec2e0.js";import"./GlobalStyles-a3183719.js";import"./emotion-react.browser.esm-f969ea94.js";import"./IconButton-c2813217.js";import"./ButtonBase-1b5192e9.js";import"./assertThisInitialized-081f9914.js";import"./Popper-d07ae8ca.js";import"./usePreviousProps-c4e5492e.js";import"./CircularProgress-76f8944a.js";import"./jsx-runtime_commonjs-proxy-74302a61.js";import"./listItemButtonClasses-dc30136d.js";import"./extendSxProp-acc1143e.js";const _o={title:"Multiple Selector Autocomplete"},k=()=>{const{control:c}=L();return o(g,{open:!0,children:o(I,{children:o(h,{name:"roles",control:c,render:({field:{value:i,onChange:u}})=>o(x,{id:"roles-selector",options:S,value:i,inputLabel:"Role",onChange:u,getOptionLabel:e=>e.role??e,renderOption:(e,{key:l,role:t})=>{const r=i==null?void 0:i.some(d=>d.key===l);return C.createElement(b,{...e,key:t,sx:{pointerEvents:r?"none":""}},r?o(m,{}):null,o(y,{sx:{marginLeft:r?"6px":"21px"},children:t}))},renderTags:(e,l)=>e.map((t,r)=>o(E,{variant:"outlined",size:"small",sx:M,avatar:o(m,{}),deleteIcon:o(f,{}),label:t==null?void 0:t.role,...l({index:r})}))})})})})},p=k.bind({}),M={border:"none",width:"350px",display:"flex",justifyContent:"space-between",".MuiChip-label":{mr:"auto"},"&:hover":{backgroundColor:"#2E3A5217","& .MuiChip-deleteIcon":{display:"block"}},"& .MuiChip-deleteIcon":{display:"none"}};var n,s,a;p.parameters={...p.parameters,docs:{...(n=p.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(a=(s=p.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const Ro=["MultipleSelectorAutocompleteStory"];export{p as MultipleSelectorAutocompleteStory,Ro as __namedExportsOrder,_o as default};
//# sourceMappingURL=MultipleSelectorAutocomplete.stories-7dfc79ab.js.map
