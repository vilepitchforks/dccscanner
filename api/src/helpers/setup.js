const setup = () => {
  // Matches "en-us" or "en-us/"
  const rgx = /[a-z][a-z]-[a-z][a-z]($|\/$)/;

  const sitemap = "sitemap.xml";

  // XML Sitemap URL
  let url = process.argv[2];

  if (rgx.test(url)) {
    // Replace country code with sitemap
    url = url.replace(rgx, sitemap);
  } else if (url[url.length - 1] === "/") {
    // Handle trailing slash
    url = url + sitemap;
  } else {
    url = url + "/" + sitemap;
  }

  // Report filename
  const reportName = `bvDCC_extract_${url
    .replace("https://", "")
    .replace("/sitemap.xml", "")}_${new Date().getTime()}.xlsx`;

  // Main products category keyword, ex. feminine-products
  const category = new RegExp(process.argv[3]);

  if (!url || !category) {
    console.log("WARNING: Sitemap URL and Category keyword are mandatory!");
    process.exit(1);
  }

  return { url, category, reportName };
};
