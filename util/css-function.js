module.exports = {
  color(name) {
    return `var(--color-${name})`;
  },
  toRem(val) {
    return `${val * 0.0625}rem`;
  },
  letterSpace(number) {
    return `${number * 0.125}rem`;
  },
  widget(name) {
    return `var(--widget-${name})`;
  }
};
