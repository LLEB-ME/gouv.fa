+++
title= "Buttons"
date= 2022-12-28
+++

Buttons are designed to be friendly and usable in most any situation.

<section class="sandbox">
	<a href="#" class="btn">Default button</a>
	<a href="#" class="btn submit">Submission button</a>
	<a href="#" class="btn cancel">Cancellation button</a>
</section>

[Like links,](/meta/design/links) buttons should have enough text so that someone can read or hear what the button is labelled and understand what the button does. It should be more than "Read more", but should generally not exceed 30 characters.

## Implementing a button
Buttons should meet the following criteria:
  - a padding of 6px on the top and bottom of the inner text
  - a padding of 10px on the left and right of the inner text
  - a border of 2px that is `rgba(0, 0, 0, 0.2)`
  - a font weight of 600
  - a border radius of 8px

The following should change when hovering:
  - a bottom border of 4px to 2px
  - a top margin of 0px to 2px

The following should change when clicking or using the `:active` state:
  - a background of `rgba(0, 0, 0, 0.1)`

---

[View the stylesheet for buttons.](https://github.com/farergroup/design-system/blob/main/button.scss)
