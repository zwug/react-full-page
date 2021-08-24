"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getObjectValues = void 0;

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.object.keys.js");

var getObjectValues = function getObjectValues(obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
};

exports.getObjectValues = getObjectValues;