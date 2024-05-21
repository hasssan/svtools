import { readContent, writeData } from "./file-utils.js";

/**
 * @param {Object} StringsFromCSFiles
 * @param {Object} Strings_1_6
 * @returns {Categories}
 * @see https://github.com/communitycenter/stardew.app/blob/main/scripts/helpers/utils.py#L137-L203
 */
export function parseCategories(StringsFromCSFiles, Strings_1_6) {
  const sources = { ...StringsFromCSFiles, ...Strings_1_6 };

  const map = {
    "-97": sources["Boots.cs.12501"],
    "-100": sources["category_clothes"],
    "-96": sources["Ring.cs.1"],
    "-99": sources["Tool.cs.14307"],
    "-12": sources["Object.cs.12850"],
    "-2": sources["Object.cs.12850"],
    "-75": sources["Object.cs.12851"],
    "-4": sources["Object.cs.12852"],
    "-25": sources["Object.cs.12853"],
    "-7": sources["Object.cs.12853"],
    "-79": sources["Object.cs.12854"],
    "-74": sources["Object.cs.12855"],
    "-19": sources["Object.cs.12856"],
    "-21": sources["Object.cs.12857"],
    "-22": sources["Object.cs.12858"],
    "-24": sources["Object.cs.12859"],
    "-20": sources["Object.cs.12860"],
    "-27": sources["Object.cs.12862"],
    "-26": sources["Object.cs.12862"],
    "-8": sources["Object.cs.12863"],
    "-18": sources["Object.cs.12864"],
    "-14": sources["Object.cs.12864"],
    "-6": sources["Object.cs.12864"],
    "-5": sources["Object.cs.12864"],
    "-80": sources["Object.cs.12866"],
    "-28": sources["Object.cs.12867"],
    "-16": sources["Object.cs.12868"],
    "-15": sources["Object.cs.12868"],
    "-81": sources["Object.cs.12869"],
    "-102": sources["Book_Category"],
    "-103": sources["skillBook_Category"],
  };

  return map;
}

export async function main() {
  const StringsFromCSFiles = await readContent(
    "Strings/StringsFromCSFiles.json",
  );
  const Strings_1_6 = await readContent("Strings/1_6_Strings.json");
  const parsed = parseCategories(
    JSON.parse(StringsFromCSFiles),
    JSON.parse(Strings_1_6),
  );
  await writeData("categories", parsed);
}

await main();

/**
 * @typedef Categories
 * @type {{ [key: string]: string}}
 */
