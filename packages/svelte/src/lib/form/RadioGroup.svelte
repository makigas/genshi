<script lang="ts">
	import { ariaInvalid, type Validation } from '$lib/common.js';
	import type { Snippet } from 'svelte';
	import type { HTMLFieldsetAttributes } from 'svelte/elements';

	interface Props extends HTMLFieldsetAttributes {
		children: Snippet;
		label: string;
		helper?: string;
		validation?: Validation;
		inline?: boolean;
	}

	let {
		children,
		class: className,
		label,
		helper,
		validation,
		inline = false,
		...rest
	}: Props = $props();
</script>

<fieldset
	class={['GenshiRadioGroup', { 'GenshiRadioGroup--inline': inline }, className]}
	role="radiogroup"
	aria-invalid={ariaInvalid(validation)}
	{...rest}>
	<legend>{label}</legend>
	{@render children()}
	{#if helper}
		<small class="GenshiRadioGroup__helper">{helper}</small>
	{/if}
</fieldset>
