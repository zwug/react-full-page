const React = require('react');

const Slide = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    style: React.PropTypes.object
  },
  render() {
    return (
      <div {...this.props} style={Object.assign({}, this.props.style, {height: '100%'})}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Slide;
