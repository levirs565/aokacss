// f(c) {
//   c = c / 255;
//   return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
// }

const parser = require('parse-color');

function getLinearChannelValue(v) {
  let c = v / 255;

  return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function getColorLuminance(color) {
  console.log(`${color}: ${parser(color).rgb}`);
  let [r, g, b] = parser(color).rgb;
  r = getLinearChannelValue(r);
  g = getLinearChannelValue(g);
  b = getLinearChannelValue(b);

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function getColorContrast(back, fore) {
  console.log(`back: ${back} fore: ${fore}`);
  let backLum = getColorLuminance(back) + 0.05;
  let foreLum = getColorLuminance(fore) + 0.05;

  return Math.max(backLum, foreLum) / Math.min(backLum, foreLum);
}

function getColorTone(color) {
  const minimumContrast = 3.1;

  const lightContrast = getColorContrast(color, 'white');
  const darkContrast = getColorContrast(color, 'rgba(0, 0, 0, 0.87)');

  if (lightContrast < minimumContrast && darkContrast > lightContrast)
    return 'light';
  else return 'dark';
}

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

function convertOpactities(opacities, name) {
  const result = {};

  for (state in opacities) {
    result[`--overlay-${name}-${state}`] = `${opacities[state]}`;
  }

  return result;
}

function createOpacities(variant, name) {
  const result = {};
  ['hover', 'focus', 'press', 'selected', 'activated'].forEach(state => {
    result[`--overlay-${name}-${state}`] = `var(--overlay-${variant}-${state})`;
  });

  return result;
}

module.exports = function({ addUtilities, theme }) {
  // const utilities = {};
  // const colorList = theme('colors');
  // const { black, white } = colorList;
  // let rootColor = {
  //   ...convertOpactities(darkInkOpacities, 'dark'),
  //   ...convertOpactities(lightInkOpacities, 'light')
  // };
  // let darkNames = [];
  // let lightNames = [];
  // ['background', 'surface', 'primary'].forEach(color => {
  //   const { def, text } = colorList[color];
  //   console.log(`sapu sss ${text}`);
  //   let textTone = getColorTone(text);
  //   let inName = `in-${color}`;
  //   if (textTone == 'dark') darkNames.push(inName);
  //   else lightNames.push(inName);
  // });
  // darkNames.forEach(name => {});
  // for (let color in colorList) {
  //   if (color == 'transparent') continue;
  //   let surface = colorList[color]['500'];
  //   if (surface == undefined) surface = colorList[color];
  //   if (surface.startsWith('var')) continue;
  //   let ink = white;
  //   if (color == 'white') ink = black;
  //   let overlayInk = ink;
  //   let overlaySurfaceHover = overlayHoverBlack;
  //   let overlaySurfaceFocus = overlayFocusBlack;
  //   let overlaySurfacePress = overlayPressBlack;
  //   let overlayInkHover = overlayHoverWhite;
  //   let overlayInkFocus = overlayFocusWhite;
  //   let overlayInkPress = overlayPressWhite;
  //   if (overlayInk == black) {
  //     overlaySurfaceHover = overlayHoverWhite;
  //     overlaySurfaceFocus = overlayFocusWhite;
  //     overlaySurfacePress = overlayPressWhite;
  //     overlayInkHover = overlayHoverBlack;
  //     overlayInkFocus = overlayFocusBlack;
  //     overlayInkPress = overlayPressBlack;
  //   }
  //   utilities[`&-${color}`] = {
  //     '--surface': surface + importantSuffix,
  //     '--ink': ink + importantSuffix,
  //     '--overlay-surface-hover': overlaySurfaceHover + importantSuffix,
  //     '--overlay-surface-focus': overlaySurfaceFocus + importantSuffix,
  //     '--overlay-surface-press': overlaySurfacePress + importantSuffix,
  //     '--overlay-ink': overlayInk + importantSuffix,
  //     '--overlay-ink-hover': overlayInkHover + importantSuffix,
  //     '--overlay-ink-focus': overlayInkFocus + importantSuffix,
  //     '--overlay-ink-press': overlayInkPress + importantSuffix
  //   };
  // }
  // addUtilities({
  //   '.ao-color': utilities,
  //   '.ao-root-color': rootColor
  // });
};
