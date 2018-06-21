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
    const cohort = db.collection("students");
    cohort.remove({}, () => console.log("Previous data removed"));

    const g5Names = [
      "Sarah",
      "Kelsie",
      "Liam",
      "Daniel",
      "Brian",
      "Roberto",
      "Ruaridh",
      "Edward",
      "Paul",
      "Andrew",
      "Callum",
      "Chris",
      "Fraser",
      "Lyle",
      "Stuart",
      "Connor",
      "Nikhil",
      "Scott"
    ];

    const g4Names = [
      "Jean",
      "Jim",
      "Graeme",
      "Sarah",
      "Victor",
      "Daniel",
      "J",
      "Debbie",
      "Daniel",
      "Eleftheria",
      "Christie",
      "Angus",
      "Elanor"
    ];

    cohort.insert(g5Names.map(name => new Student(name, "G5")));
    cohort.insert(g4Names.map(name => new Student(name, "G4")), () => {
      console.log("Database successfully seeded");
      client.close();
    });
  }
);
