const path = require("path");
const helper = require("../helpers/helper.js");
const md5Hash = require("../../lib/md5Hash.js");
const test = require("ava");

test("it returns the hash of an empty string", (t) => {
  const hash = md5Hash("");

  t.is("d41d8cd98f00b204e9800998ecf8427e", hash);
});

test("it returns the hash of one char", (t) => {
  const hash = md5Hash("a\n");

  t.is("60b725f10c9c85c70d97880dfe8191b3", hash);
});
