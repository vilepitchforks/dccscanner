//@ts-check

const axios = require("axios").default;
const xmlParser = require("xml2js").parseStringPromise;
const { getMetadata } = require("page-metadata-parser");
const domino = require("domino");

const { setup } = require("./setup.js");

const { events } = require("../events/EventsLibrary");

// Function used for streaming DCC data
/**
 * @param {string} url
 * @param {string[]} categories
 * @param {number} start
 * @returns {Promise<string[]>}
 */
exports.getSitemapUrls = async (url, categories, start) => {
  try {
    events.emit(
      "infoEvent",
      "info",
      `> Fetching ${getRootUrl(url)} XML Sitemap...`,
      start
    );

    // Fetch XML Sitemap, type <?xml version="1.0" encoding="UTF-8"?>
    const { data } = await axios(url);
    console.log("Axios xml data", data.length);

    events.emit("infoEvent", "info", "> XML Sitemap fetched.", start);

    events.emit(
      "infoEvent",
      "info",
      `> Parsing URLs for ${
        categories.length > 1 ? "slugs" : "slug"
      }: >> ${categories.join()}...`,
      start
    );

    // Parse XML to JSON, structure: urlset.url[0].loc[0] is https://www.website.com/en-us/
    const { urlset } = await xmlParser(data);

    // TODO: change regular array to Set for filtering duplicates
    const urls = [];
    /**
     * @param {{ loc: string[]; }} url
     */

    urlset.url.forEach(url => {
      /**
       * @param {string} ctg
       */
      categories.forEach(ctg => {
        const ctgRgx = new RegExp(ctg);
        // Test for provided products categories keywords and extract category and product pages
        if (ctgRgx.test(url.loc[0])) urls.push(url.loc[0]);
      });
    });

    events.emit(
      "infoEvent",
      "info",
      `> URLs parsed. ${urls.length} related ${
        urls.length > 1 ? "URLs" : "URL"
      } found.`,
      start
    );

    return urls;
  } catch (error) {
    console.warn(
      "Error fetching URLs: ",
      error.isAxiosError ? error.toJSON() : error.message
    );
    events.emit("servererrorEvent", "servererror", error.message, start);
    return [];
  }
};

/**
 * @param {string} rawUrl
 * @returns {Promise<string[]>}
 */
const getAllSitemapUrls = async rawUrl => {
  try {
    const { url } = setup(rawUrl);

    const { data } = await axios(url);

    // Parse XML to JSON, structure: urlset.url[0].loc[0] is https://herbalessences.com/en-us/
    const { urlset } = await xmlParser(data);

    /**
     * @type {string[]}
     */
    const urls = urlset ? urlset.url.map(url => url.loc[0]) : [];

    return urls;
  } catch (error) {
    console.warn("Error fetching URLs: ", error);
    return [];
  }
};

/**
 * @param {string} rawUrl
 * @returns {Promise<string[]>}
 */
exports.getSlugs = async rawUrl => {
  let { url } = setup(rawUrl);

  url = url.replace("/sitemap.xml", "");

  const urls = await getAllSitemapUrls(rawUrl);

  if (!urls) return [];

  const /**
     * @param {string} link
     */
    slugChunks = urls.map(link => {
      link = link.replace(url, "");
      return link.split("/");
    });

  // @ts-ignore
  const slugs = new Set(slugChunks.flat());
  return Array.from(slugs)
    .filter(slug => slug.length)
    .sort();
};

/**
 * @param {string} rawUrl
 * @returns {Promise<Object>}
 */
exports.getMeta = async rawUrl => {
  const { data } = await axios(rawUrl);

  const doc = domino.createWindow(data).document;
  const metadata = getMetadata(doc, rawUrl);

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

/**
 * @param {string} url
 * @returns {string}
 */
const getRootUrl = url =>
  url.replace(/http(|s)\:\/\//, "").replace(/\/sitemap.xml/, "");
