/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */

const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

/** Only production deploy (main) sets MINIFY=1; /dev preview stays readable. */
const shouldMinify = process.env.MINIFY === "1";

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

  if (shouldMinify) {
    const { minify: minifyHtml } = require("html-minifier-terser");
    const CleanCSS = require("clean-css");

    eleventyConfig.addTransform("htmlmin", async function (content) {
      const outputPath = this.outputPath;
      if (!outputPath || !outputPath.endsWith(".html")) {
        return content;
      }
      try {
        return await minifyHtml(content, {
          collapseWhitespace: true,
          conservativeCollapse: true,
          decodeEntities: true,
          minifyCSS: true,
          minifyJS: true,
          removeAttributeQuotes: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
        });
      } catch (err) {
        console.warn("[htmlmin]", outputPath, err);
        return content;
      }
    });

    eleventyConfig.on("eleventy.after", () => {
      const cssPath = path.join("_site", "css", "main.css");
      if (!fs.existsSync(cssPath)) {
        return;
      }
      try {
        const input = fs.readFileSync(cssPath, "utf8");
        const { styles, errors } = new CleanCSS({ level: 2 }).minify(input);
        if (errors?.length) {
          console.warn("[cssmin]", errors);
        }
        fs.writeFileSync(cssPath, styles, "utf8");
      } catch (err) {
        console.warn("[cssmin]", cssPath, err);
      }
    });
  }

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
