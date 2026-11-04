---
layout: docs
title: Select
---

<script>
import { Cols, Select, SelectOption } from '$lib'

let continent1 = "america";
let continent2 = ["america", "asia"];
</script>

The select component allows to pick an item from a list.

```svelte
import {(Select, SelectOption)} from "@makigas/genshi-svelte";

<Select
	label="Continent"
	placeholder="Specify your region in order to show the fastest CDNs in your area.">
	<SelectOption value="africa">Africa</SelectOption>
	<SelectOption value="america">America</SelectOption>
	<SelectOption value="asia">Asia</SelectOption>
	<SelectOption value="europe">Europe</SelectOption>
	<SelectOption value="oceania">Oceania</SelectOption>
</Select>
```

<Select label="Continent" bind:value={continent1} placeholder="Specify your region in order to show the fastest CDNs in your area.">
    <SelectOption value="africa">Africa</SelectOption>
    <SelectOption value="america">America</SelectOption>
    <SelectOption value="asia">Asia</SelectOption>
    <SelectOption value="europe">Europe</SelectOption>
    <SelectOption value="oceania">Oceania</SelectOption>
</Select>
<p>You have picked: {continent1}</p>

## List

Pass the `multiple` prop to the `Select` component to render it as a list.

```svelte
<Select
	multiple
	rows="3"
	label="Continent"
	placeholder="Specify your region in order to show the fastest CDNs in your area.">
	<SelectOption value="africa">Africa</SelectOption>
	<SelectOption value="america">America</SelectOption>
	<SelectOption value="asia">Asia</SelectOption>
	<SelectOption value="europe">Europe</SelectOption>
	<SelectOption value="oceania">Oceania</SelectOption>
</Select>
```

<Select multiple bind:value={continent2} rows="3" label="Continent" placeholder="Specify your region in order to show the fastest CDNs in your area.">
    <SelectOption value="africa">Africa</SelectOption>
    <SelectOption value="america">America</SelectOption>
    <SelectOption value="asia">Asia</SelectOption>
    <SelectOption value="europe">Europe</SelectOption>
    <SelectOption value="oceania">Oceania</SelectOption>
</Select>
<p>You have picked: {continent2.join(', ')}</p>

## Disabled

Selects can also be disabled with the `disabled` prop:

<Select disabled label="Continent" placeholder="Specify your region in order to show the fastest CDNs in your area.">
    <SelectOption disabled>Pick a continent</SelectOption>
    <SelectOption value="africa">Africa</SelectOption>
    <SelectOption value="america">America</SelectOption>
    <SelectOption value="asia">Asia</SelectOption>
    <SelectOption value="europe">Europe</SelectOption>
    <SelectOption value="oceania">Oceania</SelectOption>
</Select>

<Select disabled multiple rows="3" label="Continent" placeholder="Specify your region in order to show the fastest CDNs in your area.">
    <SelectOption disabled>Pick a continent</SelectOption>
    <SelectOption value="africa">Africa</SelectOption>
    <SelectOption value="america">America</SelectOption>
    <SelectOption value="asia">Asia</SelectOption>
    <SelectOption value="europe">Europe</SelectOption>
    <SelectOption value="oceania">Oceania</SelectOption>
</Select>

## Validation

You can add the `validation` prop to mark the field as valid or invalid with either the `"valid"` or
`"invalid"` string. Absence of this prop will mark the field as default.

<Cols>
<Select label="Continent" value="america" placeholder="The resource will be created in this region" validation="valid">
    <SelectOption>Pick a continent</SelectOption>
    <SelectOption value="africa">Africa</SelectOption>
    <SelectOption value="america">America</SelectOption>
    <SelectOption value="asia">Asia</SelectOption>
    <SelectOption value="europe">Europe</SelectOption>
    <SelectOption value="oceania">Oceania</SelectOption>
</Select>
<Select label="Continent" value="oceania" placeholder="There is no remaining quota in this region" validation="invalid">
    <SelectOption>Pick a continent</SelectOption>
    <SelectOption value="africa">Africa</SelectOption>
    <SelectOption value="america">America</SelectOption>
    <SelectOption value="asia">Asia</SelectOption>
    <SelectOption value="europe">Europe</SelectOption>
    <SelectOption value="oceania">Oceania</SelectOption>
</Select>
</Cols>

## Sizes

<Select size="xs" label="Continent" placeholder="Select the region where to create the resource">
    <SelectOption>Pick a continent</SelectOption>
    <SelectOption value="africa">Africa</SelectOption>
    <SelectOption value="america">America</SelectOption>
    <SelectOption value="asia">Asia</SelectOption>
    <SelectOption value="europe">Europe</SelectOption>
    <SelectOption value="oceania">Oceania</SelectOption>
</Select>

<Select size="sm" label="Continent" placeholder="Select the region where to create the resource">
    <SelectOption>Pick a continent</SelectOption>
    <SelectOption value="africa">Africa</SelectOption>
    <SelectOption value="america">America</SelectOption>
    <SelectOption value="asia">Asia</SelectOption>
    <SelectOption value="europe">Europe</SelectOption>
    <SelectOption value="oceania">Oceania</SelectOption>
</Select>

<Select size="md" label="Continent" placeholder="Select the region where to create the resource">
    <SelectOption>Pick a continent</SelectOption>
    <SelectOption value="africa">Africa</SelectOption>
    <SelectOption value="america">America</SelectOption>
    <SelectOption value="asia">Asia</SelectOption>
    <SelectOption value="europe">Europe</SelectOption>
    <SelectOption value="oceania">Oceania</SelectOption>
</Select>

<Select size="lg" label="Continent" placeholder="Select the region where to create the resource">
    <SelectOption>Pick a continent</SelectOption>
    <SelectOption value="africa">Africa</SelectOption>
    <SelectOption value="america">America</SelectOption>
    <SelectOption value="asia">Asia</SelectOption>
    <SelectOption value="europe">Europe</SelectOption>
    <SelectOption value="oceania">Oceania</SelectOption>
</Select>

<Select size="xl" label="Continent" placeholder="Select the region where to create the resource">
    <SelectOption>Pick a continent</SelectOption>
    <SelectOption value="africa">Africa</SelectOption>
    <SelectOption value="america">America</SelectOption>
    <SelectOption value="asia">Asia</SelectOption>
    <SelectOption value="europe">Europe</SelectOption>
    <SelectOption value="oceania">Oceania</SelectOption>
</Select>
