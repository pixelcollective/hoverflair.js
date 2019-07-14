# hoverflair.js

> Fifteen is the minimum, okay?

This is just a cute little JS package that allows you to make hover interactions a little more playful.

Specify a CSS property, a set of possible values and a dom selector. hoverflair will apply a random value from the set to the element's property on hover.


## Install
`yarn add hoverflair.js`


## Example

Applies a random color to a link on hover.

```js
const hoverThing = document.querySelectorAll('a.my-fancy-link')

const options = {
  colors: [
    '#00f',
    '#ffe716',
    '#f92672',
  ],
  transitionClass: `fadeTransition`, // optional
}

hoverFlair
  .init(options)
  .addFlair(target.links, 'color')
```
