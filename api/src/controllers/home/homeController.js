// @desc    Home route
// @route   GET /
exports.homeController = async (req, res, next) => {
  res.send("hello from the back!");
};
