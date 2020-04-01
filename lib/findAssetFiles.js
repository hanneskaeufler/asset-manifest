const HashableFile = require("./file.js");
const fs = require("fs");
const path = require("path");

const EXTENSION_WHITELIST = [
  ".png",
  ".jpeg",
  ".jpg",
  ".gif",
  ".ico",
  ".svg",
  ".js",
  ".css",
];

// basically stolen from https://www.peterbe.com/plog/nodejs-fs-walk-or-glob-or-fast-glob
const walk = (directory, filepaths = []) => {
  const files = fs.readdirSync(directory);

  for (let filename of files) {
    const filepath = path.join(directory, filename);
    if (fs.statSync(filepath).isDirectory()) {
      walk(filepath, filepaths);
    } else if (EXTENSION_WHITELIST.includes(path.extname(filename))) {
      filepaths.push(filepath);
    }
    // filepaths.push(filename);
  }

  return filepaths.map((f) => new HashableFile(f, f.replace(directory, "")));
};

module.exports = walk;
