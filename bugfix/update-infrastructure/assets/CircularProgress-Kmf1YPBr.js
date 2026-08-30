import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-5l_iQkTl.js";import{H as r,K as i,L as a,U as o,Ut as s,V as c,W as l,Wt as u,X as d,a as f,z as p}from"./createTheme-CRX-jDaJ.js";import{t as m}from"./jsx-runtime-Dw8SQ1Xa.js";import{D as h,M as g,N as _,O as v,k as y,t as b}from"./base-BS5Q32BK.js";import{n as x,t as S}from"./useThemeProps-Cga3Mt2f.js";import{n as C,t as w}from"./capitalize-DyCEgXje.js";function T(e){return i(`MuiCircularProgress`,e)}function E(){return(E=e((()=>{c(),_(),l(`MuiCircularProgress`,[`root`,`determinate`,`indeterminate`,`colorPrimary`,`colorSecondary`,`svg`,`circle`,`circleDeterminate`,`circleIndeterminate`,`circleDisableShrink`])})))()}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{o(),u(),D=t(n()),v(),b(),f(),C(),S(),y(),E(),O=m(),k=[`className`,`color`,`disableShrink`,`size`,`style`,`thickness`,`value`,`variant`],A=e=>e,F=44,I=p(j||=A`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`),L=p(M||=A`
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
`),R=e=>{let{classes:t,variant:n,color:r,disableShrink:i}=e,a={root:[`root`,n,`color${w(r)}`],svg:[`svg`],circle:[`circle`,`circle${w(n)}`,i&&`circleDisableShrink`]};return d(a,T,t)},z=g(`span`,{name:`MuiCircularProgress`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t[`color${w(n.color)}`]]}})(({ownerState:e,theme:t})=>s({display:`inline-block`},e.variant===`determinate`&&{transition:t.transitions.create(`transform`)},e.color!==`inherit`&&{color:(t.vars||t).palette[e.color].main}),({ownerState:e})=>e.variant===`indeterminate`&&a(N||=A`
      animation: ${0} 1.4s linear infinite;
    `,I)),B=g(`svg`,{name:`MuiCircularProgress`,slot:`Svg`,overridesResolver:(e,t)=>t.svg})({display:`block`}),V=g(`circle`,{name:`MuiCircularProgress`,slot:`Circle`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.circle,t[`circle${w(n.variant)}`],n.disableShrink&&t.circleDisableShrink]}})(({ownerState:e,theme:t})=>s({stroke:`currentColor`},e.variant===`determinate`&&{transition:t.transitions.create(`stroke-dashoffset`)},e.variant===`indeterminate`&&{strokeDasharray:`80px, 200px`,strokeDashoffset:0}),({ownerState:e})=>e.variant===`indeterminate`&&!e.disableShrink&&a(P||=A`
      animation: ${0} 1.4s ease-in-out infinite;
    `,L)),H=D.forwardRef(function(e,t){let n=x({props:e,name:`MuiCircularProgress`}),{className:i,color:a=`primary`,disableShrink:o=!1,size:c=40,style:l,thickness:u=3.6,value:d=0,variant:f=`indeterminate`}=n,p=r(n,k),m=s({},n,{color:a,disableShrink:o,size:c,thickness:u,value:d,variant:f}),g=R(m),_={},v={},y={};if(f===`determinate`){let e=2*Math.PI*((F-u)/2);_.strokeDasharray=e.toFixed(3),y[`aria-valuenow`]=Math.round(d),_.strokeDashoffset=`${((100-d)/100*e).toFixed(3)}px`,v.transform=`rotate(-90deg)`}return(0,O.jsx)(z,s({className:h(g.root,i),style:s({width:c,height:c},v,l),ownerState:m,ref:t,role:`progressbar`},y,p,{children:(0,O.jsx)(B,{className:g.svg,ownerState:m,viewBox:`${F/2} ${F/2} ${F} ${F}`,children:(0,O.jsx)(V,{className:g.circle,style:_,ownerState:m,cx:F,cy:F,r:(F-u)/2,fill:`none`,strokeWidth:u})})}))})})))()}export{U as n,H as t};