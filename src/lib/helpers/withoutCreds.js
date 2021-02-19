const { authCreds } = require("./regex");

exports.withoutCreds = url => {
  // Check if creds are passed in the URL (https://username:password@www.website.com)
  const hasCreds = authCreds.test(url);

  // Extract creds from the URL in format username:password@
  const creds = hasCreds && url.match(authCreds)[0].replace("@", "");

  // If creds are passed, remove them from the URL
  const inputURL = creds ? url.replace(creds + "@", "") : url;

  return inputURL;
};
