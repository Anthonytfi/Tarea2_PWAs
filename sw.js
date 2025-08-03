self.addEventListener('install', (event) => {
  console.log('Service Worker instalado ✅');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activado ✅');
});

self.addEventListener('fetch', (event) => {
  // Aquí puedes personalizar la estrategia de cache
  event.respondWith(fetch(event.request));
});