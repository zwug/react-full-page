import PropTypes from 'prop-types';
import React from 'react';

class Slide extends React.Component {
  propTypes: {
    children: PropTypes.node,
    style: PropTypes.object
  }

  render() {
    return (
      <div {...this.props} style={Object.assign({}, this.props.style, {height: '100%', touchAction: 'none'})}>
        {this.props.children}
      </div>
    );
  }
}

module.exports = Slide;
