import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-5l_iQkTl.js";import{a as r}from"./router-7YU84Hy5.js";import{l as i}from"./dist-bFfJitqu.js";import{n as a}from"./dist-Bhbmx-MT.js";import{n as o,t as s}from"./debounce-BVqWGKkP.js";import{t as c}from"./jsx-runtime-Dw8SQ1Xa.js";import{n as l,t as u}from"./Box-B_l5-crx.js";import{n as d,t as f}from"./Autocomplete-qEKCSQYj.js";import{n as p,t as m}from"./TextField-BBwqJsbq.js";import{n as ee,t as h}from"./createSvgIcon-BXSVxfKP.js";import{n as te,t as ne}from"./Alert-CTFqYaR2.js";import{n as g,t as re}from"./IconButton-DvBRTGSA.js";import{n as _,t as v}from"./Typography-CxSQYU1Q.js";import{n as y,t as ie}from"./Button-C6vA4c9Q.js";import{n as b,t as ae}from"./DialogContent-DtvI-_UL.js";import{i as oe,n as se,r as ce,t as le}from"./DialogTitle-1rZTVADW.js";import{n as ue,t as de}from"./Divider-DkFdTD7U.js";import{n as fe,t as pe}from"./ListItem-fBA3Y_Y4.js";import{n as me,t as he}from"./Tooltip-BFKZgTh8.js";import{a as ge,c as _e,d as ve,f as ye,h as be,i as xe,m as Se,n as Ce,o as x,p as we,r as Te,s as S,t as Ee,u as C}from"./WarningApiProcessorVersion-QD7TcOHK.js";import{r as w,t as T}from"./colors-DInvwC4P.js";import{b as De,d as E,l as Oe,u as D,w as ke}from"./iframe-C79eAIld.js";import{n as O,t as Ae}from"./EditIcon-DZt0ttKw.js";import{n as k,t as A}from"./UploadButton-CAGE5LYA.js";import{n as j,t as je}from"./ErrorOutlined-Bwz5IWA4.js";import{n as M,t as Me}from"./InfoContextIcon-7muG-nFe.js";import{n as N,t as Ne}from"./LoadingButton-DkzOO3e1.js";import{n as Pe,t as Fe}from"./DialogForm-C70NlZIT.js";import{f as Ie}from"./src-CxWPkF7M-C4KvFiB4.js";import{f as P,l as Le,m as Re}from"./files-Br9Ky0mT.js";import{i as F,n as ze,r as Be,t as I}from"./index.esm-C73x_CXp.js";import{a as L}from"./constants-1jyUsruT.js";import{t as Ve}from"./mui-DZJR8qot.js";import{a as He,i as Ue,o as R,t as We}from"./api-types-B07W8ccQ.js";import{n as Ge,t as Ke}from"./CustomChip-B15C64I-.js";import{n as qe,t as z}from"./OptionItem-Dt7W1GfP.js";import{a as Je,c as Ye,d as Xe,l as Ze,n as Qe,o as $e,r as et,s as tt,t as nt,u as B}from"./version-status-u8VoIKvo.js";import{n as rt,r as it,t as at}from"./versions-Dmv5_tjq.js";import{i as ot,n as V,r as st,t as H}from"./FileIcon-daKb1DRE.js";import{n as ct,t as lt}from"./DeleteIcon-u9G1qGwX.js";import{n as U,t as ut}from"./FileUpload-CbFZnZzt.js";import{n as dt,t as ft}from"./LabelsAutocomplete-VBhvHKPG.js";import{a as pt,i as mt,n as ht,o as gt,r as _t}from"./validations-_HHQV7-A.js";var vt;function yt(){return(yt=e((()=>{be(),vt=class extends Se{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:E()},t)}getOptimisticResult(e){return e.behavior=E(),super.getOptimisticResult(e)}fetchNextPage({pageParam:e,...t}={}){return this.fetch({...t,meta:{fetchMore:{direction:`forward`,pageParam:e}}})}fetchPreviousPage({pageParam:e,...t}={}){return this.fetch({...t,meta:{fetchMore:{direction:`backward`,pageParam:e}}})}createResult(e,t){let{state:n}=e,r=super.createResult(e,t),{isFetching:i,isRefetching:a}=r,o=i&&n.fetchMeta?.fetchMore?.direction===`forward`,s=i&&n.fetchMeta?.fetchMore?.direction===`backward`;return{...r,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:Oe(t,n.data?.pages),hasPreviousPage:D(t,n.data?.pages),isFetchingNextPage:o,isFetchingPreviousPage:s,isRefetching:a&&!o&&!s}}}})))()}function bt(e,t,n){let r=ke(e,t,n);return we(r,vt)}function xt(){return(xt=e((()=>{De(),yt(),ye()})))()}var St,Ct;function wt(){return(wt=e((()=>{ee(),St=c(),Ct=h((0,St.jsx)(`path`,{d:`M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z`}),`ErrorRounded`)})))()}var W,Tt;function Et(){return(Et=e((()=>{_(),W=c(),Tt=({children:e})=>(0,W.jsx)(v,{"data-testid":`ErrorTypography`,variant:`body2`,color:`#FF5260`,children:e}),Tt.__docgenInfo={description:``,methods:[],displayName:`ErrorTypography`}})))()}function Dt(e){let{packageId:t}=i(),{status:n,textFilter:r,limit:a=100,page:o=1,enabled:s=!0,sortBy:c,sortOrder:l}=e??{},u=e?.packageKey??t,{data:d,isLoading:f,isInitialLoading:p,fetchNextPage:m,isFetchingNextPage:ee,hasNextPage:h}=bt({queryKey:[Mt,u,n,r,c,l,a,o,s],queryFn:({pageParam:e=o,signal:t})=>Ot(u,n,r,c,l,a,e-1,t),getNextPageParam:(e,t)=>{if(a)return e.length===a?t.length+1:void 0},enabled:!!u&&s});return{versions:(0,jt.useMemo)(()=>d?.pages.flat()??[],[d?.pages]),areVersionsLoading:f,areVersionsInitiallyLoading:p,fetchNextPage:m,isFetchingNextPage:ee,hasNextPage:h}}function G(e){return e.map(e=>et.get(e).toLowerCase()).join(`,`)}async function Ot(e,t,n,i,a,o=100,s=0,c){let l=encodeURIComponent(e),u=ve({status:{value:t,toStringValue:e=>G(e)},limit:{value:o},page:{value:s},textFilter:{value:n},sortBy:{value:i},sortOrder:{value:a}}),d=`/packages/:packageId/versions`;return kt(await x(`${r(d,{packageId:l})}?${u}`,{method:`GET`},{customRedirectHandler:e=>S(e,d),basePath:xe},c))}function kt({versions:e}){return e.map(e=>At(e))}function At(e){return{key:e.version,status:e.status,createdAt:e.createdAt,versionLabels:e.versionLabels??[],previousVersion:e?.previousVersion,createdBy:e.createdBy,latestRevision:!e.notLatestRevision}}var jt,Mt;function Nt(){return(Nt=e((()=>{xt(),a(),jt=n(),B(),C(),ge(),_e(),Mt=`package-versions-query-key`})))()}var Pt,K,Ft,It;function Lt(){return(Lt=e((()=>{l(),g(),_(),Pt=n(),ct(),V(),w(),K=c(),Ft=(0,Pt.memo)(({file:e,onDelete:t,onDownload:n})=>{let r=n?It:`black`;return(0,K.jsxs)(u,{display:`flex`,alignItems:`center`,"data-testid":n?`DownloadableFilePreview`:`NotDownloadableFilePreview`,children:[(0,K.jsxs)(u,{onClick:n,sx:{display:`flex`,gap:.5,cursor:n?`pointer`:`default`},children:[(0,K.jsx)(H,{color:r}),(0,K.jsx)(v,{variant:`subtitle2`,fontSize:13,color:r,children:e.name})]}),(0,K.jsx)(re,{onClick:t,sx:{ml:`auto`},"data-testid":`DeleteButton`,children:(0,K.jsx)(lt,{color:T})})]})}),It=`#005DCF`,Ft.__docgenInfo={description:``,methods:[],displayName:`UploadedFilePreview`,props:{file:{required:!0,tsType:{name:`File`},description:``},onDelete:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onDownload:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})))()}var q,J,Rt;function zt(){return(zt=e((()=>{n(),q=n(),te(),l(),_(),U(),k(),Lt(),ot(),P(),j(),J=c(),Rt=(0,q.memo)(({uploadedFile:e,setUploadedFile:t,onDownload:n,downloadAvailable:r,acceptableExtensions:i,errorMessage:a})=>{let o=(0,q.useCallback)(({target:{files:e}})=>t(e?Re(e)[0]:void 0),[t]),s=(0,q.useCallback)(({dataTransfer:{files:e}})=>t(Re(e)[0]),[t]),c=(0,q.useCallback)(()=>t(void 0),[t]),l=(0,q.useMemo)(()=>a&&(0,J.jsx)(ne,{icon:(0,J.jsx)(je,{color:`error`}),severity:`error`,sx:{p:0,py:`1px`,pl:2,alignItems:`center`},children:a}),[a]);return e?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Ft,{file:e,onDelete:c,onDownload:r?n:void 0}),l]}):(0,J.jsxs)(u,{sx:{display:`flex`,flexDirection:`column`,gap:1},children:[(0,J.jsx)(ut,{onDrop:s,acceptableFileTypes:i,children:(0,J.jsxs)(u,{sx:{display:`flex`,alignItems:`center`,justifyContent:`center`,backgroundColor:`rgb(242, 243, 245)`,boxSizing:`border-box`,borderRadius:`10px`,width:1,height:`44px`},children:[(0,J.jsx)(st,{sx:{color:`#626D82`,mr:`8px`}}),(0,J.jsx)(v,{variant:`subtitle2`,fontSize:13,children:`Drop ${Le(i)} file here to attach or`}),(0,J.jsx)(A,{title:`browse`,onUpload:o,buttonSxProp:{p:0,ml:.5,minWidth:`auto`,height:1,display:`flex`},"data-testid":`BrowseButton`,acceptableFileTypes:i})]})}),l]})}),Rt.__docgenInfo={description:``,methods:[],displayName:`FileUploadField`,props:{uploadedFile:{required:!0,tsType:{name:`union`,raw:`File | undefined`,elements:[{name:`File`},{name:`undefined`}]},description:``},setUploadedFile:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(file: File | undefined) => void`,signature:{arguments:[{type:{name:`union`,raw:`File | undefined`,elements:[{name:`File`},{name:`undefined`}]},name:`file`}],return:{name:`void`}}},description:``},onDownload:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},downloadAvailable:{required:!0,tsType:{name:`boolean`},description:``},acceptableExtensions:{required:!0,tsType:{name:`Array`,elements:[{name:`union`,raw:`| typeof YAML_FILE_EXTENSION
| typeof YML_FILE_EXTENSION
| typeof JSON_FILE_EXTENSION
| typeof MD_FILE_EXTENSION
| typeof HTML_FILE_EXTENSION
| typeof GRAPHQL_FILE_EXTENSION
| typeof GQL_FILE_EXTENSION
| typeof PROTO_FILE_EXTENSION
| typeof CSV_FILE_EXTENSION
| typeof SQL_FILE_EXTENSION
| typeof DDL_FILE_EXTENSION`,elements:[{name:`YAML_FILE_EXTENSION`},{name:`YML_FILE_EXTENSION`},{name:`JSON_FILE_EXTENSION`},{name:`MD_FILE_EXTENSION`},{name:`HTML_FILE_EXTENSION`},{name:`GRAPHQL_FILE_EXTENSION`},{name:`GQL_FILE_EXTENSION`},{name:`PROTO_FILE_EXTENSION`},{name:`CSV_FILE_EXTENSION`},{name:`SQL_FILE_EXTENSION`},{name:`DDL_FILE_EXTENSION`}]}],raw:`FileExtension[]`},description:``},errorMessage:{required:!1,tsType:{name:`string`},description:``}}}})))()}function Bt(e){return!!e}function Y(e){return(t,n,r)=>{r===`input`&&e(t,n)}}function Vt(e){return()=>{e?.(``)}}var X,Z,Q,Ht,Ut,Wt,Gt;function Kt(){return(Kt=e((()=>{n(),X=n(),ze(),d(),l(),y(),o(),oe(),b(),se(),ue(),fe(),p(),me(),_(),wt(),N(),Pe(),Ge(),B(),gt(),O(),ot(),it(),Et(),Nt(),dt(),qe(),L(),M(),P(),zt(),Te(),R(),Ie(),Z=c(),Q=n(),Ht=(0,X.memo)(e=>{let{open:t,setOpen:n,onSubmit:r,control:i,setValue:a,formState:o,selectedWorkspace:c,workspaces:l,areWorkspacesLoading:d,onSetWorkspace:p,onSetTargetPackage:ee,onSetTargetVersion:h,onSetTargetStatus:te,onSetTargetLabels:ne,onWorkspacesFilter:g,arePackagesLoading:re,areVersionsLoading:_,onVersionsFilter:y,onPackagesFilter:b,packages:oe,packagesTitle:se,versions:ue,previousVersionsPackageKey:fe,previousVersions:me,getVersionLabels:ge,packagePermissions:_e,releaseVersionPattern:ve,isPublishing:ye,extraValidationMassage:be,setSelectedPreviousVersion:xe,title:Se,submitButtonTittle:x,descriptorVersionFieldTitle:we,descriptorFileFieldTitle:Te,hideCSVRelatedFields:S=!0,hideDescriptorField:C,hideDescriptorVersionField:w,hideSaveMessageField:T,hidePreviousVersionField:De,hideCopyPackageFields:E,publishButtonDisabled:Oe,publishFieldsDisabled:D,currentPackageKey:ke}=e,{errors:O}=o,k=F({control:i,name:`workspace`}),A=F({control:i,name:`package`}),j=F({control:i,name:`status`}),je=F({control:i,name:`apiType`}),M=F({control:i,name:`previousVersion`}),N=F({control:i,name:`descriptorFile`}),Pe=j===Je,Ie=(0,X.useCallback)((e,t)=>g?.(t),[g]),P=(0,X.useCallback)((e,t)=>b?.(t),[b]),Le=(0,X.useCallback)((e,t)=>{h?.(t),y?.(t)},[y,h]),Re=(0,X.useCallback)((e,t)=>ne?.(t),[ne]),ze=(0,X.useCallback)((e,t)=>te?.(t),[te]),[Be,L]=(0,X.useState)(!1),R=Ye(j),Ge=(0,X.useCallback)(e=>e===`No previous release version`?R.noPreviousOptionLabel:at(e).versionKey,[R]),qe=(0,X.useMemo)(()=>Ze(j),[j]),[et,nt]=(0,X.useState)(``),B=(0,X.useMemo)(()=>s(nt,500),[]),{versions:it,areVersionsLoading:ot}=Dt({packageKey:fe,status:qe,textFilter:et,enabled:!De&&me===void 0&&!!fe}),V=(0,X.useMemo)(()=>rt(me??it),[me,it]),H=(0,X.useMemo)(()=>new Map(V.map(({key:e,status:t})=>[e,t])),[V]),[ct,lt]=(0,X.useState)();(0,X.useEffect)(()=>{if(!M||M===`No previous release version`){lt(void 0);return}let e=H.get(M);if(e){lt({version:M,status:e});return}lt(e=>e?.version===M?e:void 0)},[M,H]);let U=(0,X.useCallback)(e=>H.get(e)??(e===ct?.version?ct.status:void 0),[H,ct]),ut=(0,X.useMemo)(()=>{let e=V.map(({key:e})=>e),t=M&&M!==`No previous release version`&&!e.includes(M);return[Qe,...t?[M]:[],...e]},[V,M]),dt=(0,X.useMemo)(()=>{if(!M||M===`No previous release version`)return!1;let e=U(M);return e?!Xe(j,e):!1},[M,U,j]),gt=(0,X.useMemo)(()=>s(Ie,500),[Ie]),vt=(0,X.useMemo)(()=>s(P,500),[P]),yt=(0,X.useMemo)(()=>s(Le,500),[Le]),[bt,xt]=(0,X.useState)(null),[St,wt]=(0,X.useState)(!1),W=(0,X.useCallback)(e=>{xt(e?.target?.result?String(e.target.result):null),wt(!1)},[]);(0,X.useEffect)(()=>{c?.key&&a(`workspace`,c)},[c,c?.key,a]),(0,X.useEffect)(()=>{if(!N)return;let e=new FileReader;e.onload=W,e.onerror=W,wt(!0),e.readAsText(N)},[N,W]);let Et=(0,X.useMemo)(()=>!T||!w||!C,[C,w,T]),G=(0,X.useMemo)(()=>D||!E&&!A||!S&&!k,[D,E,A,S,k]);return(0,Z.jsxs)(Fe,{open:t,onClose:()=>n(!1),onSubmit:r,children:[(0,Z.jsx)(le,{"data-testid":`DialogTitle`,children:Se??`Publish`}),(0,Z.jsxs)(ae,{sx:{width:440},children:[!T&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(v,{variant:`button`,children:`Save`}),(0,Z.jsx)(I,{name:`message`,control:i,render:({field:e})=>(0,Z.jsx)(m,{...e,multiline:!0,required:!0,autoComplete:`on`,rows:`4`,type:`text`,label:`Message`,"data-testid":`MessageTextField`})}),(0,Z.jsx)(v,{variant:`button`,children:`Publish`})]}),!w&&(0,Z.jsx)(I,{name:`descriptorVersion`,control:i,rules:{validate:{restrictedSymbols:e=>pt(e??``)}},render:({field:e})=>(0,Z.jsx)(m,{...e,value:e.value??``,required:!0,label:we??`Descriptor Version`,error:!!O.descriptorVersion,onChange:e=>a(`descriptorVersion`,e.target.value??``),"data-testid":`DescriptorVersionTextField`})}),!C&&(0,Z.jsx)(I,{name:`descriptorFile`,control:i,rules:{validate:{correctUpload:()=>Bt(bt)}},render:({field:e})=>(0,Z.jsxs)(u,{component:`label`,htmlFor:`contained-button-file`,children:[(0,Z.jsx)(u,{component:`input`,id:`contained-button-file`,display:`none`,multiple:!0,type:`file`,onChange:({target:{files:e}})=>{a(`descriptorFile`,e?.[0]??null)}}),(0,Z.jsx)(m,{...e,sx:{label:{height:`100%`,width:`100%`}},value:e.value?.name??``,label:Te??`Descriptor File`,error:!!O.descriptorFile,helperText:O.descriptorFile?.message,required:!0,InputProps:{endAdornment:(0,Z.jsxs)(u,{display:`flex`,flexDirection:`row`,sx:{cursor:`pointer`},children:[e.value?(0,Z.jsx)(Ae,{}):(0,Z.jsx)(st,{fontSize:`small`,sx:{color:`#353C4E`}}),!!O.descriptorFile&&(0,Z.jsx)(Ct,{color:`error`})]}),inputProps:{readOnly:!0}},"data-testid":`DescriptorFileTextField`})]})}),Et&&(0,Z.jsx)(de,{sx:{mx:0,mt:1,mb:.5},orientation:`horizontal`}),!S&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(u,{gap:.5,alignItems:`center`,pb:1,children:(0,Z.jsx)(I,{name:`apiType`,control:i,rules:{required:!0},render:({field:{value:e,onChange:t}})=>(0,Z.jsx)(f,{value:e??Ue,options:We,isOptionEqualToValue:(e,t)=>e===t,renderOption:(e,t)=>(0,Q.createElement)(pe,{...e,key:t,"data-testid":`Option-${t}`},He[t]),getOptionLabel:e=>He[e],onChange:(e,n)=>{t(n)},renderInput:e=>(0,Z.jsx)(m,{required:!0,...e,label:`API type`}),"data-testid":`ApiTypeAutocomplete`})})}),(0,Z.jsxs)(u,{display:`flex`,gap:.5,alignItems:`center`,pb:1,children:[(0,Z.jsxs)(u,{sx:{lineHeight:1},children:[(0,Z.jsx)(v,{variant:`button`,component:`span`,children:`Dashboard Version Config`}),(0,Z.jsx)(v,{variant:`button`,component:`span`,color:`#FF5260`,children:`*`})]}),(0,Z.jsx)(he,{disableHoverListener:!1,placement:`right`,title:je===`rest`?Ut:Wt,PopperProps:{sx:{".MuiTooltip-tooltip":{maxWidth:`600px`}}},children:(0,Z.jsx)(Me,{fontSize:`extra-small`})})]}),(0,Z.jsx)(I,{name:`file`,rules:{required:`Please upload a file`,validate:{checkFileType:e=>ht(e,[`.csv`])}},control:i,render:({field:{value:e,onChange:t}})=>(0,Z.jsx)(Rt,{errorMessage:O.file?.message,uploadedFile:e,setUploadedFile:e=>t(e),downloadAvailable:!1,acceptableExtensions:[`.csv`]})}),(0,Z.jsxs)(u,{display:`flex`,gap:.5,alignItems:`center`,pt:2,children:[(0,Z.jsx)(v,{variant:`button`,children:`Package Search Scope for Dashboard Version`}),(0,Z.jsx)(he,{disableHoverListener:!1,placement:`right`,title:Gt,PopperProps:{sx:{".MuiTooltip-tooltip":{maxWidth:`600px`}}},children:(0,Z.jsx)(Me,{fontSize:`extra-small`})})]}),(0,Z.jsx)(I,{name:`workspace`,control:i,render:({field:{value:e}})=>(0,Z.jsx)(f,{value:e,options:l??[],loading:d,isOptionEqualToValue:(e,t)=>e.key===t.key,getOptionLabel:e=>e?.name??``,renderOption:(e,{key:t,name:n})=>(0,Z.jsx)(z,{props:e,title:n,subtitle:t},t),onChange:(e,t)=>{a(`workspace`,t??null),a(`package`,null),p?.(t)},onInputChange:Y(gt),onClose:Vt(g),renderInput:e=>(0,Z.jsx)(m,{required:!0,...e,label:`Workspace`}),"data-testid":`WorkspaceAutocomplete`})}),(0,Z.jsx)(u,{sx:{lineHeight:1},pt:2,children:(0,Z.jsx)(v,{variant:`button`,children:`Publish Info`})})]}),!E&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(v,{sx:{mb:1},variant:`body2`,children:[`Target `,se]}),(0,Z.jsx)(I,{name:`workspace`,control:i,render:({field:{value:e}})=>(0,Z.jsx)(f,{value:e,options:l??[],loading:d,isOptionEqualToValue:(e,t)=>e.key===t.key,getOptionLabel:e=>e?.name??``,renderOption:(e,{key:t,name:n})=>(0,Z.jsx)(z,{props:e,title:n,subtitle:t},t),onChange:(e,t)=>{a(`workspace`,t??null),a(`package`,null),p?.(t)},onClose:Vt(g),onInputChange:Y(gt),renderInput:e=>(0,Z.jsx)(m,{required:!0,...e,label:`Workspace`}),"data-testid":`WorkspaceAutocomplete`})}),(0,Z.jsx)(I,{name:`package`,control:i,render:({field:{value:e}})=>(0,Z.jsx)(f,{value:e,disabled:!k,isOptionEqualToValue:(e,t)=>e.key===t.key,options:oe??[],loading:re,filterOptions:Ve,getOptionLabel:e=>e?.name??``,renderOption:(e,{key:t,name:n})=>(0,Z.jsx)(z,{props:e,title:n,subtitle:t},t),onInputChange:Y(vt),renderInput:e=>(0,Z.jsx)(m,{...e,required:!0,label:se}),onChange:(e,t)=>{a(`package`,t),ee?.(t),M!==`No previous release version`&&a(`previousVersion`,`No previous release version`),L(!1)},onClose:Vt(b),"data-testid":`PackageAutocomplete`})}),(0,Z.jsx)(v,{sx:{mb:1,mt:2},variant:`body2`,children:`Target Version Info`})]}),(0,Z.jsx)(I,{name:`version`,control:i,rules:{validate:{checkSpaces:e=>!Pe||!ve||_t(e,ve),restrictedSymbols:pt,notEqualToPrevious:e=>mt(e,at(M).versionKey)}},render:({field:e})=>(0,Z.jsx)(f,{freeSolo:!0,disabled:!e||!ge||G,value:e.value||``,options:ue??[],loading:_,renderOption:(e,t)=>(0,Q.createElement)(pe,{...e,key:t},t),onInputChange:Y(yt),filterOptions:Ve,renderInput:t=>(0,Z.jsx)(m,{...e,...t,required:!0,label:`Version`,error:!!O.version}),onChange:(e,t)=>{a(`version`,t??``),h?.(t??``)},onClose:Vt(y),"data-testid":`VersionAutocomplete`})}),(0,Z.jsx)(I,{name:`status`,control:i,render:({field:{value:e}})=>(0,Z.jsx)(f,{disableClearable:!0,value:e??null,options:$e,getOptionDisabled:e=>!_e.includes(tt[e]),disabled:G,renderOption:(e,t)=>(0,Q.createElement)(pe,{...e,key:t,"data-testid":`Option-${t}`},(0,Z.jsx)(Ke,{value:t})),onChange:(e,t)=>{ze(e,t||`draft`),a(`status`,t)},renderInput:e=>(0,Z.jsx)(m,{...e,label:`Status`,required:!0,InputProps:{...e.InputProps,sx:{"& .MuiInputBase-input":{color:`transparent`,caretColor:`transparent`,"::selection":{background:`transparent`,color:`transparent`}},"& .Mui-disabled":{WebkitTextFillColor:`transparent`}},startAdornment:j?(0,Z.jsx)(Ke,{sx:{height:16,mb:1},value:j}):null}}),"data-testid":`StatusAutocomplete`})}),(0,Z.jsx)(I,{name:`labels`,control:i,render:({field:e})=>(0,Z.jsx)(ft,{disabled:G,onChange:(e,t)=>{Re(e,t),a(`labels`,t??[])},value:e.value})}),!De&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(de,{sx:{mx:0,mt:1,mb:.5},orientation:`horizontal`}),(0,Z.jsx)(I,{name:`previousVersion`,control:i,render:({field:e})=>(0,Z.jsx)(f,{disabled:G,value:e.value??null,options:ut,loading:ot,filterOptions:Ve,onInputChange:Y((e,t)=>B(t)),onClose:()=>B(``),getOptionLabel:Ge,isOptionEqualToValue:(e,t)=>e===at(t).versionKey,renderOption:(e,t)=>(0,Z.jsx)(z,{props:e,title:Ge(t),chipValue:U(t),chipVariant:`filled`,"data-testid":`Option-${t}`},t),renderInput:e=>{let t=M?U(M):void 0;return(0,Z.jsx)(m,{...e,required:!0,label:R.fieldLabel,error:dt,helperText:dt?`A release version must have a release previous version`:be,InputProps:{...e.InputProps,endAdornment:(0,Z.jsxs)(Z.Fragment,{children:[t&&(0,Z.jsx)(Ke,{sx:{mr:.5,height:`18px`},value:t}),e.InputProps.endAdornment]})}})},onChange:(e,t)=>{a(`previousVersion`,t??`No previous release version`),xe?.(t??`No previous release version`),(!t||t===`No previous release version`)&&L(!1)},"data-testid":`PreviousReleaseVersionAutocomplete`})})]}),O.version?.message&&(0,Z.jsx)(u,{pt:2,children:(0,Z.jsx)(Tt,{children:O.version?.message})}),(0,Z.jsx)(Ce,{versionKey:M===`No previous release version`?void 0:M,packageKey:A?.key||ke,type:Ee,onWarningTextChange:e=>L(!!e)})]}),(0,Z.jsxs)(ce,{children:[(0,Z.jsx)(Ne,{variant:`contained`,type:`submit`,loading:ye,disabled:St||Oe||D||Be||dt,"data-testid":x?`${x}Button`:`PublishButton`,children:x??`Publish`}),(0,Z.jsx)(ie,{variant:`outlined`,onClick:()=>n(!1),"data-testid":`CancelButton`,children:`Close`})]})]})}),Ut=`CSV file must have the following information: "serviceName" and "serviceVersion". Published dashboard version will include package release versions (from selected workspace) for specified services. Also, "method" and "path" of REST API operations for services should be defined in the file. In this case, the system will create operations group with the operations for specified method and path.`,Wt=`CSV file must have the following information: "serviceName" and "serviceVersion". Published dashboard version will include package release versions (from selected workspace) for specified services. Also, "type" and "method" of GraphQL operations for services should be defined in the file. In this case, the system will create operations group with the operations for specified type and method.`,Gt=`The workspace in which package versions for services from the CSV configuration will be searched. The package versions found in this workspace will be included into the dashboard version.`,Ht.__docgenInfo={description:``,methods:[],displayName:`VersionDialogForm`,props:{open:{required:!0,tsType:{name:`boolean`},description:``},setOpen:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`value`}],return:{name:`void`}}},description:``},onSubmit:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},control:{required:!0,tsType:{name:`Control`,elements:[{name:`T`}],raw:`Control<T>`},description:``},setValue:{required:!0,tsType:{name:`UseFormSetValue`,elements:[{name:`T`}],raw:`UseFormSetValue<T>`},description:``},formState:{required:!0,tsType:{name:`FormState`,elements:[{name:`T`}],raw:`FormState<T>`},description:``},packagePermissions:{required:!0,tsType:{name:`ReadonlyArray`,elements:[{name:`union`,raw:`| typeof READ_PERMISSION
| typeof CREATE_AND_UPDATE_PACKAGE_PERMISSION
| typeof DELETE_PACKAGE_PERMISSION
| typeof MANAGE_DRAFT_VERSION_PERMISSION
| typeof MANAGE_RELEASE_VERSION_PERMISSION
| typeof MANAGE_DEPRECATED_VERSION_PERMISSION
| typeof MANAGE_ARCHIVED_VERSION_PERMISSION
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`MANAGE_ARCHIVED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`},description:``},releaseVersionPattern:{required:!0,tsType:{name:`union`,raw:`string | undefined`,elements:[{name:`string`},{name:`undefined`}]},description:``},selectedWorkspace:{required:!1,tsType:{name:`union`,raw:`Package | null`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
| typeof MANAGE_ARCHIVED_VERSION_PERMISSION
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`MANAGE_ARCHIVED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!1}},{key:`restGroupingPrefix`,value:{name:`string`,required:!1}},{key:`parents`,value:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`object`,raw:`{
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
| typeof MANAGE_ARCHIVED_VERSION_PERMISSION
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`MANAGE_ARCHIVED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!1}},{key:`restGroupingPrefix`,value:{name:`string`,required:!1}},{key:`parents`,value:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`object`,raw:`{
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
| typeof MANAGE_ARCHIVED_VERSION_PERMISSION
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`MANAGE_ARCHIVED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!1}},{key:`restGroupingPrefix`,value:{name:`string`,required:!1}},{key:`parents`,value:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`object`,raw:`{
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
| typeof MANAGE_ARCHIVED_VERSION_PERMISSION
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`MANAGE_ARCHIVED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!1}},{key:`restGroupingPrefix`,value:{name:`string`,required:!1}},{key:`parents`,value:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`object`,raw:`{
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
| typeof RELEASE_VERSION_STATUS
| typeof ARCHIVED_VERSION_STATUS`,elements:[{name:`DRAFT_VERSION_STATUS`},{name:`RELEASE_VERSION_STATUS`},{name:`ARCHIVED_VERSION_STATUS`}]},name:`status`}],return:{name:`void`}}},description:``},onSetTargetLabels:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(labels: string[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`labels`}],return:{name:`void`}}},description:``},areWorkspacesLoading:{required:!1,tsType:{name:`boolean`},description:``},arePackagesLoading:{required:!1,tsType:{name:`boolean`},description:``},areVersionsLoading:{required:!1,tsType:{name:`boolean`},description:``},packages:{required:!1,tsType:{name:`ReadonlyArray`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
| typeof MANAGE_ARCHIVED_VERSION_PERMISSION
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`MANAGE_ARCHIVED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!1}},{key:`restGroupingPrefix`,value:{name:`string`,required:!1}},{key:`parents`,value:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`object`,raw:`{
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
| typeof MANAGE_ARCHIVED_VERSION_PERMISSION
| typeof USER_ACCESS_MANAGEMENT_PERMISSION
| typeof ACCESS_TOKEN_MANAGEMENT_PERMISSION
| typeof DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`,elements:[{name:`READ_PERMISSION`},{name:`CREATE_AND_UPDATE_PACKAGE_PERMISSION`},{name:`DELETE_PACKAGE_PERMISSION`},{name:`MANAGE_DRAFT_VERSION_PERMISSION`},{name:`MANAGE_RELEASE_VERSION_PERMISSION`},{name:`MANAGE_DEPRECATED_VERSION_PERMISSION`},{name:`MANAGE_ARCHIVED_VERSION_PERMISSION`},{name:`USER_ACCESS_MANAGEMENT_PERMISSION`},{name:`ACCESS_TOKEN_MANAGEMENT_PERMISSION`},{name:`DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION`}]}],raw:`ReadonlyArray<PackagePermission>`,required:!1}},{key:`restGroupingPrefix`,value:{name:`string`,required:!1}},{key:`parents`,value:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`object`,raw:`{
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
| typeof RELEASE_VERSION_STATUS
| typeof ARCHIVED_VERSION_STATUS`,elements:[{name:`DRAFT_VERSION_STATUS`},{name:`RELEASE_VERSION_STATUS`},{name:`ARCHIVED_VERSION_STATUS`}],required:!0}},{key:`createdBy`,value:{name:`union`,raw:`User | Token | Job`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>`}],raw:`PackageVersion[]`}],raw:`Readonly<PackageVersion[]>`},description:``},getVersionLabels:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(version: Key) => string[]`,signature:{arguments:[{type:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`},name:`version`}],return:{name:`Array`,elements:[{name:`string`}],raw:`string[]`}}},description:``},isPublishing:{required:!1,tsType:{name:`boolean`},description:``},extraValidationMassage:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},setSelectedPreviousVersion:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: Key) => void`,signature:{arguments:[{type:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`},name:`value`}],return:{name:`void`}}},description:``},title:{required:!1,tsType:{name:`string`},description:``},submitButtonTittle:{required:!1,tsType:{name:`string`},description:``},descriptorVersionFieldTitle:{required:!1,tsType:{name:`string`},description:``},descriptorFileFieldTitle:{required:!1,tsType:{name:`string`},description:``},hideCSVRelatedFields:{required:!1,tsType:{name:`boolean`},description:``},hideDescriptorField:{required:!1,tsType:{name:`boolean`},description:``},hideDescriptorVersionField:{required:!1,tsType:{name:`boolean`},description:``},hideSaveMessageField:{required:!1,tsType:{name:`boolean`},description:``},hideCopyPackageFields:{required:!1,tsType:{name:`boolean`},description:``},hidePreviousVersionField:{required:!1,tsType:{name:`boolean`},description:``},publishButtonDisabled:{required:!1,tsType:{name:`boolean`},description:``},publishFieldsDisabled:{required:!1,tsType:{name:`boolean`},description:``},currentPackageKey:{required:!1,tsType:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`},description:``}}}})))()}var qt,Jt,Yt,Xt,$,Zt;function Qt(){return(Qt=e((()=>{qt=t(n(),1),ze(),B(),Kt(),Jt=c(),Yt={component:Ht},Xt=e=>{let t=(0,qt.useMemo)(()=>({version:``,status:nt,labels:[],descriptorFile:null,previousVersion:Qe}),[]),{control:n,setValue:r,formState:i}=Be({defaultValues:t});return(0,Jt.jsx)(Ht,{...e,control:n,setValue:r,formState:i})},$={name:`Default`,args:{open:!0,setOpen:()=>null,onSubmit:()=>null,versions:[],previousVersions:[],getVersionLabels:()=>[],packagePermissions:[],isPublishing:!1,hideDescriptorField:!0,hideDescriptorVersionField:!0},render:Xt},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Zt=[`DefaultStory`]})))()}Qt();export{$ as DefaultStory,Zt as __namedExportsOrder,Yt as default};