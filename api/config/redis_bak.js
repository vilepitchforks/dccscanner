const redisClient = require("redis");
const { promisify } = require("util");

const redis = redisClient.createClient({
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

process.on("SIGINT", () => {
  console.log("SIGINT event.");
  redis.quit((err, reply) => {
    if (err) return console.warn("Error quitting Redis client: ", err);
    console.log("Redis connection quit on SIGINT event: ", reply);
  });
});

redis.RPUSH = promisify(redis.rpush).bind(redis);
redis.LLEN = promisify(redis.llen).bind(redis);
redis.LRANGE = promisify(redis.lrange).bind(redis);
redis.EXPIRE = promisify(redis.expire).bind(redis);

module.exports = redis;
