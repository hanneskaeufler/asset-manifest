const fs = require("fs");

module.exports = (assetsDir) => {
  const files = fs.readdirSync(assetsDir);

  return files.sort();
};
