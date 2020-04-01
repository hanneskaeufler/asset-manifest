const path = require("path");
const fs = require("fs");
const os = require("os");
const prcs = require("child_process");

const ASSETS_FILE_NAME = "mix-manifest.json";
const FIXTURES_DIR = path.join("./tests", "fixture");
const FIXTURE_ASSETS = path.join(FIXTURES_DIR, "assets");

const inTempDir = (fn) => {
  const folder = fs.mkdtempSync(path.join(os.tmpdir(), "asset-manifest-test-"));
  fn(folder);
};

const createMixManifest = (assetsDir, manifestFile) => {
  prcs.execFileSync("./bin/assets-manifest.js", [assetsDir, manifestFile]);
};

module.exports.ASSETS_FILE_NAME = ASSETS_FILE_NAME;
module.exports.FIXTURES_DIR = FIXTURES_DIR;
module.exports.FIXTURE_ASSETS = FIXTURE_ASSETS;
module.exports.createMixManifest = createMixManifest;
module.exports.inTempDir = inTempDir;
