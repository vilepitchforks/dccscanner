const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middleware imports
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Static folder
app.use(express.static("client/build"));

// Routes
// app.use("/", require("./api/routes.js"));

app.use((req, res, next) => {
  res.status(404);
  const error = {
    message: "Not found: " + req.originalUrl
  };
  next(error);
});

app.use((error, req, res, next) => {
  res.statusCode === 200 && res.status(500);
  const payload = {
    message: error.message,
    status: res.statusCode
  };
  if (Object.keys(error).length) payload.error = error.errors;
  res.json(payload);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log("Node server listening on port ", PORT));
