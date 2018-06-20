const assert = require("assert").strict;
const NamesCollection = require("../NamesCollection");

describe("NamesCollection", () => {
  let names;

  beforeEach(() => {
    names = new NamesCollection();
  });

  it("starts empty", () => {
    assert.equal(names.count(), 0);
  });

  it("adds a name", () => {
    names.add("Alan");
    assert.equal(names.count(), 1);
  });

  it("returns a random name");
  it("returns an array of a given length, containing random names");
});
