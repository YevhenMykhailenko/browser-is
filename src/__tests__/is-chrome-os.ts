import isChromeOS = require("../is-chrome-os");

const AGENTS: {
  [key: string]: string;
} = require("./helpers/user-agents.json");

describe("isChromeOS", () => {
  it("returns true for ChromeOS Chrome", () => {
    expect(isChromeOS(AGENTS.chromeOsChrome)).toBe(true);
  });

  test.skip("returns true for ChromeOS [some other browser]", () => {
    // Currently any other browser for ChromeOS is actuserAgentlly a
    // questionably functional Android port. For example Firefox & Brave
    // have Android user agents, and Edge installs but doesn't actuserAgentlly
    // work.
  });

  it("returns false for non-ChromeOS browsers", () => {
    let userAgent;

    Object.keys(AGENTS).forEach((key) => {
      if (!/chromeOS/i.test(key)) {
        userAgent = AGENTS[key];
        try {
          expect(isChromeOS(userAgent)).toBe(false);
        } catch (err) {
          throw new Error(
            `key: ${key}, userAgent: ${userAgent}. caused a failure`,
          );
        }
      }
    });
  });
});
