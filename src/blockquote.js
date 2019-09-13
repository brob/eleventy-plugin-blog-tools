const markdownIt = require("markdown-it");
let md = new markdownIt({
    html: true
});


module.exports = function(content, citation, className="") {
    let addedClass = className ? ` class="${className}"` : ""; 
    let renderedContent = md.render(content)   
    let markup = `<blockquote${addedClass}>${renderedContent}<cite>${citation}</cite></blockquote>`
    let rendered = md.renderInline(markup);
    console.log(rendered);

    return rendered
}