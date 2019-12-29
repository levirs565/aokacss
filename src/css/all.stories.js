export default {
  title: 'All'
};

const appBar = require('./widget/app-bar-top.stories').withoutButton;

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
    <p class="ao-body-1">AokaCSS is simple Material Design CSS Framework using PostCSS and TailwindCSS. Its hace purpose to create </p>
  </div>
`;
