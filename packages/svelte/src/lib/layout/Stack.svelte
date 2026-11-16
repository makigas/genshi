<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- SPDX-FileCopyrightText: Copyright (c) 2025-2026 Dani Rodríguez -->
<script lang="ts">
	import { gapClass, modifierClass, type Gap } from '../common.js';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Direction = 'horizontal' | 'vertical';

	const ALIGN_MAPPING = {
		start: null,
		end: 'end',
		center: 'center',
		fill: 'fill',
	};

	const BASELINE_MAPPING = {
		top: null,
		middle: 'middle',
		bottom: 'bottom',
		hexpand: 'hexpand',
	};

	const DIRECTION_MAPPING: Record<Direction, { normal: string | null; reversed: string }> = {
		horizontal: { normal: null, reversed: 'GsStack--hr' },
		vertical: { normal: 'GsStack--v', reversed: 'GsStack--vr' },
	};

	interface Props extends HTMLAttributes<HTMLDivElement> {
		children?: Snippet;
		gap?: Gap;
		direction?: Direction;
		reversed?: boolean;
		align?: keyof typeof ALIGN_MAPPING;
		baseline?: keyof typeof BASELINE_MAPPING;
	}

	let {
		children,
		class: className,
		gap,
		align = 'start',
		baseline = 'top',
		direction = 'horizontal',
		reversed = false,
		...rest
	}: Props = $props();
</script>

<div
	class={[
		'GsStack',
		gapClass(gap),
		modifierClass('GsStack', ALIGN_MAPPING, align),
		modifierClass('GsStack', BASELINE_MAPPING, baseline),
		DIRECTION_MAPPING[direction][reversed ? 'reversed' : 'normal'],
		className,
	]}
	{...rest}>
	{@render children?.()}
</div>
