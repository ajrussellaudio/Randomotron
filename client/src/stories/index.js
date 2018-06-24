import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import StudentListItem from "../components/StudentListItem";
import StudentList from "../components/StudentList";

const studentData = { name: "Alan", cohort: "E6", _id: "fake id" };
const fakeStudents = [
  { name: "Alan", cohort: "E6", _id: "fake id 1" },
  { name: "Bob", cohort: "E6", _id: "fake id 2" },
  { name: "Charlie", cohort: "E6", _id: "fake id 3" },
  { name: "Dave", cohort: "E6", _id: "fake id 4" }
];

storiesOf("StudentListItem", module).add("normal", () => (
  <StudentListItem {...studentData} />
));

storiesOf("StudentList", module).add("normal", () => (
  <StudentList students={fakeStudents} />
));
