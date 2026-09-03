import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./react---BZM-86.js";import{t as n}from"./jsx-runtime--WVWf14b.js";import{n as r,t as i}from"./Box-CzqjOcoU.js";import{n as a,t as o}from"./Button-DrgAR6qf.js";import{n as s,t as c}from"./List-Eid61V66.js";import{n as l,t as u}from"./ListItem-DRRcrCyH.js";import{n as d,t as f}from"./ListItemButton-CUTds10q.js";import{n as p,t as m}from"./ListItemText-Dqyi4DPp.js";import{n as h,r as g}from"./decorators-CsMjads7.js";import{n as _,t as v}from"./SearchBar-Cal8c8G-.js";import{n as y,t as b}from"./KeyboardArrowDownOutlined-BRZ56ByY.js";import{n as x,r as S}from"./MenuButton-cSyol36r.js";import{r as C}from"./arrays-Bfo2Y4Sy.js";import{a as w,i as T,n as E,r as D}from"./Placeholder-Dh4W-VIJ.js";import{n as O,t as k}from"./LoadingIndicator-Cd8-HESU.js";import{n as A,t as j}from"./reference-samples-UrZXuLT2.js";var M,N,P;function F(){return(F=e((()=>{M=t(),r(),a(),s(),l(),d(),p(),y(),S(),w(),_(),O(),N=n(),P=(0,M.memo)(({selectedPackage:e,references:t,loading:n,searchValue:r,onSearch:a,defaultPackageKey:s,onSearchParam:l})=>{let[d,p]=(0,M.useState)();return(0,N.jsx)(i,{display:`flex`,alignItems:`center`,gap:2,overflow:`hidden`,"data-testid":`PackageSelector`,children:(0,N.jsxs)(o,{sx:{minWidth:4,maxWidth:`200px`,height:20,p:0,textOverflow:`ellipsis`,boxShadow:`none`,"&:hover":{boxShadow:`none`},"& .MuiButton-endIcon":{flexShrink:0,ml:.5}},variant:`text`,onClick:({currentTarget:e})=>p(e),endIcon:(0,N.jsx)(b,{}),children:[(0,N.jsx)(`span`,{style:{textOverflow:`ellipsis`,whiteSpace:`nowrap`,overflow:`hidden`,minWidth:0},children:`${e?.name??``}`}),(0,N.jsx)(x,{anchorEl:d,open:!!d,onClick:e=>e.stopPropagation(),onClose:()=>p(void 0),children:(0,N.jsxs)(i,{sx:{p:2},overflow:`hidden`,display:`grid`,gap:1,gridTemplateAreas:`
              'searchbar'
              'content'
            `,children:[(0,N.jsx)(i,{gridArea:`searchbar`,overflow:`hidden`,children:(0,N.jsx)(v,{value:r,onValueChange:a,"data-testid":`SearchPackage`})}),(0,N.jsx)(i,{gridArea:`content`,children:n?(0,N.jsx)(k,{}):(0,N.jsx)(T,{invisible:C(t),area:E,message:r?D:`No package references`,children:(0,N.jsx)(c,{children:t.map(e=>(0,N.jsx)(u,{sx:{p:0},children:(0,N.jsx)(f,{sx:{height:`36px`,alignItems:`center`},selected:e.key===s,onClick:()=>l(e.key),children:(0,N.jsx)(m,{primary:e.name,primaryTypographyProps:{sx:{mt:1}}})})},e.key))})})})]})})]})})}),P.__docgenInfo={description:``,methods:[],displayName:`DropdownPackageReferenceSelector`,props:{searchValue:{required:!0,tsType:{name:`string`},description:``},loading:{required:!0,tsType:{name:`boolean`},description:``},references:{required:!0,tsType:{name:`Array`,elements:[{name:`Partial`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  kind: ReferenceKind
  name: string
  version: Key
  status: VersionStatus
  deletedAt: string
  deletedBy: string
  parentPackages: ReadonlyArray<Key>
  latestRevision: boolean
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`kind`,value:{name:`union`,raw:`| typeof PACKAGE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`PACKAGE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`version`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`status`,value:{name:`union`,raw:`| typeof DRAFT_VERSION_STATUS
| typeof RELEASE_VERSION_STATUS
| typeof ARCHIVED_VERSION_STATUS`,elements:[{name:`DRAFT_VERSION_STATUS`},{name:`RELEASE_VERSION_STATUS`},{name:`ARCHIVED_VERSION_STATUS`}],required:!0}},{key:`deletedAt`,value:{name:`string`,required:!0}},{key:`deletedBy`,value:{name:`string`,required:!0}},{key:`parentPackages`,value:{name:`ReadonlyArray`,elements:[{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}],raw:`ReadonlyArray<Key>`,required:!0}},{key:`latestRevision`,value:{name:`boolean`,required:!0}}]}}],raw:`Readonly<{
  key: Key
  kind: ReferenceKind
  name: string
  version: Key
  status: VersionStatus
  deletedAt: string
  deletedBy: string
  parentPackages: ReadonlyArray<Key>
  latestRevision: boolean
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
}>>`}],raw:`PackageReference[]`},description:``},onSearch:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},selectedPackage:{required:!0,tsType:{name:`union`,raw:`PackageReference | null`,elements:[{name:`Partial`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  key: Key
  kind: ReferenceKind
  name: string
  version: Key
  status: VersionStatus
  deletedAt: string
  deletedBy: string
  parentPackages: ReadonlyArray<Key>
  latestRevision: boolean
}`,signature:{properties:[{key:`key`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`kind`,value:{name:`union`,raw:`| typeof PACKAGE_KIND
| typeof DASHBOARD_KIND`,elements:[{name:`PACKAGE_KIND`},{name:`DASHBOARD_KIND`}],required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`version`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`status`,value:{name:`union`,raw:`| typeof DRAFT_VERSION_STATUS
| typeof RELEASE_VERSION_STATUS
| typeof ARCHIVED_VERSION_STATUS`,elements:[{name:`DRAFT_VERSION_STATUS`},{name:`RELEASE_VERSION_STATUS`},{name:`ARCHIVED_VERSION_STATUS`}],required:!0}},{key:`deletedAt`,value:{name:`string`,required:!0}},{key:`deletedBy`,value:{name:`string`,required:!0}},{key:`parentPackages`,value:{name:`ReadonlyArray`,elements:[{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}],raw:`ReadonlyArray<Key>`,required:!0}},{key:`latestRevision`,value:{name:`boolean`,required:!0}}]}}],raw:`Readonly<{
  key: Key
  kind: ReferenceKind
  name: string
  version: Key
  status: VersionStatus
  deletedAt: string
  deletedBy: string
  parentPackages: ReadonlyArray<Key>
  latestRevision: boolean
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
}>>`},{name:`null`}]},description:``},defaultPackageKey:{required:!0,tsType:{name:`union`,raw:`string | undefined`,elements:[{name:`string`},{name:`undefined`}]},description:``},onSearchParam:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(key: Key | undefined) => void`,signature:{arguments:[{type:{name:`union`,raw:`Key | undefined`,elements:[{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`},{name:`undefined`}]},name:`key`}],return:{name:`void`}}},description:``}}}})))()}var I,L,R,z,B,V;function H(){return(H=e((()=>{g(),F(),j(),I=t(),L=n(),{useArgs:R}=__STORYBOOK_MODULE_PREVIEW_API__,z={title:`Dropdown Package Reference Selector`,component:P,args:{references:A,loading:!1},decorators:[h]},B=e=>{let[,t]=R(),n=(0,I.useCallback)(e=>{t({references:A.filter(t=>t?.name&&t.name.toLowerCase().includes(e.toLowerCase()))})},[t]),r=(0,I.useCallback)(e=>{e&&t({selectedPackage:A.find(t=>t?.key&&t.key.includes(e))})},[t]);return(0,L.jsx)(P,{...e,onSearch:n,onSearchParam:r})},B.__docgenInfo={description:``,methods:[],displayName:`DefaultStory`},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`args => {
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
}`,...B.parameters?.docs?.source}}},V=[`DefaultStory`]})))()}H();export{B as DefaultStory,V as __namedExportsOrder,z as default};