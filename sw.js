self.addEventListener('fetch', (event) => {
  // Simple pass-through network engine
  event.respondWith(fetch(event.request));
});
