import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{o as t,s as n}from"./createTheme-CRX-jDaJ.js";import{i as r,n as i,r as a,t as o}from"./markdown-sample-CUugm15C.js";import{t as s}from"./jsx-runtime-Dw8SQ1Xa.js";import{n as c,t as l}from"./Box-BoHOER5V.js";import{A as u,j as d,n as f,r as p}from"./iframe-CprsZPPR.js";var m,h;function g(){return(g=e((()=>{m=`
# Integration Document

This document describes the integration flow between services.

## Authentication Flow

The sequence below shows how a client authenticates and retrieves data.

\`\`\`mermaid
sequenceDiagram
    autonumber
    participant Client
    participant API as API Gateway
    participant Auth as Auth Service
    participant DB as Database

    Client->>API: POST /api/v1/login
    API->>Auth: Validate credentials
    Auth->>DB: SELECT user WHERE email=?
    DB-->>Auth: User record
    Auth-->>API: JWT token
    API-->>Client: 200 OK { token }

    Client->>API: GET /api/v1/packages (Bearer token)
    API->>Auth: Verify token
    Auth-->>API: Token valid
    API->>DB: SELECT packages
    DB-->>API: Package list
    API-->>Client: 200 OK { packages }
\`\`\`

## Publishing Process

The flowchart below describes the version publishing lifecycle.

\`\`\`mermaid
flowchart TD
    A([Start]) --> B[Upload API spec files]
    B --> C{Validation}
    C -- Valid --> D[Set version metadata]
    C -- Invalid --> E[Show validation errors]
    E --> B
    D --> F{Choose status}
    F -- Draft --> G[Save as Draft]
    F -- Release --> H{Release pattern OK?}
    H -- No --> I[Show pattern error]
    I --> D
    H -- Yes --> J[Publish Release]
    G --> K([Done])
    J --> K
\`\`\`

## Notes

Regular markdown mixed with diagrams continues to render normally.
Tables, **bold**, _italic_, and \`inline code\` are unaffected.

| Column A | Column B |
|----------|----------|
| Value 1  | Value 2  |
| Value 3  | Value 4  |
`,h=`
# Fallback Demo

The diagram below contains invalid Mermaid syntax.
The component should display the raw source text instead of crashing.

\`\`\`mermaid
sequenceDiagram
    This is not valid mermaid syntax!!!
    participant ???
    --->>>> broken arrow
\`\`\`

Text after an invalid diagram renders normally.
`})))()}var _,v,y,b,x,S;function C(){return(C=e((()=>{c(),d(),n(),r(),o(),g(),f(),_=s(),v={title:`MarkdownViewer`,component:a,decorators:[e=>(0,_.jsxs)(t,{theme:p,children:[(0,_.jsx)(u,{}),(0,_.jsx)(l,{sx:{maxWidth:900,padding:3},children:(0,_.jsx)(e,{})})]})]},y={name:`With Mermaid Diagrams`,args:{value:m}},b={name:`With Invalid Mermaid (Fallback)`,args:{value:h}},x={name:`Plain Markdown (Regression)`,args:{value:i}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'With Mermaid Diagrams',
  args: {
    value: mermaidSample
  }
}`,...y.parameters?.docs?.source},description:{story:`Two valid Mermaid diagrams (sequence + flowchart) embedded in a markdown document.
 Verifies that multiple diagrams on the same page all render as SVG.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'With Invalid Mermaid (Fallback)',
  args: {
    value: mermaidInvalidSample
  }
}`,...b.parameters?.docs?.source},description:{story:`A Mermaid block with intentionally invalid syntax.
 The component must show the raw source text in a <pre><code> fallback
 without throwing or rendering a broken diagram.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Plain Markdown (Regression)',
  args: {
    value: markdownSample
  }
}`,...x.parameters?.docs?.source},description:{story:`Plain markdown without any Mermaid blocks.
 Regression check — existing markdown rendering must be unaffected
 by the Mermaid code renderer override.`,...x.parameters?.docs?.description}}},S=[`WithMermaidDiagrams`,`WithInvalidMermaid`,`PlainMarkdown`]})))()}C();export{x as PlainMarkdown,b as WithInvalidMermaid,y as WithMermaidDiagrams,S as __namedExportsOrder,v as default};