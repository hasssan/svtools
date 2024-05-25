import { baseTest } from './base-test.js';
import { findAll, type Objects } from './items.js';
import type { Player } from './player.js';

baseTest('should parse items', async ({ expect, saveData }) => {
	const items = findAll(saveData.SaveGame);

	expect(items).toBeInstanceOf(Array);
	expect(items[0]).toHaveProperty('ID');
	expect(items[0]).toHaveProperty('name');
	expect(items[0]).toHaveProperty('qualityName');
});

baseTest('should calculate price without profession', async ({ expect }) => {
	const results = findAll(generateSaveData());
	results.forEach((result) => {
		if (result.name === 'Mayonnaise') {
			if (result.quality === 0) {
				expect(result.totalPrice).toBe(190);
			}
			if (result.quality === 1) {
				expect(result.totalPrice).toBe(237);
			}
			if (result.quality === 2) {
				expect(result.totalPrice).toBe(285);
			}
			if (result.quality === 4) {
				expect(result.totalPrice).toBe(380);
			}
		}

		if (result.name === 'Strawberry') {
			if (result.quality === 0) {
				expect(result.totalPrice).toBe(120);
			}
			if (result.quality === 1) {
				expect(result.totalPrice).toBe(150);
			}
			if (result.quality === 2) {
				expect(result.totalPrice).toBe(180);
			}
			if (result.quality === 4) {
				expect(result.totalPrice).toBe(240);
			}
		}

		if (result.name === 'Salmonberry') {
			if (result.quality === 0) {
				expect(result.totalPrice).toBe(5);
			}
			if (result.quality === 1) {
				expect(result.totalPrice).toBe(6);
			}
			if (result.quality === 2) {
				expect(result.totalPrice).toBe(7);
			}
			if (result.quality === 4) {
				expect(result.totalPrice).toBe(10);
			}
		}
	});
});

baseTest('should calculate price with profession', async ({ expect }) => {
	const player: Player = {
		name: 'Camto',
		farmName: 'Cargo',
		money: 277074,
		professions: {
			tiller: { id: 1, name: 'Tiller', multiplier: 1.1 },
			artisan: { id: 4, name: 'Artisan', multiplier: 1.4 }
		},
		professionsList: ['Tiller', 'Artisan']
	};

	const results = findAll(generateSaveData(), { player });
	results.forEach((result) => {
		if (result.name === 'Mayonnaise') {
			if (result.quality === 0) {
				expect(result.totalPrice).toBe(266);
			}
			if (result.quality === 1) {
				expect(result.totalPrice).toBe(331);
			}
			if (result.quality === 2) {
				expect(result.totalPrice).toBe(399);
			}
			if (result.quality === 4) {
				expect(result.totalPrice).toBe(532);
			}
		}

		if (result.name === 'Strawberry') {
			if (result.quality === 0) {
				expect(result.totalPrice).toBe(132);
			}
			if (result.quality === 1) {
				expect(result.totalPrice).toBe(165);
			}
			if (result.quality === 2) {
				expect(result.totalPrice).toBe(198);
			}
			if (result.quality === 4) {
				expect(result.totalPrice).toBe(264);
			}
		}

		if (result.name === 'Salmonberry') {
			if (result.quality === 0) {
				expect(result.totalPrice).toBe(5);
			}
			if (result.quality === 1) {
				expect(result.totalPrice).toBe(6);
			}
			if (result.quality === 2) {
				expect(result.totalPrice).toBe(7);
			}
			if (result.quality === 4) {
				expect(result.totalPrice).toBe(10);
			}
		}
	});
});

function generateSaveData(): Record<string, unknown> {
	const quality = [0, 1, 2, 4];

	const items: Array<Objects> = [];

	for (const q of quality) {
		items.push({
			category: -26,
			name: 'Mayonnaise',
			itemId: 306,
			quality: q,
			stack: 1,
			price: 190,
			'@_xsi:type': 'Object'
		});

		items.push({
			category: -79,
			name: 'Strawberry',
			itemId: 400,
			quality: q,
			stack: 1,
			price: 120,
			'@_xsi:type': 'Object'
		});
		items.push({
			category: -79,
			name: 'Salmonberry',
			itemId: 296,
			quality: 0,
			stack: 1,
			price: 5,
			'@_xsi:type': 'Object'
		});
	}
	return { Item: items };
}
