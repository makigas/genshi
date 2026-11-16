<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- SPDX-FileCopyrightText: Copyright (c) 2025-2026 Dani Rodríguez -->
<script lang="ts">
	import { gapClass, type Gap } from '../../common.js';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		children?: Snippet;
		gap?: Gap;
		force?: boolean;
		reversed?: boolean;
	}

	let {
		children,
		class: className,
		gap,
		force = false,
		reversed = false,
		...rest
	}: Props = $props();
</script>

<div
	class={[
		'GsCols',
		{ 'GsCols--force': force, 'GsCols--reverse': reversed },
		gapClass(gap),
		className,
	]}
	{...rest}>
	{@render children?.()}
</div>
