const students = require("express").Router();
const Student = require("../models/Student");

students.get("/", (req, res, next) => {
  const students = req.app.locals.students;
  students.find().toArray((err, students) => {
    res.json(students);
  });
});

module.exports = students;
