const helper = require("./helpers/helper.js");
const HashableFile = require("../lib/hashableFile.js");
const test = require("ava");
const path = require("path");

test("#assetPath returns the given path relative to an assets dir", (t) => {
  const file = new HashableFile("", "/assets/foo.png");

  t.is("/assets/foo.png", file.assetPath);
});

test("#path returns the given full path to the file", (t) => {
  const file = new HashableFile("/full/path/assets/foo.png", "");

  t.is("/full/path/assets/foo.png", file.path);
});

test("#hash returns the hash of the file contents", (t) => {
  let lastContent = "";

  const file = new HashableFile(
    path.join(helper.FIXTURES_DIR, "hasher", "one.txt"),
    "",
    (content) => {
      lastContent = content;
      return "stubHash";
    }
  );

  t.is("stubHash", file.hash);
  t.is("a\n", lastContent);
});
