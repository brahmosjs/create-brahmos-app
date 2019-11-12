// @remove-file-on-eject
/** This source code is forked from https://github.com/facebook/create-react-app **/
'use strict';

const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  presets: [require.resolve('babel-preset-react-app')],
  babelrc: false,
  configFile: false,
});
