//@ts-check
const { NextFunction } = require("express");

// Helpers
const { unScramble } = require("../helpers/auth.js");

/**
 * @param {{ get: (arg0: string) => any; cookies: { dcc?: any; }; user: string; }} req
 * @param {{ status: (arg0: number) => void; }} res
 * @param {NextFunction} next
 */
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
