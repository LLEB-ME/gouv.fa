+++
title="Services and how connections are handled"
aliases=["/N2004"]
+++

Some public websites do not behave in the convential method. There are certain cases where this is possible:
- **the site owner is a part of Farer, and hosts a version for Farer.**
- **Farer hosts a live copy of that site with a notice banner.** In these instances, a method to easily access the official website that isn't mirrored must be possible.
- **the site is made for internal usage only.** These are any domains that end in `.fa`. You may link to them outside of the network, but only those connected to Farer will be able to access that website.

When connecting to a site with both internal and external servers, Farer will try connecting to the internal server first. If this doesn't work or if the server is down, it will fallback onto the external server. If both fail, then the website is down.

## Benefits of in-house hosting
This allows members to safely provide services to Farer members, as well as offer benefits for Farer members that would not necessarily be possible on the open web. It also allows end-users to use the most private version of those websites, due to the strict rules behind FarerNIC hosting and domains, as well as policies that may come in the future for other sites targeted for in-network users.
