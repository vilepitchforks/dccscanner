const router = require("express").Router();

// Controller imports
const { auth } = require("./src/controllers/auth.controller.js");
const {
  handleSingle,
  handleMulti,
  getMultiRes
} = require("./src/controllers/rnr.controller.js");
const { scanStreamer } = require("./src/controllers/scanner.controller.js");
const { slug } = require("./src/controllers/slug.controller.js");

// @desc    Auth user
// @route   POST /api/auth
router.post("/auth", auth);

// @desc    Scanner route
// @route   GET /api/scan
// router.get("/scan", scanner);

// @desc    Scan streamer route
// @route   GET /api/stream
router.get("/stream", scanStreamer);

// @desc    Get Slugs route
// @route   GET /api/slug
router.get("/slug", slug);

// @desc    Scan RnR implementation for single website
// @route   GET /api/slug
router.get("/single", handleSingle);

// @desc    Scan RnR implementation for multiple websites
// @route   GET /api/multi
router.get("/multi", handleMulti);

// @desc    Get RnR scan results for multiple websites
// @route   GET /api/multi
router.get("/multi/result", getMultiRes);

module.exports = router;
