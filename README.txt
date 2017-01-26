Had to install babel-polyfill to get the app to work in ie 11.

npm install --save-dev babel-polyfill

added "import 'babel-polyfill' to top of app's entry point (main.js)

added 'babel-polyfill' to entry: array in webpack.config.js