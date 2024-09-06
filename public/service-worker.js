const cacheName = 'bookstore-cache-v1';
const assetsToCache = [
    '/',
    '/views/index.html',
    '/public/styles.css',
    '/public/app.js',
];

// Install event - Cache files
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(assetsToCache);
            })
    );
});

// Fetch event - Serve cached files
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
