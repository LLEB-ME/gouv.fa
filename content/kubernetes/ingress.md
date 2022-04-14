+++
title= "Installing NGINX Ingress"
+++

Before we begin, make sure that you have `helm` installed and have access to your cluster (either through ssh or local `kubectl`)

Add the NGINX helm repository: 

```
$ helm repo add nginx-stable https://helm.nginx.com/stable
$ helm repo update
```

You may then install the chart. You'll notice that if you visit the external IP for your cluster / node / machine you'll start getting 404 pages.

```
$ helm install ingress nginx-stable/nginx-ingress
```
