// Helpers
const { unScramble } = require("../helpers/auth.js");

exports.authUser = (req, res, next) => {
  // Get Authorization header, check if it is valid, parse the user
  try {
    let user;

    const authHeader = req.get("Authorization");

    const hasDccCookie = Object.keys(req.cookies).findIndex(i => i === "dcc");

    if (authHeader) {
      user = Buffer.from(authHeader.split(" ")[1], "base64").toString("utf-8");
    } else if (hasDccCookie !== -1) {
      user = unScramble(req.cookies.dcc.split(" ")[1]);
    }

    if (user && user.split("@")[1] === "convergent-usa.com") {
      req.user = user;
      next();
    } else {
      throw new Error("Unauthorized");
    }
  } catch (error) {
    console.warn(error);
    res.status(401);
    next(error);
  }
};
