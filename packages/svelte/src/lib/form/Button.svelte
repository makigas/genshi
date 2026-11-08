<script lang="ts">
	import { colorClass, sizeClass, type Color, type Size } from '../common.js';
	import type { IconComponent } from '../common.js';
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		children?: Snippet;
		bold?: boolean;
		color?: Color;
		size?: Size;
		iconBefore?: IconComponent;
		iconAfter?: IconComponent;
		disabled?: boolean;
	}

	let {
		children,
		class: className,
		bold,
		color = 'normal',
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
		colorClass('GenshiButton', color),
		{
			'GenshiButton--bold': bold,
		},
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
