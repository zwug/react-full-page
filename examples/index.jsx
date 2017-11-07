import React from 'react';
import ReactDOM from 'react-dom';
import FullPageExample from './FullPageExample';

const app = document.createElement('div');
document.body.appendChild(app);

document.body.style.margin = 0;

ReactDOM.render(
  <FullPageExample />,
  app,
);
