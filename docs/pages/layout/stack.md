---
layout: ../../layouts/DocLayout.astro

title: Stack
---

Stacks allow to group horizontally or vertically a set of nodes. Note that the elements will keep
their size. In other words, this is not a flexbox, but a grid.

To create an stack, use the following code:

```html
<div class="GenshiStack">
  <div>Node</div>
  <div>Node</div>
  <div>Node</div>
  <div>Node</div>
</div>
```

<div class="GenshiStack">
  <button type="button" class="GenshiButton">Compose</button>
  <button type="button" class="GenshiButton">Reply</button>
  <button type="button" class="GenshiButton">Reply All</button>
  <button type="button" class="GenshiButton">Forward</button>
</div>

The stack will wrap nicely if the screen isn't large enough for the items. If you have special
needs, make sure that you aren't using a stack where you should be actually using a col, which
doesn't have this behaviour.

Change the size of the window to test the behaviour in the following example:

<div class="GenshiStack GenshiStack--compact">
  <button type="button" class="GenshiButton">Button 1</button>
  <button type="button" class="GenshiButton">Button 2</button>
  <button type="button" class="GenshiButton">Button 3</button>
  <button type="button" class="GenshiButton">Button 4</button>
  <button type="button" class="GenshiButton">Button 5</button>
  <button type="button" class="GenshiButton">Button 6</button>
</div>

## Stack positioning

You can further control the positioning of the stack by pushing the elements to the end of the view,
using the `GenshiStack--end` modifier:

<div class="GenshiStack GenshiStack--end">
  <button type="button" class="GenshiButton">Compose</button>
  <button type="button" class="GenshiButton">Reply</button>
  <button type="button" class="GenshiButton">Reply All</button>
  <button type="button" class="GenshiButton">Forward</button>
</div>

Or center the elements evenly with `GenshiStack--center`:

<div class="GenshiStack GenshiStack--center">
  <button type="button" class="GenshiButton">Compose</button>
  <button type="button" class="GenshiButton">Reply</button>
  <button type="button" class="GenshiButton">Reply All</button>
  <button type="button" class="GenshiButton">Forward</button>
</div>

Or just place space between the elements with `GenshiStack--between`:

<div class="GenshiStack GenshiStack--between">
  <button type="button" class="GenshiButton">Compose</button>
  <button type="button" class="GenshiButton">Reply</button>
  <button type="button" class="GenshiButton">Reply All</button>
  <button type="button" class="GenshiButton">Forward</button>
</div>

## Stack direction

By default, the stack is horizontal: items are placed horizontally. You can change this with the
additional modifiers:

- To make a vertical stack, use `GenshiButton--v` (`v` stands for `vertical`).
- To make an horizontal stack with reverse order, use `GenshiButton--hr`.
- To make a vertical stack with reverse order, use `GenshiButton--vr`.

<div class="GenshiStack GenshiStack--cozy GenshiStack--center">
  <div class="GenshiStack GenshiStack--v GenshiStack--cozy">
    <div class="GenshiStack GenshiStack--inline">
      <button type="button" class="GenshiButton">1</button>
      <button type="button" class="GenshiButton">2</button>
      <button type="button" class="GenshiButton">3</button>
      <button type="button" class="GenshiButton">4</button>
    </div>
    <div class="GenshiStack GenshiStack--inline GenshiStack--hr">
      <button type="button" class="GenshiButton">1</button>
      <button type="button" class="GenshiButton">2</button>
      <button type="button" class="GenshiButton">3</button>
      <button type="button" class="GenshiButton">4</button>
    </div>
  </div>
  <div class="GenshiStack GenshiStack--cozy">
    <div class="GenshiStack GenshiStack--inline GenshiStack--v">
      <button type="button" class="GenshiButton">1</button>
      <button type="button" class="GenshiButton">2</button>
      <button type="button" class="GenshiButton">3</button>
      <button type="button" class="GenshiButton">4</button>
    </div>
    <div class="GenshiStack GenshiStack--inline GenshiStack--vr">
      <button type="button" class="GenshiButton">1</button>
      <button type="button" class="GenshiButton">2</button>
      <button type="button" class="GenshiButton">3</button>
      <button type="button" class="GenshiButton">4</button>
    </div>
  </div>
</div>

## Gap size

Use an additional modifier to configure the size of the gap:

- Gap-less (no gap): `GenshiStack--gapless`
- Compact (0.5rem): `GenshiStack--compact`
- Cozy (1.5rem): `GenshiStack--cozy`

<div class="GenshiStack GenshiStack--v">
  <div class="GenshiStack GenshiStack--gapless">
    <button type="button" class="GenshiButton">Compose</button>
    <button type="button" class="GenshiButton">Reply</button>
    <button type="button" class="GenshiButton">Reply All</button>
    <button type="button" class="GenshiButton">Forward</button>
  </div>
  <div class="GenshiStack GenshiStack--compact">
    <button type="button" class="GenshiButton">Compose</button>
    <button type="button" class="GenshiButton">Reply</button>
    <button type="button" class="GenshiButton">Reply All</button>
    <button type="button" class="GenshiButton">Forward</button>
  </div>
  <div class="GenshiStack">
    <button type="button" class="GenshiButton">Compose</button>
    <button type="button" class="GenshiButton">Reply</button>
    <button type="button" class="GenshiButton">Reply All</button>
    <button type="button" class="GenshiButton">Forward</button>
  </div>
  <div class="GenshiStack GenshiStack--cozy">
    <button type="button" class="GenshiButton">Compose</button>
    <button type="button" class="GenshiButton">Reply</button>
    <button type="button" class="GenshiButton">Reply All</button>
    <button type="button" class="GenshiButton">Forward</button>
  </div>
</div>
