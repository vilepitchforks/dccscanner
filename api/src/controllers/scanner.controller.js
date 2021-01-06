//@ts-check
const { Response, NextFunction } = require("express");

const { scanHandler } = require("../helpers/scanHandler.js");
const { getCache } = require("../helpers/cacheHandler.js");

const { stream, cache } = require("../events/EventsLibrary");

const redis = require("../../config/redis.js");

// @route   GET /api/stream
// ?url=https://www.url.com&categories=shop,first,second
/**
 * Scan streamer route
 * @param {Object} req
 * @param {Response} res
 * @param {NextFunction} next
 */
exports.scanStreamer = async (req, res, next) => {
  const start = new Date().getTime();

  // Check if cache exists
  const cachedEvents = await getCache(req.query);

  if (cachedEvents.length) {
    console.log(
      "Cache hit, sending cached stream events to the client and closing the connection."
    );
    // If cached Events exist, res.write each event to the client and res.end the connection
    cachedEvents.forEach(event => res.write(event));

    // Checks if the scan flag is set to "false" and closes the connection.
    // If cache exists and scan flag is true, scan is in progress and needs to be resumed
    // @ts-ignore
    (await redis.GET("scan:" + req.query.scanId)) === "false" && res.end();
  } else {
    await scanHandler(start, req.query);
    stream.emit("infoEvent", "info", "> Closing the connection...", start);
    cache.emit(
      "cacheEvent",
      "info",
      "> Closing the connection...",
      req.query.scanId
    );
    stream.emit("closeEvent", "close", "true", start);
    cache.emit("cacheEvent", "close", "true", req.query.scanId);
  }
};
