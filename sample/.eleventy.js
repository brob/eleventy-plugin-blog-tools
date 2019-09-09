const blogTools = require('../.eleventy.js');

module.exports = function(eleventyConfig) {

    eleventyConfig.addPlugin(blogTools, {
        blockquoteClass: "blockquote"
    });
    
    return {
        markdownTemplateEngine: "njk"
    }
}