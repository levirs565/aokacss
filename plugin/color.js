module.exports = function({ addUtilities, theme }) {
  const utilities = {};
  const colorList = theme('colors');
  const { black, white } = colorList;
  const overlayHoverBlack = '0.04';
  const overlayHoverWhite = '0.08';
  const overlayFocusBlack = '0.12';
  const overlayFocusWhite = '0.24';
  const overlayPressBlack = '0.16';
  const overlayPressWhite = '0.32';

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
    let overlaySurfacePress = overlayPressBlack;
    let overlayInkHover = overlayHoverWhite;
    let overlayInkFocus = overlayFocusWhite;
    let overlayInkPress = overlayPressWhite;

    if (overlayInk == black) {
      overlaySurfaceHover = overlayHoverWhite;
      overlaySurfaceFocus = overlayFocusWhite;
      overlaySurfacePress = overlayPressWhite;
      overlayInkHover = overlayHoverBlack;
      overlayInkFocus = overlayFocusBlack;
      overlayInkPress = overlayPressBlack;
    }

    utilities[`&-${color}`] = {
      '--surface': surface,
      '--ink': ink,
      '--overlay-surface-hover': overlaySurfaceHover,
      '--overlay-surface-focus': overlaySurfaceFocus,
      '--overlay-surface-press': overlaySurfacePress,
      '--overlay-ink': overlayInk,
      '--overlay-ink-hover': overlayInkHover,
      '--overlay-ink-focus': overlayInkFocus,
      '--overlay-ink-press': overlayInkPress
    };
  }

  addUtilities({
    '.ao-color': utilities
  });
};
