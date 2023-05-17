+++
title= "9 April Staff Meeting Notes"
description= ""
date= 2023-04-09
draft= false
aliases = ["/sm/2023-04-09"]
updated= 2023-05-14

[extra]
author= "Matt Ronchetto"
+++

## Summary of meeting
- Migration to BIND from CoreDNS has been confirmed with a 3-0 vote.
- New deadlines have been established for staff. See [Remanagement of Staff Deadlines](#remanangement-of-staff-deadlines) for more information.
- MicroOS has been confirmed to be a suitable operating system for use in Farer -owner and -rented servers. This is in addition to Alpine Linux (using Diskless Mode/`lbu`).

Next meeting scheduled for 24 April, 2023 at 16:00 PT / 19:00 ET

## Agenda

### Proposal to migrate from CoreDNS to BIND
Proposal by: Matthew RONCHETTO<br>
Proposal: [/sm/2023-04-09/migrate-to-bind.md](/sm/2023-04-09/migrate-to-bind.md) ([sig](/sm/2023-04-09/migrate-to-bind.md.sig))

**Decision :** Migration to CoreDNS to BIND has been decided unanimously in a 3-0 vote.

### Remanagement of Staff Deadlines
Proposal by: Matthew RONCHETTO<br>

The current deadlines are as follows:
  - 31 March, 2023 (missed)— Have design system and all internal sites finished. Update farer.group with gouv.fa.
  - 31 April, 2023— Have custom SSO solution rolled out. Have girth of services in Directory live.
  - 31 May, 2023— Have domain registration and DNS record editing rolled out and open-sourced publicly.

The following tasks need to be scheduled or re-scheduled:
  - Completion of design system
  - Completion of internal websites and update of farer.group
  - Roll-out of SSO solution
  - Roll-out of the "girth" of services in Directory
  - Roll-out domain registartion and DNS record editing to members
  - Completion of PDF forms for administrative actions (eg. getting an ID card)
  - Migration of ansible-X repositories to core-service or similar repositories
  - Refactor of Ansible to Kubernetes
  - Research into development and deployment of in-house ID cards
  - Roll-out of internal Mail server
  - Research provisions to delegate more hardware to regions
  - Deployment of Gouv.fa to other Farer -owned and -rented servers to prevent downtime of this core resource.
  - Deployment of internal Git server *and build server*

**Decisions :** The new deadlines are as follows :
  - 30 April, 2023 — Have design system and all internal sites finished. Update farer.group with gouv.fa.
  - 30 April, 2023 – Refactor from Ansible to Kubernetes (Caddy web server, Zola/Vélo site building, BIND DNS servers, et al.)
  - 31 May, 2023 – Have custom SSO solution rolled out. Have girth of services in Directory live.
  - 31 May, 2023 — Have domain registration and DNS record editing rolled out and open-sourced publicly.
  - 31 May, 2023 — Completion of PDF forms for administrative actions (eg. getting an ID card)
  - 30 June, 2023 – Roll-out of internal Mail server (Cyrus IMAP for server) and app password utility (with SSO)
  - 30 June, 2023 – Deployment of internal Git server *and build server* (Sourcehut)

### Re-deployment of `us-ksan-rilakkuma` to test MicroOS
Guided by: Matthew RONCHETTO<br>

openSUSE MicroOS has been installed and is currently used to host Gouv.fa. It uses an immutable root and will allow servers to be in compliance with [2022-003](/fedlex/2022-003) with greater ease.

**Decision :** MicroOS is suitable for deployment on Farer -owned and -rented servers.

In the coming months, testing of the Nitrokey HSM 2 in the scope of The Farer Group and hardware encryption with Farer-owned servers. The device is sold at 99 EUR (TTC; *toutes taxes comprises*/all taxes included). Further research into HSMs is necessary to ensure all owned servers can be brought into complaince with 2022-003.
