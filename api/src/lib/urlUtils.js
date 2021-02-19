//@ts-check
const { Request, Response, NextFunction } = require("express");
const { urlRgx, localeRgx, authCreds } = require("../helpers/regex.js");

/**
 * @param {Request | object} req
 * @param {Response} res
 * @param {NextFunction} next
 */
exports.urlUtils = (req, res, next) => {
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
  req.query.urlXml = urlXml;

  // Make report name
  let urlRN = inputURL.replace(/http(|s)\:\/\//, "").split(localeRgx)[0];
  if (urlRN.slice(-1) === "/") urlRN = urlRN.slice(0, urlRN.length - 1);
  req.query.reportName = `bvDCC_extract_${urlRN}_${new Date().getTime()}.xlsx`;

  next();
};
