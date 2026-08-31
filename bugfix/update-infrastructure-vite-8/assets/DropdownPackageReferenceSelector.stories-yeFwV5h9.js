import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-5l_iQkTl.js";import{t as r}from"./jsx-runtime-Dw8SQ1Xa.js";import{n as i,t as a}from"./Box-BoHOER5V.js";import{n as o,t as s}from"./Button-I3tvzdd9.js";import{n as c,t as l}from"./List-W7UypVkc.js";import{n as u,t as d}from"./ListItem-jX0QHtFJ.js";import{n as f,t as p}from"./ListItemButton-C7xOiF80.js";import{n as m,t as h}from"./ListItemText-Kv4KN7HT.js";import{n as g,r as _}from"./decorators-CyW_ivix.js";import{n as v,r as y}from"./MenuButton-CNdsyizU.js";import{t as b}from"./KeyboardArrowDownOutlined-CHLRSHKV.js";import{r as x}from"./arrays-Bfo2Y4Sy.js";import{a as S,i as C,n as w,r as T}from"./Placeholder-WvSSuSta.js";import{n as E,t as D}from"./SearchBar-BQSKqUQx.js";import{n as O,t as k}from"./LoadingIndicator-BXMjymVM.js";import{n as A,t as j}from"./reference-samples-UrZXuLT2.js";var M,N,P,F;function I(){return(I=e((()=>{M=n(),i(),o(),c(),u(),f(),m(),N=t(b(),1),y(),S(),E(),O(),P=r(),F=(0,M.memo)(({selectedPackage:e,references:t,loading:n,searchValue:r,onSearch:i,defaultPackageKey:o,onSearchParam:c})=>{let[u,f]=(0,M.useState)();return(0,P.jsx)(a,{display:`flex`,alignItems:`center`,gap:2,overflow:`hidden`,"data-testid":`PackageSelector`,children:(0,P.jsxs)(s,{sx:{minWidth:4,maxWidth:`200px`,height:20,p:0,textOverflow:`ellipsis`,boxShadow:`none`,"&:hover":{boxShadow:`none`},"& .MuiButton-endIcon":{flexShrink:0,ml:.5}},variant:`text`,onClick:({currentTarget:e})=>f(e),endIcon:(0,P.jsx)(N.default,{}),children:[(0,P.jsx)(`span`,{style:{textOverflow:`ellipsis`,whiteSpace:`nowrap`,overflow:`hidden`,minWidth:0},children:`${e?.name??``}`}),(0,P.jsx)(v,{anchorEl:u,open:!!u,onClick:e=>e.stopPropagation(),onClose:()=>f(void 0),children:(0,P.jsxs)(a,{sx:{p:2},overflow:`hidden`,display:`grid`,gap:1,gridTemplateAreas:`
              'searchbar'
              'content'
            `,children:[(0,P.jsx)(a,{gridArea:`searchbar`,overflow:`hidden`,children:(0,P.jsx)(D,{value:r,onValueChange:i,"data-testid":`SearchPackage`})}),(0,P.jsx)(a,{gridArea:`content`,children:n?(0,P.jsx)(k,{}):(0,P.jsx)(C,{invisible:x(t),area:w,message:r?T:`No package references`,children:(0,P.jsx)(l,{children:t.map(e=>(0,P.jsx)(d,{sx:{p:0},children:(0,P.jsx)(p,{sx:{height:`36px`,alignItems:`center`},selected:e.key===o,onClick:()=>c(e.key),children:(0,P.jsx)(h,{primary:e.name,primaryTypographyProps:{sx:{mt:1}}})})},e.key))})})})]})})]})})}),F.__docgenInfo={description:``,methods:[],displayName:`DropdownPackageReferenceSelector`,props:{searchValue:{required:!0,tsType:{name:`string`},description:``},loading:{required:!0,tsType:{name:`boolean`},description:``},references:{required:!0,tsType:{name:`Array`,elements:[{name:`Partial`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
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
}>>`},{name:`null`}]},description:``},defaultPackageKey:{required:!0,tsType:{name:`union`,raw:`string | undefined`,elements:[{name:`string`},{name:`undefined`}]},description:``},onSearchParam:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(key: Key | undefined) => void`,signature:{arguments:[{type:{name:`union`,raw:`Key | undefined`,elements:[{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`},{name:`undefined`}]},name:`key`}],return:{name:`void`}}},description:``}}}})))()}var L,R,z,B,V,H;function U(){return(U=e((()=>{_(),I(),j(),L=n(),R=r(),{useArgs:z}=__STORYBOOK_MODULE_PREVIEW_API__,B={title:`Dropdown Package Reference Selector`,component:F,args:{references:A,loading:!1},decorators:[g]},V=e=>{let[,t]=z(),n=(0,L.useCallback)(e=>{t({references:A.filter(t=>t?.name&&t.name.toLowerCase().includes(e.toLowerCase()))})},[t]),r=(0,L.useCallback)(e=>{e&&t({selectedPackage:A.find(t=>t?.key&&t.key.includes(e))})},[t]);return(0,R.jsx)(F,{...e,onSearch:n,onSearchParam:r})},V.__docgenInfo={description:``,methods:[],displayName:`DefaultStory`},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`args => {
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
}`,...V.parameters?.docs?.source}}},H=[`DefaultStory`]})))()}U();export{V as DefaultStory,H as __namedExportsOrder,B as default};