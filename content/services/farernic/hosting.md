+++
title= "Hosting a webiste on Farer servers"
aliases= ["/N2103"]
date= "2022-05-15T03:47:00Z"
+++

After [registering a domain,](/N2102) you can either host out-of-network or in-network.
- **In-network (recommended)—** your site or service is hosted on official hardware or hosted on owned servers that have an internal IP address.
- **Out-of-network—** your site or service is hosted on <abbr title="A server that you pay for every month. Some hosts are Exoscale, OVH, Hetzner, et al.">rented servers</abbr> that does not have an internal IP address.

Hosting in-network does not require you to provide your own server power, as we offer free static web hosting via FarerNIC.

## Setting up a website using FarerNIC
1. **Create a website—** your website must be able to compile to purely static files using a Docker container.
2. **Upload your website and container to a new Git repository.** This repository must use [the internal Git server](https://git.fa) so that FarerNIC is able to access your site's source code.
3. **[Request hosting via FarerNIC.](https://nic.fa/request-hosting)**
4. **Grant permissions for FarerNIC to read the repository—** this is needed for the site to be cloned to Farer's servers for hosting.

Your DNS records will be automatically updated for websites hosted using FarerNIC. All you have to do is make a commit to your Git repository and the site will be updated automatically.

## Getting your domain hosted inside the Farer network
If you already have a domain outside of Farer, you can request Git access to be able to mirror your website inside of Farer group to other Farer members the fastest speeds to your website. Your request should be done in a similar fashion, ommiting the reason for registration and replacing it with a proof of ownership.
