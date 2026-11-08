<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- SPDX-FileCopyrightText: Copyright (c) 2025-2026 Dani Rodríguez -->
<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import FormControl from './FormControl.svelte';
	import { ariaInvalid, type FormControlProps } from '../common.js';
	import type { IconComponent } from '../common.js';

	interface Props extends FormControlProps<HTMLInputAttributes> {
		files?: FileList;
		iconAfter?: IconComponent;
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
