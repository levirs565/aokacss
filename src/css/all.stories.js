export default {
  title: 'All'
};

const appBar = require('./widget/app-bar-top.stories').withoutButton;

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
  <div class="bg-primary flex flex-col items-center">
    <h1 class="ao-heading-1 text-white">AokaCSS</h1>
    <h2 class="ao-heading-4 text-white text-center">Simple Material Design CSS Framework using PostCSS and TailwindCSS</h2>
    <div>
      <button class="ao-button type-outlined theme-white">
        Download
      </button>
      <button class="ao-button type-unelevated theme-white">
        Get Started
      </button>
    </div>
  </div>

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
