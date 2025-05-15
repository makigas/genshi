---
layout: ../../layouts/Layout.astro
---

# Typography

This is the typography test card, showing all the things you can do with typography. You are
currently reading a paragraph. Genshi uses `rem` as the size and spacing unit, so things will flow
even if you change this value.

You want more paragraphs? Let's quote Wikipedia!

---

<p>
Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation
and styling of a document written in a markup language such as HTML or XML (including XML
dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide
Web, alongside HTML and JavaScript.
</p>
<p>
CSS is designed to enable the separation of content and presentation, including layout,
colors, and fonts. This separation can improve content accessibility, since the content can
be written without concern for its presentation; provide more flexibility and control in the
specification of presentation characteristics; enable multiple web pages to share formatting
by specifying the relevant CSS in a separate .css file, which reduces complexity and
repetition in the structural content; and enable the .css file to be cached to improve the
page load speed between the pages that share the file and its formatting.
</p>
<p>
Separation of formatting and content also makes it feasible to present the same markup page
in different styles for different rendering methods, such as on-screen, in print, by voice
(via speech-based browser or screen reader), and on Braille-based tactile devices. CSS also
has rules for alternative formatting if the content is accessed on a mobile device.
</p>

---

## Links

Links will use the Genshi style and color by default. For example:

[Star us on GitHub](https://github.com/makigas/genshi)

## Headings

<blockquote>
<h1>Level 1 Heading</h1>
<h2>Level 2 Heading</h2>
<h3>Level 3 Heading</h3>
<h4>Level 4 Heading</h4>
<h5>Level 5 Heading</h5>
<h6>Level 6 Heading</h6>
</blockquote>

## Inline elements

Here are some inline tags supported by Genshi.

<div class="GenshiCols">
  <div>
    <p>This text is <strong>strong</strong>.</p>
    <p>This text has <em>emphasis</em>.</p>
    <p>This text is <mark>highlighted</mark>.</p>
    <p>This text is <u>underline</u>.</p>
    <p>This text <s>has been striked</s>.</p>
    <p>This text <small>is smaller</small>.</p>
  </div>
  <div>
    <p>This text has been <ins>added</ins>.</p>
    <p>This text has been <del>deleted</del>.</p>
    <p>Here is an <abbr title="abbreviation of something bigger">abbreviation</abbr>.</p>
    <p>To fix your issues, press <kbd>Alt + F4</kbd>.</p>
    <p>How about some <code>inline code</code>.</p>
    <p>Fake a commit date using <var>GIT_COMMITTER_DATE</var>.</p>
  </div>
</div>

## Code blocks

Add code blocks with the `<pre>` tag:

<pre><code>&lt;div class="GenshiCols"&gt;
  &lt;div&gt;
    Column...
  &lt;/div&gt;
  &lt;div&gt;
    Column...
  &lt;/div&gt;
  &lt;div&gt;
    Column...
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

However, if you want your code tag to stand out, you will have to add the `.code` tag:

<pre class="code"><code>&lt;div class="GenshiCols"&gt;
  &lt;div&gt;
    Column...
  &lt;/div&gt;
  &lt;div&gt;
    Column...
  &lt;/div&gt;
  &lt;div&gt;
    Column...
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

## Blockquotes

<blockquote>
<p>
Historically, this has been presented as a horizontal rule or line. While it may still be
displayed as a horizontal rule in visual browsers, this element is now defined in semantic
terms, rather than presentational terms, so if you wish to draw a horizontal line, you
should do so using appropriate CSS.
</p>
<cite>&mdash; MDN, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/hr" target="_blank">source</a></cite>
</blockquote>

## Lists

<div class="GenshiCols">
  <div>
    <ul>
      <li>Unordered list.</li>
      <li>
        Use it to render bullets.
        <ul>
          <li>Can have nested lists.</li>
          <li>
            Please, don't nest them too much.
            <ul>
              <li>I said don't nest them too much!</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div>
    <ol>
      <li>Ordered list.</li>
      <li>
        Renders using numbers.
        <ol>
          <li>Can also be nested.</li>
          <li>
            But please, don't make it very boring.
            <ol>
              <li>Boring level increased.</li>
            </ol>
          </li>
        </ol>
      </li>
    </ol>
  </div>
  <div>
    <dl>
      <dt>Windows 1.0</dt>
      <dd>First released in 1985</dd>
      <dt>Windows 2.0</dt>
      <dd>First released in 1987</dd>
      <dt>Windows 3.0</dt>
      <dd>First released in 1990</dd>
    </dl>
  </div>
</div>
