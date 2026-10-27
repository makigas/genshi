// @ts-check
import { unified } from "@astrojs/markdown-remark";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://makigas.github.io",
  base: "/genshi",
  srcDir: "docs",
  outDir: "www",
  publicDir: "docs/public",
  compressHTML: true,
  markdown: {
    processor: unified(),
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
