# react-full-page
Full screen scrolling with React

## [DEMO](http://zwug.github.io/react-full-page/)

```js
const {FullPage, Slide} = require('../src');

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
