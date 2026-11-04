---
layout: docs
title: Button
---

<script>
import { Link, Button, Stack } from '$lib';
import { Heart, Video, Trash2, PlusCircle } from '@lucide/svelte';
</script>

To create a button, use the `Button` component:

```svelte
<script>
	import Button from '@makigas/genshi-svelte';
</script>

<Button>Click me</Button>
```

<Button>Click me</Button>

## Links as buttons

Use the `Link` component instead. It accepts a prop called `href` with an URL. The button will be
rendered as an hyperlink. It is important to always understand the semantic distinction between a
link and a button. Only pass an `href` prop if you want the browser to point at a different address.
You shouldn't use regular buttons with JavaScript events to change the browser URL if you can avoid
it. Also, you shouldn't use a link to trigger some interactivity.

```svelte
<script>
	import Link from '@makigas/genshi-svelte';
</script>

<Link href="https://github.com/makigas/genshi-svelte">Star repo on GitHub</Link>
```

<Link href="https://github.com/makigas/genshi-svelte" target="_blank">Star repo on GitHub</Link>

## Buttons with icons

The button component is compatible with symbolic icons. You can provide two snippets called
`iconBefore` and `iconAfter`. **These snippets must emit SVG.**

You can also omit the text altogether, but remember to use an `aria-label` in that case in the
`Button` component.

<Button iconBefore={Heart}>
    Like
</Button>
<Button color="suggested" iconBefore={Video}>
    Play video
</Button>
<Button color="destructive" iconAfter={Trash2}>
    Delete
</Button>
<Button aria-label="Add record" bold color="suggested" iconBefore={PlusCircle} />

## Button sizes

Buttons come in a variety of sizes. If you don't want to use the default medium size, change it via
the `size` parameter, which accepts one of the possible values in: `xs sm md lg xl`.

```svelte
<Button size="xs">Extra small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium (default)</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra large</Button>
```

<div>
    <Button size="xs">Extra small</Button>
    <Button size="sm">Small</Button>
    <Button size="md">Medium (default)</Button>
    <Button size="lg">Large</Button>
    <Button size="xl">Extra large</Button>
</div>

## Bold button

While this design system doesn’t use outlined buttons, and every button has a background, by default
the buttons will look like blended with the background. If you want to make the button stand out,
mark it as `bold`.

```svelte
<Button bold>Back</Button>
```

<Button bold>Back</Button>

## Color buttons

You can add some semantic accents to the colors. There are currently two variants:

Use the `suggested` color variant to convey that this is the primary button, or the button that may
complete a task.

```svelte
<Button color="suggested">Save</Button>
<Button color="suggested" bold>Submit</Button>
```

<Button color="suggested">Save</Button> <Button color="suggested" bold>Submit</Button>

Use the `destructive` variant to convey that the button is dangerous, which is often used to mark
that pressing a button will have important consequences such as the destruction of records.

```svelte
<Button color="destructive">Save</Button>
<Button color="destructive" bold>Submit</Button>
```

<Button color="destructive">Save</Button> <Button color="destructive" bold>Submit</Button>

## Disabled buttons

To mark a button as disabled and non clickable, add the `disabled` prop.

```svelte
<Button disabled>Can't touch this</Button>
```

<Stack direction="vertical" density="compact">
<div>
<Button disabled>Can't touch this</Button>
<Button disabled color="suggested">Can't touch this</Button>
<Button disabled color="destructive">Can't touch this</Button>
</div>
<div>
<Button disabled bold>Can't touch this</Button>
<Button disabled bold color="suggested">Can't touch this</Button>
<Button disabled bold color="destructive">Can't touch this</Button>
</div>
</Stack>
