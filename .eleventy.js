const youtube = require("./src/youtube");
const vimeo = require("./src/vimeo");
const codepenNunjucks = require("./src/codepen-nunjucks");
const codepen = require("./src/codepen");
const related = require("./src/related");
const limit = require("./src/limit");
const excerpt = require("./src/excerpt");

module.exports = function(eleventyConfig) {
    eleventyConfig.addShortcode("youtube", youtube);
    eleventyConfig.addShortcode("vimeo", vimeo);
    eleventyConfig.addShortcode("codepen", codepen);
    eleventyConfig.addShortcode("excerpt", excerpt);
    eleventyConfig.addNunjucksShortcode("codepen", codepenNunjucks);
    eleventyConfig.addFilter("related", related);
    eleventyConfig.addFilter("limit", limit);
    


    eleventyConfig.addCollection('pluginPosts', collection => {
        return collection.getFilteredByGlob('sample/posts/*.md');
    });

    return {
        markdownTemplateEngine: "njk"
    }
};