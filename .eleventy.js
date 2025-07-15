export default async function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addWatchTarget("./src/js");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
}
