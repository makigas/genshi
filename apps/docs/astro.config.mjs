// @ts-check
import { unified } from "@astrojs/markdown-remark";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import { sections } from "./src/navigation.mjs";

const base = "/genshi";

// https://astro.build/config
export default defineConfig({
  site: "https://makigas.github.io",
  base,
  compressHTML: true,
  integrations: [mdx(), svelte()],
  redirects: Object.fromEntries(
    Object.entries(sections).flatMap(([section, pages]) =>
      pages.map(({ slug }) => [`/${section}/${slug}`, `${base}/html/${section}/${slug}/`]),
    ),
  ),
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
