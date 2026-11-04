import type { HTMLAttributes } from 'svelte/elements';

export type Density = 'gapless' | 'compact' | 'normal' | 'cozy';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type Color = 'normal' | 'suggested' | 'destructive';

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

export function densityClass<T extends string>(element: T, density: Density) {
	return modifierClass(
		element,
		{
			gapless: 'gapless',
			compact: 'compact',
			normal: null,
			cozy: 'cozy',
		},
		density,
	);
}

export function colorClass<T extends string>(element: T, color: Color) {
	return modifierClass(
		element,
		{
			normal: null,
			suggested: 'suggested',
			destructive: 'destructive',
		},
		color,
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
