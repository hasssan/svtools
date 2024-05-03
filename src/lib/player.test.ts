import { baseTest } from './base-test.js';
import { getPlayer, type Player } from './player.js';

baseTest('should parse save data', async ({ expect, saveData }) => {
	const result: Player = {
		name: 'Camto',
		farmName: 'Cargo',
		money: 17028
	};
	expect(getPlayer(saveData.SaveGame)).toEqual(result);
});
