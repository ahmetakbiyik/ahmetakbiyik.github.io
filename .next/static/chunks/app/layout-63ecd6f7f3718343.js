(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4780:function(t,r,n){"use strict";n.d(r,{F:function(){return y},f:function(){return $}});var s=n(2026);let a=["light","dark"],o="(prefers-color-scheme: dark)",l="undefined"==typeof window,i=(0,s.createContext)(void 0),c={setTheme:t=>{},themes:[]},y=()=>{var t;return null!==(t=(0,s.useContext)(i))&&void 0!==t?t:c},$=t=>(0,s.useContext)(i)?s.createElement(s.Fragment,null,t.children):s.createElement(f,t),d=["light","dark"],f=({forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:n=!0,enableColorScheme:l=!0,storageKey:c="theme",themes:m=d,defaultTheme:h=n?"system":"light",attribute:v="data-theme",value:x,children:g,nonce:k})=>{let[w,j]=(0,s.useState)(()=>S(c,h)),[N,E]=(0,s.useState)(()=>S(c)),_=x?Object.values(x):m,C=(0,s.useCallback)(t=>{let s=t;if(!s)return;"system"===t&&n&&(s=p());let o=x?x[s]:s,i=r?b():null,c=document.documentElement;if("class"===v?(c.classList.remove(..._),o&&c.classList.add(o)):o?c.setAttribute(v,o):c.removeAttribute(v),l){let t=a.includes(h)?h:null,r=a.includes(s)?s:t;c.style.colorScheme=r}null==i||i()},[]),T=(0,s.useCallback)(t=>{j(t);try{localStorage.setItem(c,t)}catch(t){}},[t]),P=(0,s.useCallback)(r=>{let s=p(r);E(s),"system"===w&&n&&!t&&C("system")},[w,t]);(0,s.useEffect)(()=>{let t=window.matchMedia(o);return t.addListener(P),P(t),()=>t.removeListener(P)},[P]),(0,s.useEffect)(()=>{let e=t=>{t.key===c&&T(t.newValue||h)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[T]),(0,s.useEffect)(()=>{C(null!=t?t:w)},[t,w]);let O=(0,s.useMemo)(()=>({theme:w,setTheme:T,forcedTheme:t,resolvedTheme:"system"===w?N:w,themes:n?[...m,"system"]:m,systemTheme:n?N:void 0}),[w,T,t,N,n,m]);return s.createElement(i.Provider,{value:O},s.createElement(u,{forcedTheme:t,disableTransitionOnChange:r,enableSystem:n,enableColorScheme:l,storageKey:c,themes:m,defaultTheme:h,attribute:v,value:x,children:g,attrs:_,nonce:k}),g)},u=(0,s.memo)(({forcedTheme:t,storageKey:r,attribute:n,enableSystem:l,enableColorScheme:i,defaultTheme:c,value:d,attrs:u,nonce:m})=>{let h="system"===c,v="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${u.map(t=>`'${t}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,x=i?a.includes(c)&&c?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${c}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",$=(t,r=!1,s=!0)=>{let o=d?d[t]:t,l=r?t+"|| ''":`'${o}'`,c="";return i&&s&&!r&&a.includes(t)&&(c+=`d.style.colorScheme = '${t}';`),"class"===n?c+=r||o?`c.add(${l})`:"null":o&&(c+=`d[s](n,${l})`),c},g=t?`!function(){${v}${$(t)}}()`:l?`!function(){try{${v}var e=localStorage.getItem('${r}');if('system'===e||(!e&&${h})){var t='${o}',m=window.matchMedia(t);if(m.media!==t||m.matches){${$("dark")}}else{${$("light")}}}else if(e){${d?`var x=${JSON.stringify(d)};`:""}${$(d?"x[e]":"e",!0)}}${h?"":"else{"+$(c,!1,!1)+"}"}${x}}catch(e){}}()`:`!function(){try{${v}var e=localStorage.getItem('${r}');if(e){${d?`var x=${JSON.stringify(d)};`:""}${$(d?"x[e]":"e",!0)}}else{${$(c,!1,!1)};}${x}}catch(t){}}();`;return s.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:g}})},()=>!0),S=(t,r)=>{let n;if(!l){try{n=localStorage.getItem(t)||void 0}catch(t){}return n||r}},b=()=>{let t=document.createElement("style");return t.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},p=t=>(t||(t=window.matchMedia(o)),t.matches?"dark":"light")},3822:function(t,r,n){Promise.resolve().then(n.t.bind(n,617,23)),Promise.resolve().then(n.bind(n,3653)),Promise.resolve().then(n.bind(n,7179)),Promise.resolve().then(n.bind(n,4726)),Promise.resolve().then(n.bind(n,5101)),Promise.resolve().then(n.bind(n,6241)),Promise.resolve().then(n.t.bind(n,5727,23))},3653:function(t,r,n){"use strict";n.r(r),n.d(r,{default:function(){return Providers}});var s=n(5667),a=n(4780);function Providers(t){let{children:r}=t;return(0,s.jsx)(a.f,{defaultTheme:"system",attribute:"class",disableTransitionOnChange:!0,children:r})}},7179:function(t,r,n){"use strict";n.r(r);var s=n(5667),a=n(2353),o=n.n(a),l=n(2026),i=n(6612);r.default=t=>{let{enabled:r}=t,n=(0,i.useRouter)(),[a,c]=(0,l.useState)(r),handleExit=()=>{n.refresh(),c(!1)};return a&&(0,s.jsx)("div",{className:"absolute w-full z-20 top-28 md:top-20 left-0 text-fore-subtle bg-back-subtle px-8",children:(0,s.jsx)("div",{className:"py-2 text-center text-sm",children:(0,s.jsxs)("div",{children:["You're in preview mode."," ",(0,s.jsx)(o(),{onClick:()=>handleExit(),href:"/api/disable-draft",className:"underline hover:text-accent transition-colors cursor-pointer",children:"Click here"})," ","to exit."]})})})}},4726:function(t,r,n){"use strict";n.r(r),n.d(r,{routes:function(){return i}});var s=n(5667),a=n(2353),o=n.n(a),l=n(6612);let i=[{path:"/",label:"Home"},{path:"/posts",label:"Posts"},{path:"/works",label:"Works"},{path:"/about",label:"About"}];r.default=()=>{let removeFocus=t=>{t.currentTarget.blur()},t=(0,l.usePathname)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"relative items-center justify-start flex-grow hidden space-x-6 md:flex",children:i.map(r=>(0,s.jsx)(o(),{href:r.path,className:r.path===t?"text-fore-primary transition-colors font-bold tracking-wide":"text-fore-subtle transition-colors tracking-wide nav--item",onClick:removeFocus,children:r.label},r.path))})})}},5101:function(t,r,n){"use strict";n.r(r),n.d(r,{default:function(){return components_Navbar}});var s=n(5667),a=n(2026),o=n(3284),l=n(6241),i=n(2353),c=n.n(i),components_Logo=()=>(0,s.jsx)(c(),{href:"/","aria-label":"Website logo, go back to homepage.",className:"flex items-center border-white group focus-visible:outline-accent",children:(0,s.jsxs)("div",{className:"overflow-hidden transition ease-in-out rounded-full  hover:opacity-60",children:[(0,s.jsx)("span",{className:"text-sm",children:"cosmicjs"}),(0,s.jsx)("span",{className:"text-sm text-accent",children:".com"})]})}),d=n(4726),u=n(6612),components_Navbar=()=>{let[t,r]=(0,a.useState)(!1),n=(0,u.usePathname)();return(0,a.useEffect)(()=>{let r=document.body;t&&r.style.setProperty("touch-action","none"),t||r.style.removeProperty("touch-action")},[t]),(0,a.useEffect)(()=>{t&&r(!t)},[n]),(0,s.jsxs)("nav",{className:"fixed top-0 h-12 w-full md:hidden backdrop-filter backdrop-blur-sm bg-opacity-30 z-50",children:[(0,s.jsx)("button",{className:"absolute top-3 right-2 z-50","aria-label":t?"Close Menu":"Open Menu",onClick:()=>{r(!t)},children:t?(0,s.jsx)(o.Tw,{}):(0,s.jsx)(o.Oq,{})}),t?(0,s.jsxs)("div",{className:"flex flex-col z-40 h-screen w-full bg-back-primary overflow-hidden px-4 pt-16 mb-12",children:[(0,s.jsx)("ul",{className:"flex flex-col gap-y-12",children:d.routes.map(t=>(0,s.jsx)("li",{className:"border-b border-b-slate-400 border-opacity-30 pb-2",children:(0,s.jsx)(c(),{href:t.path,className:"text-fore-secondary",children:t.label})},t.path))}),(0,s.jsx)("div",{className:"flex justify-between mt-12",children:(0,s.jsx)(l.default,{})})]}):(0,s.jsx)("div",{className:"absolute top-3 left-2",children:(0,s.jsx)(components_Logo,{})})]})}},6241:function(t,r,n){"use strict";n.r(r);var s=n(5667),a=n(2026),o=n(4780);r.default=t=>{let{styles:r}=t,[n,l]=(0,a.useState)(!1),{resolvedTheme:i,setTheme:c}=(0,o.F)();return((0,a.useEffect)(()=>l(!0),[]),n)?(0,s.jsx)("button",{"aria-label":"dark"===i?"Activate Light Mode":"Activate Dark Mode",title:"dark"===i?"Activate Light Mode":"Activate Dark Mode",onClick:()=>{c("dark"===i?"light":"dark")},className:r,children:"dark"===i?(0,s.jsx)("span",{className:"block w-4 h-4 bg-white rounded-full group-hover:-translate-y-1 transition-transform"}):(0,s.jsx)("span",{className:"block w-4 h-4 bg-black rounded-full group-hover:-translate-y-1 transition-transform"})}):null}},5727:function(){},5098:function(t,r,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=n(2026),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function q(t,r,n){var s,o={},d=null,u=null;for(s in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(u=r.ref),r)l.call(r,s)&&!c.hasOwnProperty(s)&&(o[s]=r[s]);if(t&&t.defaultProps)for(s in r=t.defaultProps)void 0===o[s]&&(o[s]=r[s]);return{$$typeof:a,type:t,key:d,ref:u,props:o,_owner:i.current}}r.Fragment=o,r.jsx=q,r.jsxs=q},5667:function(t,r,n){"use strict";t.exports=n(5098)},2353:function(t,r,n){t.exports=n(617)},6612:function(t,r,n){t.exports=n(9677)}},function(t){t.O(0,[617,284,505,262,744],function(){return t(t.s=3822)}),_N_E=t.O()}]);