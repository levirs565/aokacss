export default {
  title: 'Button'
};

import './icon.css';
import './base.css';
import './button.css';

function gen(cl) {
  let html = '<div class="flex flex-row"> ';
  ['green', 'yellow', 'red', 'blue'].forEach(color => {
    html += `<button class="ao-button ao-button-${cl} ao-color-${color} mr-4">${color}</button>`;
    html += `<button disabled="true" class="ao-button ao-button-${cl} ao-color-${color} mr-4">${color}</button>`;
  });

  html += `<button class="ao-button ao-button-${cl} ao-color-pink"><i class="ao-icons">favorite</i><span>Icon</span></button>`;

  html += '</div>';
  console.log(html);
  return html;
}

export const text = () => gen('text');

export const outline = () => gen('outlined');

export const raised = () => gen('raised');

export const unelevated = () => gen('unelevated');