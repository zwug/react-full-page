const React = require('react');
const {FullPage, Slide} = require('../src');

const FullPageExample = React.createClass({
  render() {
    return (
      <FullPage>
        <Slide style={{background: '#2ECC40'}}>
          #1
        </Slide>
        <Slide style={{background: '#0074D9'}}>
          #2
        </Slide>
      </FullPage>
    );
  }
});

module.exports = FullPageExample;
