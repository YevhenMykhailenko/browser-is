import isEdge = require("./is-edge");
import isSamsung = require("./is-samsung");
import isDuckDuckGo = require("./is-duckduckgo");
import isOpera = require("./is-opera");
import isSilk = require("./is-silk");

export = function isChrome(userAgent?: string): boolean {
  userAgent = userAgent || window.navigator.userAgent;

  return (
    (userAgent.indexOf("Chrome") !== -1 || userAgent.indexOf("CriOS") !== -1) &&
    !isEdge(userAgent) &&
    !isSamsung(userAgent) &&
    !isDuckDuckGo(userAgent) &&
    !isOpera(userAgent) &&
    !isSilk(userAgent)
  );
};
