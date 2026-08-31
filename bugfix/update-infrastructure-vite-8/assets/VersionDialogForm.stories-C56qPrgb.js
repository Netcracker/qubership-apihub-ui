import{n as e,s as t,t as n}from"./rolldown-runtime-BcKkbAw3.js";import{t as r}from"./react-5l_iQkTl.js";import{a as i}from"./router-7YU84Hy5.js";import{l as a}from"./dist-bFfJitqu.js";import{n as o}from"./dist-Bhbmx-MT.js";import{t as s}from"./jsx-runtime-Dw8SQ1Xa.js";import{n as c,t as l}from"./debounce-Btz0qpQl.js";import{n as u,t as d}from"./Alert-BFOsvBOr.js";import{n as ee,t as f}from"./IconButton-nZott58-.js";import{n as p,t as m}from"./Typography-DQo_Zf9Y.js";import{n as te,t as h}from"./Autocomplete-Dh2LNmkk.js";import{n as g,t as _}from"./TextField-Ba7r1sPh.js";import{n as v,t as y}from"./Box-BoHOER5V.js";import{n as ne,t as re}from"./Button-I3tvzdd9.js";import{n as b,t as ie}from"./DialogContent-DM_9YyvD.js";import{i as x,n as ae,r as oe,t as se}from"./DialogTitle-CGjAX6IT.js";import{n as ce,t as le}from"./Divider-DlN9N0Ug.js";import{n as ue,t as de}from"./ListItem-jX0QHtFJ.js";import{n as fe,t as pe}from"./Tooltip-xuAwTqSK.js";import{a as me,c as he,d as ge,f as _e,h as ve,i as ye,m as be,n as xe,o as Se,p as Ce,r as we,s as Te,t as Ee,u as De}from"./WarningApiProcessorVersion-Df7GLjyI.js";import{r as S,t as C}from"./colors-DInvwC4P.js";import{b as w,d as T,l as E,u as Oe,w as ke}from"./iframe-DMiWyO05.js";import{n as Ae,t as je}from"./EditIcon-DZt0ttKw.js";import{n as D,t as Me}from"./LoadingButton-DhAN4WZx.js";import{n as Ne,t as Pe}from"./DialogForm-Bj08xMWK.js";import{f as Fe}from"./src-CxWPkF7M-C4KvFiB4.js";import{f as O,l as Ie,m as k}from"./files-Br9Ky0mT.js";import{n as Le,t as Re}from"./createSvgIcon-DguXvmFd.js";import{i as A,n as j,r as ze,t as M}from"./index.esm-C73x_CXp.js";import{t as Be}from"./ErrorOutlined-DwizlD24.js";import{a as Ve}from"./constants-1jyUsruT.js";import{t as He}from"./mui-DZJR8qot.js";import{a as Ue,i as We,o as Ge,t as Ke}from"./api-types-B07W8ccQ.js";import{n as qe,t as Je}from"./CustomChip-DIDAd3Se.js";import{n as N,t as P}from"./OptionItem-DQ0U_PJb.js";import{n as F,t as Ye}from"./InfoContextIcon-l86MpTuT.js";import{a as Xe,c as Ze,d as Qe,l as $e,n as et,o as tt,r as nt,s as rt,t as it,u as I}from"./version-status-u8VoIKvo.js";import{n as at,r as ot,t as st}from"./versions-Dmv5_tjq.js";import{i as L,n as ct,r as lt,t as ut}from"./FileIcon-YQm9V_zZ.js";import{n as R,t as z}from"./DeleteIcon-u9G1qGwX.js";import{n as B,t as V}from"./FileUpload-DVZ93_T-.js";import{n as H,t as dt}from"./LabelsAutocomplete-_EIehYrL.js";import{a as ft,i as pt,n as mt,o as ht,r as gt}from"./validations-_HHQV7-A.js";import{n as U,t as _t}from"./UploadButton-LxCz0o1g.js";var vt;function yt(){return(yt=e((()=>{ve(),vt=class extends be{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:T()},t)}getOptimisticResult(e){return e.behavior=T(),super.getOptimisticResult(e)}fetchNextPage({pageParam:e,...t}={}){return this.fetch({...t,meta:{fetchMore:{direction:`forward`,pageParam:e}}})}fetchPreviousPage({pageParam:e,...t}={}){return this.fetch({...t,meta:{fetchMore:{direction:`backward`,pageParam:e}}})}createResult(e,t){let{state:n}=e,r=super.createResult(e,t),{isFetching:i,isRefetching:a}=r,o=i&&n.fetchMeta?.fetchMore?.direction===`forward`,s=i&&n.fetchMeta?.fetchMore?.direction===`backward`;return{...r,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:E(t,n.data?.pages),hasPreviousPage:Oe(t,n.data?.pages),isFetchingNextPage:o,isFetchingPreviousPage:s,isRefetching:a&&!o&&!s}}}})))()}function bt(e,t,n){let r=ke(e,t,n);return Ce(r,vt)}function xt(){return(xt=e((()=>{w(),yt(),_e()})))()}var St=n((e=>{var t=Le();Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(Re()),r=s();e.default=(0,n.default)((0,r.jsx)(`path`,{d:`M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z`}),`ErrorRounded`)})),W,Ct;function G(){return(G=e((()=>{p(),W=s(),Ct=({children:e})=>(0,W.jsx)(m,{"data-testid":`ErrorTypography`,variant:`body2`,color:`#FF5260`,children:e}),Ct.__docgenInfo={description:``,methods:[],displayName:`ErrorTypography`}})))()}function wt(e){let{packageId:t}=a(),{status:n,textFilter:r,limit:i=100,page:o=1,enabled:s=!0,sortBy:c,sortOrder:l}=e??{},u=e?.packageKey??t,{data:d,isLoading:ee,isInitialLoading:f,fetchNextPage:p,isFetchingNextPage:m,hasNextPage:te}=bt({queryKey:[kt,u,n,r,c,l,i,o,s],queryFn:({pageParam:e=o,signal:t})=>K(u,n,r,c,l,i,e-1,t),getNextPageParam:(e,t)=>{if(i)return e.length===i?t.length+1:void 0},enabled:!!u&&s});return{versions:(0,Ot.useMemo)(()=>d?.pages.flat()??[],[d?.pages]),areVersionsLoading:ee,areVersionsInitiallyLoading:f,fetchNextPage:p,isFetchingNextPage:m,hasNextPage:te}}function Tt(e){return e.map(e=>nt.get(e).toLowerCase()).join(`,`)}async function K(e,t,n,r,a,o=100,s=0,c){let l=encodeURIComponent(e),u=ge({status:{value:t,toStringValue:e=>Tt(e)},limit:{value:o},page:{value:s},textFilter:{value:n},sortBy:{value:r},sortOrder:{value:a}}),d=`/packages/:packageId/versions`;return Et(await Se(`${i(d,{packageId:l})}?${u}`,{method:`GET`},{customRedirectHandler:e=>Te(e,d),basePath:ye},c))}function Et({versions:e}){return e.map(e=>Dt(e))}function Dt(e){return{key:e.version,status:e.status,createdAt:e.createdAt,versionLabels:e.versionLabels??[],previousVersion:e?.previousVersion,createdBy:e.createdBy,latestRevision:!e.notLatestRevision}}var Ot,kt;function At(){return(At=e((()=>{xt(),o(),Ot=r(),I(),De(),me(),he(),kt=`package-versions-query-key`})))()}var jt,q,Mt,Nt;function Pt(){return(Pt=e((()=>{v(),ee(),p(),jt=r(),R(),ct(),S(),q=s(),Mt=(0,jt.memo)(({file:e,onDelete:t,onDownload:n})=>{let r=n?Nt:`black`;return(0,q.jsxs)(y,{display:`flex`,alignItems:`center`,"data-testid":n?`DownloadableFilePreview`:`NotDownloadableFilePreview`,children:[(0,q.jsxs)(y,{onClick:n,sx:{display:`flex`,gap:.5,cursor:n?`pointer`:`default`},children:[(0,q.jsx)(ut,{color:r}),(0,q.jsx)(m,{variant:`subtitle2`,fontSize:13,color:r,children:e.name})]}),(0,q.jsx)(f,{onClick:t,sx:{ml:`auto`},"data-testid":`DeleteButton`,children:(0,q.jsx)(z,{color:C})})]})}),Nt=`#005DCF`,Mt.__docgenInfo={description:``,methods:[],displayName:`UploadedFilePreview`,props:{file:{required:!0,tsType:{name:`File`},description:``},onDelete:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onDownload:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})))()}var J,Ft,Y,It;function Lt(){return(Lt=e((()=>{r(),J=r(),u(),v(),p(),B(),U(),Pt(),L(),O(),Ft=t(Be(),1),Y=s(),It=(0,J.memo)(({uploadedFile:e,setUploadedFile:t,onDownload:n,downloadAvailable:r,acceptableExtensions:i,errorMessage:a})=>{let o=(0,J.useCallback)(({target:{files:e}})=>t(e?k(e)[0]:void 0),[t]),s=(0,J.useCallback)(({dataTransfer:{files:e}})=>t(k(e)[0]),[t]),c=(0,J.useCallback)(()=>t(void 0),[t]),l=(0,J.useMemo)(()=>a&&(0,Y.jsx)(d,{icon:(0,Y.jsx)(Ft.default,{color:`error`}),severity:`error`,sx:{p:0,py:`1px`,pl:2,alignItems:`center`},children:a}),[a]);return e?(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(Mt,{file:e,onDelete:c,onDownload:r?n:void 0}),l]}):(0,Y.jsxs)(y,{sx:{display:`flex`,flexDirection:`column`,gap:1},children:[(0,Y.jsx)(V,{onDrop:s,acceptableFileTypes:i,children:(0,Y.jsxs)(y,{sx:{display:`flex`,alignItems:`center`,justifyContent:`center`,backgroundColor:`rgb(242, 243, 245)`,boxSizing:`border-box`,borderRadius:`10px`,width:1,height:`44px`},children:[(0,Y.jsx)(lt,{sx:{color:`#626D82`,mr:`8px`}}),(0,Y.jsx)(m,{variant:`subtitle2`,fontSize:13,children:`Drop ${Ie(i)} file here to attach or`}),(0,Y.jsx)(_t,{title:`browse`,onUpload:o,buttonSxProp:{p:0,ml:.5,minWidth:`auto`,height:1,display:`flex`},"data-testid":`BrowseButton`,acceptableFileTypes:i})]})}),l]})}),It.__docgenInfo={description:``,methods:[],displayName:`FileUploadField`,props:{uploadedFile:{required:!0,tsType:{name:`union`,raw:`File | undefined`,elements:[{name:`File`},{name:`undefined`}]},description:``},setUploadedFile:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(file: File | undefined) => void`,signature:{arguments:[{type:{name:`union`,raw:`File | undefined`,elements:[{name:`File`},{name:`undefined`}]},name:`file`}],return:{name:`void`}}},description:``},onDownload:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},downloadAvailable:{required:!0,tsType:{name:`boolean`},description:``},acceptableExtensions:{required:!0,tsType:{name:`Array`,elements:[{name:`union`,raw:`| typeof YAML_FILE_EXTENSION
| typeof YML_FILE_EXTENSION
| typeof JSON_FILE_EXTENSION
| typeof MD_FILE_EXTENSION
| typeof HTML_FILE_EXTENSION
| typeof GRAPHQL_FILE_EXTENSION
| typeof GQL_FILE_EXTENSION
| typeof PROTO_FILE_EXTENSION
| typeof CSV_FILE_EXTENSION
| typeof SQL_FILE_EXTENSION
| typeof DDL_FILE_EXTENSION`,elements:[{name:`YAML_FILE_EXTENSION`},{name:`YML_FILE_EXTENSION`},{name:`JSON_FILE_EXTENSION`},{name:`MD_FILE_EXTENSION`},{name:`HTML_FILE_EXTENSION`},{name:`GRAPHQL_FILE_EXTENSION`},{name:`GQL_FILE_EXTENSION`},{name:`PROTO_FILE_EXTENSION`},{name:`CSV_FILE_EXTENSION`},{name:`SQL_FILE_EXTENSION`},{name:`DDL_FILE_EXTENSION`}]}],raw:`FileExtension[]`},description:``},errorMessage:{required:!1,tsType:{name:`string`},description:``}}}})))()}function Rt(e){return!!e}function X(e){return(t,n,r)=>{r===`input`&&e(t,n)}}function zt(e){return()=>{e?.(``)}}var Z,Bt,Q,Vt,Ht,Ut,Wt,Gt;function Kt(){return(Kt=e((()=>{r(),Z=r(),j(),te(),v(),ne(),c(),x(),b(),ae(),ce(),ue(),g(),fe(),p(),Bt=t(St(),1),D(),Ne(),qe(),I(),ht(),Ae(),L(),ot(),G(),At(),H(),N(),Ve(),F(),O(),Lt(),we(),Ge(),Fe(),Q=s(),Vt=r(),Ht=(0,Z.memo)(e=>{let{open:t,setOpen:n,onSubmit:r,control:i,setValue:a,formState:o,selectedWorkspace:s,workspaces:c,areWorkspacesLoading:u,onSetWorkspace:d,onSetTargetPackage:ee,onSetTargetVersion:f,onSetTargetStatus:p,onSetTargetLabels:te,onWorkspacesFilter:g,arePackagesLoading:v,areVersionsLoading:ne,onVersionsFilter:b,onPackagesFilter:x,packages:ae,packagesTitle:ce,versions:ue,previousVersionsPackageKey:fe,previousVersions:me,getVersionLabels:he,packagePermissions:ge,releaseVersionPattern:_e,isPublishing:ve,extraValidationMassage:ye,setSelectedPreviousVersion:be,title:Se,submitButtonTittle:Ce,descriptorVersionFieldTitle:we,descriptorFileFieldTitle:Te,hideCSVRelatedFields:De=!0,hideDescriptorField:S,hideDescriptorVersionField:C,hideSaveMessageField:w,hidePreviousVersionField:T,hideCopyPackageFields:E,publishButtonDisabled:Oe,publishFieldsDisabled:ke,currentPackageKey:Ae}=e,{errors:D}=o,Ne=A({control:i,name:`workspace`}),Fe=A({control:i,name:`package`}),O=A({control:i,name:`status`}),Ie=A({control:i,name:`apiType`}),k=A({control:i,name:`previousVersion`}),Le=A({control:i,name:`descriptorFile`}),Re=O===Xe,j=(0,Z.useCallback)((e,t)=>g?.(t),[g]),ze=(0,Z.useCallback)((e,t)=>x?.(t),[x]),Be=(0,Z.useCallback)((e,t)=>{f?.(t),b?.(t)},[b,f]),Ve=(0,Z.useCallback)((e,t)=>te?.(t),[te]),Ge=(0,Z.useCallback)((e,t)=>p?.(t),[p]),[qe,N]=(0,Z.useState)(!1),F=Ze(O),nt=(0,Z.useCallback)(e=>e===`No previous release version`?F.noPreviousOptionLabel:st(e).versionKey,[F]),it=(0,Z.useMemo)(()=>$e(O),[O]),[I,ot]=(0,Z.useState)(``),L=(0,Z.useMemo)(()=>l(ot,500),[]),{versions:ct,areVersionsLoading:ut}=wt({packageKey:fe,status:it,textFilter:I,enabled:!T&&me===void 0&&!!fe}),R=(0,Z.useMemo)(()=>at(me??ct),[me,ct]),z=(0,Z.useMemo)(()=>new Map(R.map(({key:e,status:t})=>[e,t])),[R]),[B,V]=(0,Z.useState)();(0,Z.useEffect)(()=>{if(!k||k===`No previous release version`){V(void 0);return}let e=z.get(k);if(e){V({version:k,status:e});return}V(e=>e?.version===k?e:void 0)},[k,z]);let H=(0,Z.useCallback)(e=>z.get(e)??(e===B?.version?B.status:void 0),[z,B]),ht=(0,Z.useMemo)(()=>{let e=R.map(({key:e})=>e),t=k&&k!==`No previous release version`&&!e.includes(k);return[et,...t?[k]:[],...e]},[R,k]),U=(0,Z.useMemo)(()=>{if(!k||k===`No previous release version`)return!1;let e=H(k);return e?!Qe(O,e):!1},[k,H,O]),_t=(0,Z.useMemo)(()=>l(j,500),[j]),vt=(0,Z.useMemo)(()=>l(ze,500),[ze]),yt=(0,Z.useMemo)(()=>l(Be,500),[Be]),[bt,xt]=(0,Z.useState)(null),[St,W]=(0,Z.useState)(!1),G=(0,Z.useCallback)(e=>{xt(e?.target?.result?String(e.target.result):null),W(!1)},[]);(0,Z.useEffect)(()=>{s?.key&&a(`workspace`,s)},[s,s?.key,a]),(0,Z.useEffect)(()=>{if(!Le)return;let e=new FileReader;e.onload=G,e.onerror=G,W(!0),e.readAsText(Le)},[Le,G]);let Tt=(0,Z.useMemo)(()=>!w||!C||!S,[S,C,w]),K=(0,Z.useMemo)(()=>ke||!E&&!Fe||!De&&!Ne,[ke,E,Fe,De,Ne]);return(0,Q.jsxs)(Pe,{open:t,onClose:()=>n(!1),onSubmit:r,children:[(0,Q.jsx)(se,{"data-testid":`DialogTitle`,children:Se??`Publish`}),(0,Q.jsxs)(ie,{sx:{width:440},children:[!w&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(m,{variant:`button`,children:`Save`}),(0,Q.jsx)(M,{name:`message`,control:i,render:({field:e})=>(0,Q.jsx)(_,{...e,multiline:!0,required:!0,autoComplete:`on`,rows:`4`,type:`text`,label:`Message`,"data-testid":`MessageTextField`})}),(0,Q.jsx)(m,{variant:`button`,children:`Publish`})]}),!C&&(0,Q.jsx)(M,{name:`descriptorVersion`,control:i,rules:{validate:{restrictedSymbols:e=>ft(e??``)}},render:({field:e})=>(0,Q.jsx)(_,{...e,value:e.value??``,required:!0,label:we??`Descriptor Version`,error:!!D.descriptorVersion,onChange:e=>a(`descriptorVersion`,e.target.value??``),"data-testid":`DescriptorVersionTextField`})}),!S&&(0,Q.jsx)(M,{name:`descriptorFile`,control:i,rules:{validate:{correctUpload:()=>Rt(bt)}},render:({field:e})=>(0,Q.jsxs)(y,{component:`label`,htmlFor:`contained-button-file`,children:[(0,Q.jsx)(y,{component:`input`,id:`contained-button-file`,display:`none`,multiple:!0,type:`file`,onChange:({target:{files:e}})=>{a(`descriptorFile`,e?.[0]??null)}}),(0,Q.jsx)(_,{...e,sx:{label:{height:`100%`,width:`100%`}},value:e.value?.name??``,label:Te??`Descriptor File`,error:!!D.descriptorFile,helperText:D.descriptorFile?.message,required:!0,InputProps:{endAdornment:(0,Q.jsxs)(y,{display:`flex`,flexDirection:`row`,sx:{cursor:`pointer`},children:[e.value?(0,Q.jsx)(je,{}):(0,Q.jsx)(lt,{fontSize:`small`,sx:{color:`#353C4E`}}),!!D.descriptorFile&&(0,Q.jsx)(Bt.default,{color:`error`})]}),inputProps:{readOnly:!0}},"data-testid":`DescriptorFileTextField`})]})}),Tt&&(0,Q.jsx)(le,{sx:{mx:0,mt:1,mb:.5},orientation:`horizontal`}),!De&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(y,{gap:.5,alignItems:`center`,pb:1,children:(0,Q.jsx)(M,{name:`apiType`,control:i,rules:{required:!0},render:({field:{value:e,onChange:t}})=>(0,Q.jsx)(h,{value:e??We,options:Ke,isOptionEqualToValue:(e,t)=>e===t,renderOption:(e,t)=>(0,Vt.createElement)(de,{...e,key:t,"data-testid":`Option-${t}`},Ue[t]),getOptionLabel:e=>Ue[e],onChange:(e,n)=>{t(n)},renderInput:e=>(0,Q.jsx)(_,{required:!0,...e,label:`API type`}),"data-testid":`ApiTypeAutocomplete`})})}),(0,Q.jsxs)(y,{display:`flex`,gap:.5,alignItems:`center`,pb:1,children:[(0,Q.jsxs)(y,{sx:{lineHeight:1},children:[(0,Q.jsx)(m,{variant:`button`,component:`span`,children:`Dashboard Version Config`}),(0,Q.jsx)(m,{variant:`button`,component:`span`,color:`#FF5260`,children:`*`})]}),(0,Q.jsx)(pe,{disableHoverListener:!1,placement:`right`,title:Ie===`rest`?Ut:Wt,PopperProps:{sx:{".MuiTooltip-tooltip":{maxWidth:`600px`}}},children:(0,Q.jsx)(Ye,{fontSize:`extra-small`})})]}),(0,Q.jsx)(M,{name:`file`,rules:{required:`Please upload a file`,validate:{checkFileType:e=>mt(e,[`.csv`])}},control:i,render:({field:{value:e,onChange:t}})=>(0,Q.jsx)(It,{errorMessage:D.file?.message,uploadedFile:e,setUploadedFile:e=>t(e),downloadAvailable:!1,acceptableExtensions:[`.csv`]})}),(0,Q.jsxs)(y,{display:`flex`,gap:.5,alignItems:`center`,pt:2,children:[(0,Q.jsx)(m,{variant:`button`,children:`Package Search Scope for Dashboard Version`}),(0,Q.jsx)(pe,{disableHoverListener:!1,placement:`right`,title:Gt,PopperProps:{sx:{".MuiTooltip-tooltip":{maxWidth:`600px`}}},children:(0,Q.jsx)(Ye,{fontSize:`extra-small`})})]}),(0,Q.jsx)(M,{name:`workspace`,control:i,render:({field:{value:e}})=>(0,Q.jsx)(h,{value:e,options:c??[],loading:u,isOptionEqualToValue:(e,t)=>e.key===t.key,getOptionLabel:e=>e?.name??``,renderOption:(e,{key:t,name:n})=>(0,Q.jsx)(P,{props:e,title:n,subtitle:t},t),onChange:(e,t)=>{a(`workspace`,t??null),a(`package`,null),d?.(t)},onInputChange:X(_t),onClose:zt(g),renderInput:e=>(0,Q.jsx)(_,{required:!0,...e,label:`Workspace`}),"data-testid":`WorkspaceAutocomplete`})}),(0,Q.jsx)(y,{sx:{lineHeight:1},pt:2,children:(0,Q.jsx)(m,{variant:`button`,children:`Publish Info`})})]}),!E&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(m,{sx:{mb:1},variant:`body2`,children:[`Target `,ce]}),(0,Q.jsx)(M,{name:`workspace`,control:i,render:({field:{value:e}})=>(0,Q.jsx)(h,{value:e,options:c??[],loading:u,isOptionEqualToValue:(e,t)=>e.key===t.key,getOptionLabel:e=>e?.name??``,renderOption:(e,{key:t,name:n})=>(0,Q.jsx)(P,{props:e,title:n,subtitle:t},t),onChange:(e,t)=>{a(`workspace`,t??null),a(`package`,null),d?.(t)},onClose:zt(g),onInputChange:X(_t),renderInput:e=>(0,Q.jsx)(_,{required:!0,...e,label:`Workspace`}),"data-testid":`WorkspaceAutocomplete`})}),(0,Q.jsx)(M,{name:`package`,control:i,render:({field:{value:e}})=>(0,Q.jsx)(h,{value:e,disabled:!Ne,isOptionEqualToValue:(e,t)=>e.key===t.key,options:ae??[],loading:v,filterOptions:He,getOptionLabel:e=>e?.name??``,renderOption:(e,{key:t,name:n})=>(0,Q.jsx)(P,{props:e,title:n,subtitle:t},t),onInputChange:X(vt),renderInput:e=>(0,Q.jsx)(_,{...e,required:!0,label:ce}),onChange:(e,t)=>{a(`package`,t),ee?.(t),k!==`No previous release version`&&a(`previousVersion`,`No previous release version`),N(!1)},onClose:zt(x),"data-testid":`PackageAutocomplete`})}),(0,Q.jsx)(m,{sx:{mb:1,mt:2},variant:`body2`,children:`Target Version Info`})]}),(0,Q.jsx)(M,{name:`version`,control:i,rules:{validate:{checkSpaces:e=>!Re||!_e||gt(e,_e),restrictedSymbols:ft,notEqualToPrevious:e=>pt(e,st(k).versionKey)}},render:({field:e})=>(0,Q.jsx)(h,{freeSolo:!0,disabled:!e||!he||K,value:e.value||``,options:ue??[],loading:ne,renderOption:(e,t)=>(0,Vt.createElement)(de,{...e,key:t},t),onInputChange:X(yt),filterOptions:He,renderInput:t=>(0,Q.jsx)(_,{...e,...t,required:!0,label:`Version`,error:!!D.version}),onChange:(e,t)=>{a(`version`,t??``),f?.(t??``)},onClose:zt(b),"data-testid":`VersionAutocomplete`})}),(0,Q.jsx)(M,{name:`status`,control:i,render:({field:{value:e}})=>(0,Q.jsx)(h,{disableClearable:!0,value:e??null,options:tt,getOptionDisabled:e=>!ge.includes(rt[e]),disabled:K,renderOption:(e,t)=>(0,Vt.createElement)(de,{...e,key:t,"data-testid":`Option-${t}`},(0,Q.jsx)(Je,{value:t})),onChange:(e,t)=>{Ge(e,t||`draft`),a(`status`,t)},renderInput:e=>(0,Q.jsx)(_,{...e,label:`Status`,required:!0,InputProps:{...e.InputProps,sx:{"& .MuiInputBase-input":{color:`transparent`,caretColor:`transparent`,"::selection":{background:`transparent`,color:`transparent`}},"& .Mui-disabled":{WebkitTextFillColor:`transparent`}},startAdornment:O?(0,Q.jsx)(Je,{sx:{height:16,mb:1},value:O}):null}}),"data-testid":`StatusAutocomplete`})}),(0,Q.jsx)(M,{name:`labels`,control:i,render:({field:e})=>(0,Q.jsx)(dt,{disabled:K,onChange:(e,t)=>{Ve(e,t),a(`labels`,t??[])},value:e.value})}),!T&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(le,{sx:{mx:0,mt:1,mb:.5},orientation:`horizontal`}),(0,Q.jsx)(M,{name:`previousVersion`,control:i,render:({field:e})=>(0,Q.jsx)(h,{disabled:K,value:e.value??null,options:ht,loading:ut,filterOptions:He,onInputChange:X((e,t)=>L(t)),onClose:()=>L(``),getOptionLabel:nt,isOptionEqualToValue:(e,t)=>e===st(t).versionKey,renderOption:(e,t)=>(0,Q.jsx)(P,{props:e,title:nt(t),chipValue:H(t),chipVariant:`filled`,"data-testid":`Option-${t}`},t),renderInput:e=>{let t=k?H(k):void 0;return(0,Q.jsx)(_,{...e,required:!0,label:F.fieldLabel,error:U,helperText:U?`A release version must have a release previous version`:ye,InputProps:{...e.InputProps,endAdornment:(0,Q.jsxs)(Q.Fragment,{children:[t&&(0,Q.jsx)(Je,{sx:{mr:.5,height:`18px`},value:t}),e.InputProps.endAdornment]})}})},onChange:(e,t)=>{a(`previousVersion`,t??`No previous release version`),be?.(t??`No previous release version`),(!t||t===`No previous release version`)&&N(!1)},"data-testid":`PreviousReleaseVersionAutocomplete`})})]}),D.version?.message&&(0,Q.jsx)(y,{pt:2,children:(0,Q.jsx)(Ct,{children:D.version?.message})}),(0,Q.jsx)(xe,{versionKey:k===`No previous release version`?void 0:k,packageKey:Fe?.key||Ae,type:Ee,onWarningTextChange:e=>N(!!e)})]}),(0,Q.jsxs)(oe,{children:[(0,Q.jsx)(Me,{variant:`contained`,type:`submit`,loading:ve,disabled:St||Oe||ke||qe||U,"data-testid":Ce?`${Ce}Button`:`PublishButton`,children:Ce??`Publish`}),(0,Q.jsx)(re,{variant:`outlined`,onClick:()=>n(!1),"data-testid":`CancelButton`,children:`Close`})]})]})}),Ut=`CSV file must have the following information: "serviceName" and "serviceVersion". Published dashboard version will include package release versions (from selected workspace) for specified services. Also, "method" and "path" of REST API operations for services should be defined in the file. In this case, the system will create operations group with the operations for specified method and path.`,Wt=`CSV file must have the following information: "serviceName" and "serviceVersion". Published dashboard version will include package release versions (from selected workspace) for specified services. Also, "type" and "method" of GraphQL operations for services should be defined in the file. In this case, the system will create operations group with the operations for specified type and method.`,Gt=`The workspace in which package versions for services from the CSV configuration will be searched. The package versions found in this workspace will be included into the dashboard version.`,Ht.__docgenInfo={description:``,methods:[],displayName:`VersionDialogForm`,props:{open:{required:!0,tsType:{name:`boolean`},description:``},setOpen:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`value`}],return:{name:`void`}}},description:``},onSubmit:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},control:{required:!0,tsType:{name:`Control`,elements:[{name:`T`}],raw:`Control<T>`},description:``},setValue:{required:!0,tsType:{name:`UseFormSetValue`,elements:[{name:`T`}],raw:`UseFormSetValue<T>`},description:``},formState:{required:!0,tsType:{name:`FormState`,elements:[{name:`T`}],raw:`FormState<T>`},description:``},packagePermissions:{required:!0,tsType:{name:`ReadonlyArray`,elements:[{name:`union`,raw:`| typeof READ_PERMISSION
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
}>`}],raw:`PackageVersion[]`}],raw:`Readonly<PackageVersion[]>`},description:``},getVersionLabels:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(version: Key) => string[]`,signature:{arguments:[{type:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`},name:`version`}],return:{name:`Array`,elements:[{name:`string`}],raw:`string[]`}}},description:``},isPublishing:{required:!1,tsType:{name:`boolean`},description:``},extraValidationMassage:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},setSelectedPreviousVersion:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: Key) => void`,signature:{arguments:[{type:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`},name:`value`}],return:{name:`void`}}},description:``},title:{required:!1,tsType:{name:`string`},description:``},submitButtonTittle:{required:!1,tsType:{name:`string`},description:``},descriptorVersionFieldTitle:{required:!1,tsType:{name:`string`},description:``},descriptorFileFieldTitle:{required:!1,tsType:{name:`string`},description:``},hideCSVRelatedFields:{required:!1,tsType:{name:`boolean`},description:``},hideDescriptorField:{required:!1,tsType:{name:`boolean`},description:``},hideDescriptorVersionField:{required:!1,tsType:{name:`boolean`},description:``},hideSaveMessageField:{required:!1,tsType:{name:`boolean`},description:``},hideCopyPackageFields:{required:!1,tsType:{name:`boolean`},description:``},hidePreviousVersionField:{required:!1,tsType:{name:`boolean`},description:``},publishButtonDisabled:{required:!1,tsType:{name:`boolean`},description:``},publishFieldsDisabled:{required:!1,tsType:{name:`boolean`},description:``},currentPackageKey:{required:!1,tsType:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`},description:``}}}})))()}var qt,Jt,Yt,Xt,$,Zt;function Qt(){return(Qt=e((()=>{qt=t(r(),1),j(),I(),Kt(),Jt=s(),Yt={component:Ht},Xt=e=>{let t=(0,qt.useMemo)(()=>({version:``,status:it,labels:[],descriptorFile:null,previousVersion:et}),[]),{control:n,setValue:r,formState:i}=ze({defaultValues:t});return(0,Jt.jsx)(Ht,{...e,control:n,setValue:r,formState:i})},$={name:`Default`,args:{open:!0,setOpen:()=>null,onSubmit:()=>null,versions:[],previousVersions:[],getVersionLabels:()=>[],packagePermissions:[],isPublishing:!1,hideDescriptorField:!0,hideDescriptorVersionField:!0},render:Xt},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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