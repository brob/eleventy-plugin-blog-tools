const markdownIt = require("markdown-it");
let md = new markdownIt();




module.exports = function(content, citation, className="") {
    console.log(`options: ${className}`);
    let addedClass = className ? ` class="${className}"` : "";

    
    content = md.renderInline(content);
    
    return `<blockquote${addedClass}>
        ${content}
        <cite>${citation}</cite>
    </blockquote>
    `
}