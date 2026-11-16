<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- SPDX-FileCopyrightText: Copyright (c) 2025-2026 Dani Rodríguez -->
<script lang="ts">
  import { Button, Cols, Stack } from "@makigas/genshi-svelte";

  let {
    example,
  }: {
    example: "basic" | "wrapping" | "alignment" | "direction" | "baseline" | "gap";
  } = $props();
  const alignments = ["start", "center", "end", "fill"] as const;
  const baselines = ["top", "middle", "bottom", "hexpand"] as const;
  const gaps = ["none", "sm", "md", "lg", "xl"] as const;
</script>

{#snippet actions()}
  <Button>Compose</Button>
  <Button>Reply</Button>
  <Button>Reply All</Button>
  <Button>Forward</Button>
{/snippet}

{#snippet numberedButtons(count: number)}
  {#each Array(count) as _, index (index)}
    <Button>{index + 1}</Button>
  {/each}
{/snippet}

{#if example === "basic"}
  <Stack>{@render actions()}</Stack>
{:else if example === "wrapping"}
  <Stack gap="sm">{@render numberedButtons(6)}</Stack>
{:else if example === "alignment"}
  <Stack direction="vertical" gap="lg">
    {#each alignments as align (align)}
      <Stack {align} class="stack-example">{@render actions()}</Stack>
    {/each}
  </Stack>
{:else if example === "direction"}
  <Cols force gap="lg">
    <Stack direction="vertical" gap="lg">
      <Stack align="center">{@render numberedButtons(3)}</Stack>
      <Stack align="center" reversed>{@render numberedButtons(3)}</Stack>
    </Stack>
    <Stack gap="lg">
      <Stack direction="vertical" align="center">{@render numberedButtons(3)}</Stack>
      <Stack direction="vertical" align="center" reversed>{@render numberedButtons(3)}</Stack>
    </Stack>
  </Cols>
{:else if example === "baseline"}
  <Stack direction="vertical">
    {#each baselines as baseline (baseline)}
      <Stack {baseline} class="stack-example stack-baseline-example">{@render actions()}</Stack>
    {/each}
  </Stack>
{:else if example === "gap"}
  <Stack direction="vertical">
    {#each gaps as gap (gap)}
      <Stack {gap}>{@render actions()}</Stack>
    {/each}
  </Stack>
{/if}

<style>
  :global(.stack-example) {
    box-shadow: 0 0 0 1px var(--gs-primary-border);
    width: 100%;
  }

  :global(.stack-baseline-example) {
    min-height: 80px;
  }
</style>
