const blogTools = require('../.eleventy.js');

module.exports = function(eleventyConfig) {

    eleventyConfig.addPlugin(blogTools, {
        blockquoteClass: "blockquote",
        codepenHeight: "1000"
    });
    
    eleventyConfig.addCollection('pluginPosts', collection => {
        return collection.getFilteredByGlob('posts/*.md');
    });

    return {
        markdownTemplateEngine: "njk"
    }
}