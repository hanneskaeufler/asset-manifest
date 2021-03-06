const helper = require("./helpers/helper.js");
const path = require("path");
const fs = require("fs");
const test = require("ava");

test("it creates the given file", (t) => {
  helper.inTempDir((folder) => {
    const target = path.join(folder, helper.ASSETS_FILE_NAME);

    helper.createMixManifest(helper.FIXTURE_ASSETS, target);

    t.truthy(fs.existsSync(target));
  });
});

test("the created file has an entry for each asset file in the given assets folder", (t) => {
  helper.inTempDir((folder) => {
    const target = path.join(folder, helper.ASSETS_FILE_NAME);

    helper.createMixManifest(helper.FIXTURE_ASSETS, target);

    const fileContent = fs.readFileSync(target);
    t.deepEqual(
      {
        "/main.css": "/main.css?id=d41d8cd98f00b204e9800998ecf8427e",
      },
      JSON.parse(fileContent)
    );
  });
});
