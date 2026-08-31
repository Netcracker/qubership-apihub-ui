import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-5l_iQkTl.js";import{H as r,K as i,L as a,U as o,Ut as s,V as c,W as l,Wt as u,X as d,a as f,c as p,d as m,z as h}from"./createTheme-CRX-jDaJ.js";import{t as g}from"./jsx-runtime-Dw8SQ1Xa.js";import{D as _,M as v,N as y,O as b,k as x,t as S}from"./base-BS5Q32BK.js";import{n as C,t as w}from"./useThemeProps-Cga3Mt2f.js";function T(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||``}function E(e){return parseFloat(e)}function D(e){return i(`MuiSkeleton`,e)}function O(){return(O=e((()=>{c(),y(),l(`MuiSkeleton`,[`root`,`text`,`rectangular`,`rounded`,`circular`,`pulse`,`wave`,`withChildren`,`fitContent`,`heightAuto`])})))()}var k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{o(),u(),k=t(n()),b(),f(),S(),m(),x(),w(),O(),A=g(),j=[`animation`,`className`,`component`,`height`,`style`,`variant`,`width`],M=e=>e,L=e=>{let{classes:t,variant:n,animation:r,hasChildren:i,width:a,height:o}=e;return d({root:[`root`,n,r,i&&`withChildren`,i&&!a&&`fitContent`,i&&!o&&`heightAuto`]},D,t)},R=h(N||=M`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`),z=h(P||=M`
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
`),B=v(`span`,{name:`MuiSkeleton`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],n.animation!==!1&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{let n=T(e.shape.borderRadius)||`px`,r=E(e.shape.borderRadius);return s({display:`block`,backgroundColor:e.vars?e.vars.palette.Skeleton.bg:p(e.palette.text.primary,e.palette.mode===`light`?.11:.13),height:`1.2em`},t.variant===`text`&&{marginTop:0,marginBottom:0,height:`auto`,transformOrigin:`0 55%`,transform:`scale(1, 0.60)`,borderRadius:`${r}${n}/${Math.round(r/.6*10)/10}${n}`,"&:empty:before":{content:`"\\00a0"`}},t.variant===`circular`&&{borderRadius:`50%`},t.variant===`rounded`&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:`hidden`}},t.hasChildren&&!t.width&&{maxWidth:`fit-content`},t.hasChildren&&!t.height&&{height:`auto`})},({ownerState:e})=>e.animation===`pulse`&&a(F||=M`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `,R),({ownerState:e,theme:t})=>e.animation===`wave`&&a(I||=M`
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
    `,z,(t.vars||t).palette.action.hover)),V=k.forwardRef(function(e,t){let n=C({props:e,name:`MuiSkeleton`}),{animation:i=`pulse`,className:a,component:o=`span`,height:c,style:l,variant:u=`text`,width:d}=n,f=r(n,j),p=s({},n,{animation:i,component:o,variant:u,hasChildren:!!f.children}),m=L(p);return(0,A.jsx)(B,s({as:o,ref:t,className:_(m.root,a),ownerState:p},f,{style:s({width:d,height:c},l)}))})})))()}export{H as n,V as t};