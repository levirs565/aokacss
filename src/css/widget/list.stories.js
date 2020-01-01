export default {
  title: 'List'
};

function genList(cl, line) {
  let str = '';
  for (let i = 0; i < 10; i++) {
    str += `
    <li class="item">
      <img class="img bg-gray">
      <div>
        <p class="text-body-1">${i}</p>
        ${line >= 2 ? `<p class="text-body-2">${i}</p>` : ''}
      </div>
    </li>
    `;
  }

  return `
  <ul class="list ${cl} line-${line}">
    ${str}
  </ul>
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
