import type { Player } from './player.js';
export interface Item {
	ID: number;
	name: string;
	stack: number;
	price: number;
	sellPrice: number;
	totalPrice: number;
	categoryID: number;
	quality: number;
	qualityName?: string;
	'@_xsi:type'?: string;
}

export interface Objects {
	itemId: number;
	name: string;
	stack: number;
	price: number;
	quality: number;
	'@_xsi:type': string;
	category: number;
}

export const qualityNames: Record<number, string> = {
	0: 'Normal',
	1: 'Silver',
	2: 'Gold',
	4: 'Iridium'
};

const qualityPriceMultipliers: Record<number, number> = {
	0: 1,
	1: 1.25,
	2: 1.5,
	4: 2
};

interface findOptions {
	player: Player;
}

export function findAll(data: Record<string, unknown>, options?: findOptions) {
	const allItems = findNestedObject(data, 'Item').flat() as Array<Objects>;

	const items: Array<Item> = allItems
		.filter((item) => item['@_xsi:type'] === 'Object')
		.map((item) => {
			const qualityName = qualityNames[item.quality];
			const { price, sellPrice, totalPrice } = calculatePrice(item, options);
			return {
				ID: item.itemId,
				name: item.name,
				stack: item.stack,
				categoryID: item.category,
				price,
				sellPrice,
				totalPrice,
				quality: item.quality,
				qualityName
			};
		});

	return items;
}

function findNestedObject(obj: Record<string, unknown>, key: string): Array<unknown> {
	let items: Array<unknown> = [];
	for (const i in obj) {
		if (i === key) {
			items.push(obj[i]);
		}
		if (typeof obj[i] === 'object') {
			items = items.concat(findNestedObject(obj[i] as Record<string, unknown>, key));
		}
	}
	return items;
}

const artisanExceptions: Record<number | string, string> = {
	247: 'Oil',
	395: 'Coffee',
	724: 'Maple Syrup',
	725: 'Oak Resin',
	726: 'Pine Tar',
	MysticSyrup: 'Mystic Syrup'
};

const tillerExceptions: Record<number | string, string> = {
	296: 'Salmonberry',
	396: 'Spice Berry',
	402: 'Sweet Pea',
	406: 'Wild Plum',
	410: 'Blackberry',
	414: 'Crystal Fruit',
	418: 'Crocus'
};

function calculatePrice(item: Objects, options?: findOptions) {
	let basePrice = item.price ?? 0;
	let sellPrice = Math.floor(basePrice * qualityPriceMultipliers[item.quality]);

	if (options?.player?.professions?.artisan?.multiplier) {
		if ((item.category === -26 || item.category === -27) && !artisanExceptions[item.itemId]) {
			basePrice = Math.floor(basePrice * options?.player?.professions?.artisan?.multiplier);
			sellPrice = Math.floor(sellPrice * options?.player?.professions?.artisan?.multiplier);
		}
	}

	if (options?.player?.professions?.tiller?.multiplier) {
		if (
			(item.category === -75 || item.category === -79 || item.category === -80) &&
			!tillerExceptions[item.itemId]
		) {
			basePrice = Math.floor(basePrice * options?.player?.professions?.tiller?.multiplier);
			sellPrice = Math.floor(sellPrice * options?.player?.professions?.tiller?.multiplier);
		}
	}

	const totalPrice = sellPrice * item.stack;

	return {
		price: basePrice,
		sellPrice,
		totalPrice
	};
}
