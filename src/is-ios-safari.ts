import isIos = require("./is-ios");
import isIosFirefox = require("./is-ios-firefox");

const webkitRegexp = /webkit/i;

function isWebkit(userAgent: string): boolean {
  return webkitRegexp.test(userAgent);
}

function isIosChrome(userAgent: string): boolean {
  return userAgent.indexOf("CriOS") > -1;
}

function isFacebook(userAgent: string): boolean {
  return userAgent.indexOf("FBAN") > -1;
}

export = function isIosSafari(userAgent?: string): boolean {
  userAgent = userAgent || window.navigator.userAgent;

  return (
    isIos(userAgent) &&
    isWebkit(userAgent) &&
    !isIosChrome(userAgent) &&
    !isIosFirefox(userAgent) &&
    !isFacebook(userAgent)
  );
};
