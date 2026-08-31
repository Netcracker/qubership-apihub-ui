import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-5l_iQkTl.js";import{t as r}from"./jsx-runtime-Dw8SQ1Xa.js";import{n as i,t as a}from"./Chip-BjvI0F5C.js";import{n as o,t as s}from"./Box-BoHOER5V.js";import{n as c,t as l}from"./DialogContent-DM_9YyvD.js";import{n as u,t as d}from"./ListItem-jX0QHtFJ.js";import{n as f,t as p}from"./DialogForm-Bj08xMWK.js";import{n as m,r as h,t as g}from"./index.esm-C73x_CXp.js";import{n as _,t as v}from"./CheckIcon-Wn_30gk_.js";import{t as y}from"./CloseOutlined-B1jIMn8T.js";import{n as b,t as x}from"./MultipleSelectorAutocomplete-KWTEGIZA.js";import{n as S,r as C}from"./roles-samples-CDj6ky2A.js";var w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{n(),f(),o(),i(),c(),u(),b(),_(),w=t(y(),1),m(),C(),T=r(),E=n(),D={title:`Multiple Selector Autocomplete`},O=()=>{let{control:e}=h();return(0,T.jsx)(p,{open:!0,children:(0,T.jsx)(l,{children:(0,T.jsx)(g,{name:`roles`,control:e,render:({field:{value:e,onChange:t}})=>(0,T.jsx)(x,{id:`roles-selector`,options:S,value:e,inputLabel:`Role`,onChange:t,getOptionLabel:e=>e.role??e,renderOption:(t,{key:n,role:r})=>{let i=e?.some(e=>e.key===n);return(0,E.createElement)(d,{...t,key:r,sx:{pointerEvents:i?`none`:``}},i?(0,T.jsx)(v,{}):null,(0,T.jsx)(s,{sx:{marginLeft:i?`6px`:`21px`},children:r}))},renderTags:(e,t)=>e.map((e,n)=>(0,T.jsx)(a,{variant:`outlined`,size:`small`,sx:A,avatar:(0,T.jsx)(v,{}),deleteIcon:(0,T.jsx)(w.default,{}),label:e?.role,...t({index:n})}))})})})})},k=O.bind({}),A={border:`none`,width:`350px`,display:`flex`,justifyContent:`space-between`,".MuiChip-label":{mr:`auto`},"&:hover":{backgroundColor:`#2E3A5217`,"& .MuiChip-deleteIcon":{display:`block`}},"& .MuiChip-deleteIcon":{display:`none`}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
}`,...k.parameters?.docs?.source}}},j=[`MultipleSelectorAutocompleteStory`]})))()}M();export{k as MultipleSelectorAutocompleteStory,j as __namedExportsOrder,D as default};