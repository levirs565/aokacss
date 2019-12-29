module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-functions')({
      functions: require('../util/css-config-function')
    }),
    require('postcss-advanced-variables'),
    require('tailwindcss')(require('./tailwind')),
    require('postcss-functions')({
      functions: require('../util/css-function')
    }),
    require('postcss-nested'),
    require('autoprefixer')
  ]
};
