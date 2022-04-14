+++
title= "Installing the Root CA certificates"
+++

## Platform-speicifc guides
- [Windows](#windows)
- [macOS](#macos)
- [Firefox](#firefox)
- [iDevices](#idevices)

You can download the root certificate from the public certstore:
- HTTP:  `http://certstore.lleb` ([fallback](https://github.com/LLEB-ME/wiki/blob/main/certstore/ca.cer))
- Samba: `smb://100.111.158.128/Samba/certstore`

### Windows
Double-click on the certificiate and select `Install Certificate...`. You will have to install the certificate twice: once for "Current User" and again for "Local Machine." Select `Place all certificates in the following store`, `Browse...`, and store it in the `Trusted Root Certification Authorities` store. After installing, you will need to restart your computer.

### macOS
Double-click on the certificate or import the certificate into [Keychain Access](https://support.apple.com/en-gb/guide/keychain-access/kyca1083/mac). When prompted, add the certificate to the `login` and `System` keychains. You may have to add the certificate twice. Select the "System" tab and filter to show "Certificates." Right-click on the `Haven Municipal` certificate and select `Get info`. Under the `Trust` tab, select `Always Trust` for when using this certificate. 

### Firefox
**NOTE:** You must install the certificate on your device first. This only works on desktop OSes.

Enter Firefox's advanced preferences (`about:config`) and search for `security.enterprise_roots.enabled` and set the value to `true`.

### iDevices
Open the certificate, then enter the Settings app. Navigate to `General` and scroll to the bottom, selecting on "VPN & Mobile Management" or similar. You will see a new profile labelled `Haven Municipal`, selecting on `Install certificate`. After, go to `General -> About` and scroll to the bottom, selecting "Certificate Settings" or similar. Under "Root certificates", enable `Haven Municipal` for full-trust (also known as allowing to be a Root Certificate).