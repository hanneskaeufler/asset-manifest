const fs = require("fs");

class HashableFile {
  constructor(filePath, relativeToAssetPath, hasher) {
    this.filePath = filePath;
    this.relativeToAssetPath = relativeToAssetPath;
    this.hasher = hasher;
  }

  get assetPath() {
    return this.relativeToAssetPath;
  }

  get path() {
    return this.filePath;
  }

  get hash() {
    return this.hasher(fs.readFileSync(this.path, { encoding: "utf-8" }));
  }
}

module.exports = HashableFile;
