(function(e){function t(t){for(var n,o,l=t[0],s=t[1],u=t[2],c=0,d=[];c<l.length;c++)o=l[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},a={app:0},i=[];function l(e){return s.p+"js/"+({beds:"beds",oxygen:"oxygen"}[e]||e)+"."+{beds:"b6d16817",oxygen:"8f75f85e"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={oxygen:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({beds:"beds",oxygen:"oxygen"}[e]||e)+"."+{beds:"31d6cfe0",oxygen:"3e0a7850"}[e]+".css",a=s.p+n,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var u=i[l],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===n||c===a))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){u=d[l],c=u.getAttribute("data-href");if(c===n||c===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],f.parentNode.removeChild(f),r(i)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=i);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=l(e);var d=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,r[1](d)}a[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/covid-resources/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/beds"}},[e._v("Beds + Ventilators")]),e._v(" | "),r("router-link",{attrs:{to:"/oxygen"}},[e._v("Oxygen on Rent")])],1),r("router-view")],1)},a=[],i=(r("034f"),r("2877")),l={},s=Object(i["a"])(l,o,a,!1,null,null,null),u=s.exports,c=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("d98d")}}),n("HelloWorld",{attrs:{msg:"Welcome to Covid Resource Knowledge Portal"}})],1)},f=[],h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello container"},[r("h1",[e._v(e._s(e.msg))]),r("p",[e._v(" Note: This list of resources is crowdsourced. The purpose of this is to ensure that all the information scattered across various social media platforms is organised methodically in one place, accessible to all, and easy to find at times of need. Those who submit leads directly through the google form attached here will be credited by name, the rest of the information has primarily been gathered from Facebook, Instagram and Twitter. ")]),r("p",[e._v(" While we are doing our best to verify and update these leads, we are a very small group of individuals with classes or full-time jobs. Unless specified otherwise, the leads are unverified, but we will try our best to get them verified at the earliest. We request you to exercise caution when engaging with these resources and if there's anything amiss, please report to the authorities, and let us know as well using the google form linked above so that we may update this portal accordingly. Thank you. ")]),r("h3",[e._v("Essential Links")]),e._m(0)])},p=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://www.wbhealth.gov.in",target:"_blank",rel:"noopener"}},[e._v("Health & Family Welfare")])]),r("li",[r("a",{attrs:{href:"https://excise.wb.gov.in",target:"_blank",rel:"noopener"}},[e._v("Forum")])])])}],m={name:"HelloWorld",props:{msg:String}},g=m,v=(r("d205"),Object(i["a"])(g,h,p,!1,null,"3287bcbd",null)),b=v.exports,y={name:"Home",components:{HelloWorld:b}},w=y,x=Object(i["a"])(w,d,f,!1,null,null,null),T=x.exports;n["a"].use(c["a"]);var A=[{path:"/",name:"Home",component:T},{path:"/beds",name:"Beds",component:function(){return r.e("beds").then(r.bind(null,"4166"))}},{path:"/oxygen",name:"Oxygen",component:function(){return r.e("oxygen").then(r.bind(null,"bc10"))}}],j=new c["a"]({mode:"history",base:"/covid-resources/",routes:A}),B=j;n["a"].config.productionTip=!1,new n["a"]({router:B,render:function(e){return e(u)}}).$mount("#app")},"85ec":function(e,t,r){},c0b8:function(e,t,r){},d205:function(e,t,r){"use strict";r("c0b8")},d98d:function(e,t){e.exports="data:image/webp;base64,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"}});
//# sourceMappingURL=app.3a9aac07.js.map