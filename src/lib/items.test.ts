import { baseTest } from './base-test.js';
import { findAll } from './items.js';

baseTest('should parse items', async ({ expect, saveData }) => {
	const items = findAll(saveData.SaveGame);
	expect(items).toBeInstanceOf(Array);
	expect(items[0]).toHaveProperty('name');
});
