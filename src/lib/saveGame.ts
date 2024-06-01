import { XMLParser } from 'fast-xml-parser';
import { getPlayer, type Player } from './player';
import { findAll, type Item } from './items';

export { type Player, type Item };

export interface SaveGame {
	player: Player;
	items: Array<Item>;
	gameVersion: string;
}

export function parseSaveGame(data: string): SaveGame {
	if (!data) {
		throw new Error('No save data provided');
	}

	try {
		const parser = new XMLParser({ ignoreAttributes: false });
		const result: Record<string, unknown> = parser.parse(data);

		if (!result.SaveGame) {
			throw new Error('SaveGame is missing from save data');
		}

		const saveGame = result.SaveGame as Record<string, unknown>;

		console.log(saveGame.gameVersion);

		return {
			player: getPlayer(saveGame),
			items: findAll(saveGame),
			gameVersion: saveGame?.gameVersion as string
		};
	} catch (error) {
		console.error(error);
		throw new Error('Failed to parse save data');
	}
}
