import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./react---BZM-86.js";import{n,t as r}from"./debounce-BVqWGKkP.js";import{t as i}from"./jsx-runtime--WVWf14b.js";import{n as a,t as o}from"./Box-CzqjOcoU.js";import{n as s,t as c}from"./Autocomplete-CBV4rH16.js";import{n as l,t as u}from"./TextField-DVvzje2I.js";import{n as d,t as f}from"./Typography-B5fOEpx5.js";import{n as p,t as m}from"./Button-DrgAR6qf.js";import{n as h,t as g}from"./DialogContent-B-a-mUNQ.js";import{i as _,n as v,r as y,t as b}from"./DialogTitle-BLBZWaKA.js";import{n as x,t as S}from"./Swapper-HxVm76lk.js";import{n as C,t as w}from"./DialogForm-DbSCbMTB.js";import{n as T,r as E,t as D}from"./index.esm-hA6-Vtk1.js";import{a as O}from"./constants-1jyUsruT.js";import{t as k}from"./mui-DZJR8qot.js";import{n as A,t as j}from"./OptionItem-CAEQeuDk.js";var M,N,P,F;function I(){return(I=e((()=>{t(),M=t(),s(),a(),p(),n(),_(),h(),v(),l(),d(),T(),O(),A(),C(),x(),N=i(),P=(0,M.memo)(({open:e,setOpen:t,control:n,onSubmit:i,onSwap:a,originalGroupOptions:s,changedGroupOptions:l,isLoadingOriginalGroup:d,isLoadingChangedGroup:p,onOriginalInputChange:h,onChangedInputChange:_})=>(0,N.jsxs)(w,{open:e,onClose:()=>t(!1),onSubmit:i,maxWidth:`md`,children:[(0,N.jsx)(b,{children:`Select REST Groups to Compare`}),(0,N.jsxs)(g,{sx:F,children:[(0,N.jsx)(f,{variant:`button`,sx:{gridArea:`originalTitle`},children:`Previous`}),(0,N.jsx)(D,{name:`originalGroup`,control:n,render:({field:{value:e,onChange:t}})=>(0,N.jsx)(c,{autoSelect:!0,filterOptions:k,onInputChange:r(h,500),sx:{gridArea:`originalGroup`},loading:d,value:e,options:s,getOptionLabel:({groupName:e})=>e,renderOption:(e,{groupName:t})=>(0,N.jsx)(j,{props:e,title:t},t),renderInput:e=>(0,N.jsx)(u,{...e,required:!0,label:`Group`}),onChange:(e,n)=>t(n),"data-testid":`OriginalGroupAutocomplete`})}),(0,N.jsx)(o,{sx:{gridArea:`swapper`,alignSelf:`center`},children:(0,N.jsx)(S,{onSwap:a})}),(0,N.jsx)(f,{variant:`button`,sx:{gridArea:`changedTitle`},children:`Current`}),(0,N.jsx)(D,{name:`changedGroup`,control:n,render:({field:{value:e,onChange:t}})=>(0,N.jsx)(c,{autoSelect:!0,filterOptions:k,onInputChange:r(_,500),sx:{gridArea:`changedGroup`},loading:p,value:e,options:l,getOptionLabel:({groupName:e})=>e,renderOption:(e,{groupName:t})=>(0,N.jsx)(j,{props:e,title:t},t),renderInput:e=>(0,N.jsx)(u,{...e,required:!0,label:`Group`}),onChange:(e,n)=>t(n),"data-testid":`ChangedGroupAutocomplete`})})]}),(0,N.jsxs)(y,{children:[(0,N.jsx)(m,{variant:`contained`,type:`submit`,"data-testid":`CompareButton`,children:`Compare`}),(0,N.jsx)(m,{variant:`outlined`,onClick:()=>t(!1),"data-testid":`CancelButton`,children:`Cancel`})]})]})),F={display:`grid`,columnGap:1,gridTemplateRows:`repeat(2, max-content)`,gridTemplateColumns:`400px max-content 400px`,gridTemplateAreas:`
    'originalTitle        originalTitle     changedTitle'
    'originalGroup        swapper           changedGroup'
  `},P.__docgenInfo={description:``,methods:[],displayName:`CompareRestGroupsDialogForm`,props:{control:{required:!0,tsType:{name:`Control`,elements:[{name:`signature`,type:`object`,raw:`{
  originalGroup: OperationGroup | null
  changedGroup: OperationGroup | null
}`,signature:{properties:[{key:`originalGroup`,value:{name:`union`,raw:`OperationGroup | null`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  groupName: string
  description: string
  isPrefixGroup: boolean
  exportTemplateFileName?: string
  operationsCount: number
  apiType: ApiType
  template?: File
}`,signature:{properties:[{key:`groupName`,value:{name:`string`,required:!0}},{key:`description`,value:{name:`string`,required:!0}},{key:`isPrefixGroup`,value:{name:`boolean`,required:!0}},{key:`exportTemplateFileName`,value:{name:`string`,required:!1}},{key:`operationsCount`,value:{name:`number`,required:!0}},{key:`apiType`,value:{name:`union`,raw:`| typeof API_TYPE_REST
| typeof API_TYPE_GRAPHQL
| typeof API_TYPE_ASYNCAPI`,elements:[{name:`API_TYPE_REST`},{name:`API_TYPE_GRAPHQL`},{name:`API_TYPE_ASYNCAPI`}],required:!0}},{key:`template`,value:{name:`File`,required:!1}}]}}],raw:`Readonly<{
  groupName: string
  description: string
  isPrefixGroup: boolean
  exportTemplateFileName?: string
  operationsCount: number
  apiType: ApiType
  template?: File
}>`},{name:`null`}],required:!0}},{key:`changedGroup`,value:{name:`union`,raw:`OperationGroup | null`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  groupName: string
  description: string
  isPrefixGroup: boolean
  exportTemplateFileName?: string
  operationsCount: number
  apiType: ApiType
  template?: File
}`,signature:{properties:[{key:`groupName`,value:{name:`string`,required:!0}},{key:`description`,value:{name:`string`,required:!0}},{key:`isPrefixGroup`,value:{name:`boolean`,required:!0}},{key:`exportTemplateFileName`,value:{name:`string`,required:!1}},{key:`operationsCount`,value:{name:`number`,required:!0}},{key:`apiType`,value:{name:`union`,raw:`| typeof API_TYPE_REST
| typeof API_TYPE_GRAPHQL
| typeof API_TYPE_ASYNCAPI`,elements:[{name:`API_TYPE_REST`},{name:`API_TYPE_GRAPHQL`},{name:`API_TYPE_ASYNCAPI`}],required:!0}},{key:`template`,value:{name:`File`,required:!1}}]}}],raw:`Readonly<{
  groupName: string
  description: string
  isPrefixGroup: boolean
  exportTemplateFileName?: string
  operationsCount: number
  apiType: ApiType
  template?: File
}>`},{name:`null`}],required:!0}}]}}],raw:`Control<CompareRestGroupsDialogFormData>`},description:``},originalGroupOptions:{required:!0,tsType:{name:`ReadonlyArray`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  groupName: string
  description: string
  isPrefixGroup: boolean
  exportTemplateFileName?: string
  operationsCount: number
  apiType: ApiType
  template?: File
}`,signature:{properties:[{key:`groupName`,value:{name:`string`,required:!0}},{key:`description`,value:{name:`string`,required:!0}},{key:`isPrefixGroup`,value:{name:`boolean`,required:!0}},{key:`exportTemplateFileName`,value:{name:`string`,required:!1}},{key:`operationsCount`,value:{name:`number`,required:!0}},{key:`apiType`,value:{name:`union`,raw:`| typeof API_TYPE_REST
| typeof API_TYPE_GRAPHQL
| typeof API_TYPE_ASYNCAPI`,elements:[{name:`API_TYPE_REST`},{name:`API_TYPE_GRAPHQL`},{name:`API_TYPE_ASYNCAPI`}],required:!0}},{key:`template`,value:{name:`File`,required:!1}}]}}],raw:`Readonly<{
  groupName: string
  description: string
  isPrefixGroup: boolean
  exportTemplateFileName?: string
  operationsCount: number
  apiType: ApiType
  template?: File
}>`}],raw:`ReadonlyArray<OperationGroup>`},description:``},changedGroupOptions:{required:!0,tsType:{name:`ReadonlyArray`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  groupName: string
  description: string
  isPrefixGroup: boolean
  exportTemplateFileName?: string
  operationsCount: number
  apiType: ApiType
  template?: File
}`,signature:{properties:[{key:`groupName`,value:{name:`string`,required:!0}},{key:`description`,value:{name:`string`,required:!0}},{key:`isPrefixGroup`,value:{name:`boolean`,required:!0}},{key:`exportTemplateFileName`,value:{name:`string`,required:!1}},{key:`operationsCount`,value:{name:`number`,required:!0}},{key:`apiType`,value:{name:`union`,raw:`| typeof API_TYPE_REST
| typeof API_TYPE_GRAPHQL
| typeof API_TYPE_ASYNCAPI`,elements:[{name:`API_TYPE_REST`},{name:`API_TYPE_GRAPHQL`},{name:`API_TYPE_ASYNCAPI`}],required:!0}},{key:`template`,value:{name:`File`,required:!1}}]}}],raw:`Readonly<{
  groupName: string
  description: string
  isPrefixGroup: boolean
  exportTemplateFileName?: string
  operationsCount: number
  apiType: ApiType
  template?: File
}>`}],raw:`ReadonlyArray<OperationGroup>`},description:``},onSwap:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onSubmit:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},isLoadingOriginalGroup:{required:!0,tsType:{name:`boolean`},description:``},isLoadingChangedGroup:{required:!0,tsType:{name:`boolean`},description:``},open:{required:!0,tsType:{name:`boolean`},description:``},setOpen:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`value`}],return:{name:`void`}}},description:``},onOriginalInputChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(event: SyntheticEvent, value: string) => void`,signature:{arguments:[{type:{name:`SyntheticEvent`},name:`event`},{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},onChangedInputChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(event: SyntheticEvent, value: string) => void`,signature:{arguments:[{type:{name:`SyntheticEvent`},name:`event`},{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``}}}})))()}var L;function R(){return(R=e((()=>{L=[{groupName:`Group1`,isPrefixGroup:!0,description:`Group contains operations that are used in x-x integration`,operationsCount:7},{groupName:`Group2`,isPrefixGroup:!1,description:`Manual Group contains operations that user adds self`,operationsCount:13},{groupName:`Group3`,isPrefixGroup:!1,description:`GraphQL Manual Group`,operationsCount:45},{groupName:`Group4`,isPrefixGroup:!0,description:``,operationsCount:200},{groupName:`Group4`,isPrefixGroup:!1,description:`Empty group`,operationsCount:2}]})))()}var z,B,V,H,U,W;function G(){return(G=e((()=>{z=t(),T(),I(),R(),B=i(),V={component:P},H=e=>{let t=(0,z.useMemo)(()=>({originalGroup:null,changedGroup:null}),[]),{control:n}=E({defaultValues:t});return(0,B.jsx)(P,{...e,control:n})},U={name:`Default`,args:{open:!0,setOpen:()=>null,onSubmit:()=>null,onSwap:()=>null,originalGroupOptions:L,changedGroupOptions:L,isLoadingOriginalGroup:!1,isLoadingChangedGroup:!1,onOriginalInputChange:()=>null,onChangedInputChange:()=>null},render:H},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    open: true,
    setOpen: () => null,
    onSubmit: () => null,
    onSwap: () => null,
    originalGroupOptions: operationGroups,
    changedGroupOptions: operationGroups,
    isLoadingOriginalGroup: false,
    isLoadingChangedGroup: false,
    onOriginalInputChange: () => null,
    onChangedInputChange: () => null
  },
  render: StoryComponent
}`,...U.parameters?.docs?.source}}},W=[`DefaultStory`]})))()}G();export{U as DefaultStory,W as __namedExportsOrder,V as default};