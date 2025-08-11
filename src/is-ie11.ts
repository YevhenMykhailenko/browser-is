export = function isIe11(userAgent?: string): boolean {
  userAgent = userAgent || window.navigator.userAgent;

  return userAgent.indexOf("Trident/7") !== -1;
};
