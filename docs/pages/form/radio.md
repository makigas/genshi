---
layout: ../../layouts/Layout.astro
---

# Radio button

The radio button component.

```html
<div class="GenshiInput">
  <label class="GenshiInput__label">
    <input type="radio" name="update" value="now" class="GenshiInput__control" />
    Install update now
  </label>
  <small class="GenshiInput__helper">The application will be restarted.</small>
</div>
```

<div class="GenshiStack GenshiStack--v">
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      <input type="radio" checked name="update" value="now" class="GenshiInput__control" />
      Install update now
    </label>
    <small class="GenshiInput__helper">
      The application will be restarted.
    </small>
  </div>
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      <input type="radio" name="update" value="later" class="GenshiInput__control" />
      Install when the app is closed
    </label>
    <small class="GenshiInput__helper">
      The update will be available on next launch.
    </small>
  </div>
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      <input type="radio" disabled class="GenshiInput__control" />
      Don't install the update
    </label>
    <small class="GenshiInput__helper">
      Option not available for users of the free edition.
    </small>
  </div>
</div>

## Validation

Radio buttons may be valid or invalid.

<div class="GenshiStack GenshiStack--c">
  <div class="GenshiStack GenshiStack--v">
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
  <div class="GenshiStack GenshiStack--v">
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

## Component sizes

<div class="GenshiStack GenshiStack--v">
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
