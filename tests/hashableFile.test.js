const HashableFile = require("../lib/hashableFile.js");
const test = require("ava");

test("#assetPath returns the given path relative to an assets dir", (t) => {
  const file = new HashableFile("", "/assets/foo.png");

  t.is("/assets/foo.png", file.assetPath);
});

test("#path returns the given full path to the file", (t) => {
  const file = new HashableFile("/full/path/assets/foo.png", "");

  t.is("/full/path/assets/foo.png", file.path);
});
