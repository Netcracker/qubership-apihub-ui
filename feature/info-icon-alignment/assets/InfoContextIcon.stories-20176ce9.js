import{I as h}from"./InfoContextIcon-676e40ba.js";import{_ as D,j as c,k as x,r as y,l as E,m as O,n as F,o as $,a as A}from"./createTheme-bb66475d.js";import{L as M}from"./List-8c2a23fa.js";import{L as N}from"./ListItem-a891185a.js";import{_ as P}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-dd1a14a8.js";import{r as g}from"./index-37ba2b57.js";import{s as W}from"./styled-d24885bf.js";import{u as w}from"./useThemeProps-9c383963.js";import{e as U}from"./extendSxProp-d433c50a.js";import{B as q}from"./Box-e82d92bd.js";import{T as G}from"./Typography-5d18b303.js";import"./jsx-runtime_commonjs-proxy-7ee60010.js";import"./_commonjsHelpers-de833af9.js";import"./createSvgIcon-090a50dc.js";import"./clsx.m-c5c12798.js";import"./createChainedFunction-0bab83cf.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./TransitionGroupContext-373e5cc0.js";import"./debounce-517eeb3c.js";import"./isMuiElement-58afa5f8.js";import"./useId-f6e37502.js";import"./useControlled-1dfdd739.js";import"./ListContext-aeaca2aa.js";import"./listItemButtonClasses-ef9e853c.js";import"./isHostComponent-73d6e646.js";import"./ButtonBase-fcce9454.js";import"./emotion-react.browser.esm-29cb6504.js";import"./hoist-non-react-statics.cjs-b1c88361.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";const H=["component","direction","spacing","divider","children"];function J(o,r){const t=g.Children.toArray(o).filter(Boolean);return t.reduce((e,a,s)=>(e.push(a),s<t.length-1&&e.push(g.cloneElement(r,{key:`separator-${s}`})),e),[])}const K=o=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[o],Q=({ownerState:o,theme:r})=>{let t=P({display:"flex",flexDirection:"column"},x({theme:r},y({values:o.direction,breakpoints:r.breakpoints.values}),e=>({flexDirection:e})));if(o.spacing){const e=E(r),a=Object.keys(r.breakpoints.values).reduce((i,n)=>((typeof o.spacing=="object"&&o.spacing[n]!=null||typeof o.direction=="object"&&o.direction[n]!=null)&&(i[n]=!0),i),{}),s=y({values:o.direction,base:a}),u=y({values:o.spacing,base:a});typeof s=="object"&&Object.keys(s).forEach((i,n,f)=>{if(!s[i]){const R=n>0?s[f[n-1]]:"column";s[i]=R}}),t=O(t,x({theme:r},u,(i,n)=>({"& > :not(style) + :not(style)":{margin:0,[`margin${K(n?s[n]:o.direction)}`]:$(e,i)}})))}return t=F(r.breakpoints,t),t},X=W("div",{name:"MuiStack",slot:"Root",overridesResolver:(o,r)=>[r.root]})(Q),Y=g.forwardRef(function(r,t){const e=w({props:r,name:"MuiStack"}),a=U(e),{component:s="div",direction:u="column",spacing:S=0,divider:i,children:n}=a,f=D(a,H);return c(X,P({as:s,ownerState:{direction:u,spacing:S},ref:t},f,{children:i?J(n,i):n}))}),Z=Y,d=(o,r,t)=>({render:()=>c(M,{children:t.map(e=>c(N,{children:A(Z,{direction:"row",spacing:2,alignItems:"center",width:"100%",children:[c(q,{display:"flex",justifyContent:"center",minWidth:40,children:c(o,{[r]:e})}),c(G,{align:"left",children:e})]})},e))})});try{d.displayName="createVariantStory",d.__docgenInfo={description:"Creates a story for displaying variants of a component prop",displayName:"createVariantStory",props:{}}}catch{}const To={title:"Icons/InfoContextIcon",component:h},B=["extra-small","small","medium","large"],L=["primary","secondary","action","disabled","error","info","success","warning","muted"],l=d(h,"fontSize",B),m=d(h,"color",L),p={args:{fontSize:"small",color:"muted"},argTypes:{fontSize:{control:"radio",options:B,description:"Size of the icon, including custom extra-small size",table:{defaultValue:{summary:"small"}}},color:{control:"radio",options:L,description:"Color of the icon, including custom muted color",table:{defaultValue:{summary:"muted"}}},testId:{table:{disable:!0}}}};var V,b,I;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:"createVariantStory(InfoContextIcon, 'fontSize', sizes)",...(I=(b=l.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var z,_,v;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:"createVariantStory(InfoContextIcon, 'color', colors)",...(v=(_=m.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var k,C,j;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    fontSize: 'small',
    color: 'muted'
  },
  argTypes: {
    fontSize: {
      control: 'radio',
      options: sizes,
      description: 'Size of the icon, including custom extra-small size',
      table: {
        defaultValue: {
          summary: 'small'
        }
      }
    },
    color: {
      control: 'radio',
      options: colors,
      description: 'Color of the icon, including custom muted color',
      table: {
        defaultValue: {
          summary: 'muted'
        }
      }
    },
    testId: {
      table: {
        disable: true
      }
    }
  }
}`,...(j=(C=p.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const Ro=["Sizes","Colors","Playground"];export{m as Colors,p as Playground,l as Sizes,Ro as __namedExportsOrder,To as default};
//# sourceMappingURL=InfoContextIcon.stories-20176ce9.js.map
