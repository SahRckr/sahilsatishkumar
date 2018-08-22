"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/profile/index.html","d9f4238c1a4e93dcd488536470f7bede"],["/profile/static/css/main.cb6f726b.css","96c439e645fac2c52e89d5af26182020"],["/profile/static/js/main.83007fa2.js","403337bf06cd88b030956526cc0ead9c"],["/profile/static/media/AskVaidyo.fa8fa9fd.jpg","fa8fa9fd636ca4bc1bd172bc541629b9"],["/profile/static/media/LeaderAmp.4715f634.png","4715f6342219079171d43529a1e74930"],["/profile/static/media/aloysius.b14adc9d.png","b14adc9d7d7c67f269f59a91501fb3aa"],["/profile/static/media/associations.77784f00.svg","77784f00b6bd05022086c49e7f19db98"],["/profile/static/media/brand-icons.13db00b7.eot","13db00b7a34fee4d819ab7f9838cc428"],["/profile/static/media/brand-icons.a046592b.woff","a046592bac8f2fd96e994733faf3858c"],["/profile/static/media/brand-icons.a1a749e8.svg","a1a749e89f578a49306ec2b055c073da"],["/profile/static/media/brand-icons.c5ebe0b3.ttf","c5ebe0b32dc1b5cc449a76c4204d13bb"],["/profile/static/media/brand-icons.e8c322de.woff2","e8c322de9658cbeb8a774b6624167c2c"],["/profile/static/media/contactMe.53db8070.svg","53db807061f5a4adb978f26838b98aec"],["/profile/static/media/education2.761d24bc.svg","761d24bcab8ef52c7319f0bbb5090a6f"],["/profile/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/profile/static/media/header.d0a540e6.svg","d0a540e6f74dd4cd9fddbfc4015cc024"],["/profile/static/media/hobbies.faeeb15f.svg","faeeb15f964081d868aa35e0fe4f2751"],["/profile/static/media/hypertrack.fc3089a8.jpg","fc3089a82e52c4d7e74846fdfd6556d1"],["/profile/static/media/icons.0ab54153.woff2","0ab54153eeeca0ce03978cc463b257f7"],["/profile/static/media/icons.8e3c7f55.eot","8e3c7f5520f5ae906c6cf6d7f3ddcd19"],["/profile/static/media/icons.962a1bf3.svg","962a1bf31c081691065fe333d9fa8105"],["/profile/static/media/icons.b87b9ba5.ttf","b87b9ba532ace76ae9f6edfe9f72ded2"],["/profile/static/media/icons.faff9214.woff","faff92145777a3cbaf8e7367b4807987"],["/profile/static/media/outline-icons.701ae6ab.eot","701ae6abd4719e9c2ada3535a497b341"],["/profile/static/media/outline-icons.82f60bd0.svg","82f60bd0b94a1ed68b1e6e309ce2e8c3"],["/profile/static/media/outline-icons.ad97afd3.ttf","ad97afd3337e8cda302d10ff5a4026b8"],["/profile/static/media/outline-icons.cd6c777f.woff2","cd6c777f1945164224dee082abaea03a"],["/profile/static/media/outline-icons.ef60a4f6.woff","ef60a4f6c25ef7f39f2d25a748dbecfe"],["/profile/static/media/printwithpi_bw.701285fd.png","701285fdb5c268630e58a47a36167e9e"],["/profile/static/media/projects.98bbb469.svg","98bbb46942c4d9d2ef0b98f545851390"],["/profile/static/media/technicalSkills.6207454e.svg","6207454ef95ff7c168ee42059ea80a16"],["/profile/static/media/workExperience.e140ce94.svg","e140ce9444c7ff4d4a46fdfea6e073bc"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var i=new URL(e);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),i=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),i]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var i="/profile/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(i,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});