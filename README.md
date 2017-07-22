# react-full-page
Full screen scrolling with React

## [DEMO](http://zwug.github.io/react-full-page/)

```js
const {FullPage, Slide} = require('react-full-page');

const FullPageExample = React.createClass({
  render() {
    return (
      <FullPage>
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
