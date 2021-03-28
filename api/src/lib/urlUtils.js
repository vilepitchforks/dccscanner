//@ts-check
const { Request, Response, NextFunction } = require("express");
const { axiosWithAuth } = require("../helpers/axiosWithAuth.js");
const { urlRgx, localeRgx, authCreds } = require("../helpers/regex.js");

/**
 * @param {Request | object} req
 * @param {Response} res
 * @param {NextFunction} next
 */
exports.urlUtils = async (req, res, next) => {
  const { url } = req.query;
  // Check if creds are passed in the URL (https://username:password@www.website.com)
  const hasCreds = authCreds.test(url);

  // Extract creds from the URL and pass them as req.query.urlCreds = ["username","password"]
  const creds = hasCreds && url.match(authCreds)[0].replace("@", "");
  req.query.urlCreds = creds && creds.split(":");

  // If creds are passed, remove them from the URL
  const inputURL = creds ? url.replace(creds + "@", "") : url;

  // Set the URL without credentials as req.query.url
  req.query.url = inputURL;

  // Check if url query param exists.
  if (!inputURL) return next();

  // Throw if URL is not valid
  if (!urlRgx.test(inputURL)) next(new Error("ERR_INVALID_URL"));

  // Throw if categories query param is present but not valid
  const hasCategories = req.query.hasOwnProperty("categories");
  const categories = hasCategories && req.query.categories;

  hasCategories &&
    (!categories.length || categories.length > 200) &&
    next(new Error("ERR_CATEGORY_MISSING_OR_INVALID"));

  // Make Root URL
  req.query.rootUrl = inputURL
    .replace(/http(|s)\:\/\//, "")
    .split(localeRgx)[0];

  // Make scanId
  if (categories)
    req.query.scanId = inputURL + ":" + categories.split(",").sort().join();

  // Make xml url (https://www.website.com/sitemap.xml)
  const sitemap = "sitemap.xml";

  let urlXml = "";
  try {
    // Fetches the XML Sitemap URL from robots.txt. Used because some sites have sitemap.xml file in non-root folder
    let { data } = await axiosWithAuth(
      "https://" + req.query.rootUrl + "/robots.txt",
      req.query.urlCreds
    );

    urlXml =
      data
        .split(/sitemap:/i)[1]
        .trim()
        .split(".xml")[0] + ".xml";
  } catch (error) {
    console.warn("Error fetching robots.txt: ", error.message);

    // If fetching robots.txt file is not successfull, manually create sitemap.xml URL
    if (localeRgx.test(inputURL)) {
      // Split URL by country code
      urlXml = inputURL.split(localeRgx)[0];
      urlXml = urlXml + "/" + sitemap;
    } else if (inputURL.slice(-1) === "/") {
      // Handle trailing slash
      urlXml = inputURL + sitemap;
    } else {
      urlXml = inputURL + "/" + sitemap;
    }
  }
  req.query.urlXml = urlXml;

  // Make report name
  let urlRN = inputURL.replace(/http(|s)\:\/\//, "").split(localeRgx)[0];
  if (urlRN.slice(-1) === "/") urlRN = urlRN.slice(0, urlRN.length - 1);
  req.query.reportName = `bvDCC_extract_${urlRN}_${new Date().getTime()}.xlsx`;

  next();
};
