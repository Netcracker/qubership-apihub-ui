import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-5l_iQkTl.js";import{t as r}from"./jsx-runtime-Dw8SQ1Xa.js";import{n as i,t as a}from"./Box-B_l5-crx.js";import{n as o,t as s}from"./Skeleton-DjIR2cvu.js";import{n as c,t as l}from"./Typography-CxSQYU1Q.js";import{n as u,t as d}from"./MenuItem-BNWUV89Y.js";import{n as f,t as p}from"./Tooltip-BFKZgTh8.js";import{c as m,i as h,n as g,r as _,s as ee,t as v}from"./TableRow-CBu85zgb.js";import{a as te,i as y,n as b,o as x,r as ne,t as re}from"./TableHead-CUftuKaT.js";import{n as S,t as ie}from"./InfoContextIcon-7muG-nFe.js";import{n as C,t as w}from"./ButtonWithHint-hgBYG3_K.js";import{a as ae}from"./constants-1jyUsruT.js";import{r as oe,t as se}from"./components--jYjCQAt.js";import{r as ce,t as le}from"./MenuButton-N_pjeEdW.js";import{n as ue,t as T}from"./DownloadIcon-CD3VQuYS.js";import{n as E}from"./arrays-Bfo2Y4Sy.js";import{a as de,i as fe,t as pe}from"./Placeholder-Ck-IYWTt.js";import{a as D,c as me,i as he,l as ge,n as _e,o as ve,r as ye,s as be,t as xe}from"./useResizeObserver-PQJ4qlUt.js";import{n as Se,t as Ce}from"./ColumnDelimiter-tRFwYmTA.js";import{n as we,t as O}from"./TextWithOverflowTooltip-BNDwciEU.js";import{n as Te,t as Ee}from"./useIntersectionObserver-KNhXmJMZ.js";import{n as De,t as Oe}from"./PrincipalView-BHOSrSjL.js";import{n as ke,t as Ae}from"./FormattedDate-BlVmdgQh.js";var k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{k=t(n(),1),i(),u(),o(),m(),x(),h(),y(),b(),g(),f(),c(),ve(),we(),Se(),de(),ye(),Ee(),S(),ae(),oe(),ue(),ce(),C(),xe(),ke(),De(),A=r(),j=(0,k.memo)(({data:e,downloadOptions:t,downloadSecurityReport:n,fetchNextPage:r,isFetchingNextPage:i,hasNextPage:o,isLoading:c})=>{let[u,d]=(0,k.useState)(800),[f,m]=(0,k.useState)(),[,h]=(0,k.useState)(),g=(0,k.useRef)(null);_e(g,d);let y=he({containerWidth:u,columnModels:R,columnSizingInfo:f,defaultMinColumnSize:150}),b=(0,k.useRef)(null);Te(b,i,o,r);let x=(0,k.useMemo)(()=>[{id:M,header:`Date`,cell:({row:{original:{createdAt:e}}})=>(0,A.jsx)(Ae,{value:e})},{id:N,header:`Created By`,cell:({row:{original:{createdBy:e}}})=>(0,A.jsx)(Oe,{value:e})},{id:P,header:`Status`,cell:({row:{original:{status:e,details:t}}})=>(0,A.jsxs)(a,{display:`flex`,children:[(0,A.jsx)(l,{fontSize:`13px`,children:e}),e!==`running`&&t&&(0,A.jsx)(p,{title:t,children:(0,A.jsx)(ie,{fontSize:`extra-small`,sx:{ml:.5}})})]})},{id:F,header:`Total Number of Services`,cell:({row:{original:{servicesTotal:e}}})=>(0,A.jsx)(O,{tooltipText:e,children:(0,A.jsx)(l,{variant:`inherit`,children:e})})},{id:I,header:`Number of Processed Services`,cell:({row:{original:{servicesProcessed:e}}})=>(0,A.jsx)(O,{tooltipText:e,children:(0,A.jsx)(l,{variant:`inherit`,children:e})})},{id:L,header:``,cell:({row:{original:{processId:e}}})=>(0,A.jsx)(V,{processId:e,onDownloadReport:n,downloadOptions:t})}],[t,n]),{getHeaderGroups:S,getRowModel:C,setColumnSizing:w}=be({data:e,columns:x,columnResizeMode:`onChange`,getCoreRowModel:me(),getExpandedRowModel:ge(),onColumnSizingChange:h,onColumnSizingInfoChange:m});return(0,k.useEffect)(()=>w(y),[w,y]),(0,A.jsxs)(ne,{ref:g,children:[(0,A.jsxs)(ee,{children:[(0,A.jsx)(re,{children:S().map(e=>(0,A.jsx)(v,{children:e.headers.map((t,n)=>(0,A.jsxs)(_,{align:`left`,width:y?y[t.id]:t.getSize(),sx:{"&:hover":{borderRight:`2px solid rgba(224, 224, 224, 1)`}},children:[D(t.column.columnDef.header,t.getContext()),n!==e.headers.length-1&&(0,A.jsx)(Ce,{header:t,resizable:!0})]},t.id))},e.id))}),(0,A.jsxs)(te,{children:[C().rows.map(e=>(0,A.jsx)(v,{children:e.getVisibleCells().map(e=>(0,A.jsx)(_,{"data-testid":`Cell-${e.column.id}`,children:D(e.column.columnDef.cell,e.getContext())},e.column.id))})),c&&(0,A.jsx)(z,{}),(0,A.jsx)(v,{children:o&&x.map(e=>(0,A.jsx)(_,{ref:b,children:(0,A.jsx)(s,{variant:`text`})},e.id))})]})]}),E(e)&&!c?(0,A.jsx)(fe,{sx:{width:`inherit`},invisible:c,area:pe,message:`No reports`,"data-testid":`NoReportsPlaceholder`}):null]})}),M=`date`,N=`created-by`,P=`status`,F=`total-number-of-services`,I=`number-of-processed-services`,L=`actions`,R=[{name:M,width:181},{name:N,width:415},{name:P,width:169},{name:F,width:195},{name:I,width:195},{name:L,width:43}],z=(0,k.memo)(()=>se((0,A.jsx)(B,{}),5)),B=(0,k.memo)(()=>(0,A.jsxs)(v,{children:[(0,A.jsx)(_,{children:(0,A.jsx)(s,{variant:`rectangular`,width:`70%`})}),(0,A.jsx)(_,{children:(0,A.jsx)(s,{variant:`rectangular`,width:`35%`})}),(0,A.jsx)(_,{children:(0,A.jsx)(s,{variant:`rectangular`,width:`50%`})}),(0,A.jsx)(_,{children:(0,A.jsx)(s,{variant:`rectangular`,width:`20%`})}),(0,A.jsx)(_,{children:(0,A.jsx)(s,{variant:`rectangular`,width:`20%`})}),(0,A.jsx)(_,{children:(0,A.jsx)(s,{variant:`rectangular`,width:`50%`})})]})),V=(0,k.memo)(({processId:e,onDownloadReport:t,downloadOptions:n})=>{let r=(0,k.useCallback)(n=>t(e,n),[t,e]),i=(0,k.useCallback)(()=>t(e),[t,e]);return n?(0,A.jsx)(H,{sx:{visibility:`hidden`},className:`hoverable`,options:n,onClick:r}):(0,A.jsx)(w,{"area-label":`edit`,hint:`Download report`,size:`small`,sx:{visibility:`hidden`,height:`20px`},className:`hoverable`,startIcon:(0,A.jsx)(T,{color:`#626D82`}),onClick:i,"data-testid":`DownloadReportButton`})}),H=(0,k.memo)(({options:e,onClick:t,sx:n,className:r})=>(0,A.jsx)(p,{title:`Download`,children:(0,A.jsx)(a,{sx:{display:`inline`},children:(0,A.jsx)(le,{sx:n,icon:(0,A.jsx)(T,{color:`#626D82`}),alignItems:`center`,className:r,"data-testid":`DownloadMenuButton`,children:e.map(({value:e,text:n})=>(0,A.jsx)(d,{value:e,onClick:()=>t(e),"data-testid":`Option-${e}`,children:n},`download-option-${e}`))})})})),j.__docgenInfo={description:``,methods:[],displayName:`SecurityReportsTable`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  processId: string
  createdAt: string
  createdBy: Principal
  status: SecurityReportStatus
  details?: string
  servicesProcessed: number
  servicesTotal: number
}`,signature:{properties:[{key:`processId`,value:{name:`string`,required:!0}},{key:`createdAt`,value:{name:`string`,required:!0}},{key:`createdBy`,value:{name:`union`,raw:`User | Token | Job`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: typeof USER
  id: Key
  name?: string
  email?: string
  avatarUrl?: Url
}`,signature:{properties:[{key:`type`,value:{name:`USER`,required:!0}},{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!1}},{key:`email`,value:{name:`string`,required:!1}},{key:`avatarUrl`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}}]}}],raw:`Readonly<{
  type: typeof USER
  id: Key
  name?: string
  email?: string
  avatarUrl?: Url
}>`},{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: typeof API_KEY
  id: Key
  name: string
}`,signature:{properties:[{key:`type`,value:{name:`API_KEY`,required:!0}},{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!0}}]}}],raw:`Readonly<{
  type: typeof API_KEY
  id: Key
  name: string
}>`},{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: typeof JOB
  id: Key
  name: string
}`,signature:{properties:[{key:`type`,value:{name:`JOB`,required:!0}},{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!0}}]}}],raw:`Readonly<{
  type: typeof JOB
  id: Key
  name: string
}>`}],required:!0}},{key:`status`,value:{name:`union`,raw:`| typeof RUNNING_SECURITY_REPORT_STATUS
| typeof ERROR_SECURITY_REPORT_STATUS
| typeof COMPLETE_SECURITY_REPORT_STATUS`,elements:[{name:`RUNNING_SECURITY_REPORT_STATUS`},{name:`ERROR_SECURITY_REPORT_STATUS`},{name:`COMPLETE_SECURITY_REPORT_STATUS`}],required:!0}},{key:`details`,value:{name:`string`,required:!1}},{key:`servicesProcessed`,value:{name:`number`,required:!0}},{key:`servicesTotal`,value:{name:`number`,required:!0}}]}}],raw:`SecurityReport[]`},description:``},downloadOptions:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  value: DownloadType
  text: string
}`,signature:{properties:[{key:`value`,value:{name:`union`,raw:`typeof DOWNLOAD_REPORT | typeof DOWNLOAD_SOURCES`,elements:[{name:`DOWNLOAD_REPORT`},{name:`DOWNLOAD_SOURCES`}],required:!0}},{key:`text`,value:{name:`string`,required:!0}}]}}],raw:`ReportDownloadOption[]`},description:``},downloadSecurityReport:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(processKey: string, value?: DownloadType) => void`,signature:{arguments:[{type:{name:`string`},name:`processKey`},{type:{name:`union`,raw:`typeof DOWNLOAD_REPORT | typeof DOWNLOAD_SOURCES`,elements:[{name:`DOWNLOAD_REPORT`},{name:`DOWNLOAD_SOURCES`}]},name:`value`}],return:{name:`void`}}},description:``},fetchNextPage:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => Promise<number>`,signature:{arguments:[],return:{name:`Promise`,elements:[{name:`number`}],raw:`Promise<number>`}}},description:``},isFetchingNextPage:{required:!0,tsType:{name:`boolean`},description:``},hasNextPage:{required:!0,tsType:{name:`union`,raw:`boolean | undefined`,elements:[{name:`boolean`},{name:`undefined`}]},description:``},isLoading:{required:!0,tsType:{name:`boolean`},description:``}}}})))()}var W,G;function K(){return(K=e((()=>{W=Array.from({length:30},(e,t)=>({processId:`long-process-name-number-${t}`,createdAt:`2021-09-01T12:00:00Z`,createdBy:{type:`user`,id:`id-${t+1}`,avatarUrl:`https://via.placeholder.com/150`,name:`VeryVeryVeryVeryVeryVeryLongUserNameThatExceedsTheUsualLength ${t}`},status:`complete`,errorMessage:void 0,servicesProcessed:2e8+t,servicesTotal:1e7+t})),G=Array.from({length:20},(e,t)=>({processId:`process${t+Math.random()*100}`,createdAt:`2021-09-01T12:00:00Z`,createdBy:{type:`user`,id:`id-${t+Math.random()*10}`,avatarUrl:`https://via.placeholder.com/150`,name:`User ${t+ +Math.round(Math.random()*100)}`},status:t%2==0?`complete`:`error`,errorMessage:t%2==0?void 0:`Error occurred`,servicesProcessed:t*5,servicesTotal:500}))})))()}var q,J,Y,X,Z,Q,je;function $(){return($=e((()=>{n(),U(),K(),q=r(),{useArgs:J}=__STORYBOOK_MODULE_PREVIEW_API__,Y={title:`Security Reports Table`,component:j},X={name:`Empty Data`,args:{data:[],downloadSecurityReport:()=>console.log(`Mock download function executed`),fetchNextPage:()=>Promise.resolve(0),isFetchingNextPage:!1,hasNextPage:!1,isLoading:!1}},Z={name:`Long Data Names`,args:{data:W,downloadSecurityReport:()=>console.log(`Mock download function executed`),fetchNextPage:()=>Promise.resolve(0),isFetchingNextPage:!1,hasNextPage:!1,isLoading:!1,downloadOptions:[{value:`download-report`,text:`Download Option 1`},{value:`download-report`,text:`Download Option 2`}]}},Q={name:`Infinity Data`,args:{data:G,downloadSecurityReport:()=>console.log(`Mock download function executed`),isFetchingNextPage:!1,hasNextPage:!0,isLoading:!1},render:function(e){let[{data:t},n]=J();function r(){return n({data:E(t)?G:[...t,...G]}),Promise.resolve(1)}return(0,q.jsx)(j,{...e,fetchNextPage:r,data:t})}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Empty Data',
  args: {
    data: [],
    downloadSecurityReport: () => console.log('Mock download function executed'),
    fetchNextPage: () => Promise.resolve(0),
    isFetchingNextPage: false,
    hasNextPage: false,
    isLoading: false
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Long Data Names',
  args: {
    data: longNameTableData,
    downloadSecurityReport: () => console.log('Mock download function executed'),
    fetchNextPage: () => Promise.resolve(0),
    isFetchingNextPage: false,
    hasNextPage: false,
    isLoading: false,
    downloadOptions: [{
      value: 'download-report',
      text: 'Download Option 1'
    }, {
      value: 'download-report',
      text: 'Download Option 2'
    }]
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: 'Infinity Data',
  args: {
    data: fullTableData,
    downloadSecurityReport: () => console.log('Mock download function executed'),
    isFetchingNextPage: false,
    hasNextPage: true,
    isLoading: false
  },
  render: function Render(args) {
    const [{
      data
    }, updateArgs] = useArgs();
    function onFetchNextPage(): Promise<number> {
      updateArgs({
        data: isEmpty(data) ? fullTableData : [...data, ...fullTableData]
      });
      return Promise.resolve(1);
    }
    return <SecurityReportsTable {...args} fetchNextPage={onFetchNextPage} data={data} />;
  }
}`,...Q.parameters?.docs?.source}}},je=[`EmptyStory`,`LongDataNamesStory`,`InfinityDataStory`]})))()}$();export{X as EmptyStory,Q as InfinityDataStory,Z as LongDataNamesStory,je as __namedExportsOrder,Y as default};