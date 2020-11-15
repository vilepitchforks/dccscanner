const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
if (process.env.NODE_ENV === "development") require("dotenv").config();

const app = express();

// Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
if (process.env.NODE_ENV === "development") {
  const morgan = require("morgan");
  app.use(morgan("combined"));
}

// Middleware imports
const { authUser } = require("./api//src/lib/checkUserInfo.js");

// Handlers
const { notFound, errorHandler } = require("./api/src/lib/errorHandlers.js");

// Static folder
app.use(express.static("client/build"));

// Routes
app.use("/api", authUser, require("./api/routes.js"));

// Handlers
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log("Node server listening on port ", PORT));
