import isIosWKWebview = require("../is-ios-wkwebview");

const AGENTS: {
  [key: string]: string;
} = require("./helpers/user-agents.json");

describe("isIosWKWebview", () => {
  let key, userAgent;

  it("returns true for iOS webviews when statusbar.visible is true", () => {
    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }
      if (/webview/i.test(key) && !/android/i.test(key)) {
        userAgent = AGENTS[key];
        try {
          expect(isIosWKWebview(userAgent, true)).toBe(true);
        } catch (e) {
          throw key;
        }
      }
    }
  });

  it("returns false for iOS webviews when statusbar.visible is false", () => {
    for (key in AGENTS) {
      if (!AGENTS.hasOwnProperty(key)) {
        continue;
      }
      if (/webview/i.test(key) && !/android/i.test(key)) {
        userAgent = AGENTS[key];
        try {
          expect(isIosWKWebview(userAgent, false)).toBe(false);
        } catch (e) {
          throw key;
        }
      }
    }
  });
});
