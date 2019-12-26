export default {
  title: 'App Bar Top'
};

import './app-bar-top.css';

export const appBar = () => {
  return `
    <nav class="ao-app-bar-top">
      <button class="ao-button ao-button-icon in-primary">
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
