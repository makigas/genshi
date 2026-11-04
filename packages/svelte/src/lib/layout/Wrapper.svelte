<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		children?: Snippet;
		fluid?: boolean;
		breath?: boolean;
	}

	let { children, class: className, fluid = false, breath = false, ...rest }: Props = $props();
</script>

<div
	class={[
		'GenshiWrapper',
		{
			'GenshiWrapper--fluid': fluid,
			'GenshiWrapper--breath': breath,
		},
		className,
	]}
	{...rest}>
	{@render children?.()}
</div>
