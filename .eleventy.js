import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";

/**
 * @param {import("@11ty/eleventy/UserConfig").default} config
 */
export default function (config) {
  config.addPlugin(EleventyVitePlugin);
  config.setInputDirectory('./src/pages');
  config.setLayoutsDirectory("../components");
  config.setLayoutsDirectory("../layouts");
  config.setOutputDirectory('./dist');
}
