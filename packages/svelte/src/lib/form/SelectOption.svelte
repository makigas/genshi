<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLOptionAttributes } from 'svelte/elements';

	interface Props extends HTMLOptionAttributes {
		children: Snippet;
	}

	let { children, ...rest }: Props = $props();
</script>

<option {...rest}>{@render children()}</option>
