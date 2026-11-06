---
layout: ../../layouts/DocLayout.astro
title: Svelte
---

Use the Svelte wrappers with the shared Genshi stylesheet. See the
[Layout](/genshi/svelte/layout/cols/) and [Form](/genshi/svelte/form/button/) examples, or browse
the shared [Theme](/genshi/theme/colors/) reference.

## Installation

Genshi-Svelte is available both in [NPM][npm] and the [GitHub Packages Registry][ghcr]. Note that
installing Genshi-Svelte only pulls the Svelte components. To use the stylesheet, you'll have to
install `@makigas/genshi` as well:

```bash
npm i --save @makigas/genshi @makigas/genshi-svelte

# Import Montserrat for titles. You can replace this by tweaking the CSS variables.
npm i --save @fontsource/montserrat

# If you plan on using icons, Genshi-Svelte integrates with Lucide.
npm i --save @lucide/svelte
```

Note that until 1.0.0 is reached, every alpha may have breaking changes. Reviewing the changelog is
important, but also it is important to pin the version in use, and manually update, to prevent
accidental layout breaks.

```json
{
  "dependencies": {
    "@makigas/genshi": "1.0.0-alpha.1",
    "@makigas/genshi-svelte": "1.0.0-alpha.1"
  }
}
```

Then, the most straightforward to embed Genshi is to add the imports for the font and the CSS
stylesheet into `src/routes/+layout.svelte`, or wherever you plan to use it:

```svelte
<script>
  import "@fontsource/montserrat/400.css";
  import "@fontsource/montserrat/700.css";
  import "@makigas/genshi";
</script>
```

[npm]: https://www.npmjs.com/package/@makigas/genshi-svelte
[ghcr]: https://github.com/makigas/genshi-svelte/pkgs/npm/genshi-svelte
