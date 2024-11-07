require("dotenv/config");
const express = require("express");
const bodyParser = require('body-parser')

const app = express();
const jsonParser = bodyParser.json()

app.get("/", jsonParser, (req, res) => {
  res.send("Your https server is working!");
});

app.post("/", jsonParser, (req, res) => {
  const data = req.body;

  console.log('Headers received:');
  console.log(JSON.stringify(req.headers, null, 4));
  console.log('Body received:');
  console.log(JSON.stringify(data, null, 4));

  res.sendStatus(200);
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

module.exports = app;
