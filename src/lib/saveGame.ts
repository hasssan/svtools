import { XMLParser } from 'fast-xml-parser';
import { getPlayer, type Player } from './player';
import { findAll, type Item } from './items';

export { type Player, type Item };

export type Season = 'Fall' | 'Winter' | 'Summer' | 'Spring' | undefined;

export interface CurrentDate {
	day?: number;
	season?: Season;
	year?: number;
	toString(): string;
}

export interface SaveGame {
	player: Player;
	items: Array<Item>;
	gameVersion: string;
	currentDate: CurrentDate;
}

export function parseCurrentDate(saveGame: Record<string, unknown>): CurrentDate {
	const name = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	const currentDate = {
		day: typeof saveGame?.dayOfMonth === 'number' ? saveGame?.dayOfMonth : undefined,
		season:
			typeof saveGame?.currentSeason === 'string'
				? parseSeason(saveGame?.currentSeason)
				: undefined,
		year: typeof saveGame?.year === 'number' ? saveGame?.year : undefined,
		toString() {
			if (!this.day || !this.season || !this.year) {
				return '';
			}
			return `${name[(this.day - 1) % 7]}, ${this.season} ${this.day}, Year ${this.year}`;
		}
	};

	return currentDate;
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
		const currentDate = parseCurrentDate(saveGame);

		return {
			player: getPlayer(saveGame),
			items: findAll(saveGame),
			currentDate: currentDate,
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
