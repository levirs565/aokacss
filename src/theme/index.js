const color = require('./color');
const unit = require('./unit');

module.exports = (themeColors, nonThemeColors) => ({
  colors: color(themeColors, nonThemeColors),
  screens: {
    tablet: '600px',
    laptop: '992px',
    desktop: '1200px'
  },
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
