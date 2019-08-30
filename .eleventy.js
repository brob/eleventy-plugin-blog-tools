const youtube = require("./src/youtube");
const codepen = require("./src/codepen");

module.exports = function(eleventyConfig) {
    eleventyConfig.addShortcode("youtube", youtube);
    eleventyConfig.addShortcode("codepen", codepen);
};