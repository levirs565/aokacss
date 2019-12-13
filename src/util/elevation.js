module.exports = function({ addUtilities, theme }) {
  const shadowList = theme('boxShadow', {});
  const map = {
    default: [1, 2, 3, 4],
    md: [6, 8],
    lg: [12],
    xl: [16],
    '2xl': [24]
  };
  const utilities = {};

  for (let shadow in map) {
    const selector = map[shadow].map(element => '&-' + element).join();

    utilities[selector] = {
      'box-shadow': shadowList[shadow]
    };
  }

  addUtilities({
    '.md-elevation': utilities
  });
};
