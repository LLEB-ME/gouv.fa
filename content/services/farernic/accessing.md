+++
title= "Accessing .fa and .farer domains"
aliases=["/N2104"]
date="2022-05-15T03:36:00Z"
+++

## Platform-speicifc guides
- [Firefox](#firefox)
- [Chrome](#chrome)
- [Safari](#safari)

### Firefox
Enter the configuration editor by typing `about:config` into your address bar. Click through the warning and search for `browser.fixup.domainsuffixwhitelist.fa`. Select the `boolean` option and the plus symbol to add the preference. Repeat with a search for `browser.fixup.domainsuffixwhitelist.farer`.

### Chrome
The only method so far is to use Ungoogled Chromium's No-Search search engine. This is inconvenient as your address bar will no longer double as your search bar. An alternative is suffixing your initial visits to `.fa` and `.farer` domains with a `/` (example: typing `gouv.fa/`).

### Safari 
The only method so far is to suffix your initial visits to `.fa` and `.farer` domains with a `/` (example: typing `gouv.fa/`).
