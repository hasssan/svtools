import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Stardew Valley Tools' })).toBeVisible();
});

test('upload save file successfully', async ({ page }) => {
	await page.goto('/');
	const input = await page.$('input[type=file]');
	await input?.setInputFiles('./fixtures/Cargo');
	await expect(page.getByTestId('player-name')).toHaveText('Name: Camto');
	await expect(page.getByTestId('player-farmName')).toHaveText('Farm Name: Cargo');
	await expect(page.getByTestId('player-professions')).toHaveText(
		'Professions: Tiller, Gatherer, Fisher, Miner, Fighter, Artisan, Pirate, Botanist'
	);
});
