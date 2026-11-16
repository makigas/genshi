---
# SPDX-License-Identifier: CC-BY-SA-4.0
# SPDX-FileCopyrightText: Copyright (c) 2025-2026 Dani Rodríguez
layout: ../../../layouts/DocLayout.astro

title: Cols
---

Split multiple HTML nodes in columns.

Each node will have its own column, and every column will take by default a proportional slice of
the full available width. On mobile, the elements will be stacked by default anyway.

Use this component when you want to present multiple items distributed by column, such as a side by
side comparison. Do not use this component if you need to reflow elements, or if you want precise
positioning of the elements. That is the job of the GsStack element.

## Usage

To define cols, use the `GsCols` component class:

```html
<div class="GsCols">
  <div>Node</div>
  <div>Node</div>
  <div>Node</div>
  <div>Node</div>
</div>
```

<div class="GsCols">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
  <div class="box">5</div>
  <div class="box">6</div>
</div>

## Force columns

By default, cols are rendered as a vertical stack on mobile, where space is limited and columns may
not fill well. But if you really want to always use columns, even on mobile, add the `--force`
modifier to your `GsCols` element.

```html
<div class="GsCols GsCols--force">
  <div class="box">1</div>
  <div class="box">2</div>
</div>
```

Resize your browser to a smaller viewport and notice how this example doesn't break into a vertical
stack when the viewport is too thin.

<div class="GsCols GsCols--force">
  <div class="box">1</div>
  <div class="box">2</div>
</div>

## Fit element

Use the `GsCols__fit` class on a direct child to opt it out of taking a proportional width. Combine
with other modifiers or classes to create layouts such as sidebars.

```html
<div class="GsCols">
  <div class="box GsCols__fit">Filters</div>
  <div class="box">Results</div>
</div>
```

<div class="GsCols">
  <div class="box GsCols__fit">Filters</div>
  <div class="box">Results</div>
</div>

## Reverse

Use the `GsCols--reverse` modifier in the `GsCols` container to reverse the order of the columns.

```html
<div class="GsCols GsCols--reverse">
  <div>Node</div>
  <div>Node</div>
  <div>Node</div>
  <div>Node</div>
</div>
```

This only affects the responsive mode on larger breakpoints (or when the `--force` modifier is in
use). The mobile stack view will keep the semantic order of elements.

<div class="GsCols GsCols--reverse">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
  <div class="box">5</div>
  <div class="box">6</div>
</div>

## Gap size

This component respects the GsGap modifier.

<div class="GsStack GsStack--v">
  <div class="GsCols GsGap--none">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
    <div class="box">4</div>
    <div class="box">5</div>
    <div class="box">6</div>
  </div>
  <div class="GsCols GsGap--sm">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
    <div class="box">4</div>
    <div class="box">5</div>
    <div class="box">6</div>
  </div>
  <div class="GsCols GsGap--md">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
    <div class="box">4</div>
    <div class="box">5</div>
    <div class="box">6</div>
  </div>
  <div class="GsCols GsGap--lg">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
    <div class="box">4</div>
    <div class="box">5</div>
    <div class="box">6</div>
  </div>
  <div class="GsCols GsGap--xl">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
    <div class="box">4</div>
    <div class="box">5</div>
    <div class="box">6</div>
  </div>
</div>

<style>
  .box {
    border: 1px solid var(--gs-primary-border);
    background-color: var(--gs-primary-surface);
    padding: 2rem;
    border-radius: 5px;
    text-align: center;
  }
</style>
