const { getSlugs, getMeta } = require("../helpers/getSitemapUrls.js");

// @desc    Get Slugs route
// @route   GET /api/slug
// ?url=https://www.url.com
exports.slug = async (req, res, next) => {
  try {
    const metadata = await getMeta(req.query);

    const slugs = await getSlugs(req.query, next);

    if (!metadata || !slugs.length) throw new Error("ERR_FETCHING_DATA");

    res.json({ metadata, slugs });
  } catch (error) {
    // res.status(422);
    console.warn(error.message);
    next(error);
  }
};
