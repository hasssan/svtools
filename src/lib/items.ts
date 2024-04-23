export interface ItemObject {
	name: string;
	stack: number;
	quality: number;
	qualityName?: string;
	'@_xsi:type'?: string;
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

const qualityNames: Record<number, string> = {
	0: 'Normal',
	1: 'Silver',
	2: 'Gold',
	4: 'Iridium'
};

export function findItems(data: Record<string, unknown>) {
	const items = findNestedObject(data, 'Item').flat() as ItemObject[];

	const itemsObject = items
		.filter((item) => item['@_xsi:type'] === 'Object')
		.map((item) => {
			const qualityName = qualityNames[item.quality];
			return { ...item, qualityName };
		});

	return itemsObject;
}
