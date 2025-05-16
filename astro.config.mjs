// @ts-check
import { defineConfig } from "astro/config";
import { resolve } from "node:path";

// https://astro.build/config
export default defineConfig({
  site: "https://makigas.github.io",
  base: "/genshi",
  srcDir: "docs",
  outDir: "www",
  publicDir: "docs/public",
  markdown: {
    shikiConfig: {
      theme: "catppuccin-frappe",
      transformers: [
        {
          pre(node) {
            node.properties.class = `${node.properties.class} code`;
          },
        },
      ],
    },
  },
});
