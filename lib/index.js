'use strict';

var FullPage = require('./components/FullPage');
var Slide = require('./components/Slide');

var _require = require('./components/ControlProvider'),
    withControls = _require.withControls;

module.exports = {
  withControls: withControls,
  FullPage: FullPage,
  Slide: Slide
};