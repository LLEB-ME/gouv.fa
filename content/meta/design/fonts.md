+++
title= "Fonts to use"
date= 2022-12-28
+++

There are two fonts that should be used:
  - **Overpass—** intended for all text that isn't code or similar. This can be linked via `https://gouv.fa/assets/overpass.css`.
  - **JetBrains Mono—** intended for code or other scenarios where a monospace font makes sense. This can be linked via `https://gouv.fa/assets/jetbrains-mono.css`

Fonts should be set to:
  - a base font size of 1.075rem (about 13px)
  - a line height of 1.3
  - have a proper fallback (`"Overpass", sans-serif`, `"JetBrains Mono", monospace`)

## Variable fonts
When loading fonts in browsers, support for variable fonts should be made where possible. These fonts are usually significantly smaller than the several WOFF files needed to load fonts normally. Support can be added by adding something similar to this in your stylesheet:

```css
html,
body {
  font-family: "Overpass", sans-serif;
}
pre, code { font-family: "JetBrains Mono", monospace; }
@supports (font-variation-settings: "wdth" 115) {
  html, body { font-family: "Overpass VF", "Overpass", sans-serif; }
  pre, code { font-family: "JetBrains Mono VF", "JetBrains Mono", monospace; }
}
```

Variable fonts are available within the same CSS files as their normal counterparts, provided above.

## Use the provided font hosting
To help reduce the amount of requests needed for all users, it's recommended that you use the provided font hosting, rather than self-host the font, so that a user is more likely to have not only the stylesheet but the fonts cached prior. This also helps lessen the load your server may have.
