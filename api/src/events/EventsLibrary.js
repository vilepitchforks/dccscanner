const EventEmmiter = require("events").EventEmitter;

const redis = require("../../config/redis.js");

const ee = new EventEmmiter();

const EventsMiddleware = () => (req, res, next) => {
  // Set headers to prepare for events stream
  res.set({
    "content-type": "text/event-stream",
    "cache-control": "no-cache",
    connection: "keep-alive"
  });
  try {
    const eventLabels = [
      "infoEvent",
      "dataEvent",
      "servererrorEvent",
      "closeEvent"
    ];
    // EventSource  msg format: "id: unqueID\nevent: customevent\ndata: string event payload\n\n"
    const msg = (event, body) => {
      const eventString = `id: ${
        req.query.url
      }\nevent: ${event}\ndata: ${JSON.stringify(body)}\n\n`;

      // Cache events to Redis
      redis.RPUSH(req.query.url, eventString).then().catch(console.error);
      if (event !== "info")
        redis.EXPIRE(req.query.url, 1800).then().catch(console.error);

      // Stream events to client
      res.write(eventString);
    };

    // Attach event listeners to each event label
    eventLabels.forEach(eventLabel =>
      ee.on(eventLabel, (event, body) => msg(event, body))
    );

    // Attach event listeners to close the connection to the client on close and servererror events
    ["servererrorEvent", "closeEvent"].forEach(eventLabel => {
      ee.on(eventLabel, () => {
        console.log(
          `Event ${eventLabel} emmited. Closing the connection to the client.`
        );
        res.end();
      });
    });

    req.on("close", () => {
      console.log("Connection to client closed.");
      // Remove all listeners when connection closes
      eventLabels.forEach(eventLabel => ee.removeAllListeners(eventLabel));
    });

    next();
  } catch (error) {
    console.warn("EventsMiddleware error: ", error);
    next(error);
  }
};

module.exports = EventsMiddleware;
module.exports.events = ee;
