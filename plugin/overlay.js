module.exports = function({ addUtilities }) {
  const utilities = {
    opacity: '0',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    content: '""',

    '&-surface': {
      backgroundColor: 'var(--surface)',
      '--overlay-hover': 'var(--overlay-surface-hover)',
      '--overlay-focus': 'var(--overlay-surface-focus)',
      '--overlay-press': 'var(--overlay-surface-press)'
    },

    '&-ink': {
      backgroundColor: 'var(--overlay-ink)',
      '--overlay-hover': 'var(--overlay-ink-hover)',
      '--overlay-focus': 'var(--overlay-ink-focus)',
      '--overlay-press': 'var(--overlay-ink-press)'
    },

    '&-hover': {
      opacity: 'var(--overlay-hover)'
    },

    '&-focus': {
      opacity: 'var(--overlay-focus)'
    },

    '&-press': {
      opacity: 'var(--overlay-press)'
    }
  };

  addUtilities({
    '.ao-overlay': utilities
  });
};
