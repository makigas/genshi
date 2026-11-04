<script lang="ts">
	import type { HTMLTextareaAttributes } from 'svelte/elements';
	import FormControl from './FormControl.svelte';
	import { ariaInvalid, type FormControlProps } from '$lib/common.js';
	import type { Icon } from '@lucide/svelte';

	interface Props extends FormControlProps<HTMLTextareaAttributes> {
		value?: string;
		placeholder?: string;
		rows?: number;
		mono?: boolean;
		readonly?: boolean;
		iconBefore?: typeof Icon;
		iconAfter?: typeof Icon;
	}

	let {
		label,
		value = $bindable(),
		helper,
		placeholder,
		rows,
		mono = false,
		disabled = false,
		readonly = false,
		iconBefore: IconBefore,
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
	{#if IconBefore}
		<IconBefore class="GenshiInput__icon" />
	{/if}
	<textarea
		bind:value
		{disabled}
		{placeholder}
		{readonly}
		{rows}
		class={['GenshiInput__control', mono && 'GenshiInput--mono', inputClass]}
		aria-invalid={ariaInvalid(validation)}
		{...inputRest}>
	</textarea>
	{#if IconAfter}
		<IconAfter class="GenshiInput__icon" />
	{/if}
</FormControl>
