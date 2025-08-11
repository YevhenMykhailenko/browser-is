export = function isOpera(userAgent?: string): boolean {
  userAgent = userAgent || window.navigator.userAgent;

  return (
    userAgent.indexOf("OPR/") !== -1 ||
    userAgent.indexOf("Opera/") !== -1 ||
    userAgent.indexOf("OPT/") !== -1
  );
};
