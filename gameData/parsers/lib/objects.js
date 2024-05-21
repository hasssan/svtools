import { readContent, writeData } from "./file-utils.js";

/**
 * @param {ObjectsPayload} data
 * @returns {ObjectsType}
 */
export function parseObjects(data) {
  const parsed = Object.keys(data).reduce((acc, key) => {
    if (!acc[key]) {
      acc[key] = {
        name: data[key].Name,
        price: data[key].Price,
        categoryID: data[key].Category,
      };
    }
    return acc;
  }, {});

  return parsed;
}

export async function main() {
  const data = await readContent("Data/Objects.json");
  const parsed = parseObjects(JSON.parse(data));
  await writeData("objects", parsed);
}

await main();

/**
 * @typedef ObjectData
 * @type {object}
 * @property {string} name
 * @property {number} price
 * @property {number} categoryID
 */

/**
 * @typedef ObjectsType
 * @type {{ [key: string]: ObjectData}}
 */

/**
 * @typedef ObjectDataPayload
 * @type {object}
 * @property {string} Name
 * @property {number} Price
 * @property {number} Category
 * @property {string} Type
 * @property {boolean} IsDrink
 */

/**
 * @typedef ObjectsPayload
 * @type {{ [key: string]: ObjectDataPayload}}
 */
