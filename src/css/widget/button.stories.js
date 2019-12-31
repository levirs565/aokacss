export default {
  title: 'Button'
};

function gen(cl) {
  let html = '<div class="flex flex-row"> ';
  ['primary', 'green', 'yellow', 'red', 'blue'].forEach(color => {
    html += `<button class="button type-${cl} mr-4 theme-${color}">${color}</button>`;
    html += `<button disabled="true" class="button type-${cl} mr-4 theme-${color}">${color}</button>`;
  });

  html += `<button class="button type-${cl}"><i class="icon">favorite</i><span>Icon</span></button>`;

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
    <button class="button type-icon">
      <i class="icon">
        menu
      </i>
    </button>
    <button class="button type-icon" disabled>
      <i class="icon">
        menu
      </i>
    </button>
  `;
