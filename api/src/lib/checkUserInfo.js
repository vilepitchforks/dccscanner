//@ts-check
const { Request, Response, NextFunction } = require("express");

// Helpers
const { unScramble } = require("../helpers/auth.js");

/**
 * @param {Request | Object} req
 * @param {Response} res
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
    console.log("process.env.AUTH_ROOT: ", process.env.AUTH_ROOT);
    console.log("authHeader: ", authHeader);
    console.log("user", user);
    console.log("req.cookies", req.cookies);
    console.log(
      'user.split("@")[1] === process.env.AUTH_ROOT: ',
      user.split("@")[1] === process.env.AUTH_ROOT
    );
    if (user && user.split("@")[1] === process.env.AUTH_ROOT) {
      req.user = user;
      console.log("req.user: ", req.user);
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
