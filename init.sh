#!/bin/bash
apt-get update
apt-get install -y
apt install curl -y
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
sleep 2
export NVM_DIR="$HOME/.nvm"
\. "$NVM_DIR/nvm.sh"
nvm install 20
node -v
npm -v
apt install gnupg -y
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
apt update
apt install yarn -y
yarn --version
tail -f /dev/null