<script lang="ts">
  import { Link, Button, Stack } from "@makigas/genshi-svelte";
  import { Heart, Video, Trash2, PlusCircle } from "@lucide/svelte";

  let {
    example,
  }: {
    example:
      | "basic"
      | "links-as-buttons"
      | "buttons-with-icons"
      | "button-sizes"
      | "bold-button"
      | "color-buttons"
      | "color-buttons-2"
      | "disabled-buttons";
  } = $props();
</script>

{#if example === "basic"}
  <Button>Click me</Button>
{:else if example === "links-as-buttons"}
  <Link href="https://github.com/makigas/genshi" target="_blank">Star repo on GitHub</Link>
{:else if example === "buttons-with-icons"}
  <Button iconBefore={Heart}>Like</Button>
  <Button color="suggested" iconBefore={Video}>Play video</Button>
  <Button color="destructive" iconAfter={Trash2}>Delete</Button>
  <Button aria-label="Add record" bold color="suggested" iconBefore={PlusCircle} />
{:else if example === "button-sizes"}
  <div>
    <Button size="xs">Extra small</Button>
    <Button size="sm">Small</Button>
    <Button size="md">Medium (default)</Button>
    <Button size="lg">Large</Button>
    <Button size="xl">Extra large</Button>
  </div>
{:else if example === "bold-button"}
  <Button bold>Back</Button>
{:else if example === "color-buttons"}
  <Button color="suggested">Save</Button> <Button color="suggested" bold>Submit</Button>
{:else if example === "color-buttons-2"}
  <Button color="destructive">Save</Button> <Button color="destructive" bold>Submit</Button>
{:else if example === "disabled-buttons"}
  <Stack direction="vertical" density="compact">
    <div>
      <Button disabled>Can't touch this</Button>
      <Button disabled color="suggested">Can't touch this</Button>
      <Button disabled color="destructive">Can't touch this</Button>
    </div>
    <div>
      <Button disabled bold>Can't touch this</Button>
      <Button disabled bold color="suggested">Can't touch this</Button>
      <Button disabled bold color="destructive">Can't touch this</Button>
    </div>
  </Stack>
{/if}
