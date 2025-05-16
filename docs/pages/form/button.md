---
layout: ../../layouts/DocLayout.astro

title: Button
---

To create a button, add the `GenshiButton` class to a button:

```html
<button type="button" class="GenshiButton">Click me</button>
```

<button type="button" class="GenshiButton">
  Click me
</button>

However, if you want to use a button to change the browser URL, you can also add the `GenshiButton`
class to a link. It is important to always remember the semantic distinction between using `<a>` and
using `<button>`.

```html
<a href="https://github.com/makigas/genshi" target="_blank" class="GenshiButton">
  Star repo on GitHub
</a>
```

<a href="https://github.com/makigas/genshi" target="_blank" class="GenshiButton">Star repo on
GitHub</a>

## Button sizes

Buttons come in a variety of sizes. Choose the one of your wish:

```html
<button type="button" class="GenshiButton GenshiButton--xs">Extra small</button>
<button type="button" class="GenshiButton GenshiButton--sm">Small</button>
<button type="button" class="GenshiButton GenshiButton--md">Medium (default)</button>
<button type="button" class="GenshiButton GenshiButton--lg">Large</button>
<button type="button" class="GenshiButton GenshiButton--xl">Extra large</button>
```

<div>
  <button type="button" class="GenshiButton GenshiButton--xs">Extra small</button>
  <button type="button" class="GenshiButton GenshiButton--sm">Small</button>
  <button type="button" class="GenshiButton GenshiButton--md">Medium (default)</button>
  <button type="button" class="GenshiButton GenshiButton--lg">Large</button>
  <button type="button" class="GenshiButton GenshiButton--xl">Extra large</button>
</div>

## Bold button

While this design system doesn't use outlined buttons, and every button has a background, by default
the buttons will look like blended with the background. If you want to make the button stand out,
mark it as bold, by using the `GenshiButton--bold` class:

```html
<button class="GenshiButton GenshiButton--bold">Back</button>
```

<div>
<button class="GenshiButton GenshiButton--bold">Back</button>
</div>

## Color buttons

You can add some accent to the buttons by using one of the semantic classes. There are currently two
classes:

Use `GenshiButton--suggested` to convey the primary button, or the button that may complete a task.

```html
<button class="GenshiButton GenshiButton--suggested">Save</button>
<button class="GenshiButton GenshiButton--suggested GenshiButton--bold">Submit</button>
```

<div>
  <button class="GenshiButton GenshiButton--suggested">Save</button>
  <button class="GenshiButton GenshiButton--suggested GenshiButton--bold">Submit</button>
</div>

Use `GenshiButton--destructive` to convey the dangerous button, which is often used to mark that
pressing a button will have important consequences such as the destruction of records.

```html
<button class="GenshiButton GenshiButton--destructive">Revert</button>
<button class="GenshiButton GenshiButton--destructive GenshiButton--bold">Delete</button>
```

<div>
  <button class="GenshiButton GenshiButton--destructive">Revert</button>
  <button class="GenshiButton GenshiButton--destructive GenshiButton--bold">Delete</button>
</div>

## Buttons with icons

The button component is compatible with symbolic icons, such as the ones provided by libraries like
Feather, Lucide and similar, as long as these are added semantically.

To add an icon to the button simply add the node before or after the text. You can also omit the
text, but please make sure to add an `aria-label` attribute at the `<button>` for accessibility
purposes. (I shouldn't be the one telling you here...)

<div>
  <button type="button" class="GenshiButton">
    <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2"
      fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiButton__icon">
      <path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
      </path>
    </svg>
    Like
  </button>
  <button type="button" class="GenshiButton">
    Play video
    <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2"
      fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiButton__icon">
      <polygon points="23 7 16 12 23 17 23 7"></polygon>
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
    </svg>
  </button>
  <button type="button" class="GenshiButton GenshiButton--destructive">
    Delete
    <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2"
      fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiButton__icon">
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
      <line x1="10" y1="11" x2="10" y2="17"></line>
      <line x1="14" y1="11" x2="14" y2="17"></line>
    </svg>
  </button>
  <button type="button" class="GenshiButton GenshiButton--suggested GenshiButton--bold" aria-label="New element">
    <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2"
      fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiButton__icon">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="16"></line>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  </button>
</div>

## Disabled buttons

Simply add the `disabled` attribute to the button tag to mark it as disabled.

```html
<button type="button" disabled class="GenshiButton">Can't touch this</button>
```

<div class="GenshiStack GenshiStack--c GenshiStack--compact">
  <div>
    <button type="button" disabled class="GenshiButton">
      Can't touch this
    </button>
    <button type="button" disabled class="GenshiButton GenshiButton--suggested">
      Can't create this
    </button>
    <button type="button" disabled class="GenshiButton GenshiButton--destructive">
      Can't destroy this
    </button>
  </div>
  <div>
    <button type="button" disabled class="GenshiButton GenshiButton--bold">
      Can't touch this
    </button>
    <button type="button" disabled class="GenshiButton GenshiButton--bold GenshiButton--suggested">
      Can't create this
    </button>
    <button type="button" disabled class="GenshiButton GenshiButton--bold GenshiButton--destructive">
      Can't destroy this
    </button>
  </div>
</div>
