import fsp from "node:fs/promises";

const DATA_DIR = "../../src/data";
const CONTENT = "../content";

/**
 * @param {string} fileName
 * @param {*} data
 */
export function writeData(fileName, data) {
  if (typeof data !== "string") {
    data = JSON.stringify(data, null, 2);
  }
  return fsp.writeFile(`${DATA_DIR}/${fileName}.json`, data);
}

export function readContent(pathToFile) {
  return fsp.readFile(`${CONTENT}/${pathToFile}`, "utf8");
}
