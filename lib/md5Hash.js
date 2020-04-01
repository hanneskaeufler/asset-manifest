const fs = require("fs");
const crypto = require("crypto");

// basically stolen from https://odino.org/generating-the-md5-hash-of-a-string-in-nodejs/
module.exports = (string) => {
  return crypto.createHash("md5").update(string).digest("hex");
};
