import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-5l_iQkTl.js";import{H as r,Z as i}from"./createTheme-BCoyfIaR.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./TransitionGroupContext-CMZpYj_M.js";import{i as d,n as f,r as p,t as m}from"./useIsFocusVisible-Dn1kvkGj.js";import{n as ee,t as h}from"./useThemeProps-DDe-OVu-.js";import{c as g,d as _,l as v,n as y,o as b,r as te,s as x,t as S,u as C}from"./clsx.m-CaMu1q58.js";import{i as w,r as T}from"./emotion-react.browser.esm-DALCzfUE.js";import{t as E}from"./jsx-runtime-Dw8SQ1Xa.js";function D(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function O(e,t){var n=function(e){return t&&(0,A.isValidElement)(e)?t(e):e},r=Object.create(null);return e&&A.Children.map(e,function(e){return e}).forEach(function(e){r[e.key]=n(e)}),r}function ne(e,t){e||={},t||={};function n(n){return n in t?t[n]:e[n]}var r=Object.create(null),i=[];for(var a in e)a in t?i.length&&(r[a]=i,i=[]):i.push(a);var o,s={};for(var c in t){if(r[c])for(o=0;o<r[c].length;o++){var l=r[c][o];s[r[c][o]]=n(l)}s[c]=n(c)}for(o=0;o<i.length;o++)s[i[o]]=n(i[o]);return s}function k(e,t,n){return n[t]==null?e.props[t]:n[t]}function re(e,t){return O(e.children,function(n){return(0,A.cloneElement)(n,{onExited:t.bind(null,n),in:!0,appear:k(n,`appear`,e),enter:k(n,`enter`,e),exit:k(n,`exit`,e)})})}function ie(e,t,n){var r=O(e.children),i=ne(t,r);return Object.keys(i).forEach(function(a){var o=i[a];if((0,A.isValidElement)(o)){var s=a in t,c=a in r,l=t[a],u=(0,A.isValidElement)(l)&&!l.props.in;c&&(!s||u)?i[a]=(0,A.cloneElement)(o,{onExited:n.bind(null,o),in:!0,exit:k(o,`exit`,e),enter:k(o,`enter`,e)}):!c&&s&&!u?i[a]=(0,A.cloneElement)(o,{in:!1}):c&&s&&(0,A.isValidElement)(l)&&(i[a]=(0,A.cloneElement)(o,{onExited:n.bind(null,o),in:l.props.in,exit:k(o,`exit`,e),enter:k(o,`enter`,e)}))}}),i}var A;function j(){return(j=e((()=>{A=n()})))()}var M,N,P,F;function I(){return(I=e((()=>{o(),M=t(n()),s(),j(),N=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},P={component:`div`,childFactory:function(e){return e}},F=function(e){l(t,e);function t(t,n){var r=e.call(this,t,n)||this;return r.state={contextValue:{isMounting:!0},handleExited:r.handleExited.bind(D(r)),firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n=t.children,r=t.handleExited;return{children:t.firstRender?re(e,r):ie(e,n,r),firstRender:!1}},n.handleExited=function(e,t){var n=O(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(t){var n=i({},t.children);return delete n[e.key],{children:n}}))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,i=r(e,[`component`,`childFactory`]),a=this.state.contextValue,o=N(this.state.children).map(n);return delete i.appear,delete i.enter,delete i.exit,t===null?M.createElement(u.Provider,{value:a},o):M.createElement(u.Provider,{value:a},M.createElement(t,i,o))},t}(M.Component),F.propTypes={},F.defaultProps=P})))()}function L(e){let{className:t,classes:n,pulsate:r=!1,rippleX:i,rippleY:a,rippleSize:o,in:s,onExited:c,timeout:l}=e,[u,d]=R.useState(!1),f=S(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),p={width:o,height:o,top:-(o/2)+a,left:-(o/2)+i},m=S(n.child,u&&n.childLeaving,r&&n.childPulsate);return!s&&!u&&d(!0),R.useEffect(()=>{if(!s&&c!=null){let e=setTimeout(c,l);return()=>{clearTimeout(e)}}},[c,s,l]),(0,z.jsx)(`span`,{className:f,style:p,children:(0,z.jsx)(`span`,{className:m})})}var R,z;function B(){return(B=e((()=>{R=t(n()),y(),z=E()})))()}var V;function H(){return(H=e((()=>{g(),V=x(`MuiTouchRipple`,[`root`,`ripple`,`rippleVisible`,`ripplePulsate`,`child`,`childLeaving`,`childPulsate`])})))()}var U,W,G,K,ae,oe,se,ce,q,J,le,ue,de,fe,pe;function Y(){return(Y=e((()=>{U=t(n()),I(),y(),T(),te(),h(),B(),H(),W=E(),G=[`center`,`classes`,`className`],K=e=>e,q=550,J=w(ae||=K`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`),le=w(oe||=K`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`),ue=w(se||=K`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`),de=b(`span`,{name:`MuiTouchRipple`,slot:`Root`})({overflow:`hidden`,pointerEvents:`none`,position:`absolute`,zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:`inherit`}),fe=b(L,{name:`MuiTouchRipple`,slot:`Ripple`})(ce||=K`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,V.rippleVisible,J,q,({theme:e})=>e.transitions.easing.easeInOut,V.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,V.child,V.childLeaving,le,q,({theme:e})=>e.transitions.easing.easeInOut,V.childPulsate,ue,({theme:e})=>e.transitions.easing.easeInOut),pe=U.forwardRef(function(e,t){let n=ee({props:e,name:`MuiTouchRipple`}),{center:a=!1,classes:o={},className:s}=n,c=r(n,G),[l,u]=U.useState([]),d=U.useRef(0),f=U.useRef(null);U.useEffect(()=>{f.current&&=(f.current(),null)},[l]);let p=U.useRef(!1),m=U.useRef(null),h=U.useRef(null),g=U.useRef(null);U.useEffect(()=>()=>{clearTimeout(m.current)},[]);let _=U.useCallback(e=>{let{pulsate:t,rippleX:n,rippleY:r,rippleSize:i,cb:a}=e;u(e=>[...e,(0,W.jsx)(fe,{classes:{ripple:S(o.ripple,V.ripple),rippleVisible:S(o.rippleVisible,V.rippleVisible),ripplePulsate:S(o.ripplePulsate,V.ripplePulsate),child:S(o.child,V.child),childLeaving:S(o.childLeaving,V.childLeaving),childPulsate:S(o.childPulsate,V.childPulsate)},timeout:q,pulsate:t,rippleX:n,rippleY:r,rippleSize:i},d.current)]),d.current+=1,f.current=a},[o]),v=U.useCallback((e={},t={},n=()=>{})=>{let{pulsate:r=!1,center:i=a||t.pulsate,fakeElement:o=!1}=t;if(e?.type===`mousedown`&&p.current){p.current=!1;return}e?.type===`touchstart`&&(p.current=!0);let s=o?null:g.current,c=s?s.getBoundingClientRect():{width:0,height:0,left:0,top:0},l,u,d;if(i||e===void 0||e.clientX===0&&e.clientY===0||!e.clientX&&!e.touches)l=Math.round(c.width/2),u=Math.round(c.height/2);else{let{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;l=Math.round(t-c.left),u=Math.round(n-c.top)}if(i)d=Math.sqrt((2*c.width**2+c.height**2)/3),d%2==0&&(d+=1);else{let e=Math.max(Math.abs((s?s.clientWidth:0)-l),l)*2+2,t=Math.max(Math.abs((s?s.clientHeight:0)-u),u)*2+2;d=Math.sqrt(e**2+t**2)}e!=null&&e.touches?h.current===null&&(h.current=()=>{_({pulsate:r,rippleX:l,rippleY:u,rippleSize:d,cb:n})},m.current=setTimeout(()=>{h.current&&=(h.current(),null)},80)):_({pulsate:r,rippleX:l,rippleY:u,rippleSize:d,cb:n})},[a,_]),y=U.useCallback(()=>{v({},{pulsate:!0})},[v]),b=U.useCallback((e,t)=>{if(clearTimeout(m.current),e?.type===`touchend`&&h.current){h.current(),h.current=null,m.current=setTimeout(()=>{b(e,t)});return}h.current=null,u(e=>e.length>0?e.slice(1):e),f.current=t},[]);return U.useImperativeHandle(t,()=>({pulsate:y,start:v,stop:b}),[y,v,b]),(0,W.jsx)(de,i({className:S(V.root,o.root,s),ref:g},c,{children:(0,W.jsx)(F,{component:null,exit:!0,children:l})}))})})))()}function X(e){return v(`MuiButtonBase`,e)}var me;function he(){return(he=e((()=>{g(),C(),me=x(`MuiButtonBase`,[`root`,`disabled`,`focusVisible`])})))()}var Z,ge,_e,ve,ye,be,Q;function $(){return($=e((()=>{Z=t(n()),y(),te(),h(),a(),p(),m(),Y(),he(),ge=E(),_e=E(),ve=`action.centerRipple.children.className.component.disabled.disableRipple.disableTouchRipple.focusRipple.focusVisibleClassName.LinkComponent.onBlur.onClick.onContextMenu.onDragLeave.onFocus.onFocusVisible.onKeyDown.onKeyUp.onMouseDown.onMouseLeave.onMouseUp.onTouchEnd.onTouchMove.onTouchStart.tabIndex.TouchRippleProps.touchRippleRef.type`.split(`.`),ye=e=>{let{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:i}=e,a=_({root:[`root`,t&&`disabled`,n&&`focusVisible`]},X,i);return n&&r&&(a.root+=` ${r}`),a},be=b(`button`,{name:`MuiButtonBase`,slot:`Root`,overridesResolver:(e,t)=>t.root})({display:`inline-flex`,alignItems:`center`,justifyContent:`center`,position:`relative`,boxSizing:`border-box`,WebkitTapHighlightColor:`transparent`,backgroundColor:`transparent`,outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:`pointer`,userSelect:`none`,verticalAlign:`middle`,MozAppearance:`none`,WebkitAppearance:`none`,textDecoration:`none`,color:`inherit`,"&::-moz-focus-inner":{borderStyle:`none`},[`&.${me.disabled}`]:{pointerEvents:`none`,cursor:`default`},"@media print":{colorAdjust:`exact`}}),Q=Z.forwardRef(function(e,t){let n=ee({props:e,name:`MuiButtonBase`}),{action:a,centerRipple:o=!1,children:s,className:l,component:u=`button`,disabled:p=!1,disableRipple:m=!1,disableTouchRipple:h=!1,focusRipple:g=!1,LinkComponent:_=`a`,onBlur:v,onClick:y,onContextMenu:b,onDragLeave:te,onFocus:x,onFocusVisible:C,onKeyDown:w,onKeyUp:T,onMouseDown:E,onMouseLeave:D,onMouseUp:O,onTouchEnd:ne,onTouchMove:k,onTouchStart:re,tabIndex:ie=0,TouchRippleProps:A,touchRippleRef:j,type:M}=n,N=r(n,ve),P=Z.useRef(null),F=Z.useRef(null),I=c(F,j),{isFocusVisibleRef:L,onFocus:R,onBlur:z,ref:B}=f(),[V,H]=Z.useState(!1);p&&V&&H(!1),Z.useImperativeHandle(a,()=>({focusVisible:()=>{H(!0),P.current.focus()}}),[]);let[U,W]=Z.useState(!1);Z.useEffect(()=>{W(!0)},[]);let G=U&&!m&&!p;Z.useEffect(()=>{V&&g&&!m&&U&&F.current.pulsate()},[m,g,V,U]);function K(e,t,n=h){return d(r=>(t&&t(r),!n&&F.current&&F.current[e](r),!0))}let ae=K(`start`,E),oe=K(`stop`,b),se=K(`stop`,te),ce=K(`stop`,O),q=K(`stop`,e=>{V&&e.preventDefault(),D&&D(e)}),J=K(`start`,re),le=K(`stop`,ne),ue=K(`stop`,k),de=K(`stop`,e=>{z(e),L.current===!1&&H(!1),v&&v(e)},!1),fe=d(e=>{P.current||=e.currentTarget,R(e),L.current===!0&&(H(!0),C&&C(e)),x&&x(e)}),Y=()=>{let e=P.current;return u&&u!==`button`&&!(e.tagName===`A`&&e.href)},X=Z.useRef(!1),me=d(e=>{g&&!X.current&&V&&F.current&&e.key===` `&&(X.current=!0,F.current.stop(e,()=>{F.current.start(e)})),e.target===e.currentTarget&&Y()&&e.key===` `&&e.preventDefault(),w&&w(e),e.target===e.currentTarget&&Y()&&e.key===`Enter`&&!p&&(e.preventDefault(),y&&y(e))}),he=d(e=>{g&&e.key===` `&&F.current&&V&&!e.defaultPrevented&&(X.current=!1,F.current.stop(e,()=>{F.current.pulsate(e)})),T&&T(e),y&&e.target===e.currentTarget&&Y()&&e.key===` `&&!e.defaultPrevented&&y(e)}),Q=u;Q===`button`&&(N.href||N.to)&&(Q=_);let $={};Q===`button`?($.type=M===void 0?`button`:M,$.disabled=p):(!N.href&&!N.to&&($.role=`button`),p&&($[`aria-disabled`]=p));let xe=c(t,B,P),Se=i({},n,{centerRipple:o,component:u,disabled:p,disableRipple:m,disableTouchRipple:h,focusRipple:g,tabIndex:ie,focusVisible:V}),Ce=ye(Se);return(0,_e.jsxs)(be,i({as:Q,className:S(Ce.root,l),ownerState:Se,onBlur:de,onClick:y,onContextMenu:oe,onFocus:fe,onKeyDown:me,onKeyUp:he,onMouseDown:ae,onMouseLeave:q,onMouseUp:ce,onDragLeave:se,onTouchEnd:le,onTouchMove:ue,onTouchStart:J,ref:xe,tabIndex:p?-1:ie,type:M},$,N,{children:[s,G?(0,ge.jsx)(pe,i({ref:I,center:o},A)):null]}))})})))()}export{$ as n,Q as t};