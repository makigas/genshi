<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import FormControl from './FormControl.svelte';
	import { ariaInvalid, type FormControlProps } from '$lib/common.js';
	import type { Icon } from '@lucide/svelte';

	interface Props extends FormControlProps<HTMLInputAttributes> {
		files?: FileList;
		iconAfter?: typeof Icon;
	}

	let {
		label,
		files = $bindable(),
		helper,
		disabled = false,
		iconAfter: IconAfter,
		validation,
		size = 'md',
		inputProps = {},
		controlProps = {},
	}: Props = $props();

	let { class: inputClass, ...inputRest } = $derived(inputProps);

	let { class: controlClass, ...controlRest } = $derived(controlProps);
</script>

<FormControl {label} {helper} baseClass="GenshiInput" class={controlClass} {size} {...controlRest}>
	<input
		bind:files
		{disabled}
		type="file"
		class={['GenshiInput__control', inputClass]}
		aria-invalid={ariaInvalid(validation)}
		{...inputRest} />
	{#if IconAfter}
		<IconAfter class="GenshiInput__icon" />
	{/if}
</FormControl>
