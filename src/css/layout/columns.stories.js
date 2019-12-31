export default {
  title: 'Columns'
};

function createFeatureColumns(icon, text) {
  return `
    <div class="col-4 not-grow">
      <div class="card">
        <img class="img" src="https://scx1.b-cdn.net/csz/news/800/2019/1-howtodesigna.jpg">
        <div class="contents">
          <p class="heading-5"><i class="icon text-6xl ">${icon}</i></p>
          <p class="text-body-2">${text}</p>
        </div>
      </div>
    </div>
  `;
}

export const title = () =>
  `
    <div class="row text-center">
      ${createFeatureColumns('speed', 'Built for speed')}
      ${createFeatureColumns('code', 'Built for simply use')}
      ${createFeatureColumns('speed', 'Built for speed')}
      ${createFeatureColumns('code', 'Built for simply use')}
    </div>
  `;
