const path = require('path');

module.exports = async ({ config, mode }) => {

  config.module.rules = config.module.rules.filter(
    f => f.test.toString() !== '/\\.css$/'
  );

  config.module.rules.push({
    test: /\.css$/,
    use: ['style-loader', 'css-loader', 'postcss-loader'],
    include: path.resolve(__dirname, '../')
  });

  return config;
};