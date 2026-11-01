import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react---BZM-86.js";import{H as r,Z as i,a,c as o}from"./createTheme-BXK1C6tW.js";import{n as s,t as c}from"./useThemeProps-D5XaoSKT.js";import{c as l,d as u,l as d,n as f,o as p,r as m,s as h,t as g,u as _}from"./clsx.m-DvhsLdH4.js";import{i as v,n as y,r as b}from"./emotion-react.browser.esm-Bk0Z9bnC.js";import{t as x}from"./jsx-runtime--WVWf14b.js";function S(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||``}function C(e){return parseFloat(e)}function w(e){return d(`MuiSkeleton`,e)}function T(){return(T=e((()=>{l(),_(),h(`MuiSkeleton`,[`root`,`text`,`rectangular`,`rounded`,`circular`,`pulse`,`wave`,`withChildren`,`fitContent`,`heightAuto`])})))()}var E,D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{E=t(n()),f(),b(),o(),m(),c(),T(),D=x(),O=[`animation`,`className`,`component`,`height`,`style`,`variant`,`width`],k=e=>e,P=e=>{let{classes:t,variant:n,animation:r,hasChildren:i,width:a,height:o}=e;return u({root:[`root`,n,r,i&&`withChildren`,i&&!a&&`fitContent`,i&&!o&&`heightAuto`]},w,t)},F=v(A||=k`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`),I=v(j||=k`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`),L=p(`span`,{name:`MuiSkeleton`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],n.animation!==!1&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{let n=S(e.shape.borderRadius)||`px`,r=C(e.shape.borderRadius);return i({display:`block`,backgroundColor:e.vars?e.vars.palette.Skeleton.bg:a(e.palette.text.primary,e.palette.mode===`light`?.11:.13),height:`1.2em`},t.variant===`text`&&{marginTop:0,marginBottom:0,height:`auto`,transformOrigin:`0 55%`,transform:`scale(1, 0.60)`,borderRadius:`${r}${n}/${Math.round(r/.6*10)/10}${n}`,"&:empty:before":{content:`"\\00a0"`}},t.variant===`circular`&&{borderRadius:`50%`},t.variant===`rounded`&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:`hidden`}},t.hasChildren&&!t.width&&{maxWidth:`fit-content`},t.hasChildren&&!t.height&&{height:`auto`})},({ownerState:e})=>e.animation===`pulse`&&y(M||=k`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `,F),({ownerState:e,theme:t})=>e.animation===`wave`&&y(N||=k`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `,I,(t.vars||t).palette.action.hover)),R=E.forwardRef(function(e,t){let n=s({props:e,name:`MuiSkeleton`}),{animation:a=`pulse`,className:o,component:c=`span`,height:l,style:u,variant:d=`text`,width:f}=n,p=r(n,O),m=i({},n,{animation:a,component:c,variant:d,hasChildren:!!p.children}),h=P(m);return(0,D.jsx)(L,i({as:c,ref:t,className:g(h.root,o),ownerState:m},p,{style:i({width:f,height:l},u)}))})})))()}export{z as n,R as t};