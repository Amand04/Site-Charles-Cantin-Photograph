module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/scss/");

  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/css");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "public",
    },
  };
};
