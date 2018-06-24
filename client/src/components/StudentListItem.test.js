import React from "react";
import { shallow } from "enzyme";
import StudentListItem from "./StudentListItem";

describe("StudentListItem", () => {
  let studentData, studentListItem;

  beforeEach(() => {
    studentData = { name: "Alan", cohort: "E6", _id: "fake id" };
    studentListItem = shallow(<StudentListItem {...studentData} />);
  });

  it("renders a name", () => {
    expect(studentListItem.find("p")).toContain(studentData.name);
  });
});
