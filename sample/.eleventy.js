const blogTools = require('../.eleventy.js');

module.exports = function(eleventyConfig) {

    eleventyConfig.addPlugin(blogTools, {
        blockquoteClass: "blockquote",
        codepenHeight: "1000"
    });
    
    return {
        markdownTemplateEngine: "njk"
    }
}