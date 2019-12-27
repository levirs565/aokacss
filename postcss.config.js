module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-functions')({ functions: require('./util/css-function') }),
    require('postcss-nested'),
    require('autoprefixer')
  ]
};
