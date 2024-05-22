import { baseTest } from './base-test.js';
import { getPlayer, type Player } from './player.js';

baseTest('should parse save data', async ({ expect, saveData }) => {
	const result: Player = {
		name: 'Camto',
		farmName: 'Cargo',
		money: 277074,
		professions: {
			tiller: { id: 1, name: 'Tiller', multiplier: 1.1 },
			artisan: { id: 4, name: 'Artisan', multiplier: 1.4 }
		},
		professionsList: ['Tiller', 'Artisan']
	};
	const playerData = getPlayer(saveData.SaveGame);
	expect(playerData).toEqual(result);
});
