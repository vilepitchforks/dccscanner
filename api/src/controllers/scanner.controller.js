const puppeteer = require("puppeteer");

// @desc    Home route
// @route   GET /
exports.scanner = async (req, res, next) => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });

    const page = await browser.newPage();

    await page.goto("http://icanhazip.com/");

    const result = await page.evaluate(() => document.body.innerText);

    res.send(result);
  } catch (error) {
    console.warn(error);
    next(error);
  }
};
