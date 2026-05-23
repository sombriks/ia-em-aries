import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";

/**
 * @param {import("@11ty/eleventy/UserConfig").default} config
 */
export default function (config) {
  // basic directories
  config.setInputDirectory('./src/pages');
  config.setLayoutsDirectory("../components");
  config.setLayoutsDirectory("../layouts");
  config.setOutputDirectory('./dist');
  config.addPlugin(EleventyVitePlugin, {
    viteOptions: {
      server: {
        mode: "development",
        middlewareMode: true,
        watch: ["./src/scripts/**"]
      },
      build: {
        rolldownOptions: {
          input: {
            main: "./src/scripts/index.js"
          },
          output: {
            entryFileNames: "assets/[name].js"
          },
        }
      }
    }
  });
}
