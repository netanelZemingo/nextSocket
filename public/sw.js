if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const f=e=>c(e,n),r={module:{uri:n},exports:t,require:f};s[n]=Promise.all(i.map((e=>r[e]||f(e)))).then((e=>(a(...e),t)))}}define(["./workbox-7b405d62"],(function(e){"use strict";importScripts("fallback-8iKeBAxG_Qv7nGNsGgxxm.js","/customWorker.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/1.jpg",revision:"35c1c1c5585a83cdd3def021f349434d"},{url:"/2.jpg",revision:"31322524d833ac3d2027c28f761334ef"},{url:"/3.jpg",revision:"61100b4678d0f16ed49de62a312ea808"},{url:"/_next/static/8iKeBAxG_Qv7nGNsGgxxm/_buildManifest.js",revision:"0390fd633108883cacbec6085233efef"},{url:"/_next/static/8iKeBAxG_Qv7nGNsGgxxm/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/286-7580ca6a6a4f1af5.js",revision:"7580ca6a6a4f1af5"},{url:"/_next/static/chunks/675-776579f876d79137.js",revision:"776579f876d79137"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-41c7a067006caf69.js",revision:"41c7a067006caf69"},{url:"/_next/static/chunks/pages/_app-b9b9395ea1a0e36e.js",revision:"b9b9395ea1a0e36e"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/_offline-7fb39108c895a455.js",revision:"7fb39108c895a455"},{url:"/_next/static/chunks/pages/activateSubsription-bd0905c14420830f.js",revision:"bd0905c14420830f"},{url:"/_next/static/chunks/pages/caching-e50f0725c164a61c.js",revision:"e50f0725c164a61c"},{url:"/_next/static/chunks/pages/chat-eede2f5602c30551.js",revision:"eede2f5602c30551"},{url:"/_next/static/chunks/pages/images/%5Bid%5D-33106b6644572ad6.js",revision:"33106b6644572ad6"},{url:"/_next/static/chunks/pages/index-67feaf293e4c87aa.js",revision:"67feaf293e4c87aa"},{url:"/_next/static/chunks/pages/login-85be9661a551838c.js",revision:"85be9661a551838c"},{url:"/_next/static/chunks/pages/sendnotifications-c0ab7b0f69966ee1.js",revision:"c0ab7b0f69966ee1"},{url:"/_next/static/chunks/pages/test-dfc8036112abfbd2.js",revision:"dfc8036112abfbd2"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-d38be8d96a62f950.js",revision:"d38be8d96a62f950"},{url:"/_next/static/css/dbb19efd0df8e75b.css",revision:"dbb19efd0df8e75b"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/_offline",revision:"8iKeBAxG_Qv7nGNsGgxxm"},{url:"/customWorker.js",revision:"4d5d65809193f3182c2ede8ae9cb6e05"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"36522f27f9a203b685975489eea64195"},{url:"/icon-256x256.png",revision:"c516848eae6fd8b782e4b37ed1931819"},{url:"/icon-384x384.png",revision:"cbfb8e3a062b3657d5f7afeea2c5fe66"},{url:"/icon-512x512.png",revision:"389c0a9282cc7fa63568b7081037350f"},{url:"/img.png",revision:"43149f746f16a26249925a0ab7dc2193"},{url:"/manifest.json",revision:"e23425409ed6e76a1c99f8ee1122f09e"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>(console.log(e),e.href.includes("fonts")&&e.origin.includes("fonts"))),new e.CacheFirst({plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
