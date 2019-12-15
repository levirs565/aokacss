const spacing = {};

for (let x = 1; x <= 20; x++) {
  spacing[`${x * 4}`] = `${x * 0.25}rem`;
}

module.exports = spacing;
