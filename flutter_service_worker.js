'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "51341c063da928d293a18fe25c7530e9",
"main.dart.js_24.part.js": "9c31402a85d10b9fb60c55bc193627e8",
"main.dart.js_34.part.js": "bbb44b94c3e43b86ad7a66f60551513f",
"version.json": "056f384927d8e2d09d8231af787b20ad",
"main.dart.js_7.part.js": "3656f03ea8c4c7a34a93a65e682d7877",
"main.dart.js_12.part.js": "2792b5b5b473fd0fed55be994fea01b1",
"main.dart.js_6.part.js": "18e6a30e9dfc32ca5ed30da5f617d847",
"index.html": "b5960ceb18f5f1c01cb128ec62de629a",
"/": "b5960ceb18f5f1c01cb128ec62de629a",
"main.dart.js_13.part.js": "4c5f4743898cb99b2351431a7c3442ad",
"main.dart.js_35.part.js": "91bca103a8109e6fa2c675d4babe609a",
"main.dart.js_25.part.js": "d1a458235542c15dad2afc1cfdaa70fd",
"firebase-messaging-sw.js": "befaa7495aaf51b92b2030f1ca9d3803",
"main.dart.js_4.part.js": "cd9f17af750a82095512032833d2720a",
"main.dart.js": "f68f51c47216d08683e6c26b58eaf1ce",
"main.dart.js_18.part.js": "5c91652c4b4f99fe9846e7f0ddeff137",
"main.dart.js_27.part.js": "d3da92db5726ab997b6f09cf84c5a3ef",
"main.dart.js_37.part.js": "aa9af74a90649c6eabfc18f9291395f6",
"main.dart.js_19.part.js": "5cd939b2eb9629fd2db5a569b21de873",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"main.dart.js_36.part.js": "a5b7b3a14f1888907c9904b185350d6c",
"main.dart.js_26.part.js": "338ed4586382ae18de882174c7f13644",
"main.dart.js_5.part.js": "a826708a81e9abd1e48302ab29893849",
"main.dart.js_15.part.js": "5d4a1fdb43bc19e517d8375d21befe6c",
"favicon.png": "1a35dc15b79da98394fea701ee0768c6",
"main.dart.js_23.part.js": "a7dc8ae1c52d2b1572039cff610875d1",
"main.dart.js_33.part.js": "f091e4a2ddcc1f2497471dc26573014c",
"main.dart.js_32.part.js": "503968accd6fc626af41a0d49243bb9b",
"main.dart.js_22.part.js": "a4d7bcebc22983c8e08826b6fb3d6c00",
"main.dart.js_8.part.js": "a99152aef4921dcb016648f6d40bea28",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cb958d1d1c5997b266e86ed6222a11bc",
"main.dart.js_14.part.js": "d6ba1d4d0551e8cf49225a266f40f95b",
"main.dart.js_1.part.js": "9f6c70de59879d577f6e03a2559e21d6",
"main.dart.js_20.part.js": "4463fafcd5e498df07af87b9f59f9136",
"main.dart.js_30.part.js": "429670d448c332c2d53c0c8fe7bf2067",
"main.dart.js_29.part.js": "e62f6ce0295e04748623319045fd688a",
"main.dart.js_3.part.js": "aab09c600167dad97b267f41aa8f66b6",
"main.dart.js_16.part.js": "6df0d5aba0ca03a30f36a6f5b9e2e563",
"assets/AssetManifest.json": "31b53ef508ab93b326d096147e84456e",
"assets/NOTICES": "faa67c257755073f539dc5da1a593e57",
"assets/FontManifest.json": "ce1d0ae664e14238869feff07c71ce21",
"assets/AssetManifest.bin.json": "f3058a9264b6515a518baa9d85492bef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/timezone/data/latest_all.tzf": "a3a6cb5d912b5375926e5b027f91cb00",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "f3c4f09a37ace3246250ff7142da5cdd",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "341d81e1216c6c080887eda48d7052cc",
"assets/fonts/MaterialIcons-Regular.otf": "838569fbfd49940aede6e4f20cef6ced",
"main.dart.js_28.part.js": "5c0818b8a345b10696e6ec13c2f4d8f7",
"main.dart.js_2.part.js": "038a949e3cc70b9975b69a2f3793f579",
"main.dart.js_17.part.js": "6acccc79dabef2799ba836fb31a08281",
"main.dart.js_31.part.js": "6276bdca24990af0bd292306117b2b6e",
"main.dart.js_21.part.js": "ae2ce1856edb1ab04fd18a6168edca82",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
