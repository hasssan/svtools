import { expect, test } from "vitest";

import { parseObjects } from "./objects.js";

test("parseObject", async (t) => {
  /** @type {import('./objects.js').ObjectsPayload} */
  const payload = {
    0: {
      Name: "Test",
      Price: 100,
      Category: -999,
      Type: "anytype",
      IsDrink: false,
    },
    1: {
      Name: "Test2",
      Price: 200,
      Category: 2,
      Type: "anytype",
      IsDrink: true,
    },
    additional: {
      Name: "Test3",
      Price: 300,
      Category: 3,
      Type: "anytype",
      IsDrink: false,
    },
  };
  const parsed = parseObjects(payload);
  expect(parsed).toHaveProperty("0");
  expect(parsed["0"]["name"]).toBe("Test");
  expect(parsed["0"]["price"]).toBe(100);
  expect(parsed["0"]["categoryID"]).toBe(-999);
});
