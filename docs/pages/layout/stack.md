---
layout: ../../layouts/Layout.astro
---

# Stack

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

## Stack direction

By default, the stack is horizontal: items are placed horizontally. You can change this with the
additional modifiers:

- To make a vertical stack, use `GenshiButton--v` (`v` stands for `vertical`).
- To make an horizontal stack with reverse order, use `GenshiButton--hr`.
- To make a vertical stack with reverse order, use `GenshiButton--vr`.

<div class="GenshiStack GenshiStack--v GenshiStack--cozy">
  <div class="GenshiStack GenshiStack--v GenshiStack--cozy">
    <div class="GenshiStack GenshiStack--inline">
      <button type="button" class="GenshiButton">Compose</button>
      <button type="button" class="GenshiButton">Reply</button>
      <button type="button" class="GenshiButton">Reply All</button>
      <button type="button" class="GenshiButton">Forward</button>
    </div>
    <div class="GenshiStack GenshiStack--inline GenshiStack--hr">
      <button type="button" class="GenshiButton">Compose</button>
      <button type="button" class="GenshiButton">Reply</button>
      <button type="button" class="GenshiButton">Reply All</button>
      <button type="button" class="GenshiButton">Forward</button>
    </div>
  </div>
  <div class="GenshiStack GenshiStack--cozy">
    <div class="GenshiStack GenshiStack--inline GenshiStack--v">
      <button type="button" class="GenshiButton">Compose</button>
      <button type="button" class="GenshiButton">Reply</button>
      <button type="button" class="GenshiButton">Reply All</button>
      <button type="button" class="GenshiButton">Forward</button>
    </div>
    <div class="GenshiStack GenshiStack--inline GenshiStack--vr">
      <button type="button" class="GenshiButton">Compose</button>
      <button type="button" class="GenshiButton">Reply</button>
      <button type="button" class="GenshiButton">Reply All</button>
      <button type="button" class="GenshiButton">Forward</button>
    </div>
  </div>
</div>

## Inline

By default, the stack will span the entire width of the container. This is noticeable when using the
reverse directions:

<div class="GenshiStack GenshiStack--hr">
  <button type="button" class="GenshiButton">Compose</button>
  <button type="button" class="GenshiButton">Reply</button>
  <button type="button" class="GenshiButton">Reply All</button>
  <button type="button" class="GenshiButton">Forward</button>
</div>

To make it inline, add the `GenshiStack--inline` modifier:

<div class="GenshiStack GenshiStack--inline GenshiStack--hr">
  <button type="button" class="GenshiButton">Compose</button>
  <button type="button" class="GenshiButton">Reply</button>
  <button type="button" class="GenshiButton">Reply All</button>
  <button type="button" class="GenshiButton">Forward</button>
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
