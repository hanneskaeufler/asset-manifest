const prcs = require("child_process");
const os = require("os");
const path = require("path");
const fs = require("fs");
const test = require("ava");

const ASSETS_FILE_NAME = "mix-manifest.json"
const FIXTURES_DIR = path.join("./tests", "fixtures");
const FIXTURE_ASSETS = path.join(FIXTURES_DIR, "assets");

const inTempDir = (fn) => {
    const folder = fs.mkdtempSync(path.join(os.tmpdir(), "asset-manifest-test-"));
    fn(folder);
};

const createMixManifest = (assetsDir, manifestFile) => {
    prcs.execFileSync("node", ["index.js", assetsDir, manifestFile]);
}

test("it creates the given file", t => {
    inTempDir((folder) => {
        const target = path.join(folder, ASSETS_FILE_NAME);

        createMixManifest(FIXTURE_ASSETS, target);

        t.truthy(fs.existsSync(target));
    });
});

test("the created file has an entry for each asset file in the given assets folder", t => {
    inTempDir((folder) => {
        const target = path.join(folder, ASSETS_FILE_NAME);

        createMixManifest(FIXTURE_ASSETS, target);

        const fileContent = fs.readFileSync(target);
        t.deepEqual({
            "/assets/main.css": "..."
        }, JSON.parse(fileContent));
    });
});
