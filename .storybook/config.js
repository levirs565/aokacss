import { configure } from '@storybook/html';

import '../src/css/index.css';

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
