const youtube = require("./src/youtube");

module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode("youtube", youtube);
};