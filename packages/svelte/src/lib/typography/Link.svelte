<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- SPDX-FileCopyrightText: Copyright (c) 2025-2026 Dani Rodríguez -->
<script lang="ts">
	import { appearanceClass, sizeClass, type Appearance, type Size } from '../common.js';
	import type { IconComponent } from '../common.js';
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	interface Props extends HTMLAnchorAttributes {
		children?: Snippet;
		href: string;
		appearance?: Appearance;
		size?: Size;
		iconBefore?: IconComponent;
		iconAfter?: IconComponent;
	}

	let {
		children,
		href,
		class: className,
		appearance = 'outline',
		size = 'md',
		iconBefore: IconBefore,
		iconAfter: IconAfter,
		...rest
	}: Props = $props();
</script>

<a
	{href}
	class={[
		'GenshiButton',
		sizeClass('GenshiButton', size),
		appearanceClass('GenshiButton', appearance),
		className,
	]}
	{...rest}>
	{#if IconBefore}
		<IconBefore class="GenshiButton__icon" />
	{/if}
	{@render children?.()}
	{#if IconAfter}
		<IconAfter class="GenshiButton__icon" />
	{/if}
</a>
