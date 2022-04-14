+++
title="Authenticating into LLEB services"
+++

Upon joining the LLEB network, you are given a username and password. This username usually reflects either your legal name or a psuedonym that you provide (example: `dcalderon` or `cyckl`). Your username cannot be changed, bar certain exceptions. Passwords are generated [using 1Password's public password generator](https://1password.com/password-generator/) and never stored by LLEB staff.

We use Tailscale to securely connect between devices. [Tailscale cannot decrypt any transmissions](https://tailscale.com/kb/1093/can-tailscale-decrypt-my-traffic/) and [can still allow connections when Tailscale is down.](https://tailscale.com/kb/1091/what-happens-if-the-coordination-server-is-down/) Personal devices should have the `Allow incoming connections` feature unchecked/disabled. The `Use Tailscale DNS settings` feature should be enabled to access LLEB services via domain names.

We use an internal root Certificate Authority (CA) certificate to allow HTTPS traffic on our servers. In lamest terms, this means that we use the same encryption that normal websites do to protect traffic between devices and LLEB servers. **This is required for most services,** and [can be installed easily.](https://github.com/LLEB-ME/wiki/blob/main/INSTALL_ROOT_CA.md)

We use GitHub as our identity provider for Tailscale. This means that **you [must have a GitHub account](https://github.com/) to use LLEB services.** Contact a LLEB staff member to recieve an invite to the [LLEB GitHub organisation.](https://github.com/lleb-me)

For some services, you may need to create an account out-of-network to use services. We try to avoid this where possible, but it is not always a possibility. Currently, you will only need to do this with [Plex](https://plex.tv); we do not plan to expand this list. Once you have an account, you can request an invite from [`lleb@maatt.ch`](mailto:lleb@maatt.ch).

## Changing your password
As of 21 March, 2022, you must write the manager of the service to change your password if a self-service option is not provided via the service.

The following services allow you change your password without the help of a staff member:
- Cachet
- Calibre
- our Git Service (coming soon)
- GitHub
- Plex (via `https://app.plex.tv`)

## Deleting your LLEB credentials
Leaving the LLEB network is not recommended, even if you plan not to use it anymore. Membership is once-per-life, meaning leaving is possible, but re-joining is not. Exceptions are not possible to this rule. Upon your ultimate decision to leave the LLEB network, you can [request to delete your Tailscale account](https://tailscale.com/contact/support/), [uninstall Tailscale](https://tailscale.com/kb/1069/uninstall/?q=uninstall), and [delete your GitHub account.](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/deleting-your-user-account) To delete any data stored on you, please request directly to a LLEB staff member.
