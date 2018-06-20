const assert = require("assert").strict;
const Student = require("../Student");

describe("Student", () => {
  let student;

  beforeEach(() => {
    student = new Student("Alan");
  });

  it("has a name", () => {
    assert.equal(student.name, "Alan");
  });
});
