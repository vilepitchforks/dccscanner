const { setup } = require("../helpers/setup.js");
const { getSitemapUrls, chunkify } = require("../helpers/getSitemapUrls.js");
const { extractDCCs } = require("../helpers/extractDCCs.js");
const { urlRgx } = require("../helpers/regex.js");
const { getCache } = require("../helpers/cacheHandler.js");

const { events } = require("../events/EventsLibrary");

// @desc    Scanner route
// @route   GET /api/scan
// ?url=https://www.url.com&categories=shop,first,second
exports.scanner = async (req, res, next) => {
  const start = new Date().getTime();
  try {
    const rawURL = req.query.url;
    if (!rawURL || !urlRgx.test(rawURL)) throw new Error("ERR_INVALID_URL");

    // Get XML Sitemap URL, category and create report name
    const { url, reportName } = setup(rawURL);

    // Parse categories
    const categories =
      req.query.categories &&
      req.query.categories.length &&
      req.query.categories.length < 200 &&
      req.query.categories.split(",");
    if (!categories) throw new Error("ERR_CATEGORY_REQUIRED");

    // Get product URLs
    const urls = await getSitemapUrls(url, categories, start);
    const urlChunks = chunkify(urls);

    // Create data for report
    const spreadsheet = [];
    for (let i = 0; i < urlChunks.length; i++) {
      const isChunk = urlChunks[i].length === 10;
      const startUrlNo = isChunk
        ? urlChunks[i].length * i
        : urls.length - urlChunks[urlChunks.length - 1].length;
      const endUrlNo = isChunk
        ? urlChunks[i].length * i + urlChunks[i].length
        : urls.length;

      console.log(
        `Scanning URLs from ${startUrlNo} to ${endUrlNo} of ${urls.length} URLs total.`
      );
      const spreadsheetChunk = await extractDCCs(urlChunks[i], start);
      spreadsheet.push(...spreadsheetChunk);
    }

    // // Create report file
    // createXlsx(spreadsheet, reportName);

    console.log(
      "Report creation completed. Time elapsed: ",
      (new Date().getTime() - start) / 1000,
      "s"
    );

    res.json(spreadsheet);
  } catch (error) {
    res.status(422);
    console.warn(error);
    next(error);
  }
};

// @desc    Scan streamer route
// @route   GET /api/stream
// ?url=https://www.url.com&categories=shop,first,second
exports.scanStreamer = async (req, res, next) => {
  const start = new Date().getTime();

  try {
    const rawURL = req.query.url;
    if (!rawURL || !urlRgx.test(rawURL)) throw new Error("ERR_INVALID_URL");

    // Get XML Sitemap URL and create report name
    const { url, reportName } = setup(rawURL);

    // Parse categories
    let { categories } = req.query;
    categories =
      categories &&
      categories.length &&
      categories.length < 200 &&
      categories.split(",").map(ctg => ctg.trim());
    if (!categories) throw new Error("ERR_CATEGORY_MISSING_OR_INVALID");

    // Check if cache exists
    const cache = await getCache(req.query);

    if (!cache.length) {
      // If not, start the process
      events.emit("infoEvent", "info", "> Scan process started.");

      // Get product URLs
      const urls = await getSitemapUrls(url, categories, start);
      // const urlChunks = chunkify(urls);

      // Create data for report
      const spreadsheet = await extractDCCs(urls, start);

      // // Create report file
      // createXlsx(spreadsheet, reportName);

      console.log(
        "Report creation completed. Time elapsed: ",
        (new Date().getTime() - start) / 1000,
        "s"
      );
      events.emit("infoEvent", "info", "> Report creation completed.");

      events.emit("infoEvent", "info", "> Closing the connection...");
      events.emit("closeEvent", "close", "true");
    } else {
      // If cache  exists, res,write each event to the client and res.end the connection
      cache.forEach(event => res.write(event));
      res.end();
    }
  } catch (error) {
    res.status(422);
    console.warn(error);
    events.emit("servererrorEvent", "servererror", error.message);
  }
};
