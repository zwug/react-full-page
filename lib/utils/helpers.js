"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getObjectValues = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

var getObjectValues = function getObjectValues(obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
};

exports.getObjectValues = getObjectValues;