<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- SPDX-FileCopyrightText: Copyright (c) 2025-2026 Dani Rodríguez -->
<script lang="ts">
  import { Link, Button } from "@makigas/genshi-svelte";
  import { Heart, Video, Trash2, PlusCircle } from "@lucide/svelte";

  let {
    example,
  }: {
    example:
      | "basic"
      | "links-as-buttons"
      | "buttons-with-icons"
      | "button-sizes"
      | "button-appearance"
      | "disabled-buttons";
  } = $props();
</script>

{#if example === "basic"}
  <Button>Click me</Button>
{:else if example === "links-as-buttons"}
  <Link href="https://github.com/makigas/genshi" target="_blank">Star repo on GitHub</Link>
{:else if example === "buttons-with-icons"}
  <Button iconBefore={Heart}>Like</Button>
  <Button appearance="accent" iconBefore={Video}>Play video</Button>
  <Button appearance="destructive" iconAfter={Trash2}>Delete</Button>
  <Button aria-label="Add record" appearance="accent" iconBefore={PlusCircle} />
{:else if example === "button-sizes"}
  <div>
    <Button size="xs">Extra small</Button>
    <Button size="sm">Small</Button>
    <Button size="md">Medium (default)</Button>
    <Button size="lg">Large</Button>
    <Button size="xl">Extra large</Button>
  </div>
{:else if example === "button-appearance"}
  <p>
    <Button>Outline</Button>
    <Button appearance="accent">Accent</Button>
    <Button appearance="destructive">Destructive</Button>
    <Button appearance="link">Link</Button>
  </p>
{:else if example === "disabled-buttons"}
  <p>
    <Button disabled>Outline</Button>
    <Button disabled appearance="accent">Accent</Button>
    <Button disabled appearance="destructive">Destructive</Button>
    <Button disabled appearance="link">Link</Button>
  </p>
{/if}
