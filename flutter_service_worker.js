'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "044bd9b4fd122696bd12609cad066b93",
"assets/AssetManifest.bin.json": "8014f4273eb09106a3d460ca63647039",
"assets/AssetManifest.json": "5e3fb191bfa719c56057c5d79e2b0674",
"assets/assets/fonts/arial.ttf": "5995c725ca5a13be62d3dc75c2fc59fc",
"assets/assets/fonts/Cairo-Black.ttf": "2374c281704270d2e3008b421ed80885",
"assets/assets/fonts/Cairo-Bold.ttf": "19a30f18e32cf8dbb9d0cfcee9e2c01e",
"assets/assets/fonts/Cairo-ExtraBold.ttf": "461a6eeaed7944175bd3b03209b6015a",
"assets/assets/fonts/Cairo-ExtraLight.ttf": "c78a99987273c45c6f7c6d7bcd2f7f76",
"assets/assets/fonts/Cairo-Light.ttf": "a6793d94c6568946c4755901ef0f04ed",
"assets/assets/fonts/Cairo-Medium.ttf": "76f957349a6defbef1b6980bc4c8892a",
"assets/assets/fonts/Cairo-Regular.ttf": "94c4feb516a9bd22a5ee417f6e099c93",
"assets/assets/fonts/Cairo-SemiBold.ttf": "a29aa6689e17cc4920f865b1e2f206fd",
"assets/assets/icons/add.png": "6c1eace7e0d69399b22dfdf3a1e145e1",
"assets/assets/icons/agreement.png": "047de91d5171c1cf3afd86972d395491",
"assets/assets/icons/app.png": "85f4a2102f2713541981c1c575721fdb",
"assets/assets/icons/dashboard.svg": "11db1fca545ed2f714a543602f5aaad4",
"assets/assets/icons/financial.png": "44279a5d0576287d2c131d009b848374",
"assets/assets/icons/invesment.png": "d152be6c6a88326ac79c22158c875bda",
"assets/assets/icons/margin.png": "8e9137349243d3c33d02f8fc721de997",
"assets/assets/icons/mega.png": "98111ead6325ba0829a054ef7cdc44f2",
"assets/assets/icons/technical-support.png": "c0602f9d8be89f633fcac98e568f5b8a",
"assets/assets/images/Admin_Kit.svg": "b454cd3f9db4e5aa74b601eba29c63d2",
"assets/assets/images/Admin_Kit_Text.svg": "4536dca87a4294b8db9661212724cdd6",
"assets/assets/images/Auth-BG.png": "6a6a2df7a7c62e7e79376ae8906be29e",
"assets/assets/images/excel.png": "b3bba4a529cab7e8211c9019f1347b71",
"assets/assets/images/logo.png": "32a39231ff2199993d5da63b27a2c098",
"assets/assets/images/powerpoint.png": "fd38c7a7f6d7ca74681f4e2835112281",
"assets/assets/images/telegram.png": "dfe1f9882158a7e9a652464fd50ab521",
"assets/assets/images/word.png": "96aaf24fa127542ce3db766b73fb6dc6",
"assets/assets/translations/ar.json": "53f1d184d26b5b4c177a4c3f5ed0b242",
"assets/assets/translations/en.json": "39437eb3fd96b5361fdd9efe6d05f20e",
"assets/assets/translations/es.json": "c88033521a85a159052fcb773ae9209d",
"assets/assets/translations/fr.json": "c88033521a85a159052fcb773ae9209d",
"assets/assets/translations/it.json": "2865f5e33374a0eae961bf5484a5944e",
"assets/FontManifest.json": "f301a2047cc8439c18039e7cbc7eb30f",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "45078bac54a3fb5de8551a84dc3e0e27",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "a21d792bae6c938ca042375add50b1b0",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cd0fb411138a4e42114f4971ba900546",
"/": "cd0fb411138a4e42114f4971ba900546",
"main.dart.js": "099e99c18c3985649d55aeff4e9bc1f1",
"manifest.json": "254241fa3db8b69db6338134f39cd127",
"version.json": "4d7f3d569ee76a9674e639ff3ec81157"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
