---
layout: ../layouts/DocLayout.astro
title: Install
---

Genshi is available both in [NPM][npm] and in the [GitHub Packages registry][ghcr]. Add it to your
package.json using your preferred package manager.

```bash
npm add @makigas/genshi
pnpm add @makigas/genshi
yarn add @makigas/genshi
```

Keep in mind that Genshi right now is alpha and may have breaking changes. Pin your version until
1.0.0 is released, and read the [changelog] before updating.

```json
"dependencies": {
  "@makigas/genshi": "1.0.0-alpha.1",
}
```

Any modern CSS preprocessor or bundler should let you then import Genshi:

```js
import "@makigas/genshi";
```

[npm]: https://www.npmjs.com/package/@makigas/genshi
[ghcr]: https://github.com/makigas/genshi/pkgs/npm/genshi
[changelog]: https://github.com/makigas/genshi/blob/trunk/packages/css/CHANGELOG.md
