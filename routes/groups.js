const groups = require("express").Router();
const Cohort = require("../models/Cohort");

groups.get("/:cohort", function(req, res, next) {
  const students = req.app.locals.students;
  const cohort = req.params.cohort.toUpperCase();
  const groupSize = req.query.size;

  students.find({ cohort: cohort }).toArray((err, students) => {
    if (err) next(err);
    const cohort = new Cohort(students);
    res.json(cohort.groups(groupSize));
  });
});

module.exports = groups;
