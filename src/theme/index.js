const color = require('./color');
const unit = require('./unit');

module.exports = (themeColors, nonThemeColors) => ({
  colors: color(themeColors, nonThemeColors),
  extend: {
    spacing: unit,
    minWidth: unit,
    minHeight: unit,
    borderRadius: unit,
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    }
  }
});
