# react-full-page
Full screen scrolling with React

[![npm](https://img.shields.io/npm/v/react-full-page.svg)](https://www.npmjs.com/package/react-full-page)

## [DEMO](http://zwug.github.io/react-full-page/)

```js
const {FullPage, Slide} = require('react-full-page');

const FullPageExample = React.createClass({
  render() {
    return (
      <FullPage {/* initialSlide={1} */}>
        <Slide>
          <h1>Inner slide content</h1>
        </Slide>
        <Slide>
          <h1>Another slide content</h1>
        </Slide>
      </FullPage>
    );
  }
});
```

__Available props__

* `initialSlide` defaults to `0`
## Slider Controls

`withControls` wrapper provides method to control slider.

```js
const {withControls} = require('react-full-page');

const Controls = withControls(({scrollToSlide}) => {
  return <button onClick={() => scrollToSlide(1)}/>
});

const ControlsExample = React.createClass({
  render() {
    return (
      <FullPage>
        <Controls/>
        <Slide/>
        <Slide/>
        <Slide/>
      </FullPage>
    );
  }
});
```

__Available methods__

* `scrollToSlide`
* `scrollNext`
* `scrollPrev`
* `getSlidesCount`
* `getCurrentIndex`
