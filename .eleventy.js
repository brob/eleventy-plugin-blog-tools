const youtube = require("./src/youtube");
const vimeo = require("./src/vimeo");
const codepen = require("./src/codepen");
const related = require("./src/related");

module.exports = function(eleventyConfig) {
    eleventyConfig.addShortcode("youtube", youtube);
    eleventyConfig.addShortcode("vimeo", vimeo);
    eleventyConfig.addShortcode("codepen", codepen);
    eleventyConfig.addFilter("related", related);


    eleventyConfig.addCollection('pluginPosts', collection => {
        return collection.getFilteredByGlob('sample/posts/*.md');
    });
};