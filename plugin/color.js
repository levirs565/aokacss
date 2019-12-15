module.exports = function({ addUtilities, theme }) {
  const utilities = {};
  const colorList = theme('colors');
  const { black, white } = colorList;
  const overlayHoverBlack = '0.04';
  const overlayFocusBlack = '0.12';
  const overlayHoverWhite = '0.08';
  const overlayFocusWhite = '0.24';

  for (let color in colorList) {
    if (color == 'transparent') continue;

    let surface = colorList[color]['500'];
    if (surface == undefined) surface = colorList[color];

    if (surface.startsWith('var')) continue;

    let ink = white;
    if (color == 'white') ink = black;

    let overlayInk = ink;
    let overlaySurfaceHover = overlayHoverBlack;
    let overlaySurfaceFocus = overlayFocusBlack;
    let overlayInkHover = overlayHoverWhite;
    let overlayInkFocus = overlayFocusWhite;

    if (overlayInk == black) {
      overlaySurfaceHover = overlayHoverWhite;
      overlaySurfaceFocus = overlayFocusWhite;
      overlayInkHover = overlayHoverBlack;
      overlayInkFocus = overlayFocusBlack;
    }

    utilities[`&-${color}`] = {
      '--surface': surface,
      '--ink': ink,
      '--overlay-surface-hover': overlaySurfaceHover,
      '--overlay-surface-focus': overlaySurfaceFocus,
      '--overlay-ink': overlayInk,
      '--overlay-ink-hover': overlayInkHover,
      '--overlay-ink-focus': overlayInkFocus
    };
  }

  addUtilities({
    '.ao-color': utilities
  });
};
