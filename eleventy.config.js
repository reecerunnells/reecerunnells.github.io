/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */

/** GitHub Pages preview: deploy with PATH_PREFIX=/dev/ so assets and links resolve under /dev/. */
const pathPrefix = process.env.PATH_PREFIX || "/";

module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("year", () => String(new Date().getFullYear()));

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    pathPrefix,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
