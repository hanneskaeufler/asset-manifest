const path = require("path");
const helper = require("../helpers/helper.js");
const hashFile = require("../../lib/hashFile.js");
const test = require("ava");

test("it returns the hash of an empty file", (t) => {
  const hash = hashFile(path.join(helper.FIXTURES_DIR, "hasher", "one.txt"));

  t.is("d41d8cd98f00b204e9800998ecf8427e", hash);
});
