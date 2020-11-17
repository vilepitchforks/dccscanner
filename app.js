const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
if (process.env.NODE_ENV === "development") require("dotenv").config();

const app = express();

// Express middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
if (process.env.NODE_ENV === "development") {
  const morgan = require("morgan");
  app.use(morgan("combined"));
  // Static folder dev
  app.use(express.static("client/test"));
}

if (process.env.NODE_ENV === "production") {
  // Static folder prod
  app.use(express.static("client/build"));
}

// Middleware imports
const { authUser } = require("./api/src/lib/checkUserInfo.js");
const EventsLibrary = require("./api/src/events/EventsLibrary.js");

// Handlers
const { notFound, errorHandler } = require("./api/src/lib/errorHandlers.js");

// Events Library
app.use(EventsLibrary());

// Routes
app.use("/api", authUser, require("./api/routes.js"));

// Handlers
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log("Node server listening on port ", PORT));
