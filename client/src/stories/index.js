import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import StudentListItem from "../components/StudentListItem";

const studentData = { name: "Alan", cohort: "E6", _id: "fake id" };

storiesOf("StudentListItem", module).add("normal", () => (
  <StudentListItem {...studentData} />
));
