//@ts-check

const puppeteer = require("puppeteer");

const { stream, cache } = require("../events/EventsLibrary.js");

/**
 * Scans the selected Sitemap.xml URLs and extracts DCC data.
 * @param {string[]} urls Sitemap URLs that contain slugs sent by the user.
 * @param {number} start Scan start time.
 * @param {Object} query Object containing req.query.
 * @returns {Promise<object[]>}
 */
exports.extractDCCs = async (urls, start, query) => {
  try {
    stream.emit("infoEvent", "info", "> Starting the engine...", start);
    cache.emit("cacheEvent", "info", "> Starting the engine...", query.scanId);

    const browser = await puppeteer.launch({
      headless: true,
      devtools: false,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage"
      ]
    });

    const eventString =
      "> Engine started.\n> Fetching product pages...\n> NOTE: This might take some time.";
    stream.emit("infoEvent", "info", eventString, start);
    cache.emit("cacheEvent", "info", eventString, query.scanId);

    // Create a new tab
    const page = await browser.newPage();

    // Iterate over passed URLs and create bvDCC data
    const bvDCCs = [];
    for (let i = 0; i < urls.length; i++) {
      const eventString1 = `> Scanning URL ${i + 1} of ${urls.length} ${
        urls.length > 1 ? "URLs" : "URL"
      } total.`;
      stream.emit("infoEvent", "info", eventString1, start);
      cache.emit("cacheEvent", "info", eventString1, query.scanId);

      // Open each url from urls array in a new created tab
      query.urlCreds &&
        (await page.authenticate({
          username: query.urlCreds[0],
          password: query.urlCreds[1]
        }));
      // await page.setDefaultNavigationTimeout(600000);
      await page.goto(urls[i], {
        waitUntil: "networkidle2"
      });

      const eventString2 =
        "> Page fetched.\n> Attempting to extract bvDCC object...";
      stream.emit("infoEvent", "info", eventString2, start);
      cache.emit("cacheEvent", "info", eventString2, query.scanId);

      // Create window object handle for page
      const windowHandle = await page.evaluateHandle(() => window);

      // Extract bvDCC object from  window handle
      const rawBvDCC = await windowHandle.getProperty("bvDCC");

      /**
       * Transforms raw bvDCC objects to JSON
       * @typedef {Object} DCC
       * @property {string} [scannedUrl]
       * @property {object} [catalogData]
       * @property {string} [catalogData.locale]
       * @property {array} [catalogData.catalogProducts]
       * @property {string} [upcs]
       * @property {string} [eans]
       */

      /**
       * @type {DCC}
       */
      let bvDCC = await rawBvDCC.jsonValue();

      const eventString3 = `> bvDCC object extract attempt: ${
        bvDCC ? "SUCCESS" : "FAIL"
      }.`;
      stream.emit("infoEvent", "info", eventString3, start);
      cache.emit("cacheEvent", "info", eventString3, query.scanId);

      // Initialize bvDCC to empty object if bvDCC is not found on the scanned page
      bvDCC = bvDCC || {};

      // Add scanned URL to bvDCC object placeholder
      bvDCC.scannedUrl = urls[i];

      // Flatten nested bvDCC object attributes
      bvDCC = bvDCC.catalogData
        ? {
            scannedUrl: bvDCC.scannedUrl,
            locale: bvDCC.catalogData.locale,
            ...bvDCC.catalogData.catalogProducts[0]
          }
        : { ...bvDCC };

      // Join upcs and eans arrays to string
      if (bvDCC.hasOwnProperty("upcs") && Array.isArray(bvDCC.upcs))
        bvDCC.upcs = bvDCC.upcs.join();
      if (bvDCC.hasOwnProperty("eans") && Array.isArray(bvDCC.eans))
        bvDCC.eans = bvDCC.eans.join();

      // Emit each bvDCC to client
      stream.emit("dataEvent", "data", bvDCC);
      cache.emit("cacheEvent", "data", bvDCC, query.scanId);
      console.log("bvDCC fetched for: ", urls[i]);

      // Store bvDCC JSON object for xlsx report
      bvDCCs.push(bvDCC);
    }

    await browser.close();

    return bvDCCs;
  } catch (error) {
    console.warn("bvScanner error occurred: ", error);
    stream.emit("servererrorEvent", "servererror", error.message, start);
    cache.emit("cacheEvent", "servererror", error.message, query.scanId);
    return [];
  }
};
