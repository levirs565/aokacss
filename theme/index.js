const color = require('./color');
const unit = require('./unit');

module.exports = {
  colors: color,
  extend: {
    spacing: unit,
    minWidth: unit,
    minHeight: unit,
    borderRadius: unit,
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    }
  }
};
