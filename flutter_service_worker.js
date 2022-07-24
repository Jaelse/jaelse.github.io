'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a4e3c57a284d5d3a866a55a870ada3ac",
"index.html": "a8e101e42501c9ae021a0a3361ae387f",
"/": "a8e101e42501c9ae021a0a3361ae387f",
"main.dart.js": "75382636372a128a93e2ce0cb1f23ca0",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"README.md": "b040f9f621acb9cd82d1c07694bd0d22",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "19a52d566b6db1e97caf2c17aff81794",
".git/ORIG_HEAD": "9dfb6313a396e0142f468ef0ed1f3462",
".git/config": "5db2f51a1c6b11e41753c258195033b2",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/57/dd3357df87993165db68f4f3c7b9482ade0b79": "da9a0083b7e6881efba952b8d7af419b",
".git/objects/6f/3b4d91a041b5a445f5a353b0bac4a776b22cca": "550184e3c0899e7f22d8e00782b4e916",
".git/objects/6f/a29a55e3ae920149dd21344efdfa0a76a5e51b": "8366f9999f0b54b3b49c293e5b8e84c8",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/90fd2231543498506f6a38c9db8f71fed2a136": "0cd8f9a88d77085f13442c3e73a2eb61",
".git/objects/69/cb3b6da87a2b8fdeb77b61fbc2c98a56d567e5": "d39fd62ff5cdcc44c8d664a97bf64d0a",
".git/objects/58/0c47e36ebdc748a08624eb0392f42edf8f0553": "f49f340f3783d855d83cdd32e4233762",
".git/objects/94/2a4ff3113aa936ffb3da1d6aa30e83b4b618be": "542f53cd98f5386585b59b7fd15228f3",
".git/objects/05/4cc56a5b64486eb4f0b7bd2d256fe76cf53888": "fc8d9fae2647012a45a8bd6987983b34",
".git/objects/02/2489398ca9a994b3855079633b1e10cc62bccf": "8386999d60d2e9574258d3331d5be006",
".git/objects/b2/950ab8710041ca9b1ffd77593550c4d4ba0fa1": "163d5701704e012e4e34408f2fcd11e2",
".git/objects/bb/d739aed1d310ea90c2a4379affca5b5f4f45d8": "b7a46b1453c97406f31f51e8b3ac5bf4",
".git/objects/d0/dd27c517be5004c674ba47dad187b1796939c0": "12226dad7c270dae43e1ba84aa45c888",
".git/objects/da/863e2074c93ee63fc3b06a1bf8e9e2e5d47e84": "4c2e8adb9d4f86fe1f0caab38bfa7d3d",
".git/objects/a2/228a9d517bcd5ed4ffdf2abe4c0e390f67be12": "fac5a79047e05455d6277b2f58c83913",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/0b5c092e7c7a883b6e996f9f3dbb371ee70674": "0b950a851332cbae8adfee5f9d635b10",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/81b9ed3c1c3c9322fb36c04232103979174e60": "e4eee4b8b64985adc2093fb5cb4ed257",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/7d/9ab8a19f3778138c60a5abee21e67f571c1b4e": "4291402c938b30a113e7a0f0ae8374f3",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/89/91a335422cc072523961a65e654f6e342f54b9": "7e7f7f358c44ad3ca4fcbc5adb4b8bd7",
".git/objects/45/48ee2c365bf8e710ea8b16366fb374c6464888": "e23cf2f3faa8b63dfe8097158ee27b61",
".git/objects/87/ab45ea06feb5adf271ea694f41ec9e72bd6d90": "bf793d852280de18038f58b014c59f04",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/72/1fc30c1c150cc91f8910660271a5f4b4ef48c0": "914de1be8ba0a3681681e2071dcea907",
".git/objects/44/eebbf1ea35109b6c73705455093b7436fe7bbc": "805e576af2b700a0ac987282a4e0d698",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/09/8856e78e95085fcf461614f4d9046602a75e63": "1c8136d535adb5a625cf9298ee84a9eb",
".git/objects/98/919bdaab204825549a49c4eddf0707736b141b": "a0e08b20d63842926537c441e9916580",
".git/objects/53/638bcdeb8b6729f8bfb504685be7cbe67984c1": "354cd16938db07b9c332aa34f9103283",
".git/objects/37/cfb30607109ecbf136245a774cd11e65d03e07": "a7674452f657d1714aa88f53520c11b7",
".git/objects/01/b70edf138aca9dc796391b0fff7db8b6ef4639": "18a5bcac77ade481ad5c5a0796c9dfc8",
".git/objects/6c/862210f138808efb279f4be14d6e71b539f05e": "99bf9ff7db4743cae321bdbe0b341c8c",
".git/objects/bf/24076ec41e1bad9ae6a196d2eda7f2247d92b6": "1378ddc49ecc5bfedd8d7fc37f0ee0b9",
".git/objects/af/ecdea3815b2cd3eb182959f96e3cd01cbbf8d6": "82c47a46f839edf8b416298bbd167cb6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/ef116d224d8f796abe72ecfef9271f9d79f069": "a633ba18bbfd84d0c0ea0a4dd6b59348",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/14371a96e4983d81837b85f1cad6e669b0c237": "930e4c668627c916e1a0f26cfa43ffec",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/0e0050a4eabfc3ab11d3be863e26bfceed814e": "598ea06f1e441362eba2d9b765468a41",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/f0/7df92978d2871f328fb8e5e13f33760488b1af": "ea48d64f2db28178f57448a22e3fdf47",
".git/objects/e8/f1c40e304232068810ff69ada9f6d15e5e1969": "f4c3d4ba2a3a3603d7ce4abcf91ddb9e",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f1/fa5e9131f097eda60e8e7a6dda983433aa3396": "e838bc1f4b13df637e22282872eab154",
".git/objects/e0/dc201be179d53e194b37c9631969f189e93a88": "b3640cc12cc57aa0ebf2b8d3c819e395",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/41/50a4a0ddbbc66bad0d4059f3fcb0d74f2e917f": "ad60370ccfe1501f65ddae9420208705",
".git/objects/84/4932b090b1e60a3588b1a13f4783bd0f60107c": "6aa0b83ec2dde7fdef935af9576679ca",
".git/objects/4a/d9e1d977062ec02565cab15ea59ff692749fa6": "567dd5e20c22f1f59a8a4c1be6692e11",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/1c/7338ba5c4170ce1f1f1e6bdd65d4943fc07286": "174b79a07a93d8cdfa3bc146b8c96046",
".git/objects/14/3c4fb2a3ead6892000aab2c0728f21efbca69a": "e1d034935adc319c17b80df1ef304490",
".git/objects/8e/872d67e612b2000f1c57f31941a7edc6ac97cd": "96dac0dd83a8e1e03077c5a351af3cf1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6b131bae8f9e411012655cac1bb7097b",
".git/logs/refs/heads/main": "f4d9536f0d93a50b09d52feeae018af3",
".git/logs/refs/remotes/origin/main": "5d7530d0602e90e009c3cf5becc65df4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/refs/heads/main": "c098fb06c9c3faf83a23555e541b92d7",
".git/refs/remotes/origin/main": "c098fb06c9c3faf83a23555e541b92d7",
".git/index": "f2b4a308b6679a02db98e1fa74cf8b65",
".git/COMMIT_EDITMSG": "450ca5afde346c288d87b8c12fc6bf6e",
".git/FETCH_HEAD": "36fa8d19ed7452a60f27f30995bdc7e6",
"assets/images/my_pic.jpg": "57d3938b67d2e4af3ddb5a94953823b5",
"assets/AssetManifest.json": "94ae8e96d33ef10230b4f6ee50e4c5d9",
"assets/NOTICES": "c970649f440a592c10b528da7ceac19a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/my_pic.jpg": "57d3938b67d2e4af3ddb5a94953823b5",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
".idea/workspace.xml": "e988d85d90e7a7995fa869d63a936f29"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
