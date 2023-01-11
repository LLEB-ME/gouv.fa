+++
title= "Installing the root certificate"
+++

To access Farer services with an encrypted connection, you need to install the Farer root certificate. Guests and members use the same root certificate to access services.

<a href="http://gouv.fa/certstore/rootca.cer"><button>Download the root certificate</button></a><br/>
Alternatively, [download the certificate from GitHub.](https://github.com/farergroup/wiki/blob/main/static/certstore/rootca.cer)

## Platform-specific guides
- [Windows](#windows)
- [macOS](#macos)
- [Linux](#linux)
- [Desktop web browsers](#browsers)
- [Android](#android)
- [iDevices](#idevices)

### Windows
1. Download the certificate above.
2. Double-click on the certificate and select `Install Certificate...`. Select the "Current User" option.
3. Select `Place all certificates in the following store`, `Browse...`, and store it in the `Trusted Root Certification Authorities` store.
4. Repeat steps 2 and 3 for "Local Machine."

After installing, you will need to restart your computer.

### macOS
**Automatically:** Download the configuration profile below. Then, open System Preferences and navigate to `Profiles` and select `The Farer Group Root CA`. Select `Install`. You may have to manually trust it using Keychain Access (the instructions for such are in the "Manually" section).

<a href="http://gouv.fa/certstore/FarerGroupCA.mobileconfig"><button>Download the Apple configuration profile</button></a><br/>
Alternatively, [download the profile from GitHub.](https://github.com/farergroup/wiki/blob/main/static/certstore/FarerGroupCA.mobileconfig)

**Manually:**
1. Download the certificate above.
2. Double-click on the certificate or import the certificate into [Keychain Access](https://support.apple.com/en-gb/guide/keychain-access/kyca1083/mac). When prompted, add the certificate to the `System` keychain.
3. Select the "System" tab and filter to show "Certificates."
4. Right-click on the `The Farer Group` certificate and select `Get info`.
5. Under the `Trust` tab, select `Always Trust` when using this certificate. 
6. Repeat steps 2 through 5 for the `login` keychain.

After installing, you may need to restart your computer.

### Linux
1. Download the certificate above.
2. Create a directory for foreign CA certificates, if one doesn't already exists (`sudo mkdir /usr/local/share/ca-certificates/extra`).
3. Copy the CA certificate to this directory and update your `/etc/ca-certificates.conf`. (`sudo update-ca-certificates`)

### Browsers
**NOTE:** You must install the certificate on your device first. This only works on desktop OSes.

- **Firefox:** Enter Firefox's advanced preferences (`about:config`) and search for `security.enterprise_roots.enabled` and set the value to `true`.
- **Chrome/Chromium browsers:** Enter Chrome's settings and search for "Manage certificates." Under the "Authorities" tab, select `Import` and navigate to the root certificate.

Firefox users should also add `browser.fixup.domainsuffixwhitelist.fa` and `browser.fixup.domainsuffixwhitelist.farer`, set to `true`, in the advanced preferences to make it easier to access Farer domains. Currently, Safari and Chrome do not have similar solutions: add a `/` to the end of domains (type `gouv.fa/` to go to `https://gouv.fa`)

## Android
After downloading, open the certificate. Some distributions of Android may vary in which directory to follow to ensure the status of trust for the certificate. Most users will navigate to `Security -> Trusted Credentials -> User` to be able to check this.

### iDevices
**Automatically:** Download the configuration profile below. Then, open System Preferences and navigate to `Profiles` and select `The Farer Group Root CA`. Select `Install`. You may have to manually trust it using Keychain Access (the instructions for such are in the "Manually" section).

<a href="http://gouv.fa/certstore/FarerGroupCA.mobileconfig"><button>Download the Apple configuration profile</button></a><br/>
Alternatively, [download the profile from GitHub.](https://github.com/farergroup/wiki/blob/main/static/certstore/FarerGroupCA.mobileconfig)

**Manually:**
1. Download the certificate above.
2. Open the certificate, then enter the Settings app.
3. Navigate to `General` and scroll to the bottom, selecting "VPN & Mobile Management" or similar. You will see a new profile labelled `The Farer Group`, selecting `Install certificate`.
4. After, go to `General -> About` and scroll to the bottom, selecting "Certificate Settings" or similar. Under "Root certificates", enable `The Farer Group` for full trust (also known as allowing to be a Root Certificate).
