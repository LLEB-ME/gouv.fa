Currently, we use CoreDNS [1], a DNS server written in Golang. We utilise the `bind` plugin, which uses RFC 1035 § 5 [2] and RFC 1034 § 3.6.1 [3], originally used by the Berkeley Internet Name Domain (BIND) software package. In other words, we use a solution that has been compatible with BIND's offerings since day zero of `FA.` and `FARER.` propagation.

I am proposing that we migrate to using BIND, in place of CoreDNS, with the main appeal being that there is little friction in such a movement and greater security support in being close to the standard for zone files in the first place.

The original idea for CoreDNS, apart from being standard-compliant, is that we were able to use plugins such as `mysql` [4] and `pdsql` [5] or create a plugin for interoperation with PostgreSQL so that NIC.FA. can propagate domains without having to modify zone files and instead modify a database-backed by zone files. Although BIND 9 still lacks support for other solutions, using a DLZ module [6] could prove to be fruitful.

BIND's documentation is deep and the number of resources surrounding it is seemingly limitless given the prevalence of it as a utility, which should allow any future changes like DNSSEC or similar to be relatively pain-free.

---

This proposal was drafted by Matthew RONCHETTO on 2023-04-04. This document will be signed by with PGP key [7].

--- --- ---
[1]: https://coredns.io/
[2]: https://datatracker.ietf.org/doc/html/rfc1035#autoid-48
[3]: https://datatracker.ietf.org/doc/html/rfc1034#autoid-14
[4]: https://github.com/cloud66-oss/coredns_mysql
[5]: https://github.com/wenerme/coredns-pdsql
[6]: https://kb.isc.org/docs/aa-00995
[7]: https://maatt.fr/key