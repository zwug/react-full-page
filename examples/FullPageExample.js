import React from 'react';
import {FullPage, Slide} from '../src';

class FullPageExample extends React.Component {
  render() {
    return (
      <FullPage>
        <Slide style={{background: '#2ECC40', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <h1>1</h1>
        </Slide>
        <Slide style={{background: '#0074D9', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <h1>2</h1>
        </Slide>
        <Slide style={{background: '#00c4ff', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <h1>3</h1>
        </Slide>
        <Slide style={{background: '#d52685', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <h1>4</h1>
        </Slide>
      </FullPage>
    );
  }
}

module.exports = FullPageExample;
