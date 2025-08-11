export = function isSamsungBrowser(userAgent?: string): boolean {
  userAgent = userAgent || window.navigator.userAgent;

  return /SamsungBrowser/i.test(userAgent);
};
