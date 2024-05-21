import { expect, test } from "vitest";

import { parseCategories } from "./categories.js";

test("parseCategories", async (t) => {
  const StringsFromCSFiles = {
    "Boots.cs.12501": "Footwear",
  };
  const Strings_1_6 = {
    Book_Category: "Book",
  };
  const parsed = parseCategories(StringsFromCSFiles, Strings_1_6);
  expect(parsed).toHaveProperty("-97");
  expect(parsed).toHaveProperty("-102");
  expect(parsed["-97"]).toBe("Footwear");
  expect(parsed["-102"]).toBe("Book");
});
