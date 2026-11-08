<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- SPDX-FileCopyrightText: Copyright (c) 2025-2026 Dani Rodríguez -->
<script lang="ts">
  import { Cols, Textarea } from "@makigas/genshi-svelte";
  import { User, AtSign, Check, Send, TriangleAlert } from "@lucide/svelte";

  let {
    example,
  }: {
    example:
      | "basic"
      | "monospace"
      | "disabled-and-readonly"
      | "disabled-and-readonly-2"
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
  <Textarea
    rows={5}
    label="Your bio"
    placeholder="Write your bio"
    helper="A bio helps your profile be more interesting." />
{:else if example === "monospace"}
  <Textarea rows={5} placeholder="Type your custom HTML here" label="Custom HTML code" mono />
{:else if example === "disabled-and-readonly"}
  <Textarea
    disabled
    label="User bio"
    value="CEO of the world"
    helper="You cannot change your bio right now" />
{:else if example === "disabled-and-readonly-2"}
  <Textarea
    readonly
    label="User bio"
    value="CEO of the world"
    helper="You cannot change your bio right now" />
{:else if example === "icons"}
  <Cols>
    <Textarea label="User bio" placeholder="User bio" iconBefore={User} />
    <Textarea label="Message" placeholder="Send your message" iconAfter={Send} />
    <Textarea label="Reply" placeholder="Write your reply" iconBefore={AtSign} iconAfter={Check} />
  </Cols>
{:else if example === "validation"}
  <Cols>
    <Textarea
      label="Bio"
      placeholder="Write about you"
      helper="Your bio looks OK"
      value="CEO of the world"
      validation="valid"
      iconAfter={Check} />
    <Textarea
      label="Bio"
      placeholder="Write about you"
      helper="People is not ready for facts"
      value="HTML is a programming language"
      validation="invalid"
      iconAfter={TriangleAlert} />
  </Cols>
{:else if example === "sizes"}
  <Textarea label="User name" placeholder="Type your username" size="xs" iconBefore={User} />
{:else if example === "sizes-2"}
  <Textarea label="User name" placeholder="Type your username" size="sm" iconBefore={User} />
{:else if example === "sizes-3"}
  <Textarea label="User name" placeholder="Type your username" size="md" iconBefore={User} />
{:else if example === "sizes-4"}
  <Textarea label="User name" placeholder="Type your username" size="lg" iconBefore={User} />
{:else if example === "sizes-5"}
  <Textarea label="User name" placeholder="Type your username" size="xl" iconBefore={User} />
{/if}
