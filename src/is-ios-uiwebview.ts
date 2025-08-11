import isIosWebview = require("./is-ios-webview");

export = function isIosUIWebview(
  userAgent?: string,
  statusBarVisible?: boolean,
): boolean {
  statusBarVisible =
    typeof statusBarVisible !== "undefined"
      ? statusBarVisible
      : window.statusbar.visible;

  return isIosWebview(userAgent) && !statusBarVisible;
};
