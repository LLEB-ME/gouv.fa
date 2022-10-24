+++
title="Make Farer Easier to Access in Browsers"
aliases=["/N2006"]
+++

## Firefox (Desktop)
1. Go to [`about:config`](about:config) and click "Accept the Risk and Continue"
2. Type `browser.fixup.domainsuffixwhitelist.fa` in the "Search preference name" field and press the plus button to add a new boolean key.
3. Type `browser.fixup.domainsuffixwhitelist.farer` in the "Search preference name" field and press the plus button to add a new boolean key.

## Chrome (Desktop)
[Chromium developers has confirmed that they will not allow private TLDs in Chrome/Chromium.](https://bugs.chromium.org/p/chromium/issues/detail?id=30636) We recommend:
  - switching to another web browser,
  - adding a NoSearch search engine (see [Ungoogled Chromium](https://github.com/ungoogled-software/ungoogled-chromium)); or:
  - appending a `/` after each web query (type `gouv.fa/`)

## Safari
Safari does not support private TLDs. We recommend:
  - switching to another web browser; or:
  - appending a `/` after each web query (type `gouv.fa/`)

Other browsers may have support for private TLDs, but we do not have documentation for such.