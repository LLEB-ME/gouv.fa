+++
title= "Deploying a K3s node"
+++

To begin, you must first prepare the server node to run k3s. Install Alpine Linux and configure it with the following packages.

```# apk add tailscale curl```

- `tailscale` is used to connect to the private Wireguard network that we route through, rather than dealing with the security risks that come from using the publicly routed Internet.
- `curl`, if not already installed, is used to pull down the k3s install script.

## Tailscale setup
Once installed, configure Tailscale by starting the daemon and adding the machine to the network.

```# tailscale up```

You should be prompted with a link that you can open in your browser to authorize the device. Verify that the proper ports (`6443`, `22`, `80`, `443`, etc) are open in the ACL, which you can modify from the Tailscale dashboard. Please ensure that you reflect your changes onto the mirrored copy [here](https://github.com/LLEB-ME/wiki/blob/main/tailscale/ACL.json).

## Server node setup
You can now pull down the k3s install script with *one* minor adjustment—disabling Traefik. Traefik is an ingress controller that routes traffic intended for the cluster to the proper pod. We use the NGINX ingress controller, and as such must disable the pre-installed Traefik on install. This can be done by making sure that the OpenRC service which starts the k3s server has a flag to disable Traefik.

```# curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="--no-deploy traefik" sh -```

The environment variable set here ensures that the installer script knows to add the following flag `--no-deploy traefik` to the OpenRC service file.

From this point, the installer script should do it's job and automatically start your k3s cluster, which can be verified by running:

```$ kubectl get nodes```

## Tweaks
I recommend that you copy the config file found at `/etc/rancher/k3s/k3s.yaml` to your personal machine. This is so you can manage the k3s cluster locally, without needing to ssh in every time. This will only work if you're connected to the Tailscale network (if remote) or are on the same local network as the cluster. I personally store it at `$HOME/.config/k3s.yaml` and set my profile to export `KUBECONFIG` pointing to its location.

```
# Kubernnetnenenetnetnetnetes
export KUBECONFIG=$HOME/.config/k3s.yaml
```

Once added, there are a couple more things needed to ensure that local access works. Make sure you edit the config file and change the `server` field to point to the IP of the machine, since it will be pointing to localhost by default. This is also a good time to ensure that the port `6443` is open on the ACL. Lastly, install `kubectl` and `helm` on your local machine. You can verify access works by running

```$ kubectl get nodes```

You should see the node listed as `READY`.
