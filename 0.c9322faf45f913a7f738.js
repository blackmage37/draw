(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{464:function(e,t,n){"use strict";t.a=e=>String.fromCharCode(65+e)},466:function(e,t,n){"use strict";const a=n(3).b.div`
`;t.a=a},467:function(e,t,n){"use strict";const a=n(3).b.div`
  display: flex;
  align-items: center;

  height: 21px;
  margin: -1px -1px -1px -1px;
  border: #aaa solid 1px;

  text-align: center;
  text-decoration: none;
  font-family: Tahoma, Arial, sans-serif;
  font-size: 12px;

  @media (max-width: 999px) {
    height: 14px;
    font-family: Roboto, sans-serif;
    font-size: 10px;
  }
`;t.a=a},468:function(e,t,n){"use strict";const a=n(3).b.div`
  display: flex;
  flex-direction: column;
  min-width: 65%;
  margin: 0px 5px 10px 5px;
`;t.a=a},469:function(e,t,n){"use strict";const a=n(3).b.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-width: 35%;
  margin: 0px 5px 10px 5px;

  @media (max-width: 999px) {
    align-items: center;
  }
`;t.a=a},470:function(e,t,n){"use strict";const a=n(3).b.div`
  display: flex;
  margin: auto;
  width: 1000px;

  @media (max-width: 999px) {
    width: 100%;
    flex-direction: column;
  }
`;t.a=a},471:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(480),i=n(3);var l=i.b.div`
  display: flex;
  flex-flow: row wrap;
  flex-wrap: nowrap;
  justify-content: center;

  & > * {
    flex: 1;
    flex-basis: 22%;
    ${e=>e.limitWidth?"max-width: 160px":""};

    @media (max-width: 999px) {
      max-width: initial;
    }
  }
`,s=n(466),c=n(476);var d=Object(i.b)(c.a)`
  transform: box-shadow 1s linear;
  ${e=>e.highlighted&&"\n  "}
`,u=n(481);const m=i.a`
  filter: grayscale(0.5);
  opacity: 0.4;
`,p=i.a`
  color: #f70;
`;var g=Object(i.b)(u.a)`
  ${e=>e.depleted&&m}
  ${e=>e.highlighted&&p}
`,f=n(477);const b=i.a`
  color: blue;
`,h=i.a`
  filter: grayscale(0.5);
  opacity: 0.4;
`;var x=Object(i.b)(f.a)`
  ${e=>e.selected&&b}
  ${e=>e.picked&&h}
`;var v=Object(a.memo)(({isCurrent:e,potNum:t,teams:n,pickedTeams:a,selectedTeams:o,background:i,color:l})=>r.a.createElement(d,{highlighted:e},r.a.createElement(g,{highlighted:e,depleted:!n||a.length===n.length,background:i,color:l},"Pot ",t+1),r.a.createElement(s.a,null,n.map(e=>{var t,n;const{name:i,country:l,shortName:s,pairing:c}=e;return r.a.createElement(x,{key:e.id,"data-cellid":e.id,title:c&&`paired with ${t=c.shortName,null!=t?t:c.name}`,selected:!!(null===(n=o)||void 0===n?void 0:n.includes(e)),picked:a.includes(e),country:null!=l?l:i},null!=s?s:i)})))),w=n(192);const y=i.b.div`
  display: flex;
  border: none;
  margin-top: 1px;
  margin-bottom: 1px;
  margin-right: -1px;

  &:last-child {
    margin-bottom: 0px;
  }
`,E=Object(i.b)(x)`
  width: 50%;
  margin-right: 0px;
`;var k=Object(a.memo)(({isCurrent:e,potNum:t,teams:n,pickedTeams:a,selectedTeams:o,background:i,color:l})=>r.a.createElement(d,{highlighted:e},r.a.createElement(g,{highlighted:e,depleted:!n||a.length===n.length,background:i,color:l},"Pot ",t+1),r.a.createElement(s.a,null,w(n.length/2).map(e=>{const t=[n[2*e],n[2*e+1]];return r.a.createElement(y,{key:e},t.map(e=>{var t;const{name:n,country:i,shortName:l,pairing:s}=e;return r.a.createElement(E,{key:e.id,"data-cellid":e.id,title:s&&`paired with ${t=s.shortName,null!=t?t:s.name}`,selected:!!o&&o.includes(e),picked:a.includes(e),country:null!=i?i:n},null!=l?l:n)}))}))));t.a=Object(a.memo)(({initialPots:e,pots:t,selectedTeams:n,currentPotNum:a,split:i})=>r.a.createElement(l,{limitWidth:!i},e.map((l,s)=>{const c=i?k:v,d=s===a,u=o(e[s],t[s],null!=n?n:[]);return r.a.createElement(c,{key:l[0].id,potNum:s,isCurrent:d,teams:l,pickedTeams:u,selectedTeams:n,background:"rgba(0, 0, 0, 0.75)",color:"#fff"})})))},472:function(e,t,n){"use strict";var a=n(0),r=n(194),o=n.n(r),i=n(478),l=n(495),s=n(493);let c;var d=(e,...t)=>{c||(c=document.createElement("style"),document.head.appendChild(c));const n=Object(s.a)("styled-element-"),a=((e,...t)=>e.reduce((e,n,a)=>`${e}${n}${l(t[a])?"":t[a]}`,""))(e,...t);return c.textContent+=`.${n}{${a}}`,n};const u=e=>((e,t)=>new Promise(n=>{e.addEventListener(t,(function a(r){e.removeEventListener(t,a),n(r)}))}))(e,"transitionend"),m=1,p=1,g=d`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  pointer-events: none;
`,f=d`
  color: initial;
  position: fixed;
  border: 1px solid transparent;
  user-select: none;
  box-sizing: border-box;
`,b=document.createElement("div");function h(e,{left:t,top:n}){const a=t+m,r=n+p;e.style.transform=`translate3d(${a}px, ${r}px, 0px)`}b.classList.add(g),document.body.insertBefore(b,document.getElementById("app"));var x=async(e,t,n)=>{const a=function(e){const{width:t,fontFamily:n}=getComputedStyle(e),a=e.cloneNode(!0);a.classList.add(f);const{style:r}=a;return r.width=t,r.fontFamily=n,a.textContent=e.textContent,h(a,e.getBoundingClientRect()),a}(e);b.appendChild(a);const r=t.getBoundingClientRect();a.style.transition=`transform ${n}ms ease-in-out`,h(a,r),await u(a),i.a&&await o()(0),b.removeChild(a)};t.a=Object(a.memo)(({from:e,to:t,duration:n,data:r,onAnimationEnd:o})=>((e=>{const t=Object(a.useRef)(!1);t.current||(t.current=!0,e())})(()=>{const a=document.querySelector(e),i=document.querySelector(t);a instanceof HTMLElement&&i instanceof HTMLElement&&x(a,i,n).then(()=>{o&&o(r)})}),null))},473:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(3),i=n(492),l=n(491),s=n(464),c=n(192);var d=o.b.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25px;
  height: 25px;
  margin: 2px;

  border-width: 1px;
  border-style: solid;
  border-radius: 100%;

  font-size: 18px;

  ${e=>e.possible?o.a`
    color: ${e.color};
  `:o.a`
    color: #000;
    border-color: rgba(0,0,0,0);
    filter: opacity(0.25);
  `}
`;const u=o.b.div`
  display: flex;
  justify-content: center;
  margin-top: 2px;
`;var m=Object(a.memo)(({numGroups:e,possibleGroups:t})=>{const n=e>>1;return r.a.createElement(u,null,c(e).map(e=>{const a=Object(s.a)(e);return r.a.createElement(d,{key:a,color:e<n?"red":"blue",possible:t.includes(e)},a)}))});const p=o.b.div`
  width: 100%;
  font-size: 1.25em;
  line-height: 150%;
  vertical-align: middle;

  margin-top: 30px;
  margin-bottom: 30px;

  user-select: none;

  @media (max-width: 999px) {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`,g=o.b.div`
  border-width: 2px;
  border-style: dashed;
  border-color: rgba(255, 0, 0, 0.5);
  padding: 10px;
`,f=o.b.span`
  display: inline-block;
`,b=o.b.strong`
  font-weight: 600;
`,h=o.b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;t.a=Object(a.memo)(({long:e,calculating:t,completed:n,selectedTeam:o,pickedGroup:c,possibleGroups:d,numGroups:u,reset:x})=>{var v,w;const y=Object(a.useRef)(null),E=Object(a.useRef)(null);Object(a.useEffect)(()=>{E.current=n?null:o},[n,o]);const k=null!=(v=E.current)?v:o;return t?r.a.createElement(p,null,r.a.createElement(g,null,r.a.createElement("div",null,"Calculation is taking too long."),r.a.createElement("div",null,"And ",r.a.createElement(i.a,{href:"https://github.com/inker/draw/issues/14",target:"_blank",rel:"noopener"},"here's why"),"."))):n?r.a.createElement(p,null,r.a.createElement(h,null,r.a.createElement("div",null,"Draw completed!"),r.a.createElement(l.a,{onClick:x},"Restart"))):null!==c?(y.current=r.a.createElement(p,null,r.a.createElement("div",null,e&&k?r.a.createElement("span",null,r.a.createElement(b,null,null!=(w=k.shortName)?w:k.name)," goes to group"):r.a.createElement("span",null,"Group")," ",r.a.createElement(b,null,Object(s.a)(c)),"!")),y.current):k?r.a.createElement(p,null,d?r.a.createElement("div",null,"Possible groups for ",r.a.createElement(f,null,r.a.createElement(b,null,k.name),":"),r.a.createElement(m,{numGroups:u,possibleGroups:d})):y.current):r.a.createElement(p,null,"Pick a ball")})},474:function(e,t,n){"use strict";var a=n(0);const r=[],o={add:"COLLECTION_ADD",remove:"COLLECTION_REMOVE"};function i(e,t){switch(t.type){case o.add:return[...e,t.payload];case o.remove:return e.filter(e=>e!==t.payload);default:throw new Error(`Unknown action: ${t.type}`)}}t.a=()=>{const[e,t]=Object(a.useReducer)(i,r),n=e=>{t({type:o.add,payload:e})},l=e=>{t({type:o.remove,payload:e})};return[e,Object(a.useMemo)(()=>({add:n,remove:l}),[])]}},475:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(3),i=n(490);var l=Object(o.b)(i.a)`
  background: ${e=>e.selected?"#004":e.notSelected?"#ddd":"radial-gradient(#fff, #004)"};

  cursor: ${e=>e.noHover?"not-allowed":"pointer"};

  &:hover {
    ${e=>!e.noHover&&o.a`
      background: radial-gradient(#ccf, #ccf);
    `};
  }
`;const s=o.b.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 999px) {
    justify-content: center;
  }
`;t.a=Object(a.memo)(({forceNoSelect:e,display:t,pot:n,selectedTeam:o,onPick:i})=>{const c=Object(a.useCallback)(e=>{const t=e.target,a=n.findIndex(e=>e.id===t.dataset.teamid);i(a,n)},[n,i]),d=e||o;return r.a.createElement(s,null,t&&n.map(t=>{var n;return r.a.createElement(l,{key:t.id,"data-teamid":t.id,selected:t===o,notSelected:e||!!o&&t!==o,noHover:!!d,onClick:d?void 0:c},null!=(n=t.shortName)?n:t.name)}))})},476:function(e,t,n){"use strict";const a=n(3).b.div`
  border: #aaa solid 1px;
  margin: 0px 5px 10px 5px;
  width: 150px;
  min-width: 0;

  @media (max-width: 999px) {
    margin: 0px 3px 6px 3px;
  }
`;t.a=a},477:function(e,t,n){"use strict";var a=n(3),r=n(494),o=n(467);var i=Object(a.b)(o.a)`
  padding-left: 3px;
  padding-right: 3px;
  text-align: left;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 999px) {
    font-family: 'Roboto Condensed', RobotoCondensed, RobotoCondensed-Regular, sans-serif;
  }
`;const l=Object(a.b)(i)`
  background-position: 3px;
  background-size: 16px;
  background-repeat: no-repeat;

  padding-left: 22px;

  @media (max-width: 999px) {
    background-position: 2px;
    background-size: 12px;
    padding-left: 16px;
  }
`,s=Object(a.b)(l)`
  ${({country:e})=>e&&a.a`
    background-image: url('${Object(r.a)(e)}');
  `}
`;t.a=s},480:function(e,t,n){var a=n(496),r=n(499),o=n(70),i=n(501),l=o((function(e,t){return i(e)?a(e,r(t,1,i,!0)):[]}));e.exports=l},481:function(e,t,n){"use strict";var a=n(3),r=n(467);const o=Object(a.b)(r.a)`
  justify-content: center;
  font-weight: 600;
  background-color: ${e=>e.background};
  color: ${e=>e.color};
`;t.a=o},490:function(e,t,n){"use strict";var a=n(3);var r=a.b.div`
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */

  width: 67px;
  height: 67px;

  margin: 2px;
  padding: 10px;

  font-family: 'Arial Narrow', 'Ubuntu Condensed', sans-serif;
  text-align: center;
  text-overflow: ellipsis;
  color: white;

  background: radial-gradient(#004, #002, #002);
  border-radius: 100%;
  cursor: pointer;
  user-select: none;

  @media (max-width: 999px) {
    flex-flow: row wrap;

    & > * {
      flex: 1;
      flex-basis: 22%;
    }

    width: 21px;
    height: 21px;
  }
`;const o=Object(a.b)(r)`
  ${e=>e.selected?a.a`
    font-size: 0.8em;
    font-weight: bold;
    color: white;
  `:a.a`
    font-size: 0;
    background: radial-gradient(#004, #002, #002);
  `}

  @media (max-width: 999px) {
    font-size: ${e=>e.selected?8:0}px;
  }
`;t.a=o},495:function(e,t){e.exports=function(e){return null==e}},496:function(e,t,n){var a=n(72),r=n(497),o=n(498),i=n(25),l=n(38),s=n(73),c=200;e.exports=function(e,t,n,d){var u=-1,m=r,p=!0,g=e.length,f=[],b=t.length;if(!g)return f;n&&(t=i(t,l(n))),d?(m=o,p=!1):t.length>=c&&(m=s,p=!1,t=new a(t));e:for(;++u<g;){var h=e[u],x=null==n?h:n(h);if(h=d||0!==h?h:0,p&&x==x){for(var v=b;v--;)if(t[v]===x)continue e;f.push(h)}else m(t,x,d)||f.push(h)}return f}},497:function(e,t,n){var a=n(71);e.exports=function(e,t){return!!(null==e?0:e.length)&&a(e,t,0)>-1}},498:function(e,t){e.exports=function(e,t,n){for(var a=-1,r=null==e?0:e.length;++a<r;)if(n(t,e[a]))return!0;return!1}},499:function(e,t,n){var a=n(74),r=n(500);e.exports=function e(t,n,o,i,l){var s=-1,c=t.length;for(o||(o=r),l||(l=[]);++s<c;){var d=t[s];n>0&&o(d)?n>1?e(d,n-1,o,i,l):a(l,d):i||(l[l.length]=d)}return l}},500:function(e,t,n){var a=n(17),r=n(40),o=n(6),i=a?a.isConcatSpreadable:void 0;e.exports=function(e){return o(e)||r(e)||!!(i&&e&&e[i])}},501:function(e,t,n){var a=n(39),r=n(11);e.exports=function(e){return r(e)&&a(e)}},502:function(e,t,n){"use strict";var a=()=>Math.random().toString(36).slice(2);var r=class{constructor(){this.callbacks=new Map}add(e,t){this.callbacks.set(e,t)}addAndGetId(e){const t=a();return this.add(t,e),t}resolve(e,t){this.getCallbackAndDelete(e)(null,t)}reject(e,t){this.getCallbackAndDelete(e)(t)}getCallbackAndDelete(e){const t=this.callbacks.get(e);if(!t)throw new Error(`no resolver with id = ${e}`);return this.callbacks.delete(e),t}};const o=(e,t)=>(n,a)=>{n?t(n):e(a)};var i=class{constructor(){this.manager=new r}getPromise(e){return new Promise(async(t,n)=>{const a=o(t,n);this.manager.add(e,a)})}getPromiseWithId(e){return new Promise(async(t,n)=>{const a=o(t,n),r=this.manager.addAndGetId(a);e&&e(r)})}resolve(e,t){this.manager.resolve(e,t)}reject(e,t){this.manager.reject(e,t)}},l=n(195),s=n.n(l);var c=class{constructor(e,t){this.asyncManager=new i,this.onMessage=e=>{const{messageId:t,data:n}=e.data;this.asyncManager.resolve(t,n)},this.worker=e,this.worker.onmessage=this.onMessage,this.timeout=t}sendAndReceive(e){const t=this.asyncManager.getPromiseWithId(t=>{this.worker.postMessage({messageId:t,data:e})});return void 0===this.timeout?t:s()(t,this.timeout)}terminate(){this.worker.terminate()}},d=n(0);t.a=e=>{const t=Object(d.useMemo)(()=>new c(new e,12e4),[]);return Object(d.useEffect)(()=>()=>{t.terminate()},[]),Object(d.useCallback)(t.sendAndReceive.bind(t),[t])}},503:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(3),i=n(464),l=n(480),s=n(192),c=n(476),d=n(481),u=n(466),m=n(477);const p=o.c`
  from {
    background-color: white;
    box-shadow: 0 0 20px #08f;
  }
  to {}
`,g=o.c`
  from {
    background-color: #ff8;
  }
  to {}
`,f=o.a`
  background-color: rgba(255, 255, 255, 0.9);
  animation: ${p} 1s ease;
  box-shadow: 0 0 5px #6af;
`,b=o.a`
  animation: ${g} 5s normal forwards;
`;var h=Object(o.b)(m.a)`
  ${e=>e.possible&&f}
  ${e=>e.picked&&b}
`,x=n(479),v=e=>{var t;return null!=(t=e.country)?t:e.name in x?e.name:void 0};var w=Object(a.memo)(({maxTeams:e,groupLetter:t,teams:n,potNum:a,possible:o,airborneTeams:i,background:m,color:p})=>{const g=l(n,i);return r.a.createElement(c.a,null,r.a.createElement(d.a,{background:m,color:p},"Group"," ",t),r.a.createElement(u.a,null,g.map(e=>{var t;return r.a.createElement(h,{country:v(e),picked:!0},null!=(t=e.shortName)?t:e.name)}),s(g.length,e).map(e=>r.a.createElement(h,{key:e,possible:e===a&&o,"data-cellid":`${t}${e}`}))))});const y=o.b.div`
  display: flex;
  flex-flow: row wrap;

  & > * {
    flex: 1;
    flex-basis: 22%;
  }
`;t.a=Object(a.memo)(({maxTeams:e,currentPotNum:t,groups:n,possibleGroups:a,airborneTeams:o,groupColors:l})=>r.a.createElement(y,null,n&&n.map((s,c)=>{const d=Object(i.a)(c),u=l&&l[~~(c/n.length*l.length)];return r.a.createElement(w,{key:d,maxTeams:e,groupLetter:d,teams:s,potNum:t,possible:null!==a&&a.includes(c),airborneTeams:o,background:u})})))},504:function(e,t,n){"use strict";var a=n(0),r=n(194),o=n.n(r);const i={team:null,isLong:!1},l={set:"TIMEOUT_VALUE_SET",reset:"TIMEOUT_RESET"};function s(e,t){switch(t.type){case l.set:return{team:t.payload,isLong:!!t.payload&&t.payload===e.team};case l.reset:return i;default:throw new Error(`Unknown action: ${t}`)}}t.a=e=>{const[t,n]=Object(a.useReducer)(s,i),r=async t=>{n({type:l.set,payload:t}),await o()(e),n({type:l.set,payload:t})},c=()=>{n({type:l.reset})},d=Object(a.useMemo)(()=>({set:r,reset:c}),[]);return[t.isLong,d]}}}]);