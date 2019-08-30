module.exports = function(url, tabs="html,result", height="", theme="") {
    const path = new URL(url).pathname;
    const id = path.split('/')[3];
    return `<p class="codepen" data-height="${height}" data-theme-id="${theme}" data-default-tab="${tabs}" data-slug-hash="${id}">
    <span>See the Pen <a href="${url}"></p>
  <script async src="https://static.codepen.io/assets/embed/ei.js"></script>`
}