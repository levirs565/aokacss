# aokacss

aokacss is simple Material Design css dramework.

## Instalation

aokacss can be used with PostCSS.

```
npm install aokacss
```

Add aokacss to PostCSS Config.

```js
module.exports = {
  plugins: [
    ...,
    require("aokacss"),
    ...
  ]
}
```

Then add aokacss to your css file

```css
@aoka all;
```

## Configuration

You can add configuration to aokacss with

```js
require('aokacss')({
  enabledColors: ['red']
});
```

There is aokacss supported configuration.

### `enabledColors`

Default value  
`['all']`

Description  
Array contain enabled color theme

Value  
`all, red,pink,purple,deep-purple,indigo,blue,light-blue,cyan,teal,green,light-green,lime,yellow,amber,orange,deep-orange,brown,gray,blue-gray,black,white`

### `themes`

Default value

```js
background: {
  default: '#ffffff',
  text: '#000000'
},
surface: {
  default: '#ffffff',
  text: '#000000'
},
primary: {
  default: '#6200EE',
  dark: '#3700B3',
  text: '#ffffff'
}
```

Description  
Object that descibe theme colors.

Value  
Must have `background`, `surface`, and `primary`. All field must have `default` values. `dark` and `text` is optional.

## Module

`@aoka` at rule import aokacss module. aoka css have this module

| Name                 | Description                   |
| -------------------- | ----------------------------- |
| `all`                | Import all aokacss modules    |
| `base`               | Import base module            |
| `layout`             | Import all layout module      |
| `layout/base`        | Import base layout module     |
| `layout/columns`     | Import columns layout module  |
| `layout/hero`        | Import hero layout module     |
| `widget`             | Import all widget             |
| `widget/app-bar-top` | Import app bar top widget     |
| `widget/button`      | Import button widget          |
| `widget/tab`         | Import tab widget             |
| `widget/selection`   | Import radio and check widget |
| `widget/text-field`  | 'Import text input widget     |
| `widget/card`        | Import card widget            |
| `widget/list`        | Import list widget            |
