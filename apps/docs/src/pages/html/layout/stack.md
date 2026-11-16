---
# SPDX-License-Identifier: CC-BY-SA-4.0
# SPDX-FileCopyrightText: Copyright (c) 2025-2026 Dani Rodríguez
layout: ../../../layouts/DocLayout.astro

title: Stack
---

Place a set of elements one next to the other.

Use these in contexts where you want to place similar elements in a tidy fashion, with precise
control over the alignment and spacing of elements, such as toolbars or button groups.

The alternative, GsCols, can be used instead when you need to fit the whole container with the
elements. This is not how the stack works and therefore you shouldn't use this component when you
need full width.

## Usage

Group the elements to stack in a container with the `GsStack` class.

```html
<div class="GsStack">
  <div>Node</div>
  <div>Node</div>
  <div>Node</div>
  <div>Node</div>
</div>
```

<div class="GsStack">
  <button type="button" class="GenshiButton">Compose</button>
  <button type="button" class="GenshiButton">Reply</button>
  <button type="button" class="GenshiButton">Reply All</button>
  <button type="button" class="GenshiButton">Forward</button>
</div>

The stack will wrap nicely if the screen isn't large enough for the items. If you can't accept
flowing the elements when the viewport is too small to fit them all, switch to `GsCols`, which
doesn't have this behaviour.

Change the size of the window to test the behaviour in the following example:

<div class="GsStack GsGap--sm">
  <button type="button" class="GenshiButton">Button 1</button>
  <button type="button" class="GenshiButton">Button 2</button>
  <button type="button" class="GenshiButton">Button 3</button>
  <button type="button" class="GenshiButton">Button 4</button>
  <button type="button" class="GenshiButton">Button 5</button>
  <button type="button" class="GenshiButton">Button 6</button>
</div>

## Stack alignment

You can position the stack elements with one of the following modifiers:

- `GsStack--start`: puts them at the start of the container.
- `GsStack--end`: puts them at the end of the container.
- `GsStack--center`: puts them centered in the container.
- `GsStack--fill`: fill the whole container, with space in between.

<div class="GsStack GsStack--v GsGap--lg example">
    <div class="GsStack GsStack--start">
    <button type="button" class="GenshiButton">Compose</button>
    <button type="button" class="GenshiButton">Reply</button>
    <button type="button" class="GenshiButton">Reply All</button>
    <button type="button" class="GenshiButton">Forward</button>
    </div>
    <div class="GsStack GsStack--center">
    <button type="button" class="GenshiButton">Compose</button>
    <button type="button" class="GenshiButton">Reply</button>
    <button type="button" class="GenshiButton">Reply All</button>
    <button type="button" class="GenshiButton">Forward</button>
    </div>
    <div class="GsStack GsStack--end">
    <button type="button" class="GenshiButton">Compose</button>
    <button type="button" class="GenshiButton">Reply</button>
    <button type="button" class="GenshiButton">Reply All</button>
    <button type="button" class="GenshiButton">Forward</button>
    </div>
    <div class="GsStack GsStack--fill">
    <button type="button" class="GenshiButton">Compose</button>
    <button type="button" class="GenshiButton">Reply</button>
    <button type="button" class="GenshiButton">Reply All</button>
    <button type="button" class="GenshiButton">Forward</button>
    </div>
</div>

## Stack direction

By default, the stack is horizontal: items are placed horizontally and in the order they are input.
You can change this with the additional modifiers:

- `GsStack--h`: horizontal mode.
- `GsStack--hr`: horizontal mode, reversed.
- `GsStack--v`: vertical mode.
- `GsStack--vr`: vertical mode, reversed.

<div class="GsCols GsGap--lg GsCols--force">
  <div class="GsStack GsStack--v GsGap--lg">
    <div class="GsStack GsStack--h GsStack--center">
      <button type="button" class="GenshiButton">1</button>
      <button type="button" class="GenshiButton">2</button>
      <button type="button" class="GenshiButton">3</button>
    </div>
    <div class="GsStack GsStack--hr GsStack--center">
      <button type="button" class="GenshiButton">1</button>
      <button type="button" class="GenshiButton">2</button>
      <button type="button" class="GenshiButton">3</button>
    </div>
  </div>
  <div class="GsStack GsGap--lg">
    <div class="GsStack GsStack--v GsStack--center">
      <button type="button" class="GenshiButton">1</button>
      <button type="button" class="GenshiButton">2</button>
      <button type="button" class="GenshiButton">3</button>
    </div>
    <div class="GsStack GsStack--vr GsStack--center">
      <button type="button" class="GenshiButton">1</button>
      <button type="button" class="GenshiButton">2</button>
      <button type="button" class="GenshiButton">3</button>
    </div>
  </div>
</div>

## Stack baseline

Use the baseline modifiers to align items across the stack direction.

- `GsStack--top` aligns items to the start of the cross axis.
- `GsStack--middle` centers items on the cross axis.
- `GsStack--bottom` aligns items to the end of the cross axis.
- `GsStack--hexpand` stretches items along the cross axis.

<div class="GsStack GsStack--v example baseline-example">
  <div class="GsStack GsStack--top">
    <button type="button" class="GenshiButton">Compose</button>
    <button type="button" class="GenshiButton">Reply</button>
    <button type="button" class="GenshiButton">Reply All</button>
    <button type="button" class="GenshiButton">Forward</button>
  </div>
  <div class="GsStack GsStack--middle">
    <button type="button" class="GenshiButton">Compose</button>
    <button type="button" class="GenshiButton">Reply</button>
    <button type="button" class="GenshiButton">Reply All</button>
    <button type="button" class="GenshiButton">Forward</button>
  </div>
  <div class="GsStack GsStack--bottom">
    <button type="button" class="GenshiButton">Compose</button>
    <button type="button" class="GenshiButton">Reply</button>
    <button type="button" class="GenshiButton">Reply All</button>
    <button type="button" class="GenshiButton">Forward</button>
  </div>
  <div class="GsStack GsStack--hexpand">
    <button type="button" class="GenshiButton">Compose</button>
    <button type="button" class="GenshiButton">Reply</button>
    <button type="button" class="GenshiButton">Reply All</button>
    <button type="button" class="GenshiButton">Forward</button>
  </div>
</div>

## Gap size

Use the standard gap modifier to configure the size of the gap.

<div class="GsStack GsStack--v">
  <div class="GsStack GsGap--none">
    <button type="button" class="GenshiButton">Compose</button>
    <button type="button" class="GenshiButton">Reply</button>
    <button type="button" class="GenshiButton">Reply All</button>
    <button type="button" class="GenshiButton">Forward</button>
  </div>
  <div class="GsStack GsGap--sm">
    <button type="button" class="GenshiButton">Compose</button>
    <button type="button" class="GenshiButton">Reply</button>
    <button type="button" class="GenshiButton">Reply All</button>
    <button type="button" class="GenshiButton">Forward</button>
  </div>
  <div class="GsStack GsGap--md">
    <button type="button" class="GenshiButton">Compose</button>
    <button type="button" class="GenshiButton">Reply</button>
    <button type="button" class="GenshiButton">Reply All</button>
    <button type="button" class="GenshiButton">Forward</button>
  </div>
  <div class="GsStack GsGap--lg">
    <button type="button" class="GenshiButton">Compose</button>
    <button type="button" class="GenshiButton">Reply</button>
    <button type="button" class="GenshiButton">Reply All</button>
    <button type="button" class="GenshiButton">Forward</button>
  </div>
  <div class="GsStack GsGap--xl">
    <button type="button" class="GenshiButton">Compose</button>
    <button type="button" class="GenshiButton">Reply</button>
    <button type="button" class="GenshiButton">Reply All</button>
    <button type="button" class="GenshiButton">Forward</button>
  </div>
</div>

<style>
  .example > div {
    box-shadow: 0 0 0 1px var(--gs-primary-border);
    width: 100%;
  }
  
  .baseline-example > div {
    min-height: 80px;
  }
</style>
