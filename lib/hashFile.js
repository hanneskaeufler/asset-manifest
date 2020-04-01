const crypto = require("crypto");

module.exports = (filePath) => {
  return crypto.createHash("md5").update("").digest("hex");
};
