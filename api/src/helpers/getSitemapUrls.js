//@ts-check

const axios = require("axios").default;
const xmlParser = require("xml2js").parseStringPromise;
const { getMetadata } = require("page-metadata-parser");
const domino = require("domino");

const { stream, cache } = require("../events/EventsLibrary");

/**
 * Filters sitemap URLs for selected slugs and returns URLs for scanning.
 * @param {number} start Scan start time.
 * @param {Object} query Object containing req.query.
 * @returns {Promise<string[]>}
 */
exports.getURLsForScan = async (start, query) => {
  try {
    const ctgArr = query.categories.split(",");

    const eventString = `> Fetching ${query.rootUrl} XML Sitemap...`;
    stream.emit("infoEvent", "info", eventString, start);
    cache.emit("cacheEvent", "info", eventString, query.scanId);

    // Fetch XML Sitemap, type <?xml version="1.0" encoding="UTF-8"?>
    const { data } = await axios(query.urlXml);

    stream.emit("infoEvent", "info", "> XML Sitemap fetched.", start);
    cache.emit("cacheEvent", "info", "> XML Sitemap fetched.", query.scanId);

    const eventString1 = `> Parsing URLs for ${
      ctgArr.length > 1 ? "slugs" : "slug"
    }: >> ${query.categories}...`;
    stream.emit("infoEvent", "info", eventString1, start);
    cache.emit("cacheEvent", "info", eventString1, query.scanId);

    // Parse XML to JSON, structure: urlset.url[0].loc[0] is https://www.website.com/en-us/
    const { urlset } = await xmlParser(data);

    // TODO: change regular array to Set for filtering duplicates
    const urls = [];
    urlset.url.forEach(url => {
      /**
       * @param {string} ctg
       */
      ctgArr.forEach(ctg => {
        const ctgRgx = new RegExp(ctg);
        // Test for provided products categories keywords and extract category and product pages
        if (ctgRgx.test(url.loc[0])) urls.push(url.loc[0]);
      });
    });

    const eventString2 = `> URLs parsed. ${urls.length} related ${
      urls.length > 1 ? "URLs" : "URL"
    } found.`;
    stream.emit("infoEvent", "info", eventString2, start);
    cache.emit("cacheEvent", "info", eventString2, query.scanId);

    return urls;
  } catch (error) {
    console.warn(
      "Error fetching URLs: ",
      error.isAxiosError ? error.toJSON() : error.message
    );
    stream.emit("servererrorEvent", "servererror", error.message, start);
    cache.emit("cacheEvent", "servererror", error.message, query.scanId);
    return [];
  }
};

/**
 * Fetches all Sitemap URLs for /slugs enpoint
 * @param {string} xmlUrl
 * @returns {Promise<string[]>}
 */
const getAllSitemapUrls = async xmlUrl => {
  try {
    const { data } = await axios(xmlUrl);

    // Parse XML to JSON, structure: urlset.url[0].loc[0] is https://herbalessences.com/en-us/
    const { urlset } = await xmlParser(data);

    const urls = urlset ? urlset.url.map(url => url.loc[0]) : [];

    return urls;
  } catch (error) {
    console.warn("Error fetching URLs: ", error.config);
    return [];
  }
};

/**
 * Creates slugs for /slugs endpoint
 * @param {string} xmlUrl
 * @returns {Promise<string[]>}
 */
exports.getSlugs = async xmlUrl => {
  const urls = await getAllSitemapUrls(xmlUrl);

  if (!urls.length) return [];

  const slugChunks = urls.map(url => {
    let link = xmlUrl.replace("/sitemap.xml", "");
    url = url.replace(link, "");
    return url.split("/");
  });

  // @ts-ignore
  const slugs = new Set(slugChunks.flat());
  return Array.from(slugs)
    .filter(slug => slug.length)
    .sort();
};

/**
 * Fetches metadata from the website
 * @param {string} url
 * @returns {Promise<Object>}
 */
exports.getMeta = async url => {
  const { data } = await axios(url);

  const doc = domino.createWindow(data).document;
  const metadata = getMetadata(doc, url);

  return metadata;
};

/**
 * @param {string[]} urls
 * @returns {string[][]}
 */
exports.chunkify = urls => {
  return Array.from({ length: Math.ceil(urls.length / 10) }, (_, i) => {
    const start = i * 10;
    return urls.slice(start, start + 10);
  });
};
