export default {
  title: 'Text Field'
};

import './text-field.css';

export const singleLine = () =>
  `
  <form>
  <div class="ao-text-field">
    <input type="text" name="name" required>
    <label for="name">
      <span>
        Name
      </span>
    </label>
  </div>
  </form>`;
