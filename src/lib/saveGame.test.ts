import { baseTest } from './base-test.js';
import { parseSaveGame } from './saveGame.js';

baseTest('should parse save data', async ({ expect, saveData }) => {
	const saveGame = parseSaveGame(saveData.raw);
	expect(saveGame).toHaveProperty('player');
	expect(saveGame).toHaveProperty('items');
	expect(saveGame).toHaveProperty('gameVersion');
	expect(saveGame).toHaveProperty('currentDate');
});
