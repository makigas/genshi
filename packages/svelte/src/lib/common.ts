// SPDX-License-Identifier: AGPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright (c) 2025-2026 Dani Rodríguez
import type { Component } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export type IconComponent = Component<{ class?: string }>;

export type Gap = 'none' | 'sm' | 'md' | 'lg' | 'xl';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type Appearance = 'outline' | 'accent' | 'destructive' | 'link';

export type Validation = 'valid' | 'invalid' | null | undefined | false;

export interface FormControlProps<T> {
	label: string;
	helper?: string;
	disabled?: boolean;
	validation?: Validation;
	size?: Size;
	inputProps?: Partial<T>;
	controlProps?: Partial<HTMLAttributes<HTMLDivElement>>;
}

/**
 * @generic E the element
 * @generic P the prop value
 * @generic M the modifier
 * @param element the element type
 * @param mapping
 */
export function modifierClass<E extends string, P extends string, M extends string>(
	element: E,
	mapping: Record<P, M | null>,
	modifier: P,
): `${E}--${M}` | null {
	if (modifier in mapping) {
		const className = mapping[modifier];
		if (className) {
			return `${element}--${className}`;
		}
	}
	return null;
}

export function gapClass(gap: Gap | undefined) {
	return gap && `GsGap--${gap}`;
}

export function appearanceClass<T extends string>(element: T, appearance: Appearance) {
	return modifierClass(
		element,
		{
			outline: null,
			accent: 'accent',
			destructive: 'destructive',
			link: 'link',
		},
		appearance,
	);
}

export function sizeClass<T extends string>(element: T, size: Size) {
	return modifierClass(
		element,
		{
			xs: 'xs',
			sm: 'sm',
			md: null,
			lg: 'lg',
			xl: 'xl',
		},
		size,
	);
}

export function ariaInvalid(valid: Validation): 'true' | 'false' | undefined {
	if (valid == 'invalid') {
		return 'true';
	} else if (valid == 'valid') {
		return 'false';
	}
}
