<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- SPDX-FileCopyrightText: Copyright (c) 2025-2026 Dani Rodríguez -->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		children?: Snippet;
		fit?: boolean;
	}

	let { children, class: className, fit = false, ...rest }: Props = $props();
</script>

<div class={[{ GsCols__fit: fit }, className]} {...rest}>
	{@render children?.()}
</div>
