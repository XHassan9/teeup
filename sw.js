// TeeUp service worker: lets Android show score alerts in the notification tray.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(self.clients.matchAll({type:'window'}).then(c=>c.length?c[0].focus():self.clients.openWindow('./')))});
// Pass-through fetch handler (no caching, so everyone always gets the newest version). Needed for Android's "Install app" button.
self.addEventListener('fetch',()=>{});
