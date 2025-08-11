import isFirefox = require("../is-firefox");

const AGENTS: {
  [key: string]: string;
} = require("./helpers/user-agents.json");

describe("isFirefox", () => {
  it("returns true for android phone Firefox", () => {
    expect(isFirefox(AGENTS.androidPhoneFirefox)).toBe(true);
  });

  it("returns true for android tablet Firefox", () => {
    expect(isFirefox(AGENTS.androidTabletFirefox)).toBe(true);
  });

  it("returns false for ios Firefox (simply a safari webview)", () => {
    expect(isFirefox(AGENTS.iPhoneFirefox)).toBe(false);
  });

  it("returns true for desktop Firefox", () => {
    let userAgent;

    Object.keys(AGENTS).forEach((key) => {
      if (!/iphone|ipad|ipod|phone|tablet/i.test(key) && /firefox/i.test(key)) {
        userAgent = AGENTS[key];
        expect(isFirefox(userAgent)).toBe(true);
      }
    });
  });

  it("returns false for all other browsers", () => {
    let userAgent;

    Object.keys(AGENTS).forEach((key) => {
      if (!/firefox/i.test(key)) {
        userAgent = AGENTS[key];
        expect(isFirefox(userAgent)).toBe(false);
      }
    });
  });
});
