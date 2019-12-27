import { configure } from '@storybook/html';

import '../src/index.css';

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
