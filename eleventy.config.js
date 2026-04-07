/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */

const crypto = require("node:crypto");

/** GitHub Pages preview: deploy with PATH_PREFIX=/dev/ so assets and links resolve under /dev/. */
const pathPrefix = process.env.PATH_PREFIX || "/";

const trimmedPrefix = pathPrefix.replace(/\/+$/, "") || "/";
const isDevPreviewBuild = trimmedPrefix === "/dev";

const previewPassword = (process.env.PREVIEW_PASSWORD || "").trim();
const previewAuthHash =
  isDevPreviewBuild && previewPassword
    ? crypto.createHash("sha256").update(previewPassword, "utf8").digest("hex")
    : "";

module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("year", () => String(new Date().getFullYear()));
  eleventyConfig.addGlobalData("previewAuthHash", previewAuthHash);

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
