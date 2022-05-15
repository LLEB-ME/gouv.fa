+++
title= "Generating SSL certificates"
aliases=["/N2101"]
date="2022-05-15T03:36:00Z"
+++

All sites within the Farer network, unless with a valid reason why not, must use TLS 1.2 and HTTP/2 at minimum. To ensure secure communications, **there is only one official root <abbr title="Certificate Authortiy">CA.</abbr>** All users need this certificate to be able to access services and can install it [here](/N2005).

Certificates can only be requested [online via FarerNIC.](https://nic.fa/request-certs)

## Standards for certificate registration
Certificates must meet certain requirements to be given to users. If you receive a certificate that does not comply with this standard, [report where you got it to Farer.](/N4002)
- Official services can only be registered to the following locations:
  - San Diego, California, US
  - San Jose, Calfironia, US
  - Chicago, Illinois, US
  - Paris, Ile-De-France, FR
  - Lausanne, Vaud, CH
- The length until expiration must be 730 days or less.
- The common name must either be the primary domain being signed or the name of the company or the individual the certificate is being for.
