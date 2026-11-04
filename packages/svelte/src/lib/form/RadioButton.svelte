<script lang="ts">
	import { sizeClass, type FormControlProps } from '$lib/common.js';
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface Props extends FormControlProps<HTMLInputAttributes> {
		group?: unknown;
		value: unknown;
	}

	let {
		label,
		helper,
		disabled = false,
		size = 'md',
		value,
		inputProps = {},
		controlProps = {},
		group = $bindable(),
	}: Props = $props();

	let { class: inputClass, ...inputRest } = $derived(inputProps);

	let { class: controlClass, ...controlRest } = $derived(controlProps);
</script>

<div class={['GenshiInput', sizeClass('GenshiInput', size), controlClass]} {...controlRest}>
	<label class="GenshiInput__label">
		<input
			bind:group
			{value}
			{disabled}
			class={['GenshiInput__control', inputClass]}
			type="radio"
			{...inputRest} />
		{label}
	</label>
	{#if helper}
		<small class="GenshiInput__helper">
			{helper}
		</small>
	{/if}
</div>
