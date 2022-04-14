+++
title= "Setting up single sign-on"
+++

Before we begin, ensure that you have the NGINX Ingress Controller up and running. You can verify this by 
just visiting the IP address of the machine and seeing if you get an NGINX page. You should also have `helm` 
installed.

## Preparing repo
Install the authentik Helm repo with the following two commands:

```
$ helm repo add authentik https://charts.goauthentik.io
$ helm repo update
```

## Installing Authentik
Authentik will be our SSO / OIPC provider. First setup an `authentik.yaml` file that you can find the 
template for [here](https://github.com/LLEB-ME/k3s-test). I recommend cloning the repository to have 
all the templates available. Ensure that you randomly generate and set your 
`secret_key`. The `postgresql.password` and `postgresqlPassword` values should match. Once your 
`authentik.yaml` file is ready, run the following to actually install:

```
$ helm upgrade --install sso authentik/authentik -f authentik.yaml
```

## Adding certificates
Generate certificates for the subdomain you'll be using to access authentik. In our case, we've generated 
internal certs for `sso.lleb`. Add the certificates as Kubernetes secrets by running:

```
$ kubectl create secret tls [secretName] --cert=path/to/cert --key=path/to/key
```

The public key certificate for --cert must be DER format as per Section 5.1 of RFC 7468, and must match the 
given private key for --key (PKCS #8 in DER format; Section 11 of RFC 7468).

## Preparing ingress controller
The install should've automatically created a service with exposed ports, so now it's up to us to get NGINX 
to allow traffic through. Get the `ingress/authentik.yaml` file from [here](https://github.com/lleb-me/infra) or create a file with the 
following content inside:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  # Name of ingress rule
  name: sso
spec:
  tls:
  - hosts:
    # Host for TLS cert, should match domain in rules section
    - sso.lleb
    # Set this to the secret we created earlier
    secretName: cert.sso.lleb
  rules:
  # Domain to accept traffic under
  - host: sso.lleb
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            # Where to route traffic to on the backend (think of this like a proxy)
            name: ak-outpost-authentik-embedded-outpost
            port:
              number: 9000
  # The amount of time I spent debugging NGINX not working is because of this line. NGINX only accepts 
traffic from shit labeled with this class name.
  ingressClassName: nginx
```

After minor configuration, deploying the rule should be as simple as:

```
$ kubectl apply -f ingress/authentik.yaml
```

You should now be able to access authentik at the set [domain](https://sso.lleb).
