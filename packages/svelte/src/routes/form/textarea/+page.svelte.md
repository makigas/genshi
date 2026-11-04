---
layout: docs
title: Textarea
---

<script>
import { Cols, Textarea } from "$lib"
import { User, AtSign, Check, Send, TriangleAlert } from "@lucide/svelte"
</script>

The textarea is similar to the [Text Field](/genshi-svelte/form/text-field). However, it is used to
render textareas, which are multiline areas where text can be written.

```svelte
<script>
	import { Textarea } from '@makigas/genshi-svelte';
</script>

<Textarea
	label="Your bio"
	placeholder="Write your bio"
	helper="A bio helps your profile be more interesting." />
```

<Textarea rows="5" label="Your bio" placeholder="Write your bio" helper="A bio helps your profile be more interesting." />

## Monospace

Add the `mono` prop to render the textarea using monospaced fonts.

```svelte
<Textarea mono label="Custom HTML code" />
```

<Textarea rows="5" placeholder="Type your custom HTML here" label="Custom HTML code" mono />

## Disabled and readonly

Add the `disabled` prop to your textarea to make it disabled.

```svelte
<Textarea
	disabled
	label="User bio"
	value="CEO of the world"
	helper="You cannot change your bio right now" />
```

<Textarea disabled label="User bio" value="CEO of the world" helper="You cannot change your bio right now" />

Similarly, you can use the `readonly` prop to make it readonly.

```svelte
<Textarea
	readonly
	label="User bio"
	value="CEO of the world"
	helper="You cannot change your bio right now" />
```

<Textarea readonly label="User bio" value="CEO of the world" helper="You cannot change your bio right now" />

## Icons

You can use the `iconBefore` and `iconAfter` attributes to pass a Lucide component const to render
it at the start or at the end of the field.

<Cols>
    <Textarea label="User bio" placeholder="User bio" iconBefore={User} />
    <Textarea label="Message" placeholder="Send your message" iconAfter={Send} />
    <Textarea label="Reply" placeholder="Write your reply" iconBefore={AtSign} iconAfter={Check} />
</Cols>

## Validation

You can add the `validation` prop to mark the field as valid or invalid with either the `"valid"` or
`"invalid"` string. Absence of this prop will mark the field as default.

<Cols>
    <Textarea label="Bio" placeholder="Write about you" helper="Your bio looks OK" value="CEO of the world" validation="valid" iconAfter={Check} />
    <Textarea label="Bio" placeholder="Write about you" helper="People is not ready for facts" value="HTML is a programming language" validation="invalid" iconAfter={TriangleAlert} />
</Cols>

## Sizes

You can use the `size` prop to change the size of the component.

If you don't want to use the default medium size, change it via the `size` parameter, which accepts
one of the possible values in: `xs sm md lg xl`.

<Textarea label="User name" placeholder="Type your username" size="xs" iconBefore={User} />

<Textarea label="User name" placeholder="Type your username" size="sm" iconBefore={User} />

<Textarea label="User name" placeholder="Type your username" size="md" iconBefore={User} />

<Textarea label="User name" placeholder="Type your username" size="lg" iconBefore={User} />

<Textarea label="User name" placeholder="Type your username" size="xl" iconBefore={User} />
