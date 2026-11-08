<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import FormControl from './FormControl.svelte';
	import { ariaInvalid, type FormControlProps } from '../common.js';
	import type { IconComponent } from '../common.js';

	interface Props extends FormControlProps<HTMLInputAttributes> {
		value?: string;
		placeholder?: string;
		type?:
			| 'text'
			| 'email'
			| 'password'
			| 'number'
			| 'tel'
			| 'url'
			| 'search'
			| 'datetime-local'
			| 'date'
			| 'time'
			| 'color';
		mono?: boolean;
		readonly?: boolean;
		iconBefore?: IconComponent;
		iconAfter?: IconComponent;
	}

	let {
		label,
		value = $bindable(),
		placeholder,
		helper,
		type = 'text',
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
	<input
		bind:value
		{disabled}
		{readonly}
		{type}
		{placeholder}
		class={['GenshiInput__control', mono && 'GenshiInput--mono', inputClass]}
		aria-invalid={ariaInvalid(validation)}
		{...inputRest} />
	{#if IconAfter}
		<IconAfter class="GenshiInput__icon" />
	{/if}
</FormControl>
