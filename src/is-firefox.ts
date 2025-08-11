export = function isFirefox(userAgent?: string): boolean {
  userAgent = userAgent || window.navigator.userAgent;

  return /Firefox/i.test(userAgent);
};
