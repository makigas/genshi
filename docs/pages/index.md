---
layout: ../layouts/RootLayout.astro
---

**Genshi** is the design system in use in makigas.es. Genshi is the japanese word for **atom**,
because this project defines atomic components that can be used to build bigger user interfaces and
layouts.

Genshi is currently under development. The components are being extracted from the website, and
cleaned up as they are imported here. Version 1.0.0 will be released once Genshi is deployed to
production.

I started working on Genshi because the original stylesheet of makigas.es was getting difficult to
maintain, and code was being duplicated. Changes were difficult to make, so things like a dark mode
or a new dashboard did not have a chance to be developed.

Currently, Genshi will focus on the components that I need right now in the website, including the
CMS system, such as forms and data tables. **Genshi is very opinionated** about some things because
it has born as a design system for a specific set of websites.

<s>Genshi is not a general purpose web framework.</s> I hope I don't accidentally create a general
purpose web framework.

## Features

- CSS-only framework, with no JavaScript dependencies. (This will probably change in the future as
  some components that actually require JavaScript are imported.)
- Uses BEM methodology. Class names are a little verbose, but Genshi is meant to be used with a
  component framework such as ViewComponent or Svelte, so the framework will write the class names
  for you.
- Lightweight and without too much fluff.

## Is it stable?

**No**. The API is currently under development. Some components may change class name. Some
components may be split. Some mixins may be made. Some variables may change.

If you want to follow updates, watch the repo on GitHub so that you can get notified of new releases
to see how the project advances.

## Installation instructions

Genshi is available both in [NPM][npm] and in the [GitHub Packages registry][ghcr].

```bash
npm i --save @makigas/genshi
```

Note that until 1.0.0 is reached, every alpha may have breaking changes. Reading the [changelog] is
important, but also it is important to pin the version in use, and manually update, to prevent
accidental layout breaks.

```json
"dependencies": {
  "@makigas/genshi": "1.0.0-alpha.0",
}
```

If you are using a CSS preprocessor or bundler such as PostCSS, you should be able to just import
Genshi by using the following import statement in your bundle file:

```js
import "@makigas/genshi";
```

If your bundler does not support reading the `style` attribute from a package.json file, you can
also use the full import path:

```js
import "@makigas/genshi/dist/genshi.css";
```

## Roadmap

- Move existing components from github.com/makigas/makigas.es
- Freeze a first alpha release
- Create `genshi-svelte` and `genshi-view-component` and expose the components
- Refactor github.com/makigas/makigas.es to use the new component libraries
- Continue iterating reusable components
- Once things look nice, deploy site to production and release genshi 1.0.0 on all libraries

## Stack

**Genshi** is powered by SCSS, using the `dart-scss` dialect. I am making use of new features like
`@use` and `@forward`, which are currently not present in other dialects. So far I don't have a
strong opinion, but it is good to namespace things. Porting this to PostCSS could be a good
experiment in the future, but it is currently not a priority because things work.

I am using Astro for [the docs][docs].

And I am using things like Stylelint and Prettier for the linting and formatting.

## License

Genshi is published under the terms of the GNU Lesser Public License 3.0, or simply GNU LGPL 3.0.
Make sure you [read the public license][lgpl] before using this library in your project.

[changelog]: https://github.com/makigas/genshi/blob/trunk/CHANGELOG.md
[docs]: https://makigas.github.io/genshi/
[lgpl]: https://www.gnu.org/licenses/lgpl-3.0.en.html
[npm]: https://www.npmjs.com/package/@makigas/genshi
[ghcr]: https://github.com/makigas/genshi/pkgs/npm/genshi
