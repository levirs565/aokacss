export default {
  title: 'Text Field'
};

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
  <div class="ao-text-field">
    <input type="text" name="id" required disabled>
    <label for="id">
      <span>
        Id
      </span>
    </label>
  </div>
  </form>`;
