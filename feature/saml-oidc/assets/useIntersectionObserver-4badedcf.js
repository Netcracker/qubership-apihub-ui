import{r as c}from"./index-76fb7be0.js";function e(s,o,i,n){const t=c.useCallback(r=>{const[u]=r;u.isIntersecting&&i&&!o&&(n==null||n())},[i,o,n]);c.useEffect(()=>{const r=new IntersectionObserver(t);return r&&s.current&&r.observe(s.current),()=>{r&&r.disconnect()}},[t,s])}export{e as u};
//# sourceMappingURL=useIntersectionObserver-4badedcf.js.map
