const axios = require("axios");
const xmlParser = require("xml2js").parseStringPromise;
const { getMetadata } = require("page-metadata-parser");
const domino = require("domino");

const { setup } = require("./setup.js");

const { events } = require("../events/EventsLibrary");

// Function used for streaming DCC data
exports.getSitemapUrls = async (url, categories, start) => {
  try {
    console.log(`Fetching ${getRootUrl(url)} XML Sitemap...`);
    events.emit("info", "info", `Fetching ${getRootUrl(url)} XML Sitemap...`);

    // Fetch XML Sitemap
    const { data } = await axios(url);

    console.log(
      "XML Sitemap fetched. Time elapsed: ",
      (new Date().getTime() - start) / 1000,
      "s"
    );
    events.emit("info", "info", "XML Sitemap fetched.");

    console.log("Parsing Product URLs...");
    events.emit("info", "info", "Parsing Product URLs...");

    // Parse XML to JSON, structure: urlset.url[0].loc[0] is https://www.website.com/en-us/
    const { urlset } = await xmlParser(data);

    // TODO: change regular array to Set for filtering duplicates
    const urls = [];
    urlset.url.forEach(url => {
      categories.forEach(ctg => {
        const ctgRgx = new RegExp(ctg);
        // Test for provided products categories keywords and extract category and product pages
        if (ctgRgx.test(url.loc[0])) urls.push(url.loc[0]);
      });
    });

    console.log(
      `URLs parsed. ${urls.length} related ${
        urls.length > 1 ? "URLs" : "URL"
      } found. Time elapsed: `,
      (new Date().getTime() - start) / 1000,
      "s"
    );
    events.emit(
      "info",
      "info",
      `URLs parsed. ${urls.length} related ${
        urls.length > 1 ? "URLs" : "URL"
      } found.`
    );

    return urls;
  } catch (error) {
    console.warn("Error fetching URLs: ", error);
    events.emit("servererror", "servererror", error.message);
    return false;
  }
};

const getAllSitemapUrls = async rawUrl => {
  try {
    const { url } = setup(rawUrl);

    const { data } = await axios(url);

    // Parse XML to JSON, structure: urlset.url[0].loc[0] is https://herbalessences.com/en-us/
    const { urlset } = await xmlParser(data);

    const urls = urlset ? urlset.url.map(url => url.loc[0]) : [];

    return urls;
  } catch (error) {
    console.warn("Error fetching URLs: ", error);
    return false;
  }
};

exports.getSlugs = async rawUrl => {
  let { url } = setup(rawUrl);

  url = url.replace("/sitemap.xml", "");

  const urls = await getAllSitemapUrls(rawUrl);

  if (!urls) return false;

  const slugChunks = urls.map(link => {
    link = link.replace(url, "");
    return link.split("/");
  });

  const slugs = new Set(slugChunks.flat());
  return Array.from(slugs)
    .filter(slug => slug.length)
    .sort();
};

exports.getMeta = async rawUrl => {
  const { data } = await axios(rawUrl);

  const doc = domino.createWindow(data).document;
  const metadata = getMetadata(doc, rawUrl);

  return metadata;
};

exports.chunkify = urls => {
  return Array.from({ length: Math.ceil(urls.length / 10) }, (_, i) => {
    const start = i * 10;
    return urls.slice(start, start + 10);
  });
};

const getRootUrl = url =>
  url.replace(/http(|s)\:\/\//, "").replace(/\/sitemap.xml/, "");
