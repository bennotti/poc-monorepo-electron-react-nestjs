import { defineConfig } from "cypress";
import { devServer } from "@cypress/vite-dev-server";

export default defineConfig({
  component: {
    devServer(devServerConfig) {
      const settings = devServer({
        ...devServerConfig,
        framework: "react",
        viteConfig: require("./vite.config.js"),
      });
      return {
        port: 3000,
        ...settings
      };
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
