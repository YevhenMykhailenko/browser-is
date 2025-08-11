import isIosGoogleSearchApp = require("../is-ios-google-search-app");

const AGENTS: {
  [key: string]: string;
} = require("./helpers/user-agents.json");

describe("isIosGoogleSearchApp", () => {
  it("returns true for iphone GoogleSearchApp", () => {
    expect(isIosGoogleSearchApp(AGENTS.iPhoneGoogleSearchAppWebview)).toBe(
      true,
    );
  });

  it("returns false for all other browsers", () => {
    let userAgent;

    Object.keys(AGENTS).forEach((key) => {
      if (!/googlesearchapp/i.test(key)) {
        userAgent = AGENTS[key];
        expect(isIosGoogleSearchApp(userAgent)).toBe(false);
      }
    });
  });
});
