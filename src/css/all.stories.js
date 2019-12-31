export default {
  title: 'All'
};

const appBar = require('./widget/app-bar-top.stories').withoutButton;
const hero = require('./widget/hero.stories').hero;

const columnChildClass = 'w-full h-full flex items-center justify-center';

function createFeatureColumns(icon, text) {
  return `
    <div class="col-4">
      <div class="ao-card" style="height: 128px;">
        <div class="contents">
          <p class="ao-heading-5 "><i class="ao-icon text-6xl ">${icon}</i></p>
          <p class="ao-body-2">${text}</p>
        </div>
      </div>
    </div>
  `;
}

export const all = () =>
  `
  ${appBar()}
  ${hero()}

  <div class="container">
    <h2 class="ao-heading-4">What is AokaCSS?</h2>
    <p class="ao-body-1">AokaCSS is simple Material Design CSS Framework using PostCSS and TailwindCSS. Aoka is</p>
 
    <div class="ao-columns text-center text-white">
      ${createFeatureColumns('speed', 'Built for speed')}
      ${createFeatureColumns('code', 'Built for simply use')}
      ${createFeatureColumns('speed', 'Built for speed')}
      ${createFeatureColumns('code', 'Built for simply use')}
    </div>
  </div>
`;
