<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- SPDX-FileCopyrightText: Copyright (c) 2025-2026 Dani Rodríguez -->
<script lang="ts">
  import { Cols } from "@makigas/genshi-svelte";

  let { example }: { example: "basic" | "density" | "density-2" | "density-3" | "density-4" } =
    $props();
</script>

{#if example === "basic"}
  <Cols class="boxed">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
  </Cols>
{:else if example === "density"}
  <Cols density="gapless" class="boxed">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
  </Cols>
{:else if example === "density-2"}
  <Cols density="compact" class="boxed">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
  </Cols>
{:else if example === "density-3"}
  <Cols density="normal" class="boxed">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
  </Cols>
{:else if example === "density-4"}
  <Cols density="cozy" class="boxed">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
  </Cols>
{/if}

<style>
  :global(.boxed) > div {
    border: 1px solid oklch(from var(--genshi-foreground-color) l c h / 30%);
    background-color: oklch(from var(--genshi-foreground-color) l c h / 5%);
    padding: 2rem;
    border-radius: 5px;
    text-align: center;
  }
</style>
