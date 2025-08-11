export = function isDuckDuckGo(userAgent?: string): boolean {
  userAgent = userAgent || window.navigator.userAgent;

  return userAgent.indexOf("DuckDuckGo/") !== -1;
};
