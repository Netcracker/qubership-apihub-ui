import{j as a}from"./createTheme-0ee58ceb.js";import{r as l}from"./index-37ba2b57.js";import{E as N,t as u,o as f,a as R,g as O,b as T}from"./graphql-samples-9a55379b.js";import{B as x}from"./Box-b4966c9a.js";import{_ as b}from"./iframe-4435dacb.js";import{L as M}from"./LoadingIndicator-fa43b63c.js";import{O as _,Y as E,G as w,a as G}from"./files-f85d8e32.js";import{f as C}from"./decorators-8b7a0c6a.js";import{t as v}from"./strings-8f296fda.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-dd1a14a8.js";import"./_commonjsHelpers-de833af9.js";import"./clsx.m-bc31e435.js";import"./extendSxProp-083dfeeb.js";import"../sb-preview/runtime.js";import"./CircularProgress-d188cfe7.js";import"./useThemeProps-af595d22.js";import"./styled-63e5ab44.js";import"./emotion-react.browser.esm-e1f4c3b5.js";import"./hoist-non-react-statics.cjs-b1c88361.js";import"./apihub-builder.es-d8025437.js";import"./_commonjs-dynamic-modules-302442b1.js";const U=l.lazy(()=>b(()=>import("./MonacoDiffEditorElement-b133b66f.js"),["./MonacoDiffEditorElement-b133b66f.js","./createTheme-0ee58ceb.js","./index-37ba2b57.js","./_commonjsHelpers-de833af9.js","./emotion-use-insertion-effect-with-fallbacks.browser.esm-dd1a14a8.js","./toggleHighContrast-0e8c860a.js","./iframe-4435dacb.js","./toggleHighContrast-3c12d0de.css","./graphql-samples-9a55379b.js","./files-f85d8e32.js","./apihub-builder.es-d8025437.js","./_commonjs-dynamic-modules-302442b1.js","./strings-8f296fda.js","./useEffectOnce-12abbac4.js"],import.meta.url)),d=l.memo(({before:e,after:i,type:s,language:p,selectedUri:m})=>a(l.Suspense,{fallback:a(M,{}),children:a(U,{before:e,after:i,type:s,language:p,selectedUri:m})}));try{d.displayName="MonacoDiffEditor",d.__docgenInfo={description:"",displayName:"MonacoDiffEditor",props:{before:{defaultValue:null,description:"",name:"before",required:!0,type:{name:"string"}},after:{defaultValue:null,description:"",name:"after",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"graphql"'},{value:'"openapi-3-1"'},{value:'"openapi-3-0"'},{value:'"openapi-2-0"'},{value:'"openapi"'},{value:'"asyncapi-2"'},{value:'"json-schema"'},{value:'"markdown"'},{value:'"unknown"'},{value:'"graphql-schema"'},{value:'"graphapi"'},{value:'"introspection"'},{value:'"protobuf-3"'}]}},language:{defaultValue:null,description:"",name:"language",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"graphql"'},{value:'"markdown"'},{value:'"yaml"'},{value:'"json"'},{value:'"proto"'}]}},selectedUri:{defaultValue:null,description:"",name:"selectedUri",required:!1,type:{name:"string"}}}}}catch{}const c=l.memo(({beforeValue:e,afterValue:i,type:s,extension:p,selectedUri:m,sx:q})=>a(x,{height:"100%",minWidth:0,sx:q,"data-testid":"RawDiffView",children:a(d,{before:e,after:i,type:s,language:N[p],selectedUri:m})}));try{c.displayName="RawSpecDiffView",c.__docgenInfo={description:"",displayName:"RawSpecDiffView",props:{beforeValue:{defaultValue:null,description:"",name:"beforeValue",required:!0,type:{name:"string"}},afterValue:{defaultValue:null,description:"",name:"afterValue",required:!0,type:{name:"string"}},extension:{defaultValue:null,description:"",name:"extension",required:!0,type:{name:"enum",value:[{value:'".yaml"'},{value:'".yml"'},{value:'".json"'},{value:'".md"'},{value:'".html"'},{value:'".graphql"'},{value:'".gql"'},{value:'".proto"'},{value:'".csv"'}]}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"graphql"'},{value:'"openapi-3-1"'},{value:'"openapi-3-0"'},{value:'"openapi-2-0"'},{value:'"openapi"'},{value:'"asyncapi-2"'},{value:'"json-schema"'},{value:'"markdown"'},{value:'"unknown"'},{value:'"graphql-schema"'},{value:'"graphapi"'},{value:'"introspection"'},{value:'"protobuf-3"'}]}},selectedUri:{defaultValue:null,description:"",name:"selectedUri",required:!1,type:{name:"string"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps<{}>"}}}}}catch{}const ce={component:c,parameters:{layout:"fullscreen"},decorators:[C]},X=u(f),j=u(R),r={name:"YAML",args:{beforeValue:X??void 0,afterValue:j??void 0,type:_,extension:E}},t={name:"GraphQL",args:{beforeValue:v(O),afterValue:v(T),type:w,extension:G}},k=u(f),o={name:"Fully Added",args:{beforeValue:"",afterValue:k??void 0,type:_,extension:E}},B=u(f),n={name:"Fully Removed",args:{beforeValue:B??void 0,afterValue:"",type:_,extension:E}};var y,g,S;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'YAML',
  args: {
    beforeValue: YAML_DIFFS_BEFORE ?? undefined,
    afterValue: YAML_DIFFS_AFTER ?? undefined,
    type: OPENAPI_3_0_SPEC_TYPE,
    extension: YAML_FILE_EXTENSION
  }
}`,...(S=(g=r.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var V,F,L;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'GraphQL',
  args: {
    beforeValue: toFormattedJsonString(graphqlSample),
    afterValue: toFormattedJsonString(graphqlChangedSample),
    type: GRAPHQL_SPEC_TYPE,
    extension: GRAPHQL_FILE_EXTENSION
  }
}`,...(L=(F=t.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var h,A,P;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Fully Added',
  args: {
    beforeValue: '',
    afterValue: FULLY_ADDED_AFTER ?? undefined,
    type: OPENAPI_3_0_SPEC_TYPE,
    extension: YAML_FILE_EXTENSION
  }
}`,...(P=(A=o.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var D,I,Y;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Fully Removed',
  args: {
    beforeValue: FULLY_REMOVED_BEFORE ?? undefined,
    afterValue: '',
    type: OPENAPI_3_0_SPEC_TYPE,
    extension: YAML_FILE_EXTENSION
  }
}`,...(Y=(I=n.parameters)==null?void 0:I.docs)==null?void 0:Y.source}}};const fe=["YamlDiffsStory","GraphqlDiffsStory","FullyAddedStory","FullyRemovedStory"];export{o as FullyAddedStory,n as FullyRemovedStory,t as GraphqlDiffsStory,r as YamlDiffsStory,fe as __namedExportsOrder,ce as default};
//# sourceMappingURL=RawSpecDiffView.stories-c2c77935.js.map
