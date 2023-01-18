+++
title= "Alerts"
date= 2022-12-29
+++

## Examples
```html
<fa-alert>
  <span><strong>Heads up!</strong> This is a normal alert that has nothing special, but should still be seen and heard.</span>
</fa-alert>
<fa-alert>
  <span class="f--panic"><strong>Heads up!</strong> This is a significantly more worrisome alert. That's why it's in red!</span>
</fa-alert>
```
<fa-sandbox>
  <fa-alert>
    <span><strong>Heads up!</strong> This is a normal alert that has nothing special, but should still be seen and heard.</span>
  </fa-alert>
  <fa-alert>
    <span class="f--panic"><strong>Heads up!</strong> This is a significantly more worrisome alert. That's why it's in red!</span>
  </fa-alert>
</fa-sandbox>

Colouring an alert is as simple as adding to the inner `<span>` a class correlating to the proper colour ([see documentation related to Colours](/meta/design/colours)).