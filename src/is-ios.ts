import isIpadOS = require("./is-ipados");

export = function isIos(
  userAgent?: string,
  checkIpadOS = true,
  document?: object,
): boolean {
  userAgent = userAgent || window.navigator.userAgent;
  const iOsTest = /iPhone|iPod|iPad/i.test(userAgent);
  return checkIpadOS ? iOsTest || isIpadOS(userAgent, document) : iOsTest;
};
