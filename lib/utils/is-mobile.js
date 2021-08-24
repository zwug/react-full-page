"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMobileDevice;

require("core-js/modules/es.array.index-of.js");

function isMobileDevice() {
  return typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1;
}