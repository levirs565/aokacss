export default {
  title: 'All'
};

const appBar = require('./widget/app-bar-top.stories').withoutButton;
const hero = require('./layout/hero.stories').hero;

export const all = () =>
  `
  ${appBar()}
  ${hero()}

  <div class="container">
    <h2 class="ao-heading-4">What is AokaCSS?</h2>
    <p class="ao-body-1">AokaCSS is simple Material Design CSS Framework using PostCSS and TailwindCSS. Aoka is</p>
  </div>
`;
