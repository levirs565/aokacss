export default {
  title: 'App Bar Top'
};

const menu = `
      <div class="actions">
        <button class="button type-icon theme-primary">
          <i class="icon">search</i>
        </button>
        <button class="button type-icon theme-primary">
          <i class="icon">more</i>
        </button>
      </div>
`;

export const full = () => {
  return `
    <nav class="app-bar-top">
      <button class="icon button type-icon theme-primary">
        <i class="icon">menu</i>
      </button>
      <span class="title">AokaCSS</span>
      ${menu}
    </nav>
  `;
};

export const withoutButton = () => {
  return `
    <nav class="app-bar-top">
      <span class="title">AokaCSS</span>
      ${menu}
    </nav>
  `;
};

export const withIcon = () => {
  return `
    <nav class="app-bar-top">
      <i class="icon icon">more</i>
      <span class="title">AokaCSS</span>
      ${menu}
    </nav>
  `;
};

export const withTab = () => {
  return `
    <nav class="app-bar-top">
      <button class="icon button type-icon theme-primary">
        <i class="icon">menu</i>
      </button>
      <span class="title">AokaCSS</span>
      ${menu}
      <ul class="tab">
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
    </nav>
    <div>
      <h1>One</h1>
      <p>One is satu, siji, ichi</p>
    </div>
  `;
};
