# node sass boilerplate

1. This boilerplate uses:
  * node
  * sass
  * browsersync
  * 7-1 pattern (https://sass-guidelin.es/#the-7-1-pattern)

2. Run "bash setup.sh" in the terminal to setup the project
The setup script will:
  * check if browser-sync is installed globally and install it if not.
  * install the npm dependencies for the project
  * add 7-1 sass structure
  * create git repo and commit

3. available npm commands
  * start develop: npm run start
  * build for production: npm run build:css

4. remove all installed from bash
sudo rm -R node_modules .git sass-boilerplate; rm package-lock.json

