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
});
