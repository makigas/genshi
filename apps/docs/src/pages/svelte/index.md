---
# SPDX-License-Identifier: CC-BY-SA-4.0
# SPDX-FileCopyrightText: Copyright (c) 2025-2026 Dani Rodríguez
layout: ../../layouts/DocLayout.astro
title: Svelte
---

Use the Genshi components inside Svelte components using a native API.

```html
<button type="button" class="GenshiButton GenshiButton--md">A button</button>
```

becomes just:

```tsx
<Button size="md">A button</Button>
```

## Install

Install `@makigas/genshi-svelte`, available both from [npm] and the [GitHub Packages
Registry][ghcr]. Keep in mind that you also need the base `@makigas/genshi` too:

```bash
npm add @makigas/genshi @makigas/genshi-svelte
pnpm add @makigas/genshi @makigas/genshi-svelte
yarn add @makigas/genshi @makigas/genshi-svelte
```

Keep in mind that Genshi right now is alpha and may have breaking changes. Pin your version until
1.0.0 is released, and read the [changelog] before updating.

```json
{
  "dependencies": {
    "@makigas/genshi": "1.0.0-alpha.1",
    "@makigas/genshi-svelte": "1.0.0-alpha.1"
  }
}
```

Then you can start importing components from Svelte code. Remember to also add the stylesheet in
your global scope.

```html
<script>
  import "@makigas/genshi";

  import { Link, Button, Stack } from "@makigas/genshi-svelte";
</script>
```

[npm]: https://www.npmjs.com/package/@makigas/genshi-svelte
[ghcr]: https://github.com/makigas/genshi-svelte/pkgs/npm/genshi-svelte
[changelog]: https://github.com/makigas/genshi/blob/trunk/packages/svelte/CHANGELOG.md
