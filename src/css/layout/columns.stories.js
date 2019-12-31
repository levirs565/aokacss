export default {
  title: 'Columns'
};

function createFeatureColumns(icon, text) {
  return `
    <div class="col-4">
      <div class="ao-card" style="height: 128px;">
        <div class="contents">
          <p class="ao-heading-5"><i class="ao-icon text-6xl ">${icon}</i></p>
          <p class="ao-body-2">${text}</p>
        </div>
      </div>
    </div>
  `;
}

export const title = () =>
  `
    <div class="ao-columns text-center">
      ${createFeatureColumns('speed', 'Built for speed')}
      ${createFeatureColumns('code', 'Built for simply use')}
      ${createFeatureColumns('speed', 'Built for speed')}
      ${createFeatureColumns('code', 'Built for simply use')}
    </div>
  `;
