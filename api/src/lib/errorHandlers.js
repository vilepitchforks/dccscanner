exports.errorHandler = (error, req, res, next) => {
  res.statusCode === 200 && res.status(500);
  const payload = {
    message: error.message,
    status: res.statusCode
  };
  if (Object.keys(error).length) payload.error = error.errors;
  res.json(payload);
};
