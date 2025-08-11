export = function isIe10(userAgent?: string): boolean {
  userAgent = userAgent || window.navigator.userAgent;

  return userAgent.indexOf("MSIE 10") !== -1;
};
