---
layout: ../../layouts/DocLayout.astro

title: Wrapper
---

A wrapper is a centered block region that contains some HTML, whose main purpose is usually to
control or limit its width in the browser viewport.

Typically you see wrappers in many pages where the page layout wants to have a known width, no
matter the screen resolution of the user browser.

```html
<body>
  <div class="GenshiWrapper">I am contained inside the screen.</div>
</body>
```

Another use case of wrappers is to be defined inside an element like a hero or a header. The element
will define a background color that spans the complete browser width (100%), but the wrapper allows
the content to stay centered.

```html
<div class="jumbo">
  <!-- There may be some CSS code to make the jumbo have a background color -->
  <div class="GenshiWrapper">
    <p>Welcome</p>
  </div>
</div>
```

As you can see from these examples, to make a wrapper in Genshi you use the `GenshiWrapper` class.

## Breakpoints

Genshi provides the following browser viewports:

| code | name      | breaks at | viewport size |
| ---- | --------- | --------- | ------------- |
| xs   | mobile    | -         | 100% - 30px   |
| sm   | tablet    | 768px     | 100% - 30px   |
| md   | desktop   | 1024px    | 992px         |
| lg   | wide      | 1400px    | 1280px        |
| xl   | ultrawide | 1920px    | 1600px        |

## Slim mode

The ultrawide wrapper supports an additional modifier called `GenshiWrapper--slim`. If present, the
viewport size for the ultrawide layout will be capped at 1280px, like the one used in the wide
wrapper.

The main use case for this is to further limit the width of typography elements, where a larger
viewport size may make reading uncomfortable.

## Fluid

Use the fluid variant if you want the element to span the whole browser viewport, but you want to
add a few pixels of margin at the left and right of the browser viewport.

This modifier works best on navbars, toolbars and other nodes that may present a lot of input
components, or also if you want to define immersive layouts. At the same time, this layout works
poorly for text, because on bigger screens the number of characters per line may be too much.

```html
<div class="jumbo">
  <div class="GenshiWrapper GenshiWrapper--fluid">
    <p>Welcome</p>
  </div>
</div>
```

## Breath

A quick helper modifier is `GenshiWrapper--breath`. Add this helper if you want to force some margin
above and below the wrapper, to let the item breathe vertically inside its parent element:

```html
<div class="jumbo">
  <div class="GenshiWrapper GenshiWrapper--breath">
    <p>Welcome</p>
  </div>
</div>
```
