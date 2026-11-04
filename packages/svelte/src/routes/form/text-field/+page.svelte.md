---
layout: docs
title: Text Field
---

<script>
import { Cols, Stack, TextField } from '$lib';
import { User, AtSign, Check, Send, TriangleAlert } from "@lucide/svelte"
</script>

This component can be used to present text fields and other keyboard input fields such as passwords,
emails, phone numbers or URLs.

Use the `TextField` component to render a text field.

```svelte
import {TextField} from '@makigas/genshi-svelte';

<TextField
	label="User name"
	placeholder="Type your username"
	helper="Your username must have between 3 and 10 characters." />
```

<TextField
  label="User name"
  placeholder="Type your username"
  name="form[user_name]"
  id="user_name" />

## Additional types

This control can also be used to render the following types:

- Passwords (type="password")
- Email (type="email")
- Number (type="number")
- Telephone (type="tel")
- URL (type="url")
- Search (type="search")
- Datetime (type="datetime")
- Date (type="date")
- Time (type="time")
- Color (type="color")
- File (type="file")

<Stack direction="horizontal">
    <TextField label="User name" placeholder="Type your username" type="text" />
    <TextField label="Password" placeholder="Pick a password" type="password" />
    <TextField label="Episode count" placeholder="Number of episodes" type="number" />
    <TextField label="SMS notifications" placeholder="SMS notifications" type="tel" />
    <TextField label="External URL" placeholder="External URL" type="url" />
    <TextField label="Filter records" placeholder="Search query" type="search" />
    <TextField label="Publish at" type="datetime-local" />
    <TextField label="Creation date" type="date" />
    <TextField label="Send notification at" type="time" />
    <TextField label="Background color" type="color" />
</Stack>

## Monospace

Add the `mono` prop to the component to render in monospace font.

<TextField label="User name" placeholder="Type your username" type="text" helper="Your username must have between 3 and 10 characters" mono />

## Disabled and read only

Add the `disabled` prop to disable the control.

<TextField label="User name" placeholder="Type your username" type="text" value="john.doe222" disabled />

Add the `readonly` prop to make it read-only.

<TextField label="User name" placeholder="Type your username" type="text" value="john.doe222" readonly />

## Icons

You can use the `iconBefore` and `iconAfter` attributes to pass a Lucide component const to render
it at the start or at the end of the field.

<Cols>
    <TextField label="User bio" placeholder="User bio" iconBefore={User} />
    <TextField label="Message" placeholder="Send your message" iconAfter={Send} />
    <TextField label="Reply" placeholder="Write your reply" iconBefore={AtSign} iconAfter={Check} />
</Cols>

## Validation

You can add the `validation` prop to mark the field as valid or invalid with either the `"valid"` or
`"invalid"` string. Absence of this prop will mark the field as default.

<Cols>
    <TextField label="User name" placeholder="Type your username" type="text" helper="Everything looks valid" value="john.doe222" validation="valid" iconAfter={Check} />
    <TextField label="User name" placeholder="Type your username" type="text" helper="Username is already taken" value="john.doe222" validation="invalid" iconAfter={TriangleAlert} />
</Cols>

## Sizes

You can use the `size` prop to change the size of the component.

If you don't want to use the default medium size, change it via the `size` parameter, which accepts
one of the possible values in: `xs sm md lg xl`.

<TextField label="User name" placeholder="Type your username" size="xs" iconBefore={AtSign} iconAfter={Check} />

<TextField label="User name" placeholder="Type your username" size="sm" iconBefore={AtSign} iconAfter={Check} />

<TextField label="User name" placeholder="Type your username" size="md" iconBefore={AtSign} iconAfter={Check} />

<TextField label="User name" placeholder="Type your username" size="lg" iconBefore={AtSign} iconAfter={Check} />

<TextField label="User name" placeholder="Type your username" size="xl" iconBefore={AtSign} iconAfter={Check} />
