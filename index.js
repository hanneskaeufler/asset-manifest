const fs = require("fs");
const path = require("path");
const findAssetFiles = require("./lib/findAssetFiles.js");

function createMixManifest(assetsDir, fileToBeCreated) {
  const files = findAssetFiles(assetsDir);
  let manifest = {};

  for (let file of files) {
    manifest[file] = file + "?id=foobar";
  }

  fs.writeFileSync(fileToBeCreated, JSON.stringify(manifest));
}

// 0    1        2         3
// node index.js assetsDir fileToBeCreated
createMixManifest(process.argv[2], process.argv[3]);
