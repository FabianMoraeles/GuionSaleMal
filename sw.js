// Guarda la página para poder abrirla sin internet.
// Siempre intenta la versión en línea primero; los audios los guarda index.html.
const PAGE = "guion-pagina-v1";

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));

self.addEventListener("fetch", e => {
  if (e.request.mode !== "navigate") return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(PAGE).then(c => c.put("./", copy)); }
        return res;
      })
      .catch(() => caches.open(PAGE).then(c => c.match("./")).then(r => r || Response.error()))
  );
});
