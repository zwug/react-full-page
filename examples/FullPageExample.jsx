import React from 'react';
import { FullPage, Slide } from '../src';

export default function FullPageExample() {
  const controlsProps = {
    style: {
      left: '50%',
      paddingTop: '10px',
      position: 'fixed',
      transform: 'translateX(-50%)',
    },
  };
  return (
    <FullPage controls controlsProps={controlsProps}>
      <Slide
        style={{
          background: '#2ECC40', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <h1>1</h1>
      </Slide>
      <Slide
        style={{
          background: '#0074D9', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <h1>2</h1>
      </Slide>
      <Slide
        style={{
          background: '#00c4ff', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <h1>3</h1>
      </Slide>
      <Slide
        style={{
          background: '#d52685', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <h1>4</h1>
      </Slide>
    </FullPage>
  );
}
