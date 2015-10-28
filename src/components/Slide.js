const React = require('react');

const Slide = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    children: React.PropTypes.node
  },
  render() {
    return (
      <section className={this.props.className} style={{height: '100%'}}>
        {this.props.children}
      </section>
    );
  }
});

module.exports = Slide;
