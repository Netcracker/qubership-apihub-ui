import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-5l_iQkTl.js";import{H as r,Z as i}from"./createTheme-BCoyfIaR.js";import{n as a,t as o}from"./useThemeProps-DDe-OVu-.js";import{c as s,d as c,l,n as u,o as d,r as f,s as p,t as m,u as h}from"./clsx.m-CaMu1q58.js";import{i as g,n as _,r as v}from"./emotion-react.browser.esm-DALCzfUE.js";import{t as y}from"./jsx-runtime-Dw8SQ1Xa.js";import{n as b,t as x}from"./capitalize-B0fSYRfn.js";function S(e){return l(`MuiCircularProgress`,e)}function C(){return(C=e((()=>{s(),h(),p(`MuiCircularProgress`,[`root`,`determinate`,`indeterminate`,`colorPrimary`,`colorSecondary`,`svg`,`circle`,`circleDeterminate`,`circleIndeterminate`,`circleDisableShrink`])})))()}var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{w=t(n()),u(),v(),b(),o(),f(),C(),T=y(),E=[`className`,`color`,`disableShrink`,`size`,`style`,`thickness`,`value`,`variant`],D=e=>e,M=44,N=g(O||=D`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`),P=g(k||=D`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`),F=e=>{let{classes:t,variant:n,color:r,disableShrink:i}=e,a={root:[`root`,n,`color${x(r)}`],svg:[`svg`],circle:[`circle`,`circle${x(n)}`,i&&`circleDisableShrink`]};return c(a,S,t)},I=d(`span`,{name:`MuiCircularProgress`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t[`color${x(n.color)}`]]}})(({ownerState:e,theme:t})=>i({display:`inline-block`},e.variant===`determinate`&&{transition:t.transitions.create(`transform`)},e.color!==`inherit`&&{color:(t.vars||t).palette[e.color].main}),({ownerState:e})=>e.variant===`indeterminate`&&_(A||=D`
      animation: ${0} 1.4s linear infinite;
    `,N)),L=d(`svg`,{name:`MuiCircularProgress`,slot:`Svg`,overridesResolver:(e,t)=>t.svg})({display:`block`}),R=d(`circle`,{name:`MuiCircularProgress`,slot:`Circle`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.circle,t[`circle${x(n.variant)}`],n.disableShrink&&t.circleDisableShrink]}})(({ownerState:e,theme:t})=>i({stroke:`currentColor`},e.variant===`determinate`&&{transition:t.transitions.create(`stroke-dashoffset`)},e.variant===`indeterminate`&&{strokeDasharray:`80px, 200px`,strokeDashoffset:0}),({ownerState:e})=>e.variant===`indeterminate`&&!e.disableShrink&&_(j||=D`
      animation: ${0} 1.4s ease-in-out infinite;
    `,P)),z=w.forwardRef(function(e,t){let n=a({props:e,name:`MuiCircularProgress`}),{className:o,color:s=`primary`,disableShrink:c=!1,size:l=40,style:u,thickness:d=3.6,value:f=0,variant:p=`indeterminate`}=n,h=r(n,E),g=i({},n,{color:s,disableShrink:c,size:l,thickness:d,value:f,variant:p}),_=F(g),v={},y={},b={};if(p===`determinate`){let e=2*Math.PI*((M-d)/2);v.strokeDasharray=e.toFixed(3),b[`aria-valuenow`]=Math.round(f),v.strokeDashoffset=`${((100-f)/100*e).toFixed(3)}px`,y.transform=`rotate(-90deg)`}return(0,T.jsx)(I,i({className:m(_.root,o),style:i({width:l,height:l},y,u),ownerState:g,ref:t,role:`progressbar`},b,h,{children:(0,T.jsx)(L,{className:_.svg,ownerState:g,viewBox:`${M/2} ${M/2} ${M} ${M}`,children:(0,T.jsx)(R,{className:_.circle,style:v,ownerState:g,cx:M,cy:M,r:(M-d)/2,fill:`none`,strokeWidth:d})})}))})})))()}export{B as n,z as t};