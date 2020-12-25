const puppeteer = require("puppeteer");

const { getSlugs, getMeta } = require("../helpers/getSitemapUrls.js");
const { urlRgx } = require("../helpers/regex.js");

// @desc    Get Slugs route
// @route   GET /api/slug
// ?url=https://www.url.com
exports.slug = async (req, res, next) => {
  try {
    const rawURL = req.query.url;
    if (!rawURL || !urlRgx.test(rawURL)) throw new Error("ERR_INVALID_URL");

    const slugs = await getSlugs(rawURL);

    if (!slugs) throw new Error("ERR_FETCHING_DATA");

    const metadata = await getMeta(rawURL);

    if (!slugs) throw new Error("ERR_FETCHING_DATA");

    res.json({ metadata, slugs });
  } catch (error) {
    res.status(422);
    error.isAxiosError
      ? console.warn(error.toJSON())
      : console.warn(error.message);
    next(error);
  }
};
