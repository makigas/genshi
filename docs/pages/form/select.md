---
layout: ../../layouts/DocLayout.astro

title: Select
---

The select component allows an user to choice from a dropdown list.

<div class="GenshiSelect">
  <label class="GenshiSelect__label">
    Continent
    <select class="GenshiSelect__control">
      <option selected disabled>Pick a continent</option>
      <option>Africa</option>
      <option>America</option>
      <option>Asia</option>
      <option>Europe</option>
      <option>Oceania</option>
    </select>
  </label>
  <small class="GenshiSelect__helper">
    Specify your region in order to show the fastest CDNs in your area.
  </small>
</div>

## List

The select can be rendered as a list with the `multiple` attribute.

<div class="GenshiSelect">
  <label class="GenshiSelect__label">
    Availability zones
    <select class="GenshiSelect__control" multiple size="4">
      <option>Africa</option>
      <option>America</option>
      <option>Asia</option>
      <option>Europe</option>
      <option>Oceania</option>
    </select>
  </label>
  <small class="GenshiSelect__helper">
    Specify the regions where you want the resource to be accessible.
  </small>
</div>

## Disabled

Selects can be disabled using the `disabled` attribute:

<div class="GenshiSelect">
  <label class="GenshiSelect__label">
    Continent
    <select class="GenshiSelect__control" disabled>
      <option disabled>Pick a continent</option>
      <option>Africa</option>
      <option>America</option>
      <option selected>Asia</option>
      <option>Europe</option>
      <option>Oceania</option>
    </select>
  </label>
</div>

Multiple selection lists can be disabled as well.

<div class="GenshiSelect">
  <label class="GenshiSelect__label">
    Availability zones
    <select class="GenshiSelect__control" disabled multiple size="4">
      <option selected>Africa</option>
      <option>America</option>
      <option selected>Asia</option>
      <option selected>Europe</option>
      <option>Oceania</option>
    </select>
  </label>
</div>

## Validation

You can use the `aria-invalid` attribute to set the validity of the component.

<div class="GenshiCols">
  <div class="GenshiSelect">
  <label class="GenshiSelect__label">
    Continent
    <select class="GenshiSelect__control" aria-invalid="false">
      <option disabled>Pick a continent</option>
      <option>Africa</option>
      <option>America</option>
      <option selected>Asia</option>
      <option>Europe</option>
      <option>Oceania</option>
    </select>
  </label>
  <small class="GenshiSelect__helper">
    The resource is available right now.
  </small>
</div>
<div class="GenshiSelect">
  <label class="GenshiSelect__label">
    Continent
    <select class="GenshiSelect__control" aria-invalid="true">
      <option selected disabled>Pick a continent</option>
      <option>Africa</option>
      <option>America</option>
      <option>Asia</option>
      <option selected>Europe</option>
      <option>Oceania</option>
    </select>
  </label>
  <small class="GenshiSelect__helper">
    There are no available resources in that region.
  </small>
</div>
</div>

## Sizes

<div class="GenshiStack GenshiStack--v GenshiStack--gapless">
  <div class="GenshiSelect GenshiSelect--xs">
    <label class="GenshiSelect__label">
      Continent
      <select class="GenshiSelect__control">
        <option selected disabled>Pick a continent</option>
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </label>
    <small class="GenshiSelect__helper">
      Specify your region in order to show the fastest CDNs in your area.
    </small>
  </div>
  <div class="GenshiSelect GenshiSelect--sm">
    <label class="GenshiSelect__label">
      Continent
      <select class="GenshiSelect__control">
        <option selected disabled>Pick a continent</option>
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </label>
    <small class="GenshiSelect__helper">
      Specify your region in order to show the fastest CDNs in your area.
    </small>
  </div>
  <div class="GenshiSelect">
    <label class="GenshiSelect__label">
      Continent
      <select class="GenshiSelect__control">
        <option selected disabled>Pick a continent</option>
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </label>
    <small class="GenshiSelect__helper">
      Specify your region in order to show the fastest CDNs in your area.
    </small>
  </div>
  <div class="GenshiSelect GenshiSelect--lg">
    <label class="GenshiSelect__label">
      Continent
      <select class="GenshiSelect__control">
        <option selected disabled>Pick a continent</option>
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </label>
    <small class="GenshiSelect__helper">
      Specify your region in order to show the fastest CDNs in your area.
    </small>
  </div>
  <div class="GenshiSelect GenshiSelect--xl">
    <label class="GenshiSelect__label">
      Continent
      <select class="GenshiSelect__control">
        <option selected disabled>Pick a continent</option>
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </label>
    <small class="GenshiSelect__helper">
      Specify your region in order to show the fastest CDNs in your area.
    </small>
  </div>
</div>
