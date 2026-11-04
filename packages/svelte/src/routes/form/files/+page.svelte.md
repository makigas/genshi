---
layout: docs
title: File Field
---

<script>
import { FileField } from "$lib";
import { Star, Check, TriangleAlert, Paperclip } from "@lucide/svelte";
</script>

File controls can be used to select files and attach them to forms.

```svelte
import {FileField} from "@makigas/svelte";

<FileField label="Avatar" helper="Select a photo to use as profile picture." />
```

<FileField label="Avatar" helper="Select a photo to use as profile picture." />

## Disabled

Add the `disabled` prop to mark the field as disabled.

<FileField disabled label="Avatar" helper="Select a photo to use as profile picture." />

## Icon

The `FileField` component supports an additional snippet called `iconAfter`, to put an icon at the
end of the input. There is no point on adding an icon at the start due to the nature of this widget.

<FileField label="Avatar" iconAfter={Star} />

## Validation

For validation purposes, you can add the `validation` prop with the value either as `"valid"` or
`"invalid"`.

<FileField label="Avatar" helper="File uploaded correctly." validation="valid" iconAfter={Check} />

<FileField label="Avatar" helper="Wait, why did you upload a WebP file?" validation="invalid" iconAfter={TriangleAlert} />

## Sizes

Use the `size` prop to alter the size of the file field.

<FileField size="xs" label="Avatar" helper="Select a photo to use as profile picture." iconAfter={Paperclip} />

<FileField size="sm" label="Avatar" helper="Select a photo to use as profile picture." iconAfter={Paperclip} />

<FileField size="md" label="Avatar" helper="Select a photo to use as profile picture." iconAfter={Paperclip} />

<FileField size="lg" label="Avatar" helper="Select a photo to use as profile picture." iconAfter={Paperclip} />

<FileField size="xl" label="Avatar" helper="Select a photo to use as profile picture." iconAfter={Paperclip} />
