---
layout: docs
title: Stack
---

<script>
import {Button, Stack} from '$lib';
</script>

Stacks allow to group horizontally or vertically a set of nodes. Note that the elements will keep
their size. In other words, this is not a flexbox, but a grid.

To create an stack, use the following code:

```svelte
<script>
	import { Button, Stack } from '@makigas/genshi-svelte';
</script>

<Stack>
	<Button>Compose</Button>
	<Button>Reply</Button>
	<Button>Reply All</Button>
	<Button>Forward</Button>
</Stack>
```

<Stack>
	<Button>Compose</Button>
	<Button>Reply</Button>
	<Button>Reply All</Button>
	<Button>Forward</Button>
</Stack>

## Stack positioning

Use the `align` prop to set where to locate the elements in the stack. For instance, use
`align="end"` to center them to the opposite border of the view.

<Stack align="end">
	<Button>Compose</Button>
	<Button>Reply</Button>
	<Button>Reply All</Button>
	<Button>Forward</Button>
</Stack>

Or center them using `align="center"`:

<Stack align="center">
	<Button>Compose</Button>
	<Button>Reply</Button>
	<Button>Reply All</Button>
	<Button>Forward</Button>
</Stack>

Or place space between each element with `align="between"`:

<Stack align="between">
	<Button>Compose</Button>
	<Button>Reply</Button>
	<Button>Reply All</Button>
	<Button>Forward</Button>
</Stack>

## Stack direction

By default, the stack is horizontal: items are placed horizontally. You can change this with the
additional modifiers:

To make a vertical stack, use the `direction="vertical"` prop:

<Stack direction="vertical">
	<Button>Compose</Button>
	<Button>Reply</Button>
	<Button>Reply All</Button>
	<Button>Forward</Button>
</Stack>

You can also reverse the positioning of the elements by using the `reverse` prop. If you use this
prop, the order of the elements will be reversed.

<Stack align="center">
	<Stack direction="vertical">
		<Stack>
	<Button>1</Button>
	<Button>2</Button>
	<Button>3</Button>
	<Button>4</Button>
		</Stack>
		<Stack reverse>
	<Button>1</Button>
	<Button>2</Button>
	<Button>3</Button>
	<Button>4</Button>
		</Stack>
	</Stack>
	<Stack>
		<Stack direction="vertical" reverse>
	<Button>1</Button>
	<Button>2</Button>
	<Button>3</Button>
	<Button>4</Button>
		</Stack>
		<Stack direction="vertical">
	<Button>1</Button>
	<Button>2</Button>
	<Button>3</Button>
	<Button>4</Button>
		</Stack>
	</Stack>
</Stack>
