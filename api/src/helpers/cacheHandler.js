//@ts-check

const redis = require("../../config/redis.js");

/**
 * Checks if DCC scan exists in cache
 * @param {Object} query Query object from req.query
 * @returns {Promise<string[]>}
 */
exports.getCache = async query => {
  const eventLogLength = await redis.LLEN(query.scanId);

  if (eventLogLength) {
    //@ts-ignore
    return await redis.LRANGE(query.scanId, 0, eventLogLength);
  } else {
    return [];
  }
};
