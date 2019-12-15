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
      backgroundColor: 'var(--surface)'
    },

    '&-surface-hover': {
      opacity: 'var(--overlay-surface-hover)'
    },

    '&-surface-focus': {
      opacity: 'var(--overlay-surface-focus)'
    },
    '&-ink': {
      backgroundColor: 'var(--overlay-ink)'
    },

    '&-ink-hover': {
      opacity: 'var(--overlay-ink-hover)'
    },

    '&-ink-focus': {
      opacity: 'var(--overlay-ink-focus)'
    }
  };

  addUtilities({
    '.ao-overlay': utilities
  });
};
