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

module.exports = function({ addUtilities }) {
  const utilities = {
    opacity: '0',
    position: 'absolute',
    top: '0',
    left: '0',
    pointerEvents: 'none',
    content: '""',

    '&-dark': {
      ...convertOpactities(darkInkOpacities)
    },

    '&-light': {
      ...convertOpactities(lightInkOpacities)
    },
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

  addUtilities({
    '.ao-overlay': utilities
  });
};
