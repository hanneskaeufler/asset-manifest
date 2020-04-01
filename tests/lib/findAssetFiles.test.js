const path = require("path");
const test = require("ava");
const helper = require("../helpers/helper.js");
const findAssetFiles = require("../../lib/findAssetFiles");

test("it finds toplevel js/png/svg/... files", (t) => {
  const files = findAssetFiles(path.join(helper.FIXTURES_DIR, "finder"));

  t.deepEqual(
    ["/image.png", "/logo.svg", "/stylesheet.css", "/script.js"].sort(),
    files
  );
});

test("it ignores folders", (t) => {
  const files = findAssetFiles(path.join(helper.FIXTURES_DIR, "folders"));

  t.deepEqual([], files);
});

test("it finds file in nested folder", (t) => {
  const files = findAssetFiles(path.join(helper.FIXTURES_DIR, "nested"));

  t.deepEqual(["/logos/corp.svg"], files);
});
