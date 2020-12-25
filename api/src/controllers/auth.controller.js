// Helpers
const { scramble } = require("../helpers/auth.js");

// @desc    Authenticate user
// @route   POST /api/auth
exports.auth = async (req, res, next) => {
  res.cookie("dcc", "Bearer " + scramble(req.user), {
    maxAge: 365 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: true,
    // Sets secure to false in localhost
    secure: !/localhost/.test(req.get("host"))
  });
  res.send(req.user);
};

// @desc    test
// @route   GET /api/test
exports.test = async (req, res, next) => {
  res.send("ok");
};
