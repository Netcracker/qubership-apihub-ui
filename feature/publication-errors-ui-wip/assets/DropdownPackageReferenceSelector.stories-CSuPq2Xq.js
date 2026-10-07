import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./react---BZM-86.js";import{o as n,r}from"./clsx.m-DvhsLdH4.js";import{t as i}from"./jsx-runtime--WVWf14b.js";import{n as a,t as o}from"./Box-CzqjOcoU.js";import{n as s,t as c}from"./Button-DrgAR6qf.js";import{n as l,t as u}from"./List-Eid61V66.js";import{n as d,t as f}from"./ListItem-DRRcrCyH.js";import{n as p,t as m}from"./ListItemButton-CUTds10q.js";import{n as ee,t as h}from"./ListItemText-Dqyi4DPp.js";import{c as g,l as _,o as v,s as y}from"./VersionErrorIndicator-DEcHxOMS.js";import{n as b,r as x}from"./decorators-Cc_W5JZO.js";import{n as S,t as C}from"./SearchBar-D56blJFG.js";import{n as w,t as T}from"./KeyboardArrowDownOutlined-BRZ56ByY.js";import{r as E}from"./arrays-Bfo2Y4Sy.js";import{n as D,r as te}from"./MenuButton-cSyol36r.js";import{i as ne,t as re}from"./versions-DKjHwp6C.js";import{a as O,i as k,n as A,r as j}from"./Placeholder-Dh4W-VIJ.js";import{n as M,t as N}from"./LoadingIndicator-Cd8-HESU.js";import{i as P,n as F,r as I,t as L}from"./reference-samples-BNNqZQPo.js";function R(e,t){return(e.key===void 0?void 0:t?.get(e.key))??e}var z,B,V,H,U,W,G;function K(){return(K=e((()=>{z=t(),a(),s(),l(),d(),p(),ee(),r(),w(),te(),O(),S(),ne(),g(),y(),M(),P(),B=i(),V=(0,z.memo)(({selectedPackage:e,references:t,problemReferences:n,loading:r,searchValue:i,onSearch:a,defaultPackageKey:s,onSearchParam:l})=>{let[d,p]=(0,z.useState)(),m=_();return(0,B.jsx)(o,{display:`flex`,alignItems:`center`,gap:2,overflow:`hidden`,"data-testid":`PackageSelector`,children:(0,B.jsxs)(c,{sx:{minWidth:4,maxWidth:`200px`,height:20,p:0,textOverflow:`ellipsis`,boxShadow:`none`,"&:hover":{boxShadow:`none`},"& .MuiButton-endIcon":{flexShrink:0,ml:.5}},variant:`text`,onClick:({currentTarget:e})=>p(e),endIcon:(0,B.jsx)(T,{}),children:[(0,B.jsx)(`span`,{style:{textOverflow:`ellipsis`,whiteSpace:`nowrap`,overflow:`hidden`,minWidth:0},children:`${e?.name??``}`}),e&&(0,B.jsx)(H,{reference:R(e,n),tabIndex:-1}),(0,B.jsx)(D,{anchorEl:d,open:!!d,onClick:e=>e.stopPropagation(),onClose:()=>{p(void 0),a(``)},children:(0,B.jsxs)(o,{sx:{p:2},overflow:`hidden`,display:`grid`,gap:1,gridTemplateAreas:`
              'searchbar'
              'content'
            `,children:[(0,B.jsx)(o,{gridArea:`searchbar`,overflow:`hidden`,children:(0,B.jsx)(C,{value:i,onValueChange:a,"data-testid":`SearchPackage`})}),(0,B.jsx)(o,{gridArea:`content`,children:r?(0,B.jsx)(N,{}):(0,B.jsx)(k,{invisible:E(t),area:A,message:i?j:`No package references`,children:(0,B.jsx)(u,{children:t.map(e=>{let t=R(e,n),r=v(t,m);return(0,B.jsx)(f,{sx:{p:0},children:(0,B.jsx)(U,{selected:e.key===s,onClick:()=>l(e.key),children:(0,B.jsxs)(W,{children:[(0,B.jsx)(h,{primary:e.name,secondary:r?re(t):void 0}),r&&(0,B.jsx)(G,{reference:t,fontSize:`extra-small`,showTooltip:!1})]})})},e.key)})})})})]})})]})})}),H=n(I)(({theme:e})=>({marginLeft:e.spacing(.5)})),U=n(m)(({theme:e})=>({justifyContent:`center`,height:`auto`,minHeight:e.spacing(4.5),paddingTop:e.spacing(.5),paddingBottom:e.spacing(.5)})),W=n(o)(({theme:e})=>({display:`flex`,width:`100%`,gap:e.spacing(1)})),G=n(I)({alignSelf:`flex-end`}),V.__docgenInfo={description:``,methods:[],displayName:`DropdownPackageReferenceSelector`,props:{searchValue:{required:!0,tsType:{name:`string`},description:``},loading:{required:!0,tsType:{name:`boolean`},description:``},references:{required:!0,tsType:{name:`Array`,elements:[{name:`Partial`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  kind: ReferenceKind
  name: string
  version: Key
  status: VersionStatus
  deletedAt: string
  deletedBy: string
  parentPackages: ReadonlyArray<Key>
  latestRevision: boolean
  hasErrors: boolean
  changelogHasErrors: boolean
  apiProcessorVersion: string
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`kind`,value:{name:`union`,raw:`| typeof PACKAGE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`PACKAGE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`version`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`status`,value:{name:`union`,raw:`| typeof DRAFT_VERSION_STATUS
| typeof RELEASE_VERSION_STATUS`,elements:[{name:`DRAFT_VERSION_STATUS`},{name:`RELEASE_VERSION_STATUS`}],required:!0}},{key:`deletedAt`,value:{name:`string`,required:!0}},{key:`deletedBy`,value:{name:`string`,required:!0}},{key:`parentPackages`,value:{name:`ReadonlyArray`,elements:[{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}],raw:`ReadonlyArray<Key>`,required:!0}},{key:`latestRevision`,value:{name:`boolean`,required:!0}},{key:`hasErrors`,value:{name:`boolean`,required:!0}},{key:`changelogHasErrors`,value:{name:`boolean`,required:!0}},{key:`apiProcessorVersion`,value:{name:`string`,required:!0}}]}}],raw:`Readonly<{
  key: Key
  kind: ReferenceKind
  name: string
  version: Key
  status: VersionStatus
  deletedAt: string
  deletedBy: string
  parentPackages: ReadonlyArray<Key>
  latestRevision: boolean
  hasErrors: boolean
  changelogHasErrors: boolean
  apiProcessorVersion: string
}>`}],raw:`Partial<Readonly<{
  key: Key
  kind: ReferenceKind
  name: string
  version: Key
  status: VersionStatus
  deletedAt: string
  deletedBy: string
  parentPackages: ReadonlyArray<Key>
  latestRevision: boolean
  hasErrors: boolean
  changelogHasErrors: boolean
  apiProcessorVersion: string
}>>`}],raw:`PackageReference[]`},description:``},problemReferences:{required:!1,tsType:{name:`ReadonlyMap`,elements:[{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0},{name:`Partial`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  kind: ReferenceKind
  name: string
  version: Key
  status: VersionStatus
  deletedAt: string
  deletedBy: string
  parentPackages: ReadonlyArray<Key>
  latestRevision: boolean
  hasErrors: boolean
  changelogHasErrors: boolean
  apiProcessorVersion: string
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`kind`,value:{name:`union`,raw:`| typeof PACKAGE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`PACKAGE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`version`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`status`,value:{name:`union`,raw:`| typeof DRAFT_VERSION_STATUS
| typeof RELEASE_VERSION_STATUS`,elements:[{name:`DRAFT_VERSION_STATUS`},{name:`RELEASE_VERSION_STATUS`}],required:!0}},{key:`deletedAt`,value:{name:`string`,required:!0}},{key:`deletedBy`,value:{name:`string`,required:!0}},{key:`parentPackages`,value:{name:`ReadonlyArray`,elements:[{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}],raw:`ReadonlyArray<Key>`,required:!0}},{key:`latestRevision`,value:{name:`boolean`,required:!0}},{key:`hasErrors`,value:{name:`boolean`,required:!0}},{key:`changelogHasErrors`,value:{name:`boolean`,required:!0}},{key:`apiProcessorVersion`,value:{name:`string`,required:!0}}]}}],raw:`Readonly<{
  key: Key
  kind: ReferenceKind
  name: string
  version: Key
  status: VersionStatus
  deletedAt: string
  deletedBy: string
  parentPackages: ReadonlyArray<Key>
  latestRevision: boolean
  hasErrors: boolean
  changelogHasErrors: boolean
  apiProcessorVersion: string
}>`}],raw:`Partial<Readonly<{
  key: Key
  kind: ReferenceKind
  name: string
  version: Key
  status: VersionStatus
  deletedAt: string
  deletedBy: string
  parentPackages: ReadonlyArray<Key>
  latestRevision: boolean
  hasErrors: boolean
  changelogHasErrors: boolean
  apiProcessorVersion: string
}>>`}],raw:`ReadonlyMap<Key, PackageReference>`},description:``},onSearch:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},selectedPackage:{required:!0,tsType:{name:`union`,raw:`PackageReference | null`,elements:[{name:`Partial`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  kind: ReferenceKind
  name: string
  version: Key
  status: VersionStatus
  deletedAt: string
  deletedBy: string
  parentPackages: ReadonlyArray<Key>
  latestRevision: boolean
  hasErrors: boolean
  changelogHasErrors: boolean
  apiProcessorVersion: string
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`kind`,value:{name:`union`,raw:`| typeof PACKAGE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`PACKAGE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`version`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`status`,value:{name:`union`,raw:`| typeof DRAFT_VERSION_STATUS
| typeof RELEASE_VERSION_STATUS`,elements:[{name:`DRAFT_VERSION_STATUS`},{name:`RELEASE_VERSION_STATUS`}],required:!0}},{key:`deletedAt`,value:{name:`string`,required:!0}},{key:`deletedBy`,value:{name:`string`,required:!0}},{key:`parentPackages`,value:{name:`ReadonlyArray`,elements:[{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}],raw:`ReadonlyArray<Key>`,required:!0}},{key:`latestRevision`,value:{name:`boolean`,required:!0}},{key:`hasErrors`,value:{name:`boolean`,required:!0}},{key:`changelogHasErrors`,value:{name:`boolean`,required:!0}},{key:`apiProcessorVersion`,value:{name:`string`,required:!0}}]}}],raw:`Readonly<{
  key: Key
  kind: ReferenceKind
  name: string
  version: Key
  status: VersionStatus
  deletedAt: string
  deletedBy: string
  parentPackages: ReadonlyArray<Key>
  latestRevision: boolean
  hasErrors: boolean
  changelogHasErrors: boolean
  apiProcessorVersion: string
}>`}],raw:`Partial<Readonly<{
  key: Key
  kind: ReferenceKind
  name: string
  version: Key
  status: VersionStatus
  deletedAt: string
  deletedBy: string
  parentPackages: ReadonlyArray<Key>
  latestRevision: boolean
  hasErrors: boolean
  changelogHasErrors: boolean
  apiProcessorVersion: string
}>>`},{name:`null`}]},description:``},defaultPackageKey:{required:!0,tsType:{name:`union`,raw:`string | undefined`,elements:[{name:`string`},{name:`undefined`}]},description:``},onSearchParam:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(key: Key | undefined) => void`,signature:{arguments:[{type:{name:`union`,raw:`Key | undefined`,elements:[{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`},{name:`undefined`}]},name:`key`}],return:{name:`void`}}},description:``}}}})))()}var q,J,Y,X,Z,Q;function $(){return($=e((()=>{x(),K(),L(),q=t(),J=i(),{useArgs:Y}=__STORYBOOK_MODULE_PREVIEW_API__,X={title:`Dropdown Package Reference Selector`,component:V,args:{references:F,loading:!1},decorators:[b]},Z=e=>{let[,t]=Y(),n=(0,q.useCallback)(e=>{t({references:F.filter(t=>t?.name&&t.name.toLowerCase().includes(e.toLowerCase()))})},[t]),r=(0,q.useCallback)(e=>{e&&t({selectedPackage:F.find(t=>t?.key&&t.key.includes(e))})},[t]);return(0,J.jsx)(V,{...e,onSearch:n,onSearchParam:r})},Z.__docgenInfo={description:``,methods:[],displayName:`DefaultStory`},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`args => {
  const [, updateArgs] = useArgs();
  const onSearch = useCallback((value: string) => {
    updateArgs({
      references: references.filter(reference => reference?.name && reference.name.toLowerCase().includes(value.toLowerCase()))
    });
  }, [updateArgs]);
  const onSearchParam = useCallback((value: string | undefined) => {
    if (value) {
      updateArgs({
        selectedPackage: references.find(reference => reference?.key && reference.key.includes(value))
      });
    }
  }, [updateArgs]);
  return <DropdownPackageReferenceSelector {...args} onSearch={onSearch} onSearchParam={onSearchParam} />;
}`,...Z.parameters?.docs?.source}}},Q=[`DefaultStory`]})))()}$();export{Z as DefaultStory,Q as __namedExportsOrder,X as default};