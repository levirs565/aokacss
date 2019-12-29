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

function rgbaToRgb(color, back) {
  const [cR, cG, cB, cA] = parser(color).rgba;
  const [bR, bG, bB] = parser(back).rgb;
  const alpha = 1 - cA;
  // console.log(`${JSON.stringify(parser(color))} ${color} ${alpha}: ${cA}`);
  const newR = Math.round((cA * (cR / 255) + alpha * (bR / 255)) * 255);
  const newG = Math.round((cA * (cG / 255) + alpha * (bG / 255)) * 255);
  const newB = Math.round((cA * (cB / 255) + alpha * (bB / 255)) * 255);
  return `rgb(${newR}, ${newG}, ${newB})`;
}

function getColorTone(color) {
  const minimumContrast = 3.1;

  const lightContrast = getColorContrast(color, 'white');
  const darkContrast = getColorContrast(
    color,
    rgbaToRgb('rgba(0, 0, 0, 0.87)', color)
  );

  if (lightContrast < minimumContrast && darkContrast > lightContrast)
    return 'light';
  else return 'dark';
}
module.exports.getColorTone = getColorTone;
