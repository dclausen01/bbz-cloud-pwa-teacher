if(!self.define){let e,r={};const i=(i,o)=>(i=new URL(i+".js",o).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(o,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(r[c])return;let s={};const t=e=>i(e,c),d={module:{uri:c},exports:s,require:t};r[c]=Promise.all(o.map((e=>d[e]||t(e)))).then((e=>(n(...e),s)))}}define(["./workbox-0ff36cd0"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"BBZ-Logo-Master-dark.png",revision:"05cb0bb6cc1d92e2d1b0c25b006f09cc"},{url:"BBZ-Logo-Master.png",revision:"57a64ff3aadd059d78c28a5cf295192d"},{url:"helper.js",revision:"aeee1784f28bd387e3303f9ecfe3f449"},{url:"icon.ico",revision:"458304c2d4b7bac06d6949ddeaff304b"},{url:"icon.png",revision:"2ef56805e55c50ca1f3fb9abf142e68d"},{url:"index.html",revision:"bdde2de17a1040921b787c99d4ae7e0c"},{url:"manifest.json",revision:"8a19d1d7e9b431af65efb9a130a331fa"},{url:"start.html",revision:"abcc641759e6052b2090383da40e45cd"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=service-worker.js.map
