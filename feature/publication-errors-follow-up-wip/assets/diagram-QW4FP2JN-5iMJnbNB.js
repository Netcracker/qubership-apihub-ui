import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{$ as t,F as n,H as r,M as i,T as a,U as o,V as s,Z as c,k as l,lt as u,pt as d,q as f,ut as p}from"./src-PtVf3uzr.js";import{r as m,u as h}from"./chunk-7DKRZKHE-Fv4jauqL.js";import{n as g,t as _}from"./chunk-TMUBEWPD-BwJRvT8O.js";import{n as v,t as y}from"./chunk-EJ4ZWXGL-DCwcRQsZ.js";import{n as b,t as x}from"./mermaid-parser.core-r542KZzy.js";var S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{_(),h(),y(),c(),x(),S={packet:[]},C=structuredClone(S),w=n.packet,T={pushWord:a(e=>{e.length>0&&C.packet.push(e)},`pushWord`),getPacket:a(()=>C.packet,`getPacket`),getConfig:a(()=>{let e=m({...w,...o().packet});return e.showBits&&(e.paddingY+=10),e},`getConfig`),clear:a(()=>{l(),C=structuredClone(S)},`clear`),setAccTitle:p,getAccTitle:r,setDiagramTitle:d,getDiagramTitle:f,getAccDescription:s,setAccDescription:u},E=1e4,D=a(e=>{g(e,T);let n=-1,r=[],i=1,{bitsPerRow:a}=T.getConfig();for(let{start:o,end:s,label:c}of e.blocks){if(s&&s<o)throw Error(`Packet block ${o} - ${s} is invalid. End must be greater than start.`);if(o!==n+1)throw Error(`Packet block ${o} - ${s??o} is not contiguous. It should start from ${n+1}.`);for(n=s??o,t.debug(`Packet block ${o} - ${n} with label ${c}`);r.length<=a+1&&T.getPacket().length<E;){let[e,t]=O({start:o,end:s,label:c},i,a);if(r.push(e),e.end+1===i*a&&(T.pushWord(r),r=[],i++),!t)break;({start:o,end:s,label:c}=t)}}T.pushWord(r)},`populate`),O=a((e,t,n)=>{if(e.end===void 0&&(e.end=e.start),e.start>e.end)throw Error(`Block start ${e.start} is greater than block end ${e.end}.`);return e.end+1<=t*n?[e,void 0]:[{start:e.start,end:t*n-1,label:e.label},{start:t*n,end:e.end,label:e.label}]},`getNextFittingBlock`),k={parse:a(async e=>{let n=await b(`packet`,e);t.debug(n),D(n)},`parse`)},A=a((e,t,n,r)=>{let a=r.db,o=a.getConfig(),{rowHeight:s,paddingY:c,bitWidth:l,bitsPerRow:u}=o,d=a.getPacket(),f=a.getDiagramTitle(),p=s+c,m=p*(d.length+1)-(f?0:s),h=l*u+2,g=v(t);g.attr(`viewbox`,`0 0 ${h} ${m}`),i(g,m,h,o.useMaxWidth);for(let[e,t]of d.entries())j(g,t,e,o);g.append(`text`).text(f).attr(`x`,h/2).attr(`y`,m-p/2).attr(`dominant-baseline`,`middle`).attr(`text-anchor`,`middle`).attr(`class`,`packetTitle`)},`draw`),j=a((e,t,n,{rowHeight:r,paddingX:i,paddingY:a,bitWidth:o,bitsPerRow:s,showBits:c})=>{let l=e.append(`g`),u=n*(r+a)+a;for(let e of t){let t=e.start%s*o+1,n=(e.end-e.start+1)*o-i;if(l.append(`rect`).attr(`x`,t).attr(`y`,u).attr(`width`,n).attr(`height`,r).attr(`class`,`packetBlock`),l.append(`text`).attr(`x`,t+n/2).attr(`y`,u+r/2).attr(`class`,`packetLabel`).attr(`dominant-baseline`,`middle`).attr(`text-anchor`,`middle`).text(e.label),!c)continue;let a=e.end===e.start,d=u-2;l.append(`text`).attr(`x`,t+(a?n/2:0)).attr(`y`,d).attr(`class`,`packetByte start`).attr(`dominant-baseline`,`auto`).attr(`text-anchor`,a?`middle`:`start`).text(e.start),a||l.append(`text`).attr(`x`,t+n).attr(`y`,d).attr(`class`,`packetByte end`).attr(`dominant-baseline`,`auto`).attr(`text-anchor`,`end`).text(e.end)}},`drawWord`),M={draw:A},N={byteFontSize:`10px`,startByteColor:`black`,endByteColor:`black`,labelColor:`black`,labelFontSize:`12px`,titleColor:`black`,titleFontSize:`14px`,blockStrokeColor:`black`,blockStrokeWidth:`1`,blockFillColor:`#efefef`},P={parser:k,db:T,renderer:M,styles:a(({packet:e}={})=>{let t=m(N,e);return`
	.packetByte {
		font-size: ${t.byteFontSize};
	}
	.packetByte.start {
		fill: ${t.startByteColor};
	}
	.packetByte.end {
		fill: ${t.endByteColor};
	}
	.packetLabel {
		fill: ${t.labelColor};
		font-size: ${t.labelFontSize};
	}
	.packetTitle {
		fill: ${t.titleColor};
		font-size: ${t.titleFontSize};
	}
	.packetBlock {
		stroke: ${t.blockStrokeColor};
		stroke-width: ${t.blockStrokeWidth};
		fill: ${t.blockFillColor};
	}
	`},`styles`)}})))()}F();export{P as diagram};