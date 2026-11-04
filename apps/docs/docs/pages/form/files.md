---
layout: ../../layouts/DocLayout.astro

title: Files
---

File controls can be used to select files and attach them to forms.

Genshi is compatible with the `<input type="file">` control via the `GenshiInput` form component.

```html
<div class="GenshiInput">
  <label class="GenshiInput__label">
    Avatar
    <input type="file" class="GenshiInput__control" placeholder="Select a photo" />
  </label>
  <small class="GenshiInput__helper">Select a photo to use as an avatar.</small>
</div>
```

<div class="GenshiInput">
  <label class="GenshiInput__label">
    Avatar
    <input type="file" class="GenshiInput__control" placeholder="Select a photo" />
  </label>
  <small class="GenshiInput__helper"> Select a photo to use as an avatar.</small>
</div>

## Disabled

Add the `disabled` attribute to the `<input>` tag to disable the field.

<div class="GenshiInput">
  <label class="GenshiInput__label">
    Thumbnail
    <input disabled type="file" class="GenshiInput__control" placeholder="Select a file" />
  </label>
</div>

## Icons

File controls do not properly support an icon before the element. You can add an icon after the
element, though.

<div class="GenshiCols GenshiCols--cozy">
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      Hero image
      <div class="GenshiInput__field">
      <input type="file" class="GenshiInput__control" />
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
      </div>
    </label>
  </div>
</div>

## Validation

For validation purposes you can add the `aria-invalid="true"` or `aria-invalid="false"` to the
field.

If you are going to do this, it is recommended to include an icon, to convey the validation status
without depending on color.

<div class="GenshiCols GenshiCols--cozy">
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      Avatar
      <div class="GenshiInput__field">
      <input type="file" class="GenshiInput__control" value="john.doe.2222" placeholder="User name" aria-invalid="false" />
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
    </label>
    <small class="GenshiInput__helper">File uploaded correctly.</small>
  </div>
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      Search
      <div class="GenshiInput__field">
      <input type="file" class="GenshiInput__control" value="john.doe.2222" placeholder="User name" aria-invalid="true" />
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>      </div>
    </label>
    <small class="GenshiInput__helper">Was that a .webp file? Why?</small>
  </div>
</div>

## Sizes

Use the `GenshiInput--xs`, `GenshiInput--sm`, `GenshiInput--lg` and `GenshiInput--lg` to alter its
size.

<div class="GenshiStack GenshiStack--v GenshiStack--gapless">
  <div class="GenshiInput GenshiInput--xs">
    <label class="GenshiInput__label">
      Attachment
      <div class="GenshiInput__field">
      <input type="file" class="GenshiInput__control" />
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
      </div>
    </label>
  </div>
  <div class="GenshiInput GenshiInput--sm">
    <label class="GenshiInput__label">
      E-mail address
      <div class="GenshiInput__field">
      <input type="file" class="GenshiInput__control" />
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
      </div>
    </label>
  </div>
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      E-mail address
      <div class="GenshiInput__field">
      <input type="file" class="GenshiInput__control" />
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
      </div>
    </label>
  </div>
  <div class="GenshiInput GenshiInput--lg">
    <label class="GenshiInput__label">
      E-mail address
      <div class="GenshiInput__field">
      <input type="file" class="GenshiInput__control" />
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
      </div>
    </label>
  </div>
  <div class="GenshiInput GenshiInput--xl">
    <label class="GenshiInput__label">
      E-mail address
      <div class="GenshiInput__field">
      <input type="file" class="GenshiInput__control" />
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
      </div>
    </label>
  </div>
</div>
