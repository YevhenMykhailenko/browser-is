import fs = require("fs");
import path = require("path");

const browserIs: {
  [key: string]: (userAgent: string) => boolean;
} = require("../../dist/browser-type-check");

describe("browserIs", () => {
  it("includes a prop for each js file in the root directory", () => {
    const functions = Object.keys(browserIs);
    const files = fs.readdirSync("./");
    const jsFileNames = files.filter(
      (file) =>
        path.extname(file) === ".js" && file !== "browser-type-check.js",
    );
    const jsFiles = jsFileNames.map((file) => require(`../../${file}`));

    expect(jsFiles.length).toBeGreaterThan(0);

    jsFiles.forEach((module) => {
      const found = functions.find((prop) => module === browserIs[prop]);

      if (!found) {
        throw new Error(`${module} was not found on browserIs`);
      }
    });
  });
});
