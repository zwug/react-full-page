import PropTypes from 'prop-types';
import React from 'react';

const Slide = props => (
  <div {...props} style={Object.assign({}, { height: '100%' },  props.style)}>
    {props.children}
  </div>
);

Slide.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

Slide.defaultProps = {
  children: null,
  style: {},
};

Slide.isSlideOfFullpage = true;

export default Slide;
