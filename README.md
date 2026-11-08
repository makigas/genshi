<picture>
  <source media="(prefers-color-scheme: dark)" srcset="apps/docs/src/assets/genshi@dark.png" />
  <source media="(prefers-color-scheme: light)" srcset="apps/docs/src/assets/genshi.png" />
  <img alt="Genshi" src="apps/docs/src/assets/genshi.png" />
</picture>

**Genshi** is the design system in use in makigas.es and other related sites. Genshi is the Japanese
word for **atom**, because this project defines atomic components that can be used to build bigger
user interfaces and layouts.

It is not intended to be a general purpose framework. It is meant to be opinionated. If it becomes
useful for other people, it is an accident.

## Is it stable?

**No**. The API is currently under development. Many class names, CSS properties and props will
probably change. Some mixins will be made, others will be removed.

Genshi is currently under development. Components are being extracted from the websites and they are
being cleaned up as they are moved here. Version 1.0.0 will not be released until it the library is
stable enough to daily drive it in production.

## Install

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

## Usage

For additional usage instructions, [read the docs][docs].

## License

Genshi is published under the terms of the GNU Affero General Public License 3.0 or later
(AGPL-3.0-or-later).

[changelog]: https://github.com/makigas/genshi/blob/trunk/packages/css/CHANGELOG.md
[docs]: https://makigas.github.io/genshi/
[npm]: https://www.npmjs.com/package/@makigas/genshi
[ghcr]: https://github.com/makigas/genshi/pkgs/npm/genshi
[docs]: https://makigas.github.io/genshi/
