const fs = require("fs");
const path = require("path");

function createMixManifest(assetsDir, fileToBeCreated) {
  fs.writeFileSync(fileToBeCreated, '{"/assets/main.css": "..."}');
}

// 0    1        2         3
// node index.js assetsDir fileToBeCreated
createMixManifest(process.argv[2], process.argv[3]);
