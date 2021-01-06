//@ts-check
const { Request, Response, NextFunction } = require("express");

/**
 * @param {{ message?: string; errors?: any; isAxiosError?: boolean; toJSON?: any;stack:any }} error
 * @param {Request} req
 * @param {{ statusCode: number; status: (arg0: number) => any; json: (arg0: { message: any; status: any; }) => void; }} res
 * @param {NextFunction} next
 */
exports.errorHandler = (error, req, res, next) => {
  res.statusCode === 200 && res.status(500);
  const payload = {
    message: error.message,
    status: res.statusCode
  };
  if (Object.keys(error).length) payload.error = error.errors;
  if (error.isAxiosError) payload.error = { ...error.toJSON() };
  if (process.env.NODE_ENV === "development") {
    payload.stack = error.stack;
    console.log("error.stack", error.stack);
  }
  res.json(payload);
};
