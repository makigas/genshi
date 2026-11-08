<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- SPDX-FileCopyrightText: Copyright (c) 2025-2026 Dani Rodríguez -->
<script lang="ts">
  import { Button, Stack } from "@makigas/genshi-svelte";

  let {
    example,
  }: {
    example:
      | "basic"
      | "stack-positioning"
      | "stack-positioning-2"
      | "stack-positioning-3"
      | "stack-direction"
      | "stack-direction-2";
  } = $props();
</script>

{#if example === "basic"}
  <Stack>
    <Button>Compose</Button>
    <Button>Reply</Button>
    <Button>Reply All</Button>
    <Button>Forward</Button>
  </Stack>
{:else if example === "stack-positioning"}
  <Stack align="end">
    <Button>Compose</Button>
    <Button>Reply</Button>
    <Button>Reply All</Button>
    <Button>Forward</Button>
  </Stack>
{:else if example === "stack-positioning-2"}
  <Stack align="center">
    <Button>Compose</Button>
    <Button>Reply</Button>
    <Button>Reply All</Button>
    <Button>Forward</Button>
  </Stack>
{:else if example === "stack-positioning-3"}
  <Stack align="between">
    <Button>Compose</Button>
    <Button>Reply</Button>
    <Button>Reply All</Button>
    <Button>Forward</Button>
  </Stack>
{:else if example === "stack-direction"}
  <Stack direction="vertical">
    <Button>Compose</Button>
    <Button>Reply</Button>
    <Button>Reply All</Button>
    <Button>Forward</Button>
  </Stack>
{:else if example === "stack-direction-2"}
  <Stack align="center">
    <Stack direction="vertical">
      <Stack>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
      </Stack>
      <Stack reversed>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
      </Stack>
    </Stack>
    <Stack>
      <Stack direction="vertical" reversed>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
      </Stack>
      <Stack direction="vertical">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
      </Stack>
    </Stack>
  </Stack>
{/if}
