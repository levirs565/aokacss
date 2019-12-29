const { themedColors, getColor } = require('../util/theme');

module.exports = function({ addUtilities, theme }) {
  let utilities = {};
  const colorList = theme('colors');
  const base = '--color';

  themedColors.forEach(name => {
    const values = colorList[name];
    const { val, valDark, dark, text, textDark } = getColor(values);

    utilities[`${base}-${name}`] = val;
    utilities[`${base}-${name}-medium`] = val + '99';
    utilities[`${base}-${name}-low`] = val + '61';

    if (dark != null) utilities[`${base}-${name}-dark`] = dark;

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
