import PropTypes from 'prop-types';
import React from 'react';
import animatedScrollTo from '../utils/animated-scroll-to';

class FullPage extends React.Component {
  propTypes: {
    children: PropTypes.node.isRequired
  }

  constructor(props) {
    super(props);
    this.onResize = this.onResize.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);

    this.scrollPending = false;
    this.slides = [];
    this.slidesCount = props.children.length;
    this.touchSensitivity = 5;
    this.touchStart = 0;

    this.state = {
      activeSlide: 0
    };
  }

  componentDidMount() {
    document.addEventListener('touchmove', this.onTouchMove);
    document.addEventListener('touchstart', this.onTouchStart);
    document.addEventListener('wheel', this.onScroll);
    window.addEventListener('resize', this.onResize);

    this.onResize();
    this.scrollToSlide(0);
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
    if (slide >= 0 && slide < this.slidesCount) {
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

  onArrowClick() {
    this.scrollToSlide(this.state.activeSlide + 1);
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

  render() {
    return (
      <div style={{height: this.state.height}}>
        {this.props.children}
      </div>
    );
  }
}

module.exports = FullPage;
