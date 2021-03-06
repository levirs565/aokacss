import hb from 'handlebars';

export default {
  title: 'Check'
};

export const check = () => {
  return hb.compile(
    `<form action="">
      {{#each option}}
        <div class="check">
          <input type="checkbox" id="{{this}}" name="choice">
          <label for="{{this}}"><span>{{this}}</span></label>
        </div>
      {{/each}}
        <div class="check">
          <input type="checkbox" id="Three" name="choice" disabled>
          <label for="Three"><span>Three</span></label>
        </div>
        <div class="check">
          <input type="checkbox" id="Four" name="choice" disabled checked>
          <label for="Four"><span>Four</span></label>
        </div>
    </form>`
  )({
    option: ['One', 'Two']
  });
};
