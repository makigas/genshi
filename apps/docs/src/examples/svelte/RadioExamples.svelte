<script lang="ts">
  import { RadioButton, RadioGroup } from "@makigas/genshi-svelte";

  let updates = $state("now");
  let install = $state("xs");

  let {
    example,
  }: {
    example:
      | "basic"
      | "inline-mode"
      | "validation"
      | "component-sizes"
      | "component-sizes-2"
      | "component-sizes-3"
      | "component-sizes-4"
      | "component-sizes-5";
  } = $props();
</script>

{#if example === "basic"}
  <RadioGroup label="Install updates">
    <RadioButton
      label="Install update now"
      bind:group={updates}
      value="now"
      helper="The application will be restarted" />
    <RadioButton
      label="Install update later"
      bind:group={updates}
      value="later"
      helper="The application will be updated on next launch" />
    <RadioButton
      disabled
      label="Do not update the app"
      bind:group={updates}
      value="never"
      helper="You cannot disable updates if you are using the free version" />
  </RadioGroup>
{:else if example === "inline-mode"}
  <RadioGroup label="Install updates" inline>
    <RadioButton label="Install update now" bind:group={updates} value="now" />
    <RadioButton label="Install update later" bind:group={updates} value="later" />
    <RadioButton disabled label="Do not update the app" bind:group={updates} value="never" />
  </RadioGroup>
{:else if example === "validation"}
  <RadioGroup label="Install updates" validation="invalid" helper="You must pick a value">
    <RadioButton label="Install update now" bind:group={updates} value="now" />
    <RadioButton label="Install update later" bind:group={updates} value="later" />
    <RadioButton disabled label="Do not update the app" bind:group={updates} value="never" />
  </RadioGroup>
{:else if example === "component-sizes"}
  <RadioButton
    size="xs"
    bind:group={install}
    value="xs"
    label="Install update now"
    helper="The application will be restarted" />
{:else if example === "component-sizes-2"}
  <RadioButton
    size="sm"
    bind:group={install}
    value="sm"
    label="Install update now"
    helper="The application will be restarted" />
{:else if example === "component-sizes-3"}
  <RadioButton
    size="md"
    bind:group={install}
    value="md"
    label="Install update now"
    helper="The application will be restarted" />
{:else if example === "component-sizes-4"}
  <RadioButton
    size="lg"
    bind:group={install}
    value="lg"
    label="Install update now"
    helper="The application will be restarted" />
{:else if example === "component-sizes-5"}
  <RadioButton
    size="xl"
    bind:group={install}
    value="xl"
    label="Install update now"
    helper="The application will be restarted" />
{/if}
