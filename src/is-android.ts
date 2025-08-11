export = function isAndroid(userAgent?: string): boolean {
  userAgent = userAgent || window.navigator.userAgent;

  return /Android/i.test(userAgent);
};
