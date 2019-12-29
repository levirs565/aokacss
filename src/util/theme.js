const { getColorTone } = require('./color');

module.exports = {
  themedColors: [
    'background',
    'surface',
    'primary',
    'red',
    'pink',
    'purple',
    'deep-purple',
    'indigo',
    'blue',
    'light-blue',
    'cyan',
    'teal',
    'green',
    'light-green',
    'lime',
    'yellow',
    'amber',
    'orange',
    'deep-orange',
    'brown',
    'gray',
    'blue-gray'
  ],
  getColor(values) {
    const val = 'default' in values ? values['default'] : values['500'];
    const valDark = getColorTone(val) == 'dark';
    const text =
      'text' in values ? values.text : valDark ? '#ffffff' : '#000000';
    const textDark = getColorTone(text) == 'dark';
    return {
      val,
      valDark,
      text,
      textDark
    };
  }
};
