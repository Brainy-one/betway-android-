const CACHE_NAME = 'batway-focus-timer-v9';
const urlsToCache = [
  '/',
  '/index.html',
  '/privacy-policy.html',
  '/script.js',
  '/css/tailwind.css',
  '/css/inter-font.css',
  '/css/fontawesome.css',
  '/fonts/Inter-Regular.woff2',
  '/fonts/Inter-Bold.woff2',
  '/fonts/Inter-SemiBold.woff2',
  '/fonts/Inter-Black.woff2',
  '/fonts/fa-solid-900.woff2',
  '/fonts/fa-regular-400.woff2',
  '/icons/icon-71.png',
  '/icons/icon-150.png',
  '/icons/icon-192.png',
  '/icons/icon-300.png',
  '/icons/icon-512.png',
  '/icons/icon-1024.png',
  '/icons/batway-Focus-Timer3.png',
  '/manifest.json'
];

// Install event - cache all resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.error('Cache installation failed:', err);
      })
  );
  self.skipWaiting();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        
        // Clone the request
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then(response => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        });
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  
  self.clients.claim();
});
