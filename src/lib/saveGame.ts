import { XMLParser } from 'fast-xml-parser';
import { getPlayer, type Player } from './player';
import { findAll, type Item } from './items';

export { type Player, type Item };

export type Season = 'Fall' | 'Winter' | 'Summer' | 'Spring' | undefined;

interface CurrentDate {
	day?: number;
	season?: Season;
	year?: number;
}

export interface SaveGame {
	player: Player;
	items: Array<Item>;
	gameVersion: string;
	currentDate: CurrentDate;
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

		return {
			player: getPlayer(saveGame),
			items: findAll(saveGame),
			currentDate: {
				day: typeof saveGame?.dayOfMonth === 'number' ? saveGame?.dayOfMonth : undefined,
				season:
					typeof saveGame?.currentSeason === 'string'
						? parseSeason(saveGame?.currentSeason)
						: undefined,
				year: typeof saveGame?.year === 'number' ? saveGame?.year : undefined
			},
			gameVersion: saveGame?.gameVersion as string
		};
	} catch (error) {
		console.error(error);
		throw new Error('Failed to parse save data');
	}
}

function parseSeason(season: string): Season {
	switch (season) {
		case 'fall':
			return 'Fall';
		case 'winter':
			return 'Winter';
		case 'summer':
			return 'Summer';
		case 'spring':
			return 'Spring';
		default:
			return undefined;
	}
}
