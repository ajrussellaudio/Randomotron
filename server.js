const express = require("express");
const app = express();
const cors = require("cors");
const router = new express.Router();
const parser = require("body-parser");
const port = process.env.PORT || 3000;

const MongoClient = require("mongodb").MongoClient;
let db;

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

MongoClient.connect(
  "mongodb://localhost:27017",
  (err, client) => {
    if (err) next(err);
    db = client.db("randomotron");
    console.log("Connected to db...");

    app.locals.students = db.collection("students");

    app.use("/api/students", require("./routes/students"));
    app.use("/api/groups", require("./routes/groups"));
    app.use("/api/cohorts", require("./routes/cohorts"));

    app.listen(port, () => {
      console.log(`App listening on ${port}`);
    });
  }
);
