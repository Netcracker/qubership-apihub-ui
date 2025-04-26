import{I as h}from"./InfoContextIcon-aa9793ab.js";import{_ as D,j as c,k as x,r as y,l as E,m as O,n as F,o as $,a as A}from"./createTheme-e504d7a1.js";import{L as M}from"./List-9913b344.js";import{L as N}from"./ListItem-fed0229b.js";import{_ as P}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-9c75dc50.js";import{r as g}from"./index-37ba2b57.js";import{s as W}from"./clsx.m-e8952646.js";import{u as w}from"./useThemeProps-be56d1e2.js";import{e as U}from"./extendSxProp-c6b156d7.js";import{B as q}from"./Box-3dbc4f20.js";import{T as G}from"./Typography-74efa758.js";import"./jsx-runtime_commonjs-proxy-350e4ed0.js";import"./_commonjsHelpers-de833af9.js";import"./createSvgIcon-23119704.js";import"./index-65a2139a.js";import"./createChainedFunction-0bab83cf.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./TransitionGroupContext-0440df69.js";import"./debounce-517eeb3c.js";import"./isMuiElement-de695f11.js";import"./useId-f6e37502.js";import"./useControlled-1dfdd739.js";import"./ListContext-aeaca2aa.js";import"./listItemButtonClasses-02314725.js";import"./isHostComponent-73d6e646.js";import"./ButtonBase-d7ff9540.js";import"./emotion-react.browser.esm-6b7ec201.js";import"./hoist-non-react-statics.cjs-b1c88361.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-5494d9cc.js";const H=["component","direction","spacing","divider","children"];function J(o,r){const t=g.Children.toArray(o).filter(Boolean);return t.reduce((e,a,s)=>(e.push(a),s<t.length-1&&e.push(g.cloneElement(r,{key:`separator-${s}`})),e),[])}const K=o=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[o],Q=({ownerState:o,theme:r})=>{let t=P({display:"flex",flexDirection:"column"},x({theme:r},y({values:o.direction,breakpoints:r.breakpoints.values}),e=>({flexDirection:e})));if(o.spacing){const e=E(r),a=Object.keys(r.breakpoints.values).reduce((i,n)=>((typeof o.spacing=="object"&&o.spacing[n]!=null||typeof o.direction=="object"&&o.direction[n]!=null)&&(i[n]=!0),i),{}),s=y({values:o.direction,base:a}),u=y({values:o.spacing,base:a});typeof s=="object"&&Object.keys(s).forEach((i,n,f)=>{if(!s[i]){const R=n>0?s[f[n-1]]:"column";s[i]=R}}),t=O(t,x({theme:r},u,(i,n)=>({"& > :not(style) + :not(style)":{margin:0,[`margin${K(n?s[n]:o.direction)}`]:$(e,i)}})))}return t=F(r.breakpoints,t),t},X=W("div",{name:"MuiStack",slot:"Root",overridesResolver:(o,r)=>[r.root]})(Q),Y=g.forwardRef(function(r,t){const e=w({props:r,name:"MuiStack"}),a=U(e),{component:s="div",direction:u="column",spacing:S=0,divider:i,children:n}=a,f=D(a,H);return c(X,P({as:s,ownerState:{direction:u,spacing:S},ref:t},f,{children:i?J(n,i):n}))}),Z=Y,d=(o,r,t)=>({render:()=>c(M,{children:t.map(e=>c(N,{children:A(Z,{direction:"row",spacing:2,alignItems:"center",width:"100%",children:[c(q,{display:"flex",justifyContent:"center",minWidth:40,children:c(o,{[r]:e})}),c(G,{align:"left",children:e})]})},e))})});try{d.displayName="createVariantStory",d.__docgenInfo={description:"Creates a story for displaying variants of a component prop",displayName:"createVariantStory",props:{}}}catch{}const To={title:"Icons/InfoContextIcon",component:h},B=["extra-small","small","medium","large"],L=["primary","secondary","action","disabled","error","info","success","warning","muted"],l=d(h,"fontSize",B),m=d(h,"color",L),p={args:{fontSize:"small",color:"muted"},argTypes:{fontSize:{control:"radio",options:B,description:"Size of the icon, including custom extra-small size",table:{defaultValue:{summary:"small"}}},color:{control:"radio",options:L,description:"Color of the icon, including custom muted color",table:{defaultValue:{summary:"muted"}}},testId:{table:{disable:!0}}}};var V,b,I;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:"createVariantStory(InfoContextIcon, 'fontSize', sizes)",...(I=(b=l.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var z,_,v;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:"createVariantStory(InfoContextIcon, 'color', colors)",...(v=(_=m.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var k,C,j;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
//# sourceMappingURL=InfoContextIcon.stories-0b94aec4.js.map
