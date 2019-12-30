export default {
  title: 'All'
};

const appBar = require('./widget/app-bar-top.stories').withoutButton;

const columnChildClass = 'w-full h-full flex items-center justify-center';

function createFeatureColumns(icon, text, color) {
  return `
  <div class="col-4 h-80" style="padding-right: 0 !important;">
    <div class="rounded-l-24 bg-${color}-500 ${columnChildClass}">
        <i class="ao-icon text-6xl">${icon}</i>
    </div>
  </div>
  <div class="col-8 h-80" style="padding-left: 0 !important;">
    <div class="rounded-r-24 bg-${color}-500 ${columnChildClass}">
        <p class="ao-body-1">${text}</p>
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
 
    <div class="ao-grid text-center text-white">
      ${createFeatureColumns('speed', 'Built for speed', 'green')}
      ${createFeatureColumns('code', 'Built for simply use', 'blue')}
    </div>
  </div>
`;
