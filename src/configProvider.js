const { colors } = require('./util/theme');

module.exports = opts => {
  const { enabledColors, themeColors } = opts;
  const usedColors = colors.filter(val => {
    if (enabledColors.indexOf('all') >= 0 || enabledColors.indexOf(val) >= 0)
      return true;

    return false;
  });
  const nonThemeColors = usedColors.filter(val => {
    if (val == 'primary' || val == 'background' || val == 'surface')
      return false;

    return true;
  });

  const tailwindConfig = {
    important: false,
    theme: require('./theme')(themeColors, nonThemeColors),
    variants: {},
    plugins: require('./plugin')
  };

  return {
    syntax: require('postcss-scss'),
    plugins: [
      require('postcss-import'),
      require('postcss-functions')({
        functions: require('./util/css-config-function')(nonThemeColors)
      }),
      require('postcss-advanced-variables'),
      require('tailwindcss')(tailwindConfig),
      require('postcss-functions')({
        functions: require('./util/css-function')
      }),
      require('postcss-nested'),
      require('autoprefixer')
    ]
  };
};
