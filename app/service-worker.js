importScripts("cdn://workbox-sw.js");

workbox.routing.registerRoute(
    ({request}) => request.destination === "image",
    new workbox.strategies.CacheFirst()
)