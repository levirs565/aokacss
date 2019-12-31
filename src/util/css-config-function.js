module.exports = nonThemeColors => {
  return {
    config(name) {
      if (name == 'color-themes') {
        if (nonThemeColors.length > 0) return `(${nonThemeColors.join()})`;

        return 'null';
      }
    }
  };
};
