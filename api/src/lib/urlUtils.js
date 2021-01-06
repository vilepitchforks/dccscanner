//@ts-check
const { Response, NextFunction } = require("express");
const { urlRgx, localeRgx } = require("../helpers/regex.js");

/**
 * @param {{ query: { url: string;rootUrl: string; categories: string; scanId: string; urlXml: string; reportName: string; }; }} req
 * @param {Response} res
 * @param {NextFunction} next
 */
exports.urlUtils = (req, res, next) => {
  const inputURL = req.query.url;

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
    // Replace country code with sitemap
    urlXml = inputURL.replace(localeRgx, sitemap);
  } else if (inputURL.slice(-1) === "/") {
    // Handle trailing slash
    urlXml = inputURL + sitemap;
  } else {
    urlXml = inputURL + "/" + sitemap;
  }
  req.query.urlXml = urlXml;

  // Make report name
  let urlRN = inputURL.replace(/http(|s)\:\/\//, "").replace(localeRgx, "");
  if (urlRN.slice(-1) === "/") urlRN = urlRN.slice(0, urlRN.length - 1);
  req.query.reportName = `bvDCC_extract_${urlRN}_${new Date().getTime()}.xlsx`;

  next();
};
