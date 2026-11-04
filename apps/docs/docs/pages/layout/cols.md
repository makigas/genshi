---
layout: ../../layouts/DocLayout.astro

title: Cols
---

Cols create equally sized columns to render HTML. This component is equivalent to an horizontal flex
where every item has the same size.

To create a cols, use the following code:

```html
<div class="GenshiCols">
  <div>Node</div>
  <div>Node</div>
  <div>Node</div>
  <div>Node</div>
</div>
```

<div class="GenshiCols">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
  <div class="box">5</div>
  <div class="box">6</div>
</div>

## Gap size

Use an additional modifier to configure the size of the gap:

- Gap-less (no gap): `GenshiCols--gapless`
- Compact (0.5rem): `GenshiCols--compact`
- Cozy (1.5rem): `GenshiCols--cozy`

<div class="GenshiStack GenshiStack--v GenshiStack--gapless">
  <div class="GenshiCols GenshiCols--gapless">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
    <div class="box">4</div>
    <div class="box">5</div>
    <div class="box">6</div>
  </div>
  <div class="GenshiCols GenshiCols--compact">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
    <div class="box">4</div>
    <div class="box">5</div>
    <div class="box">6</div>
  </div>
  <div class="GenshiCols">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
    <div class="box">4</div>
    <div class="box">5</div>
    <div class="box">6</div>
  </div>
  <div class="GenshiCols GenshiCols--cozy">
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
    border: 1px solid oklch(from var(--genshi-foreground-color) l c h / 30%);
    background-color: oklch(from var(--genshi-foreground-color) l c h / 5%);
    padding: 2rem;
    border-radius: 5px;
    text-align: center;
  }
</style>
