const EventEmmiter = require("events").EventEmitter;
const { Request, Response, NextFunction } = require("express");

const redis = require("../../config/redis.js");

const stream = new EventEmmiter();
const cache = new EventEmmiter();

const labels = [
  "infoEvent",
  "dataEvent",
  "servererrorEvent",
  "closeEvent",
  "error" // Internal EventEmmitter "error" event
];

const EventsMiddleware = () =>
  /**
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   */
  (req, res, next) => {
    res.set({
      "content-type": "text/event-stream",
      "cache-control": "no-cache",
      connection: "keep-alive"
    });

    // Indicates that the scan has started
    redis
      .GET("scan:" + req.query.scanId)
      .then(
        scan =>
          !scan &&
          redis.SET("scan:" + req.query.scanId, "true", "EX", 1800).then()
      )
      .catch(console.error);

    /**
     * Creates event string that is streamed to the client and stored in Redis
     * // EventSource  msg format: "id: unqueID\nevent: customevent\ndata: stringified-event-payload\n\n"
     * @param {string} event
     * @param {string} body
     */
    const eventString = (event, body) =>
      `id: ${req.query.url}\nevent: ${event}\ndata: ${JSON.stringify(
        body
      )}\n\n`;

    /**
     * Cache event listener, caches events to Redis
     * @param {string} event
     * @param {string} body
     * @param {string} scanId
     */
    const cacheEvent = (event, body, scanId) => {
      redis.RPUSH(scanId, eventString(event, body)).then().catch(console.error);
      if (event !== "info")
        redis.EXPIRE(scanId, 1800).then().catch(console.error);

      // Indicates that the scan has finished
      if (event === "close")
        redis
          .SET("scan:" + scanId, "false", "EX", 1800)
          .then()
          .catch(console.error);
    };

    /**
     * Stream event listener for error event and all custom events from eventLabels
     * @param {string} event
     * @param {string} body
     * @param {number} startTime
     */
    const streamEvent = (event, body, startTime) => {
      // Log the event to server console
      startTime &&
        console.log(
          `> Logging event: "${event}", body: ${body} Time elapsed: ${
            (new Date().getTime() - startTime) / 1000
          } s`
        );

      // Stream events to client
      res.write(eventString(event, body));
    };

    // Attach cacheEvent listener if it doesn't exist
    if (!cache.eventNames("cacheEvent").length)
      cache.on("cacheEvent", (event, body, scanId) =>
        cacheEvent(event, body, scanId)
      );

    // Attach standard event listeners to each event label
    labels.forEach(eventLabel =>
      stream.on(eventLabel, (event, body, startTime) =>
        streamEvent(event, body, startTime)
      )
    );

    // Attach closeEvent event listeners to close the connection to the client close event
    stream.on("closeEvent", (event, body, startTime) => {
      console.log(
        `Event ${event} emmited. Closing the connection to the client. Time elapsed: ${
          (new Date().getTime() - startTime) / 1000
        } s`
      );
      res.end();
    });

    req.on("close", () => {
      console.log("Connection to client closed.");
      // Remove all listeners when connection closes
      labels.forEach(eventLabel => stream.removeAllListeners(eventLabel));
    });

    // res.on("finish", finish => console.log("Response on finish event: ", finish));
    // req.on("end", end => console.log("Request on.end event: ", end));
    // res.on("end", end => console.log("Response on.end event: ", end));
    // res.on("error", error => console.log("Response on.error event: ", end));
    next();
  };

module.exports = EventsMiddleware;
module.exports.stream = stream;
module.exports.cache = cache;
