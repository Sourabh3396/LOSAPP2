
// listen to every fetch event
self.addEventListener('fetch', function (event) {
    const request = event.request;
    
    // filter for html document fetches (should only result in one single fetch) --> index.html
    if (request.method === "GET" && request.destination === "document") {

        // only intercept if there was a problem fetching index.html
        event.respondWith(
            fetch(request).catch(function () {
                // console.error("[onfetch] Failed. Serving cached offline fallback");

                // return offline page from cache instead
                return caches.match("/LOSAPP1/assets/Offline/offline1.html");
            }));
    }
});

// self.addEventListener('fetch', (event) => {
//     if (!self.navigator.onLine) {
//         event.respondWith(
//             caches.match(event.request).then((response) => {
//                 return caches.match('/assets/offline.html')
//             })
//         )
//     }
// })

self.addEventListener('notificationclick', (event) => {
    console.log('notification clicked!')
  });
  

// use all the magic of the Angular Service Worker
importScripts('./ngsw-worker.js');
