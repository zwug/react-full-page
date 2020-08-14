import React from 'react';
import PropTypes from 'prop-types';

export default class Controls extends React.Component {
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
          ←
        </button>
        {this.renderSlidesNumbers(currentSlideIndex)}
        <button
          type="button"
          disabled={currentSlideIndex === slidesCount - 1}
          onClick={this.props.onNext}
        >
          →
        </button>
      </div>
    );
  }
}

Controls.propTypes = {
  className: PropTypes.string,
  getCurrentSlideIndex: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  scrollToSlide: PropTypes.func.isRequired,
  slidesCount: PropTypes.number.isRequired,
  style: PropTypes.object,
};

Controls.defaultProps = {
  className: 'full-page-controls',
  style: {},
};
