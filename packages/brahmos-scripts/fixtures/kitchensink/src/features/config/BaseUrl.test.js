/** This source code is forked from https://github.com/facebook/create-react-app **/

import React from 'react';
import ReactDOM from 'react-dom';
import NodePath from './BaseUrl';

describe('BASE_URL', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    return new Promise(resolve => {
      ReactDOM.render(<NodePath onReady={resolve} />, div);
    });
  });
});
