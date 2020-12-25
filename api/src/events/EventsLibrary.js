const EventEmmiter = require("events").EventEmitter;

const ee = new EventEmmiter();

const EventsMiddleware = () => (req, res, next) => {
  // Set headers to prepare for events stream
  res.set({
    "content-type": "text/event-stream",
    "cache-control": "no-cache",
    connection: "keep-alive"
  });
  try {
    const eventLabels = ["info", "data", "servererror", "close"];
    //  msg format: "id: unqueID\nevent: customevent\ndata: string event payload\n\n"
    const msg = (event, body) =>
      res.write(
        `id: ${req.query.url}\nevent: ${event}\ndata: ${JSON.stringify(
          body
        )}\n\n`
      );

    // Attach event listeners to each event lable
    eventLabels.forEach(eventLabel =>
      ee.on(eventLabel, (event, body) => msg(event, body))
    );

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
