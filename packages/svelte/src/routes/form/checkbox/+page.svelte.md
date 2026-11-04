---
layout: docs
title: Checkbox
---

<script>
import { Checkbox, Stack } from '$lib';
</script>

The checkbox component.

```svelte
import {Checkbox} from '@makigas/genshi-svelte';

<Checkbox
	label="Subscribe to updates"
	helper="You will receive changes to this content in your e-mail." />
```

<Checkbox label="Subscribe to updates" helper="You will receive changes to this content in your e-mail." />

<Checkbox checked label="Receive marketing promotions" helper="Prepare your inbox." />

<Checkbox disabled label="Subscribe to updates" helper="Not available at this moment" />

## Validation

Checkboxes can be valid or invalid. Pass the `validation` prop with the value either as `"valid"` or
`"invalid"` if you want to mark the field as such.

<Stack align="start">
    <Stack density="compact" direction="vertical">
        <Checkbox checked label="I have read the terms and conditions" helper="Thank you for reading these documents." validation="valid" />
        <Checkbox label="I have read the terms and conditions" helper="Please, read the terms before continuing." validation="invalid" />
    </Stack>
    <Stack density="compact" direction="vertical">
        <Checkbox checked label="Send notification to Discord" helper="The integration has to be configured first." validation="invalid" />
        <Checkbox label="Send me updates about the app" helper="Ok, we won't botehr you with updates." validation="valid" />
    </Stack>
</Stack>

## Component sizes

<Checkbox size="xs" label="Subscribe to updates" helper="You will receive changes to this content in your e-mail." />

<Checkbox size="sm" label="Subscribe to updates" helper="You will receive changes to this content in your e-mail." />

<Checkbox size="md" label="Subscribe to updates" helper="You will receive changes to this content in your e-mail." />

<Checkbox size="lg" label="Subscribe to updates" helper="You will receive changes to this content in your e-mail." />

<Checkbox size="xl" label="Subscribe to updates" helper="You will receive changes to this content in your e-mail." />
