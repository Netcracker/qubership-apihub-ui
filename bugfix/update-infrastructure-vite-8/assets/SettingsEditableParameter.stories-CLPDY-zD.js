import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-5l_iQkTl.js";import{o as r,s as i}from"./createTheme-CRX-jDaJ.js";import{t as a}from"./jsx-runtime-Dw8SQ1Xa.js";import{n as o,t as s}from"./Skeleton-DZavebVd.js";import{n as c,t as l}from"./IconButton-nZott58-.js";import{n as u,t as d}from"./Typography-DQo_Zf9Y.js";import{n as f,t as p}from"./Chip-BjvI0F5C.js";import{n as m,t as h}from"./Box-BoHOER5V.js";import{n as g,t as _}from"./Tooltip-xuAwTqSK.js";import{n as v,r as y}from"./iframe-DMiWyO05.js";import{i as b,n as x,t as S}from"./operation-groups-TpwtB0Tk.js";import{a as C,s as w,t as T}from"./package-permissions-BJVT27eT.js";import{n as E,t as D}from"./EditIcon-DZt0ttKw.js";import{n as O,t as k}from"./OverflowTooltip-DbXABF0h.js";var A,j,M,N,P,F,I;function L(){return(L=e((()=>{A=t(n()),m(),c(),g(),u(),b(),w(),E(),j=a(),M={mb:1},N={"&:hover":{"& .hoverable":{visibility:`visible`}},display:`flex`},P={width:`100%`,maxHeight:140,display:`flex`,flexWrap:`wrap`,columnGap:1,rowGap:.5,overflow:`auto`,paddingRight:1,"&::-webkit-scrollbar":{width:`4px`},"&::-webkit-scrollbar-thumb":{background:`#D5DCE3`},"& .MuiChip-root":{height:24}},F={visibility:`hidden`,height:`20px`},I=(0,A.memo)(({title:e,packageObject:t,onEdit:n,isLoading:r,children:i,...a})=>{let o=(0,A.useMemo)(()=>!!t.permissions?.includes(T),[t]),s=(0,A.useCallback)(()=>{!o||r||n()},[o,r,n]);return(0,j.jsxs)(h,{"data-testid":`SettingsParameter`,width:`100%`,...a,children:[(0,j.jsx)(d,{variant:`subtitle2`,sx:M,"data-testid":`SettingsParameterTitle`,children:e}),(0,j.jsxs)(h,{sx:N,children:[(0,j.jsx)(h,{sx:P,"data-testid":`SettingsParameterContent`,children:i}),(0,j.jsx)(_,{title:o?``:C,placement:`top`,children:(0,j.jsx)(l,{sx:F,className:`hoverable`,onClick:s,"data-testid":`EditButton`,children:(0,j.jsx)(D,{color:!o||r?S:x})})})]})]})}),I.displayName=`SettingsEditableParameter`,I.__docgenInfo={description:``,methods:[],displayName:`SettingsEditableParameter`}})))()}var R,z,B,V,H,U,W,G,K,q,J,Y;function X(){return(X=e((()=>{n(),L(),m(),f(),o(),i(),u(),w(),v(),O(),R=a(),z={title:`Settings Editable Parameter`,component:I,parameters:{layout:`centered`},decorators:[e=>(0,R.jsx)(r,{theme:y,children:(0,R.jsx)(h,{sx:{width:280,display:`flex`,gap:1},children:(0,R.jsx)(e,{})})})]},B={key:`1`,alias:`package-with-permission`,name:`Package With Permission`,kind:`package`,permissions:[T]},V={key:`2`,alias:`package-without-permission`,name:`Package Without Permission`,kind:`package`,permissions:[]},H={name:`Chips with Edit Permission`,args:{title:`Parameter with Chips`,packageObject:B,onEdit:()=>alert(`Edit button clicked`),children:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(p,{label:`api`,size:`small`}),(0,R.jsx)(p,{label:`rest`,size:`small`}),(0,R.jsx)(p,{label:`public`,size:`small`})]})}},U={name:`Chips without Edit Permission`,args:{title:`Parameter with Chips`,packageObject:V,onEdit:()=>alert(`Edit button clicked`),children:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(p,{label:`api`,size:`small`}),(0,R.jsx)(p,{label:`rest`,size:`small`}),(0,R.jsx)(p,{label:`public`,size:`small`})]})}},W={name:`Chips with Long Name`,args:{title:`Parameter with Chips`,packageObject:B,onEdit:()=>alert(`Edit button clicked`),children:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(p,{label:`api`,size:`small`}),(0,R.jsx)(p,{label:`rest`,size:`small`}),(0,R.jsx)(p,{label:`looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong`,size:`small`})]})}},G={args:{title:`Parameter with Chips`,packageObject:B,onEdit:()=>alert(`Edit button clicked`),isLoading:!0,children:(0,R.jsx)(h,{display:`flex`,flexWrap:`wrap`,gap:1,width:`100%`,children:[...[,,,,]].map((e,t)=>(0,R.jsx)(s,{variant:`rectangular`,width:80,height:20},t))})}},K={name:`Chips with Content Overflow`,args:{title:`Parameter with Chips`,packageObject:B,onEdit:()=>alert(`Edit button clicked`),children:(0,R.jsx)(R.Fragment,{children:Array.from({length:30},(e,t)=>(0,R.jsx)(p,{label:`tag-${t+1}`,size:`small`},t))})}},q={name:`Typography with Short Text`,args:{title:`Parameter with Typography`,packageObject:B,onEdit:()=>alert(`Edit button clicked`),children:(0,R.jsx)(d,{variant:`body2`,textOverflow:`ellipsis`,overflow:`hidden`,noWrap:!0,children:`This is a short text`})}},J={name:`Typography with Long Text`,args:{title:`Parameter with Typography`,packageObject:B,onEdit:()=>alert(`Edit button clicked`),children:(0,R.jsx)(k,{title:`This is a very long text that will overflow the container and trigger the ellipsis and tooltip behavior when hovered. The text is deliberately long to demonstrate how overflow works with Typography component.`,children:(0,R.jsx)(d,{variant:`body2`,textOverflow:`ellipsis`,overflow:`hidden`,noWrap:!0,children:`This is a very long text that will overflow the container and trigger the ellipsis and tooltip behavior when hovered. The text is deliberately long to demonstrate how overflow works with Typography component.`})})}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Parameter with Chips',
    packageObject: packageWithPermission,
    onEdit: () => alert('Edit button clicked'),
    isLoading: true,
    children: <Box display="flex" flexWrap="wrap" gap={1} width="100%">
        {[...Array(4)].map((_, index) => <Skeleton key={index} variant="rectangular" width={80} height={20} />)}
      </Box>
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Typography with Short Text',
  args: {
    title: 'Parameter with Typography',
    packageObject: packageWithPermission,
    onEdit: () => alert('Edit button clicked'),
    children: <Typography variant="body2" textOverflow="ellipsis" overflow="hidden" noWrap>
        This is a short text
      </Typography>
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y=[`ChipsWithEditPermission`,`ChipsWithoutEditPermission`,`ChipsWithLongName`,`ChipsLoading`,`ChipsWithContentOverflow`,`TypographyWithShortText`,`TypographyWithLongText`]})))()}X();export{G as ChipsLoading,K as ChipsWithContentOverflow,H as ChipsWithEditPermission,W as ChipsWithLongName,U as ChipsWithoutEditPermission,J as TypographyWithLongText,q as TypographyWithShortText,Y as __namedExportsOrder,z as default};