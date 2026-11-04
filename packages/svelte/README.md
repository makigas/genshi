<picture>
  <source media="(prefers-color-scheme: dark)" srcset="src/doc/genshi@dark.png" />
  <source media="(prefers-color-scheme: light)" srcset="src/doc/genshi.png" />
  <img alt="Genshi" src="src/doc/genshi.png" />
</picture>

# Genshi-Svelte

These are the Svelte Components required to integrate Genshi into a Svelte application.

**Genshi** is the design system in use in makigas.es. Genshi is the japanese word for atom, because
this project defines atomic components that can be used to build bigger user interfaces and layouts.

For more information, please check out [the original Genshi docs][genshi].

## Is it stable?

**No**. It's as unstable as the original Genshi, at least for now. If you want to follow updates,
watch the repo on GitHub so that you can get notified of new releases to see how the project
advances.

## Installation instructions

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

Note that until 1.0.0 is reached, every alpha may have breaking changes. Reading the [changelog] is
important, but also it is important to pin the version in use, and manually update, to prevent
accidental layout breaks.

```json
"dependencies": {
  "@makigas/genshi": "1.0.0-alpha.1",
  "@makigas/genshi-svelte": "1.0.0-alpha.1",
}
```

Then, the most straightforward to embed Genshi is to add the imports for the font and the CSS
stylesheet into `src/routes/+layout.svelte`, or wherever you plan to use it:

```svelte
<script>
	import '@fontsource/montserrat/400.css';
	import '@fontsource/montserrat/700.css';
	import '@makigas/genshi';
</script>
```

## License

Genshi is published under the terms of the GNU Lesser Public License 3.0, or simply GNU LGPL 3.0.
Make sure you [read the public license][lgpl] before using this library in your project.

[npm]: https://www.npmjs.com/package/@makigas/genshi-svelte
[ghcr]: https://github.com/makigas/genshi-svelte/pkgs/npm/genshi-svelte
[changelog]: https://github.com/makigas/genshi-svelte/blob/trunk/CHANGELOG.md
[genshi]: https://makigas.github.io/genshi
[lgpl]: https://www.gnu.org/licenses/lgpl-3.0.en.html
