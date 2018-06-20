const groups = require("express").Router();
const Cohort = require("../models/Cohort");

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb://localhost:27017",
  (err, client) => {
    if (err) next(err);
    const db = client.db("randomotron");

    groups.get("/:cohort", (req, res, next) => {
      const studentsCollection = db.collection("students");
      const cohort = req.params.cohort.toUpperCase();
      const groupSize = req.query.size;

      studentsCollection.find({ cohort: cohort }).toArray((err, students) => {
        if (err) next(err);
        const cohort = new Cohort(students);
        res.json(cohort.groups(groupSize));
      });
    });
  }
);

module.exports = groups;
