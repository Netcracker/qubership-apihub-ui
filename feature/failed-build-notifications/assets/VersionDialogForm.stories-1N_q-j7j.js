import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react---BZM-86.js";import{a as r}from"./router-7YU84Hy5.js";import{l as i}from"./dist-F8la4u6j.js";import{n as a}from"./dist-sHNipvf9.js";import{n as o,t as s}from"./debounce-BVqWGKkP.js";import{t as c}from"./jsx-runtime--WVWf14b.js";import{n as l,t as u}from"./Box-CzqjOcoU.js";import{n as d,t as f}from"./Autocomplete-CBV4rH16.js";import{n as ee,t as p}from"./TextField-DVvzje2I.js";import{n as te,t as m}from"./createSvgIcon-CXifaxg9.js";import{n as ne,t as re}from"./Alert-CYQVe-3p.js";import{n as h,t as ie}from"./IconButton-DBH6Y5nc.js";import{n as g,t as _}from"./Typography-B5fOEpx5.js";import{n as ae,t as oe}from"./Button-DrgAR6qf.js";import{n as v,t as se}from"./DialogContent-B-a-mUNQ.js";import{i as ce,n as le,r as ue,t as de}from"./DialogTitle-BLBZWaKA.js";import{n as fe,t as pe}from"./Divider-BmGnZViR.js";import{n as me,t as he}from"./ListItem-DRRcrCyH.js";import{n as y,t as ge}from"./Tooltip-D7s3VaKc.js";import{a as _e,c as ve,d as ye,f as be,h as xe,i as Se,m as Ce,n as we,o as b,p as Te,r as Ee,s as x,t as De,u as Oe}from"./WarningApiProcessorVersion-BxYSp3sr.js";import{E as ke,S as Ae,c as je,d as Me,f as Ne,o as S,p as Pe}from"./iframe-5YGdKeE1.js";import{n as C,t as Fe}from"./EditIcon-DzAjKEE1.js";import{n as w,t as T}from"./UploadButton-C56tM5CN.js";import{n as E,t as Ie}from"./ErrorOutlined-rcPJF3-w.js";import{n as D,t as Le}from"./InfoContextIcon-Cnynzcmn.js";import{n as O,t as Re}from"./LoadingButton-B77sxCaX.js";import{n as ze,t as Be}from"./DialogForm-DbSCbMTB.js";import{f as Ve}from"./src-CObTUYbm-BsxWHHxN.js";import{f as k,l as He,m as Ue}from"./files-Bl9sVDui.js";import{i as A,n as We,r as Ge,t as j}from"./index.esm-hA6-Vtk1.js";import{a as M}from"./constants-1jyUsruT.js";import{t as Ke}from"./mui-DZJR8qot.js";import{a as qe,i as Je,o as N,t as Ye}from"./api-types-CD1TBp8K.js";import{n as Xe,t as P}from"./OptionItem-BKq_f0IR.js";import{a as Ze,c as Qe,d as $e,l as et,n as tt,o as nt,r as rt,s as it,t as at,u as F}from"./version-status-DFBbv5An.js";import{n as ot,t as I}from"./VersionStatusChip-exiRKLEc.js";import{n as st,r as ct,t as lt}from"./versions-Dmv5_tjq.js";import{i as ut,n as L,r as dt,t as R}from"./FileIcon-D778H0Ug.js";import{n as z,t as B}from"./DeleteIcon-BI3SqqhZ.js";import{n as V,t as ft}from"./FileUpload-Dofamow8.js";import{n as pt,t as mt}from"./LabelsAutocomplete-CCvMAJAW.js";import{a as ht,i as gt,n as _t,o as H,r as vt}from"./validations-D_0_OXBG.js";var U;function yt(){return(yt=e((()=>{xe(),U=class extends Ce{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:Pe()},t)}getOptimisticResult(e){return e.behavior=Pe(),super.getOptimisticResult(e)}fetchNextPage({pageParam:e,...t}={}){return this.fetch({...t,meta:{fetchMore:{direction:`forward`,pageParam:e}}})}fetchPreviousPage({pageParam:e,...t}={}){return this.fetch({...t,meta:{fetchMore:{direction:`backward`,pageParam:e}}})}createResult(e,t){let{state:n}=e,r=super.createResult(e,t),{isFetching:i,isRefetching:a}=r,o=i&&n.fetchMeta?.fetchMore?.direction===`forward`,s=i&&n.fetchMeta?.fetchMore?.direction===`backward`;return{...r,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:Me(t,n.data?.pages),hasPreviousPage:Ne(t,n.data?.pages),isFetchingNextPage:o,isFetchingPreviousPage:s,isRefetching:a&&!o&&!s}}}})))()}function bt(e,t,n){let r=ke(e,t,n);return Te(r,U)}function xt(){return(xt=e((()=>{Ae(),yt(),be()})))()}var St,Ct;function wt(){return(wt=e((()=>{te(),St=c(),Ct=m((0,St.jsx)(`path`,{d:`M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z`}),`ErrorRounded`)})))()}var W,Tt;function G(){return(G=e((()=>{g(),W=c(),Tt=({children:e})=>(0,W.jsx)(_,{"data-testid":`ErrorTypography`,variant:`body2`,color:`#FF5260`,children:e}),Tt.__docgenInfo={description:``,methods:[],displayName:`ErrorTypography`}})))()}function Et(e){let{packageId:t}=i(),{status:n,textFilter:r,limit:a=100,page:o=1,enabled:s=!0,sortBy:c,sortOrder:l}=e??{},u=e?.packageKey??t,{data:d,isLoading:f,isInitialLoading:ee,fetchNextPage:p,isFetchingNextPage:te,hasNextPage:m}=bt({queryKey:[jt,u,n,r,c,l,a,o,s],queryFn:({pageParam:e=o,signal:t})=>K(u,n,r,c,l,a,e-1,t),getNextPageParam:(e,t)=>{if(a)return e.length===a?t.length+1:void 0},enabled:!!u&&s,refetchOnMount:!0,staleTime:Mt});return{versions:(0,At.useMemo)(()=>d?.pages.flat()??[],[d?.pages]),areVersionsLoading:f,areVersionsInitiallyLoading:ee,fetchNextPage:p,isFetchingNextPage:te,hasNextPage:m}}function Dt(e){return e.map(e=>rt.get(e).toLowerCase()).join(`,`)}async function K(e,t,n,i,a,o=100,s=0,c){let l=encodeURIComponent(e),u=ye({status:{value:t,toStringValue:e=>Dt(e)},limit:{value:o},page:{value:s},textFilter:{value:n},sortBy:{value:i},sortOrder:{value:a}}),d=`/packages/:packageId/versions`;return Ot(await b(`${r(d,{packageId:l})}?${u}`,{method:`GET`},{customRedirectHandler:e=>x(e,d),basePath:Se},c))}function Ot({versions:e}){return e.map(e=>kt(e))}function kt(e){return{key:e.version,status:e.status,createdAt:e.createdAt,versionLabels:e.versionLabels??[],previousVersion:e?.previousVersion,createdBy:e.createdBy,latestRevision:!e.notLatestRevision}}var At,jt,Mt;function Nt(){return(Nt=e((()=>{xt(),a(),At=n(),F(),Oe(),_e(),ve(),jt=`package-versions-query-key`,Mt=3e4})))()}var Pt,q,Ft,It;function Lt(){return(Lt=e((()=>{l(),h(),g(),Pt=n(),z(),L(),je(),q=c(),Ft=(0,Pt.memo)(({file:e,onDelete:t,onDownload:n})=>{let r=n?It:`black`;return(0,q.jsxs)(u,{display:`flex`,alignItems:`center`,"data-testid":n?`DownloadableFilePreview`:`NotDownloadableFilePreview`,children:[(0,q.jsxs)(u,{onClick:n,sx:{display:`flex`,gap:.5,cursor:n?`pointer`:`default`},children:[(0,q.jsx)(R,{color:r}),(0,q.jsx)(_,{variant:`subtitle2`,fontSize:13,color:r,children:e.name})]}),(0,q.jsx)(ie,{onClick:t,sx:{ml:`auto`},"data-testid":`DeleteButton`,children:(0,q.jsx)(B,{color:S})})]})}),It=`#005DCF`,Ft.__docgenInfo={description:``,methods:[],displayName:`UploadedFilePreview`,props:{file:{required:!0,tsType:{name:`File`},description:``},onDelete:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onDownload:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})))()}var J,Y,Rt;function zt(){return(zt=e((()=>{n(),J=n(),ne(),l(),g(),V(),w(),Lt(),ut(),k(),E(),Y=c(),Rt=(0,J.memo)(({uploadedFile:e,setUploadedFile:t,onDownload:n,downloadAvailable:r,acceptableExtensions:i,errorMessage:a})=>{let o=(0,J.useCallback)(({target:{files:e}})=>t(e?Ue(e)[0]:void 0),[t]),s=(0,J.useCallback)(({dataTransfer:{files:e}})=>t(Ue(e)[0]),[t]),c=(0,J.useCallback)(()=>t(void 0),[t]),l=(0,J.useMemo)(()=>a&&(0,Y.jsx)(re,{icon:(0,Y.jsx)(Ie,{color:`error`}),severity:`error`,sx:{p:0,py:`1px`,pl:2,alignItems:`center`},children:a}),[a]);return e?(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(Ft,{file:e,onDelete:c,onDownload:r?n:void 0}),l]}):(0,Y.jsxs)(u,{sx:{display:`flex`,flexDirection:`column`,gap:1},children:[(0,Y.jsx)(ft,{onDrop:s,acceptableFileTypes:i,children:(0,Y.jsxs)(u,{sx:{display:`flex`,alignItems:`center`,justifyContent:`center`,backgroundColor:`rgb(242, 243, 245)`,boxSizing:`border-box`,borderRadius:`10px`,width:1,height:`44px`},children:[(0,Y.jsx)(dt,{sx:{color:`#626D82`,mr:`8px`}}),(0,Y.jsx)(_,{variant:`subtitle2`,fontSize:13,children:`Drop ${He(i)} file here to attach or`}),(0,Y.jsx)(T,{title:`browse`,onUpload:o,buttonSxProp:{p:0,ml:.5,minWidth:`auto`,height:1,display:`flex`},"data-testid":`BrowseButton`,acceptableFileTypes:i})]})}),l]})}),Rt.__docgenInfo={description:``,methods:[],displayName:`FileUploadField`,props:{uploadedFile:{required:!0,tsType:{name:`union`,raw:`File | undefined`,elements:[{name:`File`},{name:`undefined`}]},description:``},setUploadedFile:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(file: File | undefined) => void`,signature:{arguments:[{type:{name:`union`,raw:`File | undefined`,elements:[{name:`File`},{name:`undefined`}]},name:`file`}],return:{name:`void`}}},description:``},onDownload:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},downloadAvailable:{required:!0,tsType:{name:`boolean`},description:``},acceptableExtensions:{required:!0,tsType:{name:`Array`,elements:[{name:`union`,raw:`| typeof YAML_FILE_EXTENSION
| typeof YML_FILE_EXTENSION
| typeof JSON_FILE_EXTENSION
| typeof MD_FILE_EXTENSION
| typeof HTML_FILE_EXTENSION
| typeof GRAPHQL_FILE_EXTENSION
| typeof GQL_FILE_EXTENSION
| typeof PROTO_FILE_EXTENSION
| typeof CSV_FILE_EXTENSION
| typeof SQL_FILE_EXTENSION
| typeof DDL_FILE_EXTENSION`,elements:[{name:`YAML_FILE_EXTENSION`},{name:`YML_FILE_EXTENSION`},{name:`JSON_FILE_EXTENSION`},{name:`MD_FILE_EXTENSION`},{name:`HTML_FILE_EXTENSION`},{name:`GRAPHQL_FILE_EXTENSION`},{name:`GQL_FILE_EXTENSION`},{name:`PROTO_FILE_EXTENSION`},{name:`CSV_FILE_EXTENSION`},{name:`SQL_FILE_EXTENSION`},{name:`DDL_FILE_EXTENSION`}]}],raw:`FileExtension[]`},description:``},errorMessage:{required:!1,tsType:{name:`string`},description:``}}}})))()}function Bt(e){return!!e}function X(e){return(t,n,r)=>{r===`input`&&e(t,n)}}function Vt(e){return()=>{e?.(``)}}var Z,Q,Ht,Ut,Wt,Gt,Kt;function qt(){return(qt=e((()=>{n(),Z=n(),We(),d(),l(),ae(),o(),ce(),v(),le(),fe(),me(),ee(),y(),g(),wt(),O(),ze(),ot(),F(),H(),C(),ut(),ct(),G(),Nt(),pt(),Xe(),M(),D(),k(),zt(),Ee(),N(),Ve(),Q=c(),Ht=n(),Ut=(0,Z.memo)(e=>{let{open:t,setOpen:n,onSubmit:r,control:i,setValue:a,formState:o,selectedWorkspace:c,workspaces:l,areWorkspacesLoading:d,onSetWorkspace:ee,onSetTargetPackage:te,onSetTargetVersion:m,onSetTargetStatus:ne,onSetTargetLabels:re,onWorkspacesFilter:h,arePackagesLoading:ie,areVersionsLoading:g,onVersionsFilter:ae,onPackagesFilter:v,packages:ce,packagesTitle:le,versions:fe,previousVersionsPackageKey:me,previousVersions:y,getVersionLabels:_e,packagePermissions:ve,releaseVersionPattern:ye,isPublishing:be,extraValidationMassage:xe,setSelectedPreviousVersion:Se,title:Ce,submitButtonTittle:b,descriptorVersionFieldTitle:Te,descriptorFileFieldTitle:Ee,hideCSVRelatedFields:x=!0,hideDescriptorField:Oe,hideDescriptorVersionField:ke,hideSaveMessageField:Ae,hidePreviousVersionField:je,hideCopyPackageFields:Me,publishButtonDisabled:Ne,publishFieldsDisabled:S,currentPackageKey:Pe}=e,{errors:C}=o,w=A({control:i,name:`workspace`}),T=A({control:i,name:`package`}),E=A({control:i,name:`status`}),Ie=A({control:i,name:`apiType`}),D=A({control:i,name:`previousVersion`}),O=A({control:i,name:`descriptorFile`}),ze=E===Ze,Ve=(0,Z.useCallback)((e,t)=>h?.(t),[h]),k=(0,Z.useCallback)((e,t)=>v?.(t),[v]),He=(0,Z.useCallback)((e,t)=>{m?.(t),ae?.(t)},[ae,m]),Ue=(0,Z.useCallback)((e,t)=>re?.(t),[re]),We=(0,Z.useCallback)((e,t)=>ne?.(t),[ne]),[Ge,M]=(0,Z.useState)(!1),N=Qe(E),Xe=(0,Z.useCallback)(e=>e===`No previous release version`?N.noPreviousOptionLabel:lt(e).versionKey,[N]),rt=(0,Z.useMemo)(()=>et(E),[E]),[at,F]=(0,Z.useState)(``),ot=(0,Z.useMemo)(()=>s(F,500),[]),{versions:ct,areVersionsLoading:ut}=Et({packageKey:me,status:rt,textFilter:at,enabled:!je&&y===void 0&&!!me}),L=(0,Z.useMemo)(()=>st(y??ct),[y,ct]),R=(0,Z.useMemo)(()=>new Map(L.map(({key:e,status:t})=>[e,t])),[L]),[z,B]=(0,Z.useState)();(0,Z.useEffect)(()=>{if(!D||D===`No previous release version`){B(void 0);return}let e=R.get(D);if(e){B({version:D,status:e});return}B(e=>e?.version===D?e:void 0)},[D,R]);let V=(0,Z.useCallback)(e=>R.get(e)??(e===z?.version?z.status:void 0),[R,z]),ft=(0,Z.useCallback)(e=>{let t=V(e);return t?(0,Q.jsx)(I,{status:t}):null},[V]),pt=(0,Z.useMemo)(()=>{let e=L.map(({key:e})=>e),t=D&&D!==`No previous release version`&&!e.includes(D);return[tt,...t?[D]:[],...e]},[L,D]),H=(0,Z.useMemo)(()=>{if(!D||D===`No previous release version`)return!1;let e=V(D);return e?!$e(E,e):!1},[D,V,E]),U=(0,Z.useMemo)(()=>s(Ve,500),[Ve]),yt=(0,Z.useMemo)(()=>s(k,500),[k]),bt=(0,Z.useMemo)(()=>s(He,500),[He]),[xt,St]=(0,Z.useState)(null),[wt,W]=(0,Z.useState)(!1),G=(0,Z.useCallback)(e=>{St(e?.target?.result?String(e.target.result):null),W(!1)},[]);(0,Z.useEffect)(()=>{c?.key&&a(`workspace`,c)},[c,c?.key,a]),(0,Z.useEffect)(()=>{if(!O)return;let e=new FileReader;e.onload=G,e.onerror=G,W(!0),e.readAsText(O)},[O,G]);let Dt=(0,Z.useMemo)(()=>!Ae||!ke||!Oe,[Oe,ke,Ae]),K=(0,Z.useMemo)(()=>S||!Me&&!T||!x&&!w,[S,Me,T,x,w]);return(0,Q.jsxs)(Be,{open:t,onClose:()=>n(!1),onSubmit:r,children:[(0,Q.jsx)(de,{"data-testid":`DialogTitle`,children:Ce??`Publish`}),(0,Q.jsxs)(se,{sx:{width:440},children:[!Ae&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(_,{variant:`button`,children:`Save`}),(0,Q.jsx)(j,{name:`message`,control:i,render:({field:e})=>(0,Q.jsx)(p,{...e,multiline:!0,required:!0,autoComplete:`on`,rows:`4`,type:`text`,label:`Message`,"data-testid":`MessageTextField`})}),(0,Q.jsx)(_,{variant:`button`,children:`Publish`})]}),!ke&&(0,Q.jsx)(j,{name:`descriptorVersion`,control:i,rules:{validate:{restrictedSymbols:e=>ht(e??``)}},render:({field:e})=>(0,Q.jsx)(p,{...e,value:e.value??``,required:!0,label:Te??`Descriptor Version`,error:!!C.descriptorVersion,onChange:e=>a(`descriptorVersion`,e.target.value??``),"data-testid":`DescriptorVersionTextField`})}),!Oe&&(0,Q.jsx)(j,{name:`descriptorFile`,control:i,rules:{validate:{correctUpload:()=>Bt(xt)}},render:({field:e})=>(0,Q.jsxs)(u,{component:`label`,htmlFor:`contained-button-file`,children:[(0,Q.jsx)(u,{component:`input`,id:`contained-button-file`,display:`none`,multiple:!0,type:`file`,onChange:({target:{files:e}})=>{a(`descriptorFile`,e?.[0]??null)}}),(0,Q.jsx)(p,{...e,sx:{label:{height:`100%`,width:`100%`}},value:e.value?.name??``,label:Ee??`Descriptor File`,error:!!C.descriptorFile,helperText:C.descriptorFile?.message,required:!0,InputProps:{endAdornment:(0,Q.jsxs)(u,{display:`flex`,flexDirection:`row`,sx:{cursor:`pointer`},children:[e.value?(0,Q.jsx)(Fe,{}):(0,Q.jsx)(dt,{fontSize:`small`,sx:{color:`#353C4E`}}),!!C.descriptorFile&&(0,Q.jsx)(Ct,{color:`error`})]}),inputProps:{readOnly:!0}},"data-testid":`DescriptorFileTextField`})]})}),Dt&&(0,Q.jsx)(pe,{sx:{mx:0,mt:1,mb:.5},orientation:`horizontal`}),!x&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(u,{gap:.5,alignItems:`center`,pb:1,children:(0,Q.jsx)(j,{name:`apiType`,control:i,rules:{required:!0},render:({field:{value:e,onChange:t}})=>(0,Q.jsx)(f,{value:e??Je,options:Ye,isOptionEqualToValue:(e,t)=>e===t,renderOption:(e,t)=>(0,Ht.createElement)(he,{...e,key:t,"data-testid":`Option-${t}`},qe[t]),getOptionLabel:e=>qe[e],onChange:(e,n)=>{t(n)},renderInput:e=>(0,Q.jsx)(p,{required:!0,...e,label:`API type`}),"data-testid":`ApiTypeAutocomplete`})})}),(0,Q.jsxs)(u,{display:`flex`,gap:.5,alignItems:`center`,pb:1,children:[(0,Q.jsxs)(u,{sx:{lineHeight:1},children:[(0,Q.jsx)(_,{variant:`button`,component:`span`,children:`Dashboard Version Config`}),(0,Q.jsx)(_,{variant:`button`,component:`span`,color:`#FF5260`,children:`*`})]}),(0,Q.jsx)(ge,{disableHoverListener:!1,placement:`right`,title:Ie===`rest`?Wt:Gt,PopperProps:{sx:{".MuiTooltip-tooltip":{maxWidth:`600px`}}},children:(0,Q.jsx)(Le,{fontSize:`extra-small`})})]}),(0,Q.jsx)(j,{name:`file`,rules:{required:`Please upload a file`,validate:{checkFileType:e=>_t(e,[`.csv`])}},control:i,render:({field:{value:e,onChange:t}})=>(0,Q.jsx)(Rt,{errorMessage:C.file?.message,uploadedFile:e,setUploadedFile:e=>t(e),downloadAvailable:!1,acceptableExtensions:[`.csv`]})}),(0,Q.jsxs)(u,{display:`flex`,gap:.5,alignItems:`center`,pt:2,children:[(0,Q.jsx)(_,{variant:`button`,children:`Package Search Scope for Dashboard Version`}),(0,Q.jsx)(ge,{disableHoverListener:!1,placement:`right`,title:Kt,PopperProps:{sx:{".MuiTooltip-tooltip":{maxWidth:`600px`}}},children:(0,Q.jsx)(Le,{fontSize:`extra-small`})})]}),(0,Q.jsx)(j,{name:`workspace`,control:i,render:({field:{value:e}})=>(0,Q.jsx)(f,{value:e,options:l??[],loading:d,isOptionEqualToValue:(e,t)=>e.key===t.key,getOptionLabel:e=>e?.name??``,renderOption:(e,{key:t,name:n})=>(0,Q.jsx)(P,{props:e,title:n,subtitle:t},t),onChange:(e,t)=>{a(`workspace`,t??null),a(`package`,null),ee?.(t)},onInputChange:X(U),onClose:Vt(h),renderInput:e=>(0,Q.jsx)(p,{required:!0,...e,label:`Workspace`}),"data-testid":`WorkspaceAutocomplete`})}),(0,Q.jsx)(u,{sx:{lineHeight:1},pt:2,children:(0,Q.jsx)(_,{variant:`button`,children:`Publish Info`})})]}),!Me&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(_,{sx:{mb:1},variant:`body2`,children:[`Target `,le]}),(0,Q.jsx)(j,{name:`workspace`,control:i,render:({field:{value:e}})=>(0,Q.jsx)(f,{value:e,options:l??[],loading:d,isOptionEqualToValue:(e,t)=>e.key===t.key,getOptionLabel:e=>e?.name??``,renderOption:(e,{key:t,name:n})=>(0,Q.jsx)(P,{props:e,title:n,subtitle:t},t),onChange:(e,t)=>{a(`workspace`,t??null),a(`package`,null),ee?.(t)},onClose:Vt(h),onInputChange:X(U),renderInput:e=>(0,Q.jsx)(p,{required:!0,...e,label:`Workspace`}),"data-testid":`WorkspaceAutocomplete`})}),(0,Q.jsx)(j,{name:`package`,control:i,render:({field:{value:e}})=>(0,Q.jsx)(f,{value:e,disabled:!w,isOptionEqualToValue:(e,t)=>e.key===t.key,options:ce??[],loading:ie,filterOptions:Ke,getOptionLabel:e=>e?.name??``,renderOption:(e,{key:t,name:n})=>(0,Q.jsx)(P,{props:e,title:n,subtitle:t},t),onInputChange:X(yt),renderInput:e=>(0,Q.jsx)(p,{...e,required:!0,label:le}),onChange:(e,t)=>{a(`package`,t),te?.(t),D!==`No previous release version`&&a(`previousVersion`,`No previous release version`),M(!1)},onClose:Vt(v),"data-testid":`PackageAutocomplete`})}),(0,Q.jsx)(_,{sx:{mb:1,mt:2},variant:`body2`,children:`Target Version Info`})]}),(0,Q.jsx)(j,{name:`version`,control:i,rules:{validate:{checkSpaces:e=>!ze||!ye||vt(e,ye),restrictedSymbols:ht,notEqualToPrevious:e=>gt(e,lt(D).versionKey)}},render:({field:e})=>(0,Q.jsx)(f,{freeSolo:!0,disabled:!e||!_e||K,value:e.value||``,options:fe??[],loading:g,renderOption:(e,t)=>(0,Ht.createElement)(he,{...e,key:t},t),onInputChange:X(bt),filterOptions:Ke,renderInput:t=>(0,Q.jsx)(p,{...e,...t,required:!0,label:`Version`,error:!!C.version}),onChange:(e,t)=>{a(`version`,t??``),m?.(t??``)},onClose:Vt(ae),"data-testid":`VersionAutocomplete`})}),(0,Q.jsx)(j,{name:`status`,control:i,render:({field:{value:e}})=>(0,Q.jsx)(f,{disableClearable:!0,value:e??null,options:nt,getOptionDisabled:e=>!ve.includes(it[e]),disabled:K,renderOption:(e,t)=>(0,Ht.createElement)(he,{...e,key:t,"data-testid":`Option-${t}`},(0,Q.jsx)(I,{status:t})),onChange:(e,t)=>{We(e,t||`draft`),a(`status`,t)},renderInput:e=>(0,Q.jsx)(p,{...e,label:`Status`,required:!0,InputProps:{...e.InputProps,sx:{"& .MuiInputBase-input":{color:`transparent`,caretColor:`transparent`,"::selection":{background:`transparent`,color:`transparent`}},"& .Mui-disabled":{WebkitTextFillColor:`transparent`}},startAdornment:E?(0,Q.jsx)(I,{sx:{height:16,mb:1},status:E}):null}}),"data-testid":`StatusAutocomplete`})}),(0,Q.jsx)(j,{name:`labels`,control:i,render:({field:e})=>(0,Q.jsx)(mt,{disabled:K,onChange:(e,t)=>{Ue(e,t),a(`labels`,t??[])},value:e.value})}),!je&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(pe,{sx:{mx:0,mt:1,mb:.5},orientation:`horizontal`}),(0,Q.jsx)(j,{name:`previousVersion`,control:i,render:({field:e})=>(0,Q.jsx)(f,{disabled:K,value:e.value??null,options:pt,loading:ut,filterOptions:Ke,onInputChange:X((e,t)=>ot(t)),onClose:()=>ot(``),getOptionLabel:Xe,isOptionEqualToValue:(e,t)=>e===lt(t).versionKey,renderOption:(e,t)=>(0,Q.jsx)(P,{props:e,title:Xe(t),chip:ft(t),"data-testid":`Option-${t}`},t),renderInput:e=>{let t=D?V(D):void 0;return(0,Q.jsx)(p,{...e,required:!0,label:N.fieldLabel,error:H,helperText:H?`A release version must have a release previous version`:xe,InputProps:{...e.InputProps,endAdornment:(0,Q.jsxs)(Q.Fragment,{children:[t&&(0,Q.jsx)(I,{sx:{mr:.5,height:`18px`},status:t}),e.InputProps.endAdornment]})}})},onChange:(e,t)=>{a(`previousVersion`,t??`No previous release version`),Se?.(t??`No previous release version`),(!t||t===`No previous release version`)&&M(!1)},"data-testid":`PreviousReleaseVersionAutocomplete`})})]}),C.version?.message&&(0,Q.jsx)(u,{pt:2,children:(0,Q.jsx)(Tt,{children:C.version?.message})}),(0,Q.jsx)(we,{versionKey:D===`No previous release version`?void 0:D,packageKey:T?.key||Pe,type:De,onWarningTextChange:e=>M(!!e)})]}),(0,Q.jsxs)(ue,{children:[(0,Q.jsx)(Re,{variant:`contained`,type:`submit`,loading:be,disabled:wt||Ne||S||Ge||H,"data-testid":b?`${b}Button`:`PublishButton`,children:b??`Publish`}),(0,Q.jsx)(oe,{variant:`outlined`,onClick:()=>n(!1),"data-testid":`CancelButton`,children:`Close`})]})]})}),Wt=`CSV file must have the following information: "serviceName" and "serviceVersion". Published dashboard version will include package release versions (from selected workspace) for specified services. Also, "method" and "path" of REST API operations for services should be defined in the file. In this case, the system will create operations group with the operations for specified method and path.`,Gt=`CSV file must have the following information: "serviceName" and "serviceVersion". Published dashboard version will include package release versions (from selected workspace) for specified services. Also, "type" and "method" of GraphQL operations for services should be defined in the file. In this case, the system will create operations group with the operations for specified type and method.`,Kt=`The workspace in which package versions for services from the CSV configuration will be searched. The package versions found in this workspace will be included into the dashboard version.`,Ut.__docgenInfo={description:``,methods:[],displayName:`VersionDialogForm`,props:{open:{required:!0,tsType:{name:`boolean`},description:``},setOpen:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`value`}],return:{name:`void`}}},description:``},onSubmit:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},control:{required:!0,tsType:{name:`Control`,elements:[{name:`T`}],raw:`Control<T>`},description:``},setValue:{required:!0,tsType:{name:`UseFormSetValue`,elements:[{name:`T`}],raw:`UseFormSetValue<T>`},description:``},formState:{required:!0,tsType:{name:`FormState`,elements:[{name:`T`}],raw:`FormState<T>`},description:``},packagePermissions:{required:!0,tsType:{name:`ReadonlyArray`,elements:[{name:`union`,raw:`| typeof READ_PERMISSION
| typeof CREATE_AND_UPDATE_PACKAGE_PERMISSION
| typeof DELETE_PACKAGE_PERMISSION
| typeof MANAGE_DRAFT_VERSION_PERMISSION
| typeof MANAGE_RELEASE_VERSION_PERMISSION
| typeof MANAGE_DEPRECATED_VERSION_PERMISSION
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`},description:``},releaseVersionPattern:{required:!0,tsType:{name:`union`,raw:`string | undefined`,elements:[{name:`string`},{name:`undefined`}]},description:``},selectedWorkspace:{required:!1,tsType:{name:`union`,raw:`Package | null`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
  description?: string
  isFavorite?: boolean
  serviceName?: string
  // todo remove userRole after full transition to permissions
  userRole?: UserRole
  permissions?: PackagePermissions
  restGroupingPrefix?: string
  parents?: ParentPackages
  defaultRole?: DefaultPackageRoleType
  packageVisibility?: boolean
  defaultReleaseVersion?: string
  releaseVersionPattern?: string
  defaultVersion?: VersionKey
  lastReleaseVersionDetails?: LastReleaseVersionDetails
  bwcErrors?: BwcErrors
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}},{key:`description`,value:{name:`string`,required:!1}},{key:`isFavorite`,value:{name:`boolean`,required:!1}},{key:`serviceName`,value:{name:`string`,required:!1}},{key:`userRole`,value:{name:`union`,raw:`| typeof ADMIN_USER_ROLE_ID
| typeof EDITOR_USER_ROLE_ID
| typeof VIEWER_USER_ROLE_ID`,elements:[{name:`ADMIN_USER_ROLE_ID`},{name:`EDITOR_USER_ROLE_ID`},{name:`VIEWER_USER_ROLE_ID`}],required:!1}},{key:`permissions`,value:{name:`ReadonlyArray`,elements:[{name:`union`,raw:`| typeof READ_PERMISSION
| typeof CREATE_AND_UPDATE_PACKAGE_PERMISSION
| typeof DELETE_PACKAGE_PERMISSION
| typeof MANAGE_DRAFT_VERSION_PERMISSION
| typeof MANAGE_RELEASE_VERSION_PERMISSION
| typeof MANAGE_DEPRECATED_VERSION_PERMISSION
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!1}},{key:`restGroupingPrefix`,value:{name:`string`,required:!1}},{key:`parents`,value:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}}]}}],raw:`ReadonlyArray<ParentPackage>`,required:!1}},{key:`defaultRole`,value:{name:`union`,raw:`| typeof PUBLIC_PACKAGE_ROLE
| typeof PRIVATE_PACKAGE_ROLE`,elements:[{name:`PUBLIC_PACKAGE_ROLE`},{name:`PRIVATE_PACKAGE_ROLE`}],required:!1}},{key:`packageVisibility`,value:{name:`boolean`,required:!1}},{key:`defaultReleaseVersion`,value:{name:`string`,required:!1}},{key:`releaseVersionPattern`,value:{name:`string`,required:!1}},{key:`defaultVersion`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`lastReleaseVersionDetails`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  version?: string
  latestRevision?: boolean
  summary?: PackageSummary
}`,signature:{properties:[{key:`version`,value:{name:`string`,required:!1}},{key:`latestRevision`,value:{name:`boolean`,required:!1}},{key:`summary`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  breaking?: number
  semiBreaking?: number
  nonBreaking?: number
  deprecate?: number
  annotation?: number
  unclassified?: number
}`,signature:{properties:[{key:`breaking`,value:{name:`number`,required:!1}},{key:`semiBreaking`,value:{name:`number`,required:!1}},{key:`nonBreaking`,value:{name:`number`,required:!1}},{key:`deprecate`,value:{name:`number`,required:!1}},{key:`annotation`,value:{name:`number`,required:!1}},{key:`unclassified`,value:{name:`number`,required:!1}}]}}],raw:`Readonly<{
  breaking?: number
  semiBreaking?: number
  nonBreaking?: number
  deprecate?: number
  annotation?: number
  unclassified?: number
}>`,required:!1}}]}}],raw:`Readonly<{
  version?: string
  latestRevision?: boolean
  summary?: PackageSummary
}>`,required:!1}},{key:`bwcErrors`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: StatusMarkerVariant
  count: number
}`,signature:{properties:[{key:`type`,value:{name:`union`,raw:`| typeof LOADING_STATUS_MARKER_VARIANT
| typeof DEFAULT_STATUS_MARKER_VARIANT
| typeof SUCCESS_STATUS_MARKER_VARIANT
| typeof WARNING_STATUS_MARKER_VARIANT
| typeof ERROR_STATUS_MARKER_VARIANT`,elements:[{name:`LOADING_STATUS_MARKER_VARIANT`},{name:`DEFAULT_STATUS_MARKER_VARIANT`},{name:`SUCCESS_STATUS_MARKER_VARIANT`},{name:`WARNING_STATUS_MARKER_VARIANT`},{name:`ERROR_STATUS_MARKER_VARIANT`}],required:!0}},{key:`count`,value:{name:`number`,required:!0}}]}}],raw:`Readonly<{
  type: StatusMarkerVariant
  count: number
}>`,required:!1}}]}}],raw:`Readonly<{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
  description?: string
  isFavorite?: boolean
  serviceName?: string
  // todo remove userRole after full transition to permissions
  userRole?: UserRole
  permissions?: PackagePermissions
  restGroupingPrefix?: string
  parents?: ParentPackages
  defaultRole?: DefaultPackageRoleType
  packageVisibility?: boolean
  defaultReleaseVersion?: string
  releaseVersionPattern?: string
  defaultVersion?: VersionKey
  lastReleaseVersionDetails?: LastReleaseVersionDetails
  bwcErrors?: BwcErrors
}>`},{name:`null`}]},description:``},workspaces:{required:!1,tsType:{name:`ReadonlyArray`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
  description?: string
  isFavorite?: boolean
  serviceName?: string
  // todo remove userRole after full transition to permissions
  userRole?: UserRole
  permissions?: PackagePermissions
  restGroupingPrefix?: string
  parents?: ParentPackages
  defaultRole?: DefaultPackageRoleType
  packageVisibility?: boolean
  defaultReleaseVersion?: string
  releaseVersionPattern?: string
  defaultVersion?: VersionKey
  lastReleaseVersionDetails?: LastReleaseVersionDetails
  bwcErrors?: BwcErrors
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}},{key:`description`,value:{name:`string`,required:!1}},{key:`isFavorite`,value:{name:`boolean`,required:!1}},{key:`serviceName`,value:{name:`string`,required:!1}},{key:`userRole`,value:{name:`union`,raw:`| typeof ADMIN_USER_ROLE_ID
| typeof EDITOR_USER_ROLE_ID
| typeof VIEWER_USER_ROLE_ID`,elements:[{name:`ADMIN_USER_ROLE_ID`},{name:`EDITOR_USER_ROLE_ID`},{name:`VIEWER_USER_ROLE_ID`}],required:!1}},{key:`permissions`,value:{name:`ReadonlyArray`,elements:[{name:`union`,raw:`| typeof READ_PERMISSION
| typeof CREATE_AND_UPDATE_PACKAGE_PERMISSION
| typeof DELETE_PACKAGE_PERMISSION
| typeof MANAGE_DRAFT_VERSION_PERMISSION
| typeof MANAGE_RELEASE_VERSION_PERMISSION
| typeof MANAGE_DEPRECATED_VERSION_PERMISSION
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!1}},{key:`restGroupingPrefix`,value:{name:`string`,required:!1}},{key:`parents`,value:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}}]}}],raw:`ReadonlyArray<ParentPackage>`,required:!1}},{key:`defaultRole`,value:{name:`union`,raw:`| typeof PUBLIC_PACKAGE_ROLE
| typeof PRIVATE_PACKAGE_ROLE`,elements:[{name:`PUBLIC_PACKAGE_ROLE`},{name:`PRIVATE_PACKAGE_ROLE`}],required:!1}},{key:`packageVisibility`,value:{name:`boolean`,required:!1}},{key:`defaultReleaseVersion`,value:{name:`string`,required:!1}},{key:`releaseVersionPattern`,value:{name:`string`,required:!1}},{key:`defaultVersion`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`lastReleaseVersionDetails`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  version?: string
  latestRevision?: boolean
  summary?: PackageSummary
}`,signature:{properties:[{key:`version`,value:{name:`string`,required:!1}},{key:`latestRevision`,value:{name:`boolean`,required:!1}},{key:`summary`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  breaking?: number
  semiBreaking?: number
  nonBreaking?: number
  deprecate?: number
  annotation?: number
  unclassified?: number
}`,signature:{properties:[{key:`breaking`,value:{name:`number`,required:!1}},{key:`semiBreaking`,value:{name:`number`,required:!1}},{key:`nonBreaking`,value:{name:`number`,required:!1}},{key:`deprecate`,value:{name:`number`,required:!1}},{key:`annotation`,value:{name:`number`,required:!1}},{key:`unclassified`,value:{name:`number`,required:!1}}]}}],raw:`Readonly<{
  breaking?: number
  semiBreaking?: number
  nonBreaking?: number
  deprecate?: number
  annotation?: number
  unclassified?: number
}>`,required:!1}}]}}],raw:`Readonly<{
  version?: string
  latestRevision?: boolean
  summary?: PackageSummary
}>`,required:!1}},{key:`bwcErrors`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: StatusMarkerVariant
  count: number
}`,signature:{properties:[{key:`type`,value:{name:`union`,raw:`| typeof LOADING_STATUS_MARKER_VARIANT
| typeof DEFAULT_STATUS_MARKER_VARIANT
| typeof SUCCESS_STATUS_MARKER_VARIANT
| typeof WARNING_STATUS_MARKER_VARIANT
| typeof ERROR_STATUS_MARKER_VARIANT`,elements:[{name:`LOADING_STATUS_MARKER_VARIANT`},{name:`DEFAULT_STATUS_MARKER_VARIANT`},{name:`SUCCESS_STATUS_MARKER_VARIANT`},{name:`WARNING_STATUS_MARKER_VARIANT`},{name:`ERROR_STATUS_MARKER_VARIANT`}],required:!0}},{key:`count`,value:{name:`number`,required:!0}}]}}],raw:`Readonly<{
  type: StatusMarkerVariant
  count: number
}>`,required:!1}}]}}],raw:`Readonly<{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
  description?: string
  isFavorite?: boolean
  serviceName?: string
  // todo remove userRole after full transition to permissions
  userRole?: UserRole
  permissions?: PackagePermissions
  restGroupingPrefix?: string
  parents?: ParentPackages
  defaultRole?: DefaultPackageRoleType
  packageVisibility?: boolean
  defaultReleaseVersion?: string
  releaseVersionPattern?: string
  defaultVersion?: VersionKey
  lastReleaseVersionDetails?: LastReleaseVersionDetails
  bwcErrors?: BwcErrors
}>`}],raw:`ReadonlyArray<Package>`},description:``},onWorkspacesFilter:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},onVersionsFilter:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},onPackagesFilter:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},onSetWorkspace:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(workspace: Package | null) => void`,signature:{arguments:[{type:{name:`union`,raw:`Package | null`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
  description?: string
  isFavorite?: boolean
  serviceName?: string
  // todo remove userRole after full transition to permissions
  userRole?: UserRole
  permissions?: PackagePermissions
  restGroupingPrefix?: string
  parents?: ParentPackages
  defaultRole?: DefaultPackageRoleType
  packageVisibility?: boolean
  defaultReleaseVersion?: string
  releaseVersionPattern?: string
  defaultVersion?: VersionKey
  lastReleaseVersionDetails?: LastReleaseVersionDetails
  bwcErrors?: BwcErrors
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}},{key:`description`,value:{name:`string`,required:!1}},{key:`isFavorite`,value:{name:`boolean`,required:!1}},{key:`serviceName`,value:{name:`string`,required:!1}},{key:`userRole`,value:{name:`union`,raw:`| typeof ADMIN_USER_ROLE_ID
| typeof EDITOR_USER_ROLE_ID
| typeof VIEWER_USER_ROLE_ID`,elements:[{name:`ADMIN_USER_ROLE_ID`},{name:`EDITOR_USER_ROLE_ID`},{name:`VIEWER_USER_ROLE_ID`}],required:!1}},{key:`permissions`,value:{name:`ReadonlyArray`,elements:[{name:`union`,raw:`| typeof READ_PERMISSION
| typeof CREATE_AND_UPDATE_PACKAGE_PERMISSION
| typeof DELETE_PACKAGE_PERMISSION
| typeof MANAGE_DRAFT_VERSION_PERMISSION
| typeof MANAGE_RELEASE_VERSION_PERMISSION
| typeof MANAGE_DEPRECATED_VERSION_PERMISSION
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!1}},{key:`restGroupingPrefix`,value:{name:`string`,required:!1}},{key:`parents`,value:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}}]}}],raw:`ReadonlyArray<ParentPackage>`,required:!1}},{key:`defaultRole`,value:{name:`union`,raw:`| typeof PUBLIC_PACKAGE_ROLE
| typeof PRIVATE_PACKAGE_ROLE`,elements:[{name:`PUBLIC_PACKAGE_ROLE`},{name:`PRIVATE_PACKAGE_ROLE`}],required:!1}},{key:`packageVisibility`,value:{name:`boolean`,required:!1}},{key:`defaultReleaseVersion`,value:{name:`string`,required:!1}},{key:`releaseVersionPattern`,value:{name:`string`,required:!1}},{key:`defaultVersion`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`lastReleaseVersionDetails`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  version?: string
  latestRevision?: boolean
  summary?: PackageSummary
}`,signature:{properties:[{key:`version`,value:{name:`string`,required:!1}},{key:`latestRevision`,value:{name:`boolean`,required:!1}},{key:`summary`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  breaking?: number
  semiBreaking?: number
  nonBreaking?: number
  deprecate?: number
  annotation?: number
  unclassified?: number
}`,signature:{properties:[{key:`breaking`,value:{name:`number`,required:!1}},{key:`semiBreaking`,value:{name:`number`,required:!1}},{key:`nonBreaking`,value:{name:`number`,required:!1}},{key:`deprecate`,value:{name:`number`,required:!1}},{key:`annotation`,value:{name:`number`,required:!1}},{key:`unclassified`,value:{name:`number`,required:!1}}]}}],raw:`Readonly<{
  breaking?: number
  semiBreaking?: number
  nonBreaking?: number
  deprecate?: number
  annotation?: number
  unclassified?: number
}>`,required:!1}}]}}],raw:`Readonly<{
  version?: string
  latestRevision?: boolean
  summary?: PackageSummary
}>`,required:!1}},{key:`bwcErrors`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: StatusMarkerVariant
  count: number
}`,signature:{properties:[{key:`type`,value:{name:`union`,raw:`| typeof LOADING_STATUS_MARKER_VARIANT
| typeof DEFAULT_STATUS_MARKER_VARIANT
| typeof SUCCESS_STATUS_MARKER_VARIANT
| typeof WARNING_STATUS_MARKER_VARIANT
| typeof ERROR_STATUS_MARKER_VARIANT`,elements:[{name:`LOADING_STATUS_MARKER_VARIANT`},{name:`DEFAULT_STATUS_MARKER_VARIANT`},{name:`SUCCESS_STATUS_MARKER_VARIANT`},{name:`WARNING_STATUS_MARKER_VARIANT`},{name:`ERROR_STATUS_MARKER_VARIANT`}],required:!0}},{key:`count`,value:{name:`number`,required:!0}}]}}],raw:`Readonly<{
  type: StatusMarkerVariant
  count: number
}>`,required:!1}}]}}],raw:`Readonly<{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
  description?: string
  isFavorite?: boolean
  serviceName?: string
  // todo remove userRole after full transition to permissions
  userRole?: UserRole
  permissions?: PackagePermissions
  restGroupingPrefix?: string
  parents?: ParentPackages
  defaultRole?: DefaultPackageRoleType
  packageVisibility?: boolean
  defaultReleaseVersion?: string
  releaseVersionPattern?: string
  defaultVersion?: VersionKey
  lastReleaseVersionDetails?: LastReleaseVersionDetails
  bwcErrors?: BwcErrors
}>`},{name:`null`}]},name:`workspace`}],return:{name:`void`}}},description:``},onSetTargetPackage:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(pack: Package | null) => void`,signature:{arguments:[{type:{name:`union`,raw:`Package | null`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
  description?: string
  isFavorite?: boolean
  serviceName?: string
  // todo remove userRole after full transition to permissions
  userRole?: UserRole
  permissions?: PackagePermissions
  restGroupingPrefix?: string
  parents?: ParentPackages
  defaultRole?: DefaultPackageRoleType
  packageVisibility?: boolean
  defaultReleaseVersion?: string
  releaseVersionPattern?: string
  defaultVersion?: VersionKey
  lastReleaseVersionDetails?: LastReleaseVersionDetails
  bwcErrors?: BwcErrors
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}},{key:`description`,value:{name:`string`,required:!1}},{key:`isFavorite`,value:{name:`boolean`,required:!1}},{key:`serviceName`,value:{name:`string`,required:!1}},{key:`userRole`,value:{name:`union`,raw:`| typeof ADMIN_USER_ROLE_ID
| typeof EDITOR_USER_ROLE_ID
| typeof VIEWER_USER_ROLE_ID`,elements:[{name:`ADMIN_USER_ROLE_ID`},{name:`EDITOR_USER_ROLE_ID`},{name:`VIEWER_USER_ROLE_ID`}],required:!1}},{key:`permissions`,value:{name:`ReadonlyArray`,elements:[{name:`union`,raw:`| typeof READ_PERMISSION
| typeof CREATE_AND_UPDATE_PACKAGE_PERMISSION
| typeof DELETE_PACKAGE_PERMISSION
| typeof MANAGE_DRAFT_VERSION_PERMISSION
| typeof MANAGE_RELEASE_VERSION_PERMISSION
| typeof MANAGE_DEPRECATED_VERSION_PERMISSION
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!1}},{key:`restGroupingPrefix`,value:{name:`string`,required:!1}},{key:`parents`,value:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}}]}}],raw:`ReadonlyArray<ParentPackage>`,required:!1}},{key:`defaultRole`,value:{name:`union`,raw:`| typeof PUBLIC_PACKAGE_ROLE
| typeof PRIVATE_PACKAGE_ROLE`,elements:[{name:`PUBLIC_PACKAGE_ROLE`},{name:`PRIVATE_PACKAGE_ROLE`}],required:!1}},{key:`packageVisibility`,value:{name:`boolean`,required:!1}},{key:`defaultReleaseVersion`,value:{name:`string`,required:!1}},{key:`releaseVersionPattern`,value:{name:`string`,required:!1}},{key:`defaultVersion`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`lastReleaseVersionDetails`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  version?: string
  latestRevision?: boolean
  summary?: PackageSummary
}`,signature:{properties:[{key:`version`,value:{name:`string`,required:!1}},{key:`latestRevision`,value:{name:`boolean`,required:!1}},{key:`summary`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  breaking?: number
  semiBreaking?: number
  nonBreaking?: number
  deprecate?: number
  annotation?: number
  unclassified?: number
}`,signature:{properties:[{key:`breaking`,value:{name:`number`,required:!1}},{key:`semiBreaking`,value:{name:`number`,required:!1}},{key:`nonBreaking`,value:{name:`number`,required:!1}},{key:`deprecate`,value:{name:`number`,required:!1}},{key:`annotation`,value:{name:`number`,required:!1}},{key:`unclassified`,value:{name:`number`,required:!1}}]}}],raw:`Readonly<{
  breaking?: number
  semiBreaking?: number
  nonBreaking?: number
  deprecate?: number
  annotation?: number
  unclassified?: number
}>`,required:!1}}]}}],raw:`Readonly<{
  version?: string
  latestRevision?: boolean
  summary?: PackageSummary
}>`,required:!1}},{key:`bwcErrors`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: StatusMarkerVariant
  count: number
}`,signature:{properties:[{key:`type`,value:{name:`union`,raw:`| typeof LOADING_STATUS_MARKER_VARIANT
| typeof DEFAULT_STATUS_MARKER_VARIANT
| typeof SUCCESS_STATUS_MARKER_VARIANT
| typeof WARNING_STATUS_MARKER_VARIANT
| typeof ERROR_STATUS_MARKER_VARIANT`,elements:[{name:`LOADING_STATUS_MARKER_VARIANT`},{name:`DEFAULT_STATUS_MARKER_VARIANT`},{name:`SUCCESS_STATUS_MARKER_VARIANT`},{name:`WARNING_STATUS_MARKER_VARIANT`},{name:`ERROR_STATUS_MARKER_VARIANT`}],required:!0}},{key:`count`,value:{name:`number`,required:!0}}]}}],raw:`Readonly<{
  type: StatusMarkerVariant
  count: number
}>`,required:!1}}]}}],raw:`Readonly<{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
  description?: string
  isFavorite?: boolean
  serviceName?: string
  // todo remove userRole after full transition to permissions
  userRole?: UserRole
  permissions?: PackagePermissions
  restGroupingPrefix?: string
  parents?: ParentPackages
  defaultRole?: DefaultPackageRoleType
  packageVisibility?: boolean
  defaultReleaseVersion?: string
  releaseVersionPattern?: string
  defaultVersion?: VersionKey
  lastReleaseVersionDetails?: LastReleaseVersionDetails
  bwcErrors?: BwcErrors
}>`},{name:`null`}]},name:`pack`}],return:{name:`void`}}},description:``},onSetTargetVersion:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(version: string) => void`,signature:{arguments:[{type:{name:`string`},name:`version`}],return:{name:`void`}}},description:``},onSetTargetStatus:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(status: VersionStatus) => void`,signature:{arguments:[{type:{name:`union`,raw:`| typeof DRAFT_VERSION_STATUS
| typeof RELEASE_VERSION_STATUS`,elements:[{name:`DRAFT_VERSION_STATUS`},{name:`RELEASE_VERSION_STATUS`}]},name:`status`}],return:{name:`void`}}},description:``},onSetTargetLabels:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(labels: string[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`labels`}],return:{name:`void`}}},description:``},areWorkspacesLoading:{required:!1,tsType:{name:`boolean`},description:``},arePackagesLoading:{required:!1,tsType:{name:`boolean`},description:``},areVersionsLoading:{required:!1,tsType:{name:`boolean`},description:``},packages:{required:!1,tsType:{name:`ReadonlyArray`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
  description?: string
  isFavorite?: boolean
  serviceName?: string
  // todo remove userRole after full transition to permissions
  userRole?: UserRole
  permissions?: PackagePermissions
  restGroupingPrefix?: string
  parents?: ParentPackages
  defaultRole?: DefaultPackageRoleType
  packageVisibility?: boolean
  defaultReleaseVersion?: string
  releaseVersionPattern?: string
  defaultVersion?: VersionKey
  lastReleaseVersionDetails?: LastReleaseVersionDetails
  bwcErrors?: BwcErrors
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}},{key:`description`,value:{name:`string`,required:!1}},{key:`isFavorite`,value:{name:`boolean`,required:!1}},{key:`serviceName`,value:{name:`string`,required:!1}},{key:`userRole`,value:{name:`union`,raw:`| typeof ADMIN_USER_ROLE_ID
| typeof EDITOR_USER_ROLE_ID
| typeof VIEWER_USER_ROLE_ID`,elements:[{name:`ADMIN_USER_ROLE_ID`},{name:`EDITOR_USER_ROLE_ID`},{name:`VIEWER_USER_ROLE_ID`}],required:!1}},{key:`permissions`,value:{name:`ReadonlyArray`,elements:[{name:`union`,raw:`| typeof READ_PERMISSION
| typeof CREATE_AND_UPDATE_PACKAGE_PERMISSION
| typeof DELETE_PACKAGE_PERMISSION
| typeof MANAGE_DRAFT_VERSION_PERMISSION
| typeof MANAGE_RELEASE_VERSION_PERMISSION
| typeof MANAGE_DEPRECATED_VERSION_PERMISSION
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!1}},{key:`restGroupingPrefix`,value:{name:`string`,required:!1}},{key:`parents`,value:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}}]}}],raw:`ReadonlyArray<ParentPackage>`,required:!1}},{key:`defaultRole`,value:{name:`union`,raw:`| typeof PUBLIC_PACKAGE_ROLE
| typeof PRIVATE_PACKAGE_ROLE`,elements:[{name:`PUBLIC_PACKAGE_ROLE`},{name:`PRIVATE_PACKAGE_ROLE`}],required:!1}},{key:`packageVisibility`,value:{name:`boolean`,required:!1}},{key:`defaultReleaseVersion`,value:{name:`string`,required:!1}},{key:`releaseVersionPattern`,value:{name:`string`,required:!1}},{key:`defaultVersion`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`lastReleaseVersionDetails`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  version?: string
  latestRevision?: boolean
  summary?: PackageSummary
}`,signature:{properties:[{key:`version`,value:{name:`string`,required:!1}},{key:`latestRevision`,value:{name:`boolean`,required:!1}},{key:`summary`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  breaking?: number
  semiBreaking?: number
  nonBreaking?: number
  deprecate?: number
  annotation?: number
  unclassified?: number
}`,signature:{properties:[{key:`breaking`,value:{name:`number`,required:!1}},{key:`semiBreaking`,value:{name:`number`,required:!1}},{key:`nonBreaking`,value:{name:`number`,required:!1}},{key:`deprecate`,value:{name:`number`,required:!1}},{key:`annotation`,value:{name:`number`,required:!1}},{key:`unclassified`,value:{name:`number`,required:!1}}]}}],raw:`Readonly<{
  breaking?: number
  semiBreaking?: number
  nonBreaking?: number
  deprecate?: number
  annotation?: number
  unclassified?: number
}>`,required:!1}}]}}],raw:`Readonly<{
  version?: string
  latestRevision?: boolean
  summary?: PackageSummary
}>`,required:!1}},{key:`bwcErrors`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: StatusMarkerVariant
  count: number
}`,signature:{properties:[{key:`type`,value:{name:`union`,raw:`| typeof LOADING_STATUS_MARKER_VARIANT
| typeof DEFAULT_STATUS_MARKER_VARIANT
| typeof SUCCESS_STATUS_MARKER_VARIANT
| typeof WARNING_STATUS_MARKER_VARIANT
| typeof ERROR_STATUS_MARKER_VARIANT`,elements:[{name:`LOADING_STATUS_MARKER_VARIANT`},{name:`DEFAULT_STATUS_MARKER_VARIANT`},{name:`SUCCESS_STATUS_MARKER_VARIANT`},{name:`WARNING_STATUS_MARKER_VARIANT`},{name:`ERROR_STATUS_MARKER_VARIANT`}],required:!0}},{key:`count`,value:{name:`number`,required:!0}}]}}],raw:`Readonly<{
  type: StatusMarkerVariant
  count: number
}>`,required:!1}}]}}],raw:`Readonly<{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
  description?: string
  isFavorite?: boolean
  serviceName?: string
  // todo remove userRole after full transition to permissions
  userRole?: UserRole
  permissions?: PackagePermissions
  restGroupingPrefix?: string
  parents?: ParentPackages
  defaultRole?: DefaultPackageRoleType
  packageVisibility?: boolean
  defaultReleaseVersion?: string
  releaseVersionPattern?: string
  defaultVersion?: VersionKey
  lastReleaseVersionDetails?: LastReleaseVersionDetails
  bwcErrors?: BwcErrors
}>`}],raw:`ReadonlyArray<Package>`},description:``},packagesTitle:{required:!1,tsType:{name:`string`},description:``},packageObj:{required:!1,tsType:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
  description?: string
  isFavorite?: boolean
  serviceName?: string
  // todo remove userRole after full transition to permissions
  userRole?: UserRole
  permissions?: PackagePermissions
  restGroupingPrefix?: string
  parents?: ParentPackages
  defaultRole?: DefaultPackageRoleType
  packageVisibility?: boolean
  defaultReleaseVersion?: string
  releaseVersionPattern?: string
  defaultVersion?: VersionKey
  lastReleaseVersionDetails?: LastReleaseVersionDetails
  bwcErrors?: BwcErrors
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}},{key:`description`,value:{name:`string`,required:!1}},{key:`isFavorite`,value:{name:`boolean`,required:!1}},{key:`serviceName`,value:{name:`string`,required:!1}},{key:`userRole`,value:{name:`union`,raw:`| typeof ADMIN_USER_ROLE_ID
| typeof EDITOR_USER_ROLE_ID
| typeof VIEWER_USER_ROLE_ID`,elements:[{name:`ADMIN_USER_ROLE_ID`},{name:`EDITOR_USER_ROLE_ID`},{name:`VIEWER_USER_ROLE_ID`}],required:!1}},{key:`permissions`,value:{name:`ReadonlyArray`,elements:[{name:`union`,raw:`| typeof READ_PERMISSION
| typeof CREATE_AND_UPDATE_PACKAGE_PERMISSION
| typeof DELETE_PACKAGE_PERMISSION
| typeof MANAGE_DRAFT_VERSION_PERMISSION
| typeof MANAGE_RELEASE_VERSION_PERMISSION
| typeof MANAGE_DEPRECATED_VERSION_PERMISSION
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!1}},{key:`restGroupingPrefix`,value:{name:`string`,required:!1}},{key:`parents`,value:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`alias`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`parentGroup`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`kind`,value:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}}]}}],raw:`ReadonlyArray<ParentPackage>`,required:!1}},{key:`defaultRole`,value:{name:`union`,raw:`| typeof PUBLIC_PACKAGE_ROLE
| typeof PRIVATE_PACKAGE_ROLE`,elements:[{name:`PUBLIC_PACKAGE_ROLE`},{name:`PRIVATE_PACKAGE_ROLE`}],required:!1}},{key:`packageVisibility`,value:{name:`boolean`,required:!1}},{key:`defaultReleaseVersion`,value:{name:`string`,required:!1}},{key:`releaseVersionPattern`,value:{name:`string`,required:!1}},{key:`defaultVersion`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}},{key:`lastReleaseVersionDetails`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  version?: string
  latestRevision?: boolean
  summary?: PackageSummary
}`,signature:{properties:[{key:`version`,value:{name:`string`,required:!1}},{key:`latestRevision`,value:{name:`boolean`,required:!1}},{key:`summary`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  breaking?: number
  semiBreaking?: number
  nonBreaking?: number
  deprecate?: number
  annotation?: number
  unclassified?: number
}`,signature:{properties:[{key:`breaking`,value:{name:`number`,required:!1}},{key:`semiBreaking`,value:{name:`number`,required:!1}},{key:`nonBreaking`,value:{name:`number`,required:!1}},{key:`deprecate`,value:{name:`number`,required:!1}},{key:`annotation`,value:{name:`number`,required:!1}},{key:`unclassified`,value:{name:`number`,required:!1}}]}}],raw:`Readonly<{
  breaking?: number
  semiBreaking?: number
  nonBreaking?: number
  deprecate?: number
  annotation?: number
  unclassified?: number
}>`,required:!1}}]}}],raw:`Readonly<{
  version?: string
  latestRevision?: boolean
  summary?: PackageSummary
}>`,required:!1}},{key:`bwcErrors`,value:{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: StatusMarkerVariant
  count: number
}`,signature:{properties:[{key:`type`,value:{name:`union`,raw:`| typeof LOADING_STATUS_MARKER_VARIANT
| typeof DEFAULT_STATUS_MARKER_VARIANT
| typeof SUCCESS_STATUS_MARKER_VARIANT
| typeof WARNING_STATUS_MARKER_VARIANT
| typeof ERROR_STATUS_MARKER_VARIANT`,elements:[{name:`LOADING_STATUS_MARKER_VARIANT`},{name:`DEFAULT_STATUS_MARKER_VARIANT`},{name:`SUCCESS_STATUS_MARKER_VARIANT`},{name:`WARNING_STATUS_MARKER_VARIANT`},{name:`ERROR_STATUS_MARKER_VARIANT`}],required:!0}},{key:`count`,value:{name:`number`,required:!0}}]}}],raw:`Readonly<{
  type: StatusMarkerVariant
  count: number
}>`,required:!1}}]}}],raw:`Readonly<{
  key: Key
  alias: string
  name: string
  parentGroup?: Key
  kind: PackageKind
  description?: string
  isFavorite?: boolean
  serviceName?: string
  // todo remove userRole after full transition to permissions
  userRole?: UserRole
  permissions?: PackagePermissions
  restGroupingPrefix?: string
  parents?: ParentPackages
  defaultRole?: DefaultPackageRoleType
  packageVisibility?: boolean
  defaultReleaseVersion?: string
  releaseVersionPattern?: string
  defaultVersion?: VersionKey
  lastReleaseVersionDetails?: LastReleaseVersionDetails
  bwcErrors?: BwcErrors
}>`},description:``},onSetPackage:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},versions:{required:!1,tsType:{name:`Array`,elements:[{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`}],raw:`Key[]`},description:``},previousVersionsPackageKey:{required:!1,tsType:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`},description:``},previousVersions:{required:!1,tsType:{name:`Readonly`,elements:[{name:`Array`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  status: VersionStatus
  createdBy: Principal
  createdAt?: string
  versionLabels: string[]
  previousVersion?: string
  latestRevision: boolean
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`status`,value:{name:`union`,raw:`| typeof DRAFT_VERSION_STATUS
| typeof RELEASE_VERSION_STATUS`,elements:[{name:`DRAFT_VERSION_STATUS`},{name:`RELEASE_VERSION_STATUS`}],required:!0}},{key:`createdBy`,value:{name:`union`,raw:`User | Token | Job`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`}],required:!0}},{key:`createdAt`,value:{name:`string`,required:!1}},{key:`versionLabels`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!0}},{key:`previousVersion`,value:{name:`string`,required:!1}},{key:`latestRevision`,value:{name:`boolean`,required:!0}}]}}],raw:`Readonly<{
  key: Key
  status: VersionStatus
  createdBy: Principal
  createdAt?: string
  versionLabels: string[]
  previousVersion?: string
  latestRevision: boolean
}>`}],raw:`PackageVersion[]`}],raw:`Readonly<PackageVersion[]>`},description:``},getVersionLabels:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(version: Key) => string[]`,signature:{arguments:[{type:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`},name:`version`}],return:{name:`Array`,elements:[{name:`string`}],raw:`string[]`}}},description:``},isPublishing:{required:!1,tsType:{name:`boolean`},description:``},extraValidationMassage:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},setSelectedPreviousVersion:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: Key) => void`,signature:{arguments:[{type:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`},name:`value`}],return:{name:`void`}}},description:``},title:{required:!1,tsType:{name:`string`},description:``},submitButtonTittle:{required:!1,tsType:{name:`string`},description:``},descriptorVersionFieldTitle:{required:!1,tsType:{name:`string`},description:``},descriptorFileFieldTitle:{required:!1,tsType:{name:`string`},description:``},hideCSVRelatedFields:{required:!1,tsType:{name:`boolean`},description:``},hideDescriptorField:{required:!1,tsType:{name:`boolean`},description:``},hideDescriptorVersionField:{required:!1,tsType:{name:`boolean`},description:``},hideSaveMessageField:{required:!1,tsType:{name:`boolean`},description:``},hideCopyPackageFields:{required:!1,tsType:{name:`boolean`},description:``},hidePreviousVersionField:{required:!1,tsType:{name:`boolean`},description:``},publishButtonDisabled:{required:!1,tsType:{name:`boolean`},description:``},publishFieldsDisabled:{required:!1,tsType:{name:`boolean`},description:``},currentPackageKey:{required:!1,tsType:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`},description:``}}}})))()}var Jt,Yt,Xt,Zt,$,Qt;function $t(){return($t=e((()=>{Jt=t(n(),1),We(),F(),qt(),Yt=c(),Xt={component:Ut},Zt=e=>{let t=(0,Jt.useMemo)(()=>({version:``,status:at,labels:[],descriptorFile:null,previousVersion:tt}),[]),{control:n,setValue:r,formState:i}=Ge({defaultValues:t});return(0,Yt.jsx)(Ut,{...e,control:n,setValue:r,formState:i})},$={name:`Default`,args:{open:!0,setOpen:()=>null,onSubmit:()=>null,versions:[],previousVersions:[],getVersionLabels:()=>[],packagePermissions:[],isPublishing:!1,hideDescriptorField:!0,hideDescriptorVersionField:!0},render:Zt},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    open: true,
    setOpen: () => null,
    onSubmit: () => null,
    versions: [],
    previousVersions: [],
    getVersionLabels: () => [],
    packagePermissions: [],
    isPublishing: false,
    hideDescriptorField: true,
    hideDescriptorVersionField: true
  },
  render: StoryComponent
}`,...$.parameters?.docs?.source}}},Qt=[`DefaultStory`]})))()}$t();export{$ as DefaultStory,Qt as __namedExportsOrder,Xt as default};