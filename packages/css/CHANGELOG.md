# Changelog for @makigas/genshi

## 1.0.0-alpha.2

Genshi is now a monorepo. @makigas/genshi is still the core package. Genshi is now released under
the terms of the AGPL-3.0-or-later license.

Added:

- Colors:
  - New color tokens -50 and -950 have been defined.

Changed:

- Colors:
  - Color palette now uses more vivid colors with improved math for the chroma and luma sweeps.
  - Minified version of the CSS now emits hexadecimal colors, to further reduce file size.

Fixed:

- Form/Button:
  - Icons in buttons were not scaling up and down.

## 1.0.0-alpha.1

Added:

- Form components:
  - RadioGroup component for grouping in a fieldset different checkbox options.

Changed:

- Cols will now expand horizontally and use the the whole container width.
- Color palette now uses hexadecimal colors rather than `rgb()` expressions.

## 1.0.0-alpha.0

This is the first alpha. It adds a couple of components and selectors as a proof of concept. Now,
Genshi will be integrated in other repositories to test the connection. After the integration is
done, more components will be moved here.

Added:

- Current typography and color settings
- Layout components:
  - Columns: displays content in columns using a flex layout.
  - Stack: presents content in an horizontal or vertical stack using a flex layout.
  - Wrapper: pads horizontally the content of a page in the viewport.
- Form components:
  - Input: general styles for most `<input>` components.
  - Button: your average button component for forms and links.
  - Select: specific styles for the `<select>` selector.
