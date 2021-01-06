const EventEmmiter = require("events").EventEmitter;

const redis = require("../../config/redis.js");

const ee = new EventEmmiter();

const event = {
  stdLabels: [
    "infoEvent",
    "dataEvent",
    "servererrorEvent",
    "closeEvent",
    "error" // Internal EventEmmitter "error" event
  ],
  errLabels: ["closeEvent"]
};

const EventsMiddleware = () => (req, res, next) => {
  console.log(" req.eventNames(): ", req.eventNames());
  console.log(" res.eventNames(): ", res.eventNames());
  console.log("On init, event names: ", ee.eventNames());
  console.log('ee.listenerCount("error"):', ee.listenerCount("error"));

  res.set({
    "content-type": "text/event-stream",
    "cache-control": "no-cache",
    connection: "keep-alive"
  });

  // Standard event handler for error event and all custom events from eventLabels
  // EventSource  msg format: "id: unqueID\nevent: customevent\ndata: stringified-event-payload\n\n"
  const msg = (event, body, startTime) => {
    const eventString = `id: ${
      req.query.url
    }\nevent: ${event}\ndata: ${JSON.stringify(body)}\n\n`;

    // Cache events to Redis
    redis.RPUSH(req.query.scanId, eventString).then().catch(console.error);
    if (event !== "info")
      redis.EXPIRE(req.query.scanId, 1800).then().catch(console.error);

    // Log the event to server console
    startTime &&
      console.log(
        `> Logging event: "${event}", body: ${body} Time elapsed: ${
          (new Date().getTime() - startTime) / 1000
        } s`
      );

    // Stream events to client
    res.write(eventString);
  };

  // Error event handler for EventEmmitter internal "error" event and custom events "servererrorEvent" and "closeEvent"
  const errMsg = (event, body, startTime) => {
    console.log(
      `Event ${event} emmited. Closing the connection to the client. Time elapsed: ${
        (new Date().getTime() - startTime) / 1000
      } s`
    );
    res.end();

    [
      "infoEvent",
      "dataEvent",
      "servererrorEvent",
      "closeEvent",
      "error"
    ].forEach(eventLabel =>
      console.log(
        "On res.end(), loaded listeners for: ",
        eventLabel,
        ee.listeners(eventLabel)
      )
    );

    // ["servererrorEvent", "error"].forEach(eventLabel =>
    //   ee.removeAllListeners(eventLabel)
    // );
    // [
    //   "infoEvent",
    //   "dataEvent",
    //   "servererrorEvent",
    //   "closeEvent",
    //   "error" // Internal EventEmmitter "error" event
    // ].forEach(eventLabel => {
    //   console.log("Removing all listeners!");
    //   ee.removeAllListeners(eventLabel);
    // });
  };

  // For the first instance of the server, when there are no existing event handlers attach event listeners.
  if (!ee.eventNames().length) {
    // Attach standard event listeners to each event label
    event.stdLabels.forEach(eventLabel =>
      ee.on(eventLabel, (event, body, startTime) => msg(event, body, startTime))
    );

    // Attach error event listeners to close the connection to the client on default error, close and servererror events
    event.errLabels.forEach(eventLabel =>
      ee.on(eventLabel, (event, body, startTime) =>
        errMsg(event, body, startTime)
      )
    );
  }

  // // if (!ee.listenerCount("error"))
  // ee.on("error", () => console.log("Last error event handler!!!!!!!!!!!"));

  req.on("close", () => {
    console.log("Connection to client closed.");
    // Remove all listeners when connection closes
    // event.stdLabels.forEach(eventLabel => ee.removeAllListeners(eventLabel));
  });

  req.on("end", end => {
    console.log("Req.on End: ", end);
  });

  res.on("finish", finish => {
    console.log("Res.on FINISJ  : ", finish);
  });

  res.on("end", end => {
    console.log("Res.on End: ", end);
  });

  res.on("error", end => {
    console.log("RARBG: ", end);
  });
  next();
};

module.exports = EventsMiddleware;
module.exports.events = ee;
