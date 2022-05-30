+++
title= "Installing the Root CA certificates"
aliases= ["/N2005"]
date= "2022-05-15T03:59:00Z"
+++

Unless with a special exception, all websites in The Farer Group must use at minimum TLS 1.2 and HTTP/2. To ensure secure communications, **there is only one official root <abbr title="Certificate Authortiy">CA.</abbr>** 

**⚠️ The old LLEB CA certificate has been deprecated. The Farer Group will maintain one root CA certificate and only endorse this certificate. Use other CA certificates at your own risk.**

You can download the root certificate from the public certstore:
- HTTP: `http://certstore.fa` ([fallback](https://github.com/lleb-me/wiki/blob/main/static/certstore/rootca.cer))

## Platform-speicifc guides
- [Windows](#windows)
- [macOS](#macos)
- [Linux](#linux)
- [Firefox](#firefox)
- [Chrome OS](#chrome-os)
- [Android](#android)
- [iDevices](#idevices)

### Windows
Double-click on the certificiate and select `Install Certificate...`. You will have to install the certificate twice: once for "Current User" and again for "Local Machine." Select `Place all certificates in the following store`, `Browse...`, and store it in the `Trusted Root Certification Authorities` store. After installing, you will need to restart your computer.

### macOS
Double-click on the certificate or import the certificate into [Keychain Access](https://support.apple.com/en-gb/guide/keychain-access/kyca1083/mac). When prompted, add the certificate to the `login` and `System` keychains. You may have to add the certificate twice. Select the "System" tab and filter to show "Certificates." Right-click on the `The Farer Group` certificate and select `Get info`. Under the `Trust` tab, select `Always Trust` for when using this certificate. 

### Linux
Create a directory for foreign CA certificates if one doesn't already exits (`sudo mkdir /usr/local/share/ca-certificates/extra`). Copy the CA certificate to this directory and update your `/etc/ca-certificates.conf`. (`sudo update-ca-certificates`)

### Firefox
**NOTE:** You must install the certificate on your device first. This only works on desktop OSes.

Enter Firefox's advanced preferences (`about:config`) and search for `security.enterprise_roots.enabled` and set the value to `true`.

## Chrome OS
**NOTE:** This does not apply to Google Chrome. See the host operating system for installing for that device.

Enter Chrome's settings and search for "Manage certificates." Under the "Authorities" tab, select `Import` and navigate to the root certificate.

## Android
Open the certificate, then enter the Settings app. Some distributions of Android may vary in which directory to follow to ensure the status of trust for the certificate. Most users will navigate to `Security -> Trusted Credentials -> User` to be able to check this.

### iDevices
Open the certificate, then enter the Settings app. Navigate to `General` and scroll to the bottom, selecting on "VPN & Mobile Management" or similar. You will see a new profile labelled `The Farer Group`, selecting on `Install certificate`. After, go to `General -> About` and scroll to the bottom, selecting "Certificate Settings" or similar. Under "Root certificates", enable `The Farer Group` for full-trust (also known as allowing to be a Root Certificate).