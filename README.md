# react-full-page
Full screen scrolling with React

[![npm](https://img.shields.io/npm/v/react-full-page.svg)](https://www.npmjs.com/package/react-full-page)

## [DEMO](http://zwug.github.io/react-full-page/)

```js
import React from 'react';
import { FullPage, Slide } from 'react-full-page';

export default class FullPageExample extends React.Component {
  render() {
    return (
      <FullPage controls>
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

## Props

* `initialSlide` defaults to `0`
* `duration` - scroll duration [ms] defaults to `700`
* `controls` defaults to `false`
  * `true` adds built-in controls
  * Pass React component if you want to use your own controls
* `controlsProps` additional props for controls component
* `beforeChange` callback executed before scroll
* `afterChange` callback executed after scroll
* `scrollMode` `full-page` or `normal` - defaults to `full-page`

Both `beforeChange` and `afterChange` will receive as parameter an object like:

```js
{
  "from": 0, // the index of the slide react-full-page is scrolling _from_
  "to": 1, // the index of the slide react-full-page is scrolling _to_
}
```

## Slider Controls

Basic controls props (passed automatically)
```js
  getCurrentSlideIndex: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  scrollToSlide: PropTypes.func.isRequired,
  slidesCount: PropTypes.number.isRequired,
```
Default controls example
```js
<FullPage controls controlsProps={{className: 'class-name'}}>
  ...
</FullPage>
```

Custom controls example
```js
<FullPage controls={CustomControls} controlsProps={controlsProps}>
  ...
</FullPage>
```
