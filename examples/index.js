const React = require('react');
const ReactDOM = require('react-dom');
const FullPageExample = require('./FullPageExample');

const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(
  <FullPageExample />,
  app
);
