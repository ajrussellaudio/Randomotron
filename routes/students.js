const students = require("express").Router();
const Student = require("../models/Student");
const ObjectID = require("mongodb").ObjectID;

students.get("/", (req, res, next) => {
  const students = req.app.locals.students;
  const byCohort = req.query.cohort
    ? { cohort: req.query.cohort.toUpperCase() }
    : {};
  students.find(byCohort).toArray((err, students) => {
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
  const students = req.app.locals.students;
  const newStudent = new Student(req.body.name, req.body.cohort);
  students.insert(newStudent, (err, result) => {
    if (err) next(err);
    res.status(201).json(result.ops[0]);
  });
});

students.delete("/:id", (req, res, next) => {
  const students = req.app.locals.students;
  const id = new ObjectID(req.params.id);
  students.remove({ _id: id }, (err, result) => {
    if (err) next(err);
    res.status(200).json(result);
  });
});

students.post("/:id", (req, res, next) => {
  const students = req.app.locals.students;
  const id = new ObjectID(req.params.id);
  const newStudent = new Student(req.body.name, req.body.cohort);
  students.update({ _id: id }, newStudent, (err, result) => {
    if (err) next(err);
    res.status(200).json(result);
  });
});

module.exports = students;
