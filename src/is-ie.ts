import isIE11 = require("./is-ie11");

export = function isIE(userAgent?: string): boolean {
  userAgent = userAgent || window.navigator.userAgent;

  return userAgent.indexOf("MSIE") !== -1 || isIE11(userAgent);
};
