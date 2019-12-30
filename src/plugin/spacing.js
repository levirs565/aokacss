module.exports = function({ addUtilities }) {
  const utilities = {};

  function createWidthFraction(max) {
    for (let i = 1; i < max; i++) {
      utilities[`.w-${i}\\/${max}`] = {
        width: `${(i / max) * 100}%`
      };
    }
  }

  createWidthFraction(8);
  // createWidthFraction(12);

  addUtilities(utilities);
};
