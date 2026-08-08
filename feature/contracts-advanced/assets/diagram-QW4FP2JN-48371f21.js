import{p as w}from"./chunk-TMUBEWPD-e01595af.js";import{E as B,s as S,g as F,q as z,r as P,b as W,c as T,_ as i,l as x,F as v,G as D,x as E,K as _,k as A}from"./mermaid.core-217118be.js";import{p as N}from"./mermaid-parser.core-03bc8a6d.js";import"./iframe-c362095a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./_Set-c5d192bc.js";import"./index-356e4a49.js";import"./reduce-e37e6adf.js";import"./_baseUniq-2773af2d.js";import"./_basePickBy-2fe18712.js";import"./uniq-9f9a8bf7.js";import"./clone-c58dbcfc.js";import"./main-4b30b16b.js";var C={packet:[]},h=structuredClone(C),L=B.packet,Y=i(()=>{const t=v({...L,...D().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),G=i(()=>h.packet,"getPacket"),I=i(t=>{t.length>0&&h.packet.push(t)},"pushWord"),K=i(()=>{E(),h=structuredClone(C)},"clear"),u={pushWord:I,getPacket:G,getConfig:Y,clear:K,setAccTitle:S,getAccTitle:F,setDiagramTitle:z,getDiagramTitle:P,getAccDescription:W,setAccDescription:T},M=1e4,O=i(t=>{w(t,u);let e=-1,o=[],n=1;const{bitsPerRow:s}=u.getConfig();for(let{start:a,end:r,label:p}of t.blocks){if(r&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);for(e=r??a,x.debug(`Packet block ${a} - ${e} with label ${p}`);o.length<=s+1&&u.getPacket().length<M;){const[b,c]=q({start:a,end:r,label:p},n,s);if(o.push(b),b.end+1===n*s&&(u.pushWord(o),o=[],n++),!c)break;({start:a,end:r,label:p}=c)}}u.pushWord(o)},"populate"),q=i((t,e,o)=>{if(t.end===void 0&&(t.end=t.start),t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*o?[t,void 0]:[{start:t.start,end:e*o-1,label:t.label},{start:e*o,end:t.end,label:t.label}]},"getNextFittingBlock"),H={parse:i(async t=>{const e=await N("packet",t);x.debug(e),O(e)},"parse")},R=i((t,e,o,n)=>{const s=n.db,a=s.getConfig(),{rowHeight:r,paddingY:p,bitWidth:b,bitsPerRow:c}=a,m=s.getPacket(),l=s.getDiagramTitle(),g=r+p,d=g*(m.length+1)-(l?0:r),k=b*c+2,f=_(e);f.attr("viewbox",`0 0 ${k} ${d}`),A(f,d,k,a.useMaxWidth);for(const[$,y]of m.entries())U(f,y,$,a);f.append("text").text(l).attr("x",k/2).attr("y",d-g/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),U=i((t,e,o,{rowHeight:n,paddingX:s,paddingY:a,bitWidth:r,bitsPerRow:p,showBits:b})=>{const c=t.append("g"),m=o*(n+a)+a;for(const l of e){const g=l.start%p*r+1,d=(l.end-l.start+1)*r-s;if(c.append("rect").attr("x",g).attr("y",m).attr("width",d).attr("height",n).attr("class","packetBlock"),c.append("text").attr("x",g+d/2).attr("y",m+n/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(l.label),!b)continue;const k=l.end===l.start,f=m-2;c.append("text").attr("x",g+(k?d/2:0)).attr("y",f).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",k?"middle":"start").text(l.start),k||c.append("text").attr("x",g+d).attr("y",f).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(l.end)}},"drawWord"),X={draw:R},j={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},J=i(({packet:t}={})=>{const e=v(j,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),pt={parser:H,db:u,renderer:X,styles:J};export{pt as diagram};
//# sourceMappingURL=diagram-QW4FP2JN-48371f21.js.map
