<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- SPDX-FileCopyrightText: Copyright (c) 2025-2026 Dani Rodríguez -->
<script lang="ts">
	import { appearanceClass, sizeClass, type Appearance, type Size } from '../common.js';
	import type { IconComponent } from '../common.js';
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		children?: Snippet;
		appearance?: Appearance;
		size?: Size;
		iconBefore?: IconComponent;
		iconAfter?: IconComponent;
		disabled?: boolean;
	}

	let {
		children,
		class: className,
		appearance = 'outline',
		size = 'md',
		iconBefore: IconBefore,
		iconAfter: IconAfter,
		disabled,
		...rest
	}: Props = $props();
</script>

<button
	{disabled}
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
</button>
