export = function isIe9(userAgent?: string): boolean {
  userAgent = userAgent || window.navigator.userAgent;

  return userAgent.indexOf("MSIE 9") !== -1;
};
