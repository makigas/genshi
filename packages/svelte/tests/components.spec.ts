import { expect, test } from '@playwright/test';

for (const route of [
	'layout/stack',
	'layout/cols',
	'layout/wrapper',
	'form/button',
	'form/checkbox',
	'form/radio',
	'form/select',
	'form/files',
	'form/text-field',
	'form/textarea',
]) {
	test(`renders ${route} without browser errors`, async ({ page }) => {
		const errors: string[] = [];
		page.on('pageerror', (error) => errors.push(error.message));
		const response = await page.goto(`${route}/`);
		expect(response?.status()).toBe(200);
		await expect(page.locator('main')).toBeVisible();
		expect(errors).toEqual([]);
	});
}

test('form bindings, submit events and validation survive hydration', async ({ page }) => {
	await page.goto('integration/');
	await page.getByLabel('Name', { exact: true }).fill('Ada');
	await page.getByLabel(/^Plan/).selectOption('standard');
	await page.getByLabel(/^Regions/).selectOption(['asia', 'europe']);
	await page.getByLabel('Once a week', { exact: true }).check();
	await page.getByLabel('Bio', { exact: true }).fill('A local consumer');
	const state = page.locator('main pre');
	await expect(state).toContainText('"name": "Ada"');
	await expect(state).toContainText('"plan": "standard"');
	await expect(state).toContainText('"newsletter": "weekly"');
	await expect(state).toContainText('"asia"');
	await expect(state).toContainText('A local consumer');
	await page.getByRole('button', { name: 'Create account' }).click();
	await expect(page.getByLabel('I have read the terms and conditions')).toHaveAttribute(
		'aria-invalid',
		'true',
	);
	await page.getByLabel('I have read the terms and conditions').check();
	await expect(state).toContainText('"readTOS": true');
	await page.getByRole('button', { name: 'Create account' }).click();
	await expect(page.getByLabel('I have read the terms and conditions')).not.toHaveAttribute(
		'aria-invalid',
		'true',
	);
});

test('Stack uses the workspace CSS', async ({ page }) => {
	await page.goto('layout/stack/');
	await expect(page.locator('main .GenshiStack').first()).toHaveCSS('display', 'flex');
	await expect(page.locator('main .GenshiStack--v').first()).toHaveCSS('flex-direction', 'column');
});
