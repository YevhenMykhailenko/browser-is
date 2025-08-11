import isIosWebview = require("../is-ios-webview");

const AGENTS: {
  [key: string]: string;
} = require("./helpers/user-agents.json");

describe("isIosWebview", () => {
  it("returns true for iOS webviews", () => {
    let key, userAgent;
    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }
      if (/webview/i.test(key) && !/android/i.test(key)) {
        userAgent = AGENTS[key];
        expect(isIosWebview(userAgent)).toBe(true);
      }
    }
  });

  it("returns true for Android webviews", () => {
    let key, userAgent;

    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }
      if (/webview/i.test(key) && /android/i.test(key)) {
        userAgent = AGENTS[key];
        expect(isIosWebview(userAgent)).toBe(false);
      }
    }
  });

  it("returns false for desktop Safari", () => {
    expect(isIosWebview(AGENTS.macSafari7_0_2)).toBe(false);
  });

  it("returns true when supported and not case-sensitive", () => {
    expect(isIosWebview(AGENTS.iPhoneWebviewLowercase)).toBe(true);
  });

  it("returns false when using a browser on an iPhone using version 15.5", () => {
    expect(isIosWebview(AGENTS.iPhone_15_5Safari)).toBe(false);
  });

  it("returns false for non-webviews", () => {
    let key, userAgent;

    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }
      if (!/webview/i.test(key)) {
        userAgent = AGENTS[key];
        try {
          expect(isIosWebview(userAgent)).toBe(false);
        } catch (e) {
          throw key;
        }
      }
    }
  });

  it("returns true for Google Search App", () => {
    expect(isIosWebview(AGENTS.iPhoneGoogleSearchAppWebview)).toBe(true);
  });
});
