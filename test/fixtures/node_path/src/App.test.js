/** This source code is forked from https://github.com/facebook/create-react-app **/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

test('loads modules absolutely with NODE_PATH', () => {
  const div = document.createElement('div');
  return new Promise(resolve => {
    ReactDOM.render(<App onReady={resolve} />, div);
  });
});
