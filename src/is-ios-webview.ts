import isIos = require("./is-ios");
import isIosGoogleSearchApp = require("./is-ios-google-search-app");

export = function isIosWebview(userAgent?: string): boolean {
  userAgent = userAgent || window.navigator.userAgent;

  if (isIos(userAgent)) {
    // The Google Search iOS app is technically a webview and doesn't support popups.
    if (isIosGoogleSearchApp(userAgent)) {
      return true;
    }
    // Historically, a webview could be identified by the presence of AppleWebKit and _no_ presence of Safari after.
    return /.+AppleWebKit(?!.*Safari)/i.test(userAgent);
  }

  return false;
};
