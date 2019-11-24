this.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('v1').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/about.html',
                '/css/style.css',
                '/lib/msg.js',
                '/lib/axios.min.js'
            ]);
        })
    );
});


this.addEventListener('fetch', function (event) {
    event.responseWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});
