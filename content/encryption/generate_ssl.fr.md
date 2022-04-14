+++
title= "Generating SSL certificates"
+++

Certificates must meet a certain requirement:
- The common name must either be the primary domain being signed or the name of the company or the individual the certificate is being created for.
- The location for certificates used for LLEB services must be the location of planned host, or current host
    - The planned host can be one of the following: `Shitville, Colorado`, `Paris, Ile-De-France`, `Lausanne, Vaud`
    - The current host can only be one of the following: `San Diego, California`, `The Dalles, Oregon`, `San Jose, California`
- The organisation name for LLEB services must be `Haven Municipal` or `Haven Municipal Govt.`
- The common name for LLEB services must be the primary domain being signed with ownership declared to `Haven Municipal`
    - An exemption of signed ownership for servers owned by LLEB; ownership should then be declared to `LLEB`
- The length until expiration must be 730 days or less. This is to prevent issues on Apple devices.

## Using Keychain Access and OpenSSL (recommended)
You will need to import the root CA certificate into Keychain Access. The password for the root certificate is provided upon request to certified signers. You can create a certificate by clicking on Keychain Access in the top-left corner, and selecting "Create a Certificate" under the Certificate Authority tab.

Exporting the certificate will create a PKCS #12 certificate (.p12). This can safely be rewritten as `.pfx` if needed. Servers using NGINX or needing both a certificate and key can use OpenSSL to convert into the proper files by using `openssl pkcs12 -provider default -provider legacy -in CERT.pfx -out FILE.pem` followed by the appropriate flags for stripping a certificate and key (`-nocerts -nodes`)

## Using only OpenSSL
Undocumented.