const { createClient } = require("redis");
const { promisify } = require("util");

const redis = createClient({
  url: process.env.REDIS_URL,
  password: process.env.REDIS_PWD
});

redis.on("connect", () => {
  console.log("Connected to Redis.");
});
redis.on("ready", () => {
  console.log("Redis is ready.");
});

redis.on("error", error => {
  console.error("Redis error occurred: ", error);
});

redis.on("end", error => {
  console.log("Redis connection closed.");
});

redis
  .connect()
  .then(() => console.log("Redis started."))
  .catch(err =>
    console.warn("Error occurred while connecting to Redis: ", err)
  );

// process.on("SIGINT", () => {
//   console.log("SIGINT event.");
//   redis.quit((err, reply) => {
//     if (err) return console.warn("Error quitting Redis client: ", err);
//     console.log("Redis connection quit on SIGINT event: ", reply);
//   });
// });

redis.GET = redis.get;
redis.SET = redis.set;
redis.RPUSH = redis.rPush;
redis.LLEN = redis.lLen;
redis.LRANGE = redis.lRange;
redis.EXPIRE = redis.expire;

module.exports = redis;
