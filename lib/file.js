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
}

module.exports = HashableFile;
