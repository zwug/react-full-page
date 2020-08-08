"use strict";

require("core-js/modules/es.array.index-of");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMobileDevice;

function isMobileDevice() {
  return typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1;
}