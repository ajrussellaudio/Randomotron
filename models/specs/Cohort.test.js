const assert = require("assert").strict;
const Cohort = require("../Cohort");

describe("Cohort", () => {
  let cohort;

  beforeEach(() => {
    cohort = new Cohort();
  });

  it("starts empty by default", () => {
    assert.equal(cohort.count(), 0);
  });

  it("starts with an array of students", () => {
    const fullCohort = new Cohort(["Alan", "Bob", "Charlie", "Dave"]);
    assert.equal(fullCohort.count(), 4);
  });

  it("adds a student", () => {
    cohort.add("Alan");
    assert.equal(cohort.count(), 1);
  });

  it("returns a random student", () => {
    cohort.add("Alan");
    cohort.add("Bob");
    const randomStudent = cohort.random();
    assert.equal("string", typeof randomStudent);
  });

  it("returns an array of a given length, with random cohort", () => {
    const testStudents = ["Alan", "Bob", "Charlie", "Dave"];
    testStudents.forEach(student => cohort.add(student));
    const randomPair = cohort.random(2);
    assert.equal(randomPair.length, 2);
    assert.equal("string", typeof randomPair[0]);
    assert.equal("string", typeof randomPair[1]);
  });

  it("returns an array of random groups", () => {
    const testStudents = ["Alan", "Bob", "Charlie", "Dave", "Ellie", "Frank"];
    testStudents.forEach(name => cohort.add(name));
    const randomGroups = cohort.groups(2);
    assert.equal(randomGroups.length, 3);
    assert.equal(randomGroups[0].length, 2);
    assert.equal(randomGroups[1].length, 2);
    assert.equal(randomGroups[2].length, 2);
  });

  it("returns an array of random groups, odd size", () => {
    const testStudents = ["Alan", "Bob", "Charlie", "Dave", "Ellie"];
    testStudents.forEach(name => cohort.add(name));
    const randomGroups = cohort.groups(2);
    assert.equal(randomGroups.length, 3);
    assert.equal(randomGroups[0].length, 2);
    assert.equal(randomGroups[1].length, 2);
    assert.equal(randomGroups[2].length, 1);
  });
});
