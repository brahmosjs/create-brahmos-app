// @remove-on-eject-begin
/** This source code is forked from https://github.com/facebook/create-react-app **/
// @remove-on-eject-end
'use strict';

// This is a custom Jest transformer turning style imports into empty objects.
// http://facebook.github.io/jest/docs/en/webpack.html

module.exports = {
  process() {
    return 'module.exports = {};';
  },
  getCacheKey() {
    // The output is always the same.
    return 'cssTransform';
  },
};
