(window.webpackJsonp=window.webpackJsonp||[]).push([["app"],{16:function(e,t,n){"use strict";var a=n(0),i=n(62);t.a=(e=>{let t=e;const n=[];return()=>{const e=Object(a.useState)(t)[1];Object(a.useEffect)(()=>(n.push(e),()=>{i(n,e)}),[]);const l=Object(a.useCallback)(e=>{t={...t,...e};for(const e of n)e(t)},[t,n]);return[t,l]}})({initial:!0,waiting:!0,error:null})},191:function(e,t,n){"use strict";n.r(t);n(77);var a=n(0),i=n.n(a),l=n(61),r=n.n(l),o=n(3),c=n(16);var s=o.b.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${1e8};
`;const u=o.c`
  from {
    opacity: 0;
  }
  to {}
`;var m=Object(o.b)(s)`
  background-color: white;
  opacity: 0.75;

  ${e=>e.animate&&o.a`
    animation: ${u} 0.25s ease-out;
  `}
`;var b=Object(o.b)(s)`
  display: flex;
  justify-content: center;
  align-items: center;
`;var d=Object(a.memo)(({noAnimation:e,children:t})=>i.a.createElement("div",null,i.a.createElement(m,{animate:!e}),i.a.createElement(b,null,t)));const f=o.b.div`
  font-size: 5vw;
  color: #808080;
  user-select: none;

  @media (max-width: 999px) {
    font-size: 8vw;
  }
`;var v=Object(a.memo)(({noAnimation:e,children:t})=>i.a.createElement(d,{noAnimation:e},i.a.createElement(f,null,t)));var p=Object(a.memo)(()=>{const[e]=Object(c.a)(),t=Object(a.useCallback)(t=>i.a.createElement(v,Object.assign({},t,{noAnimation:e.initial})),[e.initial]),{error:n,waiting:l}=e;return navigator.onLine?n?i.a.createElement(t,null,n):l?i.a.createElement(t,null,"wait..."):null:i.a.createElement(t,null,"you're offline")});const E=Object(a.lazy)(()=>Promise.all([n.e("routes~version"),n.e("vendor"),n.e("routes")]).then(n.bind(null,527))),j=Object(a.lazy)(()=>Promise.all([n.e("routes~version"),n.e("version")]).then(n.bind(null,526))),w=o.b.div`
  font-family: Tahoma, Arial, sans-serif;

  & * {
    box-sizing: border-box;
  }
`;var O=()=>{const[e,t]=Object(c.a)();return Object(a.useEffect)(()=>{e.initial&&!e.waiting&&t({initial:!1})},[e.waiting]),i.a.createElement(w,null,i.a.createElement(p,null),i.a.createElement(a.Suspense,{fallback:!1},i.a.createElement(E,null)),i.a.createElement(a.Suspense,{fallback:!1},i.a.createElement(j,null)))};r.a.render(i.a.createElement(O,null),document.getElementById("app"))}},[[191,"runtime~app","react","vendor"]]]);