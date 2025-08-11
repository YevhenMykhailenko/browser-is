export = function isChromeOS(userAgent?: string): boolean {
  userAgent = userAgent || window.navigator.userAgent;

  return /CrOS/i.test(userAgent);
};
