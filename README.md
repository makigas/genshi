![Genshi](docs/public/genshi.png)

# Genshi

**Genshi** is the design system in use in makigas.es. Genshi is the japanese word for **atom**,
because this project defines atomic components that can be used to build bigger user interfaces and
layouts.

Genshi is currently under development. The components are being extracted from the website, and
cleaned up as they are imported here. Version 1.0.0 will be released once Genshi is deployed to
production.

## Features

- CSS-only framework, with no JavaScript dependencies. (This will probably change in the future as
  some components that actually require JavaScript are imported.)
- Uses BEM methodology. Class names are a little verbose, but Genshi is meant to be used with a
  component framework such as ViewComponent or Svelte, so the framework will write the class names
  for you.
- Lightweight and without too much fluff.

## Is Genshi for me?

**Probably not, unless you are working on prototypes.** Genshi is a private design system, it
implements the design in use in a particular website, but it has a very opinionated design and
appearance.

I started working on Genshi because the original stylesheet of makigas.es was getting difficult to
maintain, and code was being duplicated. Changes were difficult to make, so things like a dark mode
or a new dashboard did not have a chance to be developed.

Genshi will focus on the components that I need the most in the website, including the backoffice
system, such as forms or data tables. However, **this is not a general purpose CSS web framework**,
or at least I hope I don't accidentally create a general purpose CSS web framework.

## Is it stable?

**No**. The API is currently under development. Some components may change class name. Some
components may be split. Some mixins may be made. Some variables may change.

If you want to follow updates, watch the repo on GitHub so that you can get notified of new releases
to see how the project advances.

## Roadmap

- Move existing components from github.com/makigas/makigas.es
- Freeze a first alpha release
- Create `genshi-svelte` and `genshi-view-component` and expose the components
- Refactor github.com/makigas/makigas.es to use the new component libraries
- Continue iterating reusable components
- Once things look nice, deploy site to production and release genshi 1.0.0 on all libraries

## Stack

**Genshi** is powered by:

- `dart-sass`: I am not using other SCSS dialect such as PostCSS, because I am making use of `@use`,
  `@forward` and functions from the standard library. I thought it was a good experiment. Porting
  this to PostCSS in the future could be a good experiment too, but it is currently not a priority.
- `astro`: the docs site is built using it.
- `stylelint` for linting, already configured to support SCSS and SMACSS.
- `prettier` for code formatting.

## Usage

Because it is under development, it's currently not possible to use it without compiling manually
and copying the output to the proper directories.

```sh
npm i

# To compile the unminified version (if you are going to use a bundler)
npm run dist
cp dist/genshi.css ~/wherever/you/need

# To compile the minified version (if you are going to import this raw)
npm run dist:min
cp dist/genshi.min.css ~/wherever/you/need
```

Come back soon for a bundled version.

## License

Genshi is published under the terms of the GNU Lesser Public License 3.0, or simply GNU LGPL 3.0.
Make sure you [read the public license](https://www.gnu.org/licenses/lgpl-3.0.en.html) before using
this library in your project.
