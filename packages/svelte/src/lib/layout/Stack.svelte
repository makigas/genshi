<script lang="ts">
	import { densityClass, modifierClass, type Density } from '$lib/common.js';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Align = 'start' | 'end' | 'between' | 'center';
	type Direction = 'horizontal' | 'vertical';

	const ALIGN_MAPPING = {
		start: null,
		end: 'end',
		between: 'between',
		center: 'center',
	};

	const DIRECTION_MAPPING: Record<Direction, { normal: string | null; reversed: string }> = {
		horizontal: { normal: null, reversed: 'GenshiStack--hr' },
		vertical: { normal: 'GenshiStack--v', reversed: 'GenshiStack--vr' },
	};

	interface Props extends HTMLAttributes<HTMLDivElement> {
		children?: Snippet;
		density?: Density;
		direction?: Direction;
		reversed?: boolean;
		align?: Align;
	}

	let {
		children,
		class: className,
		density = 'normal',
		align = 'start',
		direction = 'horizontal',
		reversed = false,
		...rest
	}: Props = $props();
</script>

<div
	class={[
		'GenshiStack',
		densityClass('GenshiStack', density),
		modifierClass('GenshiStack', ALIGN_MAPPING, align),
		DIRECTION_MAPPING[direction][reversed ? 'reversed' : 'normal'],
		className,
	]}
	{...rest}>
	{@render children?.()}
</div>
