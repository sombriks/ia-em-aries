/**
 * @param {import("@11ty/eleventy/UserConfig").default} config
 */
export default function (config) {
  // basic di rectories
  config.setInputDirectory('src/pages');
  config.setIncludesDirectory("../components");
  config.setLayoutsDirectory("../layouts");
  // client-side resources
  config.addPassthroughCopy({ "src/assets": "assets" });
  config.addPassthroughCopy({ "src/scripts": "scripts" });
  // exposed libraries
  config.addPassthroughCopy({ "node_modules/@mlc-ai/web-llm/lib": "web-llm" });
  config.addPassthroughCopy({ "node_modules/@owickstrom/the-monospace-web/src": "the-monospace-web" });
  // output
  config.setOutputDirectory('dist');
}
