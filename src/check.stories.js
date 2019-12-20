import hb from 'handlebars';

export default {
  title: 'Check'
};

import './check.css';

export const check = () => {
  return hb.compile(
    `<form action="">
      {{#each option}}
        <div class="ao-check">
          <input type="checkbox" id="{{this}}" name="choice">
          <label for="{{this}}">{{this}}</label>
        </div>
      {{/each}}
        <div class="ao-check">
          <input type="checkbox" id="Three" name="choice" disabled>
          <label for="Three">Three</label>
        </div>
        <div class="ao-check">
          <input type="checkbox" id="Four" name="choice" disabled checked>
          <label for="Four">Four</label>
        </div>
    </form>`
  )({
    option: ['One', 'Two']
  });
};
