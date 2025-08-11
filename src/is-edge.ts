export = function isEdge(userAgent?: string): boolean {
  userAgent = userAgent || window.navigator.userAgent;

  return userAgent.indexOf("Edge/") !== -1 || userAgent.indexOf("Edg/") !== -1;
};
