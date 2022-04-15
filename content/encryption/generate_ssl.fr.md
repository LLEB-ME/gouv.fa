+++
title= "Génération de certificats SSL"
+++

Les certificats SSL doivent répondre à une certaine exigence:
- Le nom commun doit être soit le domaine principal signé, soit le nom de la société ou de la personne pour laquelle le certificat est créé.
- L'emplacement des certificats utilisés pour les services LLEB doit être l'emplacement de l'hôte planifié ou de l'hôte actuel :
    - L'hôte prévu peut être l'un des suivants: `Shitville, Colorado`, `Paris, Ile-De-France`, `Lausanne, Vaud`
    - L'hôte actuel ne peut être que l'un des suivants: `San Diego, California`, `The Dalles, Oregon`, `San Jose, California`
- Le nom de l'organisation pour les services LLEB doit être `Haven Municipal` ou `Haven Municipal Govt.`
- Le nom commun des services LLEB doit être le domaine principal signé avec la propriété déclarée à `Haven Municipal`
    - Une exemption de propriété signée pour les serveurs appartenant à LLEB; la propriété doit alors être déclarée à `LLEB`
- La durée jusqu'à l'expiration doit être de 730 jours ou moins. Ceci afin d'éviter les problèmes sur les appareils Apple.

## Utilisation de Keychain Access et OpenSSL (recommandé)
Vous devrez importer le certificat d'autorité de certification racine dans Keychain Access. Le mot de passe du certificat racine est fourni sur demande aux signataires certifiés. Vous pouvez créer un certificat en cliquant sur Trousseau d'accès dans le coin supérieur gauche et en sélectionnant « Create a Certificate » sous l'onglet Autorité de certification.

L'exportation du certificat créera un certificat PKCS #12 (.p12). Cela peut être réécrit en toute sécurité en tant que '.pfx' si nécessaire. Les serveurs utilisant NGINX ou ayant besoin à la fois d'un certificat et d'une clé peuvent utiliser OpenSSL pour convertir en fichiers appropriés en utilisant 'openssl pkcs12 -provider default -provider legacy -in CERT.pfx -out FILE.pem' suivi des indicateurs appropriés pour dépouiller un certificat et une clé ('-nocerts -nodes')

## Utilisation d'OpenSSL uniquement
Sans-papiers.