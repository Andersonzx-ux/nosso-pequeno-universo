// Service worker para funcionamento offline e instalação no celular
const CACHE_NAME = 'universo-v1';
const ASSETS = [
  './',
  './index.html',
  './css/base.css',
  './css/components.css',
  './css/experiences.css',
  './css/print.css',
  './js/config.js',
  './js/audio.js',
  './js/state.js',
  './js/router.js',
  './js/mascot.js',
  './js/experiences/group1.js',
  './js/experiences/group2.js',
  './js/experiences/group3.js',
  './js/app.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
