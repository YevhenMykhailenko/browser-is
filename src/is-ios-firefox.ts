export = function isIosFirefox(userAgent?: string): boolean {
  userAgent = userAgent || window.navigator.userAgent;

  return /FxiOS/i.test(userAgent);
};
