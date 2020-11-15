const { localeRgx } = require("./regex.js");

exports.setup = url => {
  const sitemap = "sitemap.xml";

  if (localeRgx.test(url)) {
    // Replace country code with sitemap
    url = url.replace(localeRgx, sitemap);
  } else if (url[url.length - 1] === "/") {
    // Handle trailing slash
    url = url + sitemap;
  } else {
    url = url + "/" + sitemap;
  }

  // Report filename
  const reportName = `bvDCC_extract_${url
    .replace("http://", "")
    .replace("https://", "")
    .replace("/sitemap.xml", "")}_${new Date().getTime()}.xlsx`;

  return { url, reportName };
};
