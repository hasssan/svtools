import { test } from 'vitest';
import { XMLParser } from 'fast-xml-parser';
import fs from 'fs/promises';
import path from 'path';
import { type SaveGame } from './saveGame';

interface SaveData {
	SaveGame: { SaveGame: SaveGame };
	raw: string;
}

interface SaveDataFixture {
	saveData: SaveData;
}

export const baseTest = test.extend<SaveDataFixture>({
	// eslint-disable-next-line no-empty-pattern
	saveData: async ({}, use) => {
		const content = await fs.readFile(path.resolve('./fixtures/Cargo'), 'utf-8');
		const parser = new XMLParser({ ignoreAttributes: false });
		const saveData = parser.parse(content);
		use({ SaveGame: saveData.SaveGame, raw: content } as SaveData);
	}
});
