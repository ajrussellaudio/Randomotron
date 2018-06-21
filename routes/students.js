const students = require("express").Router();
const Student = require("../models/Student");
const ObjectID = require("mongodb").ObjectID;

students.get("/", (req, res, next) => {
  const students = req.app.locals.students;
  students.find().toArray((err, students) => {
    if (err) next(err);
    res.json(students);
  });
});

students.get("/:id", (req, res, next) => {
  const students = req.app.locals.students;
  const id = new ObjectID(req.params.id);
  students.findOne({ _id: id }, (err, student) => {
    res.json(student);
  });
});

students.post("/", (req, res, next) => {
  console.log(req.body);
  const newStudent = new Student(req.body.name, req.body.cohort);
  const students = req.app.locals.students;
  students.insert(newStudent, (err, result) => {
    res.status(201).json(result.ops[0]);
  });
});

module.exports = students;
