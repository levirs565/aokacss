const { getColorTone } = require('./color');

module.exports = {
  colors: [
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
    'blue-gray',
    'white',
    'black'
  ],
  getColor(values) {
    const val =
      typeof values == 'string'
        ? values
        : 'default' in values
        ? values['default']
        : values['500'];
    const valDark = getColorTone(val) == 'dark';
    const dark =
      typeof values == 'object' && 'dark' in values
        ? values['dark']
        : undefined;
    const text =
      typeof values == 'object' && 'text' in values
        ? values.text
        : valDark
        ? '#ffffff'
        : '#000000';
    const textDark = getColorTone(text) == 'dark';
    return {
      val,
      valDark,
      dark,
      text,
      textDark
    };
  }
};
