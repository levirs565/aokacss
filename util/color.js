const parser = require('parse-color');

function getLinearChannelValue(v) {
  let c = v / 255;

  return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function getColorLuminance(color) {
  let [r, g, b] = parser(color).rgb;
  r = getLinearChannelValue(r);
  g = getLinearChannelValue(g);
  b = getLinearChannelValue(b);

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function getColorContrast(back, fore) {
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
module.exports.getColorTone = getColorTone;
