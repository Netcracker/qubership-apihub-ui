import{r as c}from"./index-37ba2b57.js";function e(s,o,i,n){const t=c.useCallback(r=>{const[u]=r;u.isIntersecting&&i&&!o&&(n==null||n())},[i,o,n]);c.useEffect(()=>{const r=new IntersectionObserver(t);return r&&s.current&&r.observe(s.current),()=>{r&&r.disconnect()}},[t,s])}export{e as u};
//# sourceMappingURL=useIntersectionObserver-b83c97e3.js.map
