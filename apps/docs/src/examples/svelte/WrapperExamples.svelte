<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- SPDX-FileCopyrightText: Copyright (c) 2025-2026 Dani Rodríguez -->
<script lang="ts">
  import { Wrapper } from "@makigas/genshi-svelte";

  let { example }: { example: "basic" | "fluid" | "breath" } = $props();
</script>

{#if example === "basic"}
  <Wrapper><p>I am contained inside the screen.</p></Wrapper>
{:else if example === "fluid"}
  <Wrapper fluid><p>Fluid wrapper</p></Wrapper>
{:else if example === "breath"}
  <Wrapper breath><p>Wrapper with vertical spacing</p></Wrapper>
{/if}
