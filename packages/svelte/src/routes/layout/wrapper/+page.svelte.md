---
layout: docs
title: Wrapper
---

A wrapper is a centered block region that contains some HTML, whose main purpose is usually to
control or limit its width in the browser viewport.

Typically you see wrappers in many pages where the page layout wants to have a known width, no
matter the screen resolution of the user browser.

```svelte
<script>
	import { Wrapper } from '@makigas/genshi-svelte';

	<Wrapper>
		<p>I am contained inside the screen.</p>
	</Wrapper>;
</script>
```

Another use case of wrappers is to be defined inside an element like a hero or a header. The element
will define a background color that spans the complete browser width (100%), but the wrapper allows
the content to stay centered.

```svelte
<script>
	import { Wrapper } from '@makigas/genshi-svelte';

	<div class="jumbo">
		<Wrapper>
			<p>I am contained inside the screen.</p>
		</Wrapper>
	</div>;
</script>
```

## Breakpoints

Genshi provides the following browser viewports:

| code | name      | breaks at | viewport size |
| ---- | --------- | --------- | ------------- |
| xs   | mobile    | -         | 100% - 30px   |
| sm   | tablet    | 768px     | 100% - 30px   |
| md   | desktop   | 1024px    | 992px         |
| lg   | wide      | 1400px    | 1280px        |
| xl   | ultrawide | 1920px    | 1600px        |

## Fluid

Use the fluid variant if you want the element to span the whole browser viewport, but you want to
add a few pixels of margin at the left and right of the browser viewport.

This modifier works best on navbars, toolbars and other nodes that may present a lot of input
components, or also if you want to define immersive layouts. At the same time, this layout works
poorly for text, because on bigger screens the number of characters per line may be too much.

```svelte
<Wrapper fluid>
	<NavbarContents />
</Wrapper>
```

## Breath

A quick helper modifier is `breath`. Add this prop if you want to force some margin above and below
the wrapper, to let the item breathe vertically inside its parent element:

```svelte
<Wrapper breath>
	<p>Welcome</p>
</Wrapper>
```
