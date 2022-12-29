+++
title= "Colours"
+++

The most common colours are textbook black and white, `#000` and `#fff`, respectively. Other accents may be used from time to time. These can be:

<section class="sandbox">
	<p class="--farer-red">Red— #f65</p>
	<p class="--farer-orange">Orange— #ZZZZZZ</p>
	<p class="--farer-green">Green— #2d7</p>
	<p class="--farer-blue">Blue— #7bf</p>
	<p class="--farer-purple">Purple— #ZZZZZZ</p>
</section>

## Addressing colour contrast
Colours should meet or exceed a contrast ratio of 5:1. To calculate a contrast ratio, use the formula: `(L1 + 0.05) / (L2 + 0.05)`; where:
  - L1 is the relative luminance of the lighter colour,
  - L2 is the relative luminance of the darker colour.

To calculate relative luminance, follow the following rule: `L = 0.2126 * R + 0.7152 * G + 0.0722 * B`; where:
  - R is:
    - `Red value of RGB / 12.92` (if Red value <= 0.03928)
    - `(Red value of RGB + 0.055) / 1.055 ^ 2.4`
  - G is:
    - `Green value of RGB / 12.92` (if Green value <= 0.03928)
    - `(Green value of RGB + 0.055) / 1.055 ^ 2.4`
  - B is:
    - `Blue value of RGB / 12.92` (if Blue value <= 0.03928)
    - `(Blue value of RGB + 0.055) / 1.055 ^ 2.4`

For more information on calculating colour contrast, [see the WCAG 2.0 definition of "color contrast".](https://www.w3.org/TR/WCAG20/#contrast-ratiodef)

## Addressing colour deficiencies and colourblindness
Colours should never be used alone. An individual should be able to understand what something will do without having to rely on the colour of that something. For instance, a cancel button should not just be a red button, but rather should be a red button that is labelled "Cancel X", where "X" is what is being cancelled.

This should not achieved via `aria-label`/`aria-labelledby` solely and should use visual cues wherever and whenever possible.
