"use strict";

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.keys");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getObjectValues = void 0;

var getObjectValues = function getObjectValues(obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
};

exports.getObjectValues = getObjectValues;