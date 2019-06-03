import React from 'react';

import { FullPage, Slide } from '../src';

class FullPageExampleRef extends React.Component {
  constructor(props) {
    super(props);

    this.fullPageRef = React.createRef();
  }

  onControlsClick = () => {
    this.fullPageRef.current.scrollToSlide(1);
  }

  render() {
    const baseStyle = {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
    };

    return (
      <div className="container">
        <button
          style={{ position: 'fixed' }}
          onClick={this.onControlsClick}
          type="button"
        >
          Controls
        </button>
        <FullPage ref={this.fullPageRef}>
          <Slide
            style={{
              ...baseStyle,
              background: '#2ECC40',
            }}
          >
            <h1>Custom Controls</h1>
          </Slide>
          <Slide
            style={{
              ...baseStyle,
              background: '#0074D9',
            }}
          >
            <h1>2</h1>
          </Slide>
          <Slide
            style={{
              ...baseStyle,
              background: '#00c4ff',
            }}
          >
            <h1>3</h1>
          </Slide>
          <Slide
            style={{
              ...baseStyle,
              background: '#d52685',
            }}
          >
            <h1>4</h1>
          </Slide>
        </FullPage>
      </div>
    );
  }
}

export default FullPageExampleRef;
