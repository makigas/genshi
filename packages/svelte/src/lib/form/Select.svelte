<script lang="ts">
	import { ariaInvalid, type FormControlProps } from '$lib/common.js';
	import type { Snippet } from 'svelte';
	import type { HTMLSelectAttributes } from 'svelte/elements';
	import FormControl from './FormControl.svelte';

	interface Props extends FormControlProps<HTMLSelectAttributes> {
		children: Snippet;
		value?: unknown;
		multiple?: boolean;
		rows?: number;
	}

	let {
		children,
		label,
		value = $bindable(),
		helper,
		validation,
		size = 'md',
		multiple = false,
		disabled = false,
		rows,
		inputProps = {},
		controlProps = {},
	}: Props = $props();

	let { class: inputClass, ...inputRest } = $derived(inputProps);

	let { class: controlClass, ...controlRest } = $derived(controlProps);
</script>

<FormControl {label} {helper} baseClass="GenshiSelect" class={controlClass} {size} {...controlRest}>
	{#if multiple}
		<select
			multiple
			bind:value
			{disabled}
			size={rows}
			class={['GenshiSelect__control', inputClass]}
			aria-invalid={ariaInvalid(validation)}
			{...inputRest}>
			{@render children()}
		</select>
	{:else}<select
			bind:value
			{disabled}
			size={rows}
			class={['GenshiSelect__control', inputClass]}
			aria-invalid={ariaInvalid(validation)}
			{...inputRest}>
			{@render children()}
		</select>{/if}
</FormControl>
