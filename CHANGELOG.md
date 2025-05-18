# Changelog for @makigas/genshi

## trunk

Added:

- Form components:
  - RadioGroup component for grouping in a fieldset different checkbox options.

Changed:

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
