'use strict';

var React = require('react');
var animatedScrollTo = require('../utils/animated-scroll-to');

var FullPage = React.createClass({
  displayName: 'FullPage',

  propTypes: {
    children: React.PropTypes.node.isRequired
  },
  getInitialState: function getInitialState() {
    return {
      activeSlide: 0
    };
  },
  componentDidMount: function componentDidMount() {
    document.addEventListener('wheel', this.onScroll);
    document.addEventListener('touchstart', this.onTouchStart);
    document.addEventListener('touchend', this.onTouchEnd);
    window.addEventListener('resize', this.onResize);

    this.slidesCount = this.props.children.length;
    this.onResize();
    this.scrollToSlide(0);
    this.touchStart = 0;
    this.touchSensitivity = 5;
  },
  componentWillUnmount: function componentWillUnmount() {
    document.removeEventListener('wheel', this.onScroll);
    document.removeEventListener('touchstart', this.onTouchStart);
    document.removeEventListener('touchend', this.onTouchEnd);
    window.removeEventListener('resize', this.onResize);
  },
  onResize: function onResize() {
    this.slides = [];

    for (var i = 0; i < this.slidesCount; i++) {
      this.slides.push(window.innerHeight * i);
    }

    this.setState({
      height: window.innerHeight
    });
  },
  scrollToSlide: function scrollToSlide(slide) {
    var _this = this;

    if (slide >= 0 && slide < this.slidesCount) {
      this.setState({
        activeSlide: slide
      });

      this.scrollPending = true;
      animatedScrollTo(this.slides[slide], 700, function () {
        _this.scrollPending = false;
      });
    }
  },
  onTouchStart: function onTouchStart(e) {
    this.touchStart = e.touches[0].clientY;
  },
  onTouchEnd: function onTouchEnd(e) {
    var touchEnd = e.changedTouches[0].clientY;

    if (this.touchStart > touchEnd + this.touchSensitivity) {
      this.scrollToSlide(this.state.activeSlide + 1);
    } else if (this.touchStart < touchEnd - this.touchSensitivity) {
      this.scrollToSlide(this.state.activeSlide - 1);
    }
  },
  onArrowClick: function onArrowClick() {
    this.scrollToSlide(this.state.activeSlide + 1);
  },
  onScroll: function onScroll(e) {
    e.preventDefault();
    if (this.scrollPending) {
      return false;
    }

    var scrollDown = (e.wheelDelta || -e.deltaY || -e.detail) < 0;
    var activeSlide = this.state.activeSlide;

    if (scrollDown) {
      activeSlide++;
    } else {
      activeSlide--;
    }

    this.scrollToSlide(activeSlide);
  },
  render: function render() {
    return React.createElement(
      'div',
      { style: { height: this.state.height } },
      this.props.children
    );
  }
});

module.exports = FullPage;