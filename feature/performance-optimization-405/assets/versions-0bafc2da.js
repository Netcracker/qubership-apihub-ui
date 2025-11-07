function s(e,n=!0){if(!e)return{versionKey:"",revisionKey:""};const[i,t]=e.split("@");return{versionKey:n?i:e,revisionKey:t}}function r(e){return e.map(o)}function o(e){const{key:n,latestRevision:i}=e,{versionKey:t}=s(n,i);return{...e,key:t}}export{s as g,r as h};
//# sourceMappingURL=versions-0bafc2da.js.map
