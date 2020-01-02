export default {
  title: 'List'
};

function genList(cl, line) {
  let str = '';
  for (let i = 0; i < 10; i++) {
    str += `
    <li class="list-item line-${line}">
      <img class="img ${cl} bg-gray">
      <div class="text">
        <p class="text-body-1">T${i}</p>
        ${line >= 2 ? `<p class="text-body-2">${i}</p>` : ''}
        ${line >= 3 ? `<p class="text-body-2">${i}</p>` : ''}
      </div>
    </li>
    `;
  }

  return `
  <ul class="list">
    ${str}
  </ul>
  `;
}

function genWithCard(cl, line) {
  let str = '';
  for (let i = 0; i < 10; i++) {
    str += `
    <div class="col-4 not-grow">
      <div class="list-item card tablet-grid line-${line}">
        <img class="img ${cl}" src="https://scx1.b-cdn.net/csz/news/800/2019/1-howtodesigna.jpg">
        <div class="text">
          <p class="text-body-1">T${i}</p>
          ${line >= 2 ? `<p class="text-body-2">${i}</p>` : ''}
          ${line >= 3 ? `<p class="text-body-2">${i}</p>` : ''}
        </div>
      </div>
    </div>
    `;
  }

  return `
    <div class="list row">
      ${str}
    </div>
  `;
}

export const list = () => genList('');
export const smallImg = () => genList('img-sm');
export const mediumImg = () => genList('img-md');
export const largeImg = () => genList('img-lg');
export const extraLargeImg = () => genList('img-xl');
export const twoLineList = () => genList('', 2);
export const twoLineSmallImg = () => genList('img-sm', 2);
export const twoLineMediumImg = () => genList('img-md', 2);
export const twoLineLargeImg = () => genList('img-lg', 2);
export const twoLineExtraLargeImg = () => genList('img-xl', 2);
export const threeLineList = () => genList('', 3);
export const threeLineSmallImg = () => genList('img-sm', 3);
export const threeLineMediumImg = () => genList('img-md', 3);
export const threeLineLargeImg = () => genList('img-lg', 3);
export const threeLineExtraLargeImg = () => genList('img-xl', 3);
export const withCard = () => genWithCard('img-xl', 3);
