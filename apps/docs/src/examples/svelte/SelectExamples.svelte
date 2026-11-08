<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- SPDX-FileCopyrightText: Copyright (c) 2025-2026 Dani Rodríguez -->
<script lang="ts">
  import { Cols, Select, SelectOption } from "@makigas/genshi-svelte";

  let continent1 = $state("america");
  let continent2 = $state(["america", "asia"]);

  let {
    example,
  }: {
    example:
      | "basic"
      | "list"
      | "disabled"
      | "disabled-2"
      | "validation"
      | "sizes"
      | "sizes-2"
      | "sizes-3"
      | "sizes-4"
      | "sizes-5";
  } = $props();
</script>

{#if example === "basic"}
  <Select
    label="Continent"
    bind:value={continent1}
    helper="Specify your region in order to show the fastest CDNs in your area.">
    <SelectOption value="africa">Africa</SelectOption>
    <SelectOption value="america">America</SelectOption>
    <SelectOption value="asia">Asia</SelectOption>
    <SelectOption value="europe">Europe</SelectOption>
    <SelectOption value="oceania">Oceania</SelectOption>
  </Select>
  <p>You have picked: {continent1}</p>
{:else if example === "list"}
  <Select
    multiple
    bind:value={continent2}
    rows={3}
    label="Continent"
    helper="Specify your region in order to show the fastest CDNs in your area.">
    <SelectOption value="africa">Africa</SelectOption>
    <SelectOption value="america">America</SelectOption>
    <SelectOption value="asia">Asia</SelectOption>
    <SelectOption value="europe">Europe</SelectOption>
    <SelectOption value="oceania">Oceania</SelectOption>
  </Select>
  <p>You have picked: {continent2.join(", ")}</p>
{:else if example === "disabled"}
  <Select
    disabled
    label="Continent"
    helper="Specify your region in order to show the fastest CDNs in your area.">
    <SelectOption disabled>Pick a continent</SelectOption>
    <SelectOption value="africa">Africa</SelectOption>
    <SelectOption value="america">America</SelectOption>
    <SelectOption value="asia">Asia</SelectOption>
    <SelectOption value="europe">Europe</SelectOption>
    <SelectOption value="oceania">Oceania</SelectOption>
  </Select>
{:else if example === "disabled-2"}
  <Select
    disabled
    multiple
    rows={3}
    label="Continent"
    helper="Specify your region in order to show the fastest CDNs in your area.">
    <SelectOption disabled>Pick a continent</SelectOption>
    <SelectOption value="africa">Africa</SelectOption>
    <SelectOption value="america">America</SelectOption>
    <SelectOption value="asia">Asia</SelectOption>
    <SelectOption value="europe">Europe</SelectOption>
    <SelectOption value="oceania">Oceania</SelectOption>
  </Select>
{:else if example === "validation"}
  <Cols>
    <Select
      label="Continent"
      value="america"
      helper="The resource will be created in this region"
      validation="valid">
      <SelectOption>Pick a continent</SelectOption>
      <SelectOption value="africa">Africa</SelectOption>
      <SelectOption value="america">America</SelectOption>
      <SelectOption value="asia">Asia</SelectOption>
      <SelectOption value="europe">Europe</SelectOption>
      <SelectOption value="oceania">Oceania</SelectOption>
    </Select>
    <Select
      label="Continent"
      value="oceania"
      helper="There is no remaining quota in this region"
      validation="invalid">
      <SelectOption>Pick a continent</SelectOption>
      <SelectOption value="africa">Africa</SelectOption>
      <SelectOption value="america">America</SelectOption>
      <SelectOption value="asia">Asia</SelectOption>
      <SelectOption value="europe">Europe</SelectOption>
      <SelectOption value="oceania">Oceania</SelectOption>
    </Select>
  </Cols>
{:else if example === "sizes"}
  <Select size="xs" label="Continent" helper="Select the region where to create the resource">
    <SelectOption>Pick a continent</SelectOption>
    <SelectOption value="africa">Africa</SelectOption>
    <SelectOption value="america">America</SelectOption>
    <SelectOption value="asia">Asia</SelectOption>
    <SelectOption value="europe">Europe</SelectOption>
    <SelectOption value="oceania">Oceania</SelectOption>
  </Select>
{:else if example === "sizes-2"}
  <Select size="sm" label="Continent" helper="Select the region where to create the resource">
    <SelectOption>Pick a continent</SelectOption>
    <SelectOption value="africa">Africa</SelectOption>
    <SelectOption value="america">America</SelectOption>
    <SelectOption value="asia">Asia</SelectOption>
    <SelectOption value="europe">Europe</SelectOption>
    <SelectOption value="oceania">Oceania</SelectOption>
  </Select>
{:else if example === "sizes-3"}
  <Select size="md" label="Continent" helper="Select the region where to create the resource">
    <SelectOption>Pick a continent</SelectOption>
    <SelectOption value="africa">Africa</SelectOption>
    <SelectOption value="america">America</SelectOption>
    <SelectOption value="asia">Asia</SelectOption>
    <SelectOption value="europe">Europe</SelectOption>
    <SelectOption value="oceania">Oceania</SelectOption>
  </Select>
{:else if example === "sizes-4"}
  <Select size="lg" label="Continent" helper="Select the region where to create the resource">
    <SelectOption>Pick a continent</SelectOption>
    <SelectOption value="africa">Africa</SelectOption>
    <SelectOption value="america">America</SelectOption>
    <SelectOption value="asia">Asia</SelectOption>
    <SelectOption value="europe">Europe</SelectOption>
    <SelectOption value="oceania">Oceania</SelectOption>
  </Select>
{:else if example === "sizes-5"}
  <Select size="xl" label="Continent" helper="Select the region where to create the resource">
    <SelectOption>Pick a continent</SelectOption>
    <SelectOption value="africa">Africa</SelectOption>
    <SelectOption value="america">America</SelectOption>
    <SelectOption value="asia">Asia</SelectOption>
    <SelectOption value="europe">Europe</SelectOption>
    <SelectOption value="oceania">Oceania</SelectOption>
  </Select>
{/if}
