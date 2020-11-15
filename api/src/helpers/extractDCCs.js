const puppeteer = require("puppeteer");

exports.extractDCCs = async (urls, start) => {
  try {
    console.log("Preparing browser session...");
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });

    // Create a new tab for each product page in urls array
    const pages = await Promise.all(
      Array.from({ length: urls.length }, (_, i) => browser.newPage())
    );

    console.log(
      "Browser session prepared. Time elapsed: ",
      (new Date().getTime() - start) / 1000,
      "s"
    );
    console.log(
      "Fetching product pages...\nNOTE: This might take up to 10 minutes, depending on the weight of selected pages, connection speed and available resources."
    );

    // Open each url from urls array in each new created tab
    await Promise.all(
      pages.map((page, i) => {
        page.setDefaultNavigationTimeout(600000);
        return page.goto(urls[i]);
      })
    );

    console.log(
      "Product pages fetched. Time elapsed: ",
      (new Date().getTime() - start) / 1000,
      "s"
    );
    console.log("Extracting bvDCC objects...");

    // Create window object handles for each product page
    const windowHandles = await Promise.all(
      pages.map(page => page.evaluateHandle(() => window))
    );

    // Extract bvDCC object from each window handle
    const rawBvDCCs = await Promise.all(
      windowHandles.map(windowHandle => windowHandle.getProperty("bvDCC"))
    );

    // Transform raw bvDCC objects to JSON
    const bvDCCs = await Promise.all(
      rawBvDCCs.map(rawBvDCC => rawBvDCC.jsonValue())
    );

    console.log(
      "bvDCC objects extracted. Time elapsed: ",
      (new Date().getTime() - start) / 1000,
      "s"
    );

    await browser.close();

    //   Create JSON object for xlsx
    const spreadsheet = bvDCCs
      .filter((bvDCC, i) => {
        if (bvDCC) {
          bvDCC.scannedUrl = urls[i];
          return bvDCC;
        }
      })
      .map(bvDCC => {
        return {
          scannedUrl: bvDCC.scannedUrl,
          locale: bvDCC.catalogData.locale,
          ...bvDCC.catalogData.catalogProducts[0]
        };
      })
      .map(bvDCC => {
        if (bvDCC.hasOwnProperty("upcs") && Array.isArray(bvDCC.upcs))
          bvDCC.upcs = bvDCC.upcs.join();
        if (bvDCC.hasOwnProperty("eans") && Array.isArray(bvDCC.eans))
          bvDCC.eans = bvDCC.eans.join();
        return bvDCC;
      });

    return spreadsheet;
  } catch (error) {
    console.warn("bvScanner error occurred: ", error);
    return false;
  }
};
