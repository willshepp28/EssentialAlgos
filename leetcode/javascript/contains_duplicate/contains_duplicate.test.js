const containsDuplicate = require("./contains_duplicate");

describe("Contains Duplicate", () => {
  test("When no duplicates exist", () => {
    const result = containsDuplicate([1, 2, 3, 4]);

    expect(result).toBe(false);
  });

  test("When duplicates exist", () => {
    const result = containsDuplicate([1, 2, 3, 4, 4]);

    expect(result).toBe(true);
  });

  test("When array has no elements", () => {
    const result = containsDuplicate([]);

    expect(result).toBe(false);
  });
});
