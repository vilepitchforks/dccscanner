const router = require("express").Router();

// Middleware imports
const { authUser } = require("./src/lib/checkUserInfo.js");

// Controller imports
const { auth, test } = require("./src/controllers/auth.controller.js");
const { scanner } = require("./src/controllers/scanner.controller.js");

// @desc    Auth user
// @route   POST /api/auth
router.post("/auth", authUser, auth);

// @desc    test
// @route   GET /api/test
router.get("/test", authUser, test);

// @desc    Scanner route
// @route   GET /api/scan
router.get("/scan", scanner);

module.exports = router;
