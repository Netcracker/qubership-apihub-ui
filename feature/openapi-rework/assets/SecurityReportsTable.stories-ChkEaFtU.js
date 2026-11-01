import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react---BZM-86.js";import{t as r}from"./jsx-runtime--WVWf14b.js";import{n as i,t as a}from"./Box-CzqjOcoU.js";import{n as o,t as s}from"./Skeleton-aojjS0Ib.js";import{n as c,t as l}from"./Typography-B5fOEpx5.js";import{n as u,t as d}from"./MenuItem-DabcL6d4.js";import{n as f,t as p}from"./Tooltip-BYt64czu.js";import{c as m,i as h,n as g,r as _,s as ee,t as v}from"./TableRow-aTq3JYMI.js";import{a as te,i as y,n as b,o as x,r as ne,t as re}from"./TableHead-DJEohbWN.js";import{n as S,t as ie}from"./InfoContextIcon-Cnynzcmn.js";import{n as C,t as w}from"./ButtonWithHint-34_Unepn.js";import{n as ae}from"./arrays-Bfo2Y4Sy.js";import{a as oe}from"./constants-1jyUsruT.js";import{r as se,t as ce}from"./components-94kgdBzX.js";import{r as le,t as ue}from"./MenuButton-cSyol36r.js";import{n as de,t as T}from"./DownloadIcon-KE9jrgGi.js";import{n as fe,t as E}from"./TextWithOverflowTooltip-DBXBYswg.js";import{a as pe,i as me,t as he}from"./Placeholder-Dh4W-VIJ.js";import{a as D,c as ge,i as _e,l as ve,n as ye,o as be,r as xe,s as Se,t as Ce}from"./useResizeObserver-C44p4mWR.js";import{n as we,t as Te}from"./ColumnDelimiter-D8UI1c5G.js";import{n as Ee,t as De}from"./useIntersectionObserver-DU76mMk_.js";import{n as Oe,t as ke}from"./PrincipalView-2t02cXO3.js";import{n as Ae,t as je}from"./FormattedDate-DSK20auq.js";var O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{O=t(n(),1),i(),u(),o(),m(),x(),h(),y(),b(),g(),f(),c(),be(),fe(),we(),pe(),xe(),De(),S(),oe(),se(),de(),le(),C(),Ce(),Ae(),Oe(),k=r(),A=(0,O.memo)(({data:e,downloadOptions:t,downloadSecurityReport:n,fetchNextPage:r,isFetchingNextPage:i,hasNextPage:o,isLoading:c})=>{let[u,d]=(0,O.useState)(800),[f,m]=(0,O.useState)(),[,h]=(0,O.useState)(),g=(0,O.useRef)(null);ye(g,d);let y=_e({containerWidth:u,columnModels:L,columnSizingInfo:f,defaultMinColumnSize:150}),b=(0,O.useRef)(null);Ee(b,i,o,r);let x=(0,O.useMemo)(()=>[{id:j,header:`Date`,cell:({row:{original:{createdAt:e}}})=>(0,k.jsx)(je,{value:e})},{id:M,header:`Created By`,cell:({row:{original:{createdBy:e}}})=>(0,k.jsx)(ke,{value:e})},{id:N,header:`Status`,cell:({row:{original:{status:e,details:t}}})=>(0,k.jsxs)(a,{display:`flex`,children:[(0,k.jsx)(l,{fontSize:`13px`,children:e}),e!==`running`&&t&&(0,k.jsx)(p,{title:t,children:(0,k.jsx)(ie,{fontSize:`extra-small`,sx:{ml:.5}})})]})},{id:P,header:`Total Number of Services`,cell:({row:{original:{servicesTotal:e}}})=>(0,k.jsx)(E,{tooltipText:e,children:(0,k.jsx)(l,{variant:`inherit`,children:e})})},{id:F,header:`Number of Processed Services`,cell:({row:{original:{servicesProcessed:e}}})=>(0,k.jsx)(E,{tooltipText:e,children:(0,k.jsx)(l,{variant:`inherit`,children:e})})},{id:I,header:``,cell:({row:{original:{processId:e}}})=>(0,k.jsx)(B,{processId:e,onDownloadReport:n,downloadOptions:t})}],[t,n]),{getHeaderGroups:S,getRowModel:C,setColumnSizing:w}=Se({data:e,columns:x,columnResizeMode:`onChange`,getCoreRowModel:ge(),getExpandedRowModel:ve(),onColumnSizingChange:h,onColumnSizingInfoChange:m});return(0,O.useEffect)(()=>w(y),[w,y]),(0,k.jsxs)(ne,{ref:g,children:[(0,k.jsxs)(ee,{children:[(0,k.jsx)(re,{children:S().map(e=>(0,k.jsx)(v,{children:e.headers.map((t,n)=>(0,k.jsxs)(_,{align:`left`,width:y?y[t.id]:t.getSize(),sx:{"&:hover":{borderRight:`2px solid rgba(224, 224, 224, 1)`}},children:[D(t.column.columnDef.header,t.getContext()),n!==e.headers.length-1&&(0,k.jsx)(Te,{header:t,resizable:!0})]},t.id))},e.id))}),(0,k.jsxs)(te,{children:[C().rows.map(e=>(0,k.jsx)(v,{children:e.getVisibleCells().map(e=>(0,k.jsx)(_,{"data-testid":`Cell-${e.column.id}`,children:D(e.column.columnDef.cell,e.getContext())},e.column.id))})),c&&(0,k.jsx)(R,{}),(0,k.jsx)(v,{children:o&&x.map(e=>(0,k.jsx)(_,{ref:b,children:(0,k.jsx)(s,{variant:`text`})},e.id))})]})]}),ae(e)&&!c?(0,k.jsx)(me,{sx:{width:`inherit`},invisible:c,area:he,message:`No reports`,"data-testid":`NoReportsPlaceholder`}):null]})}),j=`date`,M=`created-by`,N=`status`,P=`total-number-of-services`,F=`number-of-processed-services`,I=`actions`,L=[{name:j,width:181},{name:M,width:415},{name:N,width:169},{name:P,width:195},{name:F,width:195},{name:I,width:43}],R=(0,O.memo)(()=>ce((0,k.jsx)(z,{}),5)),z=(0,O.memo)(()=>(0,k.jsxs)(v,{children:[(0,k.jsx)(_,{children:(0,k.jsx)(s,{variant:`rectangular`,width:`70%`})}),(0,k.jsx)(_,{children:(0,k.jsx)(s,{variant:`rectangular`,width:`35%`})}),(0,k.jsx)(_,{children:(0,k.jsx)(s,{variant:`rectangular`,width:`50%`})}),(0,k.jsx)(_,{children:(0,k.jsx)(s,{variant:`rectangular`,width:`20%`})}),(0,k.jsx)(_,{children:(0,k.jsx)(s,{variant:`rectangular`,width:`20%`})}),(0,k.jsx)(_,{children:(0,k.jsx)(s,{variant:`rectangular`,width:`50%`})})]})),B=(0,O.memo)(({processId:e,onDownloadReport:t,downloadOptions:n})=>{let r=(0,O.useCallback)(n=>t(e,n),[t,e]),i=(0,O.useCallback)(()=>t(e),[t,e]);return n?(0,k.jsx)(V,{sx:{visibility:`hidden`},className:`hoverable`,options:n,onClick:r}):(0,k.jsx)(w,{"area-label":`edit`,hint:`Download report`,size:`small`,sx:{visibility:`hidden`,height:`20px`},className:`hoverable`,startIcon:(0,k.jsx)(T,{color:`#626D82`}),onClick:i,"data-testid":`DownloadReportButton`})}),V=(0,O.memo)(({options:e,onClick:t,sx:n,className:r})=>(0,k.jsx)(p,{title:`Download`,children:(0,k.jsx)(a,{sx:{display:`inline`},children:(0,k.jsx)(ue,{sx:n,icon:(0,k.jsx)(T,{color:`#626D82`}),alignItems:`center`,className:r,"data-testid":`DownloadMenuButton`,children:e.map(({value:e,text:n})=>(0,k.jsx)(d,{value:e,onClick:()=>t(e),"data-testid":`Option-${e}`,children:n},`download-option-${e}`))})})})),A.__docgenInfo={description:``,methods:[],displayName:`SecurityReportsTable`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
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
}`,signature:{properties:[{key:`value`,value:{name:`union`,raw:`typeof DOWNLOAD_REPORT | typeof DOWNLOAD_SOURCES`,elements:[{name:`DOWNLOAD_REPORT`},{name:`DOWNLOAD_SOURCES`}],required:!0}},{key:`text`,value:{name:`string`,required:!0}}]}}],raw:`ReportDownloadOption[]`},description:``},downloadSecurityReport:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(processKey: string, value?: DownloadType) => void`,signature:{arguments:[{type:{name:`string`},name:`processKey`},{type:{name:`union`,raw:`typeof DOWNLOAD_REPORT | typeof DOWNLOAD_SOURCES`,elements:[{name:`DOWNLOAD_REPORT`},{name:`DOWNLOAD_SOURCES`}]},name:`value`}],return:{name:`void`}}},description:``},fetchNextPage:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => Promise<number>`,signature:{arguments:[],return:{name:`Promise`,elements:[{name:`number`}],raw:`Promise<number>`}}},description:``},isFetchingNextPage:{required:!0,tsType:{name:`boolean`},description:``},hasNextPage:{required:!0,tsType:{name:`union`,raw:`boolean | undefined`,elements:[{name:`boolean`},{name:`undefined`}]},description:``},isLoading:{required:!0,tsType:{name:`boolean`},description:``}}}})))()}var U,W;function G(){return(G=e((()=>{U=Array.from({length:30},(e,t)=>({processId:`long-process-name-number-${t}`,createdAt:`2021-09-01T12:00:00Z`,createdBy:{type:`user`,id:`id-${t+1}`,avatarUrl:`https://via.placeholder.com/150`,name:`VeryVeryVeryVeryVeryVeryLongUserNameThatExceedsTheUsualLength ${t}`},status:`complete`,errorMessage:void 0,servicesProcessed:2e8+t,servicesTotal:1e7+t})),W=Array.from({length:20},(e,t)=>({processId:`process${t+Math.random()*100}`,createdAt:`2021-09-01T12:00:00Z`,createdBy:{type:`user`,id:`id-${t+Math.random()*10}`,avatarUrl:`https://via.placeholder.com/150`,name:`User ${t+ +Math.round(Math.random()*100)}`},status:t%2==0?`complete`:`error`,errorMessage:t%2==0?void 0:`Error occurred`,servicesProcessed:t*5,servicesTotal:500}))})))()}var K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{n(),H(),G(),K=r(),{useArgs:q}=__STORYBOOK_MODULE_PREVIEW_API__,J={title:`Security Reports Table`,component:A},Y={name:`Empty Data`,args:{data:[],downloadSecurityReport:()=>console.log(`Mock download function executed`),fetchNextPage:()=>Promise.resolve(0),isFetchingNextPage:!1,hasNextPage:!1,isLoading:!1}},X={name:`Long Data Names`,args:{data:U,downloadSecurityReport:()=>console.log(`Mock download function executed`),fetchNextPage:()=>Promise.resolve(0),isFetchingNextPage:!1,hasNextPage:!1,isLoading:!1,downloadOptions:[{value:`download-report`,text:`Download Option 1`},{value:`download-report`,text:`Download Option 2`}]}},Z={name:`Infinity Data`,args:{data:W,downloadSecurityReport:()=>console.log(`Mock download function executed`),isFetchingNextPage:!1,hasNextPage:!0,isLoading:!1},render:function(e){let[{data:t},n]=q();function r(){return n({data:ae(t)?W:[...t,...W]}),Promise.resolve(1)}return(0,K.jsx)(A,{...e,fetchNextPage:r,data:t})}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Empty Data',
  args: {
    data: [],
    downloadSecurityReport: () => console.log('Mock download function executed'),
    fetchNextPage: () => Promise.resolve(0),
    isFetchingNextPage: false,
    hasNextPage: false,
    isLoading: false
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=[`EmptyStory`,`LongDataNamesStory`,`InfinityDataStory`]})))()}$();export{Y as EmptyStory,Z as InfinityDataStory,X as LongDataNamesStory,Q as __namedExportsOrder,J as default};