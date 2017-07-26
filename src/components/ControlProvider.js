import React from "react";
import PropTypes from 'prop-types';

const controlsShape = {
  scrollToSlide: PropTypes.func.isRequired,
  scrollNext: PropTypes.func.isRequired,
  scrollPrev: PropTypes.func.isRequired,
  getSlidesCount: PropTypes.func.isRequired,
  getCurrentIndex: PropTypes.func.isRequired,
};

class Provider extends React.Component {
  getChildContext() {
    return {
      scrollToSlide: this.props.scrollToSlide,
      scrollNext: this.props.scrollNext,
      scrollPrev: this.props.scrollPrev,
      getSlidesCount: this.props.getSlidesCount,
      getCurrentIndex: this.props.getCurrentIndex,
    }
  }

  render() {
    return React.Children.only(this.props.children)
  }
}

Provider.propTypes = controlsShape;
Provider.childContextTypes = controlsShape;

const withControls = (Component) => {
  class ControlledComponent extends React.Component {
    render() {
      return <Component { ...this.props } { ...this.context } />
    }
  }
  ControlledComponent.contextTypes = controlsShape;
  ControlledComponent.displayName ='ControlledComponent';

  return ControlledComponent;
};

module.exports = { controlsShape, Provider, withControls };
