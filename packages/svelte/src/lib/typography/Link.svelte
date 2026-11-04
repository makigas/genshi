<script lang="ts">
	import { colorClass, sizeClass, type Color, type Size } from '$lib/common.js';
	import type { Icon } from '@lucide/svelte';
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	interface Props extends HTMLAnchorAttributes {
		children?: Snippet;
		href: string;
		bold?: boolean;
		color?: Color;
		size?: Size;
		iconBefore?: typeof Icon;
		iconAfter?: typeof Icon;
	}

	let {
		children,
		href,
		class: className,
		bold,
		color = 'normal',
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
</a>
