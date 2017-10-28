import PropTypes from 'prop-types';
import React from 'react';
import animatedScrollTo from '../utils/animated-scroll-to';
import isMobileDevice from '../utils/is-mobile';

class FullPage extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    initialSlide: PropTypes.number,
  }

  static defaultProps = {
    initialSlide: 0,
  }

  constructor(props) {
    super(props);

    this._isScrollPending = false;
    this._isScrolledAlready = false;
    this._slides = [];
    this._slidesCount = React.Children.count(props.children);
    this._touchSensitivity = 5;
    this._touchStart = 0;
    this._isMobile = isMobileDevice();

    this.state = {
      activeSlide: props.initialSlide,
    };
  }

  componentDidMount() {
    if (this._isMobile) {
      document.addEventListener('touchmove', this.onTouchMove);
      document.addEventListener('touchstart', this.onTouchStart);
    } else {
      document.addEventListener('wheel', this.onScroll);
    }
    window.addEventListener('resize', this.onResize);

    this.onResize();
    this.scrollToSlide(this.props.initialSlide);
  }

  componentWillUnmount() {
    if (this._isMobile) {
      document.removeEventListener('touchmove', this.onTouchMove);
      document.removeEventListener('touchstart', this.onTouchStart);
    } else {
      document.removeEventListener('wheel', this.onScroll);
    }
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    this._slides = [];

    for (let i = 0; i < this._slidesCount; i++) {
      this._slides.push(window.innerHeight * i);
    }

    this.setState({
      height: window.innerHeight,
    });
  }

  onTouchStart = (evt) => {
    this._touchStart = evt.touches[0].clientY;
    this._isScrolledAlready = false;
  }

  onTouchMove = (evt) => {
    evt.preventDefault();
    const touchEnd = evt.changedTouches[0].clientY;

    if (!this._isScrollPending && !this._isScrolledAlready) {
      if (this._touchStart > touchEnd + this._touchSensitivity) {
        this.scrollToSlide(this.state.activeSlide + 1);
      } else if (this._touchStart < touchEnd - this._touchSensitivity) {
        this.scrollToSlide(this.state.activeSlide - 1);
      }
    }
  }

  onScroll = (evt) => {
    evt.preventDefault();
    if (this._isScrollPending) {
      return;
    }

    const scrollDown = (evt.wheelDelta || -evt.deltaY || -evt.detail) < 0;
    let { activeSlide } = this.state;

    if (scrollDown) {
      activeSlide++;
    } else {
      activeSlide--;
    }

    this.scrollToSlide(activeSlide);
  }

  getSlidesCount() {
    return this._slidesCount;
  }

  getCurrentIndex() {
    return this.state.activeSlide;
  }

  scrollNext() {
    this.scrollToSlide(this.state.activeSlide + 1);
  }

  scrollPrev() {
    this.scrollToSlide(this.state.activeSlide - 1);
  }

  scrollToSlide(slide) {
    if (!this._isScrollPending && slide >= 0 && slide < this._slidesCount) {
      this.setState({
        activeSlide: slide,
      });

      this._isScrollPending = true;
      animatedScrollTo(this._slides[slide], 700, () => {
        this._isScrollPending = false;
        this._isScrolledAlready = true;
      });
    }
  }

  render() {
    return (
      <div style={{ height: this.state.height }}>
        {this.props.children}
      </div>
    );
  }
}

module.exports = FullPage;
