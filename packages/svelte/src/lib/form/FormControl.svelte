<script lang="ts">
	import { sizeClass, type Size } from '$lib/common.js';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		children: Snippet;
		baseClass: string;
		label: string;
		helper?: string;
		size?: Size;
	}

	let {
		children,
		class: className,
		baseClass,
		label,
		helper,
		size = 'md',
		...rest
	}: Props = $props();
</script>

<div class={[baseClass, sizeClass(baseClass, size), className]} {...rest}>
	<label class={`${baseClass}__label`}>
		{label}
		<div class={`${baseClass}__field`}>
			{@render children()}
		</div>
	</label>
	{#if helper}
		<small class={`${baseClass}__helper`}>{helper}</small>
	{/if}
</div>
