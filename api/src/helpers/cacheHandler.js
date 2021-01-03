const redis = require("../../config/redis.js");

exports.getCache = async query => {
  const eventLogLength = await redis.LLEN(query.url);

  if (eventLogLength) {
    // Check if cache exists
    const events = await redis.LRANGE(query.url, 0, eventLogLength);

    // Check if the slugs are the same
    let slugCheck = false;
    events.forEach(event => {
      // Format of the event containing slug info: "> Parsing URLs for slug: >> this-is-a-slug..."
      const slug =
        />>/.test(event) &&
        event.split(">>")[1].split("...")[0].trim().split(",").sort().join();
      const categories = query.categories.split(",").sort().join();

      if (slug === categories) slugCheck = true;
    });

    if (slugCheck) return events;

    return [];
  } else {
    return [];
  }
};
