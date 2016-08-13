# react-full-page
Full screen scrolling with React

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
