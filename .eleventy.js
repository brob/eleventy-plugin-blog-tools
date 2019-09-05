const youtube = require("./src/youtube");
const codepen = require("./src/codepen");
const related = require("./src/related");

module.exports = function(eleventyConfig) {
    eleventyConfig.addShortcode("youtube", youtube);
    eleventyConfig.addShortcode("codepen", codepen);
    eleventyConfig.addFilter("related", related);


    eleventyConfig.addCollection('posts', collection => {
        return collection.getFilteredByGlob('sample/posts/*.md');
    });
};