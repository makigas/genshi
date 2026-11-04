---
layout: ../../layouts/DocLayout.astro

title: Checkbox
---

The checkbox component.

```html
<div class="GenshiInput">
  <label class="GenshiInput__label">
    <input type="checkbox" name="subscribe_to_updates" class="GenshiInput__control" />
    Subscribe to updates
  </label>
  <small class="GenshiInput__helper">
    You will receive changes to this content in your e-mail.
  </small>
</div>
```

<div class="GenshiStack GenshiStack--v GenshiStack--gapless">
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      <input type="checkbox" checked name="subscribe_to_updates" class="GenshiInput__control" />
      Subscribe to updates
    </label>
    <small class="GenshiInput__helper">
      You will receive changes to this content in your e-mail.
    </small>
  </div>
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      <input type="checkbox" class="GenshiInput__control" />
      Receive marketing promotions
    </label>
    <small class="GenshiInput__helper">
      Prepare your inbox.
    </small>
  </div>
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      <input type="checkbox" disabled class="GenshiInput__control" />
      Subscribe to updates
    </label>
    <small class="GenshiInput__helper">
      Not available at this moment.
    </small>
  </div>
</div>

## Validation

Checkboxes may also be valid or invalid.

<div class="GenshiCols GenshiCols--cozy">
  <div class="GenshiStack GenshiStack--v GenshiStack--gapless">
    <div class="GenshiInput">
      <label class="GenshiInput__label">
        <input type="checkbox" class="GenshiInput__control" checked aria-invalid="false" />
        I have read the terms and conditions
      </label>
      <small class="GenshiInput__helper">
        Thank you for reading the legal texts.
      </small>
    </div>
    <div class="GenshiInput">
      <label class="GenshiInput__label">
        <input type="checkbox" class="GenshiInput__control" aria-invalid="true" />
        I have read the terms and conditions
      </label>
      <small class="GenshiInput__helper">
        Please, take a minute to read the conditions.
      </small>
    </div>
  </div>
  <div class="GenshiStack GenshiStack--v GenshiStack--gapless">
    <div class="GenshiInput">
      <label class="GenshiInput__label">
        <input type="checkbox" class="GenshiInput__control" aria-invalid="false" />
        Send me marketing updates
      </label>
      <small class="GenshiInput__helper">
        Ok, we won't bother you with the updates.
      </small>
    </div>
    <div class="GenshiInput">
      <label class="GenshiInput__label">
        <input type="checkbox" class="GenshiInput__control" checked aria-invalid="true" />
        Send notification to Discord
      </label>
      <small class="GenshiInput__helper">
        The integration has not been configured.
      </small>
    </div>
  </div>
</div>

## Component sizes

<div class="GenshiStack GenshiStack--v GenshiStack--gapless">
  <div class="GenshiInput GenshiInput--xs">
    <label class="GenshiInput__label">
      <input type="checkbox" checked name="subscribe_to_updates" class="GenshiInput__control" />
      Subscribe to updates
    </label>
    <small class="GenshiInput__helper">
      You will receive changes to this content in your e-mail.
    </small>
  </div>
  <div class="GenshiInput GenshiInput--sm">
    <label class="GenshiInput__label">
      <input type="checkbox" checked name="subscribe_to_updates" class="GenshiInput__control" />
      Subscribe to updates
    </label>
    <small class="GenshiInput__helper">
      You will receive changes to this content in your e-mail.
    </small>
  </div>
  <div class="GenshiInput">
    <label class="GenshiInput__label">
      <input type="checkbox" checked name="subscribe_to_updates" class="GenshiInput__control" />
      Subscribe to updates
    </label>
    <small class="GenshiInput__helper">
      You will receive changes to this content in your e-mail.
    </small>
  </div>
  <div class="GenshiInput GenshiInput--lg">
    <label class="GenshiInput__label">
      <input type="checkbox" checked name="subscribe_to_updates" class="GenshiInput__control" />
      Subscribe to updates
    </label>
    <small class="GenshiInput__helper">
      You will receive changes to this content in your e-mail.
    </small>
  </div>
  <div class="GenshiInput GenshiInput--xl">
    <label class="GenshiInput__label">
      <input type="checkbox" checked name="subscribe_to_updates" class="GenshiInput__control" />
      Subscribe to updates
    </label>
    <small class="GenshiInput__helper">
      You will receive changes to this content in your e-mail.
    </small>
  </div>
</div>
