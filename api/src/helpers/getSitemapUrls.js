//@ts-check
const { NextFunction } = require("express");

const axios = require("axios").default;
const xmlParser = require("xml2js").parseStringPromise;
const { getMetadata } = require("page-metadata-parser");
const domino = require("domino");

const { stream, cache } = require("../events/EventsLibrary");
const { axiosWithAuth } = require("./axiosWithAuth.js");

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
    const { data } = await axiosWithAuth(query.urlXml, query.urlCreds);

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
 * @param {Object} query Object containing req.query.
 * @param {NextFunction} next Express JS next() function.
 * @returns {Promise<string[]>}
 */
const getAllSitemapUrls = async (query, next) => {
  try {
    // const { data } = await axios(xmlUrl);
    const { data } = await axiosWithAuth(query.urlXml, query.urlCreds);

    // Parse XML to JSON, structure: urlset.url[0].loc[0] is https://herbalessences.com/en-us/
    const { urlset } = await xmlParser(data);

    const urls = urlset ? urlset.url.map(url => url.loc[0]) : [];

    return urls;
  } catch (error) {
    console.warn("Error fetching URLs: ", error.config);
    next(error);
  }
};

/**
 * Creates slugs for /slugs endpoint
 * @param {Object} query Object containing req.query.
 * @param {NextFunction} next Express JS next() function.
 * @returns {Promise<string[]>}
 */
exports.getSlugs = async (query, next) => {
  const urls = await getAllSitemapUrls(query, next);

  if (!urls.length) return [];

  const slugChunks = urls.map(url => {
    let link = query.urlXml.replace("/sitemap.xml", "");
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
 * @param {Object} query Object containing req.query.
 * @returns {Promise<Object>}
 */
exports.getMeta = async query => {
  // const { data } = await axios(url);
  const { data } = await axiosWithAuth(query.url, query.urlCreds);

  const doc = domino.createWindow(data).document;
  const metadata = getMetadata(doc, query.url);

  return metadata;
};

/**
 * Chunkifies the provided shallow array into array of arrays of the provided length
 * @param {string[]} urls Shallow array
 * @param {number} length Length of chunks
 * @returns {string[][]} Array of arrays of the provided length
 */
exports.chunkify = (urls, length) => {
  return Array.from({ length: Math.ceil(urls.length / length) }, (_, i) => {
    const start = i * length;
    return urls.slice(start, start + length);
  });
};
