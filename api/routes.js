const router = require("express").Router();

// Controller imports
const { scanner } = require("./src/controllers/scanner.controller.js");

// @desc    Scanner route
// @route   GET /
router.get("/scan", scanner);

module.exports = router;
