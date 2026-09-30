import { expect, test } from "vitest";

import { add } from "./add";

// This is for testing vitest
test("adds two numbers", () => {
  expect(add(1, 2)).toBe(3);
});
