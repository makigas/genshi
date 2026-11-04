---
layout: ../../layouts/DocLayout.astro

title: Radio button
---

The radio button component. When multiple options are available, typically accessible forms do the
following:

- They wrap all the possible options for that same group into a `<fieldset>` or a div with the role
  set to `radiogroup`.
- The radios will have the name set to a common value, so that only one of the possible options can
  be picked.

To style the fieldset, you mark it with the class `GenshiRadioGroup`. Each separate radio button can
continue using the `GenshiInput` class, with `__label`, `__control` and `__helper` as elements.

```html
<fieldset class="GenshiRadioGroup">
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      <input type="radio" name="update" value="now" class="GenshiInput__control" />
      Install update now
    </label>
    <small class="GenshiInput__helper">The application will be restarted.</small>
  </div>
  <fieldset class="GenshiRadioGroup"></fieldset>
</fieldset>
```

<fieldset class="GenshiRadioGroup">
  <legend>Install updates</legend>
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      <input type="radio" name="update" value="now" class="GenshiInput__control" />
      Install update now
    </label>
    <small class="GenshiInput__helper">
      The application will be restarted.
    </small>
  </div>
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      <input type="radio" checked name="update" value="later" class="GenshiInput__control" />
      Install when the app is closed
    </label>
    <small class="GenshiInput__helper">
      The update will be available on next launch.
    </small>
  </div>
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      <input type="radio" name="update" value="never" disabled class="GenshiInput__control" />
      Don't install the update
    </label>
    <small class="GenshiInput__helper">
      Option not available for users of the free edition.
    </small>
  </div>
</fieldset>

## Inline mode

If you don't plan on adding helpers, your field set will still look vertical by default.

<fieldset class="GenshiRadioGroup">
  <legend>Install updates</legend>
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      <input type="radio" checked name="updateVertical" value="now" class="GenshiInput__control" />
      Install update now
    </label>
  </div>
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      <input type="radio" name="updateVertical" value="later" class="GenshiInput__control" />
      Install when the app is closed
    </label>
  </div>
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      <input type="radio" disabled name="updateVertical" value="never" class="GenshiInput__control" />
      Don't install the update
    </label>
  </div>
</fieldset>

However, this can be changed by applying the `--inline` modifier to the `GenshiRadioGroup`:

<fieldset class="GenshiRadioGroup GenshiRadioGroup--inline">
  <legend>Install updates</legend>
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      <input type="radio" checked name="updateHorizontal" value="now" class="GenshiInput__control" />
      Install now
    </label>
  </div>
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      <input type="radio" name="updateHorizontal" value="later" class="GenshiInput__control" />
      Install later
    </label>
  </div>
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      <input type="radio" disabled name="updateHorizontal" value="never" class="GenshiInput__control" />
      Don't install
    </label>
  </div>
</fieldset>

## Validation

Radio buttons may be valid or invalid.

<div class="GenshiCols GenshiCols--cozy">
  <div class="GenshiStack GenshiStack--v GenshiStack--gapless">
    <div class="GenshiInput">
      <label class="GenshiInput__label">
        <input type="radio" class="GenshiInput__control" checked name="invalid1" value="a" aria-invalid="false" />
        Vegetarian menu
      </label>
      <small class="GenshiInput__helper">
        The kitchen is still open.
      </small>
    </div>
    <div class="GenshiInput">
      <label class="GenshiInput__label">
        <input type="radio" class="GenshiInput__control" aria-invalid="true" name="invalid1" value="b" />
        Non-vegetarian menu
      </label>
      <small class="GenshiInput__helper">
        We've run out of ingredients.
      </small>
    </div>
  </div>
  <div class="GenshiStack GenshiStack--v GenshiStack--gapless">
    <div class="GenshiInput">
      <label class="GenshiInput__label">
        <input type="radio" class="GenshiInput__control" aria-invalid="false" name="invalid2" value="a" />
        Pay now
      </label>
      <small class="GenshiInput__helper">
        Your credit card is connected.
      </small>
    </div>
    <div class="GenshiInput">
      <label class="GenshiInput__label">
        <input type="radio" class="GenshiInput__control" checked aria-invalid="true" name="invalid2" value="b" />
        Pay later
      </label>
      <small class="GenshiInput__helper">
        Your bank doesn't currently allow this.
      </small>
    </div>
  </div>
</div>

However, you don't usually mark individual options as invalid. Typically, you mark an entire
fieldset as invalid.

<fieldset class="GenshiRadioGroup" aria-invalid="true">
  <legend>Install updates</legend>
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      <input type="radio" name="updateInvalid" value="now" class="GenshiInput__control" />
      Install update now
    </label>
  </div>
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      <input type="radio" checked name="updateInvalid" value="later" class="GenshiInput__control" />
      Install when the app is closed
    </label>
  </div>
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      <input type="radio" disabled name="updateInvalid" value="never" class="GenshiInput__control" />
      Don't install the update
    </label>
  </div>
  <small class="GenshiRadioGroup__helper">
    Please, install the update now.
  </small>
</fieldset>

## Component sizes

<div class="GenshiStack GenshiStack--v GenshiStack--gapless">
  <div class="GenshiInput GenshiInput--xs">
    <label class="GenshiInput__label">
      <input type="radio" checked name="update2" value="1" class="GenshiInput__control" />
      Install update now
    </label>
    <small class="GenshiInput__helper">
      The application will be restarted.
    </small>
  </div>
  <div class="GenshiInput GenshiInput--sm">
    <label class="GenshiInput__label">
      <input type="radio" name="update2" value="2" class="GenshiInput__control" />
      Install update now
    </label>
    <small class="GenshiInput__helper">
      The application will be restarted.
    </small>
  </div>
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      <input type="radio" name="update2" value="3" class="GenshiInput__control" />
      Install update now
    </label>
    <small class="GenshiInput__helper">
      The application will be restarted.
    </small>
  </div>
  <div class="GenshiInput GenshiInput--lg">
    <label class="GenshiInput__label">
      <input type="radio" name="update2" value="4" class="GenshiInput__control" />
      Install update now
    </label>
    <small class="GenshiInput__helper">
      The application will be restarted.
    </small>
  </div>
  <div class="GenshiInput GenshiInput--xl">
    <label class="GenshiInput__label">
      <input type="radio" name="update2" value="5" class="GenshiInput__control" />
      Install update now
    </label>
    <small class="GenshiInput__helper">
      The application will be restarted.
    </small>
  </div>
</div>
