export = function isSilk(userAgent?: string): boolean {
  userAgent = userAgent || window.navigator.userAgent;

  return userAgent.indexOf("Silk/") !== -1;
};
