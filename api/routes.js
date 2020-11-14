const router = require("express").Router();

// Controller imports
const { homeController } = require("./src/controllers/home/homeController.js");

// @desc    Home route
// @route   GET /
router.get("/", homeController);

module.exports = router;
