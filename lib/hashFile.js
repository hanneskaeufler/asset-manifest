const fs = require("fs");
const crypto = require("crypto");

module.exports = (file) => {
  const content = fs.readFileSync(file.path);

  return crypto.createHash("md5").update(content).digest("hex");
};
