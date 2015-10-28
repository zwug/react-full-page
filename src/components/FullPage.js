const React = require('react');
const animatedScrollTo = require('../utils/animated-scroll-to');

const FullPage = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired
  },
  getInitialState() {
    return {
      activeSlide: 0
    };
  },
  componentDidMount() {
    document.addEventListener('wheel', this.onScroll);
    document.addEventListener('touchstart', this.onTouchStart);
    document.addEventListener('touchend', this.onTouchEnd);
    window.addEventListener('resize', this.onResize);

    this.slidesCount = 5;
    this.onResize();
    this.scrollToSlide(0);
    this.touchStart = 0;
    this.touchSensitivity = 5;
  },
  componentWillUnmount() {
    document.removeEventListener('wheel', this.onScroll);
    document.removeEventListener('touchstart', this.onTouchStart);
    document.removeEventListener('touchend', this.onTouchEnd);
    window.removeEventListener('resize', this.onResize);
  },
  onResize() {
    this.slides = [];

    for (let i = 0; i < this.slidesCount; i++) {
      this.slides.push(window.innerHeight * i);
    }

    this.setState({
      height: window.innerHeight
    });
  },
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
  },
  onTouchStart(e) {
    this.touchStart = e.touches[0].clientY;
  },
  onTouchEnd(e) {
    const touchEnd = e.changedTouches[0].clientY;

    if (this.touchStart > touchEnd + this.touchSensitivity) {
      this.scrollToSlide(this.state.activeSlide + 1);
    } else if (this.touchStart < touchEnd - this.touchSensitivity) {
      this.scrollToSlide(this.state.activeSlide - 1);
    }
  },
  onArrowClick() {
    this.scrollToSlide(this.state.activeSlide + 1);
  },
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
  },
  render() {
    return (
      <div style={{height: this.state.height}}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = FullPage;
