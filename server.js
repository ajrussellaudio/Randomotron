const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb://localhost:27017",
  (err, client) => {
    if (err) next(err);
    const db = client.db("randomotron");
    console.log("Connected to db...");

    app.get("/api/groups", (req, res, next) => {
      res.send(`cohort.groups(${req.query.size})`);
    });

    app.listen(port, () => {
      console.log(`App listening on ${port}`);
    });
  }
);
