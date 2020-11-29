const puppeteer = require("puppeteer");

const { events } = require("../events/EventsLibrary");

exports.extractDCCs = async (urls, start) => {
  try {
    console.log("Preparing browser session...");
    events.emit("info", "info", "Preparing browser session...");

    const browser = await puppeteer.launch({
      headless: true,
      devtools: false,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage"
      ]
    });

    console.log(
      "Browser session prepared. Time elapsed: ",
      (new Date().getTime() - start) / 1000,
      "s"
    );
    events.emit(
      "info",
      "info",
      "Browser session prepared.\nFetching product pages...\nNOTE: This might take some time."
    );
    console.log(
      "Fetching product pages...\nNOTE: This might take up to 10 minutes, depending on the weight of selected pages, connection speed and available resources."
    );

    // Create a new tab
    const page = await browser.newPage();

    // Iterate over passed URLs and create bvDCC data
    const bvDCCs = [];
    for (let i = 0; i < urls.length; i++) {
      console.log(`Scanning URL ${i + 1} of ${urls.length} URLs total.`);
      events.emit(
        "info",
        "info",
        `Scanning URL ${i + 1} of ${urls.length} URLs total.`
      );

      // Open each url from urls array in a new created tab
      // await page.setDefaultNavigationTimeout(600000);
      await page.goto(urls[i], {
        waitUntil: "networkidle2"
      });

      console.log(
        "Page fetched. Time elapsed: ",
        (new Date().getTime() - start) / 1000,
        "s"
      );
      console.log("Extracting bvDCC object...");
      events.emit(
        "info",
        "info",
        "Page fetched.\nAttempting to extract bvDCC object..."
      );

      // Create window object handle for page
      const windowHandle = await page.evaluateHandle(() => window);

      // Extract bvDCC object from  window handle
      const rawBvDCC = await windowHandle.getProperty("bvDCC");

      // Transform raw bvDCC objects to JSON
      let bvDCC = await rawBvDCC.jsonValue();

      console.log(
        `bvDCC object extract attempt: ${
          bvDCC ? "SUCCESS" : "FAIL"
        }. Time elapsed: `,
        (new Date().getTime() - start) / 1000,
        "s"
      );

      events.emit(
        "info",
        "info",
        `bvDCC object extract attempt: ${bvDCC ? "SUCCESS" : "FAIL"}.`
      );

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
      events.emit("data", "data", bvDCC);

      // Store bvDCC JSON object for xlsx report
      bvDCCs.push(bvDCC);
    }

    await browser.close();

    return bvDCCs;
  } catch (error) {
    console.warn("bvScanner error occurred: ", error);
    events.emit("servererror", "servererror", error.message);
    return false;
  }
};
