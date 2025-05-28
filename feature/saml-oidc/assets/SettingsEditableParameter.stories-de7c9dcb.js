import{a as s,j as e,F as w}from"./createTheme-c79a82be.js";import{r as y}from"./index-76fb7be0.js";import{D as H,E as q}from"./operation-groups-ef2977c6.js";import{C as U,N as J}from"./package-permissions-7239f49d.js";import{E as Q}from"./EditIcon-8bd83f33.js";import{B as r}from"./Box-5be9d6da.js";import{T as u}from"./Typography-3dfb61d7.js";import{T as V}from"./Tooltip-c1c77c1b.js";import{I as Y}from"./IconButton-e8de8077.js";import{T as Z,t as ee}from"./theme-66f9ba2b.js";import{O as oe}from"./OverflowTooltip-4f8483c3.js";import{C as o}from"./Chip-a169d9d4.js";import{S as te}from"./Skeleton-793a8760.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-aa53f5e3.js";import"./_commonjsHelpers-de833af9.js";import"./index-71e0858c.js";import"./extendSxProp-aea61bfb.js";import"./clsx.m-e92c351d.js";import"./useThemeProps-aa843650.js";import"./useTheme-11ba6946.js";import"./Popper-85045249.js";import"./ownerDocument-613eb639.js";import"./Portal-18509f2e.js";import"./isHostComponent-73d6e646.js";import"./TransitionGroupContext-48398eec.js";import"./index-d3ea75b5.js";import"./useControlled-3e5b2082.js";import"./useId-a47493a3.js";import"./Grow-a4fcaa6b.js";import"./utils-a355cc51.js";import"./inheritsLoose-5494d9cc.js";import"./ButtonBase-05fdfea8.js";import"./emotion-react.browser.esm-b0f55332.js";import"./hoist-non-react-statics.cjs-b1c88361.js";import"./assertThisInitialized-081f9914.js";import"./palette-8c6d2233.js";import"./createSvgIcon-b791e64c.js";const ie={mb:1},ae={"&:hover":{"& .hoverable":{visibility:"visible"}},display:"flex"},re={width:"100%",maxHeight:140,display:"flex",flexWrap:"wrap",columnGap:1,rowGap:.5,overflow:"auto",paddingRight:1,"&::-webkit-scrollbar":{width:"4px"},"&::-webkit-scrollbar-thumb":{background:"#D5DCE3"},"& .MuiChip-root":{height:24}},se={visibility:"hidden",height:"20px"},X=y.memo(({title:a,packageObject:t,onEdit:T,isLoading:b,children:F,...K})=>{const l=y.useMemo(()=>{var E;return!!((E=t.permissions)!=null&&E.includes(U))},[t]),$=y.useCallback(()=>{!l||b||T()},[l,b,T]);return s(r,{"data-testid":"SettingsParameter",width:"100%",...K,children:[e(u,{variant:"subtitle2",sx:ie,"data-testid":"SettingsParameterTitle",children:a}),s(r,{sx:ae,children:[e(r,{sx:re,"data-testid":"SettingsParameterContent",children:F}),e(V,{title:l?"":J,placement:"top",children:e(Y,{sx:se,className:"hoverable",onClick:$,"data-testid":"EditButton",children:e(Q,{color:!l||b?H:q})})})]})]})});X.displayName="SettingsEditableParameter";const Ke={title:"Settings Editable Parameter",component:X,parameters:{layout:"centered"},decorators:[a=>e(Z,{theme:ee,children:e(r,{sx:{width:280,display:"flex",gap:1},children:e(a,{})})})]},i={key:"1",alias:"package-with-permission",name:"Package With Permission",kind:"package",permissions:[U]},le={key:"2",alias:"package-without-permission",name:"Package Without Permission",kind:"package",permissions:[]},n={name:"Chips with Edit Permission",args:{title:"Parameter with Chips",packageObject:i,onEdit:()=>alert("Edit button clicked"),children:s(w,{children:[e(o,{label:"api",size:"small"}),e(o,{label:"rest",size:"small"}),e(o,{label:"public",size:"small"})]})}},p={name:"Chips without Edit Permission",args:{title:"Parameter with Chips",packageObject:le,onEdit:()=>alert("Edit button clicked"),children:s(w,{children:[e(o,{label:"api",size:"small"}),e(o,{label:"rest",size:"small"}),e(o,{label:"public",size:"small"})]})}},h={name:"Chips with Long Name",args:{title:"Parameter with Chips",packageObject:i,onEdit:()=>alert("Edit button clicked"),children:s(w,{children:[e(o,{label:"api",size:"small"}),e(o,{label:"rest",size:"small"}),e(o,{label:"looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong",size:"small"})]})}},c={args:{title:"Parameter with Chips",packageObject:i,onEdit:()=>alert("Edit button clicked"),isLoading:!0,children:e(r,{display:"flex",flexWrap:"wrap",gap:1,width:"100%",children:[...Array(4)].map((a,t)=>e(te,{variant:"rectangular",width:80,height:20},t))})}},m={name:"Chips with Content Overflow",args:{title:"Parameter with Chips",packageObject:i,onEdit:()=>alert("Edit button clicked"),children:e(w,{children:Array.from({length:30},(a,t)=>e(o,{label:`tag-${t+1}`,size:"small"},t))})}},d={name:"Typography with Short Text",args:{title:"Parameter with Typography",packageObject:i,onEdit:()=>alert("Edit button clicked"),children:e(u,{variant:"body2",textOverflow:"ellipsis",overflow:"hidden",noWrap:!0,children:"This is a short text"})}},g={name:"Typography with Long Text",args:{title:"Parameter with Typography",packageObject:i,onEdit:()=>alert("Edit button clicked"),children:e(oe,{title:"This is a very long text that will overflow the container and trigger the ellipsis and tooltip behavior when hovered. The text is deliberately long to demonstrate how overflow works with Typography component.",children:e(u,{variant:"body2",textOverflow:"ellipsis",overflow:"hidden",noWrap:!0,children:"This is a very long text that will overflow the container and trigger the ellipsis and tooltip behavior when hovered. The text is deliberately long to demonstrate how overflow works with Typography component."})})}};var k,C,v;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(S=(W=h.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};var _,N,z;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: 'Parameter with Chips',
    packageObject: packageWithPermission,
    onEdit: () => alert('Edit button clicked'),
    isLoading: true,
    children: <Box display="flex" flexWrap="wrap" gap={1} width="100%">
        {[...Array(4)].map((_, index) => <Skeleton key={index} variant="rectangular" width={80} height={20} />)}
      </Box>
  }
}`,...(z=(N=c.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var j,L,A;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(A=(L=m.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var B,I,D;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(M=(G=g.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};const $e=["ChipsWithEditPermission","ChipsWithoutEditPermission","ChipsWithLongName","ChipsLoading","ChipsWithContentOverflow","TypographyWithShortText","TypographyWithLongText"];export{c as ChipsLoading,m as ChipsWithContentOverflow,n as ChipsWithEditPermission,h as ChipsWithLongName,p as ChipsWithoutEditPermission,g as TypographyWithLongText,d as TypographyWithShortText,$e as __namedExportsOrder,Ke as default};
//# sourceMappingURL=SettingsEditableParameter.stories-de7c9dcb.js.map
