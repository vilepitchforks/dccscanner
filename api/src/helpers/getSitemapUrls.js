const axios = require("axios");
const xmlParser = require("xml2js").parseStringPromise;

exports.getSitemapUrls = async (url, categories, start) => {
  try {
    console.log("Fetching XML Sitemap...");
    // Fetch XML Sitemap
    const { data } = await axios(url);

    console.log(
      "XML Sitemap fetched. Time elapsed: ",
      (new Date().getTime() - start) / 1000,
      "s"
    );
    console.log("Parsing Product URLs...");
    // Parse XML to JSON, structure: urlset.url[0].loc[0] is https://herbalessences.com/en-us/
    const { urlset } = await xmlParser(data);

    const urls = [];
    urlset.url.forEach(url => {
      let categoryCheck;
      categories.forEach(ctg => {
        const ctgRgx = new RegExp(ctg);
        if (ctgRgx.test(url.loc[0])) categoryCheck = true;
      });
      // Test for provided products categories keywords and extract category and product pages
      if (categoryCheck) urls.push(url.loc[0]);
    });
    console.log(
      `Product URLs parsed. ${urls.length} related URLs found. Time elapsed: `,
      (new Date().getTime() - start) / 1000,
      "s"
    );

    return urls;
  } catch (error) {
    console.warn("Error fetching URLs: ", error);
    return false;
  }
};

exports.chunkify = urls => {
  return Array.from({ length: Math.ceil(urls.length / 10) }, (_, i) => {
    const start = i * 10;
    return urls.slice(start, start + 10);
  });
};
