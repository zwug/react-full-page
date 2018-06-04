import React, { Component } from 'react';
import { FullPage, Slide } from '../src';
import Modal from './Modal';

class FullPageExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpened: false,
    };
  }

  onModalClose = () => {
    this.setState({
      isModalOpened: false,
    });
  }

  onBtnClick = () => {
    this.setState({
      isModalOpened: true,
    });
  }

  render() {
    const controlsProps = {
      style: {
        left: '50%',
        paddingTop: '10px',
        position: 'fixed',
        transform: 'translateX(-50%)',
      },
    };

    const buttonStyle = {
      left: '15px',
      padding: '5px',
      position: 'fixed',
      top: '10px',
    };

    const { isModalOpened } = this.state;

    return (
      <div style={{ position: 'relative' }}>
        <FullPage controls controlsProps={controlsProps} disabled={isModalOpened}>
          {!isModalOpened &&
            <button style={buttonStyle} onClick={this.onBtnClick}>
              Open modal
            </button>
          }
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
        {isModalOpened && <Modal onClose={this.onModalClose} />}
      </div>
    );
  }
}

export default FullPageExample;
