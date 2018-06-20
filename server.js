const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/api/groups", (req, res, next) => {
  res.send(`cohort.groups(${req.query.size})`);
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
