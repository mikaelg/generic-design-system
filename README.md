# generic design system

1. This boilerplate uses:
  * nvm
  * node (10.14.2)
  * imagemin-cli
  * sass
  * autoprefixer
  * browsersync

2. Run "bash setup.sh" in the terminal to setup the project.
The setup script will:
  * check if browser-sync is installed globally and install it if not.
  * install the npm dependencies for the project
  * optionally: create git repo and commit

3. available npm commands
  * start develop: nvm exec npm run start
  * build for production: nvm exec npm run build:css
  * optimize images: nvm exe npm run imagemin

4. remove all installed from bash
sudo rm -R node_modules; rm package-lock.json

