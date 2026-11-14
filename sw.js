const C='mesa-v21',A=['./','index.html','manifest.webmanifest','vendor/pdf.min.js','vendor/pdf.worker.min.js','vendor/pdf-lib.min.js','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{
if(e.request.method=='POST'&&new URL(e.request.url).pathname.endsWith('/share-target')){e.respondWith((async()=>{
const f=await e.request.formData(),c=await caches.open('share');for(const k of await c.keys())await c.delete(k);let i=0;
for(const x of f.getAll('pdf'))if(x&&x.name)await c.put('/s/f'+(i++)+'/'+encodeURIComponent(x.name),new Response(x));
await c.put('/s/meta',new Response(JSON.stringify({title:f.get('title')||'',text:f.get('text')||'',url:f.get('url')||''})));
return Response.redirect(new URL('./?compartido=1',self.registration.scope).href,303)})());return}
if(e.request.method!='GET')return;
e.respondWith(caches.match(e.request).then(m=>{const f=fetch(e.request).then(r=>{if(r.ok)caches.open(C).then(c=>c.put(e.request,r.clone()));return r}).catch(()=>m);return m||f}))});
