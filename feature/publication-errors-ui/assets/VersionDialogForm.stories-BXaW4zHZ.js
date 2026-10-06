import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react---BZM-86.js";import{a as r}from"./router-7YU84Hy5.js";import{l as i}from"./dist-F8la4u6j.js";import{n as a}from"./dist-sHNipvf9.js";import{n as o,t as s}from"./debounce-BVqWGKkP.js";import{t as c}from"./jsx-runtime--WVWf14b.js";import{n as l,t as u}from"./Box-CzqjOcoU.js";import{n as d,t as f}from"./Autocomplete-a1FNbMA_.js";import{n as p,t as m}from"./TextField-DOxe2ZJj.js";import{n as ee,t as h}from"./createSvgIcon-CXifaxg9.js";import{n as te,t as ne}from"./Alert-CYQVe-3p.js";import{n as g,t as re}from"./IconButton-DBH6Y5nc.js";import{n as _,t as v}from"./Typography-B5fOEpx5.js";import{n as y,t as ie}from"./Button-DrgAR6qf.js";import{n as b,t as ae}from"./DialogContent-B-a-mUNQ.js";import{i as oe,n as se,r as ce,t as le}from"./DialogTitle-BLBZWaKA.js";import{n as ue,t as de}from"./Divider-BmGnZViR.js";import{n as fe,t as pe}from"./ListItem-DRRcrCyH.js";import{n as me,t as he}from"./Tooltip-BYt64czu.js";import{S as ge,_ as _e,a as ve,b as ye,c as be,d as xe,f as Se,g as Ce,h as we,i as Te,l as Ee,n as De,o as Oe,p as x,r as ke,s as Ae,t as je,u as S,v as Me,x as Ne,y as C}from"./VersionSelectorAutocomplete-BX_Rempo.js";import{C as Pe,D as w,f as Fe,l as Ie,m as Le,o as Re,p as ze}from"./iframe-By3NxahE.js";import{n as T,t as Be}from"./EditIcon-DzAjKEE1.js";import{n as Ve,t as He}from"./UploadButton-C56tM5CN.js";import{n as E,t as Ue}from"./ErrorOutlined-rcPJF3-w.js";import{n as D,t as We}from"./InfoContextIcon-Cnynzcmn.js";import{n as O,t as Ge}from"./LoadingButton-B77sxCaX.js";import{n as Ke,t as qe}from"./DialogForm-DbSCbMTB.js";import{f as Je}from"./transformToDto-CQ2Udevi-UvHolb-S.js";import{f as k,l as Ye,m as Xe}from"./files-BiSe_vp0.js";import{a as Ze,i as Qe,o as $e,t as et}from"./api-types-DtTAAoY9.js";import{i as A,n as j,r as tt,t as M}from"./index.esm-hA6-Vtk1.js";import{a as nt}from"./constants-1jyUsruT.js";import{t as rt}from"./mui-DZJR8qot.js";import{n as it,t as N}from"./OptionItem-CNFBBsaJ.js";import{a as at,c as ot,d as st,l as ct,n as lt,o as ut,r as dt,s as ft,t as pt,u as P}from"./version-status-DFBbv5An.js";import{n as mt,t as F}from"./VersionStatusChip-exiRKLEc.js";import{i as ht,o as I}from"./packages-DqV0jDkM.js";import{n as gt,r as L,t as _t}from"./versions-Dmv5_tjq.js";import{i as R,n as z,r as vt,t as B}from"./FileIcon-D778H0Ug.js";import{n as yt,t as bt}from"./DeleteIcon-BI3SqqhZ.js";import{n as xt,t as St}from"./FileUpload-Dofamow8.js";import{n as Ct,t as wt}from"./LabelsAutocomplete-DtuIqVBm.js";import{a as Tt,i as Et,n as Dt,o as Ot,r as kt}from"./validations-BY4ZLeMg.js";var V;function At(){return(At=e((()=>{ge(),V=class extends Ne{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:Le()},t)}getOptimisticResult(e){return e.behavior=Le(),super.getOptimisticResult(e)}fetchNextPage({pageParam:e,...t}={}){return this.fetch({...t,meta:{fetchMore:{direction:`forward`,pageParam:e}}})}fetchPreviousPage({pageParam:e,...t}={}){return this.fetch({...t,meta:{fetchMore:{direction:`backward`,pageParam:e}}})}createResult(e,t){let{state:n}=e,r=super.createResult(e,t),{isFetching:i,isRefetching:a}=r,o=i&&n.fetchMeta?.fetchMore?.direction===`forward`,s=i&&n.fetchMeta?.fetchMore?.direction===`backward`;return{...r,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:Fe(t,n.data?.pages),hasPreviousPage:ze(t,n.data?.pages),isFetchingNextPage:o,isFetchingPreviousPage:s,isRefetching:a&&!o&&!s}}}})))()}function jt(e,t,n){let r=w(e,t,n);return ye(r,V)}function Mt(){return(Mt=e((()=>{Pe(),At(),C()})))()}var H,Nt;function U(){return(U=e((()=>{ee(),H=c(),Nt=h((0,H.jsx)(`path`,{d:`M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z`}),`ErrorRounded`)})))()}var Pt,Ft;function It(){return(It=e((()=>{_(),Pt=c(),Ft=({children:e})=>(0,Pt.jsx)(v,{"data-testid":`ErrorTypography`,variant:`body2`,color:`#FF5260`,children:e}),Ft.__docgenInfo={description:``,methods:[],displayName:`ErrorTypography`}})))()}function Lt(e){let{packageId:t}=i(),{status:n,textFilter:r,limit:a=100,page:o=1,enabled:s=!0,sortBy:c,sortOrder:l}=e??{},u=e?.packageKey??t,{data:d,isLoading:f,isInitialLoading:p,fetchNextPage:m,isFetchingNextPage:ee,hasNextPage:h}=jt({queryKey:[Ht,u,n,r,c,l,a,o,s],queryFn:({pageParam:e=o,signal:t})=>zt(u,n,r,c,l,a,e-1,t),getNextPageParam:(e,t)=>{if(a)return e.length===a?t.length+1:void 0},enabled:!!u&&s,refetchOnMount:!0,staleTime:G});return{versions:(0,W.useMemo)(()=>d?.pages.flat()??[],[d?.pages]),areVersionsLoading:f,areVersionsInitiallyLoading:p,fetchNextPage:m,isFetchingNextPage:ee,hasNextPage:h}}function Rt(e){return e.map(e=>dt.get(e).toLowerCase()).join(`,`)}async function zt(e,t,n,i,a,o=100,s=0,c){let l=encodeURIComponent(e),u=Ce({status:{value:t,toStringValue:e=>Rt(e)},limit:{value:o},page:{value:s},textFilter:{value:n},sortBy:{value:i},sortOrder:{value:a}}),d=`/packages/:packageId/versions`;return Bt(await x(`${r(d,{packageId:l})}?${u}`,{method:`GET`},{customRedirectHandler:e=>Ee(e,d),basePath:xe},c))}function Bt({versions:e}){return e.map(e=>Vt(e))}function Vt(e){return{key:e.version,status:e.status,createdAt:e.createdAt,versionLabels:e.versionLabels??[],previousVersion:e?.previousVersion,createdBy:e.createdBy,latestRevision:!e.notLatestRevision,apiProcessorVersion:e.apiProcessorVersion,hasErrors:e.hasErrors,changelogHasErrors:e.changelogHasErrors}}var W,Ht,G;function Ut(){return(Ut=e((()=>{Mt(),a(),W=n(),P(),we(),Se(),S(),Ht=`package-versions-query-key`,G=3e4})))()}var Wt,K,Gt,Kt;function qt(){return(qt=e((()=>{l(),g(),_(),Wt=n(),yt(),z(),Ie(),K=c(),Gt=(0,Wt.memo)(({file:e,onDelete:t,onDownload:n})=>{let r=n?Kt:`black`;return(0,K.jsxs)(u,{display:`flex`,alignItems:`center`,"data-testid":n?`DownloadableFilePreview`:`NotDownloadableFilePreview`,children:[(0,K.jsxs)(u,{onClick:n,sx:{display:`flex`,gap:.5,cursor:n?`pointer`:`default`},children:[(0,K.jsx)(B,{color:r}),(0,K.jsx)(v,{variant:`subtitle2`,fontSize:13,color:r,children:e.name})]}),(0,K.jsx)(re,{onClick:t,sx:{ml:`auto`},"data-testid":`DeleteButton`,children:(0,K.jsx)(bt,{color:Re})})]})}),Kt=`#005DCF`,Gt.__docgenInfo={description:``,methods:[],displayName:`UploadedFilePreview`,props:{file:{required:!0,tsType:{name:`File`},description:``},onDelete:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onDownload:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})))()}var q,J,Jt;function Yt(){return(Yt=e((()=>{n(),q=n(),te(),l(),_(),xt(),Ve(),qt(),R(),k(),E(),J=c(),Jt=(0,q.memo)(({uploadedFile:e,setUploadedFile:t,onDownload:n,downloadAvailable:r,acceptableExtensions:i,errorMessage:a})=>{let o=(0,q.useCallback)(({target:{files:e}})=>t(e?Xe(e)[0]:void 0),[t]),s=(0,q.useCallback)(({dataTransfer:{files:e}})=>t(Xe(e)[0]),[t]),c=(0,q.useCallback)(()=>t(void 0),[t]),l=(0,q.useMemo)(()=>a&&(0,J.jsx)(ne,{icon:(0,J.jsx)(Ue,{color:`error`}),severity:`error`,sx:{p:0,py:`1px`,pl:2,alignItems:`center`},children:a}),[a]);return e?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Gt,{file:e,onDelete:c,onDownload:r?n:void 0}),l]}):(0,J.jsxs)(u,{sx:{display:`flex`,flexDirection:`column`,gap:1},children:[(0,J.jsx)(St,{onDrop:s,acceptableFileTypes:i,children:(0,J.jsxs)(u,{sx:{display:`flex`,alignItems:`center`,justifyContent:`center`,backgroundColor:`rgb(242, 243, 245)`,boxSizing:`border-box`,borderRadius:`10px`,width:1,height:`44px`},children:[(0,J.jsx)(vt,{sx:{color:`#626D82`,mr:`8px`}}),(0,J.jsx)(v,{variant:`subtitle2`,fontSize:13,children:`Drop ${Ye(i)} file here to attach or`}),(0,J.jsx)(He,{title:`browse`,onUpload:o,buttonSxProp:{p:0,ml:.5,minWidth:`auto`,height:1,display:`flex`},"data-testid":`BrowseButton`,acceptableFileTypes:i})]})}),l]})}),Jt.__docgenInfo={description:``,methods:[],displayName:`FileUploadField`,props:{uploadedFile:{required:!0,tsType:{name:`union`,raw:`File | undefined`,elements:[{name:`File`},{name:`undefined`}]},description:``},setUploadedFile:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(file: File | undefined) => void`,signature:{arguments:[{type:{name:`union`,raw:`File | undefined`,elements:[{name:`File`},{name:`undefined`}]},name:`file`}],return:{name:`void`}}},description:``},onDownload:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},downloadAvailable:{required:!0,tsType:{name:`boolean`},description:``},acceptableExtensions:{required:!0,tsType:{name:`Array`,elements:[{name:`union`,raw:`| typeof YAML_FILE_EXTENSION
| typeof YML_FILE_EXTENSION
| typeof JSON_FILE_EXTENSION
| typeof MD_FILE_EXTENSION
| typeof HTML_FILE_EXTENSION
| typeof GRAPHQL_FILE_EXTENSION
| typeof GQL_FILE_EXTENSION
| typeof PROTO_FILE_EXTENSION
| typeof CSV_FILE_EXTENSION
| typeof SQL_FILE_EXTENSION
| typeof DDL_FILE_EXTENSION`,elements:[{name:`YAML_FILE_EXTENSION`},{name:`YML_FILE_EXTENSION`},{name:`JSON_FILE_EXTENSION`},{name:`MD_FILE_EXTENSION`},{name:`HTML_FILE_EXTENSION`},{name:`GRAPHQL_FILE_EXTENSION`},{name:`GQL_FILE_EXTENSION`},{name:`PROTO_FILE_EXTENSION`},{name:`CSV_FILE_EXTENSION`},{name:`SQL_FILE_EXTENSION`},{name:`DDL_FILE_EXTENSION`}]}],raw:`FileExtension[]`},description:``},errorMessage:{required:!1,tsType:{name:`string`},description:``}}}})))()}function Xt(e){return!!e}function Y(e){return(t,n,r)=>{r===`input`&&e(t,n)}}function Zt(e){return()=>{e?.(``)}}var X,Z,Qt,Q,$t,en,tn;function nn(){return(nn=e((()=>{n(),X=n(),j(),d(),l(),y(),o(),oe(),b(),se(),ue(),fe(),p(),me(),_(),U(),O(),Ke(),mt(),P(),Ot(),T(),R(),L(),It(),Ut(),ve(),be(),Ct(),I(),it(),nt(),D(),k(),Yt(),Me(),Te(),De(),$e(),Je(),Z=c(),Qt=n(),Q=(0,X.memo)(e=>{let{open:t,setOpen:n,onSubmit:r,control:i,setValue:a,formState:o,selectedWorkspace:c,workspaces:l,areWorkspacesLoading:d,onSetWorkspace:p,onSetTargetPackage:ee,onSetTargetVersion:h,onSetTargetStatus:te,onSetTargetLabels:ne,onWorkspacesFilter:g,arePackagesLoading:re,areVersionsLoading:_,onVersionsFilter:y,onPackagesFilter:b,packages:oe,packagesTitle:se,versions:ue,previousVersionsPackageKey:fe,previousVersions:me,getVersionLabels:ge,packagePermissions:ve,releaseVersionPattern:ye,isPublishing:be,extraValidationMassage:xe,setSelectedPreviousVersion:Se,title:Ce,submitButtonTittle:we,descriptorVersionFieldTitle:Te,descriptorFileFieldTitle:Ee,hideCSVRelatedFields:De=!0,hideDescriptorField:x,hideDescriptorVersionField:S,hideSaveMessageField:Me,hidePreviousVersionField:Ne,hideCopyPackageFields:C,publishButtonDisabled:Pe,publishFieldsDisabled:w,currentPackageKey:Fe,kind:Ie=ht,formHelperText:Le,isBlocking:Re=!1,statusErrorIndicator:ze}=e,{errors:T}=o,Ve=A({control:i,name:`workspace`}),He=A({control:i,name:`package`}),E=A({control:i,name:`status`}),Ue=A({control:i,name:`apiType`}),D=A({control:i,name:`previousVersion`}),O=A({control:i,name:`descriptorFile`}),Ke=E===at,Je=(0,X.useCallback)((e,t)=>g?.(t),[g]),k=(0,X.useCallback)((e,t)=>b?.(t),[b]),Ye=(0,X.useCallback)((e,t)=>{h?.(t),y?.(t)},[y,h]),Xe=(0,X.useCallback)((e,t)=>ne?.(t),[ne]),$e=(0,X.useCallback)((e,t)=>te?.(t),[te]),j=ot(E),tt=(0,X.useCallback)(e=>e===`No previous release version`?j.noPreviousOptionLabel:_t(e).versionKey,[j]),nt=(0,X.useMemo)(()=>ct(E),[E]),[it,dt]=(0,X.useState)(``),pt=(0,X.useMemo)(()=>s(dt,500),[]),{versions:P,areVersionsLoading:mt}=Lt({packageKey:fe,status:nt,textFilter:it,enabled:!Ne&&me===void 0&&!!fe}),I=(0,X.useMemo)(()=>gt(me??P),[me,P]),L=(0,X.useMemo)(()=>new Map(I.map(e=>[e.key,e])),[I]),[R,z]=(0,X.useState)();(0,X.useEffect)(()=>{if(!D||D===`No previous release version`){z(void 0);return}let e=L.get(D);if(e){z(e);return}z(e=>e?.key===D?e:void 0)},[D,L]);let B=(0,X.useMemo)(()=>L.get(D)??(R?.key===D?R:void 0),[L,D,R]),yt=B?.status,bt=D===`No previous release version`?void 0:D,{isBlocking:xt,formHelperText:St,hasProblems:Ct}=Oe({packageKey:fe||He?.key||Fe,versionKey:bt,hasErrors:B?.hasErrors,changelogHasErrors:B?.changelogHasErrors,apiProcessorVersion:B?.apiProcessorVersion,kind:Ie,surface:Ae.PUBLISH_PREVIOUS_VERSION}),Ot=Le??St,V=(0,X.useCallback)(e=>L.get(e)?.status??(e===R?.key?R.status:void 0),[L,R]),At=(0,X.useCallback)(e=>{let t=V(e);return t?(0,Z.jsx)(F,{status:t}):null},[V]),jt=(0,X.useCallback)(e=>{let t=L.get(e)??(R?.key===e?R:void 0);return t?(0,Z.jsx)(ke,{versionKey:e,hasErrors:t.hasErrors,changelogHasErrors:t.changelogHasErrors,apiProcessorVersion:t.apiProcessorVersion,fontSize:`extra-small`,showTooltip:!1}):null},[L,R]),Mt=(0,X.useMemo)(()=>{let e=I.map(({key:e})=>e),t=D&&D!==`No previous release version`&&!e.includes(D);return[lt,...t?[D]:[],...e]},[I,D]),H=(0,X.useMemo)(()=>{if(!D||D===`No previous release version`)return!1;let e=V(D);return e?!st(E,e):!1},[D,V,E]),U=(0,X.useMemo)(()=>s(Je,500),[Je]),Pt=(0,X.useMemo)(()=>s(k,500),[k]),It=(0,X.useMemo)(()=>s(Ye,500),[Ye]),[Rt,zt]=(0,X.useState)(null),[Bt,Vt]=(0,X.useState)(!1),W=(0,X.useCallback)(e=>{zt(e?.target?.result?String(e.target.result):null),Vt(!1)},[]);(0,X.useEffect)(()=>{c?.key&&a(`workspace`,c)},[c,c?.key,a]),(0,X.useEffect)(()=>{if(!O)return;let e=new FileReader;e.onload=W,e.onerror=W,Vt(!0),e.readAsText(O)},[O,W]);let Ht=(0,X.useMemo)(()=>!Me||!S||!x,[x,S,Me]),G=(0,X.useMemo)(()=>w||!C&&!He||!De&&!Ve,[w,C,He,De,Ve]);return(0,Z.jsxs)(qe,{open:t,onClose:()=>n(!1),onSubmit:r,children:[(0,Z.jsx)(le,{"data-testid":`DialogTitle`,children:Ce??`Publish`}),(0,Z.jsxs)(ae,{sx:{width:440},children:[!Me&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(v,{variant:`button`,children:`Save`}),(0,Z.jsx)(M,{name:`message`,control:i,render:({field:e})=>(0,Z.jsx)(m,{...e,multiline:!0,required:!0,autoComplete:`on`,rows:`4`,type:`text`,label:`Message`,"data-testid":`MessageTextField`})}),(0,Z.jsx)(v,{variant:`button`,children:`Publish`})]}),!S&&(0,Z.jsx)(M,{name:`descriptorVersion`,control:i,rules:{validate:{restrictedSymbols:e=>Tt(e??``)}},render:({field:e})=>(0,Z.jsx)(m,{...e,value:e.value??``,required:!0,label:Te??`Descriptor Version`,error:!!T.descriptorVersion,onChange:e=>a(`descriptorVersion`,e.target.value??``),"data-testid":`DescriptorVersionTextField`})}),!x&&(0,Z.jsx)(M,{name:`descriptorFile`,control:i,rules:{validate:{correctUpload:()=>Xt(Rt)}},render:({field:e})=>(0,Z.jsxs)(u,{component:`label`,htmlFor:`contained-button-file`,children:[(0,Z.jsx)(u,{component:`input`,id:`contained-button-file`,display:`none`,multiple:!0,type:`file`,onChange:({target:{files:e}})=>{a(`descriptorFile`,e?.[0]??null)}}),(0,Z.jsx)(m,{...e,sx:{label:{height:`100%`,width:`100%`}},value:e.value?.name??``,label:Ee??`Descriptor File`,error:!!T.descriptorFile,helperText:T.descriptorFile?.message,required:!0,InputProps:{endAdornment:(0,Z.jsxs)(u,{display:`flex`,flexDirection:`row`,sx:{cursor:`pointer`},children:[e.value?(0,Z.jsx)(Be,{}):(0,Z.jsx)(vt,{fontSize:`small`,sx:{color:`#353C4E`}}),!!T.descriptorFile&&(0,Z.jsx)(Nt,{color:`error`})]}),inputProps:{readOnly:!0}},"data-testid":`DescriptorFileTextField`})]})}),Ht&&(0,Z.jsx)(de,{sx:{mx:0,mt:1,mb:.5},orientation:`horizontal`}),!De&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(u,{gap:.5,alignItems:`center`,pb:1,children:(0,Z.jsx)(M,{name:`apiType`,control:i,rules:{required:!0},render:({field:{value:e,onChange:t}})=>(0,Z.jsx)(f,{value:e??Qe,options:et,isOptionEqualToValue:(e,t)=>e===t,renderOption:(e,t)=>(0,Qt.createElement)(pe,{...e,key:t,"data-testid":`Option-${t}`},Ze[t]),getOptionLabel:e=>Ze[e],onChange:(e,n)=>{t(n)},renderInput:e=>(0,Z.jsx)(m,{required:!0,...e,label:`API type`}),"data-testid":`ApiTypeAutocomplete`})})}),(0,Z.jsxs)(u,{display:`flex`,gap:.5,alignItems:`center`,pb:1,children:[(0,Z.jsxs)(u,{sx:{lineHeight:1},children:[(0,Z.jsx)(v,{variant:`button`,component:`span`,children:`Dashboard Version Config`}),(0,Z.jsx)(v,{variant:`button`,component:`span`,color:`#FF5260`,children:`*`})]}),(0,Z.jsx)(he,{disableHoverListener:!1,placement:`right`,title:Ue===`rest`?$t:en,PopperProps:{sx:{".MuiTooltip-tooltip":{maxWidth:`600px`}}},children:(0,Z.jsx)(We,{fontSize:`extra-small`})})]}),(0,Z.jsx)(M,{name:`file`,rules:{required:`Please upload a file`,validate:{checkFileType:e=>Dt(e,[`.csv`])}},control:i,render:({field:{value:e,onChange:t}})=>(0,Z.jsx)(Jt,{errorMessage:T.file?.message,uploadedFile:e,setUploadedFile:e=>t(e),downloadAvailable:!1,acceptableExtensions:[`.csv`]})}),(0,Z.jsxs)(u,{display:`flex`,gap:.5,alignItems:`center`,pt:2,children:[(0,Z.jsx)(v,{variant:`button`,children:`Package Search Scope for Dashboard Version`}),(0,Z.jsx)(he,{disableHoverListener:!1,placement:`right`,title:tn,PopperProps:{sx:{".MuiTooltip-tooltip":{maxWidth:`600px`}}},children:(0,Z.jsx)(We,{fontSize:`extra-small`})})]}),(0,Z.jsx)(M,{name:`workspace`,control:i,render:({field:{value:e}})=>(0,Z.jsx)(f,{value:e,options:l??[],loading:d,isOptionEqualToValue:(e,t)=>e.key===t.key,getOptionLabel:e=>e?.name??``,renderOption:(e,{key:t,name:n})=>(0,Z.jsx)(N,{props:e,title:n,subtitle:t},t),onChange:(e,t)=>{a(`workspace`,t??null),a(`package`,null),p?.(t)},onInputChange:Y(U),onClose:Zt(g),renderInput:e=>(0,Z.jsx)(m,{required:!0,...e,label:`Workspace`}),"data-testid":`WorkspaceAutocomplete`})}),(0,Z.jsx)(u,{sx:{lineHeight:1},pt:2,children:(0,Z.jsx)(v,{variant:`button`,children:`Publish Info`})})]}),!C&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(v,{sx:{mb:1},variant:`body2`,children:[`Target `,se]}),(0,Z.jsx)(M,{name:`workspace`,control:i,render:({field:{value:e}})=>(0,Z.jsx)(f,{value:e,options:l??[],loading:d,isOptionEqualToValue:(e,t)=>e.key===t.key,getOptionLabel:e=>e?.name??``,renderOption:(e,{key:t,name:n})=>(0,Z.jsx)(N,{props:e,title:n,subtitle:t},t),onChange:(e,t)=>{a(`workspace`,t??null),a(`package`,null),p?.(t)},onClose:Zt(g),onInputChange:Y(U),renderInput:e=>(0,Z.jsx)(m,{required:!0,...e,label:`Workspace`}),"data-testid":`WorkspaceAutocomplete`})}),(0,Z.jsx)(M,{name:`package`,control:i,render:({field:{value:e}})=>(0,Z.jsx)(f,{value:e,disabled:!Ve,isOptionEqualToValue:(e,t)=>e.key===t.key,options:oe??[],loading:re,filterOptions:rt,getOptionLabel:e=>e?.name??``,renderOption:(e,{key:t,name:n})=>(0,Z.jsx)(N,{props:e,title:n,subtitle:t},t),onInputChange:Y(Pt),renderInput:e=>(0,Z.jsx)(m,{...e,required:!0,label:se}),onChange:(e,t)=>{a(`package`,t),ee?.(t),D!==`No previous release version`&&a(`previousVersion`,`No previous release version`)},onClose:Zt(b),"data-testid":`PackageAutocomplete`})}),(0,Z.jsx)(v,{sx:{mb:1,mt:2},variant:`body2`,children:`Target Version Info`})]}),(0,Z.jsx)(M,{name:`version`,control:i,rules:{validate:{checkSpaces:e=>!Ke||!ye||kt(e,ye),restrictedSymbols:Tt,notEqualToPrevious:e=>Et(e,_t(D).versionKey)}},render:({field:e})=>(0,Z.jsx)(f,{freeSolo:!0,disabled:!e||!ge||G,value:e.value||``,options:ue??[],loading:_,renderOption:(e,t)=>(0,Qt.createElement)(pe,{...e,key:t},t),onInputChange:Y(It),filterOptions:rt,renderInput:t=>(0,Z.jsx)(m,{...e,...t,required:!0,label:`Version`,error:!!T.version}),onChange:(e,t)=>{a(`version`,t??``),h?.(t??``)},onClose:Zt(y),"data-testid":`VersionAutocomplete`})}),(0,Z.jsx)(M,{name:`status`,control:i,render:({field:{value:e}})=>(0,Z.jsx)(je,{disableClearable:!0,inputIndicator:ze,value:e??null,options:ut,getOptionDisabled:e=>!ve.includes(ft[e]),disabled:G,renderOption:(e,t)=>(0,Qt.createElement)(pe,{...e,key:t,"data-testid":`Option-${t}`},(0,Z.jsx)(F,{status:t})),onChange:(e,t)=>{$e(e,t||`draft`),a(`status`,t)},renderInput:e=>(0,Z.jsx)(m,{...e,label:`Status`,required:!0,error:!!ze,InputProps:{...e.InputProps,sx:{"& .MuiInputBase-input":{color:`transparent`,caretColor:`transparent`,"::selection":{background:`transparent`,color:`transparent`}},"& .Mui-disabled":{WebkitTextFillColor:`transparent`}},startAdornment:E?(0,Z.jsx)(F,{sx:{height:16,mb:1},status:E}):null}}),"data-testid":`StatusAutocomplete`})}),(0,Z.jsx)(M,{name:`labels`,control:i,render:({field:e})=>(0,Z.jsx)(wt,{disabled:G,onChange:(e,t)=>{Xe(e,t),a(`labels`,t??[])},value:e.value})}),!Ne&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(de,{sx:{mx:0,mt:1,mb:.5},orientation:`horizontal`}),(0,Z.jsx)(M,{name:`previousVersion`,control:i,render:({field:e})=>(0,Z.jsx)(je,{disabled:G,inputChip:yt?(0,Z.jsx)(F,{sx:{height:`18px`},status:yt}):void 0,inputIndicator:Ct&&B&&(0,Z.jsx)(ke,{versionKey:D,hasErrors:B.hasErrors,changelogHasErrors:B.changelogHasErrors,apiProcessorVersion:B.apiProcessorVersion,kind:Ie}),value:e.value??null,options:Mt,loading:mt,filterOptions:rt,onInputChange:Y((e,t)=>pt(t)),onClose:()=>pt(``),getOptionLabel:tt,isOptionEqualToValue:(e,t)=>e===_t(t).versionKey,renderOption:(e,t)=>(0,Z.jsx)(N,{props:e,title:tt(t),overflowTooltipPlacement:`left`,indicator:jt(t),chip:At(t),"data-testid":`Option-${t}`},t),renderInput:e=>(0,Z.jsx)(m,{...e,required:!0,label:j.fieldLabel,error:H||xt,helperText:H?`A release version must have a release previous version`:xe}),onChange:(e,t)=>{a(`previousVersion`,t??`No previous release version`),Se?.(t??`No previous release version`)},"data-testid":`PreviousReleaseVersionAutocomplete`})})]}),T.version?.message&&(0,Z.jsx)(u,{pt:2,children:(0,Z.jsx)(Ft,{children:T.version?.message})}),(0,Z.jsx)(_e,{message:Ot})]}),(0,Z.jsxs)(ce,{children:[(0,Z.jsx)(Ge,{variant:`contained`,type:`submit`,loading:be,disabled:Bt||Pe||w||be||xt||Re||H,"data-testid":we?`${we}Button`:`PublishButton`,children:we??`Publish`}),(0,Z.jsx)(ie,{variant:`outlined`,onClick:()=>n(!1),"data-testid":`CancelButton`,children:`Close`})]})]})}),Q.displayName=`VersionDialogForm`,$t=`CSV file must have the following information: "serviceName" and "serviceVersion". Published dashboard version will include package release versions (from selected workspace) for specified services. Also, "method" and "path" of REST API operations for services should be defined in the file. In this case, the system will create operations group with the operations for specified method and path.`,en=`CSV file must have the following information: "serviceName" and "serviceVersion". Published dashboard version will include package release versions (from selected workspace) for specified services. Also, "type" and "method" of GraphQL operations for services should be defined in the file. In this case, the system will create operations group with the operations for specified type and method.`,tn=`The workspace in which package versions for services from the CSV configuration will be searched. The package versions found in this workspace will be included into the dashboard version.`,Q.__docgenInfo={description:``,methods:[],displayName:`VersionDialogForm`,props:{open:{required:!0,tsType:{name:`boolean`},description:``},setOpen:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`value`}],return:{name:`void`}}},description:``},onSubmit:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},control:{required:!0,tsType:{name:`Control`,elements:[{name:`T`}],raw:`Control<T>`},description:``},setValue:{required:!0,tsType:{name:`UseFormSetValue`,elements:[{name:`T`}],raw:`UseFormSetValue<T>`},description:``},formState:{required:!0,tsType:{name:`FormState`,elements:[{name:`T`}],raw:`FormState<T>`},description:``},packagePermissions:{required:!0,tsType:{name:`ReadonlyArray`,elements:[{name:`union`,raw:`| typeof READ_PERMISSION
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
  apiProcessorVersion?: string
  hasErrors?: boolean
  changelogHasErrors?: boolean
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
}>`}],required:!0}},{key:`createdAt`,value:{name:`string`,required:!1}},{key:`versionLabels`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!0}},{key:`previousVersion`,value:{name:`string`,required:!1}},{key:`latestRevision`,value:{name:`boolean`,required:!0}},{key:`apiProcessorVersion`,value:{name:`string`,required:!1}},{key:`hasErrors`,value:{name:`boolean`,required:!1}},{key:`changelogHasErrors`,value:{name:`boolean`,required:!1}}]}}],raw:`Readonly<{
  key: Key
  status: VersionStatus
  createdBy: Principal
  createdAt?: string
  versionLabels: string[]
  previousVersion?: string
  latestRevision: boolean
  apiProcessorVersion?: string
  hasErrors?: boolean
  changelogHasErrors?: boolean
}>`}],raw:`PackageVersion[]`}],raw:`Readonly<PackageVersion[]>`},description:``},getVersionLabels:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(version: Key) => string[]`,signature:{arguments:[{type:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`},name:`version`}],return:{name:`Array`,elements:[{name:`string`}],raw:`string[]`}}},description:``},isPublishing:{required:!1,tsType:{name:`boolean`},description:``},extraValidationMassage:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},setSelectedPreviousVersion:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: Key) => void`,signature:{arguments:[{type:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`},name:`value`}],return:{name:`void`}}},description:``},title:{required:!1,tsType:{name:`string`},description:``},submitButtonTittle:{required:!1,tsType:{name:`string`},description:``},descriptorVersionFieldTitle:{required:!1,tsType:{name:`string`},description:``},descriptorFileFieldTitle:{required:!1,tsType:{name:`string`},description:``},hideCSVRelatedFields:{required:!1,tsType:{name:`boolean`},description:``},hideDescriptorField:{required:!1,tsType:{name:`boolean`},description:``},hideDescriptorVersionField:{required:!1,tsType:{name:`boolean`},description:``},hideSaveMessageField:{required:!1,tsType:{name:`boolean`},description:``},hideCopyPackageFields:{required:!1,tsType:{name:`boolean`},description:``},hidePreviousVersionField:{required:!1,tsType:{name:`boolean`},description:``},publishButtonDisabled:{required:!1,tsType:{name:`boolean`},description:``},publishFieldsDisabled:{required:!1,tsType:{name:`boolean`},description:``},currentPackageKey:{required:!1,tsType:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`},description:``},kind:{required:!1,tsType:{name:`union`,raw:`| typeof GROUP_KIND
| typeof PACKAGE_KIND
| typeof WORKSPACE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}]},description:``},formHelperText:{required:!1,tsType:{name:`string`},description:``},isBlocking:{required:!1,tsType:{name:`boolean`},description:``},statusErrorIndicator:{required:!1,tsType:{name:`ReactNode`},description:``}}}})))()}var rn,an,on,sn,$,cn;function ln(){return(ln=e((()=>{rn=t(n(),1),j(),P(),nn(),an=c(),on={component:Q},sn=e=>{let t=(0,rn.useMemo)(()=>({version:``,status:pt,labels:[],descriptorFile:null,previousVersion:lt}),[]),{control:n,setValue:r,formState:i}=tt({defaultValues:t});return(0,an.jsx)(Q,{...e,control:n,setValue:r,formState:i})},$={name:`Default`,args:{open:!0,setOpen:()=>null,onSubmit:()=>null,versions:[],previousVersions:[],getVersionLabels:()=>[],packagePermissions:[],isPublishing:!1,hideDescriptorField:!0,hideDescriptorVersionField:!0},render:sn},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},cn=[`DefaultStory`]})))()}ln();export{$ as DefaultStory,cn as __namedExportsOrder,on as default};