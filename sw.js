var CACHE = 'iit-gpio-pro-v3';
var ASSETS = ['./index.html', './manifest.json'];

self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){ return c.addAll(ASSETS) })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k!==CACHE }).map(function(k){ return caches.delete(k) }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e){
  // Solo cachear assets de la PWA, no las llamadas al ESP32
  var url = e.request.url;
  if(url.includes('/api/') || url.includes(':81')) return;
  e.respondWith(
    caches.match(e.request).then(function(r){
      return r || fetch(e.request).then(function(res){
        if(res && res.status===200 && e.request.method==='GET'){
          var clone = res.clone();
          caches.open(CACHE).then(function(c){ c.put(e.request, clone) });
        }
        return res;
      });
    })
  );
});
