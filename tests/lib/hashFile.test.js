const HashableFile = require("../../lib/file.js");
const path = require("path");
const helper = require("../helpers/helper.js");
const hashFile = require("../../lib/hashFile.js");
const test = require("ava");

test("it returns the hash of an empty file", (t) => {
  const hash = hashFile(
    new HashableFile(path.join(helper.FIXTURES_DIR, "hasher", "empty"), "")
  );

  t.is("d41d8cd98f00b204e9800998ecf8427e", hash);
});

test("it returns the hash of a file with one char", (t) => {
  const hash = hashFile(
    new HashableFile(path.join(helper.FIXTURES_DIR, "hasher", "one.txt"), "")
  );

  t.is("60b725f10c9c85c70d97880dfe8191b3", hash);
});
