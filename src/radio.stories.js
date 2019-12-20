import hb from 'handlebars';

export default {
  title: 'Radio'
};

import './radio.css';

export const radio = () => {
  return hb.compile(
    `<form action="">
      {{#each option}}
        <div class="ao-radio">
          <input type="radio" id="{{this}}" name="choice">
          <label for="{{this}}">{{this}}</label>
        </div>
      {{/each}}
        <div class="ao-radio">
          <input type="radio" id="Three" name="choice" disabled>
          <label for="Three">Three</label>
        </div>
        <div class="ao-radio">
          <input type="radio" id="Four" name="choice" disabled checked>
          <label for="Four">Four</label>
        </div>
    </form>`
  )({
    option: ['One', 'Two']
  });
};
