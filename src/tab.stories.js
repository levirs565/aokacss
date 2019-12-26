export default {
  title: 'Tab'
};

import './tab.css';

export const tab = () =>
  `
  <ul class="ao-tab">
    <li>
      <span>One</span>
    </li>
    <li class="selected">
      <span>Two</span>
    </li>
    <li>
      <span>Three</span>
    </li>
    <li>
      <span>Four</span>
    </li>
  </ul>
`;
