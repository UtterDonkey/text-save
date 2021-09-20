function ready() {
  const textarea = document.getElementById('text');
  const id = textarea.dataset.id;
  textarea.addEventListener('input', e => {
    navigator.serviceWorker.controller.postMessage({id, content: textarea.value});
  });
function write(string) {
document.getElementById('text').value = string;   const textarea = document.getElementById('text');
  var id = textarea.dataset.id;

    navigator.serviceWorker.controller.postMessage({id, content: textarea.value});
}
if (location.hash) {
write(location.hash.substring(1));
}
}
