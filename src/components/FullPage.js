import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from './ControlProvider';
import animatedScrollTo from '../utils/animated-scroll-to';

class FullPage extends React.Component {
  propTypes: {
    children: PropTypes.node.isRequired,
    initialSlide: PropTypes.number
  }

  static defaultProps = {
    initialSlide: 0
  }

  constructor(props) {
    super(props);
    this.onResize = this.onResize.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);

    this.scrollPending = false;
    this.slides = [];
    this.slidesCount = React.Children.toArray(props.children).filter((child) => {
      return child.type.displayName !== 'ControlledComponent';
    }).length;
    this.touchSensitivity = 5;
    this.touchStart = 0;

    this.state = {
      activeSlide: props.initialSlide
    };
  }

  componentDidMount() {
    document.addEventListener('touchmove', this.onTouchMove);
    document.addEventListener('touchstart', this.onTouchStart);
    document.addEventListener('wheel', this.onScroll);
    window.addEventListener('resize', this.onResize);

    this.onResize();
    this.scrollToSlide(this.props.initialSlide);
  }

  componentWillUnmount() {
    document.removeEventListener('touchmove', this.onTouchMove);
    document.removeEventListener('touchstart', this.onTouchStart);
    document.removeEventListener('wheel', this.onScroll);
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    this.slides = [];

    for (let i = 0; i < this.slidesCount; i++) {
      this.slides.push(window.innerHeight * i);
    }

    this.setState({
      height: window.innerHeight
    });
  }

  scrollToSlide(slide) {
    if (!this.scrollPending && slide >= 0 && slide < this.slidesCount) {
      this.setState({
        activeSlide: slide
      });

      this.scrollPending = true;
      animatedScrollTo(this.slides[slide], 700, () => {
        this.scrollPending = false;
      });
    }
  }

  onTouchStart(e) {
    this.touchStart = e.touches[0].clientY;
  }

  onTouchMove(evt) {
    evt.preventDefault();
    const touchEnd = evt.changedTouches[0].clientY;

    if (!this.scrollPending) {
      if (this.touchStart > touchEnd + this.touchSensitivity) {
        this.scrollToSlide(this.state.activeSlide + 1);
      } else if (this.touchStart < touchEnd - this.touchSensitivity) {
        this.scrollToSlide(this.state.activeSlide - 1);
      }
    }

  }

  onScroll(e) {
    e.preventDefault();
    if (this.scrollPending) {
      return false;
    }

    const scrollDown = (e.wheelDelta || -e.deltaY || -e.detail) < 0;
    let activeSlide = this.state.activeSlide;

    if (scrollDown) {
      activeSlide++;
    } else {
      activeSlide--;
    }

    this.scrollToSlide(activeSlide);
  }

  scrollNext() {
    this.scrollToSlide(this.state.activeSlide + 1);
  }

  scrollPrev() {
    this.scrollToSlide(this.state.activeSlide - 1);
  }

  getSlidesCount() {
    return this.slidesCount;
  }

  getCurrentIndex() {
    return this.state.activeSlide;
  }

  render() {
    const controls = {
      scrollToSlide: this.scrollToSlide.bind(this),
      scrollNext: this.scrollNext.bind(this),
      scrollPrev: this.scrollPrev.bind(this),
      getSlidesCount: this.getSlidesCount.bind(this),
      getCurrentIndex: this.getCurrentIndex.bind(this),
    };

    return (
      <Provider {...controls}>
        <div style={{height: this.state.height}}>
          {this.props.children}
        </div>
      </Provider>
    );
  }
}

module.exports = FullPage;
