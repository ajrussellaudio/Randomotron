const MongoClient = require("mongodb").MongoClient;
const Student = require("./models/Student");

MongoClient.connect(
  "mongodb://localhost:27017",
  (err, client) => {
    if (err) {
      console.log(err);
      return;
    }
    const db = client.db("randomotron");
    const cohort = db.collection("cohort");
    cohort.remove({}, () => console.log("Previous data removed"));

    const studentNames = ["Alan", "Bob", "Charlie", "Dave"];
    cohort.insert(studentNames.map(name => new Student(name, "G1")), () => {
      console.log("Database successfully seeded");
      client.close();
    });
  }
);
