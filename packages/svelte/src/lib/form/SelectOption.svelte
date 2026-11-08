<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- SPDX-FileCopyrightText: Copyright (c) 2025-2026 Dani Rodríguez -->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLOptionAttributes } from 'svelte/elements';

	interface Props extends HTMLOptionAttributes {
		children: Snippet;
	}

	let { children, ...rest }: Props = $props();
</script>

<option {...rest}>{@render children()}</option>
