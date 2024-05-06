# Xed Web
A Social Media Web App Project. View live production [here]()

<!-- BEGIN: Getting Started -->
## Getting Started

### 1. Clone Repository
```
git clone https://github.com/thericecold/kou
```

### 2. Choose your setup
Option 1 Prerequesites: Local Environment Setup
- [Bun] >= 1.1.6
- [Act] >= 0.2.54

Install and run development server on `http://localhost:3000`
```
cd app; bun i; bun dev
```

Option 2 Prerequesites: Containerized Setup
- [Docker] or (alternative) [Podman] & [Podman Compose][podman-compose] >= 1.1.0

Build image and run container
```
docker-compose up # podman-compose up (if your using podman)
```

Option 3 Prerequesites: Nix Shell/Flake Setup
- [Nix Package Manager][nix]
- (Optional) [Direnv]

If you have `direnv` installed
```
cd <repo directory>
direnv allow
```
Install and run development server on `http://localhost:3000`
```
cd app; bun i; bun dev
```
<!-- END: Getting Started -->

<!-- BEGIN: Test Commands -->
## Test Commands
Test Lint
```
bun lint
```

Test a github action workflow locally
```
act -j <job-name>
```
<!-- END: Test Commands -->

<!-- Links -->
[bun]: https://bun.sh
[podman]: https://podman.io
[podman-compose]: https://podman.io
[docker]: https://docs.docker.com/engine/install
[direnv]: https://direnv.net/docs/installation.html
[act]: https://github.com/nektos/act
[nix]: https://nixos.org/download
