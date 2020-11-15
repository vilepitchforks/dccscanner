const router = require("express").Router();

// Controller imports
const { auth, test } = require("./src/controllers/auth.controller.js");
const { scanner } = require("./src/controllers/scanner.controller.js");

// @desc    Auth user
// @route   POST /api/auth
router.post("/auth", auth);

// @desc    test
// @route   GET /api/test
router.get("/test", test);

// @desc    Scanner route
// @route   GET /api/scan
router.get("/scan", scanner);

module.exports = router;
