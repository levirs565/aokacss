export default {
  title: 'Text'
};

export const text = () =>
  `
    <div>
      <h1 class="heading-1">Heading 1</h1>
      <h2 class="heading-2">Heading 2</h2>
      <h3 class="heading-3">Heading 3</h3>
      <h4 class="heading-4">Heading 4</h4>
      <h5 class="heading-5">Heading 5</h5>
      <h6 class="heading-6">Heading 6</h6>
      <h6 class="sub-1">Subtitle 1</h6>
      <h6 class="sub-2">Subtitle 2</h6>
      <p class="text-body-1">Body 1</p>
      <p class="text-body-2">Body 2</p>
      <div class="button"><span>Button</span></div>
      <div class="caption"><span>Caption</span></div>
      <div class="overline"><span>Overline</span></div>
    </div>
  `;

export const paragraph = () => `
  <p class="text-body-1">Nisi ea dolore tempor quis cupidatat consequat in qui. Amet excepteur in officia exercitation. Est occaecat in fugiat excepteur.</p>
  <p class="text-body-1">Labore duis aute eiusmod cillum eu laborum ullamco deserunt. Exercitation esse et labore et. Laborum dolore eu fugiat irure quis do minim ut irure enim voluptate do amet. Lorem excepteur ex consectetur est ut non et elit. Nisi nisi dolor deserunt adipisicing laborum anim adipisicing non adipisicing enim ut occaecat. Ut ipsum minim ipsum aute reprehenderit aute aliquip.</p>
`;

export const daunKoder = () => `
<section id="main" class="container article text-body-1">
  <h1>Belajar CSS: Dasar CSS untuk Pemula</h1>
  <p>CSS merupakan bahasa inti yang harus dipahami oleh developer web. Dengan CSS kita dapat membuat web terlihat lebih rapi dan menarik.</p>
<h2>Apa Itu CSS?</h2>
<p>CSS atau Cascading Style Sheets adalah bahasa yang digunakan untuk menata teks, tata-letak dan warna pada file HTML maupun SVG.</p>
<h2>Penulisan CSS</h2>
<p>Struktur CSS terdiri dari 3 bagian yaitu:</p>
<ol>
<li>Selektor</li>
<li>Blok Deklarasi</li>
<li>Deklarasi</li>
</ol>
<h3>Selektor</h3>
<p>Merupakan kata kunci yang digunakan untuk memilih elemen HTML yang akan dipilih. Controh <code>p</code> akan memilih elemen dengan tag <code class="code">p\`(</code >< !--raw HTML omitted-- > \`).</p>
<h3>Blok Deklarasi</h3>
<p>Merupakan tempat kita menaruh deklarasi-deklarasi CSS yang diberikan kepada selektor. Blok diawali dengan <code>{</code> dan diakhiri dengan <code>}</code>.</p>
<h3>Deklarasi</h3>
<p>Merupakan atribut yang diberikan kepada elemen. Deklarasi terdiri dari dua bagian yaitu:</p>
<ol>
<li>Properti merupakan nama atribut</li>
<li>Nilai merupakan nilai dari atribut</li>
</ol>
<p>Deklarasi ditulis sebagai berikut</p>
<div class="highlight"><pre style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4"><code class="language-css" data-lang="css"><span style="color:#f92672">properti</span><span style="color:#f92672">:</span> <span style="color:#f92672">nilai</span><span style="color:#f92672">;</span>
</code></pre></div><p>Deklarasi dapat diakhiri tanpan titik koma <code>;</code>, jika deklarasi tersebut merupakan deklarasi terakhir.</p>
<ol>
<li>First ordered list item</li>
<li>Another item
<ul>
<li>Unordered sub-list.</li>
</ul></li>
<li>Actual numbers don't matter, just that it's a number
<ol>
<li>Ordered sub-list</li>
</ol></li>
<li><p>And another item.</p>
<p>You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).</p>
<p>To have a line break without a paragraph, you will need to use two trailing spaces.
Note that this line is separate, but within the same paragraph.
(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)</p></li>
</ol>
<blockquote>
<p>This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can <em>put</em> <strong>Markdown</strong> into a blockquote.</p>
</blockquote>

</section>
`;
