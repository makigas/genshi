---
layout: docs
title: Radio button
---

<script>
import { RadioButton, RadioGroup, Stack } from '$lib';

let updates = "now";
let install = "xs";
</script>

The radio button component.

Radio buttons usually are placed in a `RadioGroup`. Not only it adds semantic value to the form, but
also it provides validation to the whole fieldset, and allows to mark the fieldset as inline.

```svelte
import {(RadioButton, RadioGroup)} from '@makigas/genshi-svelte';

<RadioGroup label="Install updates">
	<RadioButton
		checked
		label="Install update now"
		bind:group={updates}
		value="now"
		helper="The application will be restarted" />
	<RadioButton
		label="Install update later"
		bind:group={updates}
		value="later"
		helper="The application will be updated on next launch" />
	<RadioButton
		disabled
		label="Do not update the app"
		bind:group={updates}
		value="never"
		helper="You cannot disable updates if you are using the free version" />
</RadioGroup>
```

<RadioGroup label="Install updates">
  <RadioButton checked label="Install update now" bind:group={updates} value="now" helper="The application will be restarted" />
  <RadioButton label="Install update later"  bind:group={updates} value="later" helper="The application will be updated on next launch" />
  <RadioButton disabled label="Do not update the app" bind:group={updates} value="never" helper="You cannot disable updates if you are using the free version" />
</RadioGroup>

## Inline mode

If you add the `inline` prop to a `RadioGroup`, you can make it render inline.

<RadioGroup label="Install updates" inline>
  <RadioButton checked label="Install update now" bind:group={updates} value="now" />
  <RadioButton label="Install update later"  bind:group={updates} value="later" />
  <RadioButton disabled label="Do not update the app" bind:group={updates} value="never" />
</RadioGroup>

## Validation

You can mark the whole `RadioGroup` as invalid or valid using the `validation` attribute. Unlike
Genshi, the Svelte integration does not offer support for marking specific radio buttons as valid or
invalid.

<RadioGroup label="Install updates" validation="invalid" helper="You must pick a value">
<RadioButton checked label="Install update now" bind:group={updates} value="now" />
<RadioButton label="Install update later"  bind:group={updates} value="later" />
<RadioButton disabled label="Do not update the app" bind:group={updates} value="never" />
</RadioGroup>

## Component sizes

<RadioButton size="xs" bind:group={install} value="xs" label="Install update now" helper="The application will be restarted" />

<RadioButton size="sm" bind:group={install} value="sm" label="Install update now" helper="The application will be restarted" />

<RadioButton size="md" bind:group={install} value="md" label="Install update now" helper="The application will be restarted" />

<RadioButton size="lg" bind:group={install} value="lg" label="Install update now" helper="The application will be restarted" />

<RadioButton size="xl" bind:group={install} value="xl" label="Install update now" helper="The application will be restarted" />
