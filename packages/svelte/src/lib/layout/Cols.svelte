<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- SPDX-FileCopyrightText: Copyright (c) 2025-2026 Dani Rodríguez -->
<script lang="ts">
	import { densityClass, type Density } from '../common.js';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		children?: Snippet;
		density?: Density;
	}

	let { children, class: className, density = 'normal', ...rest }: Props = $props();
</script>

<div class={['GenshiCols', densityClass('GenshiCols', density), className]} {...rest}>
	{@render children?.()}
</div>
