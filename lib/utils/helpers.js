Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.getObjectValues = void 0;

require('core-js/modules/es.array.map.js');

require('core-js/modules/es.object.keys.js');

const getObjectValues = function getObjectValues(obj) {
  return Object.keys(obj).map((key) => obj[key]);
};

exports.getObjectValues = getObjectValues;
