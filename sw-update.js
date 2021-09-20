    function write(string) {
document.getElementById('text').value = string;   const textarea = document.getElementById('text');
  var id = textarea.dataset.id;

    navigator.serviceWorker.controller.postMessage({id, content: textarea.value});
}
if (location.hash) {
write(location.hash.substring(1));
}
if (location.search) {location.replace(location.search.substring(1))}
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener('message', e => {
    if (e.data.reload) {
      console.log('New service worker; reloading.', e.data.v);
      window.location.reload();
    }
  });
  navigator.serviceWorker.register('/text-save/sw.js');
}
