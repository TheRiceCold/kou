#!/usr/bin/env bash

# Install packages
apt update -qq
apt install curl unzip -y

# Install Bun
curl -fsSL https://bun.sh/install | bash

# Install Amplify CLI
curl -sL https://aws-amplify.github.io/amplify-cli/install | bash && $SHELL

source /root/.bashrc

# Start app in development mode 
bun i && bun --bun run dev
