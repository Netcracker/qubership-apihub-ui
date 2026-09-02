import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./react-5l_iQkTl.js";import{t as n}from"./jsx-runtime-Dw8SQ1Xa.js";import{r}from"./editor.api-BPvd2cYP.js";import{a as i,i as a,n as o,r as s,t as c}from"./editor.main-BBwPNboE.js";import{i as l,r as u}from"./specifications-CLeF8Tss.js";import{n as d,t as f}from"./useEffectOnce-0gf0eUWW.js";import{n as p,r as m}from"./languages-BrbrT6iP.js";function h(e){let{before:t,after:n,type:i,language:a=p,selectedUri:o}=e,s=(0,_.useRef)(null),c=(0,_.useRef)();return d(()=>(r.defineTheme(`custom`,{base:`vs`,inherit:!0,rules:[],colors:{"editor.background":`#FFFFFF`}}),c.current=r.createDiffEditor(s.current,{minimap:{enabled:!0},hover:{above:!1},automaticLayout:!0,readOnly:!0,wordWrap:`on`,glyphMargin:!0,theme:`custom`}),()=>{c.current?.dispose()})),(0,_.useEffect)(()=>(c.current?.setModel({original:r.createModel(t,a),modified:r.createModel(n,a)}),()=>{c.current?.getModel()?.original?.dispose(),c.current?.getModel()?.modified?.dispose()}),[c,t,n,a,i]),(0,_.useEffect)(()=>{let e=c.current?.getModel()?.modified.getValue();if(o&&e){let t=u(e,o);if(t){let e=t?.range.start.line;g(c.current,e+1)}}},[o]),s}function g(e,t){e.revealLineNearTop(t,r.ScrollType.Smooth),e.setPosition({lineNumber:t,column:0}),e.focus()}var _;function v(){return(v=e((()=>{_=t(),c(),f(),m(),l()})))()}var y,b,x;function S(){return(S=e((()=>{i(),a(),s(),o(),y=t(),v(),b=n(),x=(0,y.memo)(({before:e,after:t,type:n,language:r,selectedUri:i})=>{let a=h({before:e,after:t,type:n,language:r,selectedUri:i});return(0,b.jsx)(`div`,{ref:a,style:{height:`100%`}})}),x.__docgenInfo={description:``,methods:[],displayName:`MonacoDiffEditorElement`,props:{before:{required:!0,tsType:{name:`string`},description:``},after:{required:!0,tsType:{name:`string`},description:``},type:{required:!0,tsType:{name:`union`,raw:`| typeof OPENAPI_3_1_SPEC_TYPE
| typeof OPENAPI_3_0_SPEC_TYPE
| typeof OPENAPI_2_0_SPEC_TYPE
| typeof OPENAPI_SPEC_TYPE
| typeof ASYNCAPI_3_SPEC_TYPE
| typeof ASYNCAPI_SPEC_TYPE
| typeof JSON_SCHEMA_SPEC_TYPE
| typeof MARKDOWN_SPEC_TYPE
| typeof UNKNOWN_SPEC_TYPE
| typeof GRAPHQL_SPEC_TYPE
| typeof GRAPHQL_SCHEMA_SPEC_TYPE
| typeof GRAPHAPI_SPEC_TYPE
| typeof GRAPHQL_INTROSPECTION_SPEC_TYPE
| typeof PROTOBUF_3_SPEC_TYPE
| McpDocumentType
| DdlDocumentType`,elements:[{name:`OPENAPI_3_1_SPEC_TYPE`},{name:`OPENAPI_3_0_SPEC_TYPE`},{name:`OPENAPI_2_0_SPEC_TYPE`},{name:`OPENAPI_SPEC_TYPE`},{name:`ASYNCAPI_3_SPEC_TYPE`},{name:`ASYNCAPI_SPEC_TYPE`},{name:`JSON_SCHEMA_SPEC_TYPE`},{name:`MARKDOWN_SPEC_TYPE`},{name:`UNKNOWN_SPEC_TYPE`},{name:`GRAPHQL_SPEC_TYPE`},{name:`GRAPHQL_SCHEMA_SPEC_TYPE`},{name:`GRAPHAPI_SPEC_TYPE`},{name:`GRAPHQL_INTROSPECTION_SPEC_TYPE`},{name:`PROTOBUF_3_SPEC_TYPE`},{name:`McpDocumentType`},{name:`DdlDocumentType`}]},description:``},language:{required:!1,tsType:{name:`union`,raw:`| typeof LANGUAGE_TYPE_YAML
| typeof LANGUAGE_TYPE_JSON
| typeof LANGUAGE_TYPE_MARKDOWN
| typeof LANGUAGE_TYPE_TEXT
| typeof LANGUAGE_TYPE_GRAPHQL
| typeof LANGUAGE_TYPE_PROTO
| typeof LANGUAGE_TYPE_SQL`,elements:[{name:`LANGUAGE_TYPE_YAML`},{name:`LANGUAGE_TYPE_JSON`},{name:`LANGUAGE_TYPE_MARKDOWN`},{name:`LANGUAGE_TYPE_TEXT`},{name:`LANGUAGE_TYPE_GRAPHQL`},{name:`LANGUAGE_TYPE_PROTO`},{name:`LANGUAGE_TYPE_SQL`}]},description:``},selectedUri:{required:!1,tsType:{name:`literal`,value:"`/${Key}`"},description:``}}}})))()}S();export{x as default};