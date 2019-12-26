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
    utilities[`${base}-${name}-medium`] = val + '98';
    utilities[`${base}-${name}-low`] = val + '60';

    const textDefault = text + (getColorTone(text) == 'dark' ? 'df' : '');
    const textMedium = text + '98';
    const textLow = text + '60';

    utilities[`${base}-in-${name}`] = textDefault;
    utilities[`${base}-in-${name}-medium`] = textMedium;
    utilities[`${base}-in-${name}-low`] = textLow;
  });

  addUtilities({
    '.ao-theme-color': utilities
  });
};
