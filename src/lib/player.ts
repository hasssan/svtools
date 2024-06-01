import { professions, professionMultipliers } from './constants.js';

export interface Player {
	name: string;
	farmName: string;
	money: number;
	professions?: Record<string, Profession>;
	professionsList?: Array<string>;
}

interface Profession {
	id: number;
	name: string;
	multiplier?: number;
}

interface PlayerSaveGame {
	name: string;
	farmName: string;
	money: number;
	professions: {
		int: number[];
	};
}

export function getPlayer(saveGame: Record<string, unknown>): Player {
	if (!saveGame) {
		throw new Error('Invalid save data');
	}

	if (typeof saveGame.player !== 'object' || !saveGame.player) {
		throw new Error('Invalid player data');
	}
	const parsedPlayer = saveGame.player as PlayerSaveGame;

	const player: Player = {
		name: parsedPlayer.name,
		farmName: parsedPlayer.farmName,
		money: parsedPlayer.money
	};

	if (parsedPlayer.professions.int.length) {
		if (!player.professions) {
			player.professions = {};
		}
		if (!player.professionsList) {
			player.professionsList = [];
		}
		for (const professionId of parsedPlayer.professions.int) {
			if (professionId === 1) {
				player.professions.tiller = {
					id: 1,
					name: professions[1],
					multiplier: professionMultipliers[1]
				};
				player.professionsList.push(professions[1]);
			} else if (professionId === 4) {
				player.professions.artisan = {
					id: 4,
					name: professions[4],
					multiplier: professionMultipliers[4]
				};
				player.professionsList.push(professions[4]);
			} else {
				player.professionsList.push(professions[professionId as keyof typeof professions]);
			}
		}
	}

	return player;
}
