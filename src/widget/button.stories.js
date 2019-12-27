export default {
  title: 'Button'
};

function gen(cl) {
  let html = '<div class="flex flex-row"> ';
  ['primary', 'green', 'yellow', 'red', 'blue'].forEach(color => {
    html += `<button class="ao-button ao-button-${cl} mr-4 theme-${color}">${color}</button>`;
    html += `<button disabled="true" class="ao-button ao-button-${cl} mr-4 theme-${color}">${color}</button>`;
  });

  html += `<button class="ao-button ao-button-${cl}"><i class="ao-icon">favorite</i><span>Icon</span></button>`;

  html += '</div>';
  console.log(html);
  return html;
}

export const text = () => gen('text');

export const outline = () => gen('outlined');

export const raised = () => gen('raised');

export const unelevated = () => gen('unelevated');

export const icon = () =>
  `
    <button class="ao-button ao-button-icon">
      <i class="ao-icon">
        menu
      </i>
    </button>
    <button class="ao-button ao-button-icon" disabled>
      <i class="ao-icon">
        menu
      </i>
    </button>
  `;
