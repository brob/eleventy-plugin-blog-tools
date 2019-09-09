const youtube = require("./src/youtube");
const vimeo = require("./src/vimeo");
const codepenNunjucks = require("./src/codepen-nunjucks");
const codepen = require("./src/codepen");
const blockquote = require("./src/blockquote");
const related = require("./src/related");
const limit = require("./src/limit");

module.exports = {
    configFunction: function(eleventyConfig, options = {}) {
        console.log(options)
        eleventyConfig.addShortcode("youtube", youtube);
        eleventyConfig.addShortcode("vimeo", vimeo);
        eleventyConfig.addShortcode("codepen", codepen);
        eleventyConfig.addNunjucksShortcode("codepen", codepenNunjucks);
        
        eleventyConfig.addPairedShortcode("blockquote", ((content, citation, className="") => {
            className = className ? className : options.blockquoteClass;
            return blockquote(content, citation, className);
        }));

        eleventyConfig.addFilter("related", related);
        eleventyConfig.addFilter("limit", limit);

        


        eleventyConfig.addCollection('pluginPosts', collection => {
            return collection.getFilteredByGlob('sample/posts/*.md');
        });

        return {
            markdownTemplateEngine: "njk",
            options: options
        }
    }
};