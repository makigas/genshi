<script lang="ts">
  import { FileField } from "@makigas/genshi-svelte";
  import { Star, Check, TriangleAlert, Paperclip } from "@lucide/svelte";

  let {
    example,
  }: {
    example:
      | "basic"
      | "disabled"
      | "icon"
      | "validation"
      | "validation-2"
      | "sizes"
      | "sizes-2"
      | "sizes-3"
      | "sizes-4"
      | "sizes-5";
  } = $props();
</script>

{#if example === "basic"}
  <FileField label="Avatar" helper="Select a photo to use as profile picture." />
{:else if example === "disabled"}
  <FileField disabled label="Avatar" helper="Select a photo to use as profile picture." />
{:else if example === "icon"}
  <FileField label="Avatar" iconAfter={Star} />
{:else if example === "validation"}
  <FileField
    label="Avatar"
    helper="File uploaded correctly."
    validation="valid"
    iconAfter={Check} />
{:else if example === "validation-2"}
  <FileField
    label="Avatar"
    helper="Wait, why did you upload a WebP file?"
    validation="invalid"
    iconAfter={TriangleAlert} />
{:else if example === "sizes"}
  <FileField
    size="xs"
    label="Avatar"
    helper="Select a photo to use as profile picture."
    iconAfter={Paperclip} />
{:else if example === "sizes-2"}
  <FileField
    size="sm"
    label="Avatar"
    helper="Select a photo to use as profile picture."
    iconAfter={Paperclip} />
{:else if example === "sizes-3"}
  <FileField
    size="md"
    label="Avatar"
    helper="Select a photo to use as profile picture."
    iconAfter={Paperclip} />
{:else if example === "sizes-4"}
  <FileField
    size="lg"
    label="Avatar"
    helper="Select a photo to use as profile picture."
    iconAfter={Paperclip} />
{:else if example === "sizes-5"}
  <FileField
    size="xl"
    label="Avatar"
    helper="Select a photo to use as profile picture."
    iconAfter={Paperclip} />
{/if}
