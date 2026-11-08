<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- SPDX-FileCopyrightText: Copyright (c) 2025-2026 Dani Rodríguez -->
<script lang="ts">
  import { Checkbox, Stack } from "@makigas/genshi-svelte";

  let {
    example,
  }: {
    example:
      | "basic"
      | "basic-2"
      | "basic-3"
      | "validation"
      | "component-sizes"
      | "component-sizes-2"
      | "component-sizes-3"
      | "component-sizes-4"
      | "component-sizes-5";
  } = $props();
</script>

{#if example === "basic"}
  <Checkbox
    label="Subscribe to updates"
    helper="You will receive changes to this content in your e-mail." />
{:else if example === "basic-2"}
  <Checkbox checked label="Receive marketing promotions" helper="Prepare your inbox." />
{:else if example === "basic-3"}
  <Checkbox disabled label="Subscribe to updates" helper="Not available at this moment" />
{:else if example === "validation"}
  <Stack align="start">
    <Stack density="compact" direction="vertical">
      <Checkbox
        checked
        label="I have read the terms and conditions"
        helper="Thank you for reading these documents."
        validation="valid" />
      <Checkbox
        label="I have read the terms and conditions"
        helper="Please, read the terms before continuing."
        validation="invalid" />
    </Stack>
    <Stack density="compact" direction="vertical">
      <Checkbox
        checked
        label="Send notification to Discord"
        helper="The integration has to be configured first."
        validation="invalid" />
      <Checkbox
        label="Send me updates about the app"
        helper="Ok, we won't botehr you with updates."
        validation="valid" />
    </Stack>
  </Stack>
{:else if example === "component-sizes"}
  <Checkbox
    size="xs"
    label="Subscribe to updates"
    helper="You will receive changes to this content in your e-mail." />
{:else if example === "component-sizes-2"}
  <Checkbox
    size="sm"
    label="Subscribe to updates"
    helper="You will receive changes to this content in your e-mail." />
{:else if example === "component-sizes-3"}
  <Checkbox
    size="md"
    label="Subscribe to updates"
    helper="You will receive changes to this content in your e-mail." />
{:else if example === "component-sizes-4"}
  <Checkbox
    size="lg"
    label="Subscribe to updates"
    helper="You will receive changes to this content in your e-mail." />
{:else if example === "component-sizes-5"}
  <Checkbox
    size="xl"
    label="Subscribe to updates"
    helper="You will receive changes to this content in your e-mail." />
{/if}
