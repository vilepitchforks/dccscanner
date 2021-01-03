const { urlRgx, localeRgx } = require("../helpers/regex.js");

exports.urlUtils = (req, res, next) => {
  const inputURL = req.query.url;

  // Check if url query param exists.
  if (!inputURL) return next();

  // Throw if URL is not valid
  if (!urlRgx.test(inputURL)) next(new Error("ERR_INVALID_URL"));

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
