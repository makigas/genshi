<script lang="ts">
	import { densityClass, type Density } from '$lib/common.js';
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
