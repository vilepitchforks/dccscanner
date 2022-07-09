const puppeteer = require("puppeteer");

const { brandsConfig, dccConfig } = require("../../config/config.json");

const urlRgx =
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

class BVTester {
  constructor(browser) {
    this.browser = browser;
    this.results = [];
    this.timer = 5000;
    this.setEventListeners = this.setEventListeners.bind(this);
    this.addToResult = this.addToResult.bind(this);
    this.addErrToResult = this.addErrToResult.bind(this);
    this.getDcc = this.getDcc.bind(this);
    this.submitReview = this.submitReview.bind(this);
    this.reviewSubmitted = this.reviewSubmitted.bind(this);
    this.close = this.close.bind(this);
  }

  // Constructs the BVTester class
  static async build() {
    const browser = await puppeteer.launch({
      headless: true,
      devtools: false,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage"
      ]
    });

    return new BVTester(browser);
  }

  // Run all steps in sequence
  async run(localeData) {
    try {
      const page = await this.browser.newPage();
      await page.setViewport({
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1
      });

      this.setEventListeners(localeData, page);
      await this.getDcc(localeData, page);
      await this.submitReview(localeData, page);
      await this.reviewSubmitted(localeData, page);

      // Close the browser after two minutes
      // setTimeout(() => {
      //   this.close();
      // }, 30000);
    } catch (error) {
      const locale = localeData.locale;
      console.warn("An error occurred in run method: ", error);
      this.addErrToResult(locale, error.message);
    }
  }

  // Get and validate DCC
  async getDcc(localeData, page) {
    const locale = localeData.locale;
    this.results.push({ locale, errors: [] });

    try {
      await page.goto(localeData.url, {
        waitUntil: "networkidle2"
      });

      try {
        // For pages with Cookie banner - click on accept. Certain sites cause "Site down page" to be displayed if banner is not accepted.
        await page.click("#onetrust-accept-btn-handler");
      } catch (error) {
        console.warn(error.message);
      }

      // Create window object handle for page
      const windowHandle = await page.evaluateHandle(() => window);

      // Extract bvDCC object from  window handle
      const rawBvDCC = await windowHandle.getProperty("bvDCC");
      const dcc = await rawBvDCC.jsonValue();

      if (!dcc) {
        this.addToResult(locale, "dccValidation", {
          name: "dccExists",
          body: false
        });
        return;
      }

      this.addToResult(locale, "dccValidation", {
        name: "dccExists",
        body: true
      });

      // Check if DCC locale is ok
      const localeOk = {
        fromConfig: localeData.locale,
        fromSite: dcc.catalogData.locale || "{{locale missing}}",
        ok: dcc.catalogData.locale === localeData.locale
      };
      this.localeOk = localeOk;
      this.addToResult(locale, "dccValidation", {
        name: "localeOk",
        body: localeOk
      });

      const dccObject = dcc.catalogData.catalogProducts[0];

      // Check if required keys exist
      const dccKeys = Object.keys(dccObject);
      const missingRequiredKeys = dccConfig.requiredFields.filter(
        requiredKey => !dccKeys.includes(requiredKey)
      );

      // Check that keys are valid
      const invalidKeys = [];
      dccKeys.forEach(key => {
        !dccConfig.availableFields.includes(key) && invalidKeys.push(key);

        if (dccObject[key] === undefined || dccObject[key] === null)
          invalidKeys.push(`Key '${key}' is undefined or null`);
        if (Array.isArray(dccObject[key]) && !dccObject[key].length)
          invalidKeys.push(`Key '${key}' should contain at least one item`);
      });

      const keysOk = {
        ok: !missingRequiredKeys.length && !invalidKeys.length,
        missingRequiredKeys,
        invalidKeys
      };
      this.addToResult(locale, "dccValidation", {
        name: "keysOk",
        body: keysOk
      });

      // Check if product page url is the same/matches the scanned url
      const productPageURL = dccObject.productPageURL;

      const productPageURLOk = {
        fromConfig: localeData.url,
        fromSite: productPageURL,
        ok: localeData.url === productPageURL
      };
      this.addToResult(locale, "dccValidation", {
        name: "productPageURLOk",
        body: productPageURLOk
      });

      // Check if image url is valid url and has https
      const productImageURL = dccObject.productImageURL;
      let productImageURLOk = {
        productImageURL,
        ok: false
      };
      try {
        const productImageURLCl = new URL(productImageURL);
        if (!productImageURLCl.hostname === "https") {
          throw new Error(
            "Product image protocol is: ",
            productImageURLCl.hostname
          );
        }
        productImageURLOk.ok = true;
      } catch (error) {
        console.warn(productImageURL, " is not a valid URL.", error);
      }
      this.addToResult(locale, "dccValidation", {
        name: "productImageURLOk",
        body: productImageURLOk
      });

      // Check if UPCs/EANs exist and that they have a correct number of chars
      const UPCs = dccObject.upcs;
      const UPCsOk = Array.isArray(UPCs) && UPCs?.length;
      const EANs = dccObject.eans;
      const EANsOk = Array.isArray(EANs) && EANs?.length;
      let GTINsOk = {
        UPCs,
        EANs,
        ok: false,
        messages: []
      };
      if (UPCsOk || EANsOk) GTINsOk.ok = true; // EANs or UPCs exist
      if (!UPCs && !EANs) GTINsOk.messages.push("UPCs or EANs missing.");
      if (UPCsOk)
        UPCs.forEach(upc => {
          // Check length of each UPC
          if (upc.length !== 12) {
            GTINsOk.messages.push(
              `Incorrect length for UPC ${upc}: ${upc.length} vs 12.`
            );
            GTINsOk.ok = false;
          }
        });
      if (EANsOk)
        EANs.forEach(ean => {
          // Check length of each EAN
          if (ean.length !== 13) {
            GTINsOk.messages.push(
              `Incorrect length for EAN ${ean}: ${ean.length} vs 13.`
            );
            GTINsOk.ok = false;
          }
          // Check if EAN can be added to UPC
          if (ean[0] === "0" && !UPCs.includes(ean.slice(1)))
            GTINsOk.messages.push(
              `EAN ${ean} can be added to UPCs as ${ean.slice(1)}.`
            );
        });
      if (!!UPCs && !Array.isArray(UPCs))
        GTINsOk.messages.push("UPCs should be an array.");
      if (!!EANs && !Array.isArray(EANs))
        GTINsOk.messages.push("EANs should be an array.");
      this.addToResult(locale, "dccValidation", {
        name: "GTINsOk",
        body: GTINsOk
      });

      // Check if Category is in correct format
      const categoryPath = dccObject.categoryPath;
      let categoryPathOk;
      if (categoryPath) {
        const isArr = Array.isArray(categoryPath);
        if (isArr) {
          categoryPath.forEach(category => {
            if (category.hasOwnProperty("Name")) {
              categoryPathOk = {
                ok: true,
                categoryPath
              };
            } else {
              categoryPathOk = {
                ok: false,
                message: "Incorrect Category Path."
              };
            }
          });
        }
      }
      this.addToResult(locale, "dccValidation", {
        name: "categoryPathOk",
        body: categoryPathOk
      });

      this.addToResult(locale, "dccValidation", { name: "dcc", body: dcc });
    } catch (error) {
      console.warn("An error occurred in dcc method: ", error);
      this.addErrToResult(locale, error.message);
    }
  }

  // Get and validate Review Submission request
  async submitReview(localeData, page) {
    const locale = localeData.locale;

    const {
      writeAReviewBtn,
      overallRating,
      value,
      quality,
      reviewSummary,
      yourReview,
      chooseANickname,
      yourLocation,
      month,
      year,
      email,
      tAndC,
      previewBtn
    } = localeData.selectors;

    try {
      // Click on Write a review
      page.evaluate(btnSelector => {
        // this executes in the page https://stackoverflow.com/questions/70892717/error-node-is-either-not-clickable-or-not-an-htmlelement-puppeteer-when-i-tri
        try {
          document.querySelector(btnSelector).click();
        } catch (error) {
          console.warn("Aklkaka", error);
        }
      }, writeAReviewBtn);
      await page.waitForNavigation({
        waitUntil: "networkidle0",
        timeout: this.timer
      });

      // Fill in the overall rating, and secondary characteristics
      await page.waitForSelector(overallRating, { timeout: this.timer });
      await page.click(overallRating);
      await page.waitForSelector(value, { timeout: this.timer });
      await page.click(value);
      await page.waitForSelector(quality, { timeout: this.timer });
      await page.click(quality);

      // Fill in text inputs
      let reviewSummaryInput = await page.waitForSelector(reviewSummary, {
        timeout: this.timer
      });
      await reviewSummaryInput.type("test review");
      let yourReviewInput = await page.waitForSelector(yourReview, {
        timeout: this.timer
      });
      await yourReviewInput.type(
        "test review test review test review test # review test review test review test review test review test review test review "
      );
      let chooseANicknameInput = await page.waitForSelector(chooseANickname, {
        timeout: this.timer
      });
      await chooseANicknameInput.type("test nickname");
      let yourLocationInput =
        yourLocation &&
        (await page.waitForSelector(yourLocation, {
          timeout: this.timer
        }));
      yourLocationInput && (await yourLocationInput.type("test location"));
      let emailInput = await page.waitForSelector(email, {
        timeout: this.timer
      });
      await emailInput.type("test123@email.com");

      await page.waitForSelector(month, { timeout: this.timer });
      await page.select(month, "12");
      await page.waitForSelector(year), { timeout: this.timer };
      await page.select(year, "1990");

      const tAndCSel = await page.waitForSelector(tAndC, {
        timeout: this.timer
      });
      // await page.click(tAndC); // Does not work for some reason
      page.evaluate(btnSelector => {
        // this executes in the page https://stackoverflow.com/questions/70892717/error-node-is-either-not-clickable-or-not-an-htmlelement-puppeteer-when-i-tri
        document.querySelector(btnSelector).click();
      }, tAndC);

      await page.waitForSelector(previewBtn, { timeout: this.timer });
      // await page.click(previewBtn);
      page.evaluate(btnSelector => {
        // this executes in the page https://stackoverflow.com/questions/70892717/error-node-is-either-not-clickable-or-not-an-htmlelement-puppeteer-when-i-tri
        document.querySelector(btnSelector).click();
      }, previewBtn);
    } catch (error) {
      console.warn("An error occurred in submitReview method: ", error);
      this.addErrToResult(locale, error.message);
    }
  }

  async reviewSubmitted(localeData, page) {
    const locale = localeData.locale;

    try {
      await page.waitForResponse(
        async response => {
          const resUrl = response.url();

          // Stores data from POST a review
          if (resUrl.includes("/submitreview.json")) {
            const params = {};
            new URL(resUrl).searchParams.forEach(
              (value, key) => (params[key] = value)
            );
            this.addToResult(locale, "submitReview", {
              name: "submitReviewParams",
              body: params
            });
            const { Locale, Errors, FormErrors, Review, HasErrors } =
              await response.json();
            this.addToResult(locale, "submitReview", {
              name: "submitReviewResponse",
              body: { Locale, HasErrors, Errors, FormErrors, Review }
            });
            return true;
          }
        },
        { timeout: this.timer }
      );
    } catch (error) {
      console.warn("An error occurred in reviewSubmitted method: ", error);
      this.addErrToResult(locale, error.message);
    }
  }

  // Set event listeners
  setEventListeners(localeData, page) {
    const locale = localeData.locale;

    page.on("response", async response => {
      const resUrl = response.url();

      // Stores data from GET all reviews
      if (resUrl.includes("/reviews.json")) {
        const params = {};
        new URL(resUrl).searchParams.forEach(
          (value, key) => (params[key] = value)
        );
        this.addToResult(locale, "getReviews", {
          name: "getReviewsParams",
          body: params
        });
        const { Locale, HasErrors, Errors, TotalResults } =
          await response.json();
        this.addToResult(locale, "getReviews", {
          name: "getReviewsResponse",
          body: { Locale, HasErrors, Errors, TotalResults }
        });
      }
    });
  }

  addToResult(locale, dest, item) {
    this.results = this.results.map(result => {
      if (result?.locale === locale) {
        const objToUpdate = { [dest]: { ...result[dest] } };
        // console.log("objToUpdate 0", objToUpdate);

        objToUpdate[dest][item.name] = item.body;
        // console.log("objToUpdate 1", objToUpdate);

        return {
          ...result,
          [dest]: { ...objToUpdate[dest] }
        };
      }
      return result;
    });
  }

  addErrToResult(locale, error) {
    this.results = this.results.map(result => {
      if (result.locale === locale) {
        return {
          ...result,
          errors: [...result?.errors, error]
        };
      }
      return result;
    });
  }

  close() {
    this.browser
      .close()
      .then(_ => console.log("Browser successfully closed! "))
      .catch(err =>
        console.warn("Err occurred while closing the browser: ", err)
      );
  }
}

// Reslut buffer for multi scan
let multiRes = { scanInProgress: false, scanResult: [] };

exports.handleSingle = async (req, res, next) => {
  let { brand, locale, url, urlOverride, localeOverride } = req.query;
  const isOverride =
    !!urlOverride && !!localeOverride && urlRgx.test(urlOverride);

  const brands = Object.keys(brandsConfig);

  // If no brand or locale is passed, respond with a list of brands and locales
  if (!brand && !locale && !isOverride) {
    return res.json({
      availableBrands: brands.map(brand => ({
        brand,
        locales: Object.keys(brandsConfig[brand].locales)
      }))
    });
  }

  // Check if requested brand exists in config
  if (!brands.includes(brand) && !isOverride) {
    return res.json({
      message: `Brand ${brand} not found.`,
      availableBrands: brands
    });
  }

  // Brand data from config
  const brandData = brandsConfig[brand];

  // Check if requested locale exists in config
  const locales = Object.keys(brandData?.locales || {});
  if (!locales.includes(locale) && !isOverride) {
    return res.status(404).json({
      message: `Locale ${locale} not found.`,
      availableLocales: locales
    });
  }

  // Locale data from config
  let localeData = brandData?.locales[locale];

  // If manual URL for the same locale is provided, scan that URL instead
  if (url && urlRgx.test(url))
    localeData = {
      ...localeData,
      url
    };

  // If override url and locale are provided, scan them instead
  if (isOverride)
    localeData = {
      url: urlOverride,
      locale: localeOverride
    };

  try {
    const tester = await BVTester.build();

    await tester.run(localeData);

    const result = tester.results[0];

    res.json([
      {
        hasErrors: !!result.errors.length,
        errors: result.errors,
        brand: !isOverride ? brand : undefined,
        locale: !isOverride ? locale : undefined,
        dccValidation: {
          dccExists: result.dccValidation.dccExists,
          summary: {
            isLocaleOk: result.dccValidation.localeOk?.ok,
            areKeysOk: result.dccValidation.keysOk?.ok,
            isPproductPageURLOk: result.dccValidation.productPageURLOk?.ok,
            isProductImageURLOk: result.dccValidation.productImageURLOk?.ok,
            areGTINsOk: result.dccValidation.GTINsOk?.ok,
            isCategoryPathOk: result.dccValidation.categoryPathOk?.ok
          },
          details: {
            locale: result.dccValidation.localeOk,
            keys: result.dccValidation.keysOk,
            productPageURL: result.dccValidation.productPageURLOk,
            productImageURL: result.dccValidation.productImageURLOk,
            GTINs: result.dccValidation.GTINsOk,
            categoryPath: result.dccValidation.categoryPathOk
          },
          dcc: result.dccValidation.dcc
        },
        getReviews: result.getReviews,
        submitReview: result.submitReview
      }
    ]);
  } catch (error) {
    console.warn("Error occurred while processing:", error);
    res.status(400).json({
      hasErrors: true,
      errors: [error.message]
    });
  }
};

exports.handleMulti = async (req, res, next) => {
  let { brand } = req.query;

  const brands = Object.keys(brandsConfig);

  // If no brand is passed, respond with a list of brands and locales
  if (!brand) {
    return res.status(404).json({
      availableBrands: brands.map(brand => ({
        brand,
        locales: Object.keys(brandsConfig[brand].locales)
      }))
    });
  }

  // Check if requested brand exists in config
  if (!brands.includes(brand)) {
    return res.status(404).json({
      message: `Brand ${brand} not found.`,
      availableBrands: brands
    });
  }

  const scanId = new Date().getTime();

  res.json("Scan started.");

  // Brand data from config
  const brandData = brandsConfig[brand];

  const locales = Object.keys(brandData.locales);

  // Turn the scan flag on
  multiRes.scanInProgress = true;

  const tester = await BVTester.build();

  for (const locale of locales) {
    await tester.run(brandData.locales[locale]);
  }

  tester.close();

  multiRes.scanResult = tester.results.map(result => ({
    hasErrors: !!result.errors.length,
    errors: result.errors,
    brand,
    locale: result.locale.toLowerCase().split("_").join("-"),
    dccValidation: {
      dccExists: result.dccValidation.dccExists,
      summary: {
        isLocaleOk: result.dccValidation.localeOk?.ok,
        areKeysOk: result.dccValidation.keysOk?.ok,
        isPproductPageURLOk: result.dccValidation.productPageURLOk?.ok,
        isProductImageURLOk: result.dccValidation.productImageURLOk?.ok,
        areGTINsOk: result.dccValidation.GTINsOk?.ok,
        isCategoryPathOk: result.dccValidation.categoryPathOk?.ok
      },
      details: {
        locale: result.dccValidation.localeOk,
        keys: result.dccValidation.keysOk,
        productPageURL: result.dccValidation.productPageURLOk,
        productImageURL: result.dccValidation.productImageURLOk,
        GTINs: result.dccValidation.GTINsOk,
        categoryPath: result.dccValidation.categoryPathOk
      },
      dcc: result.dccValidation.dcc
    },
    getReviews: result.getReviews,
    submitReview: result.submitReview
  }));

  // Turn the scan flag on
  multiRes.scanInProgress = false;
};

exports.getMultiRes = async (req, res, next) => {
  res.json(multiRes);

  // Clear results from previous scan
  if (multiRes.scanResult.length) multiRes.scanResult = [];
};
