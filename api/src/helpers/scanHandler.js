//@ts-check
const { getURLsForScan } = require("./getSitemapUrls.js");
const { extractDCCs } = require("./extractDCCs.js");

const { stream, cache } = require("../events/EventsLibrary");

/**
 * Performs the DCC scan and returns true when the scan is completed.
 * @param {number} start Scan start time.
 * @param {Object} query Object containing req.query.
 * @returns {Promise<boolean>}
 */
exports.scanHandler = async (start, query) => {
  stream.emit("infoEvent", "info", "> Scan process started.", start);
  cache.emit("cacheEvent", "info", "> Scan process started.", query.scanId);

  // Get product URLs
  const urls = await getURLsForScan(start, query);

  // Create data for report
  const spreadsheet = urls.length && (await extractDCCs(urls, start, query));

  if (spreadsheet.length) {
    stream.emit("infoEvent", "info", "> Report creation completed.", start);
    cache.emit(
      "cacheEvent",
      "info",
      "> Report creation completed.",
      query.scanId
    );
  } else {
    stream.emit("infoEvent", "info", "> No DCC data found.", start);
    cache.emit("cacheEvent", "info", "> No DCC data found.", query.scanId);
  }

  return true;
};
