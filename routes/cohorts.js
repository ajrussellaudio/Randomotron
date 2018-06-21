const cohorts = require("express").Router();
const _ = require("lodash");
const Cohort = require("../models/Cohort");

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb://localhost:27017",
  (err, client) => {
    if (err) next(err);
    const db = client.db("randomotron");

    cohorts.get("/", (req, res, next) => {
      const students = db.collection("students");
      students.find().toArray((err, students) => {
        if (err) next(err);
        const cohorts = _.uniq(students.map(student => student.cohort));
        res.json({ cohorts: cohorts });
      });
    });
  }
);

module.exports = cohorts;
