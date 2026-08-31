import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./react-5l_iQkTl.js";import{t as n}from"./jsx-runtime-Dw8SQ1Xa.js";import{n as r,t as i}from"./Box-B_l5-crx.js";import{n as a,t as o}from"./Chip-BWQ_5OTC.js";import{n as s,t as c}from"./DialogContent-DtvI-_UL.js";import{n as l,t as u}from"./ListItem-fBA3Y_Y4.js";import{n as d,t as f}from"./CloseOutlined-B0WEWj7o.js";import{n as p,t as m}from"./DialogForm-C70NlZIT.js";import{n as h,r as g,t as _}from"./index.esm-C73x_CXp.js";import{n as v,t as y}from"./CheckIcon-Wn_30gk_.js";import{n as b,t as x}from"./MultipleSelectorAutocomplete-BTmzjURX.js";import{n as S,r as C}from"./roles-samples-CDj6ky2A.js";var w,T,E,D,O,k,A;function j(){return(j=e((()=>{t(),p(),r(),a(),s(),l(),b(),v(),d(),h(),C(),w=n(),T=t(),E={title:`Multiple Selector Autocomplete`},D=()=>{let{control:e}=g();return(0,w.jsx)(m,{open:!0,children:(0,w.jsx)(c,{children:(0,w.jsx)(_,{name:`roles`,control:e,render:({field:{value:e,onChange:t}})=>(0,w.jsx)(x,{id:`roles-selector`,options:S,value:e,inputLabel:`Role`,onChange:t,getOptionLabel:e=>e.role??e,renderOption:(t,{key:n,role:r})=>{let a=e?.some(e=>e.key===n);return(0,T.createElement)(u,{...t,key:r,sx:{pointerEvents:a?`none`:``}},a?(0,w.jsx)(y,{}):null,(0,w.jsx)(i,{sx:{marginLeft:a?`6px`:`21px`},children:r}))},renderTags:(e,t)=>e.map((e,n)=>(0,w.jsx)(o,{variant:`outlined`,size:`small`,sx:k,avatar:(0,w.jsx)(y,{}),deleteIcon:(0,w.jsx)(f,{}),label:e?.role,...t({index:n})}))})})})})},O=D.bind({}),k={border:`none`,width:`350px`,display:`flex`,justifyContent:`space-between`,".MuiChip-label":{mr:`auto`},"&:hover":{backgroundColor:`#2E3A5217`,"& .MuiChip-deleteIcon":{display:`block`}},"& .MuiChip-deleteIcon":{display:`none`}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
}`,...O.parameters?.docs?.source}}},A=[`MultipleSelectorAutocompleteStory`]})))()}j();export{O as MultipleSelectorAutocompleteStory,A as __namedExportsOrder,E as default};