const { themedColors } = require('./theme');

module.exports = {
  config(name) {
    if (name == 'color-themes') {
      const colors = themedColors.filter(val => {
        if (val == 'primary' || val == 'background' || val == 'surface')
          return false;

        return true;
      });

      if (colors.length > 0) return `(${colors.join()})`;

      return 'null';
    }
  }
};
