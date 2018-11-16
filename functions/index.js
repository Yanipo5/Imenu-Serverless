require("dotenv").config();
require("./utils/mongo");
const functions = require("firebase-functions");
const express = require("express");
const expressGraphQL = require("express-graphql");
const bodyParser = require("body-parser");
const cors = require("cors");
const schema = require("./graphql/index");

const app = express();

app.use(
  "/",
  cors(),
  bodyParser.json(),
  expressGraphQL({
    schema,
    graphiql: true
  })
);

module.exports = {
  graphql: functions.https.onRequest(app)
};
