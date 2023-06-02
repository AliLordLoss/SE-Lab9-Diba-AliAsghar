const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send(String(Math.random()));
});

app.get("/range", (req, res) => {
  const min = +req.query.min || 0;
  const max = +req.query.max || min + 1;
  res.send(String(Math.random() * (max - min) + min));
});

app.get("*", (req, res) => {
  res.status(404).send("404 - Not Found!");
});

app.listen(8000);
