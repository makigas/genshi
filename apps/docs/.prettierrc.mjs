import shared from "../../.prettierrc.js";

export default {
  ...shared,
  plugins: ["prettier-plugin-svelte"],
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};
