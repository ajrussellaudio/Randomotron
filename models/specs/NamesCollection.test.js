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

  it("returns a random name", () => {
    names.add("Alan");
    names.add("Bob");
    const randomName = names.random();
    assert.equal("string", typeof randomName);
  });

  it("returns an array of a given length, with random names", () => {
    const testNames = ["Alan", "Bob", "Charlie", "Dave"];
    testNames.forEach(name => names.add(name));
    const randomPair = names.random(2);
    assert.equal(randomPair.length, 2);
    assert.equal("string", typeof randomPair[0]);
    assert.equal("string", typeof randomPair[1]);
  });

  it("returns an array of random groups", () => {
    const testNames = ["Alan", "Bob", "Charlie", "Dave", "Ellie", "Frank"];
    testNames.forEach(name => names.add(name));
    const randomGroups = names.groups(2);
    assert.equal(randomGroups.length, 3);
    assert.equal(randomGroups[0].length, 2);
    assert.equal(randomGroups[1].length, 2);
    assert.equal(randomGroups[2].length, 2);
  });

  it("returns an array of random groups, odd size", () => {
    const testNames = ["Alan", "Bob", "Charlie", "Dave", "Ellie"];
    testNames.forEach(name => names.add(name));
    const randomGroups = names.groups(2);
    assert.equal(randomGroups.length, 3);
    assert.equal(randomGroups[0].length, 2);
    assert.equal(randomGroups[1].length, 2);
    assert.equal(randomGroups[2].length, 1);
  });
});
