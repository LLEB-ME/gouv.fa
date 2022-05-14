+++
title= "Connecting to the Farer network"
+++

# Connecting via Tailscale to Farer servers
Tailscale will automatically adjust your DNS to allow domains such as `*.fa` to use Farer DNS servers. In lamest terms, Tailscale will make `.fa` domains magically work while still keeping the load on Farer servers light. You can see view what is controlled from [our public Tailscale DNS settings.](/tailscale/DNS.txt)

## Connecting to Samba servers
You may need to request that the server owner enables `Windows File Sharing` if you are using a Windows computer.

- **Windows—** Open Windows Explorer and click the URL bar at the top. Type `\\` followed by the IP or hostname of the file server you are connecting to.
- **macOS—** Open Finder and press `Command` and `K` at the same time (alternatively, go to the `Go` tab and select `Connect to Server...`. Type `smb://` followed by the IP or hostname of the file server you are connecting to.
- **iOS—** Open the Files app and press the three dots in the top-right, followed by the "Connect to server" button. Type the IP or hostname of the file server you are connecting to. You may need to prefix with `smb://` to the IP or hostname if the connection does not work.