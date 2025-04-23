function loadHtml(targetId, filePath) {
  fetch(filePath)
    .then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load ${filePath}`);
      }
      return res.text();
    })
    .then(html => {
      document.getElementById(targetId).innerHTML = html;
    })
    .catch(err => {
      console.error(err);
    });
}
