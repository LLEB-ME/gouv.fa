+++
title= "Navigation"
date= 2022-12-29
+++

Navigation bars, commonly navbars, should only be used for critical navigation. These are fixed to the top of the page and act as a ribbon.

An example of a proper navigation bar is available on this website with its navigation bar.

Footers have a near identical design to the navigation bars. The difference is how the contents are laid out. Both elements have:
  - a black (#000) background and white (#fff) text
  - padding of 32px on the top and bottom and 48px on the left and right of the container (`<footer>`)
  - have a margin of 0 on the top and bottom and `auto` on the left and right of the inner element (`<div>` inside `<footer>`)
  - a max width of 60% of the browser window, if the client is wider than 800px, on the inner element (`<div>` inside `<footer>`)

Unlike navbars, footers stack their content vertically by default and do not expand horizontally on a bigger screen.

Navigation bars have specific criteria, namely:
  - normal (400) font weight for all text except the main link (eg. home button) and language switcher (these use bold, 700),
  - the logo and navigation elements are split using `space-between` seperation, if the client is wider than 800px, on the inner element (`<nav>` inside `<header>`); otherwise, the children of `<nav>` are stacked vertically.

## Making a home button accessible
Most home buttons will use an inline SVG, rather than embedding a file, preventing the developer from using an alternative text label that is commonly used. The solution to this is simple:
  1. Add a `aria-label` to the parent `<a>`— for a home page, this label can be something such as "Link to homepage". Ensure that the `<a>` element has an ID (`<a id="..." ...>`)
  2. Add a `aria-labelledby` to the `<svg>` element, setting the value to the ID value of the parent `<a>` (`<svg aria-labelledby="..." ...>`)  

This label should not replace the `title` attribute for the `<a>` element, but rather compliment it. 