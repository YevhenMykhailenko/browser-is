# Browser Type Check

A utility for detecting browser support.

## Installation

npm install --browser-type-check

## Example

```js
const browser = require("browser-type-check");

browser.isAndroid();
browser.isChromeOS();
browser.isChrome();
browser.isDuckDuckGo();
browser.isEdge();
browser.isFirefox();
browser.isSafari();
browser.isIe();
browser.isIe9();
browser.isIe10();
browser.isIe11();
browser.isIos();
browser.isIosFirefox();
browser.isIosGoogleSearchApp();
browser.isIosSafari();
browser.isIosWebview();
browser.isIosUIWebview();
browser.isIosWKWebview();
browser.isIpadOS();
browser.isMobileFirefox();
browser.isOpera();
browser.isSamsungBrowser();
browser.isSilk();
browser.hasSoftwareKeyboard();
```

To reduce build sizes, you can require just the modules you need:

```js
const isAndroid = require("browser-type-check/is-android");
const isChromeOS = require("browser-type-check/is-chrome-os");
const isChrome = require("browser-type-check/is-chrome");
const isDuckDuckGo = require("browser-type-check/is-duckduckgo");
const isEdge = require("browser-type-check/is-edge");
const isFirefox = require("browser-type-check/is-firefox");
const isSafari = require("browser-type-check/is-safari");
const isIe = require("browser-type-check/is-ie");
const isIe9 = require("browser-type-check/is-ie9");
const isIe10 = require("browser-type-check/is-ie10");
const isIe11 = require("browser-type-check/is-ie11");
const isIos = require("browser-type-check/is-ios");
const isIosFirefox = require("browser-type-check/is-ios-firefox");
const isIosGoogleSearchApp = require("browser-type-check/is-ios-google-search-app");
const isIosSafari = require("browser-type-check/is-ios-safari");
const isIosWebview = require("browser-type-check/is-ios-webview");
const isIosUIWebview = require("browser-type-check/is-ios-uiwebview");
const isIosWKWebview = require("browser-type-check/is-ios-wkwebview");
const isIpadOS = require("browser-type-check/is-ipados");
const isMobileFirefox = require("browser-type-check/is-mobile-firefox");
const isOpera = require("browser-type-check/is-opera");
const isSamsungBrowser = require("browser-type-check/is-samsung");
const isSilk = require("browser-type-check/is-silk");
const hasSoftwareKeyboard = require("browser-type-check/has-software-keyboard");
```

### Notes on Safari

`is-safari` is used for _desktop_ Safari detection, if you are trying to detect an iOS version of Safari, use `is-ios-safari`.
