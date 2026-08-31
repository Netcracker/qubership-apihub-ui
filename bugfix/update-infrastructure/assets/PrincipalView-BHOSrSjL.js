import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-5l_iQkTl.js";import{t as r}from"./jsx-runtime-Dw8SQ1Xa.js";import{n as i,t as a}from"./Box-B_l5-crx.js";import{r as o,t as s}from"./principals-Brat3obT.js";import{n as c,t as l}from"./TextWithOverflowTooltip-BNDwciEU.js";import{i as u,n as d,r as f,t as p}from"./RobotIcon-DtLhriFU.js";import{n as m,t as h}from"./UserView-BWrV8sVQ.js";var g,_,v,y;function b(){return(b=e((()=>{g=t(n(),1),i(),u(),c(),o(),m(),d(),_=r(),v=(0,g.memo)(({value:e})=>e?e.type===`apiKey`||e.type===`job`?(0,_.jsx)(y,{type:e.type,name:e.name}):(0,_.jsx)(h,{name:e.name||e.id,avatarUrl:e.avatarUrl}):null),y=(0,g.memo)(({name:e,type:t})=>{let n,r=(0,_.jsx)(_.Fragment,{});switch(t){case s:n=`API key: ${e}`,r=(0,_.jsx)(f,{});break;case`job`:n=`Job: ${e}`,r=(0,_.jsx)(p,{color:`muted`,fontSize:`small`})}return(0,_.jsxs)(a,{display:`flex`,alignItems:`center`,gap:`4px`,overflow:`hidden`,"data-testid":`TokenView`,children:[r,(0,_.jsx)(l,{tooltipText:n,children:n})]})}),v.__docgenInfo={description:``,methods:[],displayName:`PrincipalView`,props:{value:{required:!0,tsType:{name:`union`,raw:`Principal | undefined`,elements:[{name:`union`,raw:`User | Token | Job`,elements:[{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: typeof USER
  id: Key
  name?: string
  email?: string
  avatarUrl?: Url
}`,signature:{properties:[{key:`type`,value:{name:`USER`,required:!0}},{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!1}},{key:`email`,value:{name:`string`,required:!1}},{key:`avatarUrl`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!1}}]}}],raw:`Readonly<{
  type: typeof USER
  id: Key
  name?: string
  email?: string
  avatarUrl?: Url
}>`},{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: typeof API_KEY
  id: Key
  name: string
}`,signature:{properties:[{key:`type`,value:{name:`API_KEY`,required:!0}},{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!0}}]}}],raw:`Readonly<{
  type: typeof API_KEY
  id: Key
  name: string
}>`},{name:`Readonly`,elements:[{name:`signature`,type:`object`,raw:`{
  type: typeof JOB
  id: Key
  name: string
}`,signature:{properties:[{key:`type`,value:{name:`JOB`,required:!0}},{key:`id`,value:{name:`Readonly`,elements:[{name:`string`}],raw:`Readonly<string>`,required:!0}},{key:`name`,value:{name:`string`,required:!0}}]}}],raw:`Readonly<{
  type: typeof JOB
  id: Key
  name: string
}>`}]},{name:`undefined`}]},description:``}}}})))()}export{b as n,v as t};