import isIosFirefox = require("./is-ios-firefox");
import isFirefox = require("./is-firefox");

export = function isMobileFirefox(userAgent?: string): boolean {
  userAgent = userAgent || window.navigator.userAgent;

  return (
    isIosFirefox(userAgent) ||
    (/iPhone|iPod|iPad|Mobile|Tablet/i.test(userAgent) && isFirefox(userAgent))
  );
};
