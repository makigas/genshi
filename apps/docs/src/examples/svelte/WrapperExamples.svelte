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
