export default {
  title: 'App Bar Top'
};

import './icon.css';
import './app-bar-top.css';

export const full = () => {
  return `
    <nav class="ao-app-bar-top">
      <button class="icon ao-button ao-button-icon in-primary">
        <i class="ao-icons">menu</i>
      </button>
      <span class="title">AokaCSS</span>
      <div class="actions">
        <button class="ao-button ao-button-icon in-primary">
          <i class="ao-icons">search</i>
        </button>
        <button class="ao-button ao-button-icon in-primary">
          <i class="ao-icons">more</i>
        </button>
      </div>
    </nav>
  `;
};

export const withoutButton = () => {
  return `
    <nav class="ao-app-bar-top">
      <span class="title">AokaCSS</span>
      <div class="actions">
        <button class="ao-button ao-button-icon in-primary">
          <i class="ao-icons">search</i>
        </button>
        <button class="ao-button ao-button-icon in-primary">
          <i class="ao-icons">more</i>
        </button>
      </div>
    </nav>
  `;
};

export const withIcon = () => {
  return `
    <nav class="ao-app-bar-top">
      <i class="icon ao-icons">more</i>
      <span class="title">AokaCSS</span>
      <div class="actions">
        <button class="ao-button ao-button-icon in-primary">
          <i class="ao-icons">search</i>
        </button>
        <button class="ao-button ao-button-icon in-primary">
          <i class="ao-icons">more</i>
        </button>
      </div>
    </nav>
  `;
};
