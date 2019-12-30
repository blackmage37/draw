(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{464:function(e,t,n){"use strict";t.a=e=>String.fromCharCode(65+e)},466:function(e,t,n){"use strict";const a=n(3).b.div`
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
`,c=n(466),s=n(476);var d=Object(i.b)(s.a)`
  transform: box-shadow 1s linear;
  ${e=>e.highlighted&&"\n  "}
`,u=n(481);const m=i.a`
  filter: grayscale(0.5);
  opacity: 0.4;
`,p=i.a`
  color: #f70;
`;var f=Object(i.b)(u.a)`
  ${e=>e.depleted&&m}
  ${e=>e.highlighted&&p}
`,x=n(477);const b=i.a`
  color: blue;
`,g=i.a`
  filter: grayscale(0.5);
  opacity: 0.4;
`;var h=Object(i.b)(x.a)`
  ${e=>e.selected&&b}
  ${e=>e.picked&&g}
`;var v=Object(a.memo)(({isCurrent:e,potNum:t,teams:n,pickedTeams:a,selectedTeams:o,background:i,color:l})=>r.a.createElement(d,{highlighted:e},r.a.createElement(f,{highlighted:e,depleted:!n||a.length===n.length,background:i,color:l},"Pot ",t+1),r.a.createElement(c.a,null,n.map(e=>{var t,n;const{name:i,country:l,shortName:c,pairing:s}=e;return r.a.createElement(h,{key:e.id,"data-cellid":e.id,title:s&&`paired with ${t=s.shortName,null!=t?t:s.name}`,selected:!!(null===(n=o)||void 0===n?void 0:n.includes(e)),picked:a.includes(e),country:null!=l?l:i},null!=c?c:i)})))),w=n(192);const y=i.b.div`
  display: flex;
  border: none;
  margin-top: 1px;
  margin-bottom: 1px;
  margin-right: -1px;

  &:last-child {
    margin-bottom: 0px;
  }
`,E=Object(i.b)(h)`
  width: 50%;
  margin-right: 0px;
`;var k=Object(a.memo)(({isCurrent:e,potNum:t,teams:n,pickedTeams:a,selectedTeams:o,background:i,color:l})=>r.a.createElement(d,{highlighted:e},r.a.createElement(f,{highlighted:e,depleted:!n||a.length===n.length,background:i,color:l},"Pot ",t+1),r.a.createElement(c.a,null,w(n.length/2).map(e=>{const t=[n[2*e],n[2*e+1]];return r.a.createElement(y,{key:e},t.map(e=>{var t;const{name:n,country:i,shortName:l,pairing:c}=e;return r.a.createElement(E,{key:e.id,"data-cellid":e.id,title:c&&`paired with ${t=c.shortName,null!=t?t:c.name}`,selected:!!o&&o.includes(e),picked:a.includes(e),country:null!=i?i:n},null!=l?l:n)}))}))));t.a=Object(a.memo)(({initialPots:e,pots:t,selectedTeams:n,currentPotNum:a,split:i})=>r.a.createElement(l,{limitWidth:!i},e.map((l,c)=>{const s=i?k:v,d=c===a,u=o(e[c],t[c],null!=n?n:[]);return r.a.createElement(s,{key:l[0].id,potNum:c,isCurrent:d,teams:l,pickedTeams:u,selectedTeams:n,background:"rgba(0, 0, 0, 0.75)",color:"#fff"})})))},472:function(e,t,n){"use strict";var a=n(0),r=n(194),o=n.n(r),i=n(478),l=n(495),c=n(493);let s;var d=(e,...t)=>{s||(s=document.createElement("style"),document.head.appendChild(s));const n=Object(c.a)("styled-element-"),a=((e,...t)=>e.reduce((e,n,a)=>`${e}${n}${l(t[a])?"":t[a]}`,""))(e,...t);return s.textContent+=`.${n}{${a}}`,n};const u=e=>((e,t)=>new Promise(n=>{e.addEventListener(t,(function a(r){e.removeEventListener(t,a),n(r)}))}))(e,"transitionend"),m=1,p=1,f=d`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  pointer-events: none;
`,x=d`
  color: initial;
  position: fixed;
  border: 1px solid transparent;
  user-select: none;
  box-sizing: border-box;
`,b=document.createElement("div");function g(e,{left:t,top:n}){const a=t+m,r=n+p;e.style.transform=`translate3d(${a}px, ${r}px, 0px)`}b.classList.add(f),document.body.insertBefore(b,document.getElementById("app"));var h=async(e,t,n)=>{const a=function(e){const{width:t,fontFamily:n}=getComputedStyle(e),a=e.cloneNode(!0);a.classList.add(x);const{style:r}=a;return r.width=t,r.fontFamily=n,a.textContent=e.textContent,g(a,e.getBoundingClientRect()),a}(e);b.appendChild(a);const r=t.getBoundingClientRect();a.style.transition=`transform ${n}ms ease-in-out`,g(a,r),await u(a),i.a&&await o()(0),b.removeChild(a)};t.a=Object(a.memo)(({from:e,to:t,duration:n,data:r,onAnimationEnd:o})=>((e=>{const t=Object(a.useRef)(!1);t.current||(t.current=!0,e())})(()=>{const a=document.querySelector(e),i=document.querySelector(t);a instanceof HTMLElement&&i instanceof HTMLElement&&h(a,i,n).then(()=>{o&&o(r)})}),null))},473:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(3),i=n(492),l=n(491),c=n(464),s=n(192);var d=o.b.div`
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
`;var m=Object(a.memo)(({numGroups:e,possibleGroups:t})=>{const n=e>>1;return r.a.createElement(u,null,s(e).map(e=>{const a=Object(c.a)(e);return r.a.createElement(d,{key:a,color:e<n?"red":"blue",possible:t.includes(e)},a)}))});const p=o.b.div`
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
`,f=o.b.div`
  border-width: 2px;
  border-style: dashed;
  border-color: rgba(255, 0, 0, 0.5);
  padding: 10px;
`,x=o.b.span`
  display: inline-block;
`,b=o.b.strong`
  font-weight: 600;
`,g=o.b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;t.a=Object(a.memo)(({long:e,calculating:t,completed:n,selectedTeam:o,pickedGroup:s,possibleGroups:d,numGroups:u,reset:h})=>{var v,w;const y=Object(a.useRef)(null),E=Object(a.useRef)(null);Object(a.useEffect)(()=>{E.current=n?null:o},[n,o]);const k=null!=(v=E.current)?v:o;return t?r.a.createElement(p,null,r.a.createElement(f,null,r.a.createElement("div",null,"Calculation is taking too long."),r.a.createElement("div",null,"And ",r.a.createElement(i.a,{href:"https://github.com/inker/draw/issues/14",target:"_blank",rel:"noopener"},"here's why"),"."))):n?r.a.createElement(p,null,r.a.createElement(g,null,r.a.createElement("div",null,"Draw completed!"),r.a.createElement(l.a,{onClick:h},"Restart"))):null!==s?(y.current=r.a.createElement(p,null,r.a.createElement("div",null,e&&k?r.a.createElement("span",null,r.a.createElement(b,null,null!=(w=k.shortName)?w:k.name)," goes to group"):r.a.createElement("span",null,"Group")," ",r.a.createElement(b,null,Object(c.a)(s)),"!")),y.current):k?r.a.createElement(p,null,d?r.a.createElement("div",null,"Possible groups for ",r.a.createElement(x,null,r.a.createElement(b,null,k.name),":"),r.a.createElement(m,{numGroups:u,possibleGroups:d})):y.current):r.a.createElement(p,null,"Pick a ball")})},474:function(e,t,n){"use strict";var a=n(0);const r=[],o={add:"COLLECTION_ADD",remove:"COLLECTION_REMOVE"};function i(e,t){switch(t.type){case o.add:return[...e,t.payload];case o.remove:return e.filter(e=>e!==t.payload);default:throw new Error(`Unknown action: ${t.type}`)}}t.a=()=>{const[e,t]=Object(a.useReducer)(i,r),n=e=>{t({type:o.add,payload:e})},l=e=>{t({type:o.remove,payload:e})};return[e,Object(a.useMemo)(()=>({add:n,remove:l}),[])]}},475:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(3),i=n(490);var l=Object(o.b)(i.a)`
  background: ${e=>e.selected?"#004":e.notSelected?"#ddd":"radial-gradient(#fff, #004)"};

  cursor: ${e=>e.noHover?"not-allowed":"pointer"};

  &:hover {
    ${e=>!e.noHover&&o.a`
      background: radial-gradient(#ccf, #ccf);
    `};
  }
`;const c=o.b.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 999px) {
    justify-content: center;
  }
`;t.a=Object(a.memo)(({forceNoSelect:e,display:t,pot:n,selectedTeam:o,onPick:i})=>{const s=Object(a.useCallback)(e=>{const t=e.target,a=n.findIndex(e=>e.id===t.dataset.teamid);i(a,n)},[n,i]),d=e||o;return r.a.createElement(c,null,t&&n.map(t=>{var n;return r.a.createElement(l,{key:t.id,"data-teamid":t.id,selected:t===o,notSelected:e||!!o&&t!==o,noHover:!!d,onClick:d?void 0:s},null!=(n=t.shortName)?n:t.name)}))})},476:function(e,t,n){"use strict";const a=n(3).b.div`
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
`,c=Object(a.b)(l)`
  ${({country:e})=>e&&a.a`
    background-image: url('${Object(r.a)(e)}');
  `}
`;t.a=c},480:function(e,t,n){var a=n(496),r=n(499),o=n(70),i=n(501),l=o((function(e,t){return i(e)?a(e,r(t,1,i,!0)):[]}));e.exports=l},481:function(e,t,n){"use strict";var a=n(3),r=n(467);const o=Object(a.b)(r.a)`
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
`;t.a=o},495:function(e,t){e.exports=function(e){return null==e}},496:function(e,t,n){var a=n(72),r=n(497),o=n(498),i=n(25),l=n(38),c=n(73),s=200;e.exports=function(e,t,n,d){var u=-1,m=r,p=!0,f=e.length,x=[],b=t.length;if(!f)return x;n&&(t=i(t,l(n))),d?(m=o,p=!1):t.length>=s&&(m=c,p=!1,t=new a(t));e:for(;++u<f;){var g=e[u],h=null==n?g:n(g);if(g=d||0!==g?g:0,p&&h==h){for(var v=b;v--;)if(t[v]===h)continue e;x.push(g)}else m(t,h,d)||x.push(g)}return x}},497:function(e,t,n){var a=n(71);e.exports=function(e,t){return!!(null==e?0:e.length)&&a(e,t,0)>-1}},498:function(e,t){e.exports=function(e,t,n){for(var a=-1,r=null==e?0:e.length;++a<r;)if(n(t,e[a]))return!0;return!1}},499:function(e,t,n){var a=n(74),r=n(500);e.exports=function e(t,n,o,i,l){var c=-1,s=t.length;for(o||(o=r),l||(l=[]);++c<s;){var d=t[c];n>0&&o(d)?n>1?e(d,n-1,o,i,l):a(l,d):i||(l[l.length]=d)}return l}},500:function(e,t,n){var a=n(17),r=n(40),o=n(6),i=a?a.isConcatSpreadable:void 0;e.exports=function(e){return o(e)||r(e)||!!(i&&e&&e[i])}},501:function(e,t,n){var a=n(39),r=n(11);e.exports=function(e){return r(e)&&a(e)}},507:function(e,t,n){"use strict";function a(e,[t,n],r,o){const i=r.findIndex(e=>1===e.length);if(!o(e,r,i))return!1;const l=[...r],c=l[i][0];return l[i]=[c,e],i+1===l.length||function([e,t],n,r){const o=n.findIndex(e=>!e.length),[i,...l]=t,c=[...n];return c[o]=[i],e.some(t=>a(t,[e,l],c,r))}([t.filter(t=>t!==e),n],l,o)}t.a=([e,t],n,r)=>e.map((e,t)=>t).filter(o=>a(e[o],[e,t],n,r))},508:function(e,t,n){"use strict";const a=n(3).b.div`
  margin-top: 10px;
  margin-bottom: 5px;
  user-select: none;
`;t.a=a},509:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(3),i=n(476),l=n(467),c=n(477);const s=o.c`
  from {
    background-color: white;
    box-shadow: 0 0 20px #08f;
  }
  to {}
`,d=o.c`
  from {
    background-color: #ff8;
  }
  to {}
`,u=o.a`
  background-color: rgba(255, 255, 255, 0.9);
  animation: ${s} 1s ease;
  box-shadow: 0 0 5px #6af;
`,m=o.a`
  animation: ${d} 5s normal forwards;
`;var p=Object(o.b)(c.a)`
  width: 150px;
  ${e=>e.possible&&u}
  ${e=>e.picked&&m}
`;const f=Object(o.b)(l.a)`
  display: flex;
`,x=o.b.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  height: 19px;
  text-align: center;
  font-family: Tahoma, Arial, sans-serif;
  font-size: 12px;
  color: #444;

  &:before {
    content: "v";
  }
`,b=Object(o.b)(p)`
  border-right: 1px solid rgba(0, 0, 0, 0);
`,g=Object(o.b)(p)`
  border-left: 1px solid rgba(0, 0, 0, 0);
`;var h=Object(a.memo)(({index:e,teams:t,airborneTeams:n})=>{var a,o;const[i,l]=null!=t?t:[],c=i&&!n.includes(i),s=l&&!n.includes(l);return r.a.createElement(f,null,r.a.createElement(b,{country:c?i.country:void 0,picked:c,"data-cellid":`${e}ru`},c&&(null!=(a=i.shortName)?a:i.name)),r.a.createElement(x,null),r.a.createElement(g,{country:s?l.country:void 0,picked:s,"data-cellid":`${e}gw`},s&&(null!=(o=l.shortName)?o:l.name)))});const v=Object(o.b)(i.a)`
  width: auto;
  align-self: center;
  max-width: initial;
`;t.a=Object(a.memo)(({matchups:e,airborneTeams:t})=>r.a.createElement(v,null,e&&e.map((e,n)=>r.a.createElement(h,{index:n,teams:e,airborneTeams:t}))))},510:function(e,t,n){"use strict";var a=n(76);const r=e=>"Ukraine"===e.country,o=e=>"Russia"===e.country,i=()=>a,l=e=>"Russia"===e.country?r:"Ukraine"===e.country?o:a;var c=e=>(e=>e>=2014)(e)?l:i;t.a=e=>{const t=c(e),n=(e,n)=>0===e.length||1===e.length&&((e,n)=>e.country!==n.country&&e.group!==n.group&&!t(e)(n))(n,e[0]);return(e,t,a)=>n(t[a],e)}}}]);