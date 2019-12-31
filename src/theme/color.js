const nonTheme = {
  red: '#F44336',
  pink: '#E91E63',
  purple: '#9C27B0',
  'deep-purple': '#673AB7',
  indigo: '#3F51B5',
  blue: '#2196F3',
  'light-blue': '#03A9F4',
  cyan: '#00BCD4',
  teal: '#009688',
  green: '#4CAF50',
  'light-green': '#8BC34A',
  lime: '#CDDC39',
  yellow: '#FFEB3B',
  amber: '#FFC107',
  orange: '#FF9800',
  'deep-orange': '#FF5722',
  brown: '#795548',
  gray: '#9E9E9E',
  'blue-gray': '#607D8B',
  black: '#000000',
  white: '#FFFFFF'
};

module.exports = (themeColors, nonThemeColors) => {
  let colors = {
    ...themeColors,
    transparent: '#00000000'
  };

  nonThemeColors.forEach(color => {
    if (color in nonTheme) {
      colors[color] = nonTheme[color];
    }
  });

  return colors;
};
