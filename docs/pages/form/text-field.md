---
layout: ../../layouts/DocLayout.astro

title: Text Field
---

The canonical text field uses `GenshiInput` as its base class block.

```html
<div class="GenshiInput">
  <label class="GenshiInput__label">
    User name
    <input type="text" class="GenshiInput__control" placeholder="User name" />
  </label>
  <small class="GenshiInput__helper">Your username must have between 3 and 10 characters.</small>
</div>
```

<div class="GenshiInput">
  <label class="GenshiInput__label">
    User name
    <div class="GenshiInput__field">
      <input type="text" class="GenshiInput__control" placeholder="User name" />
    </div>
  </label>
  <small class="GenshiInput__helper">
    Your username must have between 3 and 10 characters.
  </small>
</div>

## Additional types

This control can also be used for the following other input types:

- Passwords (`type="password"`)
- Email (`type="email"`)
- Number (`type="number"`)
- Telephone (`type="tel"`)
- URL (`type="url"`)
- Search (`type="search"`)
- Datetime (`type="datetime-local"`)
- Date (`type="date"`)
- Time (`type="time"`)
- Color (`type="color"`)
- File (`type="file"`)

<div class="GenshiInput">
  <label class="GenshiInput__label">
    User name
    <div class="GenshiInput__field">
      <input type="text" class="GenshiInput__control" placeholder="User name" />
    </div>
  </label>
</div>
<div class="GenshiInput">
  <label class="GenshiInput__label">
    Password
    <div class="GenshiInput__field">
      <input type="password" class="GenshiInput__control" placeholder="Password" />
    </div>
  </label>
</div>
<div class="GenshiInput">
  <label class="GenshiInput__label">
    Number of episodes
    <div class="GenshiInput__field">
      <input type="number" class="GenshiInput__control" placeholder="Number of episodes" />
    </div>
  </label>
</div>
<div class="GenshiInput">
  <label class="GenshiInput__label">
    Send notifications to this number
    <div class="GenshiInput__field">
      <input type="tel" class="GenshiInput__control" placeholder="Phone number" />
    </div>
  </label>
</div>
<div class="GenshiInput">
  <label class="GenshiInput__label">
    External URL
    <div class="GenshiInput__field">
      <input type="url" class="GenshiInput__control" placeholder="External URL" />
    </div>
  </label>
</div>
<div class="GenshiInput">
  <label class="GenshiInput__label">
    Filter records
    <div class="GenshiInput__field">
      <input type="search" class="GenshiInput__control" placeholder="Search query" />
    </div>
  </label>
</div>
<div class="GenshiInput">
  <label class="GenshiInput__label">
    Publish at
    <div class="GenshiInput__field">
      <input type="datetime-local" class="GenshiInput__control" />
    </div>
  </label>
</div>
<div class="GenshiInput">
  <label class="GenshiInput__label">
    Creation date
    <div class="GenshiInput__field">
      <input type="date" class="GenshiInput__control" />
    </div>
  </label>
</div>
<div class="GenshiInput">
  <label class="GenshiInput__label">
    Send notification at
    <div class="GenshiInput__field">
      <input type="time" class="GenshiInput__control" />
    </div>
  </label>
</div>
<div class="GenshiInput">
  <label class="GenshiInput__label">
    Background color
    <div class="GenshiInput__field">
      <input type="color" class="GenshiInput__control" />
    </div>
  </label>
</div>

To see examples for files, please see [its own page](/form/files)

## Monospace

Apply the `GenshiInput--mono` modifier to the text field in order to render it using monospaced
fonts.

<div class="GenshiInput GenshiInput--mono">
  <label class="GenshiInput__label">
    User name
    <div class="GenshiInput__field">
      <input type="text" class="GenshiInput__control" placeholder="User name" />
    </div>
  </label>
  <small class="GenshiInput__helper">
    Your username must have between 3 and 10 characters.
  </small>
</div>

## Disabled and read only

Add the `disabled` attribute to the `<input>` tag to disable the text field.

<div class="GenshiInput">
  <label class="GenshiInput__label">
    User name
    <input disabled type="text" value="john.doe.2222" class="GenshiInput__control" placeholder="User name" />
  </label>
  <small class="GenshiInput__helper">
    You cannot change the user name more than twice per 90 day period.
  </small>
</div>

You can also add the `readonly` attribute to the `<input>` tag to mark it as read-only.

<div class="GenshiInput">
  <label class="GenshiInput__label">
    User name
    <input type="text" value="john.doe.2222" readonly class="GenshiInput__control" placeholder="User name" />
  </label>
  <small class="GenshiInput__helper">
    You cannot change the user name more than twice per 90 day period.
  </small>
</div>

## Icons

You can add icons to the text field by making sure that the `<input>` field is wrapped in a
`GenshiInput__control` element. Then, attach an SVG with the `GenshiInput__icon` class, either
before or after the input field.

<div class="GenshiCols GenshiCols--cozy">
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      Search
      <div class="GenshiInput__field">
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      <input type="text" class="GenshiInput__control" placeholder="Query" />
      </div>
    </label>
  </div>
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      User name
      <div class="GenshiInput__field">
      <input type="text" class="GenshiInput__control" placeholder="User name" />
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
      </div>
    </label>
  </div>
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      E-mail address
      <div class="GenshiInput__field">
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
      <input type="text" class="GenshiInput__control" placeholder="Email address" />
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
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
      User name
      <div class="GenshiInput__field">
      <input type="text" class="GenshiInput__control" value="john.doe.2222" placeholder="User name" aria-invalid="false" />
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
    </label>
    <small class="GenshiInput__helper">Everything looks valid.</small>
  </div>
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      Search
      <div class="GenshiInput__field">
      <input type="text" class="GenshiInput__control" value="john.doe.2222" placeholder="User name" aria-invalid="true" />
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>      </div>
    </label>
    <small class="GenshiInput__helper">This username is already taken.</small>
  </div>
</div>

## Sizes

Use the `GenshiInput--xs`, `GenshiInput--sm`, `GenshiInput--lg` and `GenshiInput--lg` to alter its
size.

<div class="GenshiStack GenshiStack--v">
  <div class="GenshiInput GenshiInput--xs">
    <label class="GenshiInput__label">
      E-mail address
      <div class="GenshiInput__field">
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
      <input type="text" class="GenshiInput__control" placeholder="Email address" />
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
    </label>
  </div>
  <div class="GenshiInput GenshiInput--sm">
    <label class="GenshiInput__label">
      E-mail address
      <div class="GenshiInput__field">
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
      <input type="text" class="GenshiInput__control" placeholder="Email address" />
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
    </label>
  </div>
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      E-mail address
      <div class="GenshiInput__field">
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
      <input type="text" class="GenshiInput__control" placeholder="Email address" />
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
    </label>
  </div>
  <div class="GenshiInput GenshiInput--lg">
    <label class="GenshiInput__label">
      E-mail address
      <div class="GenshiInput__field">
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
      <input type="text" class="GenshiInput__control" placeholder="Email address" />
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
    </label>
  </div>
  <div class="GenshiInput GenshiInput--xl">
    <label class="GenshiInput__label">
      E-mail address
      <div class="GenshiInput__field">
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
      <input type="text" class="GenshiInput__control" placeholder="Email address" />
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="GenshiInput__icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
    </label>
  </div>
</div>
