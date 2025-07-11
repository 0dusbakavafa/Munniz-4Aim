
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('munniz-store').then(function(cache) {
      return cache.addAll([
        '/',
        '/munniz4imx_pwa_final.html',
        '/manifest.json',
        '/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
