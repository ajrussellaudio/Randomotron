const assert = require("assert").strict;
const Student = require("../Student");

describe("Student", () => {
  let student;

  beforeEach(() => {
    student = new Student("Alan", "E6");
  });

  it("has a name", () => {
    assert.equal(student.name, "Alan");
  });

  it("has a cohort", () => {
    assert.equal(student.cohort, "E6");
  });

  it("always has an upper case cohort", () => {
    const student = new Student("Bob", "g1");
    assert.equal(student.cohort, "G1");
  });
});
