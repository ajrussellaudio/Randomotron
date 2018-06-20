const assert = require("assert");
const NamesCollection = require("../NamesCollection");

describe("NamesCollection", () => {
  let names;

  beforeEach(() => {
    names = new NamesCollection();
  });

  it("starts empty", () => {
    assert.strictEqual(names.count(), 0);
  });

  it("adds a name");
  it("returns a random name");
  it("returns an array of a given length, containing random names");
});
