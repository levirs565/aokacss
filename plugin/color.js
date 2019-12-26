const { getColorTone } = require('../util/color');

module.exports = function({ addUtilities, theme }) {
  let utilities = {};
  const colorList = theme('colors');
  const base = '--color';

  ['background', 'surface', 'primary'].forEach(name => {
    const values = colorList[name];
    const val = values['default'];
    const text = values.text;

    utilities[`${base}-${name}`] = val;
    utilities[`${base}-${name}-medium`] = val + '99';
    utilities[`${base}-${name}-low`] = val + '61';

    const textDark = getColorTone(text) == 'dark';
    const textDefault = text + (textDark ? 'df' : '');
    const textMedium = text + (textDark ? '99' : 'ba');
    const textLow = text + (textDark ? '61' : '82');

    utilities[`${base}-in-${name}`] = textDefault;
    utilities[`${base}-in-${name}-medium`] = textMedium;
    utilities[`${base}-in-${name}-low`] = textLow;
  });

  addUtilities({
    '.ao-theme-color': utilities
  });
};
