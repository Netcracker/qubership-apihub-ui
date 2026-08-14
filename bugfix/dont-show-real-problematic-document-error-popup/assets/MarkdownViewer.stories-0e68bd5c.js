import{a as b,j as i}from"./createTheme-877270e5.js";import{M as P,m as f}from"./MarkdownViewer-608d61e9.js";import{T as I,t as D}from"./theme-777e08f2.js";import{C as M}from"./CssBaseline-132d3670.js";import{B as S}from"./Box-875ed2fd.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-9c75dc50.js";import"./iframe-36c2f4b9.js";import"../sb-preview/runtime.js";import"./index-8d47fad6.js";import"./index-891d46e9.js";import"./useId-f6e37502.js";import"./useEnhancedEffect-9d60ea74.js";import"./GlobalStyles-1202dfb7.js";import"./emotion-react.browser.esm-39a29fa1.js";import"./colors-f8087473.js";import"./palette-9f8a1181.js";import"./useThemeProps-f3b34960.js";import"./GlobalStyles-eed42537.js";import"./extendSxProp-e9808817.js";import"./ClassNameGenerator-bd600f10.js";const T=`
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
`,x=`
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
`,X={title:"MarkdownViewer",component:P,decorators:[A=>b(I,{theme:D,children:[i(M,{}),i(S,{sx:{maxWidth:900,padding:3},children:i(A,{})})]})]},e={name:"With Mermaid Diagrams",args:{value:T}},a={name:"With Invalid Mermaid (Fallback)",args:{value:x}},r={name:"Plain Markdown (Regression)",args:{value:f}};var t,n,o,s,m;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'With Mermaid Diagrams',
  args: {
    value: mermaidSample
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source},description:{story:`Two valid Mermaid diagrams (sequence + flowchart) embedded in a markdown document.
 Verifies that multiple diagrams on the same page all render as SVG.`,...(m=(s=e.parameters)==null?void 0:s.docs)==null?void 0:m.description}}};var d,l,c,p,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'With Invalid Mermaid (Fallback)',
  args: {
    value: mermaidInvalidSample
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source},description:{story:`A Mermaid block with intentionally invalid syntax.
 The component must show the raw source text in a <pre><code> fallback
 without throwing or rendering a broken diagram.`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.description}}};var h,g,w,k,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Plain Markdown (Regression)',
  args: {
    value: markdownSample
  }
}`,...(w=(g=r.parameters)==null?void 0:g.docs)==null?void 0:w.source},description:{story:`Plain markdown without any Mermaid blocks.
 Regression check — existing markdown rendering must be unaffected
 by the Mermaid code renderer override.`,...(v=(k=r.parameters)==null?void 0:k.docs)==null?void 0:v.description}}};const Z=["WithMermaidDiagrams","WithInvalidMermaid","PlainMarkdown"];export{r as PlainMarkdown,a as WithInvalidMermaid,e as WithMermaidDiagrams,Z as __namedExportsOrder,X as default};
//# sourceMappingURL=MarkdownViewer.stories-0e68bd5c.js.map
