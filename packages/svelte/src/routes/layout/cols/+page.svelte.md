---
layout: docs
title: Cols
---

<script>import {Cols} from '$lib';</script>

Cols create equally sized columns to render HTML. This component is equivalent to an horizontal flex
where every item has the same size.

To create a cols, use the following code:

```svelte
<script>
	import { Cols } from '@makigas/genshi-svelte';
</script>

<Cols>
	<div>1</div>
	<div>2</div>
	<div>3</div>
	<div>4</div>
	<div>5</div>
	<div>6</div>
</Cols>
```

<Cols class="boxed">
	<div>1</div>
	<div>2</div>
	<div>3</div>
	<div>4</div>
	<div>5</div>
	<div>6</div>
</Cols>

## Density

To change the density of the columns, you can tweak the gap, via the `density` parameter:

- `density="gapless"` to disable the gap completely.
- `density="compact"` to use a compact layout.
- `density="normal"` to use the default gap - this is the default value for the parameter.
- `density="cozy"` to add more spacing between the elements.

<Cols density="gapless" class="boxed">
	<div>1</div>
	<div>2</div>
	<div>3</div>
	<div>4</div>
	<div>5</div>
	<div>6</div>
</Cols>

<Cols density="compact" class="boxed">
	<div>1</div>
	<div>2</div>
	<div>3</div>
	<div>4</div>
	<div>5</div>
	<div>6</div>
</Cols>

<Cols density="normal" class="boxed">
	<div>1</div>
	<div>2</div>
	<div>3</div>
	<div>4</div>
	<div>5</div>
	<div>6</div>
</Cols>

<Cols density="cozy" class="boxed">
	<div>1</div>
	<div>2</div>
	<div>3</div>
	<div>4</div>
	<div>5</div>
	<div>6</div>
</Cols>

<style>
    :global(.boxed) > div {
        border: 1px solid oklch(from var(--genshi-foreground-color) l c h / 30%);
        background-color: oklch(from var(--genshi-foreground-color) l c h / 5%);
        padding: 2rem;
        border-radius: 5px;
        text-align: center;
    }
</style>
