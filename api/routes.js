const router = require("express").Router();

// Controller imports
const { auth } = require("./src/controllers/auth.controller.js");
const {
  scanner,
  ScanLoger
} = require("./src/controllers/scanner.controller.js");
const { slug } = require("./src/controllers/slug.controller.js");

// @desc    Auth user
// @route   POST /api/auth
router.post("/auth", auth);

// @desc    Scanner route
// @route   GET /api/scan
router.get("/scan", scanner);

// @desc    Scan streamer route
// @route   GET /api/stream
router.get("/stream", ScanLoger);

// @desc    Get Slugs route
// @route   GET /api/slug
router.get("/slug", slug);

module.exports = router;
