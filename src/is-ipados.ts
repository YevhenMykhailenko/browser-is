export = function isIpadOS(userAgent?: string, document?: object): boolean {
  userAgent = userAgent || window.navigator.userAgent;
  document = document || window.document;

  return /Mac|iPad/i.test(userAgent) && "ontouchend" in document;
};
