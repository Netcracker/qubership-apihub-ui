import{n as e,r as t}from"./rolldown-runtime-BcKkbAw3.js";import{$ as n,F as r,H as i,M as a,T as o,V as s,W as c,Z as l,k as u,lt as d,pt as f,q as p,t as m,ut as h}from"./src-PtVf3uzr.js";import{n as g}from"./ordinal-DjgWE0JG.js";import{r as _}from"./path-C95sxtHQ.js";import{c as v,m as y}from"./math-BUuYSxEL.js";import{t as b}from"./arc-BtOHzuGs.js";import{n as x,t as S}from"./array-ChVDQqDp.js";import{p as C,r as w,u as T}from"./chunk-7DKRZKHE-Fv4jauqL.js";import{n as E,t as D}from"./chunk-TMUBEWPD-BwJRvT8O.js";import{n as O,t as k}from"./chunk-EJ4ZWXGL-DCwcRQsZ.js";import{n as A,t as j}from"./mermaid-parser.core-r542KZzy.js";function M(e,t){return t<e?-1:t>e?1:t>=e?0:NaN}function N(e){return e}function P(){var e=N,t=M,n=null,r=_(0),i=_(y),a=_(0);function o(o){var s,c=(o=S(o)).length,l,u,d=0,f=Array(c),p=Array(c),m=+r.apply(this,arguments),h=Math.min(y,Math.max(-y,i.apply(this,arguments)-m)),g,_=Math.min(Math.abs(h)/c,a.apply(this,arguments)),v=_*(h<0?-1:1),b;for(s=0;s<c;++s)(b=p[f[s]=s]=+e(o[s],s,o))>0&&(d+=b);for(t==null?n!=null&&f.sort(function(e,t){return n(o[e],o[t])}):f.sort(function(e,n){return t(p[e],p[n])}),s=0,u=d?(h-c*v)/d:0;s<c;++s,m=g)l=f[s],b=p[l],g=m+(b>0?b*u:0)+v,p[l]={data:o[l],index:s,value:b,startAngle:m,endAngle:g,padAngle:_};return p}return o.value=function(t){return arguments.length?(e=typeof t==`function`?t:_(+t),o):e},o.sortValues=function(e){return arguments.length?(t=e,n=null,o):t},o.sort=function(e){return arguments.length?(n=e,t=null,o):n},o.startAngle=function(e){return arguments.length?(r=typeof e==`function`?e:_(+e),o):r},o.endAngle=function(e){return arguments.length?(i=typeof e==`function`?e:_(+e),o):i},o.padAngle=function(e){return arguments.length?(a=typeof e==`function`?e:_(+e),o):a},o}function F(){return(F=e((()=>{x(),v()})))()}var I=t({diagram:()=>q}),L,R,z,B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{D(),T(),k(),l(),j(),m(),L=r.pie,R={sections:new Map,showData:!1,config:L},z=R.sections,B=R.showData,V=structuredClone(L),H={getConfig:o(()=>structuredClone(V),`getConfig`),clear:o(()=>{z=new Map,B=R.showData,u()},`clear`),setDiagramTitle:f,getDiagramTitle:p,setAccTitle:h,getAccTitle:i,setAccDescription:d,getAccDescription:s,addSection:o(({label:e,value:t})=>{z.has(e)||(z.set(e,t),n.debug(`added new section: ${e}, with value: ${t}`))},`addSection`),getSections:o(()=>z,`getSections`),setShowData:o(e=>{B=e},`setShowData`),getShowData:o(()=>B,`getShowData`)},U=o((e,t)=>{E(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},`populateDb`),W={parse:o(async e=>{let t=await A(`pie`,e);n.debug(t),U(t,H)},`parse`)},G=o(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,`getStyles`),K=o(e=>{let t=[...e.entries()].map(e=>({label:e[0],value:e[1]})).sort((e,t)=>t.value-e.value);return P().value(e=>e.value)(t)},`createPieArcs`),q={parser:W,db:H,renderer:{draw:o((e,t,r,i)=>{n.debug(`rendering pie chart
`+e);let o=i.db,s=c(),l=w(o.getConfig(),s.pie),u=O(t),d=u.append(`g`);d.attr(`transform`,`translate(225,225)`);let{themeVariables:f}=s,[p]=C(f.pieOuterStrokeWidth);p??=2;let m=l.textPosition,h=b().innerRadius(0).outerRadius(185),_=b().innerRadius(185*m).outerRadius(185*m);d.append(`circle`).attr(`cx`,0).attr(`cy`,0).attr(`r`,185+p/2).attr(`class`,`pieOuterCircle`);let v=o.getSections(),y=K(v),x=[f.pie1,f.pie2,f.pie3,f.pie4,f.pie5,f.pie6,f.pie7,f.pie8,f.pie9,f.pie10,f.pie11,f.pie12],S=g(x);d.selectAll(`mySlices`).data(y).enter().append(`path`).attr(`d`,h).attr(`fill`,e=>S(e.data.label)).attr(`class`,`pieCircle`);let T=0;v.forEach(e=>{T+=e}),d.selectAll(`mySlices`).data(y).enter().append(`text`).text(e=>(e.data.value/T*100).toFixed(0)+`%`).attr(`transform`,e=>`translate(`+_.centroid(e)+`)`).style(`text-anchor`,`middle`).attr(`class`,`slice`),d.append(`text`).text(o.getDiagramTitle()).attr(`x`,0).attr(`y`,-200).attr(`class`,`pieTitleText`);let E=d.selectAll(`.legend`).data(S.domain()).enter().append(`g`).attr(`class`,`legend`).attr(`transform`,(e,t)=>{let n=22*S.domain().length/2;return`translate(216,`+(t*22-n)+`)`});E.append(`rect`).attr(`width`,18).attr(`height`,18).style(`fill`,S).style(`stroke`,S),E.data(y).append(`text`).attr(`x`,22).attr(`y`,14).text(e=>{let{label:t,value:n}=e.data;return o.getShowData()?`${t} [${n}]`:t});let D=512+Math.max(...E.selectAll(`text`).nodes().map(e=>e?.getBoundingClientRect().width??0));u.attr(`viewBox`,`0 0 ${D} 450`),a(u,450,D,l.useMaxWidth)},`draw`)},styles:G}})))()}export{I as n,F as r,J as t};