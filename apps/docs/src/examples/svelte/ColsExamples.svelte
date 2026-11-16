<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- SPDX-FileCopyrightText: Copyright (c) 2025-2026 Dani Rodríguez -->
<script lang="ts">
  import { Cols, Stack } from "@makigas/genshi-svelte";

  let { example }: { example: "basic" | "force" | "fit" | "reverse" | "gap" } = $props();
  const gaps = ["none", "sm", "md", "lg", "xl"] as const;
</script>

{#snippet columns(count: number)}
  {#each Array(count) as _, index (index)}
    <div>{index + 1}</div>
  {/each}
{/snippet}

{#if example === "fit"}
  <Cols class="cols-example">
    <Cols.Col fit>Filters</Cols.Col>
    <div>Results</div>
  </Cols>
{:else if example === "gap"}
  <Stack direction="vertical">
    {#each gaps as gap (gap)}
      <Cols {gap} class="cols-example">
        {@render columns(6)}
      </Cols>
    {/each}
  </Stack>
{:else}
  <Cols force={example === "force"} reversed={example === "reverse"} class="cols-example">
    {@render columns(example === "force" ? 2 : 6)}
  </Cols>
{/if}

<style>
  :global(.cols-example > div) {
    border: 1px solid var(--gs-primary-border);
    background-color: var(--gs-primary-surface);
    padding: 2rem;
    border-radius: 5px;
    text-align: center;
  }
</style>
