const path = require("path");
const test = require("ava");
const helper = require("../helper.js");
const findAssetFiles = require("../../lib/findAssetFiles");

test("it finds toplevel js/png/svg/... files", (t) => {
  const files = findAssetFiles(path.join(helper.FIXTURES_DIR, "finder"));

  t.deepEqual(
    ["image.png", "logo.svg", "stylesheet.css", "script.js"].sort(),
    files
  );
});
