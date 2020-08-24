const blogTools = require('../.eleventy.js');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(blogTools);



    eleventyConfig.addCollection('pluginPosts', collection => {
        return collection.getFilteredByGlob('posts/*.md');
    });

    return {
        markdownTemplateEngine: "njk"
    }
};