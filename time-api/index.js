const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send(String(new Date()));
});

app.get("/iso", (req, res) => {
  res.send(new Date().toISOString());
});

app.get("/year", (req, res) => {
  res.send(String(new Date().getUTCFullYear()));
});

app.get("/month", (req, res) => {
  res.send(String(new Date().getUTCMonth() + 1));
});

app.get("/day", (req, res) => {
  res.send(String(new Date().getUTCDate()));
});

app.get("/hour", (req, res) => {
  res.send(String(new Date().getUTCHours()));
});

app.get("/minute", (req, res) => {
  res.send(String(new Date().getUTCMinutes()));
});

app.get("/second", (req, res) => {
  res.send(String(new Date().getUTCSeconds()));
});

app.get("/mili-second", (req, res) => {
  res.send(String(new Date().getUTCMilliseconds()));
});

app.get("/timestamp", (req, res) => {
  res.send(String(Date.now()));
});

app.get("*", (req, res) => {
  res.status(404).send("404 - Not Found!");
});

app.listen(8000);
