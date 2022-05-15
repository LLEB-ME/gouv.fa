+++
title="Authenticating into The Farer Group"
+++

Upon joining The Farer Group, you are given a username and password. This username is your legal first initial and full lastname and/or a psuedonym that you provide (example: `dcalderon` and/or `cyckl`). Your username cannot be changed, bar certain exceptions. Passwords are generated [using 1Password's public password generator](https://1password.com/password-generator/) and never stored by Farer server staff.

We use Tailscale to securely connect between devices. [Tailscale cannot decrypt any transmissions](https://tailscale.com/kb/1093/can-tailscale-decrypt-my-traffic/) and [can still allow connections when Tailscale is down.](https://tailscale.com/kb/1091/what-happens-if-the-coordination-server-is-down/) Personal devices should have the `Allow incoming connections` feature unchecked/disabled. The `Use Tailscale DNS settings` feature should be enabled to access Farer services via domain names. **Talks for changing connection methods are in progress, but not to a state to prompt any care or note.**

We use an internal root Certificate Authority (CA) certificate to allow HTTPS traffic on our servers. In lamest terms, this means that we use the same encryption that normal websites do to protect traffic between devices and Farer servers. **This is required for most services,** and [can be installed easily.](https://github.com/farer-group/wiki/blob/main/INSTALL_ROOT_CA.md)

We use GitHub as our identity provider for Tailscale. This means that **you [must have a GitHub account](https://github.com/) to use Farer services.** Contact a Farer staff member to recieve an invite to the [Farer GitHub organisation.](https://github.com/farer-group)

For some services, you may need to create an account out-of-network to use services. We try to avoid this where possible, but it is not always a possibility. Currently, you will only need to do this with [Plex](https://plex.tv); we do not plan to expand this list. Once you have an account, you can request an invite from [`farer+plex@maatt.ch`](mailto:farer+plex@maatt.ch).


