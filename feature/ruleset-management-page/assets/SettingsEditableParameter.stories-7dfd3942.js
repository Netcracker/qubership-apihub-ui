import{a as s,j as e,F as w}from"./createTheme-d4c6d141.js";import{r as y}from"./index-37ba2b57.js";import{D as H,E as q}from"./operation-groups-ef2977c6.js";import{C as U,N as J}from"./package-permissions-7239f49d.js";import{E as Q}from"./EditIcon-5ae8e069.js";import{B as r}from"./Box-11e4398c.js";import{T as u}from"./Typography-d1555f73.js";import{T as V}from"./Tooltip-d1587ebe.js";import{I as Y}from"./IconButton-c2813217.js";import{T as Z,t as ee}from"./theme-8c2f28df.js";import{O as oe}from"./OverflowTooltip-b1a37a90.js";import{C as o}from"./Chip-52e0400d.js";import{S as te}from"./Skeleton-e0fe84cc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-9c75dc50.js";import"./_commonjsHelpers-de833af9.js";import"./extendSxProp-acc1143e.js";import"./ClassNameGenerator-bd600f10.js";import"./clsx.m-6cf3b989.js";import"./useThemeProps-90078124.js";import"./useTheme-0ad13214.js";import"./Popper-d07ae8ca.js";import"./ownerDocument-613eb639.js";import"./Portal-fc00eb8c.js";import"./isHostComponent-73d6e646.js";import"./TransitionGroupContext-f40e0036.js";import"./useEnhancedEffect-9d60ea74.js";import"./index-4da2af8c.js";import"./useControlled-1dfdd739.js";import"./useId-f6e37502.js";import"./Grow-452ed02c.js";import"./utils-0c060528.js";import"./inheritsLoose-5494d9cc.js";import"./ButtonBase-1b5192e9.js";import"./emotion-react.browser.esm-f969ea94.js";import"./assertThisInitialized-081f9914.js";import"./GlobalStyles-a3183719.js";import"./colors-f1dae8af.js";import"./palette-5cac9847.js";import"./createSvgIcon-473ccb66.js";const ie={mb:1},ae={"&:hover":{"& .hoverable":{visibility:"visible"}},display:"flex"},re={width:"100%",maxHeight:140,display:"flex",flexWrap:"wrap",columnGap:1,rowGap:.5,overflow:"auto",paddingRight:1,"&::-webkit-scrollbar":{width:"4px"},"&::-webkit-scrollbar-thumb":{background:"#D5DCE3"},"& .MuiChip-root":{height:24}},se={visibility:"hidden",height:"20px"},X=y.memo(({title:a,packageObject:t,onEdit:T,isLoading:b,children:F,...K})=>{const l=y.useMemo(()=>{var E;return!!((E=t.permissions)!=null&&E.includes(U))},[t]),$=y.useCallback(()=>{!l||b||T()},[l,b,T]);return s(r,{"data-testid":"SettingsParameter",width:"100%",...K,children:[e(u,{variant:"subtitle2",sx:ie,"data-testid":"SettingsParameterTitle",children:a}),s(r,{sx:ae,children:[e(r,{sx:re,"data-testid":"SettingsParameterContent",children:F}),e(V,{title:l?"":J,placement:"top",children:e(Y,{sx:se,className:"hoverable",onClick:$,"data-testid":"EditButton",children:e(Q,{color:!l||b?H:q})})})]})]})});X.displayName="SettingsEditableParameter";const He={title:"Settings Editable Parameter",component:X,parameters:{layout:"centered"},decorators:[a=>e(Z,{theme:ee,children:e(r,{sx:{width:280,display:"flex",gap:1},children:e(a,{})})})]},i={key:"1",alias:"package-with-permission",name:"Package With Permission",kind:"package",permissions:[U]},le={key:"2",alias:"package-without-permission",name:"Package Without Permission",kind:"package",permissions:[]},n={name:"Chips with Edit Permission",args:{title:"Parameter with Chips",packageObject:i,onEdit:()=>alert("Edit button clicked"),children:s(w,{children:[e(o,{label:"api",size:"small"}),e(o,{label:"rest",size:"small"}),e(o,{label:"public",size:"small"})]})}},p={name:"Chips without Edit Permission",args:{title:"Parameter with Chips",packageObject:le,onEdit:()=>alert("Edit button clicked"),children:s(w,{children:[e(o,{label:"api",size:"small"}),e(o,{label:"rest",size:"small"}),e(o,{label:"public",size:"small"})]})}},h={name:"Chips with Long Name",args:{title:"Parameter with Chips",packageObject:i,onEdit:()=>alert("Edit button clicked"),children:s(w,{children:[e(o,{label:"api",size:"small"}),e(o,{label:"rest",size:"small"}),e(o,{label:"looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong",size:"small"})]})}},m={args:{title:"Parameter with Chips",packageObject:i,onEdit:()=>alert("Edit button clicked"),isLoading:!0,children:e(r,{display:"flex",flexWrap:"wrap",gap:1,width:"100%",children:[...Array(4)].map((a,t)=>e(te,{variant:"rectangular",width:80,height:20},t))})}},c={name:"Chips with Content Overflow",args:{title:"Parameter with Chips",packageObject:i,onEdit:()=>alert("Edit button clicked"),children:e(w,{children:Array.from({length:30},(a,t)=>e(o,{label:`tag-${t+1}`,size:"small"},t))})}},d={name:"Typography with Short Text",args:{title:"Parameter with Typography",packageObject:i,onEdit:()=>alert("Edit button clicked"),children:e(u,{variant:"body2",textOverflow:"ellipsis",overflow:"hidden",noWrap:!0,children:"This is a short text"})}},g={name:"Typography with Long Text",args:{title:"Parameter with Typography",packageObject:i,onEdit:()=>alert("Edit button clicked"),children:e(oe,{title:"This is a very long text that will overflow the container and trigger the ellipsis and tooltip behavior when hovered. The text is deliberately long to demonstrate how overflow works with Typography component.",children:e(u,{variant:"body2",textOverflow:"ellipsis",overflow:"hidden",noWrap:!0,children:"This is a very long text that will overflow the container and trigger the ellipsis and tooltip behavior when hovered. The text is deliberately long to demonstrate how overflow works with Typography component."})})}};var k,C,v;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Chips with Edit Permission',
  args: {
    title: 'Parameter with Chips',
    packageObject: packageWithPermission,
    onEdit: () => alert('Edit button clicked'),
    children: <>
        <Chip label="api" size="small" />
        <Chip label="rest" size="small" />
        <Chip label="public" size="small" />
      </>
  }
}`,...(v=(C=n.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var f,x,P;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Chips without Edit Permission',
  args: {
    title: 'Parameter with Chips',
    packageObject: packageWithoutPermission,
    onEdit: () => alert('Edit button clicked'),
    children: <>
        <Chip label="api" size="small" />
        <Chip label="rest" size="small" />
        <Chip label="public" size="small" />
      </>
  }
}`,...(P=(x=p.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var O,W,S;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Chips with Long Name',
  args: {
    title: 'Parameter with Chips',
    packageObject: packageWithPermission,
    onEdit: () => alert('Edit button clicked'),
    children: <>
        <Chip label="api" size="small" />
        <Chip label="rest" size="small" />
        <Chip label="looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong" size="small" />
      </>
  }
}`,...(S=(W=h.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};var _,N,z;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: 'Parameter with Chips',
    packageObject: packageWithPermission,
    onEdit: () => alert('Edit button clicked'),
    isLoading: true,
    children: <Box display="flex" flexWrap="wrap" gap={1} width="100%">
        {[...Array(4)].map((_, index) => <Skeleton key={index} variant="rectangular" width={80} height={20} />)}
      </Box>
  }
}`,...(z=(N=m.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var j,L,A;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Chips with Content Overflow',
  args: {
    title: 'Parameter with Chips',
    packageObject: packageWithPermission,
    onEdit: () => alert('Edit button clicked'),
    children: <>
        {Array.from({
        length: 30
      }, (_, i) => <Chip key={i} label={\`tag-\${i + 1}\`} size="small" />)}
      </>
  }
}`,...(A=(L=c.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var B,I,D;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Typography with Short Text',
  args: {
    title: 'Parameter with Typography',
    packageObject: packageWithPermission,
    onEdit: () => alert('Edit button clicked'),
    children: <Typography variant="body2" textOverflow="ellipsis" overflow="hidden" noWrap>
        This is a short text
      </Typography>
  }
}`,...(D=(I=d.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var R,G,M;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Typography with Long Text',
  args: {
    title: 'Parameter with Typography',
    packageObject: packageWithPermission,
    onEdit: () => alert('Edit button clicked'),
    children: <OverflowTooltip title="This is a very long text that will overflow the container and trigger the ellipsis and tooltip behavior when hovered. The text is deliberately long to demonstrate how overflow works with Typography component.">
        <Typography variant="body2" textOverflow="ellipsis" overflow="hidden" noWrap>
          This is a very long text that will overflow the container and trigger the ellipsis and tooltip behavior when
          hovered. The text is deliberately long to demonstrate how overflow works with Typography component.
        </Typography>
      </OverflowTooltip>
  }
}`,...(M=(G=g.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};const qe=["ChipsWithEditPermission","ChipsWithoutEditPermission","ChipsWithLongName","ChipsLoading","ChipsWithContentOverflow","TypographyWithShortText","TypographyWithLongText"];export{m as ChipsLoading,c as ChipsWithContentOverflow,n as ChipsWithEditPermission,h as ChipsWithLongName,p as ChipsWithoutEditPermission,g as TypographyWithLongText,d as TypographyWithShortText,qe as __namedExportsOrder,He as default};
//# sourceMappingURL=SettingsEditableParameter.stories-7dfd3942.js.map
