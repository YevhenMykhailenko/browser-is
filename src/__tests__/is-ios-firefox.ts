import isIosFirefox = require("../is-ios-firefox");

const AGENTS: {
  [key: string]: string;
} = require("./helpers/user-agents.json");

describe("isIosFirefox", () => {
  it("returns true for iPhone Firefox", () => {
    expect(isIosFirefox(AGENTS.iPhoneFirefox)).toBe(true);
  });

  it("returns true for iPad Firefox", () => {
    expect(isIosFirefox(AGENTS.iPadFirefox)).toBe(true);
  });

  it("returns true for iPod Firefox", () => {
    expect(isIosFirefox(AGENTS.iPodFirefox)).toBe(true);
  });

  it("returns false for Android phone Firefox", () => {
    expect(isIosFirefox(AGENTS.androidPhoneFirefox)).toBe(false);
  });

  it("returns false for Android tablet Firefox", () => {
    expect(isIosFirefox(AGENTS.androidTabletFirefox)).toBe(false);
  });

  it("returns false for desktop Firefox", () => {
    let userAgent;

    Object.keys(AGENTS).forEach((key) => {
      if (!/iphone|ipad|ipod|phone|tablet/i.test(key) && /firefox/i.test(key)) {
        userAgent = AGENTS[key];
        expect(isIosFirefox(userAgent)).toBe(false);
      }
    });
  });

  it("returns false for all other browsers", () => {
    let userAgent;

    Object.keys(AGENTS).forEach((key) => {
      if (
        !/iphone|ipad|ipod|phone|tablet/i.test(key) &&
        !/firefox/i.test(key)
      ) {
        userAgent = AGENTS[key];
        expect(isIosFirefox(userAgent)).toBe(false);
      }
    });
  });
});
