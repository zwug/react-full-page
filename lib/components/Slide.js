'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');

var Slide = React.createClass({
  displayName: 'Slide',

  propTypes: {
    children: React.PropTypes.node,
    style: React.PropTypes.object
  },
  render: function render() {
    return React.createElement(
      'div',
      _extends({}, this.props, { style: Object.assign({}, this.props.style, { height: '100%' }) }),
      this.props.children
    );
  }
});

module.exports = Slide;