import hb from 'handlebars';

export default {
  title: 'Radio'
};

export const radio = () => {
  return hb.compile(
    `<form action="">
      {{#each option}}
        <div class="radio">
          <input type="radio" id="{{this}}" name="choice">
          <label for="{{this}}"><span>{{this}}</span></label>
        </div>
      {{/each}}
        <div class="radio">
          <input type="radio" id="Three" name="choice" disabled>
          <label for="Three"><span>Three</span></label>
        </div>
        <div class="radio">
          <input type="radio" id="Four" name="choice" disabled checked>
          <label for="Four"><span>Four</span></label>
        </div>
    </form>`
  )({
    option: ['One', 'Two']
  });
};
