const React = require('react');
const FullPage = require('../src/components/FullPage');
const Slide = require('../src/components/Slide');

const FullPageExample = React.createClass({
  render() {
    return (
      <FullPage>
        <Slide>
          #1
        </Slide>
        <Slide>
          #2
        </Slide>
      </FullPage>
    );
  }
});

module.exports = FullPageExample;
