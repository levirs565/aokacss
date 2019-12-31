const { getColorTone } = require('../util/color');
const { getColor } = require('../util/theme');

const darkInkOpacities = {
  hover: 0.04,
  focus: 0.12,
  press: 0.12,
  selected: 0.08,
  activated: 0.12
};

const lightInkOpacities = {
  hover: 0.08,
  focus: 0.24,
  press: 0.24,
  selected: 0.16,
  activated: 0.24
};

function convertOpactities(opacities) {
  const result = {};

  for (state in opacities) {
    result[`--overlay-${state}`] = `${opacities[state]}`;
  }

  return result;
}

module.exports = function({ addUtilities, theme }) {
  const colorList = theme('colors');
  const overlayDark = convertOpactities(darkInkOpacities);
  const overlayLight = convertOpactities(lightInkOpacities);

  const utilities = {
    opacity: '0',
    position: 'absolute',
    top: '0',
    left: '0',
    pointerEvents: 'none',
    content: '""',

    '&-dark': overlayDark,
    '&-light': overlayLight,
    '&-hover': {
      opacity: 'var(--overlay-hover)'
    },

    '&-focus': {
      opacity: 'var(--overlay-focus)'
    },

    '&-press': {
      opacity: 'var(--overlay-press)'
    }
  };

  function pushClass(color, name) {
    const tone = getColorTone(color);
    const props = {
      'background-color': color,
      ...(tone == 'dark' ? overlayDark : overlayLight)
    };
    utilities[name] = props;
  }

  for (const name in colorList) {
    const values = colorList[name];
    const { val, text } = getColor(values);

    pushClass(val, `&-${name}`);
    pushClass(text, `&-in-${name}`);
  }

  addUtilities({
    '.overlay': utilities
  });
};
