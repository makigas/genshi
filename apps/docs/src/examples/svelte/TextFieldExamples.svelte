<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- SPDX-FileCopyrightText: Copyright (c) 2025-2026 Dani Rodríguez -->
<script lang="ts">
  import { Cols, Stack, TextField } from "@makigas/genshi-svelte";
  import { User, AtSign, Check, Send, TriangleAlert } from "@lucide/svelte";

  let {
    example,
  }: {
    example:
      | "basic"
      | "additional-types"
      | "monospace"
      | "disabled-and-read-only"
      | "disabled-and-read-only-2"
      | "icons"
      | "validation"
      | "sizes"
      | "sizes-2"
      | "sizes-3"
      | "sizes-4"
      | "sizes-5";
  } = $props();
</script>

{#if example === "basic"}
  <TextField
    label="User name"
    placeholder="Type your username"
    inputProps={{ name: "form[user_name]", id: "user_name" }} />
{:else if example === "additional-types"}
  <Stack direction="horizontal">
    <TextField label="User name" placeholder="Type your username" type="text" />
    <TextField label="Password" placeholder="Pick a password" type="password" />
    <TextField label="Episode count" placeholder="Number of episodes" type="number" />
    <TextField label="SMS notifications" placeholder="SMS notifications" type="tel" />
    <TextField label="External URL" placeholder="External URL" type="url" />
    <TextField label="Filter records" placeholder="Search query" type="search" />
    <TextField label="Publish at" type="datetime-local" />
    <TextField label="Creation date" type="date" />
    <TextField label="Send notification at" type="time" />
    <TextField label="Background color" type="color" />
  </Stack>
{:else if example === "monospace"}
  <TextField
    label="User name"
    placeholder="Type your username"
    type="text"
    helper="Your username must have between 3 and 10 characters"
    mono />
{:else if example === "disabled-and-read-only"}
  <TextField
    label="User name"
    placeholder="Type your username"
    type="text"
    value="john.doe222"
    disabled />
{:else if example === "disabled-and-read-only-2"}
  <TextField
    label="User name"
    placeholder="Type your username"
    type="text"
    value="john.doe222"
    readonly />
{:else if example === "icons"}
  <Cols>
    <TextField label="User bio" placeholder="User bio" iconBefore={User} />
    <TextField label="Message" placeholder="Send your message" iconAfter={Send} />
    <TextField label="Reply" placeholder="Write your reply" iconBefore={AtSign} iconAfter={Check} />
  </Cols>
{:else if example === "validation"}
  <Cols>
    <TextField
      label="User name"
      placeholder="Type your username"
      type="text"
      helper="Everything looks valid"
      value="john.doe222"
      validation="valid"
      iconAfter={Check} />
    <TextField
      label="User name"
      placeholder="Type your username"
      type="text"
      helper="Username is already taken"
      value="john.doe222"
      validation="invalid"
      iconAfter={TriangleAlert} />
  </Cols>
{:else if example === "sizes"}
  <TextField
    label="User name"
    placeholder="Type your username"
    size="xs"
    iconBefore={AtSign}
    iconAfter={Check} />
{:else if example === "sizes-2"}
  <TextField
    label="User name"
    placeholder="Type your username"
    size="sm"
    iconBefore={AtSign}
    iconAfter={Check} />
{:else if example === "sizes-3"}
  <TextField
    label="User name"
    placeholder="Type your username"
    size="md"
    iconBefore={AtSign}
    iconAfter={Check} />
{:else if example === "sizes-4"}
  <TextField
    label="User name"
    placeholder="Type your username"
    size="lg"
    iconBefore={AtSign}
    iconAfter={Check} />
{:else if example === "sizes-5"}
  <TextField
    label="User name"
    placeholder="Type your username"
    size="xl"
    iconBefore={AtSign}
    iconAfter={Check} />
{/if}
