---
layout: ../../layouts/DocLayout.astro

title: Textarea
---

The textarea shares the usage of the `GenshiInput` class as well, considering it is very similar to
the [text field](/form/text-field). As long as the `GenshiInput__control` tag is applied to a
textarea, it will be rendered in a consistent way with other text fields.

```html
<div class="GenshiInput">
  <label class="GenshiInput__label">
    Summary
    <textarea class="GenshiInput__control" placeholder="Summary of the content"></textarea>
  </label>
  <small class="GenshiInput__helper">This will be presented as the SEO tag.</small>
</div>
```

<div class="GenshiInput">
  <label class="GenshiInput__label">
    Summary
    <textarea class="GenshiInput__control" placeholder="Summary of the content" rows="6"></textarea>
  </label>
  <small class="GenshiInput__helper">This will be presented as the SEO tag.</small>
</div>

## Monospace

Apply the `GenshiInput--mono` modifier to the text field in order to render it using monospaced
fonts.

<div class="GenshiInput GenshiInput--mono">
  <label class="GenshiInput__label">
    Custom CSS code
    <div class="GenshiInput__field">
      <textarea class="GenshiInput__control" placeholder="Type your CSS code here" rows="5"></textarea>
    </div>
  </label>
</div>

## Disabled and read only

Add the `disabled` attribute to the `<textarea>` tag to disable the text field.

<div class="GenshiInput">
  <label class="GenshiInput__label">
    Message contents
    <textarea disabled class="GenshiInput__control" placeholder="Message contents">How are you?</textarea>
  </label>
  <small class="GenshiInput__helper">
    You cannot modify a message that has already been sent.
  </small>
</div>

You can also add the `readonly` attribute to the `<textarea>` tag to mark it as read-only.

<div class="GenshiInput">
  <label class="GenshiInput__label">
    Custom code
    <textarea readonly class="GenshiInput__control" placeholder="Custom code">div { margin: 0.5rem; }</textarea>
  </label>
  <small class="GenshiInput__helper">
    You can copy this snippet.
  </small>
</div>

## Icons

You can add icons to the text field by making sure that the `<textarea>` field is wrapped in a
`GenshiInput__control` element. Then, attach an SVG with the `GenshiInput__icon` class, either
before or after the input field.

<div class="GenshiCols GenshiCols--cozy">
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      User bio
      <div class="GenshiInput__field">
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      <textarea class="GenshiInput__control" placeholder="User bio" rows="3"></textarea>
      </div>
    </label>
  </div>
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      Message
      <div class="GenshiInput__field">
      <textarea class="GenshiInput__control" placeholder="Send your message" rows="3"></textarea>
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
      </div>
    </label>
  </div>
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      Reply
      <div class="GenshiInput__field">
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
      <textarea class="GenshiInput__control" placeholder="Write your reply" rows="3"></textarea>
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
    </label>
  </div>
</div>

## Validation

For validation purposes you can add the `aria-invalid="true"` or `aria-invalid="false"` to the
field. If you are going to do this, it is recommended to include an icon, to convey the validation
status without depending on color.

<div class="GenshiCols GenshiCols--cozy">
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      User bio
      <div class="GenshiInput__field">
      <textarea rows="5" class="GenshiInput__control" placeholder="User bio" aria-invalid="false">Story about me</textarea>
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
    </label>
    <small class="GenshiInput__helper">Your bio requires at least 5 words.</small>
  </div>
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      Description
      <div class="GenshiInput__field">
      <textarea rows="5" class="GenshiInput__control" placeholder="User bio" aria-invalid="true">HTML is a programming language</textarea>
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>      </div>
    </label>
    <small class="GenshiInput__helper">People are not ready for facts.</small>
  </div>
</div>

## Sizes

Use the `GenshiInput--xs`, `GenshiInput--sm`, `GenshiInput--lg` and `GenshiInput--lg` to alter the
font size.

<div class="GenshiStack GenshiStack--v">
  <div class="GenshiInput GenshiInput--xs">
    <label class="GenshiInput__label">
      User bio
      <div class="GenshiInput__field">
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      <textarea rows="2" class="GenshiInput__control" placeholder="User bio"></textarea>
      </div>
    </label>
  </div>
  <div class="GenshiInput GenshiInput--sm">
    <label class="GenshiInput__label">
      User bio
      <div class="GenshiInput__field">
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      <textarea rows="2" class="GenshiInput__control" placeholder="User bio"></textarea>
      </div>
    </label>
  </div>
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      User bio
      <div class="GenshiInput__field">
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      <textarea rows="2" class="GenshiInput__control" placeholder="User bio"></textarea>
      </div>
    </label>
  </div>
  <div class="GenshiInput GenshiInput--lg">
    <label class="GenshiInput__label">
      User bio
      <div class="GenshiInput__field">
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      <textarea rows="2" class="GenshiInput__control" placeholder="User bio"></textarea>
      </div>
    </label>
  </div>
  <div class="GenshiInput GenshiInput--xl">
    <label class="GenshiInput__label">
      User bio
      <div class="GenshiInput__field">
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      <textarea rows="2" class="GenshiInput__control" placeholder="User bio"></textarea>
      </div>
    </label>
  </div>
</div>
