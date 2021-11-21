'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
".git/config": "97d96f8f098391547839f30396ce4b6f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "44b38ce3348fa7841c2e0e8847c8b322",
".git/HEAD": "1c22f1d62115547d29d916537f711881",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "586a5c18d029b05318dde1e742860ce3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "851a099bd5710c7ca446b9de329c1a1b",
".git/logs/refs/heads/main": "542df52067da2cbd0bccb6573de819d2",
".git/logs/refs/heads/question": "ede9fffa9cecaee1ab4b6bf97c239e46",
".git/logs/refs/remotes/origin/main": "74b335951d4cc87e7beb414d8604e588",
".git/logs/refs/remotes/origin/question": "588e925f5533882e4c6ebca609ad53e8",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/01/91f5378c4d292604b26bdafb8b9cb8d0dd7860": "197861c0e01771f9f1a67e4ddb51e63d",
".git/objects/19/5b5e76ccb211bd29157b0197d7a43ecf816da4": "488185977953e4be3d0baa81085a3a25",
".git/objects/1a/d36e018a35c53393691d1b2624297719b93dc4": "f8286a230aa8b03be2856513bb777f31",
".git/objects/21/a4b5b45ba29a48a522179e186fb593a28e2668": "02a8dfe06c38ffdd30321a1d22b6ab0c",
".git/objects/23/bbd7100816eec4081a2f44642f681ed329e5d7": "adfc3f83ade64e1ed80a73b2277bf44d",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/b00e7cc70dceca7393e2c56b3884fc6cca9a73": "fbff76f62e9d3cafa260139d785b739f",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/f6bd4ef62eff2a42edd1ee0b144a7044316c17": "19e52611d8776b3a399cd8d192e9dd29",
".git/objects/4e/cd960a9043f37eb5f379f191327eef74db9450": "8db5ef7b789cf717000885396d4fd6e6",
".git/objects/54/59e4f3d8a05f5a794c71d1c688de126b5792ad": "53bf187d8d67dce7bcbe54d7711d3543",
".git/objects/56/d4aaf8a0839cd0aeb887ef636af393154b27f5": "8ea6fc762b205f0acbaab6e4baaa0fc6",
".git/objects/58/598acb585ffea601ded103818cc372c486d7e3": "2ec35d68ffc3e7cedbebf14ac22ec3a4",
".git/objects/5b/61d3136393e8020eefd620713f70e240f45fa9": "06d25adf1aa2b84790431f2c1480e1ac",
".git/objects/60/7c3214c3cae7f5d531076a2375bd1b498b66d8": "6373f3518367fd18a3751062107ede33",
".git/objects/64/98c531f16524e182c9283c5465bc5d645b07d6": "b9792ee2ffec38d74d07a1c36d9d13c1",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/6b/ca2fdb3cccf22b86488939ba29b19e0652a4bf": "76600054751b451a4f804dde1ea03849",
".git/objects/72/b244c987be139028441516b970d8a9e2ec3dd9": "46a642a7ceb8960983e826fc54a73885",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/e6d67dce58e768c8716ea5805bef431b251b70": "446d5b755ca3d28c756f1ec959a62523",
".git/objects/8c/1ca972a66e85936a22ead4fffd212cfaf8c007": "1c4a6d46b6c037cb4cb2905b3c551a8a",
".git/objects/8d/4fc4ab257c4eb4f3b23526622418fd9d5d443e": "f1d07d8c0f0bb3f5b76fa8d26b34ca20",
".git/objects/90/92bce061cc2306203e3126776f30bbf084d6b3": "ffb6e3c76dbf8b9483ed8eda8bcbc91f",
".git/objects/95/b04b6683f5db32b409143da736c70e648a6aaa": "dc5e0d9632161b2f29a8d37f504aff4b",
".git/objects/99/e2a16541ae7789cd414a69107bcec64255bfcf": "e4f551e456efc915b6d78794360cf3d8",
".git/objects/9c/76249c9bb17c482c2b3e37427aeb1ff566f048": "60ddfc4b313f9cdf5f63ff4d1fd55727",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/02eda6f0b4fb04f06cd8760afcdd389812d8a2": "372899ca43e1cb2315a3ecd593ff4ec8",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/b3/0b81a4b4dcd0142033b86cecfd0ed414261ed3": "64b3c6f91597e56f6455769d9dde3788",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cc/e93d24970c86ee34fb8ec077237c7b50173b40": "226a3bcdc0f87caf64564128b16178bb",
".git/objects/d5/ebc4e59b1564305d13e6cf0b2a81f9212bffe1": "ffeaf9e55d3faa16ad6bff06ed32da58",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e0/99a43cfed28ec176b7f7b07d41b4631e6233e1": "90abdc763d1956084e2bd1e47e4a9cdb",
".git/objects/e3/53f6aa9ea10dd4f3485c6bb51cea8ec2352d9f": "65a7d2ce926a8607151d9f526e041e27",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/c94bc93e4386c3f1ae3f043b0979ecdde316b7": "d0636827ee30d064a9e12aedb0ca1b04",
".git/objects/ee/6a216930fa1f7d13ea8bce620c2d6c9837f11f": "0afab18309556d0b59a699e6412ca531",
".git/objects/f3/66d4baffe39347ba18659028d44e7e185d627e": "4fdfa9237dde48adf30c3d6727c36f20",
".git/objects/f4/4f05e27e42f9d427633707d98aefed8d573303": "b493f92878634c659c1c96e620444dba",
".git/objects/f5/c32500dd763c61fe934acb4152750c6e4b3758": "cedc98d4564352509b56a697bdf20f1e",
".git/objects/fa/16240dda9a09462e1812965a4dedf417ef826d": "e63c20714600e16c1e512793805a7398",
".git/objects/fc/9a52eebe979db0f25eaab64855b77c8dd7c7b2": "3a92a4e02a7a90fa6dd3bcefc62f8ea6",
".git/ORIG_HEAD": "7cc977aad424c549d0bc146ba5979da2",
".git/refs/heads/main": "7cc977aad424c549d0bc146ba5979da2",
".git/refs/heads/question": "eb7a6bccc77976d9d8f1b4314c9f091e",
".git/refs/remotes/origin/main": "7cc977aad424c549d0bc146ba5979da2",
".git/refs/remotes/origin/question": "eb7a6bccc77976d9d8f1b4314c9f091e",
"assets/AssetManifest.json": "4f90226cd0acd05ab85b2d13f5a81e5a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/1.jpg": "19747413ab9ae0ed7ccf7cd4b42afb21",
"assets/images/2.png": "c8130df8713db49e380490b9ff5cbe53",
"assets/images/3.png": "5077f9d40350782b39f5b8fda51b731d",
"assets/images/4.png": "d6c70ba3df52edc7e7a875959cbfb8e3",
"assets/images/5.png": "8f0319a8f6cc73100f6bb3d16c6a2e76",
"assets/images/6.png": "d16267630871a0512fb1ab4edcc68019",
"assets/images/7.png": "ff8ce1c9247f629171579afab7f77034",
"assets/images/8.png": "541351f0004933bafbc26e7d4cd435a1",
"assets/images/logo.png": "a08a43bae32dd0379c30bc45e3685566",
"assets/NOTICES": "dac8a2fcf6a850c5c3a98cb00c4d8734",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1bb7aad64fcc98bad3c5c81b6548a812",
"/": "1bb7aad64fcc98bad3c5c81b6548a812",
"main.dart.js": "056c5079ec5e223035c280464d2b5f60",
"manifest.json": "8d4ce6e0c0ab072f2965dc2cba91f1bb",
"README.md": "9750222454f8d57ba583203760cebdbe",
"version.json": "581180d76006a2e9e3ba5dc513cebd54"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
