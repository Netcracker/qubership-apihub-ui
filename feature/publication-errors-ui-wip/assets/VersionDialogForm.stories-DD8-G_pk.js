import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react---BZM-86.js";import{a as r}from"./router-7YU84Hy5.js";import{l as i}from"./dist-F8la4u6j.js";import{n as a}from"./dist-sHNipvf9.js";import{n as o,t as s}from"./debounce-BVqWGKkP.js";import{t as c}from"./jsx-runtime--WVWf14b.js";import{n as l,t as u}from"./Box-CzqjOcoU.js";import{n as d,t as f}from"./Autocomplete-a1FNbMA_.js";import{n as p,t as m}from"./TextField-DOxe2ZJj.js";import{n as ee,t as h}from"./createSvgIcon-CXifaxg9.js";import{n as te,t as ne}from"./Alert-CYQVe-3p.js";import{n as g,t as re}from"./IconButton-DBH6Y5nc.js";import{n as _,t as v}from"./Typography-B5fOEpx5.js";import{n as ie,t as ae}from"./Button-DrgAR6qf.js";import{n as oe,t as se}from"./DialogContent-B-a-mUNQ.js";import{i as ce,n as le,r as ue,t as de}from"./DialogTitle-BLBZWaKA.js";import{n as fe,t as pe}from"./Divider-BmGnZViR.js";import{n as me,t as he}from"./ListItem-DRRcrCyH.js";import{n as ge,t as _e}from"./Tooltip-BYt64czu.js";import{_ as ve,a as ye,b as be,d as xe,f as Se,g as Ce,i as we,m as Te,n as Ee,p as y,r as De,s as Oe,t as ke,u as b,v as x,x as S,y as C}from"./VersionErrorIndicator-CSFGanI-.js";import{C as Ae,D as w,f as je,l as T,m as Me,o as Ne,p as Pe}from"./iframe-EOybQ3_2.js";import{n as Fe,t as Ie}from"./EditIcon-DzAjKEE1.js";import{n as Le,t as E}from"./UploadButton-C56tM5CN.js";import{n as D,t as O}from"./ErrorOutlined-rcPJF3-w.js";import{n as k,t as Re}from"./InfoContextIcon-Cnynzcmn.js";import{n as ze,t as Be}from"./LoadingButton-B77sxCaX.js";import{n as A,t as Ve}from"./DialogForm-DbSCbMTB.js";import{f as j}from"./src-DN7DVY1K-BsxWHHxN.js";import{f as He,l as Ue,m as M}from"./files-D4tsbRuB.js";import{a as We,i as Ge,o as Ke,t as qe}from"./api-types-DILHIwMt.js";import{i as N,n as Je,r as Ye,t as P}from"./index.esm-hA6-Vtk1.js";import{a as F}from"./constants-1jyUsruT.js";import{t as Xe}from"./mui-DZJR8qot.js";import{n as Ze,t as I}from"./OptionItem--oCqGPu7.js";import{a as Qe,c as $e,d as et,l as tt,n as nt,o as rt,r as it,s as at,t as ot,u as L}from"./version-status-DFBbv5An.js";import{n as st,t as ct}from"./VersionStatusChip-exiRKLEc.js";import{n as lt,t as ut}from"./VersionErrorFormMessage-ChEcHx1a.js";import{i as dt,o as ft}from"./packages-DqV0jDkM.js";import{n as R,t as pt}from"./VersionSelectorAutocomplete-9TI2QidE.js";import{i as z,n as mt,r as ht}from"./versions-DKjHwp6C.js";import{i as B,n as gt,r as _t,t as V}from"./FileIcon-D778H0Ug.js";import{n as vt,t as yt}from"./DeleteIcon-BI3SqqhZ.js";import{n as bt,t as xt}from"./FileUpload-Dofamow8.js";import{n as St,t as Ct}from"./LabelsAutocomplete-DtuIqVBm.js";import{a as wt,i as Tt,n as Et,o as Dt,r as Ot}from"./validations-fkVm7ufY.js";var H;function kt(){return(kt=e((()=>{S(),H=class extends be{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:Me()},t)}getOptimisticResult(e){return e.behavior=Me(),super.getOptimisticResult(e)}fetchNextPage({pageParam:e,...t}={}){return this.fetch({...t,meta:{fetchMore:{direction:`forward`,pageParam:e}}})}fetchPreviousPage({pageParam:e,...t}={}){return this.fetch({...t,meta:{fetchMore:{direction:`backward`,pageParam:e}}})}createResult(e,t){let{state:n}=e,r=super.createResult(e,t),{isFetching:i,isRefetching:a}=r,o=i&&n.fetchMeta?.fetchMore?.direction===`forward`,s=i&&n.fetchMeta?.fetchMore?.direction===`backward`;return{...r,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:je(t,n.data?.pages),hasPreviousPage:Pe(t,n.data?.pages),isFetchingNextPage:o,isFetchingPreviousPage:s,isRefetching:a&&!o&&!s}}}})))()}function At(e,t,n){let r=w(e,t,n);return C(r,H)}function jt(){return(jt=e((()=>{Ae(),kt(),x()})))()}var U,Mt;function Nt(){return(Nt=e((()=>{ee(),U=c(),Mt=h((0,U.jsx)(`path`,{d:`M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z`}),`ErrorRounded`)})))()}var Pt,Ft;function It(){return(It=e((()=>{_(),Pt=c(),Ft=({children:e})=>(0,Pt.jsx)(v,{"data-testid":`ErrorTypography`,variant:`body2`,color:`#FF5260`,children:e}),Ft.__docgenInfo={description:``,methods:[],displayName:`ErrorTypography`}})))()}function Lt(e){let{packageId:t}=i(),{status:n,textFilter:r,limit:a=100,page:o=1,enabled:s=!0,sortBy:c,sortOrder:l}=e??{},u=e?.packageKey??t,{data:d,isLoading:f,isInitialLoading:p,fetchNextPage:m,isFetchingNextPage:ee,hasNextPage:h}=At({queryKey:[Ht,u,n,r,c,l,a,o,s],queryFn:({pageParam:e=o,signal:t})=>zt(u,n,r,c,l,a,e-1,t),getNextPageParam:(e,t)=>{if(a)return e.length===a?t.length+1:void 0},enabled:!!u&&s,refetchOnMount:!0,staleTime:G});return{versions:(0,W.useMemo)(()=>d?.pages.flat()??[],[d?.pages]),areVersionsLoading:f,areVersionsInitiallyLoading:p,fetchNextPage:m,isFetchingNextPage:ee,hasNextPage:h}}function Rt(e){return e.map(e=>it.get(e).toLowerCase()).join(`,`)}async function zt(e,t,n,i,a,o=100,s=0,c){let l=encodeURIComponent(e),u=ve({status:{value:t,toStringValue:e=>Rt(e)},limit:{value:o},page:{value:s},textFilter:{value:n},sortBy:{value:i},sortOrder:{value:a}}),d=`/packages/:packageId/versions`;return Bt(await Te(`${r(d,{packageId:l})}?${u}`,{method:`GET`},{customRedirectHandler:e=>b(e,d),basePath:Se},c))}function Bt({versions:e}){return e.map(e=>Vt(e))}function Vt(e){return{key:e.version,status:e.status,createdAt:e.createdAt,versionLabels:e.versionLabels??[],previousVersion:e?.previousVersion,createdBy:e.createdBy,latestRevision:!e.notLatestRevision,apiProcessorVersion:e.apiProcessorVersion,hasErrors:e.hasErrors,changelogHasErrors:e.changelogHasErrors}}var W,Ht,G;function Ut(){return(Ut=e((()=>{jt(),a(),W=n(),L(),Ce(),y(),xe(),Ht=`package-versions-query-key`,G=3e4})))()}var Wt,K,Gt,Kt;function qt(){return(qt=e((()=>{l(),g(),_(),Wt=n(),vt(),gt(),T(),K=c(),Gt=(0,Wt.memo)(({file:e,onDelete:t,onDownload:n})=>{let r=n?Kt:`black`;return(0,K.jsxs)(u,{display:`flex`,alignItems:`center`,"data-testid":n?`DownloadableFilePreview`:`NotDownloadableFilePreview`,children:[(0,K.jsxs)(u,{onClick:n,sx:{display:`flex`,gap:.5,cursor:n?`pointer`:`default`},children:[(0,K.jsx)(V,{color:r}),(0,K.jsx)(v,{variant:`subtitle2`,fontSize:13,color:r,children:e.name})]}),(0,K.jsx)(re,{onClick:t,sx:{ml:`auto`},"data-testid":`DeleteButton`,children:(0,K.jsx)(yt,{color:Ne})})]})}),Kt=`#005DCF`,Gt.__docgenInfo={description:``,methods:[],displayName:`UploadedFilePreview`,props:{file:{required:!0,tsType:{name:`File`},description:``},onDelete:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onDownload:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})))()}var q,J,Jt;function Yt(){return(Yt=e((()=>{n(),q=n(),te(),l(),_(),bt(),Le(),qt(),B(),He(),D(),J=c(),Jt=(0,q.memo)(({uploadedFile:e,setUploadedFile:t,onDownload:n,downloadAvailable:r,acceptableExtensions:i,errorMessage:a})=>{let o=(0,q.useCallback)(({target:{files:e}})=>t(e?M(e)[0]:void 0),[t]),s=(0,q.useCallback)(({dataTransfer:{files:e}})=>t(M(e)[0]),[t]),c=(0,q.useCallback)(()=>t(void 0),[t]),l=(0,q.useMemo)(()=>a&&(0,J.jsx)(ne,{icon:(0,J.jsx)(O,{color:`error`}),severity:`error`,sx:{p:0,py:`1px`,pl:2,alignItems:`center`},children:a}),[a]);return e?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Gt,{file:e,onDelete:c,onDownload:r?n:void 0}),l]}):(0,J.jsxs)(u,{sx:{display:`flex`,flexDirection:`column`,gap:1},children:[(0,J.jsx)(xt,{onDrop:s,acceptableFileTypes:i,children:(0,J.jsxs)(u,{sx:{display:`flex`,alignItems:`center`,justifyContent:`center`,backgroundColor:`rgb(242, 243, 245)`,boxSizing:`border-box`,borderRadius:`10px`,width:1,height:`44px`},children:[(0,J.jsx)(_t,{sx:{color:`#626D82`,mr:`8px`}}),(0,J.jsx)(v,{variant:`subtitle2`,fontSize:13,children:`Drop ${Ue(i)} file here to attach or`}),(0,J.jsx)(E,{title:`browse`,onUpload:o,buttonSxProp:{p:0,ml:.5,minWidth:`auto`,height:1,display:`flex`},"data-testid":`BrowseButton`,acceptableFileTypes:i})]})}),l]})}),Jt.__docgenInfo={description:``,methods:[],displayName:`FileUploadField`,props:{uploadedFile:{required:!0,tsType:{name:`union`,raw:`File | undefined`,elements:[{name:`File`},{name:`undefined`}]},description:``},setUploadedFile:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(file: File | undefined) => void`,signature:{arguments:[{type:{name:`union`,raw:`File | undefined`,elements:[{name:`File`},{name:`undefined`}]},name:`file`}],return:{name:`void`}}},description:``},onDownload:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},downloadAvailable:{required:!0,tsType:{name:`boolean`},description:``},acceptableExtensions:{required:!0,tsType:{name:`Array`,elements:[{name:`union`,raw:`| typeof YAML_FILE_EXTENSION
| typeof YML_FILE_EXTENSION
| typeof JSON_FILE_EXTENSION
| typeof MD_FILE_EXTENSION
| typeof HTML_FILE_EXTENSION
| typeof GRAPHQL_FILE_EXTENSION
| typeof GQL_FILE_EXTENSION
| typeof PROTO_FILE_EXTENSION
| typeof CSV_FILE_EXTENSION
| typeof SQL_FILE_EXTENSION
| typeof DDL_FILE_EXTENSION`,elements:[{name:`YAML_FILE_EXTENSION`},{name:`YML_FILE_EXTENSION`},{name:`JSON_FILE_EXTENSION`},{name:`MD_FILE_EXTENSION`},{name:`HTML_FILE_EXTENSION`},{name:`GRAPHQL_FILE_EXTENSION`},{name:`GQL_FILE_EXTENSION`},{name:`PROTO_FILE_EXTENSION`},{name:`CSV_FILE_EXTENSION`},{name:`SQL_FILE_EXTENSION`},{name:`DDL_FILE_EXTENSION`}]}],raw:`FileExtension[]`},description:``},errorMessage:{required:!1,tsType:{name:`string`},description:``}}}})))()}function Xt(e){return!!e}function Y(e){return(t,n,r)=>{r===`input`&&e(t,n)}}function Zt(e){return()=>{e?.(``)}}var X,Z,Qt,Q,$t,en,tn;function nn(){return(nn=e((()=>{n(),X=n(),Je(),d(),l(),ie(),o(),ce(),oe(),le(),fe(),me(),p(),ge(),_(),Nt(),ze(),A(),st(),L(),Dt(),Fe(),B(),z(),It(),Ut(),De(),Oe(),St(),ft(),Ze(),F(),k(),He(),Yt(),lt(),Ee(),R(),Ke(),j(),Z=c(),Qt=n(),Q=(0,X.memo)(e=>{let{open:t,setOpen:n,onSubmit:r,control:i,setValue:a,formState:o,selectedWorkspace:c,workspaces:l,areWorkspacesLoading:d,onSetWorkspace:p,onSetTargetPackage:ee,onSetTargetVersion:h,onSetTargetStatus:te,onSetTargetLabels:ne,onWorkspacesFilter:g,arePackagesLoading:re,areVersionsLoading:_,onVersionsFilter:ie,onPackagesFilter:oe,packages:ce,packagesTitle:le,versions:fe,previousVersionsPackageKey:me,previousVersions:ge,getVersionLabels:ve,packagePermissions:be,releaseVersionPattern:xe,isPublishing:Se,extraValidationMassage:Ce,setSelectedPreviousVersion:Te,title:Ee,submitButtonTittle:y,descriptorVersionFieldTitle:De,descriptorFileFieldTitle:Oe,hideCSVRelatedFields:b=!0,hideDescriptorField:x,hideDescriptorVersionField:S,hideSaveMessageField:C,hidePreviousVersionField:Ae,hideCopyPackageFields:w,publishButtonDisabled:je,publishFieldsDisabled:T,currentPackageKey:Me,kind:Ne=dt,formHelperText:Pe,isBlocking:Fe=!1,statusErrorIndicator:Le}=e,{errors:E}=o,D=N({control:i,name:`workspace`}),O=N({control:i,name:`package`}),k=N({control:i,name:`status`}),ze=N({control:i,name:`apiType`}),A=N({control:i,name:`previousVersion`}),j=N({control:i,name:`descriptorFile`}),He=k===Qe,Ue=(0,X.useCallback)((e,t)=>g?.(t),[g]),M=(0,X.useCallback)((e,t)=>oe?.(t),[oe]),Ke=(0,X.useCallback)((e,t)=>{h?.(t),ie?.(t)},[ie,h]),Je=(0,X.useCallback)((e,t)=>ne?.(t),[ne]),Ye=(0,X.useCallback)((e,t)=>te?.(t),[te]),F=$e(k),Ze=(0,X.useCallback)(e=>e===`No previous release version`?F.noPreviousOptionLabel:mt(e).versionKey,[F]),it=(0,X.useMemo)(()=>tt(k),[k]),[ot,L]=(0,X.useState)(``),st=(0,X.useMemo)(()=>s(L,500),[]),{versions:lt,areVersionsLoading:ft}=Lt({packageKey:me,status:it,textFilter:ot,enabled:!Ae&&ge===void 0&&!!me}),R=(0,X.useMemo)(()=>ht(ge??lt),[ge,lt]),z=(0,X.useMemo)(()=>new Map(R.map(e=>[e.key,e])),[R]),[B,gt]=(0,X.useState)();(0,X.useEffect)(()=>{if(!A||A===`No previous release version`){gt(void 0);return}let e=z.get(A);if(e){gt(e);return}gt(e=>e?.key===A?e:void 0)},[A,z]);let V=(0,X.useMemo)(()=>z.get(A)??(B?.key===A?B:void 0),[z,A,B]),vt=V?.status,yt=A===`No previous release version`?void 0:A,{isBlocking:bt,formHelperText:xt,hasProblems:St}=we({packageKey:me||O?.key||Me,versionKey:yt,hasErrors:V?.hasErrors,changelogHasErrors:V?.changelogHasErrors,apiProcessorVersion:V?.apiProcessorVersion,kind:Ne,surface:ye.PUBLISH_PREVIOUS_VERSION}),Dt=Pe??xt,H=(0,X.useCallback)(e=>z.get(e)?.status??(e===B?.key?B.status:void 0),[z,B]),kt=(0,X.useCallback)(e=>{let t=H(e);return t?(0,Z.jsx)(ct,{status:t}):null},[H]),At=(0,X.useCallback)(e=>{let t=z.get(e)??(B?.key===e?B:void 0);return t?(0,Z.jsx)(ke,{versionKey:e,hasErrors:t.hasErrors,changelogHasErrors:t.changelogHasErrors,apiProcessorVersion:t.apiProcessorVersion,fontSize:`extra-small`,showTooltip:!1}):null},[z,B]),jt=(0,X.useMemo)(()=>{let e=R.map(({key:e})=>e),t=A&&A!==`No previous release version`&&!e.includes(A);return[nt,...t?[A]:[],...e]},[R,A]),U=(0,X.useMemo)(()=>{if(!A||A===`No previous release version`)return!1;let e=H(A);return e?!et(k,e):!1},[A,H,k]),Nt=(0,X.useMemo)(()=>s(Ue,500),[Ue]),Pt=(0,X.useMemo)(()=>s(M,500),[M]),It=(0,X.useMemo)(()=>s(Ke,500),[Ke]),[Rt,zt]=(0,X.useState)(null),[Bt,Vt]=(0,X.useState)(!1),W=(0,X.useCallback)(e=>{zt(e?.target?.result?String(e.target.result):null),Vt(!1)},[]);(0,X.useEffect)(()=>{c?.key&&a(`workspace`,c)},[c,c?.key,a]),(0,X.useEffect)(()=>{if(!j)return;let e=new FileReader;e.onload=W,e.onerror=W,Vt(!0),e.readAsText(j)},[j,W]);let Ht=(0,X.useMemo)(()=>!C||!S||!x,[x,S,C]),G=(0,X.useMemo)(()=>T||!w&&!O||!b&&!D,[T,w,O,b,D]);return(0,Z.jsxs)(Ve,{open:t,onClose:()=>n(!1),onSubmit:r,children:[(0,Z.jsx)(de,{"data-testid":`DialogTitle`,children:Ee??`Publish`}),(0,Z.jsxs)(se,{sx:{width:440},children:[!C&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(v,{variant:`button`,children:`Save`}),(0,Z.jsx)(P,{name:`message`,control:i,render:({field:e})=>(0,Z.jsx)(m,{...e,multiline:!0,required:!0,autoComplete:`on`,rows:`4`,type:`text`,label:`Message`,"data-testid":`MessageTextField`})}),(0,Z.jsx)(v,{variant:`button`,children:`Publish`})]}),!S&&(0,Z.jsx)(P,{name:`descriptorVersion`,control:i,rules:{validate:{restrictedSymbols:e=>wt(e??``)}},render:({field:e})=>(0,Z.jsx)(m,{...e,value:e.value??``,required:!0,label:De??`Descriptor Version`,error:!!E.descriptorVersion,onChange:e=>a(`descriptorVersion`,e.target.value??``),"data-testid":`DescriptorVersionTextField`})}),!x&&(0,Z.jsx)(P,{name:`descriptorFile`,control:i,rules:{validate:{correctUpload:()=>Xt(Rt)}},render:({field:e})=>(0,Z.jsxs)(u,{component:`label`,htmlFor:`contained-button-file`,children:[(0,Z.jsx)(u,{component:`input`,id:`contained-button-file`,display:`none`,multiple:!0,type:`file`,onChange:({target:{files:e}})=>{a(`descriptorFile`,e?.[0]??null)}}),(0,Z.jsx)(m,{...e,sx:{label:{height:`100%`,width:`100%`}},value:e.value?.name??``,label:Oe??`Descriptor File`,error:!!E.descriptorFile,helperText:E.descriptorFile?.message,required:!0,InputProps:{endAdornment:(0,Z.jsxs)(u,{display:`flex`,flexDirection:`row`,sx:{cursor:`pointer`},children:[e.value?(0,Z.jsx)(Ie,{}):(0,Z.jsx)(_t,{fontSize:`small`,sx:{color:`#353C4E`}}),!!E.descriptorFile&&(0,Z.jsx)(Mt,{color:`error`})]}),inputProps:{readOnly:!0}},"data-testid":`DescriptorFileTextField`})]})}),Ht&&(0,Z.jsx)(pe,{sx:{mx:0,mt:1,mb:.5},orientation:`horizontal`}),!b&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(u,{gap:.5,alignItems:`center`,pb:1,children:(0,Z.jsx)(P,{name:`apiType`,control:i,rules:{required:!0},render:({field:{value:e,onChange:t}})=>(0,Z.jsx)(f,{value:e??Ge,options:qe,isOptionEqualToValue:(e,t)=>e===t,renderOption:(e,t)=>(0,Qt.createElement)(he,{...e,key:t,"data-testid":`Option-${t}`},We[t]),getOptionLabel:e=>We[e],onChange:(e,n)=>{t(n)},renderInput:e=>(0,Z.jsx)(m,{required:!0,...e,label:`API type`}),"data-testid":`ApiTypeAutocomplete`})})}),(0,Z.jsxs)(u,{display:`flex`,gap:.5,alignItems:`center`,pb:1,children:[(0,Z.jsxs)(u,{sx:{lineHeight:1},children:[(0,Z.jsx)(v,{variant:`button`,component:`span`,children:`Dashboard Version Config`}),(0,Z.jsx)(v,{variant:`button`,component:`span`,color:`#FF5260`,children:`*`})]}),(0,Z.jsx)(_e,{disableHoverListener:!1,placement:`right`,title:ze===`rest`?$t:en,PopperProps:{sx:{".MuiTooltip-tooltip":{maxWidth:`600px`}}},children:(0,Z.jsx)(Re,{fontSize:`extra-small`})})]}),(0,Z.jsx)(P,{name:`file`,rules:{required:`Please upload a file`,validate:{checkFileType:e=>Et(e,[`.csv`])}},control:i,render:({field:{value:e,onChange:t}})=>(0,Z.jsx)(Jt,{errorMessage:E.file?.message,uploadedFile:e,setUploadedFile:e=>t(e),downloadAvailable:!1,acceptableExtensions:[`.csv`]})}),(0,Z.jsxs)(u,{display:`flex`,gap:.5,alignItems:`center`,pt:2,children:[(0,Z.jsx)(v,{variant:`button`,children:`Package Search Scope for Dashboard Version`}),(0,Z.jsx)(_e,{disableHoverListener:!1,placement:`right`,title:tn,PopperProps:{sx:{".MuiTooltip-tooltip":{maxWidth:`600px`}}},children:(0,Z.jsx)(Re,{fontSize:`extra-small`})})]}),(0,Z.jsx)(P,{name:`workspace`,control:i,render:({field:{value:e}})=>(0,Z.jsx)(f,{value:e,options:l??[],loading:d,isOptionEqualToValue:(e,t)=>e.key===t.key,getOptionLabel:e=>e?.name??``,renderOption:(e,{key:t,name:n})=>(0,Z.jsx)(I,{props:e,title:n,subtitle:t},t),onChange:(e,t)=>{a(`workspace`,t??null),a(`package`,null),p?.(t)},onInputChange:Y(Nt),onClose:Zt(g),renderInput:e=>(0,Z.jsx)(m,{required:!0,...e,label:`Workspace`}),"data-testid":`WorkspaceAutocomplete`})}),(0,Z.jsx)(u,{sx:{lineHeight:1},pt:2,children:(0,Z.jsx)(v,{variant:`button`,children:`Publish Info`})})]}),!w&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(v,{sx:{mb:1},variant:`body2`,children:[`Target `,le]}),(0,Z.jsx)(P,{name:`workspace`,control:i,render:({field:{value:e}})=>(0,Z.jsx)(f,{value:e,options:l??[],loading:d,isOptionEqualToValue:(e,t)=>e.key===t.key,getOptionLabel:e=>e?.name??``,renderOption:(e,{key:t,name:n})=>(0,Z.jsx)(I,{props:e,title:n,subtitle:t},t),onChange:(e,t)=>{a(`workspace`,t??null),a(`package`,null),p?.(t)},onClose:Zt(g),onInputChange:Y(Nt),renderInput:e=>(0,Z.jsx)(m,{required:!0,...e,label:`Workspace`}),"data-testid":`WorkspaceAutocomplete`})}),(0,Z.jsx)(P,{name:`package`,control:i,render:({field:{value:e}})=>(0,Z.jsx)(f,{value:e,disabled:!D,isOptionEqualToValue:(e,t)=>e.key===t.key,options:ce??[],loading:re,filterOptions:Xe,getOptionLabel:e=>e?.name??``,renderOption:(e,{key:t,name:n})=>(0,Z.jsx)(I,{props:e,title:n,subtitle:t},t),onInputChange:Y(Pt),renderInput:e=>(0,Z.jsx)(m,{...e,required:!0,label:le}),onChange:(e,t)=>{a(`package`,t),ee?.(t),A!==`No previous release version`&&a(`previousVersion`,`No previous release version`)},onClose:Zt(oe),"data-testid":`PackageAutocomplete`})}),(0,Z.jsx)(v,{sx:{mb:1,mt:2},variant:`body2`,children:`Target Version Info`})]}),(0,Z.jsx)(P,{name:`version`,control:i,rules:{validate:{checkSpaces:e=>!He||!xe||Ot(e,xe),restrictedSymbols:wt,notEqualToPrevious:e=>Tt(e,mt(A).versionKey)}},render:({field:e})=>(0,Z.jsx)(f,{freeSolo:!0,disabled:!e||!ve||G,value:e.value||``,options:fe??[],loading:_,renderOption:(e,t)=>(0,Qt.createElement)(he,{...e,key:t},t),onInputChange:Y(It),filterOptions:Xe,renderInput:t=>(0,Z.jsx)(m,{...e,...t,required:!0,label:`Version`,error:!!E.version}),onChange:(e,t)=>{a(`version`,t??``),h?.(t??``)},onClose:Zt(ie),"data-testid":`VersionAutocomplete`})}),(0,Z.jsx)(P,{name:`status`,control:i,render:({field:{value:e}})=>(0,Z.jsx)(pt,{disableClearable:!0,inputIndicator:Le,value:e??null,options:rt,getOptionDisabled:e=>!be.includes(at[e]),disabled:G,renderOption:(e,t)=>(0,Qt.createElement)(he,{...e,key:t,"data-testid":`Option-${t}`},(0,Z.jsx)(ct,{status:t})),onChange:(e,t)=>{Ye(e,t||`draft`),a(`status`,t)},renderInput:e=>(0,Z.jsx)(m,{...e,label:`Status`,required:!0,error:!!Le,InputProps:{...e.InputProps,sx:{"& .MuiInputBase-input":{color:`transparent`,caretColor:`transparent`,"::selection":{background:`transparent`,color:`transparent`}},"& .Mui-disabled":{WebkitTextFillColor:`transparent`}},startAdornment:k?(0,Z.jsx)(ct,{sx:{height:16,mb:1},status:k}):null}}),"data-testid":`StatusAutocomplete`})}),(0,Z.jsx)(P,{name:`labels`,control:i,render:({field:e})=>(0,Z.jsx)(Ct,{disabled:G,onChange:(e,t)=>{Je(e,t),a(`labels`,t??[])},value:e.value})}),!Ae&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(pe,{sx:{mx:0,mt:1,mb:.5},orientation:`horizontal`}),(0,Z.jsx)(P,{name:`previousVersion`,control:i,render:({field:e})=>(0,Z.jsx)(pt,{disabled:G,inputChip:vt?(0,Z.jsx)(ct,{sx:{height:`18px`},status:vt}):void 0,inputIndicator:St&&V&&(0,Z.jsx)(ke,{versionKey:A,hasErrors:V.hasErrors,changelogHasErrors:V.changelogHasErrors,apiProcessorVersion:V.apiProcessorVersion,kind:Ne}),value:e.value??null,options:jt,loading:ft,filterOptions:Xe,onInputChange:Y((e,t)=>st(t)),onClose:()=>st(``),getOptionLabel:Ze,isOptionEqualToValue:(e,t)=>e===mt(t).versionKey,renderOption:(e,t)=>(0,Z.jsx)(I,{props:e,title:Ze(t),overflowTooltipPlacement:`left`,indicator:At(t),chip:kt(t),"data-testid":`Option-${t}`},t),renderInput:e=>(0,Z.jsx)(m,{...e,required:!0,label:F.fieldLabel,error:U||bt,helperText:U?`A release version must have a release previous version`:Ce}),onChange:(e,t)=>{a(`previousVersion`,t??`No previous release version`),Te?.(t??`No previous release version`)},"data-testid":`PreviousReleaseVersionAutocomplete`})})]}),E.version?.message&&(0,Z.jsx)(u,{pt:2,children:(0,Z.jsx)(Ft,{children:E.version?.message})}),(0,Z.jsx)(ut,{message:Dt})]}),(0,Z.jsxs)(ue,{children:[(0,Z.jsx)(Be,{variant:`contained`,type:`submit`,loading:Se,disabled:Bt||je||T||Se||bt||Fe||U,"data-testid":y?`${y}Button`:`PublishButton`,children:y??`Publish`}),(0,Z.jsx)(ae,{variant:`outlined`,onClick:()=>n(!1),"data-testid":`CancelButton`,children:`Close`})]})]})}),Q.displayName=`VersionDialogForm`,$t=`CSV file must have the following information: "serviceName" and "serviceVersion". Published dashboard version will include package release versions (from selected workspace) for specified services. Also, "method" and "path" of REST API operations for services should be defined in the file. In this case, the system will create operations group with the operations for specified method and path.`,en=`CSV file must have the following information: "serviceName" and "serviceVersion". Published dashboard version will include package release versions (from selected workspace) for specified services. Also, "type" and "method" of GraphQL operations for services should be defined in the file. In this case, the system will create operations group with the operations for specified type and method.`,tn=`The workspace in which package versions for services from the CSV configuration will be searched. The package versions found in this workspace will be included into the dashboard version.`,Q.__docgenInfo={description:``,methods:[],displayName:`VersionDialogForm`,props:{open:{required:!0,tsType:{name:`boolean`},description:``},setOpen:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`value`}],return:{name:`void`}}},description:``},onSubmit:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},control:{required:!0,tsType:{name:`Control`,elements:[{name:`T`}],raw:`Control<T>`},description:``},setValue:{required:!0,tsType:{name:`UseFormSetValue`,elements:[{name:`T`}],raw:`UseFormSetValue<T>`},description:``},formState:{required:!0,tsType:{name:`FormState`,elements:[{name:`T`}],raw:`FormState<T>`},description:``},packagePermissions:{required:!0,tsType:{name:`ReadonlyArray`,elements:[{name:`union`,raw:`| typeof READ_PERMISSION
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
| typeof DASHBOARD_KIND`,elements:[{name:`GROUP_KIND`},{name:`PACKAGE_KIND`},{name:`WORKSPACE_KIND`},{name:`DASHBOARD_KIND`}]},description:``},formHelperText:{required:!1,tsType:{name:`string`},description:``},isBlocking:{required:!1,tsType:{name:`boolean`},description:``},statusErrorIndicator:{required:!1,tsType:{name:`ReactNode`},description:``}}}})))()}var rn,an,on,sn,$,cn;function ln(){return(ln=e((()=>{rn=t(n(),1),Je(),L(),nn(),an=c(),on={component:Q},sn=e=>{let t=(0,rn.useMemo)(()=>({version:``,status:ot,labels:[],descriptorFile:null,previousVersion:nt}),[]),{control:n,setValue:r,formState:i}=Ye({defaultValues:t});return(0,an.jsx)(Q,{...e,control:n,setValue:r,formState:i})},$={name:`Default`,args:{open:!0,setOpen:()=>null,onSubmit:()=>null,versions:[],previousVersions:[],getVersionLabels:()=>[],packagePermissions:[],isPublishing:!1,hideDescriptorField:!0,hideDescriptorVersionField:!0},render:sn},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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