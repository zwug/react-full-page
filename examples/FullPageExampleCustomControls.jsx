import React from 'react';
import PropTypes from 'prop-types';

import { FullPage, Slide } from '../src';

class CustomControls extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    getCurrentSlideIndex: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired,
    scrollToSlide: PropTypes.func.isRequired,
    slidesCount: PropTypes.number.isRequired,
    style: PropTypes.object,
  }

  static defaultProps = {
    className: 'full-page-controls',
    style: {
      left: '50%',
      paddingTop: '10px',
      position: 'fixed',
      transform: 'translateX(-50%)',
    },
  }

  renderSlidesNumbers(currentSlideIndex) {
    const { slidesCount, scrollToSlide } = this.props;
    const slidesNumbers = [];
    for (let i = 0; i < slidesCount; i++) {
      const buttonProps = {
        disabled: currentSlideIndex === i,
        key: i,
        onClick: () => scrollToSlide(i),
      };
      slidesNumbers.push(<button type="button" {...buttonProps}>{i + 1}</button>);
    }
    return slidesNumbers;
  }

  render() {
    const {
      getCurrentSlideIndex, slidesCount, style, className,
    } = this.props;
    const currentSlideIndex = getCurrentSlideIndex();

    return (
      <div className={className} style={style}>
        <button
          type="button"
          disabled={currentSlideIndex === 0}
          onClick={this.props.onPrev}
        >
          previous
        </button>
        {this.renderSlidesNumbers(currentSlideIndex)}
        <button
          type="button"
          disabled={currentSlideIndex === slidesCount - 1}
          onClick={this.props.onNext}
        >
          next
        </button>
      </div>
    );
  }
}

export default function FullPageExampleCustomControls() {
  const baseStyle = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  };
  return (
    <FullPage controls={CustomControls}>
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
  );
}
