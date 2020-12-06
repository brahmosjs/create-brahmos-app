/** This source code is forked from https://github.com/facebook/create-react-app **/

import React from 'react';
import ReactDOM from 'react-dom';
import RestParameters from './RestParameters';

describe('rest parameters', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    return new Promise(resolve => {
      ReactDOM.render(<RestParameters onReady={resolve} />, div);
    });
  });
});
