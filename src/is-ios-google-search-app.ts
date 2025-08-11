import isIos = require("./is-ios");

function isGoogleSearchApp(userAgent: string): boolean {
  return /\bGSA\b/.test(userAgent);
}

export = function isIosGoogleSearchApp(userAgent?: string): boolean {
  userAgent = userAgent || window.navigator.userAgent;

  return isIos(userAgent) && isGoogleSearchApp(userAgent);
};
