const postcss = require('postcss');
const path = require('path');
const fs = require('fs');

module.exports = postcss.plugin('aokacss', (options = {}) => {
  const opts = Object.assign(require('./defaultConfig'), options);

  const compilerOpt = require('./config/postcss')(opts);
  const compiler = postcss(compilerOpt.plugins);
  const maps = require('./css/maps');
  const cssDir = path.resolve(__dirname, './css');

  function getStyleFileName(style) {
    const pathList = style.split('/');
    let fileName = '.';
    let currentMap = maps;
    for (let i = 0; i < pathList.length; i++) {
      const element = pathList[i];
      if (element in currentMap) {
        const item = currentMap[element];

        fileName += '/';
        if (typeof item == 'string') {
          fileName += item;
        } else {
          fileName += element;
          currentMap = item;

          if (i == pathList.length - 1) {
            fileName += `/${currentMap['all']}`;
          }
        }
      } else {
        throw 'Style not enough';
      }
    }

    return path.join(cssDir, fileName);
  }

  async function compile(style) {
    const fileName = getStyleFileName(style);
    const buffer = fs.readFileSync(fileName);

    return await compiler.process(buffer, {
      from: fileName,
      syntax: compilerOpt.syntax
    });
  }

  async function replaceAtRule(rule) {
    const text = await compile(rule.params);
    rule.replaceWith(text.css);
  }

  // Work with options here

  const promises = [];

  return root => {
    root.walkAtRules(function(rule) {
      promises.push(replaceAtRule(rule));
    });

    return Promise.all(promises);
  };
});
