if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise(async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()})),s.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},s=(s,i)=>{Promise.all(s.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(s)};self.define=(s,n,c)=>{i[s]||(i[s]=Promise.resolve().then(()=>{let i={};const a={uri:location.origin+s.slice(1)};return Promise.all(n.map(s=>{switch(s){case"exports":return i;case"module":return a;default:return e(s)}})).then(e=>{const s=c(...e);return i.default||(i.default=s),i})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/98cyDpu1MKH2Kc57Nwrha/_buildManifest.js",revision:"fb96ae7926f5104f50f0cf1b3a23a9b5"},{url:"/_next/static/98cyDpu1MKH2Kc57Nwrha/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/98cyDpu1MKH2Kc57Nwrha/pages/%5Blang%5D/platillos.js",revision:"6328f4f13814bbf36106ce851900cb39"},{url:"/_next/static/98cyDpu1MKH2Kc57Nwrha/pages/%5Blang%5D/vinos.js",revision:"e9f71e6846fb21bca134b5c119045f0d"},{url:"/_next/static/98cyDpu1MKH2Kc57Nwrha/pages/_app.js",revision:"39b5c0ecc460c5f2b73f886c2b658d00"},{url:"/_next/static/98cyDpu1MKH2Kc57Nwrha/pages/_error.js",revision:"7124f2ed90f433a9f3c937c078e67fbe"},{url:"/_next/static/98cyDpu1MKH2Kc57Nwrha/pages/index.js",revision:"dc588dca27be32603b450a7ea44cf99d"},{url:"/_next/static/chunks/commons.cd9ca553a70fe5f8c3dd.js",revision:"5b4e704c66f64aebc4ecd3ff47aeef83"},{url:"/_next/static/chunks/framework.e84fa698c7ee940652bd.js",revision:"0b711c3e02b0095b778e8d3a6cd216d2"},{url:"/_next/static/css/c646900a80cc17d21057.css",revision:"a4211836a9df984a9f625048a64f9efb"},{url:"/_next/static/runtime/main-4838f69c5bf8625d8375.js",revision:"b77f9bebdd7e2f72151832f5f80b3761"},{url:"/_next/static/runtime/polyfills-283772482f0035efccb9.js",revision:"08832ea8292d303ba36610c6e1d52b4f"},{url:"/_next/static/runtime/webpack-c212667a5f965e81e004.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/favicon.ico",revision:"57701faab90b4287d16e31b7ce07f675"},{url:"/images/decantos.jpg",revision:"22d31bd7d5e7ca76f2d342438e6299b9"},{url:"/images/icons/icon-128x128.png",revision:"47277071e8d7fc05dbb67a3f63a00ff7"},{url:"/images/icons/icon-144x144.png",revision:"81cd6d286dfce31b83f942908a28b121"},{url:"/images/icons/icon-152x152.png",revision:"a8b84d4e269c51932b62a66700858bc6"},{url:"/images/icons/icon-192x192.png",revision:"6fe955ea94b894e53ed9dc1393d819e9"},{url:"/images/icons/icon-384x384.png",revision:"938ee029d04776b16fae9dd85166be40"},{url:"/images/icons/icon-512x512.png",revision:"319a02a7daa8b6080bdf748cbcbe7cd1"},{url:"/images/icons/icon-72x72.png",revision:"b4691d82111977588ac2bd6d6af847ea"},{url:"/images/icons/icon-96x96.png",revision:"e5ee69810fe5b7dd4523864618d893ad"},{url:"/images/icons/maskable_icon.png",revision:"4acc6c0c05ccb0ac04ff0f175951471d"},{url:"/manifest.json",revision:"1bde18323e8923ee74929d795a09a463"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"POST"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
