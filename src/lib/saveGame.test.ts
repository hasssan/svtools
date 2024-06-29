import { baseTest } from './base-test.js';
import { parseSaveGame, parseCurrentDate } from './saveGame.js';

baseTest('should parse save data', async ({ expect, saveData }) => {
	const saveGame = parseSaveGame(saveData.raw);
	expect(saveGame).toHaveProperty('player');
	expect(saveGame).toHaveProperty('items');
	expect(saveGame).toHaveProperty('gameVersion');
	expect(saveGame).toHaveProperty('currentDate');
});

baseTest('should parse currentDate', async ({ expect, saveData }) => {
	const result = parseCurrentDate(saveData.SaveGame);
	const currentDate = result.toString();
	expect(currentDate).toBe('Sun, Winter 21, Year 2');
});

baseTest('should parse currentDate name', async ({ expect }) => {
	const fixtures = [
		{ dayOfMonth: 1, currentSeason: 'spring', year: 1, expected: 'Mon, Spring 1, Year 1' },
		{ dayOfMonth: 2, currentSeason: 'spring', year: 1, expected: 'Tue, Spring 2, Year 1' },
		{ dayOfMonth: 10, currentSeason: 'spring', year: 1, expected: 'Wed, Spring 10, Year 1' },
		{ dayOfMonth: 11, currentSeason: 'spring', year: 1, expected: 'Thu, Spring 11, Year 1' },
		{ dayOfMonth: 19, currentSeason: 'spring', year: 1, expected: 'Fri, Spring 19, Year 1' },
		{ dayOfMonth: 20, currentSeason: 'spring', year: 1, expected: 'Sat, Spring 20, Year 1' },
		{ dayOfMonth: 28, currentSeason: 'spring', year: 1, expected: 'Sun, Spring 28, Year 1' }
	];
	for (const fixture of fixtures) {
		const result = parseCurrentDate(fixture);
		const currentDate = result.toString();
		expect(currentDate).toBe(fixture.expected);
	}
});
