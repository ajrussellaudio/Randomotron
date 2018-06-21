const cohorts = require("express").Router();
const _ = require("lodash");
const Cohort = require("../models/Cohort");

cohorts.get("/", (req, res, next) => {
  const students = req.app.locals.students;
  students.find().toArray((err, students) => {
    if (err) next(err);
    const cohorts = _.uniq(students.map(student => student.cohort));
    res.json({ cohorts: cohorts });
  });
});

module.exports = cohorts;
