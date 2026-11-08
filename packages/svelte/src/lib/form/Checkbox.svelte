<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- SPDX-FileCopyrightText: Copyright (c) 2025-2026 Dani Rodríguez -->
<script lang="ts">
	import { ariaInvalid, sizeClass, type FormControlProps } from '../common.js';
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface Props extends FormControlProps<HTMLInputAttributes> {
		checked?: boolean;
	}

	let {
		label,
		helper,
		disabled = false,
		validation,
		size = 'md',
		inputProps = {},
		controlProps = {},
		checked = $bindable(),
	}: Props = $props();

	let { class: inputClass, ...inputRest } = $derived(inputProps);

	let { class: controlClass, ...controlRest } = $derived(controlProps);
</script>

<div class={['GenshiInput', sizeClass('GenshiInput', size), controlClass]} {...controlRest}>
	<label class="GenshiInput__label">
		<input
			bind:checked
			{disabled}
			class={['GenshiInput__control', inputClass]}
			type="checkbox"
			aria-invalid={ariaInvalid(validation)}
			{...inputRest} />
		{label}
	</label>
	{#if helper}
		<small class="GenshiInput__helper">
			{helper}
		</small>
	{/if}
</div>
