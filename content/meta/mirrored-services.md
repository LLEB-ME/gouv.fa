+++
title= "Mirrored services and how they work"
+++

Some public websites do not behave in the conventional method. There are certain cases where this is possible:
- **The site owner is a part of Farer, and hosts a version for Farer.**
- **Farer hosts a live copy of that site with a banner of notice.** In these instances, a method to easily access the official website that isn't mirrored must be possible.
- **The site is made for internal usage only.** These are any domains that end in `.fa`. You may link to them outside of the network, but only those connected to Farer will be able to access that website.

When connecting to a site with both internal and external servers, Farer will try connecting to the internal server first. If this doesn't work or if the server is down, it will fall back onto the external server. If both fail, then the website is down.

We use Tailscale to securely connect between devices. [Tailscale cannot decrypt any transmissions](https://tailscale.com/kb/1093) and [can still allow connections when Tailscale is down.](https://tailscale.com/kb/1091) Personal devices should have the `Allow incoming connections` feature unchecked/disabled. The `Use Tailscale DNS settings` feature should be enabled to access Farer services via domain names. **Talks for changing connection methods are in progress, but not to a state to prompt any care or note.**

We use an internal root Certificate Authority (CA) certificate to allow HTTPS traffic on our servers. In lamest terms, this means that we use the same encryption that normal websites do to protect traffic between devices and Farer servers. **This is required for most services,** and [can be installed easily.](/services/root-ca)

We use GitHub as our identity provider for Tailscale. This means that **you [must have a GitHub account](https://github.com/) to use Farer services.** Contact a Farer staff member to receive an invite to the [Farer GitHub organisation.](https://github.com/farer-group)

## Benefits of in-house hosting
This allows members to safely provide services to Farer members, as well as offer benefits for Farer members that would not necessarily be possible on the open web. It also allows end-users to use the most private version of those websites, due to the strict rules behind FarerNIC hosting and domains, as well as policies that may come in the future for other sites targeted at in-network users.
