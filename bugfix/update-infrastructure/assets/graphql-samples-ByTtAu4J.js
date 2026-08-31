import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./react-5l_iQkTl.js";import{t as n}from"./jsx-runtime-Dw8SQ1Xa.js";import{n as r,t as i}from"./createSvgIcon-BXSVxfKP.js";import{n as a,t as o}from"./Button-C6vA4c9Q.js";import{a as s,n as c,o as l,t as u}from"./DialogContent-DtvI-_UL.js";import{i as d,n as f,r as p,t as m}from"./DialogTitle-1rZTVADW.js";import{n as h,t as g}from"./DialogContentText-CmSXyqtJ.js";var _,v;function y(){return(y=e((()=>{r(),_=n(),v=i((0,_.jsx)(`path`,{d:`M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z`}),`Autorenew`)})))()}var b,x;function S(){return(S=e((()=>{y(),a(),l(),d(),c(),h(),f(),b=n(),x=()=>(0,b.jsxs)(s,{open:!0,PaperProps:{sx:{borderRadius:`10px`}},children:[(0,b.jsx)(m,{children:`APIHUB UI is out of date`}),(0,b.jsx)(u,{children:(0,b.jsx)(g,{variant:`body2`,"data-testid":`ModuleFetchingErrorDialogContent`,children:`Please reload the page to get the latest version; otherwise, APIHUB UI may not function correctly`})}),(0,b.jsx)(p,{children:(0,b.jsx)(o,{variant:`contained`,startIcon:(0,b.jsx)(v,{}),onClick:()=>{location.reload()},children:`Reload`})})]}),x.__docgenInfo={description:``,methods:[],displayName:`ModuleFetchingErrorPopup`}})))()}function C(e){let{error:t}=e;return!!t&&t instanceof TypeError&&t.message.startsWith(`Failed to fetch dynamically imported module`)}var w,T,E;function D(){return(D=e((()=>{w=t(),S(),T=n(),E=class extends w.Component{state={error:null,errorInfo:null};constructor(e){super(e)}componentDidCatch(e,t){this.setState({error:e,errorInfo:t})}render(){return C(this.state)||this.props.showReloadPopup?(0,T.jsx)(x,{}):this.props.children}},E.__docgenInfo={description:``,methods:[],displayName:`ModuleFetchingErrorBoundary`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},showReloadPopup:{required:!1,tsType:{name:`boolean`},description:``}}}})))()}var O,k;function A(){return(A=e((()=>{O={openapi:`3.0.1`,info:{title:`Bulk API`,description:`Description`,version:`1.1`,contact:{},license:{name:`Apache 2.0`,url:`http://www.apache.org/licenses/LICENSE-2.0`}},servers:[{url:`http://{server}`,variables:{server:{default:`server:port`}}}],paths:{"/api/first/{first}/second/{second}":{post:{operationId:`myOperation`,parameters:[{name:`first`,in:`path`,required:!0,schema:{type:`string`}},{name:`second`,in:`path`,required:!0,schema:{type:`string`}}],requestBody:{content:{"application/json":{schema:{$ref:`#/components/schemas/RequestBodyEntity`}}},required:!0},responses:{200:{description:`OK`,content:{"*/*":{schema:{type:`object`}}}}}}}},components:{schemas:{RequestBodyEntity:{type:`object`,properties:{first:{type:`string`},second:{type:`array`,items:{$ref:`#/components/schemas/FirstEntity`}},third:{type:`array`,items:{$ref:`#/components/schemas/SecondEntity`}}}},FirstEntity:{type:`object`,properties:{name:{type:`string`},values:{type:`array`,items:{type:`string`}}}},SecondEntity:{type:`object`,properties:{type:{type:`string`},defaultValue:{type:`string`},additionalValue:{type:`array`,items:{type:`string`}}}}}}},k={openapi:`3.0.1`,info:{title:`Bulk API`,description:`CHANGED description with looooooooooooooooooooong text in there`,version:`1.1`,contact:{},license:{name:`Apache 2.0`,url:`http://www.apache.org/licenses/LICENSE-2.0`}},servers:[{url:`http://{server}`,variables:{server:{default:`server:port`}}}],paths:{"/api/first/{first}/second/{second}":{post:{operationId:`myOperation`,parameters:[{name:`id`,in:`query`,required:!0,schema:{type:`number`}},{name:`first`,in:`path`,required:!0,schema:{type:`string`}},{name:`second`,in:`path`,required:!0,schema:{type:`string`}}],requestBody:{content:{"application/json":{schema:{$ref:`#/components/schemas/RequestBodyEntity`}}},required:!0},responses:{200:{description:`OK`,content:{"*/*":{schema:{type:`object`}}}}}}}},components:{schemas:{RequestBodyEntity:{type:`object`,required:[`first`],properties:{first:{type:`number`},second:{type:`array`,items:{$ref:`#/components/schemas/FirstEntity`}},third:{type:`number`}}},FirstEntity:{type:`object`,properties:{name:{type:`string`},values:{type:`array`,items:{type:`string`}}}},SecondEntity:{type:`object`,properties:{type:{type:`string`},defaultValue:{type:`string`},additionalValue:{type:`array`,items:{type:`string`}}}}}}}})))()}var j,M;function N(){return(N=e((()=>{j=`
type Query {
    fruit: Fruit
    pet(
        kind: String!

        "Flag that means that pet has wool"
        fluffy: Boolean = true
    ): Pet!
}

"""
Long
Fruuuuuuuuuuuuuuuuuuuuuuuuit
Description
""""
type Fruit {
    name: String!
}

type Pet {
    kind: String
    voice: String
    fluffy: Boolean
}
`,M=`
type Query {
    fruit: Fruit
    pet(
        kind: String!
    ): Pet!
}

"""
Long
Fruuuuuuuuuuuuuuuuuuuuuuuuit
Multi-line
Description
""""
type Fruit {
    name: String!
}

type Pet {
    kind: String
    voice: String
    isBig: Boolean
}
`})))()}export{k as a,D as c,A as i,j as n,O as o,N as r,E as s,M as t};