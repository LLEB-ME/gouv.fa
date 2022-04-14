+++
title= "Feed Readers and You"
+++

For those who don't know what RSS, feed readers, or feeds are, [we recommend Nicky Case's "Back to the Future with RSS"](https://ncase.me/rss/) as an introduction.

## Feed reader service via LLEB
We host an instance of [Miniflux](https://miniflux.app) with the following APIs allowed: Miniflux, Fever API, and Google Reader/Greader API. This means you can use just about any feed reader with this server. We currently only auto-subscribe users to the LLEB RSS feed. You can delete this whenever. As of 8 April, 2022, you must request an account to be able to use the service. Planned integration with our single sign-on service is on roadmap with no release estimate.

We recommend the following clients:
- [NetNewsWire](https://netnewswire.com) for MacOS and iOS
- [NewsFlash](https://flathub.org/apps/details/com.gitlab.newsflash) for Linux and Linux-based phones

We do not yet have recommendations for Windows, Linux TUI, or Android. You can make suggestions with [a GitHub issue.](https://github.com/lleb-me/wiki/issues/new)

You can access Miniflux and enable whichever APIs that you need for your clients at [`news.lleb`](https://news.lleb).

## Feed proxies via LLEB
We cache some major feeds. You can request [with a GitHub issue](https://github.com/lleb-me-wiki/issues/new) more feeds to be added within reason. We do not allow caching feeds that void [our contribution policy](/CONTRIBUTION_POLICY.md), [our terms of membership](/MEMBERSHIP.md), or that is notoriously a poor source of information.

We cache:
- [Axios](https://axios.com)
    Official feed: `https://api.axios.com/feed/`
    Internal feed: `https://rss.lleb/axios.rss`
- [European Commission](https://ec.europa.eu)
    Official feed: `https://ec.europa.eu/commission/presscorner/api/rss?latestnews?language=en&ts=1649465082939`
    Internal feed: `https://rss.lleb/ec-europa`
- [European Parliament](https://europarl.europa.eu)
    Official feed: `https://www.europarl.europa.eu/rss/doc/press-releases/en.xml`
    Internal feed: `https://rss.lleb/europarl`
- [France 24](https://france24.com)
    Official feed: `https://www.france24.com/en/rss`
    Internal feed: `https://rss.lleb/france24-en`
- [France 24 (Français)](https://france24.com/fr)
    Official feed: `https://www.france24.com/fr/rss`
    Internal feed: `https://rss.lleb/france24-fr`
- [KPBS](https://kpbs.org)
    Official feed: `https://www.kpbs.org/index.rss`
    Internal feed: `https://rss.lleb/kpbs.rss`
- [LLEB](https://gov.lleb)
    Official feed: `https://gov.lleb/atom.xml`
- [Matthew Ronchetto](https://maatt.ch)
    Official feed: `https://maatt.ch/atom.xml`
    Internal feed: `https://rss.lleb/mronchetto.rss`
    