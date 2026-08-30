import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-5l_iQkTl.js";import{H as r,K as i,U as a,Ut as o,V as s,W as c,Wt as l,X as u,a as d,z as f}from"./createTheme-CRX-jDaJ.js";import{t as p}from"./jsx-runtime-Dw8SQ1Xa.js";import{D as m,M as h,N as g,O as _,h as v,k as y}from"./base-BS5Q32BK.js";import{n as ee,t as b}from"./useThemeProps-Cga3Mt2f.js";import{a as x,c as te,i as S,l as C,n as ne,o as re,r as w,s as ie,t as ae,u as T}from"./TransitionGroupContext-D1_lE_RV.js";function oe(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function E(e,t){var n=function(e){return t&&(0,A.isValidElement)(e)?t(e):e},r=Object.create(null);return e&&A.Children.map(e,function(e){return e}).forEach(function(e){r[e.key]=n(e)}),r}function D(e,t){e||={},t||={};function n(n){return n in t?t[n]:e[n]}var r=Object.create(null),i=[];for(var a in e)a in t?i.length&&(r[a]=i,i=[]):i.push(a);var o,s={};for(var c in t){if(r[c])for(o=0;o<r[c].length;o++){var l=r[c][o];s[r[c][o]]=n(l)}s[c]=n(c)}for(o=0;o<i.length;o++)s[i[o]]=n(i[o]);return s}function O(e,t,n){return n[t]==null?e.props[t]:n[t]}function se(e,t){return E(e.children,function(n){return(0,A.cloneElement)(n,{onExited:t.bind(null,n),in:!0,appear:O(n,`appear`,e),enter:O(n,`enter`,e),exit:O(n,`exit`,e)})})}function k(e,t,n){var r=E(e.children),i=D(t,r);return Object.keys(i).forEach(function(a){var o=i[a];if((0,A.isValidElement)(o)){var s=a in t,c=a in r,l=t[a],u=(0,A.isValidElement)(l)&&!l.props.in;c&&(!s||u)?i[a]=(0,A.cloneElement)(o,{onExited:n.bind(null,o),in:!0,exit:O(o,`exit`,e),enter:O(o,`enter`,e)}):!c&&s&&!u?i[a]=(0,A.cloneElement)(o,{in:!1}):c&&s&&(0,A.isValidElement)(l)&&(i[a]=(0,A.cloneElement)(o,{onExited:n.bind(null,o),in:l.props.in,exit:O(o,`exit`,e),enter:O(o,`enter`,e)}))}}),i}var A;function j(){return(j=e((()=>{A=n()})))()}var M,N,P,F;function ce(){return(ce=e((()=>{a(),l(),S(),M=t(n()),ne(),j(),N=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},P={component:`div`,childFactory:function(e){return e}},F=function(e){w(t,e);function t(t,n){var r=e.call(this,t,n)||this;return r.state={contextValue:{isMounting:!0},handleExited:r.handleExited.bind(oe(r)),firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n=t.children,r=t.handleExited;return{children:t.firstRender?se(e,r):k(e,n,r),firstRender:!1}},n.handleExited=function(e,t){var n=E(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(t){var n=o({},t.children);return delete n[e.key],{children:n}}))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,i=r(e,[`component`,`childFactory`]),a=this.state.contextValue,o=N(this.state.children).map(n);return delete i.appear,delete i.enter,delete i.exit,t===null?M.createElement(ae.Provider,{value:a},o):M.createElement(ae.Provider,{value:a},M.createElement(t,i,o))},t}(M.Component),F.propTypes={},F.defaultProps=P})))()}function le(e){let{className:t,classes:n,pulsate:r=!1,rippleX:i,rippleY:a,rippleSize:o,in:s,onExited:c,timeout:l}=e,[u,d]=I.useState(!1),f=m(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),p={width:o,height:o,top:-(o/2)+a,left:-(o/2)+i},h=m(n.child,u&&n.childLeaving,r&&n.childPulsate);return!s&&!u&&d(!0),I.useEffect(()=>{if(!s&&c!=null){let e=setTimeout(c,l);return()=>{clearTimeout(e)}}},[c,s,l]),(0,L.jsx)(`span`,{className:f,style:p,children:(0,L.jsx)(`span`,{className:h})})}var I,L;function R(){return(R=e((()=>{I=t(n()),_(),L=p()})))()}var z;function B(){return(B=e((()=>{s(),z=c(`MuiTouchRipple`,[`root`,`ripple`,`rippleVisible`,`ripplePulsate`,`child`,`childLeaving`,`childPulsate`])})))()}var V,H,U,W,ue,de,fe,pe,G,K,q,J,Y,me,he;function ge(){return(ge=e((()=>{l(),a(),V=t(n()),ce(),_(),d(),y(),b(),R(),B(),H=p(),U=[`center`,`classes`,`className`],W=e=>e,G=550,K=f(ue||=W`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`),q=f(de||=W`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`),J=f(fe||=W`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`),Y=h(`span`,{name:`MuiTouchRipple`,slot:`Root`})({overflow:`hidden`,pointerEvents:`none`,position:`absolute`,zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:`inherit`}),me=h(le,{name:`MuiTouchRipple`,slot:`Ripple`})(pe||=W`
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
`,z.rippleVisible,K,G,({theme:e})=>e.transitions.easing.easeInOut,z.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,z.child,z.childLeaving,q,G,({theme:e})=>e.transitions.easing.easeInOut,z.childPulsate,J,({theme:e})=>e.transitions.easing.easeInOut),he=V.forwardRef(function(e,t){let n=ee({props:e,name:`MuiTouchRipple`}),{center:i=!1,classes:a={},className:s}=n,c=r(n,U),[l,u]=V.useState([]),d=V.useRef(0),f=V.useRef(null);V.useEffect(()=>{f.current&&=(f.current(),null)},[l]);let p=V.useRef(!1),h=V.useRef(null),g=V.useRef(null),_=V.useRef(null);V.useEffect(()=>()=>{clearTimeout(h.current)},[]);let v=V.useCallback(e=>{let{pulsate:t,rippleX:n,rippleY:r,rippleSize:i,cb:o}=e;u(e=>[...e,(0,H.jsx)(me,{classes:{ripple:m(a.ripple,z.ripple),rippleVisible:m(a.rippleVisible,z.rippleVisible),ripplePulsate:m(a.ripplePulsate,z.ripplePulsate),child:m(a.child,z.child),childLeaving:m(a.childLeaving,z.childLeaving),childPulsate:m(a.childPulsate,z.childPulsate)},timeout:G,pulsate:t,rippleX:n,rippleY:r,rippleSize:i},d.current)]),d.current+=1,f.current=o},[a]),y=V.useCallback((e={},t={},n=()=>{})=>{let{pulsate:r=!1,center:a=i||t.pulsate,fakeElement:o=!1}=t;if(e?.type===`mousedown`&&p.current){p.current=!1;return}e?.type===`touchstart`&&(p.current=!0);let s=o?null:_.current,c=s?s.getBoundingClientRect():{width:0,height:0,left:0,top:0},l,u,d;if(a||e===void 0||e.clientX===0&&e.clientY===0||!e.clientX&&!e.touches)l=Math.round(c.width/2),u=Math.round(c.height/2);else{let{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;l=Math.round(t-c.left),u=Math.round(n-c.top)}if(a)d=Math.sqrt((2*c.width**2+c.height**2)/3),d%2==0&&(d+=1);else{let e=Math.max(Math.abs((s?s.clientWidth:0)-l),l)*2+2,t=Math.max(Math.abs((s?s.clientHeight:0)-u),u)*2+2;d=Math.sqrt(e**2+t**2)}e!=null&&e.touches?g.current===null&&(g.current=()=>{v({pulsate:r,rippleX:l,rippleY:u,rippleSize:d,cb:n})},h.current=setTimeout(()=>{g.current&&=(g.current(),null)},80)):v({pulsate:r,rippleX:l,rippleY:u,rippleSize:d,cb:n})},[i,v]),b=V.useCallback(()=>{y({},{pulsate:!0})},[y]),x=V.useCallback((e,t)=>{if(clearTimeout(h.current),e?.type===`touchend`&&g.current){g.current(),g.current=null,h.current=setTimeout(()=>{x(e,t)});return}g.current=null,u(e=>e.length>0?e.slice(1):e),f.current=t},[]);return V.useImperativeHandle(t,()=>({pulsate:b,start:y,stop:x}),[b,y,x]),(0,H.jsx)(Y,o({className:m(z.root,a.root,s),ref:_},c,{children:(0,H.jsx)(F,{component:null,exit:!0,children:l})}))})})))()}function X(e){return i(`MuiButtonBase`,e)}var Z;function _e(){return(_e=e((()=>{s(),g(),Z=c(`MuiButtonBase`,[`root`,`disabled`,`focusVisible`])})))()}var Q,ve,ye,be,xe,Se,$;function Ce(){return(Ce=e((()=>{l(),a(),Q=t(n()),_(),v(),y(),b(),ie(),C(),x(),ge(),_e(),ve=p(),ye=p(),be=`action.centerRipple.children.className.component.disabled.disableRipple.disableTouchRipple.focusRipple.focusVisibleClassName.LinkComponent.onBlur.onClick.onContextMenu.onDragLeave.onFocus.onFocusVisible.onKeyDown.onKeyUp.onMouseDown.onMouseLeave.onMouseUp.onTouchEnd.onTouchMove.onTouchStart.tabIndex.TouchRippleProps.touchRippleRef.type`.split(`.`),xe=e=>{let{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:i}=e,a=u({root:[`root`,t&&`disabled`,n&&`focusVisible`]},X,i);return n&&r&&(a.root+=` ${r}`),a},Se=h(`button`,{name:`MuiButtonBase`,slot:`Root`,overridesResolver:(e,t)=>t.root})({display:`inline-flex`,alignItems:`center`,justifyContent:`center`,position:`relative`,boxSizing:`border-box`,WebkitTapHighlightColor:`transparent`,backgroundColor:`transparent`,outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:`pointer`,userSelect:`none`,verticalAlign:`middle`,MozAppearance:`none`,WebkitAppearance:`none`,textDecoration:`none`,color:`inherit`,"&::-moz-focus-inner":{borderStyle:`none`},[`&.${Z.disabled}`]:{pointerEvents:`none`,cursor:`default`},"@media print":{colorAdjust:`exact`}}),$=Q.forwardRef(function(e,t){let n=ee({props:e,name:`MuiButtonBase`}),{action:i,centerRipple:a=!1,children:s,className:c,component:l=`button`,disabled:u=!1,disableRipple:d=!1,disableTouchRipple:f=!1,focusRipple:p=!1,LinkComponent:h=`a`,onBlur:g,onClick:_,onContextMenu:v,onDragLeave:y,onFocus:b,onFocusVisible:x,onKeyDown:S,onKeyUp:C,onMouseDown:ne,onMouseLeave:w,onMouseUp:ie,onTouchEnd:ae,onTouchMove:oe,onTouchStart:E,tabIndex:D=0,TouchRippleProps:O,touchRippleRef:se,type:k}=n,A=r(n,be),j=Q.useRef(null),M=Q.useRef(null),N=te(M,se),{isFocusVisibleRef:P,onFocus:F,onBlur:ce,ref:le}=re(),[I,L]=Q.useState(!1);u&&I&&L(!1),Q.useImperativeHandle(i,()=>({focusVisible:()=>{L(!0),j.current.focus()}}),[]);let[R,z]=Q.useState(!1);Q.useEffect(()=>{z(!0)},[]);let B=R&&!d&&!u;Q.useEffect(()=>{I&&p&&!d&&R&&M.current.pulsate()},[d,p,I,R]);function V(e,t,n=f){return T(r=>(t&&t(r),!n&&M.current&&M.current[e](r),!0))}let H=V(`start`,ne),U=V(`stop`,v),W=V(`stop`,y),ue=V(`stop`,ie),de=V(`stop`,e=>{I&&e.preventDefault(),w&&w(e)}),fe=V(`start`,E),pe=V(`stop`,ae),G=V(`stop`,oe),K=V(`stop`,e=>{ce(e),P.current===!1&&L(!1),g&&g(e)},!1),q=T(e=>{j.current||=e.currentTarget,F(e),P.current===!0&&(L(!0),x&&x(e)),b&&b(e)}),J=()=>{let e=j.current;return l&&l!==`button`&&!(e.tagName===`A`&&e.href)},Y=Q.useRef(!1),me=T(e=>{p&&!Y.current&&I&&M.current&&e.key===` `&&(Y.current=!0,M.current.stop(e,()=>{M.current.start(e)})),e.target===e.currentTarget&&J()&&e.key===` `&&e.preventDefault(),S&&S(e),e.target===e.currentTarget&&J()&&e.key===`Enter`&&!u&&(e.preventDefault(),_&&_(e))}),ge=T(e=>{p&&e.key===` `&&M.current&&I&&!e.defaultPrevented&&(Y.current=!1,M.current.stop(e,()=>{M.current.pulsate(e)})),C&&C(e),_&&e.target===e.currentTarget&&J()&&e.key===` `&&!e.defaultPrevented&&_(e)}),X=l;X===`button`&&(A.href||A.to)&&(X=h);let Z={};X===`button`?(Z.type=k===void 0?`button`:k,Z.disabled=u):(!A.href&&!A.to&&(Z.role=`button`),u&&(Z[`aria-disabled`]=u));let _e=te(t,le,j),$=o({},n,{centerRipple:a,component:l,disabled:u,disableRipple:d,disableTouchRipple:f,focusRipple:p,tabIndex:D,focusVisible:I}),Ce=xe($);return(0,ye.jsxs)(Se,o({as:X,className:m(Ce.root,c),ownerState:$,onBlur:K,onClick:_,onContextMenu:U,onFocus:q,onKeyDown:me,onKeyUp:ge,onMouseDown:H,onMouseLeave:de,onMouseUp:ue,onDragLeave:W,onTouchEnd:pe,onTouchMove:G,onTouchStart:fe,ref:_e,tabIndex:u?-1:D,type:k},Z,A,{children:[s,B?(0,ve.jsx)(he,o({ref:N,center:a},O)):null]}))})})))()}export{Ce as n,$ as t};